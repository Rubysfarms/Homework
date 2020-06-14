function delRequest(id, elem){        
    const request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open('DELETE', `https://jsonplaceholder.typicode.com/posts/${id}`);
    request.onload = response => {        
        if(response.returnValue){
            elem.card.remove();
            alert('successful delete');
        };           
    };
    request.send();
}

export {delRequest};