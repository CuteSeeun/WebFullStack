import React from 'react';
import KanbanCard from './KanbanCard';
import { Draggable } from 'react-beautiful-dnd';

function KanbanColumn({ title, items }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4">
      <h2 className="font-semibold text-lg mb-4">{title}</h2>
      <div className="space-y-2">
      {items.map((item, index) => (
  <Draggable key={item} draggableId={`${title}-${item}`} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <KanbanCard text={item} />
      </div>
    )}
  </Draggable>
))}
      </div>
    </div>
  );
}

export default KanbanColumn;
