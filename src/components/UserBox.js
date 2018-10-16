import React, { Component } from 'react';
import '../App.css';

class UserBox extends Component {
    render() {
        return (
            <div className="user-box">
                <div>
                    {this.props.child.name}<br></br>
                    <img src="https://orig00.deviantart.net/0b0e/f/2010/204/8/f/na__vi_avatar_child_by_ottomancouch.png" alt="Smiley face" height="70" width="70"></img>
                </div>
            </div>
        );
    }
}

export default UserBox;