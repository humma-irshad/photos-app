import { useState } from "react";
import { FolderClosed } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchResults } from "@/app/gallery/page";
import { addImageToAlbum } from "./actions";

export function AlbumModal({ image }: { image: SearchResults }) {
  const [albumName, setAlbumName] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <FolderClosed className="mr-2 h-4 w-4" />
          <span>Add to Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type the album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-4">
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="album">Album</Label>
            <Input
              className="col-span-3"
              id="album"
              value={albumName}
              onChange={(event) => setAlbumName(event.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={() => {
                setOpen(false);
                addImageToAlbum(albumName, image);
              }}
            >
              Add to Album
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
