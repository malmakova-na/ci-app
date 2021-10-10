export const reducer = (currentState ,action) => {
    switch(action.type) {
        case 'SET_REPOSITORY': return {
            ...currentState,
            repository: action.repository,            
        };
        case 'SET_COMMAND': return {
            ...currentState,
            command: action.command,            
        };
        case 'SET_BRANCH': return {
            ...currentState,
            branch: action.branch,            
        };
        case 'SET_SEND': return {
            ...currentState,
            send: action.send
            
        };
        case 'SET_SUBMITTED': return {
            ...currentState,
            submitted: action.submitted
            
        };
        case 'CLEAR_INPUTS': return {
            ...currentState,
            repository: '',
            command: '',
            branch: '',
            commandValid: false,
            submitted: true
        };
        case 'CLEAR_REPOSITORY': return {
            ...currentState,
            repository: '',
            repositoryValid: false,
            submitted: false
            
        };

        case 'CLEAR_COMMAND': return {
            ...currentState,
            command: '',
            commandValid: false,
            submitted: false
        };

        case 'CLEAR_BRANCH': return {
            ...currentState,
            branch: '',
            submitted: false
        };
        


    };




};