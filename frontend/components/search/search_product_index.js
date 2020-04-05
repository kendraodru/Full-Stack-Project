import React from 'react';
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
            if (product.category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                return true;
            }
            if (product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                return true;
            }
            if (product.sub_category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                return true;
            }
            if (product.texture.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                return true;
            }
            if (product.aroma.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                return true;
            }
        })
        // returning true, will give us the products that are true
        let filtered;
        if(products.length === 0){
            return null;
        }

        return(
            <div>
                <div className='hamburger'></div>
                <input 
                    type="text"
                    onChange={this.handleInput()} 
                />
                <div> hello</div>
            </div>
        )
    }
}


export default SearchProducts;