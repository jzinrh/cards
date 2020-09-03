import React from 'react';

export default function TenOfDiamonds({ width }: { width: number }) {
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
          d="M0,31.505V0H3.11v31.505H0L0,31.505z M12.328,0c-2.994,0-5.4,2.687-5.4,6.021v19.461c0,3.336,2.406,6.021,5.4,6.021h1.746c2.994,0,5.406-2.686,5.406-6.021V6.022C19.481,2.686,17.069,0,14.074,0H12.328z M13.232,2.978c1.768,0,3.19,1.337,3.19,3.002v19.723c0,1.664-1.424,3.006-3.19,3.006c-1.771,0-3.191-1.342-3.191-3.006V5.98C10.039,4.315,11.461,2.978,13.232,2.978z"
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
