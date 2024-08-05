import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="fixed flex items-center justify-center border-t-2 pb-4">
        <h3>Copyright©2024. | All Rights Reserved.

Developed by <Link className='text-blue-500' to="https://apptechnologies.co">App Technologies</Link></h3>
    </div>
    </>
  )
}

export default Footer