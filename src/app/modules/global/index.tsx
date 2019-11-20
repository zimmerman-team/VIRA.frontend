/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { GlobalLayout } from './layout';
/* project */

export default function GlobalModule() {
  useTitle(`Project - Home`);

  return <GlobalLayout />;
}
