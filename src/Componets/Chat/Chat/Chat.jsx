import React from 'react'

const Chat = () => {
  return (
    <div>
        
        <input type="file" onChange={(e)=> console.log(e.target.files[0])} />
    </div>
  )
}

export default Chat 