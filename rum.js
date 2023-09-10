import { Command } from "commander";

import { download } from "./commands/download-file.js";
import { upload } from "./commands/upload-file.js";
import { listFiles } from "./commands/list-files.js";

const baseURL = "http://localhost:3000";

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