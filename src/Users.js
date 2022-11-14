import React from 'react'

function Users() {
    const data=[
        {
            id:1,name:"Sunita Adhikari"
        },
        {
            id:2,name:"Sangita Adhikari"
        },
        {
            id:3,name:"Sita Adhikari"
        },
    ]
    return (
    <div>
      {
        data.map((user)=>(
            <div>
               {user.name}
            </div>
        ))
      }
    </div>
  )
}
export default Users