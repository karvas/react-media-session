import { useEffect } from 'react';

import { MediaSessionProps } from './constant';

const useMediaSession = (props: MediaSessionProps) => {
  const {
    title = '',
    artist = '',
    album = '',
    artwork = [],

    onPlay,
    onPause,
    onSeekBackward,
    onSeekForward,
    onPreviousTrack,
    onNextTrack,
    onStop,
  } = props;

  // @ts-ignore
  const { mediaSession } = navigator;

  useEffect(() => {
    // @ts-ignore
    mediaSession.metadata = new MediaMetadata({
      title,
      artist,
      album,
      artwork,
    });
    return () => {
      mediaSession.metadata = null;
    };
  }, [title, artist, album, artwork]);

  useEffect(() => {
    // @ts-ignore
    mediaSession.setActionHandler('play', onPlay);
    return () => {
      mediaSession.setActionHandler('play', null);
    };
  }, [onPlay]);
  useEffect(() => {
    // @ts-ignore
    mediaSession.setActionHandler('pause', onPause);
    return () => {
      mediaSession.setActionHandler('pause', null);
    };
  }, [onPause]);
  useEffect(() => {
    // @ts-ignore
    mediaSession.setActionHandler('seekbackward', onSeekBackward);
    return () => {
      mediaSession.setActionHandler('seekbackward', null);
    };
  }, [onSeekBackward]);
  useEffect(() => {
    // @ts-ignore
    mediaSession.setActionHandler('seekforward', onSeekForward);
    return () => {
      mediaSession.setActionHandler('seekforward', null);
    };
  }, [onSeekForward]);
  useEffect(() => {
    // @ts-ignore
    mediaSession.setActionHandler('previoustrack', onPreviousTrack);
    return () => {
      mediaSession.setActionHandler('previoustrack', null);
    };
  }, [onPreviousTrack]);
  useEffect(() => {
    // @ts-ignore
    mediaSession.setActionHandler('nexttrack', onNextTrack);
    return () => {
      mediaSession.setActionHandler('nexttrack', null);
    };
  }, [onNextTrack]);
  useEffect(() => {
    // @ts-ignore
    mediaSession.setActionHandler('stop', onStop);
    return () => {
      mediaSession.setActionHandler('stop', null);
    };
  }, [onStop]);
};

export default useMediaSession;
