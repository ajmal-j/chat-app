import React, { useState } from "react";
import {
  Button,
  chatName,
  header,
  leftHeader,
  notification,
  profile,
  profileImage,
  searchButton,
} from "../../assets/classes";
import { ChatState } from "../../context/chatProvider";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./main.css";

export const SideDrawer = () => {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();
  const [loading, setLoading] = useState();
  const [loadingChat, setLoadingChat] = useState();
  const { user } = ChatState();

  return (
    <>
      <header className={`${header} header`}>
        <div className="searchBox">
          <button className={`${searchButton}`}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search User</span>
          </button>
        </div>
        <div className={`${chatName}`}>Chat App</div>
        <div className={`${leftHeader}`}>
          <button className={`${Button}`}>
            <i className={`${notification} fa-regular fa-bell`}></i>
          </button>
          <DropdownButton
            variant=""
            className={`${Button} customDropdownButton`}
            title={
              <img src={user.image} alt="" className={`${profileImage}`} />
            }
            noCaret
          >
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </header>
    </>
  );
};
