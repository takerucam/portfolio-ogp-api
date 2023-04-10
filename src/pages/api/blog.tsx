import { NextRequest, ImageResponse } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  // publicフォルダ内にあるogp.pngを参照
  const imageUrl = `${req.nextUrl.origin}/ogp.png`;
  // クエリパラメータからtitleを取得
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");

  if (!title) {
    return new ImageResponse(<>titleを指定してください</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          backgroundImage: `url(${imageUrl})`,
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#000000" }}>{title}</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
