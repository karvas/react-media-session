export declare const HAS_MEDIA_SESSION: boolean;
interface Artwork {
    src: string;
    sizes: string;
    type?: string;
}
export interface MediaSessionProps {
    title?: string;
    artist?: string;
    album?: string;
    artwork: Artwork[];
    onPlay?: (...args: any[]) => any;
    onPause?: (...args: any[]) => any;
    onSeekBackward?: (...args: any[]) => any;
    onSeekForward?: (...args: any[]) => any;
    onPreviousTrack?: (...args: any[]) => any;
    onNextTrack?: (...args: any[]) => any;
    onStop?: (...args: any[]) => any;
}
export {};
