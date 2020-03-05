import React from 'react';

class ProductShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render(){
        if (this.props.product === undefined) {
            return null;
        };
        
        const { product } = this.props
        return(
            <div>
                <div className="hamburger"></div>
                <p>hello</p>
                <p className="hereIAM">{product.description}</p>
                {/* <p>bye</p> */}
                {/* {this.props.product} */}
            </div>
        )
    }

};

export default ProductShow