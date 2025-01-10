import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import DashIndex from "../page/dash/Index";
import ForumIndex from "../page/forum/Index";
import ProfileIndex from "../page/profile/Index";
import MessageIndex from "../page/message/Index";
import SettingIndex from "../page/setting/Index";

export const RouteDataHook = (num, isLogined) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (num) => {
    setOpen(() => num);
  };

  const ProtectedRoute = (isLogined) => {
    return isLogined ? <Outlet /> : <Navigate to="/auth/signin" />;
  };

  const routesData = [
    { path: "/", component: <DashIndex /> },
    { path: "/page/dash", component: <DashIndex /> },
    { path: "/page/forum", component: <ForumIndex /> },
    { path: "/page/message", component: <MessageIndex /> },
    { path: "/page/profile", component: <ProfileIndex /> },
    { path: "/page/setting", component: <SettingIndex /> },
  ];
  return [open, handleOpen, ProtectedRoute, routesData];
};
