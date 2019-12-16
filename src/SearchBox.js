import React, {Component} from 'react';

const  SearchBox = ({searchChange}) => {

	return (
        <div className="pa2">
        	<input className="pa1 bg-lightest-blue"
        	 type="search"
        	 placeholder="search robots"
        	 onChange={searchChange} />

        </div>
		);
}
export default SearchBox;