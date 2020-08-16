import React from 'react';
import {Label} from '../label';

export const AddBook = ({props, sendRequest, buttonName}) => {
    return (        
        <form id="add-book-form">
            <Label htmlFor='title' title='Title' name='book-name' props={props}/>
            <Label htmlFor='author' title='Author' name='book-author' props={props}/>
            <Label htmlFor='title' title='ISBN#' name='book-isbn' props={props}/>            
            <input type="submit" value={buttonName} className="btn btn-primary" onClick={sendRequest}/>       
        </form>      
    )
}


