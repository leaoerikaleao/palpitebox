import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        // permite agrupar elementos sem criar divs adicionais 
        <React.Fragment>
            <div className="bg-gray-200 p-4 shadow-md">
                <div className="container mx-auto">
                    <Link href='/'>
                        <a><img className="mx-auto" src='/logo_palpitebox.png' alt="PalpiteBox" /></a>
                    </Link>
                </div>
            </div>
            <div className="bg-gray-300 p-4 shadow-md text-center">
                <Link href='/about'>
                    <a className="px-2 hover:underline">About</a>
                </Link>
                <Link href='/contact'>
                    <a className="px-2 hover:underline">Contato</a>
                </Link>
                <Link href='/search'>
                    <a className="px-2 hover:underline">Pesquisa</a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header