const multer = require('multer')
const MulterCfg = require('../config/multerCfg')
const { Foto } = require('../Models/Foto')


const uploads = multer(MulterCfg).single('profilePic');

const uploadController = (req, res) => {
  return uploads(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ errors: [err.code] });
    }
    try {
      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const upload = await Foto.create({ filename, originalname, aluno_id });

      return res.json(upload);
    } catch (e) {
      return res.status(400).json({ errors: 'Aluno não existe.' });
    }
  });
}

module.exports = { uploadController }