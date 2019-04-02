/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style.css';

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
