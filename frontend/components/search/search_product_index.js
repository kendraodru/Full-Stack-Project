import React from 'react';
import SearchProductItem from './search_product_item'

class SearchProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
        this.handleSlide = this.handleSlide.bind(this);
    }

    componentDidMount(){
        this.props.fetchProducts();
    }

    handleSlide(){
        let searchBody = document.getElementById('search-wrap');
        window.setTimeout(() => this.props.closeModal(), 300);
        searchBody.style.transition = "all 0.3s ease-in-out";
        searchBody.style.right = "-1000px";
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
                        <div key={product.id} onClick={() => this.props.closeModal()}>
                            <SearchProductItem product={product}/>
                        </div>
                    )
                })
            )
        }

        return(
            <div>
                <div className="modal-background" onClick={()=>this.handleSlide()}></div>
                <div id="search-wrap">
                    <div className='close-x-div-cart'>
                        <span
                            onClick={() => this.handleSlide()}
                            className="close-x-cart">×
                        </span>
                    </div>
                    <div className="cart-header">Search</div>
                    <div className='search-form-wrap'>
                        <div className='search-bar'>
                            <input className='no-outline search-bar-input'
                                type="text"
                                onChange={this.handleInput()} 
                            />
                        </div>
                        <ul className='search-results'>
                            {filtered}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchProducts;