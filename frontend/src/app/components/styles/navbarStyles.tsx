'use client'
import styled from 'styled-components';
import Link from 'next/link';

// Contenedor de la barra de navegación
export const NavBarContainer = styled.nav`
  background-color: #365;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

// Estilo para los enlaces de navegación
export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 1rem;

  &:hover {
    color: #ddd;
  }
`;

// Contenedor para los elementos de navegación
export const NavItems = styled.div`
  display: flex;
`;

// Estilo del logo o título de la app
export const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;
