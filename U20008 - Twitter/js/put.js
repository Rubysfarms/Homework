function putRequest(json, id, obj, interval){           
    const request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open('PUT', `https://jsonplaceholder.typicode.com/posts/${id}`);
    request.onload = (response) => {    
        if(response.srcElement.response.id === id){
            clearInterval(interval); 
            obj.saveButton.style.display = 'none';
            obj.saveButton.innerText = 'Save changes';
            obj.modifyButton.style.display = 'block';                 
            obj.title.setAttribute('disabled', 'disabled');
            obj.postText.setAttribute('disabled', 'disabled');
            alert('Modified successful');            
        };                     
    };    
    request.send(json);
}

export {putRequest};