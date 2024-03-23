import cloudinary from "cloudinary";

import UploadButton from "./UploadButton";
import CloudinaryImage from "../../components/CloudinaryImage";

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

  const MAX_COLUMNS = 4;
  function getColumns(colIndex: number) {
    return results.resources.filter(
      (result, idx) => idx % MAX_COLUMNS === colIndex
    );
  }

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">GALLERY</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
            (column, idx) => (
              <div className="flex flex-col gap-2" key={idx}>
                {column?.map((result) => (
                  <CloudinaryImage
                    key={result.public_id}
                    imageData={result}
                    width={400}
                    height={300}
                    alt="Description of my image"
                  />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
