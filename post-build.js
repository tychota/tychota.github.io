'use strict'
const Feed = require('feed')
const _ = require('lodash')
const filter = _.filter
const sortBy = _.sortBy
const moment = require('moment')
const MarkdownIt = require('markdown-it')
const fs = require('fs')
const frontmatter = require('front-matter')

const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

module.exports = function(pages, callback) {
  generateAtomFeed(pages)
  return callback()
}

const generateAtomFeed = function(pages) {
  let feed, i, len, page, ref
  feed = new Feed({
    title: 'Idées random',
    description: 'Le blog de Tycho Tatitscheff',
    link: 'http://tychota.github.io',
    copyright: 'CC-BY',
    author: {
      name: 'Tycho Tatitscheff',
      email: 'tycho.tatitscheff@gmail.com'
    }
  })
  pages = sortBy(pages, function(page) {
    var ref
    return (ref = page.data) != null ? ref.date : void 0
  }).reverse()
  ref = filter(pages, function(f) {
    var ref, ref1
    return (((ref = f.data) != null ? ref.title : void 0) != null) && !((ref1 = f.data) != null ? ref1.draft : void 0)
  }).slice(0, 10)
  for (i = 0, len = ref.length; i < len; i++) {
    page = ref[i]
    feed.addItem({
      title: page.data.title,
      link: "http://tychota.github.io" + page.path,
      date: moment(page.data.date).toDate(),
      content: md.render(frontmatter(fs.readFileSync(__dirname + "/pages/" + page.requirePath, 'utf-8')).body),
      author: [
        {
          name: "Tycho Tatitscheff",
          email: "tycho.tatitscheff@gmail.com",
          link: "http://tychota.github.io"
        }
      ]
    })
  }
  feed.addContributor({
    name: 'Tycho Tatitscheff',
    email: 'tycho.tatitscheff',
    link: 'http://tychota.github.io'
  })
  fs.writeFileSync(__dirname + "/public/feed.atom", feed.render('atom-1.0'))
}
