import React from "react"
import Avatar from "./avatar"
import IconButton from "./iconButton"
import Heart from "../svg/heart.svg"
import Chat from "../svg/chat.svg"
import Bookmark from "../svg/bookmark.svg"
import Send from "../svg/send.svg"
const Post = () => {
  return (
    <div className="border flex-grow bg-white mb-7" style={{ maxWidth: "614px" }}>
      <div className="px-5">
        <Avatar src="https://i.pravatar.cc/50" />
        <button>...</button>
      </div>
      <div style={{ height: "614px" }}>
        <img src="https://i.pravatar.cc" alt="" />
      </div>
      <div className="px-5 ">
        <div className="flex justify-between py-2">
          <div>
            <IconButton>
              <img src={Heart} alt="" />
            </IconButton>
            <IconButton>
              <img src={Chat} alt="" />
            </IconButton>
            <IconButton>
              <img src={Send} alt="" />
            </IconButton>
          </div>
          <IconButton noMargin>
            <img src={Bookmark} alt="" />
          </IconButton>
        </div>
        <div>X me gusta</div>
        <div style={{ height: "24px" }}>Les gusta a</div>
        <div>comments box</div>
      </div>
      <div className="py-3 px-5 border-t" style={{ height: "56px" }}>
        <input type="text" placeholder="Agrega un comentario..." />
      </div>
    </div>
  )
}

export default Post
