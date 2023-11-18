import React from 'react';
import {
  HorizontalResizeHandle,
  VerticalResizeHandle,
} from 'react-resize-separator';

export function Grid() {
  const [wCol1, setWCol1] = React.useState<number>(100);
  const [wCol2, setWCol2] = React.useState<number>(100);
  const [wCol3, setWCol3] = React.useState<number>(100);
  const [hRow1, setHRow1] = React.useState<number>(100);
  const [hRow2, setHRow2] = React.useState<number>(100);

  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: `${wCol1}px ${wCol2}px ${wCol3}px`,
        gridTemplateRows: `${hRow1}px ${hRow2}px`,
      }}
    >
      <div
        id="cell-one"
        className="border position-relative"
        style={{ minWidth: '20px', minHeight: '20px' }}
      >
        <label>One</label>
        <HorizontalResizeHandle
          id="cell-one-vsep"
          attachedElementId="cell-one"
          className="resize-separator-vertical-absolute"
          onMouseResize={(e, elem, newPxWidth) => setWCol1(newPxWidth)}
        />
        <VerticalResizeHandle
          id="cell-one-hsep"
          attachedElementId="cell-one"
          className="resize-separator-horizontal-absolute"
          onMouseResize={(e, elem, newPxHeight) => setHRow1(newPxHeight)}
        />
      </div>
      <div
        id="cell-two"
        className="border position-relative"
        style={{ minWidth: '20px', minHeight: '20px' }}
      >
        <label>Two</label>
        <HorizontalResizeHandle
          id="cell-two-vsep"
          attachedElementId="cell-two"
          className="resize-separator-vertical-absolute"
          onMouseResize={(e, elem, newPxWidth) => setWCol2(newPxWidth)}
        />
        <VerticalResizeHandle
          id="cell-two-hsep"
          attachedElementId="cell-two"
          className="resize-separator-horizontal-absolute"
          onMouseResize={(e, elem, newPxHeight) => setHRow1(newPxHeight)}
        />
      </div>
      <div
        id="cell-three"
        className="border position-relative"
        style={{ minWidth: '20px', minHeight: '20px' }}
      >
        <label>Three</label>
        <VerticalResizeHandle
          id="cell-three-hsep"
          attachedElementId="cell-three"
          className="resize-separator-horizontal-absolute"
          onMouseResize={(e, elem, newPxHeight) => setHRow1(newPxHeight)}
        />
      </div>
      <div
        id="cell-four"
        className="border position-relative"
        style={{ minWidth: '20px', minHeight: '20px' }}
      >
        <label>Four</label>
        <HorizontalResizeHandle
          id="cell-four-vsep"
          attachedElementId="cell-four"
          className="resize-separator-vertical-absolute"
          onMouseResize={(e, elem, newPxWidth) => setWCol1(newPxWidth)}
        />
        <VerticalResizeHandle
          id="cell-four-hsep"
          attachedElementId="cell-four"
          className="resize-separator-horizontal-absolute"
          onMouseResize={(e, elem, newPxHeight) => setHRow2(newPxHeight)}
        />
      </div>
      <div
        id="cell-five"
        className="border position-relative"
        style={{ minWidth: '20px', minHeight: '20px' }}
      >
        <label>Five</label>
        <HorizontalResizeHandle
          id="cell-five-vsep"
          attachedElementId="cell-five"
          className="resize-separator-vertical-absolute"
          onMouseResize={(e, elem, newPxWidth) => setWCol2(newPxWidth)}
        />
        <VerticalResizeHandle
          id="cell-five-hsep"
          attachedElementId="cell-five"
          className="resize-separator-horizontal-absolute override-hsep-top"
          onMouseResize={(e, elem, newPxHeight) => {
            const deltaY = elem.getBoundingClientRect().y - e.clientY;
            setHRow1(hRow1 - deltaY);
          }}
        />
      </div>
      <div
        id="cell-six"
        className="border position-relative"
        style={{ minWidth: '20px', minHeight: '20px', paddingLeft: '1rem' }}
      >
        <label>Six</label>
        <HorizontalResizeHandle
          id="cell-six-vsep"
          attachedElementId="cell-six"
          className="resize-separator-vertical-absolute override-vsep-left"
          onMouseResize={(e, elem, newPxWidth) => {
            const deltaX = elem.getBoundingClientRect().x - e.clientX;
            setWCol2(wCol2 - deltaX);
          }}
        />
      </div>
    </div>
  );
}
