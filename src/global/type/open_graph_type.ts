type OpenGraphType =
'book' |
'website' |
'article' |
'profile' |
'music.song' |
'music.album' |
'video.movie' |
'video.other' |
'video.episode' |
'video.tv_show' |
'music.playlist' |
'music.radio_station';

type OpenGraphMedia =
{
  readonly url: string;
  readonly alt?: string;
  readonly type?: string;
  readonly secureUrl?: string;
  readonly width?: URL | null | string | undefined;
  readonly height?: URL | null | string | undefined;
};

type OpenGraphTwitter =
{
  readonly site?: string;
  readonly creator?: string;
  readonly type?: 'app' | 'player' | 'summary' | 'summary_large_image';
};

export type { OpenGraphType, OpenGraphMedia, OpenGraphTwitter };