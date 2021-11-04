import request from "./request";

// 歌手列表
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

// 歌手详情
export function getArtistDetail(id) {
  return request({
    url: "/artist/detail",
    params: {
      id,
    },
  });
}

// 歌手热门50首
export function getArtistSong(id) {
  return request({
    url: "/artist/top/song",
    params: {
      id,
    },
  });
}

// 歌手mv
export function getArtistMovie(id) {
  return request({
    url: "/artist/mv",
    params: {
      id,
    },
  });
}

// 歌手描述
export function getArtistDesc(id) {
  return request({
    url: "/artist/desc",
    params: {
      id,
    },
  });
}

// 歌手描述
export function getArtistAlbum(id, limit, offset) {
  return request({
    url: "/artist/album",
    params: {
      id,
      limit,
      offset,
    },
  });
}
