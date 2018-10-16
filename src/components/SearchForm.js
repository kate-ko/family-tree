import React, { Component } from 'react';
import { observable } from "mobx";
import { inject, observer } from 'mobx-react';

@inject("store")

@observer
class SearchForm extends Component {
    @observable name = ""

    inputChange = (e) => {
        this.name = e.target.value;
    }

    searchUser = (e) => {
        this.props.store.getUserData(this.name)
    }

    toggleForms = () => {
        this.props.toggleForms();
    }    

    render() {
        return (
            <div>
                <input type="text" name="name" onChange={this.inputChange} value={this.name} />
                <input type="button" onClick={this.searchUser} value="Search User" />
                <input type="button" onClick={this.toggleForms} value="Switch to Add" />
            </div>);
    }
}

export default SearchForm
