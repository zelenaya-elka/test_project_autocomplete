import * as React from 'react';
import { connect } from 'react-redux';
import {IItem} from '../model';

import {
  updateSelectItem
} from '../actions';

interface IListItemProps{
    listItem: IItem;
    onClick:(object: IItem) => void;
}

class ListItem extends React.Component<IListItemProps, void>{
    handleClick = () => {
        this.props.onClick(this.props.listItem);
    }

    render(){
       return (
            <li>
                <label onClick = {this.handleClick}>
                {this.props.listItem.text}
                </label>
            </li>
       )
    }
}  

export default ListItem; 