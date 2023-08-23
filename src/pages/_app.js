import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { useEffect } from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { useRouter } from 'next/router';
import Sidebar from '../../component/Sidebar';
import Layout from '../../component/Layout';
import ProtectedRoute from '../../component/ProtectedRoute';

export default function App({ Component, pageProps }) {
  
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.min.js");

},[])

const router = useRouter();

if(router.pathname === '/login' || router.pathname === '/signUp') return <Component {...pageProps} />;
if (router.pathname === '/dashboard' || router.pathname === '/users' || router.pathname === '/categories' || router.pathname === '/products') return <><ProtectedRoute><Layout>
  <Component {...pageProps} />
</Layout>
</ProtectedRoute></>;
  return<>
  <ProtectedRoute>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </ProtectedRoute>
  
  </> 
}
