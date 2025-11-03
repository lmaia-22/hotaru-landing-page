import { ImageResponse } from "next/og";

export const alt = "Hotaru — The Shared Clipboard That Forgets";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "#0B1220",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFD84D",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="12" cy="14" rx="3" ry="4" fill="#FFD84D" />
            <circle cx="12" cy="12" r="2" fill="#FFD84D" opacity="0.9" />
            <path
              d="M9 10 L12 8 L15 10"
              stroke="#FFD84D"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M9 12 L12 10 L15 12"
              stroke="#FFD84D"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />
          </svg>
          <span>Hotaru</span>
        </div>
        <div style={{ marginTop: 40, color: "#E6E9F2", fontSize: 40 }}>
          The Shared Clipboard That Forgets
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

