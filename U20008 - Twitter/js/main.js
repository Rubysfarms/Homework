import {Modal} from './classModal.js';
import {User} from './classUser.js';
import {postRequest} from './post.js';

const newCardButton = document.querySelector('.add_card');
const cards = [];
const users = [];
const requestUsers = new XMLHttpRequest();
requestUsers.responseType = 'json';
requestUsers.open('GET', `https://jsonplaceholder.typicode.com/users`);
requestUsers.onload = response => {    
    const usersList = response.target.response;
    usersList.forEach(element => {
        const newUser = new User(element.id, element.name, element.email);
        users.push(newUser);
    });    
    const requestPosts = new XMLHttpRequest();
    requestPosts.responseType = 'json';
    requestPosts.open('GET', `https://jsonplaceholder.typicode.com/posts`);
    requestPosts.onload = response => {        
        const posts = response.target.response;
        posts.forEach(element => {            
            const userInfo = users[element.userId-1];
            const card = new Modal(userInfo.id, userInfo.name, userInfo.email);               
            card.addTitle = element.title;
            card.addText = element.body;
            card.addCardID = element.id;
            cards.push(card);            
        });       
    };
    requestPosts.send();    
        
};
requestUsers.send();

newCardButton.addEventListener('click', function(){
    const newCard = new Modal(users[0].id, users[0].name, users[0].email);
    newCard.deleteButton.style.display = 'none';    
    newCard.modifyButton.style.display = 'none';    
    newCard.saveButton = document.createElement('button');
    newCard.saveButton.innerText = 'Save changes';
    newCard.saveButton.style.display = 'block'; 
    newCard.card.insertAdjacentElement('afterbegin', newCard.saveButton);
    newCard.saveButton.addEventListener('click', function(){        
        const obj = {
            title: newCard.title.value,
            body: newCard.postText.value,
            userId: 1
        }
        JSON.stringify(obj);
        postRequest(obj, newCard);
    });
    cards.unshift(newCard);        
    document.querySelector('.cards').insertAdjacentElement('afterbegin', newCard.card);
    newCard.title.removeAttribute('disabled');
    newCard.title.setAttribute('placeholder', 'Enter new card title');
    newCard.postText.removeAttribute('disabled');
    newCard.postText.setAttribute('placeholder', 'Enter new card text');   
});



