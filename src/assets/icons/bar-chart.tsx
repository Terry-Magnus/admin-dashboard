import { SvgIcon } from "@mui/material";
import { TIconProps } from "./types";

const BarChartIcon = (props: TIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.24485 14.7815L10.238 10.8913L13.6522 13.5732L16.5812 9.79291"
          stroke={props.customcolor || "#8F95B2"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="19.9954"
          cy="4.20023"
          r="1.9222"
          stroke={props.customcolor || "#8F95B2"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9245 3.12014H7.65675C4.64531 3.12014 2.77803 5.25286 2.77803 8.2643V16.3467C2.77803 19.3581 4.60869 21.4817 7.65675 21.4817H16.2609C19.2723 21.4817 21.1396 19.3581 21.1396 16.3467V9.30778"
          stroke={props.customcolor || "#8F95B2"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default BarChartIcon;
