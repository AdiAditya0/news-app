import {createSlice} from '@reduxjs/toolkit';
import {Article} from '../../Types';

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
      console.log('addTopNews');

      state.topNews = [];
      state.topNews.push(...action.payload);
    },
    markNewsAsSeen: (state, action) => {
      console.log('markNewsAsSeen');

      state.topNews.filter(article => article.id !== action.payload.id);
    },
    updateNewsBatchAsSeen: state => {
      console.log('updateNewsBatchAsSeen');

      if (state.topNews.length >= 5) {
        state.topNews = state.topNews.slice(5, state.topNews.length);
      } else {
        state.topNews = [];
      }
    },
    addPinnedNews: (state, action) => {
      console.log('addPinnedNews');

      state.topNews.filter(article => article.id !== action.payload.id);
      state.pinnedNews.push(action.payload);
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
