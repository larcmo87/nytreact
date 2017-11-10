import { Input, SearchFormBtn } from "../..Form";
import React, { Component } from 'react';

class Form extends Component {

	searchNYT = event => {

	}
	 render() {
		return (
			<form>
				 <Input	                 
	                  name="topic"
	                  placeholder="Topic (Required)"
	                />
	                <Input
	                  min="1950"
	                  max="9999"
	                  name="start-year"
	                  placeholder="Start Year (Optional)"
	                />
	                <Input
	                 
	                  type="number"
	                  min="1950"
	                  max="9999"
	                  name="end-year"
	                  placeholder="End Year (Optional)"
	                />
	                <SearchFormBtn>
	                  Search Article
	                </SearchFormBtn>
	   		</form>
		);
	}
}
 
export default Form;