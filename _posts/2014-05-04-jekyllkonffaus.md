---
layout: post
title: Jekyll käyttöönotto-opas
category: Jekyll
subcategory: Jekyll konffaus
favourite: yes
---


**Jekyll devauskomento**:

	jekyll serve build --watch --baseurl ""
<br/>
**baseurl:** nimensä mukaisesti config.yml-tiedostossa baseurl säätää peruspolun. GitHub-sivuja (gh-pages) käyttäessä tulee määrittää peruspoluksi repon nimi.

	baseurl: /REPON_NIMI
<br/>

**permalink:** permalinkillä voidaan määrittää polkurakenne, jota sivustosi seuraa. Yksi tyypillinen käyttötapa on ottaa permalink pois käytöstä asettamalle sille arvo "none". [Lisää..](http://jekyllrb.com/docs/permalinks/)

	permalink: none
<br/>

