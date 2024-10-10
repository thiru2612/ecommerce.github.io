import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas tenetur sit voluptas obcaecati optio repellendus? Animi consectetur ex mollitia error similique ducimus tempora tenetur at maxime, iste libero rerum omnis.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-mediummb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-222-321-456-786</li>
                <li>Contact@ShopZone.com</li>
            </ul>

        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
            Copyright 2024@ ShopZone.com - All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer