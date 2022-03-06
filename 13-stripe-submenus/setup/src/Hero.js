import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  // console.log(data)
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1> Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            incidunt officia in modi accusamus perferendis unde amet molestiae
            dolorum sint, natus at veniam sed velit officiis recusandae, quia et
            soluta. Rem consequuntur, iure eum.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
