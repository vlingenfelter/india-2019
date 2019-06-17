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
      
        <p>
          This website is made with Gatsby.js and is hosted on Github. You can visit my <a href="https://www.violetlingenfelter.com/">website</a> or my other{' '}
          <a href="https://github.com/vlingenfelter">projects</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
