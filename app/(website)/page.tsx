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
            songTitle: "Same Mistake",
            text: "INE$$",
            src: "/images/same-mistake.jpg",
            name: "same-mistake",
          },
          {
            songTitle: "I Adore you",
            text: "INE$$",
            src: "/images/adore-you.png",
            name: "adore-you",
          },
        ]}
      />
      <LatestSingle
        title="ALBUMS"
        type="Album"
        list={[
          {
            songTitle: "Physical",
            text: "INE$$",
            src: "/images/physical-cover.jpg",
            name: "physical",
          },
          {
            songTitle: "DEBUT ALBUM INE$$",
            text: "INE$$",
            src: "/images/debut.png",
            name: "debut",
          },
        ]}
      />
      <Introduce />
      <Get />
    </>
  );
}
