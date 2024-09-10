// app/login/page.tsx
import RegisterForm from '../components/RegisterForm';
import { Navbar } from '../components/navBar';


const registerPage = () => {
  const links = [
    {href: "/login", name : "Login"},
    {href: "/", name : "home page"}
  ]
  return (
    <div>
      <Navbar links={links} />
      <RegisterForm />
    </div>
  );
};

export default registerPage;