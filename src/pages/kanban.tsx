import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { ComponentKanbanColumn } from 'cabServer/global/__generated__/types';
import * as React from 'react';
import KanbanColumn from 'src/componentsDemo/kanban-board/KanbanColumn';

import { useGetKanbanByUserQuery } from '../../cabServer/queries/__generated__/kanban';

const Kanban = () => {
  const { data, loading, error } = useGetKanbanByUserQuery({
    variables: { id: '7' }, //make it for every user
  });
  console.log('data>>>', data);
  const kabanBoard = data?.usersPermissionsUser?.data?.attributes?.kanban;
  console.log('dataColumn', kabanBoard);

  const [columns, setColumns] = React.useState(
    data?.usersPermissionsUser?.data?.attributes?.kanban,
  );
  console.log('columns', columns);

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
    let move;
    let start = [];
    console.log('startBeforeArray', start);

    for (let i = 0; i < columns?.length; i++) {
      if (columns[i].id === source.droppableId) {
        start = columns[i].cards;
      }
    }
    console.log('startAfterArray', start);

    let finish = [];
    console.log('finishBeforeArray', finish);
    for (let i = 0; i < columns?.length; i++) {
      if (columns[i].id === destination.droppableId) {
        finish = columns[i].cards;
      }
    }
    console.log('finishAfterArray', finish);

    if (source.droppableId === `${destination.droppableId}`) {
      console.log('if different destination');
      move = start[source.index];
      console.log('move', move);

      let test1 = [...start];
      test1.splice(source.index, 1);
      start = [...test1];
      let test2 = [...finish];
      test2.splice(destination.index, 0, move);
      finish = [...test2];
      console.log('startAfterMove', start);
      console.log('finishAfterMove', finish);
      // const startF = start.filter((e) => {
      //   return e.id !== add.id;
      // });
      // console.log('startF', startF);

      // const finishF = [
      //   ...finish.slice(0, destination.index),
      //   add,
      //   ...finish.slice(destination.index),
      // ];
      // console.log('finishF', finishF);
    } else {
      move = finish[source.index];
      finish.splice(source.index, 1);
      start.splice(destination.index, 0, move);
    }
    //
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <KanbanColumn kabanBoard={kabanBoard} />
    </DragDropContext>
  );
};

export default Kanban;
