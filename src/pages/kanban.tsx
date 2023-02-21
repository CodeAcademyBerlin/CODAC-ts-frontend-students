import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { ComponentKanbanColumn } from 'cabServer/global/__generated__/types';
import { indexOf } from 'lodash';
import * as React from 'react';
import KanbanColumn from 'src/componentsDemo/kanban-board/KanbanColumn';

import { useGetKanbanByUserQuery } from '../../cabServer/queries/__generated__/kanban';

const Kanban = () => {
  const { data, loading, error } = useGetKanbanByUserQuery({
    variables: { id: `${'7'}` }, //make it for every user
  });
  const column = data?.usersPermissionsUser?.data?.attributes?.kanban?.columns;
  console.log('dataColumn', column);

  // const [startColumn, setStartColumn] = React.useState<
  //   Array<ComponentKanbanColumn>
  // >([]);
  // const [endColumn, setEndColumn] = React.useState<
  //   Array<ComponentKanbanColumn>
  // >([]);
  const [columns, setColumns] = React.useState(
    data?.usersPermissionsUser?.data?.attributes?.kanban?.columns,
  );

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);

    if (!destination) {
      console.log('if no destination');
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log('if same destination');
      return;
    }
    let add;
    let start = [];

    // console.log('start', start);

    for (let i = 0; i < columns?.length; i++) {
      if (columns[i].id === source.droppableId) {
        start = columns[i].cards;
      }
    }
    console.log('start', start);
    let finish = [];
    for (let i = 0; i < columns?.length; i++) {
      if (columns[i].id === destination.droppableId) {
        finish = columns[i].cards;
      }
    }
    console.log('finish', finish);

    if (source.droppableId === `${destination.droppableId}`) {
      console.log('if different destination');
      add = start[source.index];
      console.log('add', add);
      start.splice(source.index, 1);
      finish.splice(destination.index, 0, add);
      console.log('start', start);
      console.log('finish', finish);
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
      add = finish[source.index];
      finish.splice(source.index, 1);
      start.splice(destination.index, 0, add); // splice() removes elements from the arry
    }

    if (destination.droppableId === `${destination.droppableId}`) {
      finish.splice(destination.index, 0, add);
    } else {
      start.splice(destination.index, 0, add);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <KanbanColumn column={column} />
    </DragDropContext>
  );
};

export default Kanban;
