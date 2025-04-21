import { MusicBanner } from "@/components/music-banner";
import { MusicBody } from "@/components/music-body";
import React from "react";

const Music = () => {
  return (
    <>
      <MusicBanner title="DON’T TURN YOUR BACK ON ME" type="Single" text="Crotia records, 2020" />
      <MusicBody />
    </>
  );
};

export default Music;
