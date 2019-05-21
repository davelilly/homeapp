import React, {Component} from 'react'; //Was import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import Results from './components/Results';
import './products.js';

class App extends Component{ //Was simply function App() { with no render(){ below

  constructor(props){
		super(props);
		this.state={
			query:''
		};
  }
  
  handleq (qry) {
    //console.log("Searching:" + qry)
    this.setState({'qry': qry.toLowerCase().trim()})
  }
  
  
  // componentWillReceiveProps(nextProps){
	// 	var foundProducts = nextProps.products.filter(product => {
	// 	  return product.name.toLowerCase().match(nextProps.rezults.toLowerCase()) ||
	// 			   product.description.toLowerCase().match(nextProps.rezults.toLowerCase());
	// 	});
	// 	this.setState({
	// 	  foundProducts: foundProducts
	// 	});		
	// 	//console.log("Results:"+ nextProps.rezults);
	// 	//console.log(nextProps.productz);		
	// }

	
 render(){
  return (
    <div className="App">
      
      <h1>homēapp.io</h1>
      
      <Searchbar onQuery={this.handleq.bind(this)}/>
      <Results />
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
 } 
  

export default App;
