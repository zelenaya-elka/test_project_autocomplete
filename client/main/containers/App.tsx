import { connect } from 'react-redux';
import * as React from 'react';
import {store} from '../../main';

import Typeahead from '../../typeahead/containers/Typeahead';

export default class App extends React.Component<void, void> {  
  render() {
    return (
      <div className="todoapp">
        <h1>Hello</h1>
        <Typeahead/>
      </div>
    );
  }
}