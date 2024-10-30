import React, { useState } from 'react';
import KanbanColumn from './KanbanColumn';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const initialColumns = [
  { id: '1', title: '할 일', items: ['회의하기', '디비 설계하기'] },
  { id: '2', title: '진행 중', items: ['유저 플로우 차트'] },
  { id: '3', title: '완료', items: ['wbs 작성'] },
];

function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // 드래그를 다른 영역에 두었을 때 취소
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceColumnIndex = columns.findIndex((col) => col.id === source.droppableId);
    const destinationColumnIndex = columns.findIndex((col) => col.id === destination.droppableId);

    const sourceColumn = columns[sourceColumnIndex];
    const destinationColumn = columns[destinationColumnIndex];

    const sourceItems = Array.from(sourceColumn.items);
    const [removed] = sourceItems.splice(source.index, 1);

    if (sourceColumn === destinationColumn) {
      sourceItems.splice(destination.index, 0, removed);
      const newColumns = [...columns];
      newColumns[sourceColumnIndex] = { ...sourceColumn, items: sourceItems };
      setColumns(newColumns);
    } else {
      const destinationItems = Array.from(destinationColumn.items);
      destinationItems.splice(destination.index, 0, removed);

      const newColumns = [...columns];
      newColumns[sourceColumnIndex] = { ...sourceColumn, items: sourceItems };
      newColumns[destinationColumnIndex] = { ...destinationColumn, items: destinationItems };
      setColumns(newColumns);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex space-x-4 p-4">
        {columns.map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="w-1/3">
                <KanbanColumn title={column.title} items={column.items} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
