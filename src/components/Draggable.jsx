import React, { useRef, useState } from 'react';

const Draggable = ({ children }) => {
  const dragRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="draggable"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div
        className="title-bar"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        Title Bar
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Draggable;
