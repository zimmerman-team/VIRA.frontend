import React from 'react';
import { Picture } from 'app/assets/icons/Picture';
import { Video } from 'app/assets/icons/Video';
import { Document } from 'app/assets/icons/Document';

export function getMediaIcon(type: string) {
  switch (type) {
    case 'picture':
      return <Picture />;
    case 'video':
      return <Video />;
    case 'document':
      return <Document />;
    default:
      return <></>;
  }
}
