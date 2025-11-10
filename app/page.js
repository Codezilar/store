import { Container } from '@/components/Contaner'
import { ForYou } from '@/components/ForYou'
import { Grid } from '@/components/Grid'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { Review } from '@/components/Review'
import { AppleCardsCarouselDemo } from '@/components/ShowCase'
import { World } from '@/components/World'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <AppleCardsCarouselDemo />
      <Container />
      <AppleCardsCarouselDemo />
      <ForYou />
      <Grid />
      <World />
      <Review />
    </>
  )
}

export default page