import React from 'react'

const TestComponent = () => {
    function formatName(){
        return user.FName + " " +user.LName;
    }
    const user = {
        FName:"John",
        LName:"Smith"
    }
    const element =(
        <h1>
            Hello, {formatName(user)}!
        </h1>
    )
  return (
    <div>
        {element}
    </div>
  )
}

export default TestComponent