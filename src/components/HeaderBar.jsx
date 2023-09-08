import * as Icon from "react-bootstrap-icons";
import { Component } from "react";
import GenreButton from "./GenreButton";

class HeaderBar extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <div className="pt-2 ps-4">
          <p className="d-inline-block display-6 fw-bold text-white me-4 mb-0">TV Shows</p>
          <GenreButton />
        </div>
        <div className="d-flex align-items-center pe-5">
          <Icon.GridFill className="me-4" color="white" size="25px" />
          <Icon.Grid3x3GapFill color="white" size="25px" />
        </div>
      </div>
    );
  }
}

export default HeaderBar;
