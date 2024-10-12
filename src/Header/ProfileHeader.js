import React from "react";
import "./ProfileHeader.css";
import logo from "../assets/image/ProfileImages/logo.svg";
import notificationIcon from "../assets/image/ProfileImages/notification.svg";
import notificationMwebIcon from "../assets/image/notification.svg";
import userImg from "../assets/image/ProfileImages/user-img.png";
import menuImg from "../assets/image/menu-icon.svg";
import notiIconClose from "../assets/image/notification-close.svg";
import promotionsIcon from "../assets/image/promotions-Icon.svg";
import systemIcon from "../assets/image/system-Icon.svg";
import othersIcon from "../assets/image/others-Icon.svg";
import notifyTagIcon from "../assets/image/notify-tag.svg";
import vectorIcon from "../assets/image/vector.svg";
import iconProfile from "../assets/image/ProfileImages/rectangle.png";
import iconBtn from "../assets/image/ProfileImages/ic_round-photo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
const HeaderData = [
  { label: "Home", path: "/home" },
  { label: "Article", path: "/article" },
  { label: "Learn", path: "/learn" },
  { label: "Quiz", path: "/quiz" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

function ProfileHeader() {
  const navigation = useNavigate();
  const handleRedirection = (path) => {};
  return (
    <>
      <header className="profile--header w-1211">
        <div className="profile--logo">
          <img
            src={logo}
            onClick={(e) => {
              e.preventDefault();
              navigation("/home");
            }}
            alt="logo"
            width={73}
            height={73}
          />
        </div>
        <nav className="profile--nav">
          {HeaderData.map((item) => {
            return (
              <NavLink
                to={item.path}
                key={item.path}
                activeClassName="nav--items--active"
                className={({ isActive, isPending }) =>
                  isActive ? "nav--items--active" : "nav--items"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="profile--right">
          <div className="notification-main p-relative">
            <button type="button" className="btn--notification">
              <img
                src={notificationIcon}
                alt="notification"
                width={24}
                height={24}
                className="web-notifi"
              />
              <img
                src={notificationMwebIcon}
                width={24}
                height={24}
                alt="notification mweb"
                className="mweb-notifi"
              />
            </button>
            <template>
              <div className="notification--menu">
                <div className="notification--header">
                  <button type="button">
                    <img
                      src={notiIconClose}
                      width={42}
                      height={42}
                      alt="icon close"
                    />
                  </button>
                </div>
                <div className="notification-body">
                  <div className="boti--body-header">
                    <div className="noti--itm">
                      <img
                        src={promotionsIcon}
                        width={48}
                        height={48}
                        alt="promotions Icon"
                      />
                      <text>Promotions</text>
                    </div>
                    <div className="noti--itm">
                      <img
                        src={systemIcon}
                        width={48}
                        height={48}
                        alt="promotions Icon"
                      />
                      <text>System</text>
                    </div>
                    <div className="noti--itm">
                      <img
                        src={othersIcon}
                        width={48}
                        height={48}
                        alt="promotions Icon"
                      />
                      <text>Others</text>
                    </div>
                  </div>
                  <div className="notif--card">
                    <div className="notif--card-item">
                      <div className="notif--card-head">
                        <img
                          src={notifyTagIcon}
                          width={40}
                          height={40}
                          alt="notify Tag Icon"
                        />
                        <div className="notif--card-right">
                          <div className="notif--card-title">
                            Notification Tag
                          </div>
                          <div className="notif--card-category">Category</div>
                        </div>
                      </div>
                      <div className="notif--card-info">
                        Semper consequat pharetra vitae nisl eget lectus.
                        Convallis in turpis quam sed in. Vehicula diam euismod
                        cursus posuere cras urna ultrice.
                      </div>
                      <time>Aug 2, 2023 04:00 PM</time>
                    </div>
                    <div className="notif--card-item">
                      <div className="notif--card-head">
                        <img
                          src={promotionsIcon}
                          width={40}
                          height={40}
                          alt="notify Tag Icon"
                        />
                        <div className="notif--card-right">
                          <div className="notif--card-title">
                            Notification Tag
                          </div>
                          <div className="notif--card-category">Category</div>
                        </div>
                      </div>
                      <div className="notif--card-info">
                        Semper consequat pharetra vitae nisl eget lectus.
                        Convallis in turpis quam sed in. Vehicula diam euismod
                        cursus posuere cras urna ultrice.
                      </div>
                      <time>Aug 2, 2023 04:00 PM</time>
                    </div>
                    <div className="notif--card-item">
                      <div className="notif--card-head">
                        <img
                          src={othersIcon}
                          width={40}
                          height={40}
                          alt="notify Tag Icon"
                        />
                        <div className="notif--card-right">
                          <div className="notif--card-title">
                            Notification Tag
                          </div>
                          <div className="notif--card-category">Category</div>
                        </div>
                      </div>
                      <div className="notif--card-info">
                        Semper consequat pharetra vitae nisl eget lectus.
                        Convallis in turpis quam sed in. Vehicula diam euismod
                        cursus posuere cras urna ultrice.
                      </div>
                      <time>Aug 2, 2023 04:00 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div className="profile--user p-relative">
            <div className="profile--user-inn">
              <div className="user--img">
                <img src={userImg} alt="user image" width={48} height={48} />
              </div>
              <span className="user--name">Rahul Kumar G</span>
            </div>
            <button type="button" className="toggle--menu">
              <img src={menuImg} width={24} height={24} alt="menu icon" />
            </button>
            <template>
              <div className="profile--menus">
                <div className="profile--menus-head">
                  <div className="edit--image p-edit--image">
                    <img
                      src={iconProfile}
                      alt="rectangle"
                      width={148}
                      height={148}
                    />
                    <button type="button">
                      <img
                        src={iconBtn}
                        alt="ic_round-photo"
                        width={35}
                        height={35}
                      />
                      <input type={"file"} />
                    </button>
                  </div>
                  <div className="profile--menus-head-right">
                    <div className="profile--menus-head-title">Welcome,</div>
                    <div className="profile--menus-head-sub">
                      Rahul Kumar Gupta{" "}
                    </div>
                    <div className="profile--menus-head-bottom">
                      <span>rahul@gmail.com</span>
                      <span>9140697986</span>
                    </div>
                  </div>
                </div>
                <div className="profile--menus-body">
                  <div className="profile--menus-li">
                    <span>My Profile</span>
                    <button type="button">
                      <img
                        src={vectorIcon}
                        width={11}
                        height={19}
                        alt="icon arrow"
                      />
                    </button>
                  </div>
                  <div className="profile--menus-li">
                    <span>FAQ</span>
                    <button type="button">
                      <img
                        src={vectorIcon}
                        width={11}
                        height={19}
                        alt="icon arrow"
                      />
                    </button>
                  </div>
                  <div className="profile--menus-li">
                    <span>Change Password</span>
                    <button type="button">
                      <img
                        src={vectorIcon}
                        width={11}
                        height={19}
                        alt="icon arrow"
                      />
                    </button>
                  </div>
                  <div className="profile--menus-li">
                    <span>Feedback & Suggestions</span>
                    <button type="button">
                      <img
                        src={vectorIcon}
                        width={11}
                        height={19}
                        alt="icon arrow"
                      />
                    </button>
                  </div>
                  <div className="profile--menus-li">
                    <span>Terms & Conditions</span>
                    <button type="button">
                      <img
                        src={vectorIcon}
                        width={11}
                        height={19}
                        alt="icon arrow"
                      />
                    </button>
                  </div>
                  <div className="profile--menus-li">
                    <span>Contact US</span>
                    <button type="button">
                      <img
                        src={vectorIcon}
                        width={11}
                        height={19}
                        alt="icon arrow"
                      />
                    </button>
                  </div>

                  <div className="logout--menu">
                    <button type="button">logout</button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </header>
    </>
  );
}

export default ProfileHeader;
