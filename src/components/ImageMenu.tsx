"use client";

import Link from "next/link";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Menu, Pencil } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlbumModal } from "./AlbumModal";
import { SearchResults } from "@/app/gallery/page";

export default function DropdownMenuCheckboxes({
  image,
}: {
  image: SearchResults;
}) {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36">
          <DropdownMenuItem
            asChild
            className="flex items-center hover:cursor-pointer"
          >
            <AlbumModal image={image} />
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="flex items-center outline-none rounded- hover:bg-neutral-800"
          >
            <Link
              className="p-2"
              href={`edit?publicId=${encodeURIComponent(image.public_id)}`}
            >
              <Pencil className="mr-4 w-4 h-4" />
              Edit Image
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
