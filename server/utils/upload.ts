const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req: any, file: any, cb: any) {
    cb(null, 'media');
  },
  filename: function(req: any, file: any, cb: any) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage }).array('file');

export function uploadFiles(req: any, res: any) {
  upload(req, res, (err: any) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.files);
  });
}
