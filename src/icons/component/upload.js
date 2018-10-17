import React from 'react'
import Icon from './icon'

const Upload = (props) => {
  const{ size, color } = props
  return(
    <Icon
      {...props}
    >
      <path d="M14 18h4v-8h6l-8-8-8 8h6zM20 13.5v3.085l9.158 3.415-13.158 4.907-13.158-4.907 9.158-3.415v-3.085l-12 4.5v8l16 6 16-6v-8z"></path>
    </Icon>
  )

}

export default Upload