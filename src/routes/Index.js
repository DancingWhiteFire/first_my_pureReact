import React, { useCallback, useEffect } from "react";
import { Toolbar } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutHeader from "../components/layout/Header";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { Main } from "../components/style/routes";
import { RouteDataHook } from "../components/hook/RouteDataHook";

const RouteIndex = () => {
  const isLogined = useSelector((state) => state.auth.isAuthenticated);
  const [open, handleOpen, ProtectedRoute, routesData] = RouteDataHook(
    0,
    isLogined
  );
  const calldHandleOpen = useCallback(
    (num) => {
      handleOpen(num);
    },
    [handleOpen]
  );
  useEffect(() => {
    if (!isLogined) calldHandleOpen(0);
  }, [isLogined, calldHandleOpen]);
  return (
    <Router>
      <LayoutHeader handleOpen={handleOpen} open={open} />
      <Main open={open > 0 ? true : false}>
        <Toolbar id="back-to-top-anchor" />
        <Routes>
          {routesData.map((list, index) => (
            <Route key={index} element={ProtectedRoute(isLogined)}>
              <Route path={list.path} element={list.component} exact />
            </Route>
          ))}
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </Main>
    </Router>
  );
};

export default RouteIndex;
