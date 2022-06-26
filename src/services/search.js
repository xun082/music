import request from "./request";

export function getSearchSuggest(keywords) {
  return request({
    url: "/search/suggest",
    params: {
      keywords,
    },
  });
}

export function getSearchResult(keywords, limit, offset, type) {
  return request({
    url: "/cloudsearch",
    params: {
      keywords,
      limit,
      offset,
      type,
    },
  });
}
