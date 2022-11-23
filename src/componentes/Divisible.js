import React, { useState } from "react";
import div from "../base/divisibles";
import { useState } from "react";
const Divisible = () => {
  const [number, setNumber] = useState();

  const handleChange = ({ target: { number, value } }) => {
    setUser({ [number]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await alert(div(number));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese el numero del que quiere saber la cantidad de divisbles por 3
          y 5:
        </label>
        <input
          type="number"
          name="number"
          id="number"
          onChange={handleChange}
        ></input>
        <button>Calcular</button>
      </form>
    </div>
  );
};

export default Divisible;
