import React from 'react';

export default function SevenOfDiamonds({ width }: { width: number }) {
  return (
    <svg
      version="1.2"
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 225 314"
      width="225px"
      height="314px"
      fill="#d40000"
    >
      <defs>
        <polygon id="suit" points="28.5,0 48.612,29 28.5,58 8.388,29" />
        <path
          id="numeral"
          d="M4.981,31.887C7.113,20.799,9.39,12.478,15.361,3.441H3.226v3.891H0V0h17.754l2.188,3.44c-6.34,6.797-12.146,28.769-11.119,28.446H4.981z"
        />
      </defs>

      <rect width="100%" height="100%" fill="#fefefe" />

      <g>
        <use xlinkHref="#numeral" transform="matrix(1,0,0,1,7,12)" />
        <use xlinkHref="#suit" transform="matrix(0.4,0,0,0.4,6,51)" />

        <use xlinkHref="#numeral" transform="matrix(-1,0,0,-1,218,302)" />
        <use xlinkHref="#suit" transform="matrix(-0.4,0,0,-0.4,218,263)" />
      </g>
    </svg>
  );
}
