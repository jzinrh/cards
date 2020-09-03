import React from 'react';

export default function SevenOfHearts({ width }: { width: number }) {
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
        <path
          id="suit"
          d="M16.491,0.199
            c7.12-0.475,10.831,5.639,11.556,10.456c0.432,0.766,0.668,0.55,0.834-0.042c0.348-6.186,5.855-11.24,10.955-10.55
            c8.3,0.108,13.344,9.393,11.926,17.251c-1.733,9.6-6.877,15.38-10.771,21.332C36.585,44.811,30.654,53.715,28.742,58
            c0,0-6.027-9.222-13.87-20.067c-5.243-7.252-9.44-15.11-9.831-21.875C4.595,8.327,7.751,1.399,16.491,0.199L16.491,0.199z"
        />
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
