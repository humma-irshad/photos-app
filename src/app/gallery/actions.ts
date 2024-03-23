"use server";

import cloudindary from "cloudinary";

export async function setAsFavorite(
  public_id: string,
  markAsFavorite: boolean
) {
  if (markAsFavorite) {
    await cloudindary.v2.uploader.add_tag("favorite", [public_id]);
  } else {
    await cloudindary.v2.uploader.remove_tag("favorite", [public_id]);
  }
}
