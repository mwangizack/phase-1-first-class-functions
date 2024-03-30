function receivesAFunction(callBackFunc){
    return callBackFunc()
}

function returnsANamedFunction(){
    return function sample(){
        return 'This is a sample function returned from another function'
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log('This is an anonymous function returned from another')
}