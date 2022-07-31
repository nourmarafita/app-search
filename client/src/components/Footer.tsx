import { GlobeIcon } from '@heroicons/react/solid'
import React from 'react'
import { FC } from 'react'

const Footer:FC = () => {
  return (
    <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100'>
        <div className="px-8 py-3">
            <p>Indonesia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 grid-flow-row-dense px-8 py-3">
            <div className="flex justify-center items-center md:col-span-2 lg:col-start-2">
                <GlobeIcon className='h-5 mr-1 text-green-700'/>Carbon netral since 2007
            </div>
            <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                <p>Advertising</p>
                <p>Business</p>
                <p>How search Works</p>
            </div>
            <div className="flex justify-center space-x-8 md:ml-auto">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Setting</p>
            </div>
        </div>{" "}
    </footer>
  )
}

export default Footer