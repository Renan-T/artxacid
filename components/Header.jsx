import Link from 'next/link'
import { BsCart4, BsTwitch, BsInstagram } from 'react-icons/bs'
import Dropdown from './Dropdown'

export default function Header() {
    return (
        <div className='grid grid-cols-5 gap-8 columns-3 p-4'>
            <Link href='/cart' className='col-span-4 md:col-span-1'>
                <BsCart4 className='h-10 w-10' />
            </Link>
            <div className='hidden md:flex md:col-span-3 justify-evenly items-center text-xl lg:text-2xl'>
                <Link href='/' className='p-2 rounded-lg hover:bg-yellow-300'>SHOP</Link>
                <Link href='/gallery' className='p-2 rounded-lg hover:bg-yellow-300'>GALERY</Link>
                <Link href='/about' className='p-2 rounded-lg hover:bg-yellow-300'>ABOUT</Link>
                <Link href='/contact' className='p-2 rounded-lg hover:bg-yellow-300'>CONTACT</Link>
            </div>
            {/* MENU */}
            <div className='grid'>
                <div className='flex md:hidden justify-end'>
                    <Dropdown />
                </div>
                <div className='hidden md:flex justify-around'>
                    <BsTwitch className='h-10 w-10' />
                    <BsInstagram className='h-10 w-10 ' />
                </div>
            </div>
        </div>
    )
}