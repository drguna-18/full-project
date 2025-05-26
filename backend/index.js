const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const { doc, setDoc, getDocs, collection, updateDoc, deleteDoc  } = require("firebase/firestore");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { db, storage } = require("./firebase");

const bufferStorage = multer.memoryStorage();
const upload = multer({ storage: bufferStorage });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uploadToFirebase = async (file, folder) => {
  const storageRef = ref(storage, `${folder}/${Date.now()}_${file.originalname}`);
  await uploadBytes(storageRef, file.buffer);
  return await getDownloadURL(storageRef);
};

const convertFilesToUrls = async (license) => {
  const fileFields = [
    "addressProof", "ownerIdDocument", "businessProof", "nocFromOwner",
    "panCard", "aadhaarCard", "bankStatement", "incorporation",
    "projectReport", "landDocuments", "locationMap", "layoutPlan"
  ];

  const updated = { ...license };

  for (const field of fileFields) {
    if (license[field] && typeof license[field] === "string") {
      try {
        const storagePath = `${field}/${license[field]}`;
        const url = await getDownloadURL(ref(storage, storagePath));
        updated[field] = url;
      } catch (error) {
        console.warn(`Could not get URL for ${field}:`, error.message);
      }
    }
  }

  return updated;
};

// POST Trade License
app.post("/tradeLicense", upload.fields([
  { name: "addressProof", maxCount: 1 },
  { name: "ownerIdDocument", maxCount: 1 },
  { name: "businessProof", maxCount: 1 },
  { name: "nocFromOwner", maxCount: 1 },
]), async (req, res) => {
  try {
    const formFields = req.body;
    const files = req.files;

    const fileUploads = {};
    for (const key in files) {
      const file = files[key][0];
      const url = await uploadToFirebase(file, key);
      fileUploads[key] = url;
    }

    const docId = `${formFields.businessName.replace(/\s+/g, "_")}_${Date.now()}`;
    const tradeLicenseData = {
      ...formFields,
      ...fileUploads,
      isApproved: false,
      submittedAt: new Date().toISOString(),
    };

    await setDoc(doc(db, "TradeLicenses", docId), tradeLicenseData);
    res.status(200).json({ message: `Trade license submitted.`, docId });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Trade license submission failed" });
  }
});

// GET Trade Licenses with File URLs
app.get("/api/getTradeLicense", async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, "TradeLicenses"));
    const licenses = await Promise.all(
      snapshot.docs.map(async (doc) => await convertFilesToUrls({ id: doc.id, ...doc.data() }))
    );
  
    
    res.json(licenses);
  } catch (err) {
    res.status(500).json({ error: "Error fetching trade licenses" });
  }
});

// PATCH Approve Trade License
app.patch("/api/approveTradeLicense/:id", async (req, res) => {
  try {
    const licenseRef = doc(db, "TradeLicenses", req.params.id);
    await updateDoc(licenseRef, { isApproved: true });
    res.json({ message: `Approved.` });
  } catch (err) {
    res.status(500).json({ error: "Approval failed" });
  }
});

// DELETE Trade License by ID
app.delete("/api/deleteTradeLicense/:id", async (req, res) => {
  try {
    const licenseRef = doc(db, "TradeLicenses", req.params.id);
    await deleteDoc(licenseRef);
    res.json({ message: `Trade license with ID ${req.params.id} deleted.` });
  } catch (err) {
    console.error("Delete failed:", err);
    res.status(500).json({ error: "Failed to delete trade license" });
  }
});

// Repeat for GST License
app.post("/gstLicense", upload.fields([
  { name: "panCard", maxCount: 1 },
  { name: "aadhaarCard", maxCount: 1 },
  { name: "addressProof", maxCount: 1 },
  { name: "bankStatement", maxCount: 1 },
  { name: "incorporation", maxCount: 1 },
]), async (req, res) => {
  try {
    const formFields = req.body;
    const files = req.files;

    const fileUploads = {};
    for (const key in files) {
      const file = files[key][0];
      const url = await uploadToFirebase(file, key);
      fileUploads[key] = url;
    }

    const gstId = `${formFields.businessName.replace(/\s+/g, "_")}_${Date.now()}`;
    const gstData = {
      ...formFields,
      ...fileUploads,
      isApproved: false,
      submittedAt: new Date().toISOString(),
    };

    await setDoc(doc(db, "GstLicenses", gstId), gstData);
    res.status(200).json({ message: "GST submitted.", gstId });
  } catch (err) {
    res.status(500).json({ error: "GST submission failed" });
  }
});

// GET GST Licenses with file URLs
app.get("/api/getGstLicense", async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, "GstLicenses"));
    const licenses = await Promise.all(
      snapshot.docs.map(async (doc) => await convertFilesToUrls({ id: doc.id, ...doc.data() }))
    );
    res.json(licenses);
  } catch (err) {
    res.status(500).json({ error: "Error fetching GST licenses" });
  }
});

// PATCH Approve GST
app.patch("/api/approveGstLicense/:id", async (req, res) => {
  try {
    const licenseRef = doc(db, "GstLicenses", req.params.id);
    await updateDoc(licenseRef, { isApproved: true });
    res.json({ message: `Approved.` });
  } catch (err) {
    res.status(500).json({ error: "Approval failed" });
  }
});

// 🔁 Add similar for /environmentalClearance if needed...

app.listen(5000, () => {
  console.log(`Server running at http://localhost:5000`);
});
