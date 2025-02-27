import React, { memo } from 'react';

// Using memo to prevent unnecessary re-renders
const TaskFilters = memo(({ currentFilter, setFilter, filters }) => {
  return (
    <div className="flex justify-center mb-4 border-b pb-3">
      <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn transition-all duration-200 hover:scale-105 active:scale-95 ${
              currentFilter === filter ? 'filter-btn-active' : 'filter-btn-inactive'
            }`}
            onClick={() => setFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
});

export default TaskFilters;