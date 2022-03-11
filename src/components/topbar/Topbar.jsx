import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CiniCast</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          </div>
          <div className="topbarIconContainer">
          </div>
          <div className="topbarIconContainer">
          </div>
          <img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/132042356_509129733396698_5175338107954405810_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3SOzzfgad50AX9tlAR0&_nc_ht=scontent.ftun16-1.fna&oh=00_AT-TbWQ1TWNGqJwfkMVpMyryOQ_8c9n5zfUW7WiqwuNksA&oe=624F0A61" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
