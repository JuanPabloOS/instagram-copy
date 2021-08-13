import * as React from "react"
import PropTypes from "prop-types"
import IconButton from "./iconButton"
import Compass from '../svg/compass.svg';
import Home from '../svg/home.svg';
import Messenger from '../svg/messenger.svg';
import Heart from '../svg/heart.svg';

const Header = () => (
  <header className="border-solid border-b bg-white border-gray-300 sticky flex w-full justify-center z-10 top-0 left-0" style={{height: '54px'}}>
    <div className="mx-5 w-full max-w-4x flex justify-between items-center content-center" style={{maxWidth: '935px'}}>
      <img src="" alt="" />
      <input type="text" placeholder="Buscar" />
      <div className="">
        <IconButton>
          <img src={Home} alt="" />
        </IconButton>
        <IconButton>
          <img src={Messenger} alt="" />
        </IconButton>
        <IconButton>
          <img src={Compass} alt="" />
        </IconButton>
        <IconButton>
          <img src={Heart} alt="" />
        </IconButton>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
