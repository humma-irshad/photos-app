"use client";

import { CldImage } from "next-cloudinary";

function ImagesGrid(props: any) {
  return <CldImage {...props} src={props.imageId} />;
}

export default ImagesGrid;
