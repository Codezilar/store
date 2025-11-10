import CategoryDesc from '@/components/CategoryDesc'
import { Container } from '@/components/Contaner'
import { ForYou } from '@/components/ForYou'
import { Grid } from '@/components/Grid'
import { Nav } from '@/components/Nav'
import { AppleCardsCarouselDemo } from '@/components/ShowCase'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='category'>
        <CategoryDesc />
        <div className='category_container'>
            <Grid />
            <Container />
            <ForYou />
            <AppleCardsCarouselDemo />
        </div>
    </div>
  )
}

export default page