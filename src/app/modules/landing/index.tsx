/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { LandingLayout } from './layout';
/* project */

export default function Landing() {
  useTitle(`Project - Home`);

  return <LandingLayout />;
}
