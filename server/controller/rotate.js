var formidable = require('formidable');
var sharp = require('sharp');
var fs = require('fs')
var Path = require("path");

exports.ROTATE = (req, res) => {

    var form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {

        var degree = parseInt(fields.degree)

        if (degree && Number.isInteger(degree) && degree !== 0) {
            const Type = files.file.type

            if (Type === "image/jpeg" || Type === "image/jpg" || Type === "image/png" || Type === "image/webp" || Type === "image/tiff" || Type === "image/avif" || Type === "application/octet-stream") {

                rotate(files.file, Type, degree, res)

            } else {
                {/* handeling errors (format) */ }
                return res.status(415).send("Wrong format");
            }
        } else {
            {/* handeling errors (input) */ }
            return res.status(400).send("Wrong inputs , only use numbers and dont use 0");
        }
    })

}

async function rotate(file, type, degree, res) {

    const name = `Rotated+${Date.now()}+${file.name}`
    const path = `public/rotate/${name}`
    let Format = type.split('/')[1]

    await sharp(file.path)
        .rotate(degree)
        .toFormat(`${Format}`)
        .toFile(path);


    console.log(path)

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
