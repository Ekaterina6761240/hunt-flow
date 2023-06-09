import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === 'pdf') {
      cb(null, './public/pdf');
    } else if (file.fieldname === 'img') {
      cb(null, './public/img');
    }
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

export default multer({
  storage,
});
