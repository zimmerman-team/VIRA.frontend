import find from 'lodash/find';
import { TileData } from 'app/components/layout/GridList/singleLineGridList/index';

const imageExts = ['png', 'jpg', 'gif', 'svg', 'jpeg'];
const videoExts = ['mp4', 'mov', 'mpeg', 'ogg'];

function getMediaTypeFromExtension(extension: string) {
  if (find(imageExts, (ext: string) => ext === extension)) {
    return 'picture';
  }
  if (find(videoExts, (ext: string) => ext === extension)) {
    return 'video';
  }
  return 'document';
}

export function getMediaTileData(media: string[]): TileData[] {
  return media.map((m: string) => {
    const splits = m.split('/');
    const name = splits[splits.length - 1].split('-')[1];
    const splits2 = name.split('.');
    const ext = splits2[splits2.length - 1];
    return {
      name,
      type: getMediaTypeFromExtension(ext),
      url: `/media/${splits[splits.length - 1]}`,
    };
  });
}
