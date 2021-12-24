import React from "react"
import { Link } from "gatsby"

export default () => {

    const navLinks = [
        ["https://oura-hideyoshi.github.io/oura-hideyoshi/index", "Home"],
        ["https://oura-hideyoshi.github.io/oura-hideyoshi/about", "About"],
        ["https://oura-hideyoshi.github.io/oura-hideyoshi/products", "Products"],
    ];

    return (
        <header>
            <section className="relative w-full px-8 text-gray-700 bg-white body-font">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <a href="https://oura-hideyoshi.github.io/oura-hideyoshi/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
                        <img className="inline-block" src="https://img.icons8.com/material-outlined/48/000000/github.png" />とまとみ
                    </a>
                    <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
                        {navLinks.map(e =>
                            <Link to={e[0]} className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
                                x-data="{ hover: false }" key={e[0]}>
                                <span className="block">{e[1]}</span>
                            </Link>
                        )}

                    </nav>
                    <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
                        last edited at 2021/12/25
                    </div>
                </div>
            </section>
        </header>
    )
}