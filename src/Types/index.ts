export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string | null;
  name: string;
}

export const FontFamily = {
  RobotoBlack: 'Roboto-Black',
  RobotoBold: 'Roboto-Bold',
  RobotoLight: 'Roboto-Light',
  RobotoMedium: 'Roboto-Medium',
  RobotoRegular: 'Roboto-Regular',
  RobotoThin: 'Roboto-Thin',
};
