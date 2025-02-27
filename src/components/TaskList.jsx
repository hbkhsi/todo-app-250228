import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask, reorderTasks }) => {
  // Optional: Add drag and drop functionality here using a library like react-beautiful-dnd
  // For simplicity, I'm just displaying the tasks without drag and drop
  
  return (
    <div className="space-y-3 mt-3">
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.2,
              // Removed staggered delay for better performance
            }}
            // Removed layout prop to prevent constant recalculation
          >
            <TaskItem
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;