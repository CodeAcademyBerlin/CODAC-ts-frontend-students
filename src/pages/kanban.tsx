import { DragDropContext } from '@hello-pangea/dnd';
import * as React from 'react';
import KanbanColumn from 'src/componentsDemo/kanban-board/KanbanColumn';

const Kanban = () => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div>
        <KanbanColumn />
      </div>
    </DragDropContext>
  );
};

export default Kanban;
