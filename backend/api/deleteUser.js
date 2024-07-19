const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("../path/to/serviceAccountKey.json");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const { userId } = req.body;

  try {
    await admin.auth().deleteUser(userId);
    res.status(200).send({ message: "User account deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting user account: " + error.message });
  }
};
