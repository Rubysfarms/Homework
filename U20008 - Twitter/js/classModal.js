import {putRequest} from "./put.js";
import {delRequest} from "./del.js";

class Modal {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.card = document.createElement('div');
        this.card.setAttribute('person_id', id);        
        this.saveButton = document.createElement('button');
        this.saveButton.innerText = 'Save changes';
        this.saveButton.style.display = 'none';
        this.saveButton.addEventListener('click', this.saveChanges.bind(this));
        this.modifyButton = document.createElement('button');
        this.modifyButton.innerText = 'Modify post';
        this.modifyButton.addEventListener('click', this.modify.bind(this));
        this.deleteButton = document.createElement('button');
        this.deleteButton.innerText = 'Delete post';
        this.deleteButton.addEventListener('click', this.delete.bind(this));
        this.userName = document.createElement('input');
        this.userName.setAttribute('disabled', 'disabled');
        this.userName.value = name;
        this.userEmail = document.createElement('input');
        this.userEmail.value = email;
        this.userEmail.setAttribute('disabled', 'disabled');
        this.title =  document.createElement('input');
        this.title.setAttribute('disabled', 'disabled');
        this.postText = document.createElement('textarea');
        this.postText.setAttribute('disabled', 'disabled');
        this.postText.classList.add('post_text');
        this.card.insertAdjacentElement('beforeend', this.saveButton);
        this.card.insertAdjacentElement('beforeend', this.modifyButton);
        this.card.insertAdjacentElement('beforeend', this.deleteButton);
        this.card.insertAdjacentElement('beforeend', this.userName);
        this.card.insertAdjacentElement('beforeend', this.userEmail);
        this.card.insertAdjacentElement('beforeend', this.title);
        this.card.insertAdjacentElement('beforeend', this.postText);
        document.querySelector('.cards').insertAdjacentElement('beforeend', this.card);                    
    };
    set addTitle(title){        
        this.title.value = title;                    
    };
    set addText(text){       
        this.postText.value = text;         
    }
    set addCardID(value){       
        this.cardID = value;         
    }
    modify(){  
        this.saveButton.style.display = 'block';
        this.modifyButton.style.display = 'none';     
        this.title.removeAttribute('disabled');
        this.postText.removeAttribute('disabled');
    }
    saveChanges(){
        const button = this.saveButton;
        const loading = function(elem){
            button.insertAdjacentText('beforeend', '.');
        };
        const interval = setInterval(loading,
        500, button);

        const putObject = {
            'title' : this.title.value,
            'body' : this.postText.value,
            'userId': this.id,
            'id': this.cardID            
        }        
        putRequest(JSON.stringify(putObject), this.cardID, this, interval);
    }
    delete(){
        delRequest(this.cardID, this);    
    };        
}
export {Modal}; 