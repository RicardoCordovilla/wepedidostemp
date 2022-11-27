import React from 'react'

const NavBar = () => {
    return (

        <section class="navbar">
            <img src="logos/logo_neonquito.png" alt="logo neon quito" class="logo" />
            <nav>
                <ul>
                    <li class="navbarLink">
                        <a href="design.html">Diseñar</a>
                    </li>
                    <li class="navbarLink">
                        <a href="logos.html">Logos</a>
                    </li>
                    <li class="navbarLink">
                        <a href="">Catalogo</a>
                    </li>

                </ul>
            </nav>
        </section>

    )
}

export default NavBar