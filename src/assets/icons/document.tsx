import { SvgIcon } from "@mui/material";
import { TIconProps } from "./types";

const DocumentIcon = ({ alternate, ...props }: TIconProps) => {
  return (
    <SvgIcon {...props}>
      {!alternate ? (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7162 14.2234H5.4962"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7162 10.0369H5.4962"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.2513 5.86008H5.4963"
            stroke={props.customcolor || "#8F95B2"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9086 0.749786C12.9086 0.749786 5.2316 0.753786 5.2196 0.753786C2.4596 0.770786 0.750603 2.58679 0.750603 5.35679V14.5528C0.750603 17.3368 2.4726 19.1598 5.2566 19.1598C5.2566 19.1598 12.9326 19.1568 12.9456 19.1568C15.7056 19.1398 17.4156 17.3228 17.4156 14.5528V5.35679C17.4156 2.57279 15.6926 0.749786 12.9086 0.749786Z"
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
            opacity="0.4"
            d="M15.8088 7.021C15.3573 7.021 14.7592 7.011 14.0146 7.011C12.1987 7.011 10.7055 5.508 10.7055 3.675V0.459C10.7055 0.206 10.5036 0 10.253 0H4.96363C2.49517 0 0.5 2.026 0.5 4.509V15.284C0.5 17.889 2.59022 20 5.16958 20H13.0463C15.5058 20 17.5 17.987 17.5 15.502V7.471C17.5 7.217 17.299 7.012 17.0475 7.013C16.6247 7.016 16.1177 7.021 15.8088 7.021Z"
            fill={props.customcolor || "#130F26"}
          />
          <path
            opacity="0.4"
            d="M13.084 0.5673C12.785 0.2563 12.263 0.4703 12.263 0.9013V3.5383C12.263 4.6443 13.174 5.5543 14.28 5.5543C14.977 5.5623 15.945 5.5643 16.767 5.5623C17.188 5.5613 17.402 5.0583 17.11 4.7543C16.055 3.6573 14.166 1.6913 13.084 0.5673Z"
            fill={props.customcolor || "#130F26"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.9739 9.3876H9.3589C9.7699 9.3876 10.1039 9.0546 10.1039 8.6436C10.1039 8.2326 9.7699 7.8986 9.3589 7.8986H5.9739C5.5629 7.8986 5.2299 8.2326 5.2299 8.6436C5.2299 9.0546 5.5629 9.3876 5.9739 9.3876ZM5.974 14.3818H11.418C11.829 14.3818 12.163 14.0488 12.163 13.6378C12.163 13.2268 11.829 12.8928 11.418 12.8928H5.974C5.563 12.8928 5.23 13.2268 5.23 13.6378C5.23 14.0488 5.563 14.3818 5.974 14.3818Z"
            fill={props.customcolor || "#130F26"}
          />
        </svg>
      )}
    </SvgIcon>
  );
};

export default DocumentIcon;
