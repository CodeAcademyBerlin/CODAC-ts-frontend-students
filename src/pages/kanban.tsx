import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import {
  FormatColumns,
  MicrosoftXboxControllerBatteryCharging,
} from 'mdi-material-ui';
import * as React from 'react';
import KanbanColumn from 'src/componentsDemo/kanban-board/KanbanColumn';

const Kanban = () => {
  const [card, setCard] = React.useState<string>('');
  const [columns, setColumns] = React.useState<Array<Todo>>([]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let active = columns;
    // let complete = CompletedTodos;
    // Source Logic
    // AVERIGUAR EL "TODOSLIST" ID COMO PONERLO COMO STRING LITERAL?
    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    }
    // else {
    //   add = complete[source.index];
    //   complete.splice(source.index, 1);
    // }

    // Destination Logic
    // AVERIGUAR EL "TODOSLIST" ID COMO PONERLO COMO STRING LITERAL?
    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    }
    // else {
    //   complete.splice(destination.index, 0, add);
    // }
    setColumns(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <KanbanColumn />
    </DragDropContext>
  );
};

export default Kanban;
