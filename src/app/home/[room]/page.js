'use client'; 
import { useParams } from 'next/navigation';
const Room = () => {
    const params = useParams(); 

  return (
    <>
    <div>Room Details: {params.room}</div>
    </>
  )
}

export default Room