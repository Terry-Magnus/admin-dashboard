import { SvgIcon } from "@mui/material";
import { TIconProps } from "./types";

const TrashIcon = (props: TIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25 4.5H14.75"
          stroke="#FF754C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 4.5V3C5 2.60218 5.15804 2.22064 5.43934 1.93934C5.72065 1.65804 6.10218 1.5 6.5 1.5H9.5C9.89783 1.5 10.2794 1.65804 10.5607 1.93934C10.842 2.22064 11 2.60218 11 3V4.5M13.25 4.5V15C13.25 15.3978 13.092 15.7794 12.8107 16.0607C12.5294 16.342 12.1478 16.5 11.75 16.5H4.25C3.85218 16.5 3.47064 16.342 3.18934 16.0607C2.90804 15.7794 2.75 15.3978 2.75 15V4.5H13.25Z"
          stroke="#FF754C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 8.25V12.75"
          stroke="#FF754C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 8.25V12.75"
          stroke="#FF754C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default TrashIcon;
