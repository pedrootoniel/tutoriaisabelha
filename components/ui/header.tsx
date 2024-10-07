import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}


          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/" className="btn-sm text-white bg-brown-700 hover:bg-purple-700 ml-3">
                ACESSAR MINHA CONTA
                </Link>
              </li>
            </ul>
          </nav>

       
   
          <MobileMenu />

        </div>
      </div>
      
    </header>
  )
}
