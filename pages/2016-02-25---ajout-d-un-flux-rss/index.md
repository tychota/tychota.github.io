---
title: "Update de ce blog - Ajout d'un flux RSS"
date: '2016-02-25T17:45:23.015Z'
layout: post
path: "/ajout-flux-rss"
---

Suite aux demandes de mes amis/collègues, j'ajoute un flux atom / rss2.
Il est très fortement inspiré de [celui de Kyle](https://github.com/KyleAMathews/blog/blob/master/post-build.coffee) et est basé sur le
module NPM `feed`.

Dans la todolist :
* les boutons sociaux
* ~~un fil de commentaires disqus~~ : cf article suivant
* composant 404
* un revamp du CSS (bulma.io <3)

------------
**EDIT**

je n'avais pas ajouté le
```
<link rel="feed alternate" type="application/atom+xml" href="/feed.atom" title="Idées Random">
```
donc le feed n'était pas découvert.

Je remplace le feed RSS par un feed atom.


***Cet article et ses fautes d'orthographe sont sous licence CC-BY :)***
***Pull request welcome !***
