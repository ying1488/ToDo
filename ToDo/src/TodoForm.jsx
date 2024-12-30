import { ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Create } from "@mui/icons-material";
import {IconButton} from "@mui/material";
import { useState } from "react";


export default function TodoForm({addTodo}){
  const [text,setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  
  return(
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          endAdornment={
            <InputAdornment position="end">
            <IconButton aria-label="create todo" edge="end" type="submit">
            <Create />
            </IconButton>
            </InputAdornment>
          }   
        />
      </form>
    </ListItem>
  );
}