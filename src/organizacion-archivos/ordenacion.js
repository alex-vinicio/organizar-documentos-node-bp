//file system
const fs = require("fs");

module.exports = function archivosOrg(pathArchivo) {
  if (fs.existsSync(pathArchivo)) {
    var folderContainer = [
      "Documentos",
      "Imágenes",
      "Vídeos",
      "Música",
      "Excel",
      "Aplicaciones",
      "otros",
    ];

    folderContainer.forEach((elementFolder) => {
      fs.mkdir(
        `${pathArchivo}\\${elementFolder}`,
        { recursive: true },
        (err) => {
          if (!err) {
            //lectura de los archivos
            fs.readdir(pathArchivo, (err, files) => {
              if (!err) {
                let onlyFiles = files.filter((file) => {
                  return fs.statSync(`${pathArchivo}\\${file}`).isFile();
                });
                onlyFiles.forEach((file) => {
                  setTimeout(function () {
                    if (elementFolder == "Documentos") {
                      if (validationDocument(file)) {
                        if (fs.existsSync(`${pathArchivo}\\${file}`)) {
                          moveInFolder(pathArchivo, elementFolder, file);
                        }
                      }
                    } else if (elementFolder == "Imágenes") {
                      if (
                        file.endsWith(".jpg") ||
                        file.endsWith(".png") ||
                        file.endsWith(".JPG") ||
                        file.endsWith(".PNG") ||
                        file.endsWith(".jpeg") ||
                        file.endsWith(".JPEG")
                      ) {
                        if (fs.existsSync(`${pathArchivo}\\${file}`)) {
                          moveInFolder(pathArchivo, elementFolder, file);
                        }
                      }
                    } else if (elementFolder == "Vídeos") {
                      if (file.endsWith(".mp4") || file.endsWith(".avi")) {
                        if (fs.existsSync(`${pathArchivo}\\${file}`)) {
                          moveInFolder(pathArchivo, elementFolder, file);
                        }
                      }
                    } else if (elementFolder == "Música") {
                      if (file.endsWith(".mp3") || file.endsWith(".wav")) {
                        if (fs.existsSync(`${pathArchivo}\\${file}`)) {
                          moveInFolder(pathArchivo, elementFolder, file);
                        }
                      }
                    } else if (elementFolder == "Excel") {
                      if (
                        file.endsWith(".xlsx") ||
                        file.endsWith(".xls") ||
                        file.endsWith(".pptx")
                      ) {
                        if (fs.existsSync(`${pathArchivo}\\${file}`)) {
                          moveInFolder(pathArchivo, elementFolder, file);
                        }
                      }
                    } else if (elementFolder == "Aplicaciones") {
                      if (file.endsWith(".exe")) {
                        if (fs.existsSync(`${pathArchivo}\\${file}`)) {
                          moveInFolder(pathArchivo, elementFolder, file);
                        }
                      }
                    } else {
                      if (fs.existsSync(`${pathArchivo}\\${file}`)) {
                        moveInFolder(pathArchivo, elementFolder, file);
                      }
                    }
                  }, 100);
                });
              }
            });
          }
        }
      );
    });
  }
};

function validationDocument(file) {
  if (
    file.endsWith(".txt") ||
    file.endsWith(".docx") ||
    file.endsWith(".doc") ||
    file.endsWith(".pdf")
  ) {
    return true;
  } else {
    return false;
  }
}
function moveInFolder(pathArchivo, elementFolder, file) {
  try {
    fs.rename(
      `${pathArchivo}\\${file}`,
      `${pathArchivo}\\${elementFolder}\\${file}`,
      (err) => {
        if (!err) {
        }
      }
    );
  } catch (error) {}
}
