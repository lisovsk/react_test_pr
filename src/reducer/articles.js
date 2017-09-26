import { articles as defaultArticles } from "../fixtures";
import {
  DELETE_ARTICLE,
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE
} from "../constants";

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter(article => article.id !== payload.id);

    // case CHANGE_DATE_RANGE:
    // console.log(...filters);
    //   // return Object.assign({}, filters, { dateRange: payload.dateRange });
    //   return { ...filters, dateRange: payload.dateRange };

    //   dateFilter = articleFilter.filter(article => {
    //     let current = new Date(article.date).getTime();
    //     return current >= from && current <= to;
    //   });
    //   return dateFilter;
  }
  return articlesState;
};
