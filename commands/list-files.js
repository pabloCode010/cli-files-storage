import fetch from "node-fetch";
import fs from "fs";

export async function listFiles(baseURL) {
  try {
    const completeURL = `${baseURL}/files-storage/ls`;
    console.log("Request to >>", completeURL);
    const response = await fetch(completeURL, { method: "GET" });
    const files = await response.json();

    console.log("\nResponse:");
    console.log("Files:");
    files.forEach((element) => {
      console.log(`  ${element}`);
    });
  } catch (error) {
    console.error("an error occurred");
  }
}
