import React, { FC, MouseEventHandler } from "react";

type Props = {
  action: MouseEventHandler;
};
const Bars: FC<Props> = ({ action }) => {
  return (
    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={action}>
      <path d="M24 1.5H0V0H24V1.5ZM24 13.5H0V12H24V13.5ZM24 7.48828H0V6H24V7.48828Z" fill="white" />
    </svg>
  );
};

export default Bars;
