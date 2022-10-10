function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var HAS_MEDIA_SESSION = window && window.navigator && 'mediaSession' in window.navigator;

var useMediaSession = function useMediaSession(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '' : _props$title,
    _props$artist = props.artist,
    artist = _props$artist === void 0 ? '' : _props$artist,
    _props$album = props.album,
    album = _props$album === void 0 ? '' : _props$album,
    _props$artwork = props.artwork,
    artwork = _props$artwork === void 0 ? [] : _props$artwork,
    onPlay = props.onPlay,
    onPause = props.onPause,
    onSeekBackward = props.onSeekBackward,
    onSeekForward = props.onSeekForward,
    onPreviousTrack = props.onPreviousTrack,
    onNextTrack = props.onNextTrack,
    onStop = props.onStop;
  var _navigator = navigator,
    mediaSession = _navigator.mediaSession;
  React.useEffect(function () {
    mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: artist,
      album: album,
      artwork: artwork
    });
    return function () {
      mediaSession.metadata = null;
    };
  }, [title, artist, album, artwork]);
  React.useEffect(function () {
    mediaSession.setActionHandler('play', onPlay);
    return function () {
      mediaSession.setActionHandler('play', null);
    };
  }, [onPlay]);
  React.useEffect(function () {
    mediaSession.setActionHandler('pause', onPause);
    return function () {
      mediaSession.setActionHandler('pause', null);
    };
  }, [onPause]);
  React.useEffect(function () {
    mediaSession.setActionHandler('seekbackward', onSeekBackward);
    return function () {
      mediaSession.setActionHandler('seekbackward', null);
    };
  }, [onSeekBackward]);
  React.useEffect(function () {
    mediaSession.setActionHandler('seekforward', onSeekForward);
    return function () {
      mediaSession.setActionHandler('seekforward', null);
    };
  }, [onSeekForward]);
  React.useEffect(function () {
    mediaSession.setActionHandler('previoustrack', onPreviousTrack);
    return function () {
      mediaSession.setActionHandler('previoustrack', null);
    };
  }, [onPreviousTrack]);
  React.useEffect(function () {
    mediaSession.setActionHandler('nexttrack', onNextTrack);
    return function () {
      mediaSession.setActionHandler('nexttrack', null);
    };
  }, [onNextTrack]);
  React.useEffect(function () {
    mediaSession.setActionHandler('stop', onStop);
    return function () {
      mediaSession.setActionHandler('stop', null);
    };
  }, [onStop]);
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["children"];
var MediaSession = function MediaSession(props) {
  var children = props.children,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  useMediaSession(rest);
  return React__default.createElement(React.Fragment, null, children || null);
};

var MediaSessionWrapper = function MediaSessionWrapper(props) {
  if (!HAS_MEDIA_SESSION) {
    return React__default.createElement(React.Fragment, null, props.children || null);
  }
  return React__default.createElement(MediaSession, Object.assign({}, props));
};

exports.HAS_MEDIA_SESSION = HAS_MEDIA_SESSION;
exports.default = MediaSessionWrapper;
exports.useMediaSession = useMediaSession;
//# sourceMappingURL=index.js.map
