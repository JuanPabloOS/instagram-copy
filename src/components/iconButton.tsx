import React from 'react'

interface IconButtonProps {
  noMargin?: boolean;
  children?: React.ReactNode;
}
const IconButton = ({noMargin, children, ...rest}:IconButtonProps) => {
  return (
    <button type='button' className={`w-5 h-5 inline-block ${noMargin ? '' : 'mr-5'} `} {...rest}>
      {children}
    </button>
  )
}

export default IconButton
