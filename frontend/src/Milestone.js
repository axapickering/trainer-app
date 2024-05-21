"use strict";

import Form from 'react-bootstrap/Form';

function Milestone( {text, date}) {


  return (
    <Form>
      <div key={`default-checkbox`} className="mb-3">

          <Form.Check
            disabled
            type={'checkbox'}
            label={date ? `${text} : ${date}` : `${text}`}
            isValid={true}
            defaultChecked={true}
            id={`disabled-default-${'checkbox'}`}
          />
        </div>

    </Form>
  );
}

export default Milestone;