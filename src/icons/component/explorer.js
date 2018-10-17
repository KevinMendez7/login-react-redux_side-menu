import React from 'react'
import Icon from './icon'

const Explorer = (props) => {
  const { size, color } = props

  return(
    <Icon
      {...props}
    >
      <path d="M26 30l6-16h-26l-6 16zM4 12l-4 18v-26h9l4 4h13v4z"></path>
    </Icon>
  )

}

export default Explorer
