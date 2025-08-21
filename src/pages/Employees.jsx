import React from 'react';
import { Header } from '../components';
import {
  ColumnDirective,
  ColumnsDirective,
  Page,
  GridComponent,
  Search,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10  bg-white rounded-xl">
      <Header category="Page" title="Employees " />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
