import React from 'react';
import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective,
} from '@syncfusion/ej2-react-kanban';

import { kanbanGrid, kanbanData } from '../data/dummy';
import { Header } from '../components';
import { itemsToOrder } from '@syncfusion/ej2/treemap';
const Kanban = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10  bg-white rounded-xl">
      <Header category="App" title="Kanban " />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id',
        }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((items, index) => (
            <ColumnDirective key={index} {...items} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
