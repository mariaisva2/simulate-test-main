'use client';

// app/login/page.tsx
import PostForm from '../components/PostForm';
import { Navbar } from '../components/navBar';
import { useEffect, useState } from 'react';

const PostPage = () => {
  const [nameUser, setNameUser] = useState('');

  useEffect(() => {
    // Este código se ejecutará solo en el lado del cliente
    const token = localStorage.getItem('user');
    setNameUser(token || 'Invitado'); // Valor por defecto 'Invitado' si token es null
  }, []); // El array vacío asegura que esto se ejecute solo una vez después de montar

  const links = [
    { href: "#", name: nameUser },
    { href: "/", name: "home page" },
  ];

  return (
    <div>
      <Navbar links={links} />
      <PostForm />
    </div>
  );
};

export default PostPage;
