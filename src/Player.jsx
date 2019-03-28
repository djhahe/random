import React from "react";
import { ListGroup } from "react-bootstrap";
export const Player = ({ items }) => (
  <ListGroup>
    {items.map((item, i) => (
      <ListGroup.Item key={item}>{`${i + 1}. ${item}`}</ListGroup.Item>
    ))}
  </ListGroup>
);
