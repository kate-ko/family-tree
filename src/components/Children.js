import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import UserBox from './UserBox';
import '../App.css';

@inject("store")
@observer
class Children extends Component {
    render() {
        return (<div className="children-container">
            { Object.keys(this.props.store.user).length? 
             this.props.store.user.children.map(el => <UserBox child={el.child} key={el.child.id}/>) : 
             "No user chosen or he doesn't have children" }
        </div>
        )}
}

export default Children;