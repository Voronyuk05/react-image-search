import { Component } from "react"
import '../../GlobalSyles.css'

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown' , this.handleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = (e) => {
        if (e.code === 'Escape') {
            this.props.onChangeCurrentImg(null)
        }
    }

    handleOnBackdrop = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onChangeCurrentImg(null)
        }
    }

    render() {
        return (
            <div className="overlay" onClick={this.handleOnBackdrop}>
                <div className="modal">
                    <img src={this.props.currentImg} alt="" />
                </div>
            </div>
        )
    }
}