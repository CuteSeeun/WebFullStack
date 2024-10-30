import React from 'react';

function KanbanCard({ text }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      {text}
    </div>
  );
}

export default KanbanCard;
