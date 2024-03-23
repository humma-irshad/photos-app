"use client";

import { CldImage } from "next-cloudinary";
import { useState, useTransition } from "react";

import Heart from "@/components/ui/icons/Heart";
import FullHeart from "@/components/ui/icons/FullHeart";
import ImageMenu from "@/components/ImageMenu";
import { setAsFavorite } from "../app/gallery/actions";
import { SearchResults } from "../app/gallery/page";

function CloudinaryImage(
  props: any & {
    imageData: SearchResults;
    onUnheart?: (unheartedResource: SearchResults) => void;
  }
) {
  const [transistion, startTransition] = useTransition();

  const [isFavorited, setIsFavorited] = useState(
    props.imageData.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={props.imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            props.onUnheart(props.imageData);
            startTransition(() => {
              setIsFavorited(false);
              setAsFavorite(props.imageData.public_id, false);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavorite(props.imageData.public_id, true);
            });
          }}
        />
      )}
      <ImageMenu image={props.imageData} />
    </div>
  );
}

export default CloudinaryImage;
