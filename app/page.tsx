import Image from 'next/image'
import Container from './components/Container'

export default function Home() {
  return (
    <main>
      <Container>
        <div className='font-bold bg-teal-600 text-white text-center'>
          <h1 className='text-2xl'>Decolonized Community Voices</h1>
          <h2 className='font-bold'>Making decolonized voices heard!</h2>
        </div>
      </Container>
      <div></div>
    </main>
  )
}
