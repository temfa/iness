import { AboutBody } from "@/components/about-body";
import { Achievements } from "@/components/achievements";
import { Early } from "@/components/early";
import { MusicInfo } from "@/components/music";
import { Upcoming } from "@/components/upcoming";
import React from "react";

const About = () => {
  return (
    <>
      <AboutBody />
      <Early />
      <MusicInfo />
      <Achievements />
      <Upcoming />
    </>
  );
};

export default About;
