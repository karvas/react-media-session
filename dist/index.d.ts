import React from 'react';
import { HAS_MEDIA_SESSION, MediaSessionProps } from './constant';
import useMediaSession from './use_media_session';
declare const MediaSessionWrapper: (props: React.PropsWithChildren<MediaSessionProps>) => JSX.Element;
export { HAS_MEDIA_SESSION, useMediaSession };
export default MediaSessionWrapper;
