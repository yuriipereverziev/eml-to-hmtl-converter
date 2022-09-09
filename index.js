const fs = require('fs');
const EmlParser = require('eml-parser');
const path = require('path')
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('public/uploads'))
app.use(bodyParser.urlencoded({extended: false}))

const PORT = process.env.PORT || 80


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})

const upload = multer({storage: storage}).single('eml');


// app.get('/public', (request, response) => {
//     response.sendFile(__dirname + '/index.html');
// })
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/public/index.html'));
});


app.post('/convert', (request, response) => {
    upload(request, response, (err) => {
        if (err) {
            console.log(err)
        } else {

            const fileName = path.basename(request.file.filename)

            new EmlParser(fs.createReadStream('public/uploads/' + fileName))
                .parseEml()
                .then(result => {
                    response.send(result.html);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    })
})


app.listen(PORT, () => {
    console.log('app is listening')
})
