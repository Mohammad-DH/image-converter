var formidable = require('formidable');
var sharp = require('sharp');
var fs = require('fs');
var Path = require("path");

exports.CONVERT = (req, res) => {

    //geting the input
    var form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {

        const TYPE = files.file.type

        if (TYPE === "image/jpeg" || TYPE === "image/jpg" || TYPE === "image/png" || TYPE === "image/webp" || TYPE === "image/tiff" || TYPE === "image/avif" || TYPE === "application/octet-stream") {

            convert(files.file, TYPE, fields.format, res)

        } else {
            //handeling errors (format) 
            return res.status(415).send("Wrong format");
        }

    })

}
//convert function
async function convert(file, type, input, res) {
    let Format = type.split('/')[1]
    const name = `Converted+${Date.now()}+${file.name.split('.')[0]}.${input}`
    const path = `public/convert/${name}`


    //filtering the format
    if ((Format === input) || (Format === "jpeg" && input === "jpg")) {
        return res.status(400).send("same format");
    } else {
        await sharp(file.path)
            .toFile(path);

        //cleaning the file after time out
        setTimeout(() => {

            fs.unlink(Path.join(process.cwd(), path), (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }, 30000);

        return res.status(200).json({ name: name, link: path })
    }

}
