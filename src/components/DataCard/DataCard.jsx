import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../../Contexts/DataContexts";

const Card = ({ item, deleteData }) => {
  return (
    <div className="book-block">
      <div className="item-data">{item.name}</div>
      <div className="item-data">{item.lastName}</div>
      <div className="item-data">{item.num}</div>
      <img className="item-data" alt="IMG" src={item.image} width="250px" />
      <Link to={`/edit/${item.id}`} className="btn-edit">
        Edit
      </Link>
      <button onClick={() => deleteData(item.id)} className="btn-delete">
        Delete
      </button>
      <Link to={`/details/${item.id}`} className="btn-edit">
        details
      </Link>
    </div>
  );
};

export default Card;
