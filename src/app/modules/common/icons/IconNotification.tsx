import React from 'react';
import { useTranslation } from 'react-i18next';

export const IconNotification = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  const { t, i18n } = useTranslation();
  return (
    <svg width={20} height={24} {...props}>
      <defs>
        <filter
          x="-.5%"
          y="-6.8%"
          width="101.1%"
          height="113.5%"
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
          d="M8 20c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.64 3.36 2 5.92 2 9v5l-2 2v1h16v-1l-2-2zm-2 1H4V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
          id="b"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g filter="url(#a)" transform="translate(-1033 -75)">
          <g transform="translate(1035 76)">
            <mask id="c" fill="#fff">
              <use xlinkHref="#b" />
            </mask>
            <use fill="#000" fillRule="nonzero" xlinkHref="#b" />
            <g mask="url(#c)" fill="#3E4E6C">
              <path d="M-4-2h24v24H-4z" />
            </g>
          </g>
        </g>
        <text
          fontFamily="Inter-SemiBold, Inter"
          fontSize={14}
          fontWeight={500}
          letterSpacing={1.254}
          fill="#6F7173"
          transform="translate(-372 21)"
        >
          <tspan x={210.291} y={14}>
            {t('Projects')}
          </tspan>
        </text>
        <text
          fontFamily="Inter-SemiBold, Inter"
          fontSize={14}
          fontWeight={500}
          letterSpacing={1.254}
          fill="#222"
          transform="translate(-372 21)"
        >
          <tspan x={320.828} y={14}>
            {t('Grantee')}
          </tspan>
        </text>
        <text
          fontFamily="Inter-SemiBold, Inter"
          fontSize={14}
          fontWeight={500}
          letterSpacing={1.254}
          fill="#6F7173"
          transform="translate(-372 21)"
        >
          <tspan x={428.812} y={14}>
            {t('Reports')}
          </tspan>
        </text>
        <path fill="#25BAA4" d="M-52 53h70v4h-70z" />
      </g>
    </svg>
  );
};
