import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x29Ca3D6F3565BBa421Abce91C82bBE462F2cd3F4",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Hunter x Hunter License",
        description: "This NFT will give you access to Hunter-X-HunterDAO!",
        image: readFileSync("scripts/assets/license.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()