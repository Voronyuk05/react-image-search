import { Component } from "react";
import { FaSearch } from "react-icons/fa";
import '../../GlobalSyles.css'

export class Searchbar extends Component {
    state = {
        value: ''
    }

    render() {
        return (
            <header className="searchbar">
                <form className="form"
                onSubmit={(e) => this.props.onSubmit(e, this.state.value)}>
                    <button type="submit" className="search-form-button" >
                        <FaSearch />
                    </button>

                    <input
                    className="search-form-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={(e) => this.setState({value: e.currentTarget.value})}
                    />
                </form>
            </header>
        )
    }
}