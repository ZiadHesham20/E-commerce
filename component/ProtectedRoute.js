import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('loggedin') == undefined) {
      router.push('/login')
    }else if(localStorage.getItem('role') == 'User'){
      router.push('/')
    }else{
      router.push('/dashboard')
    }
  }, [])

  return <>{children}</>
}