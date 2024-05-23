"use strict";

import Card from 'react-bootstrap/Card';

const fakeData = {
  title: 'Default day',
  date: '04/04/04'
}

function Workout({ data=fakeData }) {

  const { date, title } = data;

  return (
    <div className="bg-white rounded-100"style={{maxWidth:'12vw',alignSelf:'center'}}>
      <p>{ title } : { date }</p>
    </div>
  );
}

export default Workout;