import React, { useState } from "react";

function Question({ index ,setQuestions,questions}) {
    
    
    function deleteQuestion(index){
      alert(index)
      console.log(questions)
      let copyData = [...questions]
      copyData.splice(index,1)
      setQuestions([...copyData])
    }



  return (
    <div>
      <label>Questions :{index + 1} </label>{" "} 
      <input type="text" placeholder="Write Questions" /><button onClick={()=>deleteQuestion(index)}>Delete</button>
      <div>
        A.
        <input type="text" placeholder="Write option here" />
      </div>
      <div>
        B.
        <input type="text" placeholder="Write option here" />
      </div>
      <div>
        C.
        <input type="text" placeholder="Write option here" />
      </div>
      <div>
        D.
        <input type="text" placeholder="Write option here" />
      </div>
    </div>
  );
}
export default Question;

