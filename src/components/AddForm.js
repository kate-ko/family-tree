import React, { Component } from 'react';
import { observable } from "mobx";
import { observer, inject } from 'mobx-react';

@inject("store")

@observer
class AddForm extends Component {
    @observable name = ""

    inputChange = (e) => {
        this.name = e.target.value;
    }

    addUser = (e) => {
        this.props.store.addNewUser(this.name)
    }

    toggleForms = () => {
        this.props.toggleForms();
    }    

    render() {
        return (
            <div>
                <input type="text" name="name" onChange={this.inputChange} value={this.name} />
                <input type="button" onClick={this.addUser} value="Add User" />
                <input type="file" name="pic" accept="image/*"/>
                <input type="button" onClick={this.toggleForms} value="Switch to Search" />
            </div>);
    }
}

export default AddForm;


