import React from 'react'
import '../css/Gallry.css'
import TagsCnt from './Subcnt/TagsCnt'
import ArtCard from './Subcnt/ArtCard'


const Galllry = () => {
  return (
    <>
      <main>
        <TagsCnt />
        <ArtCard />
      </main>
    </>
  )
}

export default Galllry