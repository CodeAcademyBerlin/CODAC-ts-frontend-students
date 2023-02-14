import * as React from 'react';
import KanbanColumn from 'src/componentsDemo/kanban-board/KanbanColumn';
import KanbanFooter from 'src/componentsDemo/kanban-board/KanbanFooter';

const Kanban = () => {
  return (
    <div>
      <KanbanColumn />
      <KanbanFooter />
    </div>
  );
};

export default Kanban;
