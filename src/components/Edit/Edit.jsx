import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataContext } from "../../Contexts/DataContexts";

const Edit = () => {
  const { id } = useParams();
  const { getOneData, oneData, updataData } = useContext(dataContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [num, setNum] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    getOneData(id);
  }, []);
  console.log(oneData);
  useEffect(() => {
    if (oneData) {
      setName(oneData.name);
      setLastName(oneData.lastName);
      setNum(oneData.num);
      setImage(oneData.image);
    }
  }, [oneData]);

  function handleSave() {
    let editedData = {
      name,
      lastName,
      num,
      image,
    };
    updataData(id, editedData);
    navigate("/");
  }
  return (
    <div>
      {oneData ? (
        <div>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
          />
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            type="text"
          />
          <input
            value={num}
            type="number"
            onChange={e => setNum(e.target.value)}
          />
          <input
            value={image}
            onChange={e => setImage(e.target.value)}
            type="text"
          />
          <button onClick={() => handleSave()}>Save</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Edit;
