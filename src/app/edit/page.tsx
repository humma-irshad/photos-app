"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";

import { Button } from "@/components/ui/button";

function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "blur" | "grayscale"
  >(undefined);

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>
          <Button onClick={() => setTransformation("blur")}>Blur Image</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convert to Gray
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} width={300} height={200} alt="Some image" />
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="Some image"
              blur="1200"
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="Some image"
              grayscale
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default EditPage;
