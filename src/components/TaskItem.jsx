import React, { useState, useRef, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import { TASK_STATUS } from '../hooks/useTasks';

// Using memo to prevent unnecessary re-renders
const TaskItem = memo(({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  
  // Memoize these functions to prevent recreation on each render
  const handleStatusChange = () => {
    const nextStatus = {
      [TASK_STATUS.OPEN]: TASK_STATUS.WIP,
      [TASK_STATUS.WIP]: TASK_STATUS.COMPLETED,
      [TASK_STATUS.COMPLETED]: TASK_STATUS.OPEN
    };
    
    updateTask(task.id, { status: nextStatus[task.status] });
  };
  
  const handleDelete = () => {
    deleteTask(task.id);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    updateTask(task.id, { title: title.trim() });
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setTitle(task.title);
    setIsEditing(false);
  };
  
  const statusColors = {
    [TASK_STATUS.OPEN]: 'bg-red-100 text-red-800',
    [TASK_STATUS.WIP]: 'bg-yellow-100 text-yellow-800',
    [TASK_STATUS.COMPLETED]: 'bg-green-100 text-green-800'
  };
  
  // Use static CSS transitions where possible instead of Framer animations
  return (
    <div className="card hover:shadow-lg flex items-center group transition-transform duration-200 hover:scale-[1.005]">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex-grow flex gap-2">
          <input
            ref={inputRef}
            type="text"
            className="input flex-grow"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex gap-1">
            <button
              type="submit"
              className="p-2 rounded-md text-green-600 hover:bg-green-50 transform transition-transform active:scale-90 hover:scale-105"
            >
              <FiCheck />
            </button>
            <button
              type="button"
              className="p-2 rounded-md text-red-600 hover:bg-red-50 transform transition-transform active:scale-90 hover:scale-105"
              onClick={handleCancel}
            >
              <FiX />
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex-grow flex items-center">
            <button
              className="mr-3 flex-shrink-0 transform transition-transform hover:scale-105 active:scale-95"
              onClick={handleStatusChange}
            >
              <span 
                className={`px-2 py-1 text-xs font-medium rounded-md ${statusColors[task.status]}`}
              >
                {task.status}
              </span>
            </button>
            
            <p className={`${task.status === TASK_STATUS.COMPLETED ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </p>
          </div>
          
          <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="p-2 rounded-md text-blue-600 hover:bg-blue-50 mr-1 transform transition-transform hover:scale-105 active:scale-95"
              onClick={() => setIsEditing(true)}
            >
              <FiEdit3 />
            </button>
            <button
              className="p-2 rounded-md text-red-600 hover:bg-red-50 transform transition-transform hover:scale-105 active:scale-95"
              onClick={handleDelete}
            >
              <FiTrash2 />
            </button>
          </div>
        </>
      )}
    </div>
  );
});

export default TaskItem;