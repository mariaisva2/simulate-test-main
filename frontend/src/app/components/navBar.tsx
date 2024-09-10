'use client'
import { NavBarContainer, NavLink, NavItems, Logo } from './styles/navbarStyles';


interface NavProopd{
    links: {href: string; name: string |null}[];
}

export const Navbar = ({links}: NavProopd) =>{
    return (
        <NavBarContainer>
            <Logo>BlogSphere</Logo>
            <NavItems>
            {links.map((link, index) => (
                <NavLink key={index} href={link.href} > {link.name} </NavLink>
            ))}
            </NavItems>
        </NavBarContainer>
    );
}
