import * as React from "react";

import { Svg } from "./CleanSlate";

const SVGWrapper = Svg;

export interface SVGIconProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  stroke?: string;
  transform?: string;
}

export function SVGIcon(props: SVGIconProps) {
  return (
    <SVGWrapper
      width={props.width || "100%"}
      style={props.style}
      height={props.height || "100%"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.viewBox}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={props.fill}
      stroke={props.stroke}
      className={props.className}
      transform={props.transform}
    >
      {props.children}
    </SVGWrapper>
  );
}
