import React from 'react';

function Screen({ displayValue }) {
  return (
    <div className="screen">
      <input type="text" value={displayValue} readOnly />
    </div>
  );
}

export default Screen;
