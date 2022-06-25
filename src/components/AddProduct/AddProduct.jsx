import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Contexts/DataContexts";

const AddProduct = () => {
  const navigate = useNavigate();
  const { createData } = useContext(dataContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [num, setNum] = useState("");
  const [image, setImage] = useState("");
  function handleSave() {
    if (!name || !lastName || !num || !image) {
      alert("заполните поля");
    } else {
      let newData = {
        name,
        lastName,
        num,
        image,
      };
      createData(newData);
      navigate("/");
      console.log(newData);
    }
  }
  return (
    <div className="block-inp">
      <input
        className="inp-data"
        onChange={e => setName(e.target.value)}
        type="text"
        placeholder="name"></input>
      <input
        className="inp-data"
        onChange={e => setLastName(e.target.value)}
        type="text"
        placeholder="Last name"></input>
      <input
        className="inp-data"
        onChange={e => setNum(e.target.value)}
        type="number"
        placeholder="mobile number"></input>
      <input
        className="inp-data"
        onChange={e => setImage(e.target.value)}
        type="text"
        placeholder="URL img"></input>
      <button className="btn-save" onClick={() => handleSave()}>
        Save
      </button>
    </div>
  );
};

export default AddProduct;
