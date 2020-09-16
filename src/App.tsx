import React from 'react';
import './App.css';
import NewNoteInput from './components/NewNoteInput';
import TodoList from './components/TodoList';
import {addNote} from './redux/action';
import {useDispatch} from 'react-redux';

function App() {

  const dispatch= useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  }

  return (
    <div className="App">
      <NewNoteInput addNote={onAddNote}  />
      <TodoList/>
    </div>
  );
}

export default App;
