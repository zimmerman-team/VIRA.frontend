import React from 'react';

export const IconReports = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg width="14px" height="12px" viewBox="0 0 14 12" {...props}>
    <defs>
      <path
        d="M0 10.667h13.333V8H0v2.667zm1.333-2h1.334V10H1.333V8.667zM0 0v2.667h13.333V0H0zm2.667 2H1.333V.667h1.334V2zM0 6.667h13.333V4H0v2.667zm1.333-2h1.334V6H1.333V4.667z"
        id="a"
      />
    </defs>
    <g
      transform="translate(-26 -255)"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <path fill="#FFF" d="M0 0H1440V1471H0z" />
      <g transform="translate(25 253) translate(1.333 2.667)" opacity={0.65}>
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#44556B" xlinkHref="#a" />
        <g mask="url(#b)" fill="#FFF" stroke="#D9D9D9">
          <path
            transform="translate(-1.333 -2.667)"
            d="M0.5 0.5H15.5V15.5H0.5z"
          />
        </g>
      </g>
    </g>
  </svg>
);
