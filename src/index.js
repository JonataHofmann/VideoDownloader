const fs = require("fs");
const path = require("path");
const request = require("sync-request");

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ": " + val);
// });

let arg1 = process.argv[2];
const caminhoArquivos = arg1.endsWith("\\") ? arg1 : arg1 + "\\";
const outputVideos = caminhoArquivos + "videos\\";

const directoryPath = path.join(caminhoArquivos);
console.log("directoryPath:" + directoryPath);

fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach(function (file) {
    if (file.match("[0-9a-zA-z-_]{1,}.json")) {
      let output = outputVideos;
      console.log(">Output:" + output);
      download(caminhoArquivos + file, output);
    }
  });
});

function download(arquivo, output) {
  console.log("> Arquivo:" + arquivo);
  let rawdata = fs.readFileSync(arquivo);
  console.log("> Arquivo:" + rawdata);

  let videos = JSON.parse(rawdata);

  if (!fs.existsSync(output)) {
    console.log("> Criando Pasta de output: " + output);
    fs.mkdirSync(output);
  }

  console.log("> Count: " + videos.length);
  for (var i = 0; i < videos.length; i++) {
    let url = videos[i].downloadURL;
    let name = videos[i].title;
    let extension = videos[i].downloadExtension;
    let filePath = output + name + extension;

    console.log("> Vídeo: " + name);
    let sucess = downloadVideo(url, filePath);
    if (sucess) {
      videos.splice(i, 1);
      i--;
    }
  }

  if (videos.length > 0) {
    fs.writeFileSync(arquivo, JSON.stringify(videos));
  } else {
    fs.unlinkSync(arquivo);
  }
}

function downloadVideo(url, filePath) {
  try {
    console.log("> Iniciando Download");
    var res = request("GET", url);
    if (res.statusCode != 200) {
      return false;
    }
    console.log("> Gravando o arquivo.");
    fs.writeFileSync(filePath, res.body);
    return true;
  } catch (error) {
    console.log("> Erro:" + error);
    return false;
  }
}
