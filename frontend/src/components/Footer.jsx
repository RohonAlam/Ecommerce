import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  ' >
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className=''   >
                    asj hfdksjhksahk faskf aks fnkasgfhjas k,fasgfbja kasfasnfmsn f
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5' >COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>+91 1234560789</li>
                    <li>Contact@forever</li>

                </ul>
            </div>
        </div>


        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@forever.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer