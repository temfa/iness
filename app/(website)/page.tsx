import { Get } from "@/components/get";
import { HomeBanner } from "@/components/home-banner";
import { Introduce } from "@/components/introduce";
import { LatestSingle } from "@/components/latest-single";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <LatestSingle
        title="LATEST SINGLES"
        type="Single"
        list={[
          {
            songTitle: "DON’T TURN YOUR BACK ON ME",
            text: "Crotia Records",
            src: "/images/song.png",
          },
          {
            songTitle: "DON’T TURN YOUR BACK ON ME",
            text: "Crotia Records",
            src: "/images/song.png",
          },
          {
            songTitle: "DON’T TURN YOUR BACK ON ME",
            text: "Crotia Records",
            src: "/images/song.png",
          },
        ]}
      />
      <LatestSingle
        title="ALBUMS"
        type="Album"
        list={[
          {
            songTitle: "Physical",
            text: "Iness",
            src: "/images/physical-cover.jpg",
          },
        ]}
      />
      <Introduce />
      <Get />
    </>
  );
}
