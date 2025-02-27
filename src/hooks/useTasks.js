import { useState, useEffect } from 'react';

const STORAGE_KEY = 'todoApp.tasks';

export const TASK_STATUS = {
  OPEN: 'Open',
  WIP: 'WIP',
  COMPLETED: 'Completed'
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    return storedTasks 
      ? JSON.parse(storedTasks) 
      : [
          { id: '1', title: 'Learn React', status: TASK_STATUS.COMPLETED, createdAt: new Date().toISOString() },
          { id: '2', title: 'Build a Todo App', status: TASK_STATUS.WIP, createdAt: new Date().toISOString() },
          { id: '3', title: 'Add animations', status: TASK_STATUS.OPEN, createdAt: new Date().toISOString() }
        ];
  });
  
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);
  
  // Filtered tasks
  const filteredTasks = filter === 'All' 
    ? tasks 
    : tasks.filter(task => task.status === filter);
  
  // Add a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      status: TASK_STATUS.OPEN,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };
  
  // Update a task
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };
  
  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  // Update task order (for drag and drop)
  const reorderTasks = (sourceIndex, destinationIndex) => {
    const result = Array.from(tasks);
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);
    setTasks(result);
  };

  return {
    tasks: filteredTasks,
    allTasks: tasks,
    filter,
    setFilter,
    addTask,
    updateTask,
    deleteTask,
    reorderTasks
  };
};