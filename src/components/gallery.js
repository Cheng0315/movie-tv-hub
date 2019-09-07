import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
 
class Gallery extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 3 }},
    galleryItems: this.galleryItems(),
  }
 
  galleryItems() {
    return (
      this.props.array.fill().map((item, i) => <h2 className="item">{i + 1}</h2>)
    )
  }
 
  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }
 
  render() {
    const { currentIndex, galleryItems, responsive } = this.state
 
    return (
      <div>
        <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
      </div>
    )
  }
}

export default Gallery;