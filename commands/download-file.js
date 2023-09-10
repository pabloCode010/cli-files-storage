import fetch from "node-fetch";
import fs from "fs";
import path from "path";

export async function download(filename, baseURL) {
  try {
    const completeURL = `${baseURL}/files-storage/download?filename=${filename}`;
    console.log("Request to >>", completeURL);

    const response = await fetch(completeURL, { method: "GET" });

    if (response.status !== 200){
      console.log(await response.json());
      return null;
    }

    const arrayBuffer = await response.arrayBuffer();
    const data = Buffer.from(arrayBuffer);
    const pathToSave = path.join(process.cwd(), filename);
    fs.writeFileSync(pathToSave, data);
    console.log("Saved file:", pathToSave);
  } catch (error) {
    console.error("an error occurred");
  }
}
