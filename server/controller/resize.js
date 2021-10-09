var formidable = require('formidable');
var sharp = require('sharp');
var fs = require('fs');
var Path = require("path");

exports.RESIZE = (req, res) => {

    var form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {

        var Width = parseInt(fields.width)
        var Height = parseInt(fields.height)

        if ((fields.width && Number.isInteger(Width) && Width > 0) && (fields.height && Number.isInteger(Height) && Height > 0)) {
            const Type = files.file.type

            if (Type === "image/jpeg" || Type === "image/jpg" || Type === "image/png" || Type === "image/webp" || Type === "image/tiff" || Type === "image/avif" || Type === "application/octet-stream") {


                resize(files.file, Type, Width, Height, res)

            } else {
                {/* handeling errors (format) */ }
                return res.status(415).send("Wrong format");
            }
        } else {
            {/* handeling errors (input) */ }
            return res.status(400).send("Wrong inputs , only use numbers");
        }
    })

}

async function resize(file, type, width, height, res) {

    const name = `Resized+${Date.now()}+${file.name}`
    const path = `public/resize/${name}`
    let Format = type.split('/')[1]

    await sharp(file.path)
        .resize(width, height)
        .toFormat(`${Format}`)
        .toFile(path);


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
