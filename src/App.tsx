import React, { FormEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
import { BugPriority, IBug } from './IBug';
import {v4 as uuid} from 'uuid';
import BugListTable from './BugListTable';

function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>('');
  const [newBugPriority, setNewBugPriority] = useState<string>('Medium');
  const [bugList, setBugList] = useState<IBug[]>([]);

  const addBug = (event:FormEvent) => {
    event.preventDefault();
    const newBug: IBug = {
      id: uuid(),
      description: newBugDescription,
      priority: newBugPriority as BugPriority,
    };

    setBugList([...bugList, newBug]);

    setNewBugDescription('');
    setNewBugPriority('Medium');
  }

  const deleteBug = (id: string) => {
    const bugs = bugList.filter(bug => bug.id !== id);
    setBugList(bugs);
  };

  return (
    <div className="App">
      <h1>🐞 Bug Tracker</h1>
      <BugListTable bugs={bugList} onDeleteBug={(id:string) => deleteBug(id)} />

      <form className='add-new-bug-form' onSubmit={addBug}>
        <label htmlFor="newBugDescription">
          New Bug Description:
        </label>
        <input data-testid="newBugDescription" type="text" id="newBugDescription" value={newBugDescription} onChange={(e) => setNewBugDescription(e.target.value)} />
        <label htmlFor="newBugPriority"> New bug Priority:
        </label>
        <select id="newBugPriority" value={newBugPriority} onChange={(e) => setNewBugPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button data-testid="addButton" type="submit">Add New Bug</button>
      </form>
    </div>
  );
}

export default App;
