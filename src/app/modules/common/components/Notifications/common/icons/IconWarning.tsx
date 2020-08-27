// @ts-nocheck
import React from 'react';

export const IconWarning = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg width="16px" height="14px" viewBox="0 0 16 14" {...props}>
    <defs>
      <filter
        x="-0.6%"
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
      <path
        d="M239 .272L251.728 13H270a2 2 0 012 2v312a2 2 0 01-2 2H2a2 2 0 01-2-2V15a2 2 0 012-2h224.272L239 .272z"
        id="c"
      />
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
        d="M0 13.818h16L8 0 0 13.818zm8.727-2.182H7.273v-1.454h1.454v1.454zm0-2.909H7.273V5.818h1.454v2.91z"
        id="d"
      />
    </defs>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g transform="translate(-1133 -80) translate(1119 51) translate(0 17)">
        <path d="M0 0L272 0 272 52 0 52z" />
        <g transform="translate(14 12)">
          <mask id="e" fill="#fff">
            <use xlinkHref="#d" />
          </mask>

          <g mask="url(#e)" fill="#FFAB4F">
            <path transform="translate(-4 -5)" d="M0 0H24V24H0z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
