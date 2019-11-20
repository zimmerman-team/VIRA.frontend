import React from 'react';

export const IconMenuOpen = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-21-20h64v721h-64z" fill="#242E42" />
      <path d="M24 0H0v24h24z" />
      <path
        d="M21 18H8v-2h13v2zm0-5H11v-2h10v2zm0-7v2H8V6h13zM3 15.59L6.58 12 3 8.41 4.41 7l5 5-5 5L3 15.59z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);
