import moment from "moment";
import imageCompression from "browser-image-compression";

const config = {
  bucketName: process.env.NEXT_PUBLIC_S3_BUCKET,
  region: process.env.NEXT_PUBLIC_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  dirName: "prospect",
};

export const uploadImagesToS3 = async (files, wipNum) => {
  const { uploadFile } = require("react-s3");
  let uploadResponds = [];
  const handleUpload = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      await uploadFile(compressedFile, {
        ...config,
        dirName: `prospect/${wipNum}`,
      })
        .then(async (data) => {
          uploadResponds.push({
            src: data?.location,
          });
          return data;
        })
        .catch((err) => {
          return err;
        });
    } catch (error) {}
  };
  for (let index = 0; index < files.length; index++) {
    var file = dataURLtoFile(
      files[index].blob,
      "CC_" + moment(Date.now()).format("MMMM_DD_YYYY_h_mm_ss_a") + "_" + ".png"
    );
    await handleUpload(file);
  }
  return uploadResponds;
};

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
