import React from 'react'
import UserRow from '../profiles/user_row'

export default function Contributors() {
  return (
    <div className="explore-section">
      <div className="contributors"> 
        <p className="desc">People who have reported enviornment pollution</p>
         <UserRow/>
         <UserRow/>
         <UserRow/>
      </div>
    </div>
  )
}
