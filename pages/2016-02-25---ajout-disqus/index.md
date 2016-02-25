---
title: Ajout disqus
date: '2016-02-25T19:46:30.783Z'
layout: post
path: "/ajout-disqus/"
---

J'ajoute des commentaires disqus.
Il est très fortement inspiré de [celui de Kyle](https://github.com/KyleAMathews/blog) et est basé sur le
module NPM `react-disqus-thread`.

J'ai inséré le composant react suivant :
```
<DisqusThread
  shortname="tychota"
  title={post.title}
  url={`http://tychota.github.io${route.path}`}
/>
```
et créé un compte Disqus.

Bref, c'était fort simple d'intégrer Disqus.

***Cet article et ses fautes d'orthographe sont sous licence CC-BY :)***
***Pull request welcome !***
