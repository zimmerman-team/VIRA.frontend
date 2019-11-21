import { createClient } from 'react-fetching-library';

import { requestHostInterceptor } from './requestHostInterceptor';

const HOST = process.env.REACT_APP_PROJECT_URL as string;

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST)],
});
