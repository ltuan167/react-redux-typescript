import React, { FC } from "react";
import {NotesState} from "../redux/reducer";
import { useSelector } from "react-redux";

interface TodoProps {}
const TodoList: FC<TodoProps> = ({}) => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  return (
    <div className="list">
      <ul className="list__list">
        {notes.map((note) => {
            return (
                <li key={note} >{note}</li>
            );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
