import * as request from 'superagent';
import {filter} from 'lodash';
import {IItem} from '../model';
import {Promise} from 'es6-promise';

export default (value) => {
  return new Promise((resolve, reject) => {
    let responseResult = new Array();
    const request = new XMLHttpRequest();
    let newArr = [];

    request.open('GET', 'https://restcountries.eu/rest/v2/name/ru', true);
    request.onreadystatechange = function(e) {
      if (request.readyState == 4 && request.status == 200) {
        const response = JSON.parse(this.responseText);
        let i = 0;
        for (let item of response){
          if(value!==""){
            if(item.name.toLowerCase().indexOf(value.toLowerCase())>-1){
              const newItem:IItem = {id: i, text: item.name};
              responseResult.push(newItem);
              i++;
            }
          } else {
            const newItem:IItem = {id: i, text: item.name};
            responseResult.push(newItem);
          }
        }
        resolve(responseResult);
        } else {
          reject('Failed to get response');
        };
      };
    resolve(responseResult);
    request.send(null);
  });
};