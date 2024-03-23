"use client";

import { useState } from "react";

import { SearchResults } from "../gallery/page";
import CloudinaryImage from "../../components/CloudinaryImage";

function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResults[];
}) {
  const [resources, setResources] = useState(initialResources);

  const MAX_COLUMNS = 4;
  function getColumns(colIndex: number) {
    return resources.filter((result, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <>
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
                onUnheart={(unheartResource: SearchResults) => {
                  setResources((currentResource) =>
                    currentResource.filter(
                      (resource) =>
                        resource.public_id !== unheartResource.public_id
                    )
                  );
                }}
              />
            ))}
          </div>
        )
      )}
    </>
  );
}

export default FavoritesList;
