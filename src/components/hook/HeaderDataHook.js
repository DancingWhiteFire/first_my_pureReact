import React, { useContext } from "react";
import {
  Mail,
  Notifications,
  Forum,
  Message,
  Dashboard,
  ContactPage,
  Settings,
  TextSnippet,
} from "@mui/icons-material";
import { colorContext } from "../context/Index";

export const HeaderDataHook = (type) => {
  const { color } = useContext(colorContext);

  const listData = [
    {
      text: "Dashboard",
      icon: <Dashboard color={color.back} />,
      path: "/page/dash",
    },
    {
      text: "Notes",
      icon: <TextSnippet color={color.back} />,
      path: "/page/notes",
    },
    {
      text: "Message",
      icon: <Message color={color.back} />,
      path: "/page/message",
    },
    {
      text: "Profile",
      icon: <ContactPage color={color.back} />,
      path: "/page/profile",
    },
    {
      text: "Setting",
      icon: <Settings color={color.back} />,
      path: "/page/setting",
    },
  ];

  const headerData = [
    {
      icon: <Mail />,
      badge: 4,
      label: "show 4 new mails",
    },
    {
      icon: <Notifications />,
      badge: 17,
      label: "show 17 new notifications",
    },
  ];

  return type ? listData : [color, headerData];
};
