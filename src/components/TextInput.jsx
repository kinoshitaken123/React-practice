import React, {useState} from 'react';

const TextInput = () => {
  const [name,setName] = useState('')
  const handkeName = (event) => {
    // console.log(event.target.value)
    setName(event.target.value)
 }

//  console.log("Current",name)

 return (
   <input 
   onChange={(event)=> handkeName(event)}
   type={'text'}
   value={name}
   />
 );
}; 

export default TextInput;