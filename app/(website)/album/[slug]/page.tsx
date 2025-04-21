import { AlbumBanner } from "@/components/album-banner";
import { AlbumList } from "@/components/album-list";
import React from "react";

const AlbumLists = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <>
      <AlbumBanner />
      <AlbumList />
    </>
  );
};

export default AlbumLists;
