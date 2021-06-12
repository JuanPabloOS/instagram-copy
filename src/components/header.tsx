import * as React from "react"
import PropTypes from "prop-types"
import IconButton from "./iconButton"
const Header = () => (
  <header className="border-solid border-b bg-white border-gray-300 sticky flex w-full justify-center z-10 top-0 left-0" style={{height: '54px'}}>
    <div className="mx-5 w-full max-w-4x flex justify-between items-center content-center" style={{maxWidth: '935px'}}>
      <img src="" alt="" />
      <input type="text" placeholder="Buscar" />
      <div className="">
       <IconButton icon="A"/>
       <IconButton icon="B"/>
       <IconButton icon="C"/>
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
