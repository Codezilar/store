import { Container } from '@/components/Contaner'
import { ForYou } from '@/components/ForYou'
import { Grid } from '@/components/Grid'
import { Hero } from '@/components/Hero'
import { AppleCardsCarouselDemo } from '@/components/ShowCase'
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
    </>
  )
}

export default page