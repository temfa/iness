import { AlbumList } from "@/components/album-list";
import { MusicBanner } from "@/components/music-banner";
import React from "react";

const AlbumLists = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <>
      <MusicBanner title="Physical" text="Iness" type="Album" />
      <AlbumList />
    </>
  );
};

export default AlbumLists;
