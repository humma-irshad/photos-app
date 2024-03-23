"use server";

import cloudinary from "cloudinary";

import { SearchResults } from "@/app/gallery/page";

export async function addImageToAlbum(album: string, image: SearchResults) {
  await cloudinary.v2.api.create_folder(album);

  let parts = album.split("/");
  if (parts.length > 1) {
    parts.splice(1);
  }
  const publicId = parts.join("/");

  cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);
}
