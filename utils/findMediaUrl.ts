import { Maybe, UploadFileEntity, UploadFileEntityResponse } from './types';
const URI = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'http://localhost:2337';
const findMediaUrl = (
  media: Maybe<UploadFileEntityResponse> & Maybe<UploadFileEntity>| undefined
): string | undefined => {
  let finalPath: string | undefined = '';


  
  try {
    // if media comes from object storage than don't append URI
    if (media?.data && media?.data?.attributes?.url.includes('http')) {
      finalPath = media?.data?.attributes?.url;
      return finalPath;
    };
    if (media?.attributes && media?.attributes?.url.includes('http')) {
      finalPath = media?.attributes?.url;
      return finalPath;
    };

    if(media?.data){
      finalPath = `${URI}${media?.data?.attributes?.url}`;
    }
    else if (media?.attributes) {
      finalPath = `${URI}${media.attributes.url}`;
    }
    else{
      finalPath = `${media?.url}`;
    }
    if (finalPath.includes('undefined')) {
      throw new Error('Contains undefined');
    }
  } catch {
    finalPath = undefined;
  }
  return finalPath;
};

export default findMediaUrl;


