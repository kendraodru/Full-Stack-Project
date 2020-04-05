import React from 'react';
import SearchProductItem from './search_product_item'
// import Loading from '../loading/spinner';

class SearchProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }

    componentDidMount(){
        this.props.fetchProducts();
    }

    handleInput() {
        return (e) => {
            this.setState({ search: e.target.value })
        };
    }

    render(){

        const { products } = this.props;

        let filteredProducts = products.filter((product)=>{
            if (this.state.search.length === 0) {
                return false;
            }
            if (product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                return true;
            }
        })
        // returning true, will give us the products that are true
        let filtered;
        if(products.length === 0){
            return null;
        }else{
            filtered = (
                filteredProducts.map((product)=>{
                    return(
                        <SearchProductItem key={product.id} product={product}/>
                    )
                })
            )
        }

        return(
            <div>
                <div className='hamburger'></div>
                <input 
                    type="text"
                    onChange={this.handleInput()} 
                />
                <div> hello</div>
                <ul>
                    {filtered}
                </ul>
            </div>
        )
    }
}


export default SearchProducts;