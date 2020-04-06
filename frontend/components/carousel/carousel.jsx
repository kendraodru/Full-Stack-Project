// nts: MAKE ARROWS WHEN YOU HAVE TIME

import React from 'react';


class Carousel extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            photoUrls: this.props.product.photoUrls,
            currentImage: 0
        }

        // changes the photo
        // handle hover
        // next photo prev photo

        this.changePhoto = this.changePhoto.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
        this.prevPhoto = this.prevPhoto.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.product.id !== this.props.product.id){
            this.setState({ photoUrls: this.props.product.photoUrls })
        }
    }

    changePhoto(idx){
        this.setState({currentImage: idx})
    }

    nextPhoto(){
        let nextIdx = ((this.state.currentImage + 1) % (this.state.photoUrls.length))
        this.setState({currentImage: nextIdx})
    }

    prevPhoto(){
        let prevIdx = ((this.state.currentImage + this.state.photoUrls.length - 1) % (this.state.photoUrls.length))
        this.changePhoto(prevIdx)
    }

    handleHover(e){
        e.preventDefault();
        this.changePhoto(e.currentTarget.id)
    }
    render(){
        // debugger
        // const { product } = this.props
            return(
                <div className='carousel-holder'>
                    <div  className='photos-url-holder'>
                        {this.state.photoUrls.map((url, idx) =>{
                            return(
                            <div className='url-div' id={idx} key={idx} onMouseOver={e => this.handleHover(e)}>
                                <img src={url} className='individual-image'/>
                            </div>
                            )
                        })}
                    </div>
                    <div className='arrow-holder' onClick={(e)=>this.prevPhoto(e)}>
                        <div className='left-arrow'>
                            <img src={"https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/arrows/leftarrow.png"} alt="" />
                        </div>
                    </div>
                    <div className='large-photo'>
                        <img src={this.state.photoUrls[this.state.currentImage]} />
                    </div>
                    <div className='arrow-holder' onClick={this.nextPhoto}>
                        <div className='right-arrow'>
                            <img src={"https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/arrows/rightarrow.png"} alt=""/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Carousel;