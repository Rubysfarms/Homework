export const Reducer = (state, action) => {    
    
    switch (action.type) {
        case 'start' :                  
        return state+1;
        
        case 'stop' :
            localStorage.setItem('time', JSON.stringify(state));
            window.location.reload();   
        return state;

        case 'reset' :
            localStorage.setItem('time', JSON.stringify(0));            
            window.location.reload();  
            return 0;
       
        default: return state;
    }
}