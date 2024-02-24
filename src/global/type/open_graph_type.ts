type OpenGraphType =
'book' |
'website' |
'article' |
'profile';

type OpenGraphMediaType =
{
  readonly url: string;
  readonly alt?: string;
  readonly type?: string;
  readonly secureUrl?: string;
  readonly width?: URL | null | string | undefined;
  readonly height?: URL | null | string | undefined;
};

type OpenGraphTwitterType =
{
  readonly site?: string;
  readonly creator?: string;
  readonly type?: 'app' | 'player' | 'summary' | 'summary_large_image';
};

type OpenGraphProfileType =
{
  readonly lastName?: string;
  readonly username?: string;
  readonly firstName?: string;
  readonly gender?: 'male' | 'female';
};

type OpenGraphArticleType =
{
  readonly tag?: string[];
  readonly section?: string;
  readonly modifiedTime?: string;
  readonly publishedTime?: string;
  readonly expirationTime?: string;
  readonly author?: OpenGraphProfileType[];
};

type OpenGraphBookType =
{
  readonly isbn?: string;
  readonly tag?: string[];
  readonly releaseDate?: string;
  readonly author?: OpenGraphProfileType[];
};

export type {
  OpenGraphType,
  OpenGraphBookType,
  OpenGraphMediaType,
  OpenGraphTwitterType,
  OpenGraphArticleType,
  OpenGraphProfileType
};