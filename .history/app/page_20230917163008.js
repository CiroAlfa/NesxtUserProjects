import React from 'react'

async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function HomePage(){
  const users = await fetchUsers()
  return(
    <ul>
      {users.map(user =>(
        <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md
        text-black">
          <div>
            <h5 ClassName="font-bold"> {users.id} {users.first_name} {user.last_name}</h5>
            <p>email:{user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
  await fetchUsers()
  return(
    <div>HomePage</div>
  )

}
export default HomePage