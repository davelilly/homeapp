import React, {Component} from 'react'; //Was import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import products from './products';
//import * as serviceWorker from './serviceWorker';


//console.log(products);



class Result extends Component {
    render() {
        return (
            <div className="stocked">
                <h2>{this.props.product.name}</h2>
                <p>{this.props.product.price}</p>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}



class Results extends Component{
    constructor(props) {
        super(props);
        this.state = {
            foundProducts: props.products
        }
    }

    componentWillReceiveProps(nextProps){
        //console.log(nextProps.query);
        var foundProducts = nextProps.products.filter(product => {
            return product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
                   product.description.toLowerCase().match(nextProps.query.toLowerCase());
          });
          this.setState({
            foundProducts: foundProducts
          });
        console.log("REZ: " + nextProps.query);
        console.log(nextProps.products);
    }

    render() {
        return (
            <div className="results">
                {this.state.foundProducts.map((product, i) => { //could remove function and >
          return (
            <Result product={product} key={i} />
          )
        })}
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
            query: '',
            //productz: products //charles helped
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
            <Results products={this.props.products} query={this.state.query} />
          </div>
          ); 
    }
}

ReactDOM.render(
    <Search products={products} />,  //I was MISSING THIS products={products}!!
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
