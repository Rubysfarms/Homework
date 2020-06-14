function postRequest(obj, elem){    
    const requestPosts = new XMLHttpRequest();
    requestPosts.responseType = 'json';
    requestPosts.open('POST', `https://jsonplaceholder.typicode.com/posts`);
    requestPosts.onload = response => {         
        if(response.returnValue){
            elem.saveButton.remove();                 
            elem.postText.setAttribute('disabled','disabled');
            elem.title.setAttribute('disabled','disabled');
            elem.addCardID = response.srcElement.response.id;
            elem.deleteButton.style.display = 'block';    
            elem.modifyButton.style.display = 'block';            
            elem.saveButton = document.createElement('button');
            elem.saveButton.innerText = 'Save changes';            
            elem.saveButton.addEventListener('click', elem.saveChanges.bind(elem));
            elem.card.insertAdjacentElement('afterbegin', elem.saveButton);
            elem.saveButton.style.display = 'none';
            alert('card was registered');
        }       
    };
    requestPosts.send(obj);    
}

export {postRequest}