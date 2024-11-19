import { SvgIcon } from "@mui/material";
import { TIconProps } from "./types";

const BagIcon = ({ alternate, ...props }: TIconProps) => {
  return (
    <SvgIcon {...props}>
      {!alternate ? (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0137 20H5.6659C2.59954 20 0.247137 18.8924 0.915329 14.4348L1.69336 8.39359C2.10526 6.16934 3.52402 5.31808 4.76888 5.31808H14.9474C16.2105 5.31808 17.5469 6.23341 18.0229 8.39359L18.8009 14.4348C19.3684 18.389 17.0801 20 14.0137 20Z"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.151 5.0984C14.151 2.71232 12.2167 0.778031 9.83066 0.778031V0.778031C8.68166 0.773162 7.57805 1.22619 6.76386 2.03695C5.94967 2.8477 5.49198 3.94939 5.49199 5.0984H5.49199"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7963 9.60183H12.7506"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.96567 9.60183H6.91991"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9133 14.3147L17.1444 8.12007C16.676 5.90964 15.3503 5 14.0865 5H3.93171C2.65022 5 1.28034 5.84597 0.882639 8.12007L0.104905 14.3147C-0.531424 18.8629 1.81062 20 4.86853 20H13.1585C16.2075 20 18.4789 18.3535 17.9133 14.3147ZM6.097 10.1486C5.60889 10.1486 5.21321 9.74131 5.21321 9.23893C5.21321 8.73655 5.60889 8.32929 6.097 8.32929C6.5851 8.32929 6.98079 8.73655 6.98079 9.23893C6.98079 9.74131 6.5851 10.1486 6.097 10.1486ZM11.002 9.23893C11.002 9.74131 11.3977 10.1486 11.8858 10.1486C12.3739 10.1486 12.7696 9.74131 12.7696 9.23893C12.7696 8.73655 12.3739 8.32929 11.8858 8.32929C11.3977 8.32929 11.002 8.73655 11.002 9.23893Z"
            fill="#130F26"
          />
          <path
            opacity="0.4"
            d="M13.9739 4.77432C13.977 4.85189 13.9621 4.92913 13.9303 5H12.4932C12.4654 4.92794 12.4506 4.85153 12.4497 4.77432C12.4497 2.85682 10.8899 1.30238 8.96575 1.30238C7.04164 1.30238 5.48184 2.85682 5.48184 4.77432C5.49502 4.84898 5.49502 4.92535 5.48184 5H4.00989C3.9967 4.92535 3.9967 4.84898 4.00989 4.77432C4.12172 2.10591 6.32499 0 9.00494 0C11.6849 0 13.8882 2.10591 14 4.77432H13.9739Z"
            fill="#130F26"
          />
        </svg>
      )}
    </SvgIcon>
  );
};

export default BagIcon;
