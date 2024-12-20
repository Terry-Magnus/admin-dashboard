import { SvgIcon } from "@mui/material";
import { TIconProps } from "./types";

const SearchIcon = (props: TIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="10.786"
          cy="10.786"
          r="8.23951"
          stroke={props.customcolor || "#111827"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5168 16.9447L19.7471 20.1667"
          stroke="#111827"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default SearchIcon;
