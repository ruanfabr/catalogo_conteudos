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

    console.log(rotas)

    return(
        <div className="w-full bg-gray-600 py-3 px-6">
            <div className='w-full flex justify-between'>
                <div>
                    <Link href={'/'}>
                        Homepage
                    </Link>
                </div>
                <div className='flex gap-5'>
                {
                rotas.map((element) => {
                    return (
                    <div className='w-fit h-full relative' key={element.value} onMouseEnter={() => {setShowSubPage(`${element.value}`)}} onMouseLeave={() => {setShowSubPage('')}}>
                        <Link href={element.path} key={element.value}>
                        {element.label}
                        </Link>

                        {
                        element.childrens.length > 0 && showSubPage === element.value?
                        <div className='absolute bg-gray-400 text-center rounded-md py-2 px-4
                        left-[50%] transform -translate-x-[50%] top-[100%] mt-3 gap-y-1'>
                            <ul>
                            {
                                element.childrens.map((childElement) => {
                                    return(
                                        <li className='hover:text-white'>
                                            <Link href={childElement.path} key={childElement.value}>
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