import { SvgIcon } from "@mui/material";
import { TIconProps } from "./types";

const ExportIcon = (props: TIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.25 12H9.75V5.25H12L9 1.5L6 5.25H8.25V12Z" fill="#8F95B2" />
        <path
          d="M3.75 16.5H14.25C15.0773 16.5 15.75 15.8273 15.75 15V8.25C15.75 7.42275 15.0773 6.75 14.25 6.75H11.25V8.25H14.25V15H3.75V8.25H6.75V6.75H3.75C2.92275 6.75 2.25 7.42275 2.25 8.25V15C2.25 15.8273 2.92275 16.5 3.75 16.5Z"
          fill="#8F95B2"
        />
      </svg>
    </SvgIcon>
  );
};

export default ExportIcon;
