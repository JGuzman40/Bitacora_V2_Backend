const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "micromvp", // Carpeta en Cloudinary donde se guardarán
    resource_type: "auto",       // Detecta automáticamente si es audio
    allowed_formats: ["mp3", "wav", "m4a", "ogg", "webm"], // Formatos permitidos
  },
});

// console.log("📦 Multer y Cloudinary configurados para:", cloudinary.config().cloud_name);
const upload = multer({ storage });

module.exports = upload;
