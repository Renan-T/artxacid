import { Menu } from '@headlessui/react'
import { HiBars3 } from 'react-icons/hi2'

const links = [
    { href: '/', label: 'SHOP' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
]


export default function Dropdown() {
    return (
        <Menu>
            <Menu.Button className='ui-open:hidden'>
                <HiBars3 className='h-10 w-10' />
            </Menu.Button>
            <Menu.Items>
                {links.map((link) => (
                    <Menu.Item
                        as='a'
                        key={link.href}
                        href={link.href}
                        className="flex flex-col p-1 items-center rounded-lg hover:bg-yellow-300"
                    >
                        {link.label}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
}