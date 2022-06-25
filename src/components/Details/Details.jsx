import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = ({ getOneData, oneData }) => {
  console.log(oneData);
  const params = useParams();
  useEffect(() => {
    getOneData(params.id);
  }, []);
  return (
    <div className="details">
      {oneData ? (
        <div className="details-block">
          <h5>{oneData.name}</h5>
          <h5>{oneData.lastName}</h5>
          <h5>{oneData.num}</h5>
          <p>здесь должен быть что то поподробее</p>
          <img className="img" src={oneData.image} />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Details;
