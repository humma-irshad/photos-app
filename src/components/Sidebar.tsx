"use client";

import { Button } from "@/components/ui/button";
import { AlbumIcon } from "lucide-react";
import Heart from "./ui/icons/Heart";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className={"pb-12 w-1/5"}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="gallery">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Gallery
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="albums">
                <AlbumIcon
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                />
                Albums
              </Link>
            </Button>

            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="favorites">
                <Heart />
                Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
