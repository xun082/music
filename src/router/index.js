import React from "react";
import { Redirect } from "react-router";

import HYDiscover from "@/pages/discover";
import HYFriend from "@/pages/friend";
import HYMine from "@/pages/mine";

import HYRecommend from "@/pages/discover/c-pages/recommend";
import HYDayRecommend from "../pages/discover/c-pages/recommend/c-cpns/day-recommend";
import HYRanking from "@/pages/discover/c-pages/ranking";
import HYAlbum from "@/pages/discover/c-pages/album";
import HYArtist from "@/pages/discover/c-pages/artist";
import HYSongs from "@/pages/discover/c-pages/songs";
import HYAnchor from "@/pages/discover/c-pages/anchor";
import HYPlayer from "@/pages/player";
import Profile from "@/pages/profile";
import HYPlayList from "@/pages/playList";
import HYArtistDetail from "../pages/artist-detail";
import HYArtistSong from "../pages/artist-detail/c-cpns/song";
import HYArtistMv from "../pages/artist-detail/c-cpns/mv";
import HYArtistAlbum from "../pages/artist-detail/c-cpns/album";
import HYArtistDesc from "../pages/artist-detail/c-cpns/desc";
import HYAlbumDetail from "../pages/album-detail";
import HYAnchorDetail from "../pages/anchor-detail";
// import HYRecommend from "@/pages/discover/c-pages/recommend";
// import HYRecommend from "@/pages/discover/c-pages/recommend";
// import HYRecommend from "@/pages/discover/c-pages/recommend";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        exact: true,
        component: HYRecommend,
      },
      {
        path: "/discover/recommend/taste",
        component: HYDayRecommend,
      },
      {
        path: "/discover/ranking",
        component: HYRanking,
      },
      {
        path: "/discover/songs",
        component: HYSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYAnchor,
      },
      {
        path: "/discover/anchor",
        exact: true,
        component: HYAnchorDetail,
      },
      {
        path: "/discover/artist",
        exact: true,
        component: HYArtist,
      },
      {
        path: "/discover/artist/detail",
        component: HYArtistDetail,
        routes: [
          {
            // render: () => <Redirect to="/discover/artist/detail" />,
            path: "/discover/artist/detail",
            exact: true,
            component: HYArtistSong,
          },
          {
            path: "/discover/artist/detail/album",
            exact: true,
            component: HYArtistAlbum,
          },
          {
            path: "/discover/artist/detail/mv",
            exact: true,
            component: HYArtistMv,
          },
          {
            path: "/discover/artist/detail/desc",
            exact: true,
            component: HYArtistDesc,
          },
        ],
      },
      {
        path: "/discover/album",
        exact: true,
        component: HYAlbum,
      },
      {
        path: "/discover/album/detail",
        component: HYAlbumDetail,
      },
      {
        path: "/discover/player",
        component: HYPlayer,
      },
      {
        path: "/discover/playlist",
        component: HYPlayList,
      },
    ],
  },
  {
    path: "/mine",
    component: HYMine,
  },
  {
    path: "/friend",
    component: HYFriend,
  },
  {
    path: "/user",
    exact: true,
    component: Profile,
  },
];

export default routes;
