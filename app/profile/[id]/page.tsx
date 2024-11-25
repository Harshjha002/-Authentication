import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserProfile = ({params} : any) => {
  return (
    <div>
      <p>profile page of a user <span>{params.id}</span> </p>
    </div>
  )
}

export default UserProfile
