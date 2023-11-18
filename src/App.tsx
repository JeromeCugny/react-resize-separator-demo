import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-resize-separator/dist/css/index.css';
import { Table } from './table';
import { HBlock, VBlock } from './FlexBlocks';
import { Grid } from './grid';

export function App() {
  return (
    <div>
      <div>
        <h1>Table cols</h1>
        <Table />
      </div>
      <div>
        <h1>Horizontal flex blocks</h1>
        <HBlock />
      </div>
      <div>
        <h1>Vertical flex blocks</h1>
        <VBlock />
      </div>
      <div>
        <h1>Grid</h1>
        <Grid />
      </div>
    </div>
  );
}
