import React from 'react';

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            urls: this.props.urls,
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

    changePhoto(idx){
        this.setState({currentImage: idx})
    }

    nextPhoto(){
        let nextIdx = ((this.state.currentImage + 1) % this.state.urls.length)
        this.setState({currentImage:nextIdx})
    }

    prevPhoto(){
        let prevIdx = ((this.state.currentImage - 1) % this.state.urls.length)
        this.setState({currentImage:prevIdx})
    }

    handleHover(e){
        e.preventDefault();
        this.changePhoto({currentImage: e.currentTarget.id})
    }

    render(){
        <div className='carousel-holder'>
            <div  className='photos-url-holder'>
                {this.props.urls.map((url, idx) =>{
                    <div className='url-div' id={idx} key={idx} onMouseOver={e => this.handleHover(e)}>
                        <img src={url} className='individual-image'/>
                    </div>
                }) }
            </div>
            <div className="photo-arrows">
                <div className='left-arrow' onClick={this.prevPhoto}>
                        { leftArrowImage}
                        {/* create this component^ */}
                </div>
                <div className='right-arrow' onClick={this.nextPhoto}>
                        { rightArrowImage}
                        {/* create this component^ */}
                </div>
            </div>
            <div className='large-photo'>
                <img src={this.state.urls[this.state.currentImage]} />
            </div>

        </div>
    }
}

export default Carousel;