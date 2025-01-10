import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Box,
  Switch,
} from "@mui/material";
import { AccountCircle, More, Menu, Search } from "@mui/icons-material";

import LayoutSider from "./Sider";
import {
  MtagSearch,
  SearchIconWrapper,
  StyledInputBase,
  MtagAppBar,
} from "../style/layout";
import { HeaderMenuHook, HeaderDataHook } from "../hook/Index";
import { handleSearch, handleLog } from "../../redux/reducer/auth";

const LayoutHeader = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const handleDrawer = (open) => {
    if (open < 2) {
      props.handleOpen(open + 1);
    } else {
      props.handleOpen(0);
    }
  };
  const [
    menu,
    menuId,
    handleProfileMenuOpen,
    mobileMenu,
    mobileMenuId,
    handleMobileMenuOpen,
  ] = HeaderMenuHook(null);
  const [color, headerData] = HeaderDataHook(false);
  return (
    <>
      <MtagAppBar color={color.back} position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer(props.open)}
            edge="start"
            disabled={isAuthenticated ? false : true}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <MtagSearch>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => {
                dispatch(handleSearch(event.target.value));
              }}
            />
          </MtagSearch>
          <Box sx={{ flexGrow: 1 }} />
          <Switch
            color="action"
            onChange={() => {
              dispatch(handleLog());
            }}
            aria-label="login switch"
          />
          {isAuthenticated ? (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {headerData.map((list, index) => (
                  <IconButton
                    key={index}
                    size="large"
                    aria-label={list.label}
                    color="inherit"
                  >
                    <Badge badgeContent={list.badge} color="error">
                      {list.icon}
                    </Badge>
                  </IconButton>
                ))}
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <More />
                </IconButton>
              </Box>
            </>
          ) : null}
        </Toolbar>
      </MtagAppBar>
      <LayoutSider open={props.open} />
      {mobileMenu}
      {menu}
    </>
  );
};
export default LayoutHeader;
