import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeHashtag = ({reversed}) => {
  return (
    <div className="h-[10vh] w-full opacity-40 fadeShadow relative overflow-hidden rounded-lg flex items-center white-black_text">
    <Marquee direction={reversed ? 'right' : 'left'}>
      <div className="flex items-center gap-14 w-max mr-14">
        <p>#festival</p>
        <p>#vision</p>
        <p>#films</p>
        <p>#kino</p>
        <p>#filmMaking</p>
        <p>#ForStudents</p>
        <p>#youthfestival</p>
      </div>
      <div className="flex items-center gap-14 w-max mr-14">
        <p>#festival</p>
        <p>#vision</p>
        <p>#films</p>
        <p>#kino</p>
        <p>#filmMaking</p>
        <p>#ForStudents</p>
        <p>#youthfestival</p>
      </div>
      <div className="flex items-center gap-14 w-max mr-14">
        <p>#festival</p>
        <p>#vision</p>
        <p>#films</p>
        <p>#kino</p>
        <p>#filmMaking</p>
        <p>#ForStudents</p>
        <p>#youthfestival</p>
      </div>
    </Marquee>
  </div>
  )
}

export default MarqueeHashtag
