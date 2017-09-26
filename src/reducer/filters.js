import { articles as defaultArticles } from "../fixtures";
import {
  DELETE_ARTICLE,
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE
} from "../constants";

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_DATE_RANGE:
      return Object.assign({}, filters, { dateRange: payload.dateRange });
      return { ...filters, dateRange: payload.dateRange };
    case CHANGE_SELECTION:
      return { ...filters, selected: payload.selected };
    case DELETE_ARTICLE:
      return {
        ...filters,
        selected: filters.selected.filter(id => id !== payload.id)
      };
  }

  return filters;
};
