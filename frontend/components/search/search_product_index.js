import React from 'react';
import SearchProductItem from './search_product_item'
import Loading from '../loading/spinner';

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

        // const overlay = document.querySelector('.modal-background'); 
        // let searchBody = document.getElementById('search-wrap');
        // // const xBtn = document.querySelector('.close-x-cart');
        // // debugger
        // console.log(searchOverlay)
        // // if (searchOverlay){
            // overlay.addEventListener('click', () => {
            //     console.log(searchBody)
            //     window.setTimeout(() => this.props.closeModal(), 300);
            //     searchBody.style.transition = "all 0.3s ease-in-out";
            //     searchBody.style.right = "-1000px";
            // });
        // }
        // xBtn.addEventListener('click', e => {
        //     e.preventDefault();

        //     window.setTimeout(() => this.props.closeModal(), 300);
        //     cartBody.style.transition = "all 0.3s ease-in-out";
        //     cartBody.style.right = "-1000px";
        // }); 
    }

    handleSlide(){
        // debugger
        let searchBody = document.getElementById('search-wrap');
        // if (searchBody){
        window.setTimeout(() => this.props.closeModal(), 300);
        searchBody.style.transition = "all 0.3s ease-in-out";
        searchBody.style.right = "-1000px";
        // }
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
                <div className="modal-background" onClick={()=>this.handleSlide()}></div>
                <div id="search-wrap">
                    <div className='close-x-div-cart'>
                        <span
                            onClick={() => this.handleSlide()}
                            className="close-x-cart">×
                            </span>
                    </div>
                    {/* <div className='hamburger'></div> */}
                    <input 
                        // onClick={e => e.stopPropagation()}
                        type="text"
                        onChange={this.handleInput()} 
                    />
                    <div> hello</div>
                    <ul>
                        {filtered}
                    </ul>
                </div>
            </div>
        )
    }
}


export default SearchProducts;