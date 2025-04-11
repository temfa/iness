import { Get } from "@/components/get";
import { HomeBanner } from "@/components/home-banner";
import { Introduce } from "@/components/introduce";
import { LatestSingle } from "@/components/latest-single";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <LatestSingle title="LATEST SINGLES" type="Single" />
      <LatestSingle title="ALBUMS" type="Album" />
      <Introduce />
      <Get />
    </>
  );
}
