"use strict";
import {useDraggable} from '@dnd-kit/core';

export default function ExerciseBox(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    width: `10vw`,
    height: `10vh`,
  } : {
    width: `10vw`,
    height: `10vh`,
  };


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}