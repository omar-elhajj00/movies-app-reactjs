import React ,{ useState, useEffect} from 'react';
import './App.css';



//evey component has built in props object 
const App = () => {
  //state ,  we can use a concept of an array to define a state and usestate as a function;
  //counter is the name of the state and setcounter is the setter function  of this state ,setcounter is the setterfunction of the first variable 
  //inside the usestate we have the initial variable 
  const [counter,setCounter] = useState(0);

  //useEffect hook , we can write it as a function and then it accept one more function as the first parameter 
  //useEffect hook alows us to do something or some kind of an effect or some kind of an event
  //THE second parameter of useEffect is called dependency array 
  useEffect(() => {
    // setCounter(100);//the value is only gets set at the start because the second param is empty
    alert("your counter is " +counter); //every time the counter changed it give an alert  
  } , [counter]);




  return (
    <div className="App">
      {/* render the person functional component as a child component  */}
      <button onClick={()=>setCounter((prevCount) => prevCount-1)}> - </button>  {/* inisde of setCounter we're going to create a callback function and take a parameter can we call it prevCount , we can call it however we want but the good practice is to call it prevCount*/}
      <h2>{counter}</h2>
      <button onClick={()=>setCounter((prevCount) => prevCount+1)}> + </button>
      
    </div>  
  );
}

export default App;

// props allows you to pass dynamic data through react component , props are just arguments that you pass into react components 
//state in react is a plain javascript object used by react to represent piece of information about the component current situation, it is completely managed by the component itself 
//whenever you call something as a function and it starts with use , in react we call that a hook 
//event is an action that can be triggered as a result of the user action or some kind of a system generated event 
//when we started talking about state we immediatly mention hooks because we cannot use state without using this react hook , and there are many other hooks ,we hav e three basic hooks such as useState ,useEffect and useContext 
//the second used react hook is useEffect ,we can simply import it at the top , next to useState 