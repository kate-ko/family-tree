import React/*, { Component }*/ from 'react';
import { observable, action } from "mobx";
import axios from 'axios';


class PeopleStore {
    @observable user = {};

    @action
    getUserData = async (name) => {
        //let user = await axios.get('http://localhost:8080/users/down/' + name);
        let user = await axios.get('/users/down/' + name);
        this.user = user.data[0]
    }

    addNewUser = async (name, parentId) => {
        console.log("there");
        axios({ method: 'POST', url: 'http://localhost:8080/users', 
          data: { user: 'name' } }).then((response) => { })
            .catch((e) => {
                console.error(e)
            });
    }
}

export default PeopleStore;