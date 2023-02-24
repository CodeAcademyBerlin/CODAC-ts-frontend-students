import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { ComponentKanbanBoard } from 'cabServer/global/__generated__/types';
import * as React from 'react';
import KanbanColumn from 'src/componentsDemo/kanban-board/KanbanColumn';
import { useAuth } from 'src/hooks/useAuth';

import { useGetKanbanByUserQuery } from '../../cabServer/queries/__generated__/kanban';

const Kanban = () => {
  const { user } = useAuth();
  const { data, loading, error } = useGetKanbanByUserQuery({
    variables: { id: user?.id }, //make it for every user
  });
  console.log('data', data);
  const kabanBoard: ComponentKanbanBoard = data?.usersPermissionsUser?.data
    ?.attributes?.kanban as ComponentKanbanBoard;

  const [columns, setColumns] = React.useState(
    data?.usersPermissionsUser?.data?.attributes?.kanban,
  );

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);

    // If you drop the card outside of a column
    if (!destination) {
      return;
    }

    // If you drop the card on the same index of the same column
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If you drop the card on the same column but different index, else: you drop the card on a differet column and different index
    // let move;
    // let start = [];

    // for (let i = 0; i < columns?.length; i++) {
    //   if (columns[i].id === source.droppableId) {
    //     start = columns[i].cards;
    //   }
    // }

    // let finish = [];
    // for (let i = 0; i < columns?.length; i++) {
    //   if (columns[i].id === destination.droppableId) {
    //     finish = columns[i].cards;
    //   }
    // }
    // if (source.droppableId === `${destination.droppableId}`) {
    //   move = start[source.index];
    //   let test1 = [...start];
    //   test1.splice(source.index, 1);
    //   start = [...test1];
    //   let test2 = [...finish];
    //   test2.splice(destination.index, 0, move);
    //   finish = [...test2];
    // } else {
    //   move = finish[source.index];
    //   finish.splice(source.index, 1);
    //   start.splice(destination.index, 0, move);
    // }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <KanbanColumn kabanBoard={kabanBoard} />
    </DragDropContext>
  );
};

export default Kanban;
