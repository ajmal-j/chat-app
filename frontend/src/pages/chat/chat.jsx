import React, { useEffect, useState } from "react";
import axios from "axios";
import "./chat.css";
import { ChatState } from "../../context/chatProvider";
import { SideDrawer } from "../../components/chatComponents/sideDrawer";
import { ChatBox } from "../../components/chatComponents/chatBox";
import { MyChats } from "../../components/chatComponents/myChats";
import { mainContainer } from "../../assets/classes";

export const Chat = () => {
  const { user } = ChatState();
  return (
    <div>
      {user && <SideDrawer />}
      <div className={`${mainContainer} chatContainer`}>
        {user && <ChatBox />}
        {user && <MyChats />}
      </div>
    </div>
  );
};
