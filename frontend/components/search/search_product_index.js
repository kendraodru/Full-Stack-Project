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


        const searchOverlay = document.querySelector('.modal-background');
        const searchBody = document.querySelector('.search-wrap');
        // const xBtn = document.querySelector('.close-x-cart');


        searchOverlay.addEventListener('click', () => {
            window.setTimeout(() => this.props.closeModal(), 300);
            searchBody.style.transition = "all 0.3s ease-in-out";
            searchBody.style.right = "-1000px";
            // console.log(overlay)
        });

        // xBtn.addEventListener('click', e => {
        //     e.preventDefault();

        //     window.setTimeout(() => this.props.closeModal(), 300);
        //     cartBody.style.transition = "all 0.3s ease-in-out";
        //     cartBody.style.right = "-1000px";
        // }); 
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
            <div className="search-wrap" onClick={e => e.stopPropagation()}>
                {/* <div className='hamburger'></div> */}
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