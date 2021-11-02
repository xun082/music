import request from "./request";
export function getPlayListDetail(id, s) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
      s,
    },
  });
}
