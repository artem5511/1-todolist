import React from 'react';

type TodolistHeader = {
  title: string
}
export const TodolistHeader = (props: TodolistHeader) => {
  return (
      <h3>{props.title}</h3>
  )
}