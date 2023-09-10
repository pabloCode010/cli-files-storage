import fetch from "node-fetch";
import fs from "fs";
import path from "path";

export async function upload(filename, baseURL) {
  try {
    //is relative
    if(!path.isAbsolute(filename)){
      filename = path.join(process.cwd(), filename);
    }
    //base is filename base
    const { base } = path.parse(filename);
    const stats = fs.statSync("rum.js");
    const fileSizeInBytes = stats.size;

    let data = fs.readFileSync(filename);
    const completeURL = `${baseURL}/files-storage/upload?filename=${base}`;

    console.log("Request to >>", completeURL);
    const response = await fetch(completeURL, {
      method: "POST",
      headers: {
        "Content-length": fileSizeInBytes,
      },
      body: data,
    });

    console.log("\nResponse:");
    console.log(await response.json());
  } catch (error) {
    console.error("an error occurred");
  }
}