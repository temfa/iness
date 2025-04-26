"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAppSelector } from "@/redux/store/store";
import Close from "@/svgs/close";
import { useDispatch } from "react-redux";
import { clearSong } from "@/redux/slice/song";

export const Play = () => {
  const song = useAppSelector((store) => store.song);

  const [active, setActive] = useState(false);
  const [realSong, setRealSong] = useState<undefined | string>("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (song === null) {
      setActive(false);
      setRealSong(undefined);
    } else {
      setActive(true);
      setRealSong(song);
    }
  }, [song]);
  return (
    active && (
      <div className={styles.container}>
        <Close action={() => dispatch(clearSong())} />
        <AudioPlayer
          // onAbort={action("onAbort")}
          // onCanPlay={action("onCanPlay")}
          // onCanPlayThrough={action("onCanPlayThrough")}
          // onEnded={action("onEnded")}
          // onPlaying={action("onPlaying")}
          // onSeeking={action("onSeeking")}
          // onSeeked={action("onSeeked")}
          // onLoadStart={action("onLoadStart")}
          // onLoadedMetaData={action("onLoadedMetaData")}
          // onLoadedData={action("onLoadedData")}
          // onError={action("onError")}
          // onListen={action("onListen")}
          // onVolumeChange={action("onVolumeChange")}
          // onPause={action("onPause")}
          // onPlay={action("onPlay")}
          // onChangeCurrentTimeError={action("onChangeCurrentTimeError")}
          // onClickPrevious={action("onClickPrevious")}
          // onClickNext={action("onClickNext")}
          src={realSong}
          onPlay={() => console.log("onPlay")}
          volume={0.8}
          showSkipControls
          progressUpdateInterval={100}
          autoPlay
          autoPlayAfterSrcChange
        />
      </div>
    )
  );
};
