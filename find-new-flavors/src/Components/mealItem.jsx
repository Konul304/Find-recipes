import React from "react";
import { useNavigate } from "react-router-dom";

export const MealItem = ({data}) => {
    let navigate = useNavigate();
  return (
    <>
    {
        (!data) ? "Not found" : data.map(item => {
            return (
                 <div className="card" key={item.idMeal} onClick={()=> {navigate(`/${item.idMeal}`)}}>
        <img
          src={item.strMealThumb}
          alt=""
        />
        <h3>{item.strMeal}</h3>
      </div>
            )
        })
    }
     
    </>
  );
};

