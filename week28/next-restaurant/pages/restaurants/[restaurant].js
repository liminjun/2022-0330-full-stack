import Head from 'next/head'
import { useRouter } from 'next/router'


export default function Restaurant() {
  const router = useRouter()
  return (
    <h1>Dynamic Restaurant page. {router.query.restaurant}</h1>
  )
}
