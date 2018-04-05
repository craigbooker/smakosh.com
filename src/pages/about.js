import React from 'react'
const config = require("../../data/Config")
import Img from 'gatsby-image'

import { Container, JsonLd } from '../components/common'
import Details from '../components/Details'
import Socials from '../components/Socials'

const About = ({ data }) => (
  <Container>
    <JsonLd
        headline={config.description}
    >
      Smakosh | About
    </JsonLd>
    <h2>About me</h2>
    <div className="about">
      <Details />
      <div className="me">
        <a href={data.AboutImage.sizes.src}>
          <Img sizes={data.AboutImage.sizes} alt="just me chilling" />
        </a>
      </div>
    </div>
    <Socials />
  </Container>
)

export const pageQuery = graphql`
  query AboutImageQuery {
    AboutImage: imageSharp(id: { regex: "/me.jpg/" }) {
      sizes(maxWidth: 630 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default About
