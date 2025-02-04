import Link from 'next/link'

const Home = () => {
  return (
    <>
    <div>Home</div>
        <Link href='/home/room1'>Room 1</Link>
        <br /> 
        <Link href='/home/room2'>Room 2</Link>
        <br /> 
        <Link href='/home/room3'>Room 3</Link>
        <br /> 
    </>
  )
}

export default Home