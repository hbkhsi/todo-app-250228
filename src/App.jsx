import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilters from './components/TaskFilters';
import { useTasks, TASK_STATUS } from './hooks/useTasks';

// Initial loading animation that runs only once
const initialVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const App = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  
  const { 
    tasks, 
    filter, 
    setFilter, 
    addTask, 
    updateTask, 
    deleteTask,
    reorderTasks
  } = useTasks();
  
  // Disable animations after initial render for better performance
  useEffect(() => {
    if (isFirstRender) {
      const timer = setTimeout(() => {
        setIsFirstRender(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isFirstRender]);

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:py-12">
      <div className="max-w-lg mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Minimalist Todo
        </h1>
        
        <div className="card mb-6">
          <TaskForm addTask={addTask} />
        </div>
        
        <div className="card">
          <TaskFilters 
            currentFilter={filter} 
            setFilter={setFilter} 
            filters={['All', ...Object.values(TASK_STATUS)]}
          />
          
          <TaskList 
            tasks={tasks} 
            updateTask={updateTask} 
            deleteTask={deleteTask}
            reorderTasks={reorderTasks}
          />
          
          {tasks.length === 0 && (
            <p className="text-center py-8 text-gray-500">
              {filter === 'All' 
                ? 'No tasks yet. Add one above!' 
                : `No ${filter} tasks found.`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;