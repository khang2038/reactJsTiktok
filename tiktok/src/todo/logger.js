function logger(reducer){
    return (prestate, action)=>{
       const newState = reducer(prestate, action)
       return newState 
    }
}
export default logger