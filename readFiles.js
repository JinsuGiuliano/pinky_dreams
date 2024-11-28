import fs from 'fs';
import path from 'path';

const mainURL = "./imagenes-oficiales-drive/"

const expositores = 'expositores'
const apoyo_especial = 'apoyo_especial'
const patrocinadores = 'patrocinadores'
const rueda_negocio = 'rueda_negocios'
const apoyo_institucional = 'apoyo_institucional'
const auspiciantes = 'auspiciantes'
const media_partners = 'media_partners'



const directories = [ expositores, apoyo_especial, patrocinadores, rueda_negocio, apoyo_institucional, auspiciantes, media_partners ]

export const generatedata = () => { 
    let dump = {};
    directories.forEach((directory, index) => {
        console.log("directory:", mainURL + directory)
        const d = getImageFilesFromDirectory(mainURL + directory)
        dump[directory] = d;
    })

    console.log(dump)

}

generatedata()


// Function to get image file names from a directory
export function getImageFilesFromDirectory(directoryPath){
    // Supported image file extensions
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'];
    
    // Array to store image file names
    const imageFiles = [];

    // Read all files in the directory
    const files = fs.readdirSync(directoryPath);

    // Filter image files and add them to the array
    files.forEach((file) => {
        const fileExtension = path.extname(file).toLowerCase();
        if (imageExtensions.includes(fileExtension)) {
            let f = {
                empresa: file,
                url: path.join(directoryPath, file)
            } 

            imageFiles.push(f);
        }
    });

    return imageFiles;
}