import {useDroppable} from '@dnd-kit/core';

export default function ExerciseSlot(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    backgroundColor: isOver ? 'green' : `red`,
    width: `10vw`,
    height: `10vh`,
  };


  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}