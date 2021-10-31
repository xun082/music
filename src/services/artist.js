import request from "./request";

// 电台推荐
export function getArtistCategory(limit, offset, type, area, initial) {
  return request({
    url: "/artist/list",
    params: {
      limit,
      offset,
      type,
      area,
      initial,
    },
  });
}
