import {
  FormControl,
  InputLabel,
  Input,
  List,
  ListItem,
  ListItemText,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import db from "../firebase";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: 300,
    left: 550,
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const updateTodo = () => {
    db.collection("Todos").doc(props.text.id).set(
      {
        task: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    setOpen(false);
    // setInput("");
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <form onSubmit={updateTodo}>
            <FormControl>
              <InputLabel>Edit Todo</InputLabel>

              <Input
                placeholder={props.text.task}
                value={input}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <Button
              disabled={!input}
              type="submit"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </form>
        </div>
      </Modal>
      <List className="Todo__List">
        <ListItem className="Todo">
          <Button id="edit_btn">
            <CreateOutlinedIcon onClick={handleOpen} />
          </Button>
          <ListItemText primary={props.text.task} />
          <Button
            onClick={(e) => {
              db.collection("Todos").doc(props.text.id).delete();
            }}
            variant="contained"
            color="secondary"
          >
            <DeleteForeverIcon />
          </Button>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
