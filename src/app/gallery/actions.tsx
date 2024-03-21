"use server";

import { revalidatePath } from "next/cache";
import cloudindary from "cloudinary";

export async function setAsFavorite(
  public_id: string,
  markAsFavorite: boolean,
  path: string
) {
  if (markAsFavorite) {
    await cloudindary.v2.uploader.add_tag("favorite", [public_id]);
  } else {
    await cloudindary.v2.uploader.remove_tag("favorite", [public_id]);
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));
  revalidatePath(path);
}
