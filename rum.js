import { Command } from "commander";

import { download } from "./commands/download-file.js";
import { upload } from "./commands/upload-file.js";
import { listFiles } from "./commands/list-files.js";

//edit the url if you deployed your own server from https://github.com/AlgorithmXplorer/files-storage.git
//Make sure the url does not end in / or it will generate an error
const baseURL = "https://files-storage.pablo-arturoar3.repl.co";

const program = new Command();

program
  .command("upload <filename>")
  .description("Upload File To Server")
  .action((filename) => {
    upload(filename, baseURL);
  });

program
  .command("download <filename>")
  .description("Download File From Server")
  .action((filename) => {
    download(filename, baseURL);
  });

program
  .command("ls")
  .description("Get List Of Files")
  .action(() => {
    listFiles(baseURL);
  });

program.parse(process.argv);


//examples:

//node rum ls
//node rum upload file.txt
//node rum download hello.txt