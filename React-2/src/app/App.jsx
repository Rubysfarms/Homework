import React, { useState, useEffect } from 'react';
import './App.css';
import {Library} from '../client/library';
import {AddBook} from '../shared/addBook';

export const App = () => {
  const [bookList, setBookList] = useState([]);
  const inputs = [];
  const [buttonName, setButton] = useState('Add Book');
  const expression = new RegExp('[0-9]{1,5}[-●]?[0-9]+[-●]?[0-9]+[-●]?[0-9X]$');  
  
  const deleteBook = (event) => {   
    event.preventDefault(); 
    const isbn = event.target.getAttribute('isbn');
    const array = bookList.filter((book) => {
      if(book.isbn === isbn){                
        return false
      } else {return true}
    });
    setBookList(array);            
  }

  const correctBook = (event) => {
    setButton('Update');         
    event.preventDefault(); 
    const isbn = event.target.getAttribute('isbn');
    const array = bookList.filter((book) => {
      if(book.isbn === isbn){
        inputs[0].current.value = book.title;
        inputs[2].current.value = book.author;
        inputs[4].current.value = book.isbn;        
        return false
      } else {return true}
    });    
    setBookList(array);        
  }

  const sendRequest = (event) => {               
    event.preventDefault();
    setButton('Add Book');    
    const isbnMistake = inputs[4].current.nextElementSibling.nextElementSibling
    const titleEmpty = inputs[0].current.nextElementSibling;
    const authorEmpty = inputs[2].current.nextElementSibling;
    const isbnEmpty = inputs[4].current.nextElementSibling;
    const titleValue = inputs[0].current.value;
    const authorValue = inputs[2].current.value;
    const isbnValue = inputs[4].current.value;
    titleValue ==='' ? titleEmpty.classList.remove('visibility-hidden') : titleEmpty.classList.add('visibility-hidden');
    authorValue ==='' ? authorEmpty.classList.remove('visibility-hidden') : authorEmpty.classList.add('visibility-hidden');
    isbnValue !== expression ? isbnMistake.classList.remove('visibility-hidden') : isbnMistake.classList.add('visibility-hidden');    
    if (titleValue !=='' && authorValue !=='' && isbnValue !=='' && isbnValue.match(expression)){       
      const book = {
        'title' : titleValue,
        'author' : authorValue,
        'isbn' : isbnValue        
      }
      isbnMistake.classList.add('visibility-hidden');
      if(bookList.length !==0){
        bookList.forEach(item=>{        
          if(item.isbn !== isbnValue){
            setBookList([...bookList, book]);
            inputs[0].current.value = '';
            inputs[2].current.value = '';
            inputs[4].current.value = '';                 
          } else {alert('ISBN Книги есть в списке')}
        });
      } else {
        setBookList([...bookList, book]);
            inputs[0].current.value = '';
            inputs[2].current.value = '';
            inputs[4].current.value = '';
      }                   
    }                                                                                     
};   
            
  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="display-4 text-center"><i className="fas fa-book-open text-primary"></i> <span className="text-secondary">Book</span> List</h1>
        <p className="text-center">Add your book information to store it in database.</p>
        <div className="row">
          <div className="col-lg-4">
            <AddBook props={inputs} sendRequest={sendRequest} buttonName={buttonName}/>
          </div>
        </div>
      </div>
      <Library bookList = {bookList} deleteBook={deleteBook} correctBook={correctBook}/>
    </div>
  );  
}
