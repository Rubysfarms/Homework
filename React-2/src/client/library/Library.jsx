import React from 'react';

export const Library = ({bookList, deleteBook, correctBook}) => {     
        
        let allBooks = bookList.map(({author, isbn, title})=> {                          
                return(
                    <tr data-id={isbn} key={isbn}>
                        <td>{title}</td>
                        <td>{author}</td>
                        <td>{isbn}</td>
                        <td><a href="#" isbn={isbn} className="btn btn-info btn-sm" onClick={correctBook}>+</a></td>
                        <td><a href="#" isbn={isbn} className="btn btn-danger btn-sm btn-delete" onClick={deleteBook}>X</a></td>
                    </tr>
                )             
        });                  
    
        return (                          
            <table>   
                <tbody>
                    <tr>
                        <td>Всего Книг: {bookList.length}</td>
                    </tr> 
                    <tr>
                        <td>Название книги</td>
                        <td>Автор книги</td>
                        <td>ISBN</td>
                        <td>Корректировать</td>
                        <td>Удалить</td>
                    </tr>
                    {allBooks}
                </tbody>
            </table>                         
        )        
};