import { createCanvas, loadImage } from "canvas";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";

const api =  async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.query;

  // canvasを作成し、背景画像をロードする
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  const backgroundImage = await loadImage(join(process.cwd(), 'public', 'ogp.png'));
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // タイトルを描画
  ctx.font = 'bold 64px Arial';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.fillText(title as string, canvas.width / 2, canvas.height / 2);

  //canvasをDataURLに変換し、それをレスポンスとして返す
  const dataUrl = canvas.toDataURL();
  console.log(dataUrl);
  res.status(200).json({url: dataUrl});
}

export default api;


