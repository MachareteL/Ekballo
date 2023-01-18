// import BotaoLogin from './BotaoLogin'
// function NavBar() {
//     return (
//         <>
        
//         </>
//     );
// }

// export default NavBar;


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import BotaoLogin from "./BotaoLogin"
import logo from "../../public/favicon.png"
import Image from 'next/image'
import { useRouter } from 'next/router'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const route = useRouter()
  console.log(route.pathname)
  const navigation = [
    { name: 'Quem somos', href: '#', current: (route.pathname == "/"? true : false) },
    { name: 'Team', href: '/team', current: (route.pathname == "/team"? true : false) },
    { name: 'Projects', href: '#', current: false },
    { name: 'Matricula', href: '/matricula', current: (route.pathname == "/matricula"? true : false) },
  ]
  return (
    <Disclosure as="nav" className="bg-slate-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">



                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div onClick={()=>{route.push('/')}} className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-12 w-auto lg:hidden"
                    src={logo}
                    alt="Ekballo"
                  />
                  <Image
                    className="hidden h-12 w-auto lg:block"
                    src={logo}
                    alt="Ekballo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:flex-row items-center">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium h-fit'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">teste</span>
                  
                </button>

                {/* Profile dropdown */}
                <BotaoLogin />
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

// import { Menu } from '@headlessui/react'

// export default function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button>More</Menu.Button>
//       <Menu.Items>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`${active && 'bg-blue-500'}`}
//               href="/account-settings"
//             >
//               Account settings
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item>
//           {({ active }) => (
//             <a
//               className={`${active && 'bg-blue-500'}`}
//               href="/account-settings"
//             >
//               Documentation
//             </a>
//           )}
//         </Menu.Item>
//         <Menu.Item disabled>
//           <span className="opacity-75">Invite a friend (coming soon!)</span>
//         </Menu.Item>
//       </Menu.Items>
//     </Menu>
//   )
// }