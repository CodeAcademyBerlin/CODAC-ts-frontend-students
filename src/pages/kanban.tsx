import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { ComponentKanbanColumn } from 'cabServer/global/__generated__/types';
import * as React from 'react';
import KanbanColumn from 'src/componentsDemo/kanban-board/KanbanColumn';

import { useGetKanbanByUserQuery } from '../../cabServer/queries/__generated__/kanban';

const Kanban = () => {
  const { data, loading, error } = useGetKanbanByUserQuery({
    variables: { id: 7 }, //make it for every user
  });
  const column = data?.usersPermissionsUser?.data?.attributes?.kanban?.columns;
  console.log('dataColumn', column);

  const [startColumn, setStartColumn] = React.useState<
    Array<ComponentKanbanColumn>
  >([]);
  const [endColumn, setEndColumn] = React.useState<
    Array<ComponentKanbanColumn>
  >([]);

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
    let active = startColumn;
    let complete = endColumn;

    // Source Logic
    if (source.droppableId === `${source.droppableId}`) {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === `${destination.droppableId}`) {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setStartColumn(active);
    setEndColumn(complete);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <KanbanColumn column={column} />
    </DragDropContext>
  );
};

export default Kanban;
