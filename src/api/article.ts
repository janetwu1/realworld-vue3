/**
 * 用户相关请求模块
 */

import request from '@/utils/request'

interface ArticlesParams {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: string;
  offset?: string;
}
 interface AricleAuth {
    username: string;
    bio: string;
    image: string;
    following: false;
 }

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: AricleAuth;
}

interface ArticlePayload {
  articles: Article[];
  articlesCount: number;
}

export const getArticles = (params: ArticlesParams = {}) => {
  return request.get<ArticlePayload>('/api/articles')
}
