import React, { useContext, useEffect } from "react";
import DataCard from "../DataCard/DataCard";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Contexts/DataContexts";

const List = () => {
  const navigate = useNavigate();
  const { getData, data, deleteData } = useContext(dataContext);
  // console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="add-block">
      <div className="btn-add-block">
        <button className="btn-add" onClick={() => navigate("/add")}>
          Add contact
        </button>
      </div>
      {data.map(item => (
        <DataCard key={item.id} item={item} deleteData={deleteData} />
      ))}
    </div>
  );
};

export default List;
