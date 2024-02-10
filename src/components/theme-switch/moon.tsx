import { FC } from "react";

export const LightModeMoon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 65 65"
      fill="none"
    >
      <g filter="url(#filter0_ddii_23_496)">
        <rect
          width="44.6047"
          height="44.6047"
          rx="22.3023"
          transform="matrix(-1 3.99602e-09 3.99602e-09 1 54.7672 10.395)"
          fill="#FFC187"
          fillOpacity="0.96"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddii_23_496"
          x="0.435504"
          y="0.667926"
          width="64.0588"
          height="64.0587"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.86355" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.756863 0 0 0 0 0.529412 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_23_496"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-3.24236" dy="5.40394" />
          <feGaussianBlur stdDeviation="2.16158" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.717122 0 0 0 0 0.717122 0 0 0 0 0.717122 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_23_496"
            result="effect2_dropShadow_23_496"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_23_496"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.16158" />
          <feGaussianBlur stdDeviation="2.16158" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.816106 0 0 0 0 0.645833 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_23_496"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2.16158" />
          <feGaussianBlur stdDeviation="2.16158" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.631795 0 0 0 0 0.2875 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_23_496"
            result="effect4_innerShadow_23_496"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const DarkModeMoon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 45 45"
      fill="none"
    >
      <rect
        width="44.6047"
        height="44.6047"
        rx="22.3023"
        transform="matrix(-1 3.99602e-09 3.99602e-09 1 45 0.39502)"
        fill="#1E1E1E"
      />
      <path
        d="M25.8934 9.17747C18.4163 7.4226 10.9324 12.0614 9.17751 19.5384V19.5384C7.42265 27.0155 12.0614 34.4994 19.5385 36.2543L20.1026 36.3867L20.6667 36.5191C28.1437 38.2739 35.6277 33.6352 37.3825 26.1581V26.1581C39.1374 18.6811 34.4987 11.1971 27.0216 9.44226L25.8934 9.17747Z"
        fill="#EFA73F"
      />
      <path
        d="M28.9855 11.3184C23.66 12.4842 20.2879 17.7463 21.4537 23.0718V23.0718C22.6194 28.3972 27.8816 31.7693 33.207 30.6036L33.6088 30.5156L34.0105 30.4277C39.336 29.2619 42.7081 23.9998 41.5423 18.6743V18.6743C40.3766 13.3489 35.1145 9.97679 29.789 11.1425L28.9855 11.3184Z"
        fill="#1E1E1E"
      />
    </svg>
  );
};
