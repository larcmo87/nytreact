import { Input, SearchFormBtn } from "../../components/Form";
import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from '../../utils/API';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import  "react-day-picker/lib/style.css";
import styles from '../../index.css';
import Results from '../Results';

const DAY_FORMAT = 'YYYYMMDD';

class Form extends Component {

	
	state = {
	    nytArticles: [],
	    mongoArticles: [],
	    query: "",
	    topic: "",
	    beginDT: "19500101",
	    endDT: moment(Date.now()).format(DAY_FORMAT)
	   
  	};

  	componentDidMount() {
   
  	}

	searchNYT = (query, beginDt, endDt) => {
		this.setState({
			nytArticles: []
		});

		API.getNYTArcitle(query, beginDt, endDt)
		.then(res => {
			this.setState({
				nytArticles: res.data.response.docs,
				query: "",
				topic: "",
				beginDT: "19500101",
				endDT: moment(Date.now()).format(DAY_FORMAT)
			})


			let searchResult = this.state.nytArticles;
			console.log(JSON.stringify(searchResult, null, 2));
			console.log("search result lenght = " + this.state.nytArticles.length);
		})	
		.catch(err => console.log(err));

			
		
		
	};
	 handleStartDayChange = (beginDT) => {
	 	beginDT = moment(beginDT).format(DAY_FORMAT)
	 	console.log()
	    this.setState({
	      beginDT
	    });
	  };

	handleEndDayChange  = (endDT) => {
	 	endDT = moment(endDT).format(DAY_FORMAT)
	 	console.log()
	    this.setState({
	      endDT
	    });
	  }; 

	handleInputChange = event =>{
		const { name, value } = event.target;
		console.log("event target = " + event.target);
	    this.setState({
	    	[name]: value
    	});
	};
	
	  handleFormSubmit = event => {
	  	event.preventDefault();
	  	if (this.state.topic && this.state.beginDT && this.state.endDT) {
	  		this.searchNYT(this.state.topic, this.state.beginDT, this.state.endDT);
	   		console.log("states = " + JSON.stringify(this.state, null, 2));
	   }
	  };


	render() {
		  
		return (
			<div className="form">
			 	<div className="row">
		        	<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>

		        	<div className="col-sm-8 col-md-8 col-lg-8 search">
		        		<div className="panel panel-default">
		        			<div className="panel-body">
		        				<h2>Search</h2>
		        			</div>
		        		</div>
		          		<form className="search-submit">
							 <Input	 
						 	  value={this.state.topic}                
			                  name="topic"
			                  placeholder="Topic (Required)"
			                  onChange={this.handleInputChange}
			                />	
			                <div className="select-date">
					   			<div className="date-header">
		        					<h6>Search Start Date</h6>
		        				</div>
				                <DayPickerInput 
				                  value={this.state.beginDT}
				                  className="start-day-picker form-control"			                  		                  
				                  name="beginDT"			                  
				                  onDayChange={this.handleStartDayChange}
				                  placeholder="Please enter date" format="YYYYMMDD"
				                />
				            </div>	

				            <div className="select-date">
				                <div className="date-header">
				               		<h6>Search End Date</h6>
				                </div>	
				                <div className="overlay">		               
				                <DayPickerInput style={{index:4}}
				                  value={this.state.endDT}
				                  className="start-day-picker form-control"			                  		                  
				                  name="endDT"			                  
				                  onDayChange={this.handleEndDayChange}
				                />
				                </div>
				            </div>	   

					   	</form>				   		
					   	
			   			<SearchFormBtn 
			   			 onClick={this.handleFormSubmit }
			   			 disabled={!(this.state.topic && this.state.beginDT && this.state.endDT)}
			   			 >				   			 
			   			  Search Article			   			 
		                </SearchFormBtn>
		               	
		                 
		        	</div>     
		        		
		        	<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>
	        	</div> 
	        	<div className="row saved-articles">
	        		<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>
        			<div className="col-sm-8 col-md-8 col-lg-8">
        				 <Link to={"/saved"} id="saved-articles">
        					<button className="btn btn-info">Saved Articles</button>	
        				</Link>
        			</div>
        			<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>
		        </div>
		        <div className="row results-row">
	        		<div className="col-sm-2 col-md-2 col-lg-2 results-col">
		        	</div>	
		        	<div className="col-sm-8 col-md-8 col-lg-8 results-col">
			        	{(this.state.nytArticles.length) ? (

			        		<Results searchResult={this.state.nytArticles} />

			        	) : (<div></div>)}
			        </div>
			    	<div className="col-sm-2 col-md-2 col-lg-2 results-col">
		        	</div>
		        </div>	

        	</div>
		);
	}
}
 
export default Form;