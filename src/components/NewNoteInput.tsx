import React, { useState, FC, useEffect, ChangeEvent } from "react";
import { Input, Button } from "@material-ui/core";
interface NewNoteInputProps {
  addNote(note: string): void
}
 //just a commment
const StateHooksComponent: FC<NewNoteInputProps> = ({addNote}) => {

  const [note, setNote] = useState<string>("");
  
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  }

  useEffect(() => {
    document.title = note === "" ? `Default Title` : `Typing`;
  }, [note]);

  return (
    <div className="root">
      <Input
        type="text"
        placeholder="Things need to be done"
        value={note}
        onChange={updateNote}
        className="input"
      />
      <Button
        onClick={onAddNoteClick}
        variant="contained"
        className="btn"
      >
        Expand your todo list
      </Button>
    </div>
  );
};

export default StateHooksComponent;
