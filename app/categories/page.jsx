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
        <div className='categories_img' >
          <div className="category_top">
            <h1>Body Suite Category</h1>
            <p>Discover a wide range of vibrators designed to suit every preference and experience level. From compact and discreet bullets to dual-action rabbit vibrators and powerful wands, our collection offers something for everyone. Crafted for comfort, safety, and pleasure, each product provides customizable settings to match your desired intensity. Perfect for solo exploration or enhancing intimacy with a partner, our vibrators combine quality, innovation, and enjoyment for unforgettable experiences.</p>
          </div>
        </div>
        <div className='category_container'>
            <Nav />
            <Grid />
            <Container />
            <ForYou />
            <AppleCardsCarouselDemo />
        </div>
    </div>
  )
}

export default page