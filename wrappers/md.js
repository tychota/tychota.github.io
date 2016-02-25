import React from 'react'
import moment from 'moment'
import momentLocal from '../utils/momentLocal'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import ReadNext from '../components/ReadNext'
import { rhythm } from '../utils/typography'
import { config } from 'config'
import DisqusThread from 'react-disqus-thread'

import '../css/solarized.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }}/>
          <em
            style={{
              display: 'block',
              marginBottom: rhythm(2),
            }}
          >
            Posté {moment(post.date).fromNow()}
          </em>
          <hr
            style={{
              marginBottom: rhythm(2),
            }}
          />
          <ReadNext post={post} pages={route.pages} />
          <p>
            <img
              src={link('/tychota.png')}
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
          <DisqusThread
            shortname="tychota"
            title={post.title}
            url={`http://tychota.github.io${route.path}`}
          />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
