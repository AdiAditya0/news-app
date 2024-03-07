import {createSlice} from '@reduxjs/toolkit';
import {Article} from '../../types';

export interface TopNewsStore {
  topNews: Article[];
  pinnedNews: Article[];
}

const initialState: TopNewsStore = {
  topNews: [],
  pinnedNews: [],
};

const topNewsSlice = createSlice({
  name: 'topNewsSlice',
  initialState,
  reducers: {
    addTopNews: (state, action) => {
      state.topNews = [];
      state.topNews.push(...action.payload);
    },
    markNewsAsSeen: (state, action) => {
      state.topNews = state.topNews.filter(
        article => article.id !== action.payload.id,
      );
      state.pinnedNews = state.pinnedNews.filter(
        article => article.id !== action.payload.id,
      );
    },
    updateNewsBatchAsSeen: state => {
      if (state.topNews.length >= 5) {
        state.topNews = state.topNews.slice(5, state.topNews.length);
      } else {
        state.topNews = [];
      }
    },
    addPinnedNews: (state, action) => {
      state.topNews = state.topNews.filter(
        article => article.id !== action.payload.id,
      );
      const newsItem = {...action.payload, isPinned: true};
      state.pinnedNews.push(newsItem);
    },
  },
});

export const {
  addPinnedNews,
  addTopNews,
  updateNewsBatchAsSeen,
  markNewsAsSeen,
} = topNewsSlice.actions;
export default topNewsSlice.reducer;
