const multer=require('multer');
const path=require('path');
const crypto=require('crypto');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads');
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12,(err,bytes)=>{
       
        const fn=bytes.toString("hex")+path.extname(file.originalname);
        cb(null, fn);
      })
      
    }
})
  
module.exports= multer({ storage: storage })