import React from 'react';
import { HorizontalResizeHandle } from 'react-resize-separator';

export function Table() {
  return (
    <table className="table border">
      <thead>
        <tr>
          <th id="table-col-1" className="position-relative">
            <label>col&nbsp;1</label>
            <HorizontalResizeHandle
              id="table-head-sep-1"
              className="resize-separator-vertical-absolute"
              attachedElementId="table-col-1"
            />
          </th>
          <th className="position-relative">
            <HorizontalResizeHandle
              id="table-head-sep-2"
              className="resize-separator-vertical-absolute"
            />
            col&nbsp;2
          </th>
          <th>col&nbsp;3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value&nbsp;1</td>
          <td>value&nbsp;2</td>
          <td>value&nbsp;3</td>
        </tr>
      </tbody>
    </table>
  );
}
