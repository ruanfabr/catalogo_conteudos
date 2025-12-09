'use client';
import Link from 'next/link'
import {paths} from '../routes/routes'
import { useState } from 'react';

export default function NavBar (){

    const rotas = paths.filter(item => item.visible && !item.parent).map((item) => ({
        ...item,
        childrens: paths.filter(childs => childs.parent === item.value && childs.visible)
    }))

    const [showSubPage, setShowSubPage] = useState('')

    return(
        <div className="w-full bg-gray-600 py-3 px-12">
            <div className='w-full flex justify-between'>
                <div>
                    <Link href={'/'} className='px-3 py-3 hover:text-white'>
                        Homepage
                    </Link>
                </div>
                <div className='flex gap-10'>
                {
                rotas.map((element) => {
                    return (
                    <div className='w-fit h-full relative' key={element.value} onMouseEnter={() => {setShowSubPage(`${element.value}`)}} onMouseLeave={() => {setShowSubPage('')}}>
                        <Link href={element.path} key={element.value}
                        className='hover:text-white py-4 px-2'>
                        {element.label}
                        </Link>

                        {
                        element.childrens.length > 0 && showSubPage === element.value?

                        <div className='absolute bg-gray-400 text-center rounded-md py-2
                        left-[50%] transform -translate-x-[50%] top-full mt-3'>
                        <ul className='flex flex-col gap-3'>
                            {
                                element.childrens.map((childElement) => {
                                    return(
                                        <li className='hover:text-white' key={childElement.value}>
                                            <Link href={childElement.path} className='px-6 py-3'>
                                            {childElement.label}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        </div>
                        :null
                        }
                    </div>
                    )
                })
                
                }
                </div>
            </div>

        </div>
    )
}