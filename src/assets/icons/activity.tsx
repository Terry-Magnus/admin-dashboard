import { SvgIcon } from "@mui/material";
import { TIconProps } from "./types";

const ActivityIcon = ({ alternate, ...props }: TIconProps) => {
  return (
    <SvgIcon {...props}>
      {!alternate ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.37143 9.20171V16.0618"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.0381 5.91913V16.0618"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6286 12.8268V16.0618"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2428 2.73756C13.2428 4.95855 15.0459 6.75902 17.2702 6.75902C17.5151 6.75782 17.7594 6.73431 18 6.68878V14.6615C18 18.0156 16.0215 20 12.6624 20H5.34636C1.97851 20 0 18.0156 0 14.6615V7.3561C0 4.00195 1.97851 2 5.34636 2H13.3131C13.2659 2.243 13.2423 2.49001 13.2428 2.73756ZM11.15 12.8966L14.0078 9.20878V9.19122C14.2525 8.86247 14.1901 8.39889 13.8671 8.14634C13.7108 8.02568 13.5122 7.97345 13.3167 8.00159C13.1211 8.02972 12.9453 8.1358 12.8295 8.29561L10.4201 11.3951L7.6766 9.23512C7.51997 9.11309 7.32071 9.05922 7.12381 9.08565C6.92691 9.11208 6.74898 9.2166 6.63019 9.37561L3.67562 13.1863C3.57177 13.3158 3.51586 13.4771 3.51734 13.6429C3.5002 13.9781 3.71187 14.2826 4.03238 14.3838C4.35288 14.485 4.70138 14.3573 4.88031 14.0732L7.35125 10.8771L10.0948 13.0283C10.2508 13.1541 10.4514 13.2111 10.6504 13.1863C10.8494 13.1615 11.0297 13.0569 11.15 12.8966Z"
            fill={props.customcolor || "#130F26"}
          />
          <circle
            opacity="0.4"
            cx="17.5"
            cy="2.5"
            r="2.5"
            fill={props.customcolor || "#130F26"}
          />
        </svg>
      )}
    </SvgIcon>
  );
};

export default ActivityIcon;