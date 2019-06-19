import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="The Program | India 2019" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Climate Change Science and Policy in India and Nepal</h1>
        <h2>May 10, 2019 - June 13, 2019 </h2>
      
        <p>From May 10, 2019 to June 13, 2019, I participated in a Dialogue of Civilizations on Climate Change Science and Policy in India and Nepal. A Dialogue of Civilizations is a faculty-led summer program where students travel and take two courses. See more about Northeastern University Dialogue of Civilizations <a href="https://www.northeastern.edu/geo/dialogue/">here</a>.</p>

        <p>Our dialogue was led by <a href="https://www.civ.neu.edu/people/ganguly-auroop">Auroop Ganguly</a> and <a href="https://wwww.linkedin.com/in/katemduffy">Kate Duffy</a>, one of his PhD students. We started our journey in Kolkata, and ended in Kovalam. Over the course of the trip we stayed in 8 cities in both Nepal and India. We saw many UNESCO World Heritage sites. We sat for talks by about a dozen guest lecturers, including talks from economists, diplomats, and Mount Everest summiters.</p>

        <h3>About this website</h3>
        
        <p>
          This website is made with Gatsby.js and is hosted on Github. You can visit my <a href="https://www.violetlingenfelter.com/">website</a> or my other{' '}
          <a href="https://github.com/vlingenfelter">projects</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
