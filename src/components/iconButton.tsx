import React from 'react'
import { Link } from 'gatsby';

const IconButton = ({to="#", icon}) => {
  return (
    <Link to={to} className="w-5 h-5 inline-block mr-5 bg-gray-400">
      {icon}
    </Link>
  )
}

export default IconButton
