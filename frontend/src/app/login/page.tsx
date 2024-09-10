// app/login/page.tsx
import LoginForm from '../components/LoginForm';
import { Navbar } from '../components/navBar';



const LoginPage = () => {
  const links = [
    {href: "/login", name : "Login"},
    {href: "/register", name : "Register"}
  ]
  return (
    <div>
      <Navbar links={links} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;