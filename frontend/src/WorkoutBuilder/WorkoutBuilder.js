"use strict";

import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import ExerciseBox from './ExerciseBox';
import ExerciseSlot from './ExerciseSlot';

export default function WorkoutBuilder() {
  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  const draggableMarkup = (
     <ExerciseBox>Drag me</ExerciseBox>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='container'>
        {!isDropped ? draggableMarkup : null}
        <ExerciseSlot>
          {isDropped ? draggableMarkup : 'Drop here'}
        </ExerciseSlot>
      </div>
    </DndContext>
  );
}