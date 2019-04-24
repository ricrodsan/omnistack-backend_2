const multer = require('multer');
const crypto = require('crypto');

const filePath  = require('../config/fileConfig');



module.exports = {
    dest: filePath,
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, filePath);
        },
        filename:(req, file, callback) => {

            crypto.randomBytes(16, (err, hash) => {
 
                if (err) callback(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                callback(null, file.key);
            })
        }
    })

}