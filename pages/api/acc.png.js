// import { createCanvas, loadImage } from "canvas";
// import moment from "moment";

// const createOgp = async (req, res) => {
//   const WIDTH = 250;
//   const HEIGHT = 52;
//   const DX = 0;
//   const DY = 0;
//   const canvas = createCanvas(WIDTH, HEIGHT);
//   const ctx = canvas.getContext("2d");
//   ctx.fillStyle = "rgba(0, 0, 0, 0)"; // Transparent black
//   ctx.fillRect(DX, DY, WIDTH, HEIGHT);
//   const image = await loadImage("public/images/acc-text-without-date-web.png");
//   ctx.drawImage(image, DX, DY, WIDTH, HEIGHT);
//   ctx.fillStyle = "#025b78";
//   ctx.textAlign = "center";
//   ctx.textBaseline = "middle";
//   ctx.fillText(moment().format("MM/DD/YYYY"), 211, 27.5);
//   const buffer = canvas.toBuffer();

//   res.writeHead(200, {
//     "Content-Type": "image/png",
//     "Content-Length": buffer.length,
//   });
//   res.end(buffer, "binary");
// };

// export default createOgp;
