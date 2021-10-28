import React from "react";
import { Redirect } from "react-router";

import HYDiscover from "@/pages/discover";
import HYFriend from "@/pages/friend";
import HYMine from "@/pages/mine";

import HYRecommend from "@/pages/discover/c-pages/recommend";
import HYRanking from "@/pages/discover/c-pages/ranking";
import HYAlbum from "@/pages/discover/c-pages/album";
import HYArtist from "@/pages/discover/c-pages/artist";
import HYSongs from "@/pages/discover/c-pages/songs";
import HYAnchor from "@/pages/discover/c-pages/anchor";
import HYPlayer from "@/pages/player";
import Profile from "@/pages/profile";
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
        component: HYRecommend,
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
        path: "/discover/artist",
        component: HYArtist,
      },
      {
        path: "/discover/album",
        component: HYAlbum,
      },
      {
        path: "/discover/player",
        component: HYPlayer,
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
