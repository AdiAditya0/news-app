import {useEffect, useRef} from 'react';
import {
  addTopNews,
  updateNewsBatchAsSeen,
} from '../../redux/slices/topNewsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../../redux/store';
import {useGetTopHeadlines} from '../apis/useGetTopHeadlines';

export function useHandleTopNews() {
  const {topNews} = useSelector((state: IRootState) => state.reducer);
  const dispatch = useDispatch();
  const {newsList, fetchData} = useGetTopHeadlines();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (topNews.length === 0) {
      fetchData(100);
    }
  }, [fetchData, topNews]);

  useEffect(() => {
    if (newsList.length > 0 && topNews.length === 0) {
      dispatch(addTopNews(newsList));
    }
  }, [dispatch, newsList, topNews]);

  useEffect(() => {
    // timer.current = setInterval(() => {
    //   dispatch(updateNewsBatchAsSeen());
    // }, 10000);
    return () => {
      if (timer.current !== null) {
        clearInterval(timer.current);
      }
    };
  }, [dispatch]);
}
