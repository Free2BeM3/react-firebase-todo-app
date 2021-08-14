import {
  Avatar,
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";

function Todo(props) {
  return (
    <List className="Todo__List">
      <ListItem className="Todo">
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} />
        <Checkbox />
      </ListItem>
      {/* <li>{props.text}</li> */}
    </List>
  );
}

export default Todo;
