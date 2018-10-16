import React, { Component } from 'react';
import { observable} from "mobx";
import { observer} from 'mobx-react';
import SearchForm from './SearchForm';
import AddForm from './AddForm';

@observer
class SearchOrAdd extends Component {
    @observable showSearchFormStatus = 1;

    toggleForms = () => {
        this.showSearchFormStatus ^= 1;
    }

    render() {
        return (<div>
            { this.showSearchFormStatus ? <SearchForm toggleForms={this.toggleForms}/> :
                                          <AddForm toggleForms={this.toggleForms}/> }
        </div>
        )}
}

export default SearchOrAdd;