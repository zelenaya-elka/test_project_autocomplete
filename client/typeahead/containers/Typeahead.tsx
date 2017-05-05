import * as React from 'react';
import { Dispatch } from 'redux';
import {store} from '../../main';
import { connect } from 'react-redux';
import {filter} from 'lodash';
import ViewListItems from '../components/ViewListItems';
import * as classNames from 'classnames';
import {
  autoComplete,
  updateSelectItem
} from '../actions';

import { IItem } from '../model';

interface ITypeaheadProps {
  hintList: IItem[];
  selectedItem: IItem;
  isTyping: boolean;
  isLoading: boolean;
  autoComplete: (text:string) => void;
  handleChangeSelectedItem: (object: IItem) => void;
};

interface ITypeaheadState {
  value: string;
};

class Typeahead extends React.Component<ITypeaheadProps, ITypeaheadState> {
  constructor(props: ITypeaheadProps) {
    super(props);
    this.state = { 
      value: ""
    }; 
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.autoComplete(e.target.value); 
  }

  render() { 
    const { isLoading } = this.props;
    return (
      <section className="main">
          <div>
            <input 
              style={{width:"533px", height: "20px", padding:"20px 7px", fontSize: "20px"}}
              type="text"
              placeholder = "Start typing..."
              value={this.props.isTyping ? this.state.value : this.props.selectedItem.text}
              onChange={this.handleChange}/>       
            {isLoading ? showLoading(): <ViewListItems isTyping={this.props.isTyping} hintList={this.props.hintList} onSelectedItem = {this.props.handleChangeSelectedItem}/>}
          </div>
      </section>
    );
  } 
}

function showLoading(){
  return (
    <p style ={{color: "blue", fontSize: "20px", textAlign: "center", paddingBottom: "15px", fontStyle: "italic"}}>
     ... Загрузка ...
    </p>
  )
}

const mapStateToProps = (state) => ({
  hintList: state.typeahead.hintList,
  selectedItem: state.typeahead.selectedItem,
  isTyping: state.typeahead.isTyping,
  isLoading: state.typeahead.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  autoComplete: (text: string) => autoComplete(text, dispatch),
  handleChangeSelectedItem: (object: IItem) => dispatch(updateSelectItem(object))
});

export default connect(mapStateToProps, mapDispatchToProps)(Typeahead);
