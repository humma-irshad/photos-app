import cloudinary from "cloudinary";

import UploadButton from "./UploadButton";
import ImagesGrid from "./ImagesGrid";

export type SearchResults = {
  public_id: string;
  tags: string[];
};

async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResults[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">GALLERY</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results?.resources.map((result) => (
            <ImagesGrid
              key={result.public_id}
              path="/gallery"
              imageData={result}
              width={400}
              height={300}
              alt="Description of my image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
