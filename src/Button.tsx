import React from 'react';

type PropsType = {
  title: string
}
export const Button = (props: PropsType) => {
  return (
      <button>{props.title}</button>
  )
}