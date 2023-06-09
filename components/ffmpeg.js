import fs from "fs/promises";
import Path from "path";
import { exec } from "child_process";

export default async function getFileStructure(path) {
  const compressedFilesDir = `${path}/compressed`;

  return checkFileExists(compressedFilesDir)
    .then((dirExist) => {
      if (!dirExist) {
        return fs.mkdir(compressedFilesDir);
      }
      return true;
    })
    .then(() => fs.readdir(path, { withFileTypes: true }))
    .then((files) =>
      files.filter((file) => file.isFile()).map((file) => file.name)
    )
    .then((files) =>
      Promise.all(
        files.map((file) => {
          const pathToFile = `${path}/${file}`;
          const smallFileName = `${
            Path.parse(pathToFile).name
          }-ffmpeg-small.webp`;

          const smallFilePath = `${compressedFilesDir}/${smallFileName}`;
          return checkFileExists(smallFilePath).then((fileAlreadyExists) => {
            if (!fileAlreadyExists) {
              exec(`ffmpeg -i ${pathToFile} -vf scale=20:-1 ${smallFilePath}`);
            }

            return {
              image: pathToFile.replace("public\\", ""),
              smallImage: smallFilePath
                .replace("public\\", "")
                .replaceAll("\\", "/"),
            };
          });
        })
      )
    );
}

function checkFileExists(file) {
  return fs
    .access(file, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
