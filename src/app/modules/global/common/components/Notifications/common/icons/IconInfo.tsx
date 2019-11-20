import React from 'react';

export const IconInfo = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <filter
        x="-.6%"
        y="-6.1%"
        width="101.1%"
        height="112.3%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={1}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter
        x="-15.4%"
        y="-9.1%"
        width="130.9%"
        height="125.6%"
        filterUnits="objectBoundingBox"
        id="b"
      >
        <feOffset dy={12} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={12}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <path
        d="M1358 51.272L1370.728 64H1389a2 2 0 012 2v312a2 2 0 01-2 2h-268a2 2 0 01-2-2V66a2 2 0 012-2h224.272L1358 51.272z"
        id="c"
      />
      <path
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm1 7H7v6h2V7zM8 3.5a1 1 0 100 2 1 1 0 000-2z"
        id="d"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g filter="url(#a)" transform="translate(-853 -43)" fill="#FFF">
        <rect width={1136} height={106} rx={2} />
      </g>
      <g transform="translate(-1133 -131)">
        <use fill="#000" filter="url(#b)" xlinkHref="#c" />
        <use fill="#2F3B52" xlinkHref="#c" />
      </g>
      <path d="M-14-11h272v52H-14z" />
      <mask id="e" fill="#fff">
        <use xlinkHref="#d" />
      </mask>
      <use fill="#70889E" xlinkHref="#d" />
      <g mask="url(#e)" fill="#1F8EFA">
        <path d="M-4-4h24v24H-4z" />
      </g>
    </g>
  </svg>
);
