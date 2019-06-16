import React from 'react';
import ListItem from './ListItem';
import './List.scss';

const List = ({ items = [] }) => {
  const listItems = items.map((item, index) => <ListItem key={index} title={item} />);

  return <ul>{listItems}</ul>;
};

export default List;
