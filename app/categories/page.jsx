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
        <Image src={'/body.webp'} height={1000} width={1000} alt='body' className='categories_img' />
        <div className='category_container'>
            <Nav />
            <Container />
            <Grid />
            <ForYou />
            <AppleCardsCarouselDemo />
        </div>
    </div>
  )
}

export default page