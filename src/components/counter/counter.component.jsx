import React from "react";

export const Counter = ({name}) => {
  console.log("Counter()");
  const [ count, setCount ] = React.useState(0);
  // increment the `state.count` value
  return (
    <div className="ui-counter">
      <p className="ui-counter__title">Counter Widget</p>
      <div className="ui-counter__body">
        <p className="ui-counter__body__name">{name}</p>
        <p className="ui-counter__body__count">{count}</p>
        <button
          className="ui-counter__body__button"
          onClick={() => setCount(count + 1)}
          disabled={count === 3}
        >
          Increment
        </button>
      </div>
    </div>
  );
};