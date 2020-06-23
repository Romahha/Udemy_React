import React from 'react';

const UserInput = (props) => {
    return (
      <div className="UserInput">
        <input onChange={props.handlerOnChange} value={props.username} />
      </div>
    );
}

export default UserInput;
