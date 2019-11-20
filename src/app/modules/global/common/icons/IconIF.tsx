import React from 'react';

export const IconIF = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg width="12px" height="12px" viewBox="0 0 12 12" {...props}>
    <defs>
      <path
        d="M10.667 7.467v-6.4A1.07 1.07 0 009.6 0H3.2a1.07 1.07 0 00-1.067 1.067v6.4c0 .586.48 1.066 1.067 1.066h6.4a1.07 1.07 0 001.067-1.066zM4.8 5.333L5.883 6.78 7.467 4.8 9.6 7.467H3.2l1.6-2.134zM0 2.133V9.6c0 .587.48 1.067 1.067 1.067h7.466V9.6H1.067V2.133H0z"
        id="a"
      />
    </defs>
    <g
      transform="translate(-27 -309)"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <path fill="#FFF" d="M0 0H1440V1471H0z" />
      <g transform="translate(25 307) translate(2.667 2.667)" opacity={0.65}>
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#70889E" xlinkHref="#a" />
        <g mask="url(#b)" fill="#FFF" stroke="#D9D9D9">
          <path
            transform="translate(-2.667 -2.667)"
            d="M0.5 0.5H15.5V15.5H0.5z"
          />
        </g>
      </g>
    </g>
  </svg>
);
