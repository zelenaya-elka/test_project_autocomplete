import * as React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import {IItem} from '../model';
import {
  updateSelectItem
} from '../actions';

interface IViewListItemsProps {
    hintList: IItem[];
    isTyping: boolean;
    onSelectedItem: (object: IItem) => void;
}

export default class ViewListItems extends React.Component <IViewListItemsProps, void>{
    render(){
        const { hintList, isTyping, onSelectedItem } = this.props;
        let listTemplate = null;
        if(isTyping)
        {
            listTemplate = hintList && Array.isArray(hintList) && hintList.length > 0 ?
            <div>
                <ul className="todo-list">
                    {hintList.map((item, index) =>
                        <ListItem key={index} listItem={item} onClick={onSelectedItem}/>
                    )}
                </ul>
            </div> :
                <p style ={{color: "red", fontSize: "20px", textAlign: "center", paddingBottom: "15px", fontStyle: "italic"}}>
                    Ничего не найдено
                </p>
        }
        return (
            <div>
                {listTemplate}
            </div>
        )
    }
}   