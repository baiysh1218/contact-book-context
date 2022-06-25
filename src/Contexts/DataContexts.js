import React, { useReducer } from "react";
import axios from "axios";

export const dataContext = React.createContext();

const INIT_STATE = {
  data: [],
  oneData: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "GET_ONE_DATA":
      return { ...state, oneData: action.payload };
    default:
      return state;
  }
}
const DataContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const API = "http://localhost:8001/data";
  async function createData(newData) {
    await axios.post(API, newData);
  }
  async function getData() {
    let res = await axios(API);
    dispatch({
      type: "GET_DATA",
      payload: res.data,
    });
  }
  async function deleteData(id) {
    await axios.delete(`${API}/${id}`);
    getData();
  }
  async function getOneData(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_DATA",
      payload: res.data,
    });
  }
  async function updataData(id, editedData) {
    await axios.patch(`${API}/${id}`, editedData);
    getData();
  }
  return (
    <dataContext.Provider
      value={{
        data: state.data,
        oneData: state.oneData,
        createData,
        getData,
        deleteData,
        getOneData,
        updataData,
      }}>
      {children}
    </dataContext.Provider>
  );
};
export default DataContextProvaider;
