"use client";

import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <CldImage
        width="960"
        height="600"
        src=""
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
