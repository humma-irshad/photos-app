"use client";

import { CldImage } from "next-cloudinary";
import { useTransition } from "react";

import Heart from "@/components/ui/icons/Heart";
import FullHeart from "@/components/ui/icons/FullHeart";
import { setAsFavorite } from "./actions";
import { SearchResults } from "./page";

function ImagesGrid(props: any & { imageData: SearchResults, path: string }) {
  const [transistion, startTransition] = useTransition();

  const isFavorited = props.imageData.tags.includes("favorite");

  return (
    <div className="relative">
      <CldImage {...props} src={props.imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavorite(props.imageData.public_id, false, props.path);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavorite(props.imageData.public_id, true, props.path);
            });
          }}
        />
      )}
    </div>
  );
}

export default ImagesGrid;
