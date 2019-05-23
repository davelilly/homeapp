import React, {Component} from 'react'; //Was import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import products from './products';
//import * as serviceWorker from './serviceWorker';

class Results extends Component{
    constructor(props) {
        super(props);
        this.state = {
            foundProducts: props.products
        }
    }

    componentWillReceiveProps(nextProps){
        var foundProducts = nextProps.products.filter(product => {
            return product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
                   product.description.toLowerCase().match(nextProps.query.toLowerCase());
          });
          this.setState({
            foundProducts: foundProducts
          });
        console.log("RES: " + nextProps.query);
    }

    render() {
        return (
            <div className="results">
                <div className="stocked">
                    <h2>Toothpasted</h2>
                    <p>$2.99</p>
                    <p>Lorem ipsum dolor dskdf lkjshd iweh wiu eidushf usdhfoiewn oiowe oiwehfwe oihf</p>
                </div>
            </div>
        )
    }
}

class Searchbar extends Component{
    
    handleQuery(event){
        this.props.onQuery(event.target.value);
        //console.log("mySEARCH: " + event.target.value);
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={this.handleQuery.bind(this)} />
            </div>
        )
    }
}


class Search extends Component{ //Was simply function App() { with no render(){ below
    
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleQuery(query){
        //console.log("mySEARCHY: " +query.toLowerCase().trim());
        this.setState({'query': query.toLowerCase().trim()})
    }

    render() {
        return (
          <div className="search">
            <Searchbar onQuery={this.handleQuery.bind(this)}/>
            <Results products={this.state.products} query={this.state.query} />

          </div>
          ); 
    }
}


class App extends Component{ //Was simply function App() { with no render(){ below
  
   render(){
    return (
      <div className="App">
        
        <h1>homēapp.io</h1>
        
        <Search />
        
      </div>
      );
    }
  } 




ReactDOM.render(<Search />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
