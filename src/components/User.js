import "../index.css";
import React from "react"
const User = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading.......</h1>
  }

  return (
     <div className="users">
      {data.map((data) => (
        <div>
          <div>
          <img src={data.picture.large} alt="" />
          </div>
          <div>
          <h2>{data.name.first}</h2>
          </div>
          
        </div>
      ))}
      
     </div>
  )  
};

export default User
