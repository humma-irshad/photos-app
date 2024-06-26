import cloudinary from "cloudinary";

import FavoritesList from "./FavoritesList";
import { SearchResults } from "../gallery/page";

async function FavoritePage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResults[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">FAVORITE IMAGES</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <FavoritesList initialResources={results.resources} />
        </div>
      </div>
    </section>
  );
}

export default FavoritePage;
