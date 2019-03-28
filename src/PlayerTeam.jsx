import React from "react";
import { ListGroup } from "react-bootstrap";
export const PlayerTeam = ({ items }) => (
  <ListGroup>
    {items.map((item, i) => (
      <ListGroup.Item key={item.player}>
        {`${i + 1}. ${item.player} - ${item.team}`}
      </ListGroup.Item>
    ))}
  </ListGroup>
);
