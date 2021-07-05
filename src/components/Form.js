import React from "react";

const Form = ({ handleSubmit, setValue, value }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Add a Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit" data-testid="submit-button">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
