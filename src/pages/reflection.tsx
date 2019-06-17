import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Instagram = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="The Program | India 2019" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1 id="toc_0">Reflection</h1>

        <h2 id="toc_1">The Importance of Climate Resilience</h2>

        <h2 id="toc_2">Climate Change Tourism: An Oxymoron</h2> 

        <p>A persisting thought that I cannot escape when it comes to this dialogue is that of how much carbon we used to move around India and Nepal. We took 7 flights during the Dialogue, not to mention the flights that we took to get to the Indian subcontinent. We took cars and buses great distances, in the name of learning and tourism. Do the ends of our travels justify the means? </p>

        <p>Climate mitigation was a core concept that we studied during our trip. As our professor said many times, mitigation is avoiding the unmanageable. Mitigation means changing our everyday behaviors in such a way that we can have less of an impact on climate change. This can mean a lot of things, but primarily it means reducing our reliance on fossil fuels. When we think about climate change mitigation, the amount of fossil fuels we consumed on our trip begs question. </p>

        <p>It is difficult to grapple with the contrast between our studies and our travels. While we learned about how vulnerable the low-lying slums in Bangladesh and India are, we flew to Aurangabad. While we learned how sea-level rise will affect the Sunderbans, we spent 8 hours on a bus to get there. While we learned about glacial melt on the Tibetan plateau, we flew to see Mount Everest. We saw flash floods in Pokhara caused by plastic pollution, but while we were in India we drank only bottled water. We saw beautiful monuments, both man-made and natural, that are increasingly vulnerable due to climate change. We contributed everyday (and actively contribute everyday) to the same climate change endangering these places. </p>

        <p>This leaves me questioning my lifestyle at home. How many lifestyle changes must I make to even out the carbon I consumed this summer? How different was how I travelled on this Dialogue from how I live my day-to-day life? The answers are not encouraging. The American lifestyle, complete with its decadent carbon consumption habits, is choking vulnerable peoples and areas. When American university students travel to India to learn about climate change, what exactly should they take back? </p>

        <p>I think that one of the strongest impressions that this trip has impinted upon me is that the impact of my lifestyle is affecting others more than it is affecting me. This is a fact, and it is a fact that I knew before I left for this trip. But it wasn&#39;t until this trip that I had to actually confront this fact. I had look at the landscapes that my habits are destroying, look into the eyes of the people that my conviences are inconviencing. One of the most disturbing aspects of this trip is how little it shocked me beforehand. Before we left, I had not questioned the amount of travelling we were undertaking. I had accepted it as normal.</p>

        <h2 id="toc_3">Conclusion</h2>

        <p>Going to the Indian subcontinent was an invaluable experience for me. We got to see beautiful areas that are endangered by climate change. We got to hear lectures from experts in climate science, and hear first hand how climate change is changing India and Nepal. We got to experience some of the incredible diversity of the Indian subcontinent by travelling to almost all corners of the country, and travelling like this forced me to confront my consumption habits.</p>

        <p>As I leave this trip, I meditate on what it means to be a student of climate science. How much must one walk the talk? How can I take what I have learned, the great potential for loss that we face at the brink of irreperably altering our climate, and translate it to how I live my life? How can I show what I have learned to my family and friends? I hope that this website may be a first step. </p>



      </AnimatedBox>
    </Layout>
  )
}

export default Instagram
