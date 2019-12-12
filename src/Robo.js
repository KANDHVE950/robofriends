import React, { Component } from 'react';



const Cards = (props) => {
  const { id, name, username, email } = props;
      return (
         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-S">
           <img  src={`https://robohash.org/${id}?100*100`} />
           <div>
            <h1>{name}</h1>
            <p>{username}</p>
            <p>{email}</p>
           </div>

         </div>
        )

}


export default Cards;
