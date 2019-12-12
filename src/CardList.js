import React, { Component } from 'react';
import Cards from './Robo.js';

const CardList = ({ robots }) => {
	
	return (
       <div> {
	     robots.map((user,i) => {
		  return (
            <Cards 
               key={i} 
               id={robots[i].id} 
               name={robots[i].name} 
               email={robots[i].email} 
               username={robots[i].username}
             />
          );
	     })
        }
       </div>
	);
}
export default CardList;