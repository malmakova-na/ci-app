export const stateValue = (name, value) => {
    switch(name) {
        case "repository": return {
            type: 'SET_REPOSITORY',
            repository: value
        };
        case "command": return {
            type: 'SET_COMMAND',
            command: value
        }
        case "branch": return {
            type: 'SET_BRANCH',
            branch: value
        }
        case "send": return {
            type: 'SET_SEND',
            send: value
        }
        case "submitted": return {
            type: 'SET_SUBMITTED',
            submitted: value
        }
    }
};

export const clearInput = (name) => {
    switch(name) {
        case "repository": return {
            type: 'CLEAR_REPOSITORY'
        };
        case "command": return {
            type: 'CLEAR_COMMAND',
            
        }
        case "branch": return {
            type: 'CLEAR_BRANCH',
        }
    }
}
export const clearInputs = () => {
    return {type: 'CLEAR_INPUTS'}    
}
