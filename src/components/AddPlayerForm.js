import React, { useState } from "react";

export const AddPlayerForm = (props) => {
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value);
    // console.log(e.target);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addPlayer(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleValueChange}
        placeholder="Enter a player's name"
      />

      <input type="submit" value="Add Player" />
    </form>
  );
};
