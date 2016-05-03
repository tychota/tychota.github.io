import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p>
        <img
          src={prefixLink('/tychota.png')}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Maintenu par <strong>{config.authorName}</strong> qui vit à Paris et code en JS/python.
        Publié sur github gràce à <a href="https://github.com/gatsbyjs/gatsby"> Gatsby</a>, qui utilise React et son écosystème.
      </p>
    )
  }
}

export default Bio
