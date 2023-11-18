import React from 'react';
import {
  HorizontalResizeHandle,
  VerticalResizeHandle,
} from 'react-resize-separator';

export function HBlock() {
  return (
    <div className="d-flex" style={{ height: '20vh' }}>
      <div
        className="overflow-scroll flex-only-basis-auto"
        style={{ width: '30vw' }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis
          odio, euismod non turpis a, mollis maximus libero. Integer blandit
          luctus cursus. Morbi fermentum sollicitudin arcu, in dictum augue
          facilisis fringilla. Morbi nec metus et arcu ultricies ornare. Proin
          id erat ut nunc varius faucibus a eget risus. Pellentesque in
          vestibulum erat, ut iaculis nunc. Donec ultrices facilisis urna, at
          commodo tortor interdum id.
        </p>
      </div>
      <HorizontalResizeHandle
        id="hblock-separator"
        className="resize-separator-vertical"
      />
      <div className="overflow-scroll" style={{ flex: 'auto' }}>
        <p>
          Mauris ut erat vel mi molestie pellentesque. Curabitur interdum turpis
          a neque lacinia iaculis. Phasellus pretium, nibh sit amet molestie
          efficitur, enim risus mattis massa, eget bibendum tortor orci et
          tellus. Donec aliquam venenatis ante, eget vestibulum tellus commodo
          a. Sed id lorem dui. Aliquam at accumsan lorem. Nullam ac lectus
          accumsan arcu dignissim sodales. Suspendisse potenti. Aenean pharetra
          pellentesque tincidunt. Etiam hendrerit scelerisque neque at
          fringilla.
        </p>
      </div>
    </div>
  );
}

export function VBlock() {
  return (
    <div
      className="d-flex"
      style={{ width: '40vh', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        className="overflow-scroll flex-only-basis-auto"
        style={{ height: '20vw' }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis
          odio, euismod non turpis a, mollis maximus libero. Integer blandit
          luctus cursus. Morbi fermentum sollicitudin arcu, in dictum augue
          facilisis fringilla. Morbi nec metus et arcu ultricies ornare. Proin
          id erat ut nunc varius faucibus a eget risus. Pellentesque in
          vestibulum erat, ut iaculis nunc. Donec ultrices facilisis urna, at
          commodo tortor interdum id.
        </p>
      </div>
      <VerticalResizeHandle
        id="vblock-separator"
        className="resize-separator-horizontal flex-only-basis-auto"
      />
      <div className="overflow-scroll" style={{ flex: 'auto' }}>
        <p>
          Mauris ut erat vel mi molestie pellentesque. Curabitur interdum turpis
          a neque lacinia iaculis. Phasellus pretium, nibh sit amet molestie
          efficitur, enim risus mattis massa, eget bibendum tortor orci et
          tellus. Donec aliquam venenatis ante, eget vestibulum tellus commodo
          a. Sed id lorem dui. Aliquam at accumsan lorem. Nullam ac lectus
          accumsan arcu dignissim sodales. Suspendisse potenti. Aenean pharetra
          pellentesque tincidunt. Etiam hendrerit scelerisque neque at
          fringilla.
        </p>
      </div>
    </div>
  );
}
