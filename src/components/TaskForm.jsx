import React, { useState, memo } from 'react';
import { FiPlus } from 'react-icons/fi';

// Using memo to prevent unnecessary re-renders
const TaskForm = memo(({ addTask }) => {
  const [title, setTitle] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    addTask(title);
    setTitle('');
  };
  
  return (
    <form 
      className="flex gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="input flex-grow"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      
      <button
        type="submit"
        className="btn btn-primary flex items-center gap-1 transition-transform hover:scale-105 active:scale-95"
        disabled={!title.trim()}
      >
        <FiPlus className="text-lg" />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  );
});

export default TaskForm;