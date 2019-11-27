import React from 'react';

export const IconSystem = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg width={18} height={18} {...props}>
    <defs>
      <path
        d="M2 0h370a2 2 0 012 2v445a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"
        id="b"
      />
      <path
        d="M1358 51.272L1370.728 64H1389a2 2 0 012 2v312a2 2 0 01-2 2h-268a2 2 0 01-2-2V66a2 2 0 012-2h224.272L1358 51.272z"
        id="d"
      />
      <path
        d="M9.002 12.15c-1.786 0-3.238-1.413-3.238-3.15 0-1.737 1.452-3.15 3.238-3.15S12.24 7.263 12.24 9c0 1.737-1.452 3.15-3.238 3.15zm6.875-2.268c.037-.288.064-.576.064-.882 0-.306-.027-.594-.064-.882l1.952-1.485a.446.446 0 00.11-.576l-1.85-3.114a.471.471 0 00-.564-.198l-2.304.9c-.481-.36-1-.657-1.563-.882L11.306.378A.447.447 0 0010.853 0H7.152a.447.447 0 00-.454.378l-.351 2.385a7.16 7.16 0 00-1.564.882l-2.304-.9a.457.457 0 00-.564.198L.065 6.057a.436.436 0 00.11.576l1.952 1.485A6.946 6.946 0 002.063 9c0 .297.027.594.064.882L.175 11.367a.446.446 0 00-.11.576l1.85 3.114c.11.198.36.27.564.198l2.304-.9c.481.36 1 .657 1.564.882l.351 2.385a.447.447 0 00.454.378h3.7a.447.447 0 00.454-.378l.352-2.385a7.16 7.16 0 001.563-.882l2.304.9c.213.081.453 0 .564-.198l1.85-3.114a.446.446 0 00-.11-.576l-1.952-1.485z"
        id="e"
      />
      <filter
        x="-.9%"
        y="-.6%"
        width="101.9%"
        height="101.6%"
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
        />
      </filter>
      <filter
        x="-15.4%"
        y="-9.1%"
        width="130.9%"
        height="125.6%"
        filterUnits="objectBoundingBox"
        id="c"
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
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-90 -16)">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <use fill="#FFF" xlinkHref="#b" />
      </g>
      <text
        fontFamily="Inter-SemiBold, Inter"
        fontSize={20}
        fontWeight={500}
        fill="#000"
        transform="translate(-90 -16)"
      >
        <tspan x={24} y={43}>
          {'Project (Netherlands)'}
        </tspan>
      </text>
      <g transform="translate(-1132 -234)">
        <use fill="#000" filter="url(#c)" xlinkHref="#d" />
        <use fill="#2F3B52" xlinkHref="#d" />
      </g>
      <path d="M-13-10h272v52H-13z" />
      <mask id="f" fill="#fff">
        <use xlinkHref="#e" />
      </mask>
      <use fill="#FFF" xlinkHref="#e" />
      <g mask="url(#f)" fill="#05C985">
        <path d="M-3-3h24v24H-3z" />
      </g>
    </g>
  </svg>
);
