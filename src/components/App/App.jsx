import { Component } from "react"
import { Searchbar } from "components/Searchbar/Searchbar"
import { ImageGallery } from "components/ImageGallery/ImageGallery"
import { Button } from "components/Button/Button"
import { Modal } from "components/Modal/Modal"
import { Loader } from "components/Loader/Loader"
import '../../GlobalSyles.css'

export class App extends Component {
  state = {
    query: '',
    images: null,
    page: 1,
    currentImg: null,
    isLoading: null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({isLoading: true})
      fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=39207227-e0b610c42232251ba1ba1b4e0&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(img => {
        if (this.state.images) {
          this.setState((prevState) => ({
            images: [
              ...prevState.images,
              ...img.hits
            ],
            isLoading: false
          }))
        } else {
          this.setState({
            images: img.hits,
            isLoading: false
          })
        }
      })
    }

  }

  onChangeCurrentImg = (img) => {
    this.setState({
      currentImg: img
    })
  }

  onLoadMore = () => {
    this.setState((prevState) => ({page: prevState.page + 1}))
  }

  onSubmit = (e, value) => {
    e.preventDefault()
    this.setState({query: value})
  }


  render() {
    const {images, isLoading, currentImg} = this.state

    return (
      <div className="app">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} onChangeCurrentImg={this.onChangeCurrentImg}/>
        {images && <Button onLoadMore={this.onLoadMore}/>}
        {isLoading && <Loader/>}

        {currentImg && <Modal onChangeCurrentImg={this.onChangeCurrentImg} currentImg={this.state.currentImg} />}
      </div>
    )
  }
};
