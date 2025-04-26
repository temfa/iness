"use client";

import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { clearSong } from "@/redux/slice/song";
// import AOS from "aos";
// import "aos/dist/aos.css";

export function NewProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSong());
  }, [pathname, dispatch]);
  return <>{children}</>;
}
