import Hero from '@/components/hero'
import Hero2 from '@/components/hero2'
import React from 'react'
import Recommendation from '@/components/recommendation'
import Reviews from '@/components/reviews'
import { State } from '@/components/state'

const Home = () => {
  return (
    <div>
      <Hero />
      <Recommendation />
      <Hero2 />
      <State/>
      <Reviews />
    </div>
  )
}

export default Home