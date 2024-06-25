"use strict";

import {DndContext} from '@dnd-kit/core';
import ExerciseBox from './ExerciseBox';
import ExerciseSlot from './ExerciseSlot';

export default function WorkoutBuilder() {
  return (
    <DndContext>
      <div className='container'>
      <ExerciseSlot />
      <ExerciseBox />
      <br/>
      <ExerciseBox />
      <br/>
      <ExerciseBox />
      <br/> 
      <ExerciseBox />
      </div>
    </DndContext>
  );
}