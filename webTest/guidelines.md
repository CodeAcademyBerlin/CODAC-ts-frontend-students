---
navTitle: 'Guidelines on writing content in md files'
title: 'Guidelines on writing content in md files'
metaTitle: 'Guidelines'
access: admin
---

## General Guidelines

[Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

## Meta Attributes

- Three meta attributes are mandatory: title metaTitle and access

```md
---
title: 'H1 title of the page'
metaTitle: 'the browser tab name and should be short'
access: web / data / all / admin / public
order: 30 (integer defining the order of lessons )
prev: path of prev page eg : web/Module-1/Project-1
next: path of next page eg : web/Module-1/Project-1/Sprint-1
---
```

## Static images
Images stored location should be placed in the "assets" folder and the link should contain the prefix: "staticAsset" e.g.

```text
![TypeScript](staticAsset /web/TypeScript.jpg)
```

## Headers


- Page header should start with an h2 (##) as the title is already an h1.
- All h2 are automatically added to the right quick navigation sidebar.

## Codeblocks

- use single back tick "`" for one line code or tree back ticks for code snippets.
- Always specify the language used when opening code blocks (e.g. ```python)

## Videos

use video tags with url as source. video should be hosted on google storage and not locally as GitHub limits the size of files to 100mb.

```html
<video src="https://storage.googleapis.com/lms-codeacademyberlin/spikes/TypeScript%20Part%201.mp4"/>
```

- Always specify the language used when opening code blocks (e.g. ```python)

## Youtube integration

- You tube videos can be embedded directly into the page by passing the id, height and title of the video in a youtube tag as follow:

```text
<youtube title="Puppet video" height="500px" 
link="tgbNymZ7vqY"/>
```

<youtube title="Puppet video" height="500px" link="tgbNymZ7vqY"/>

## iframe integration

- I frames can be embedded passing the url, height and title of the website/ trello /maps / google slide / google calendar... as follow:

```text
<embeddediframe title="CAB-map" height="500px"
 link="https://www.google.com/maps/..."/>
```

<embeddediframe title="CAB-map" height="500px" link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.365923758914!2d13.49136765534277!3d52.490615454927436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f446e0c53a1%3A0x27eac7eee50f967e!2sCode%20Academy%20Berlin!5e0!3m2!1sen!2sde!4v1607426515473!5m2!1sen!2sde"/>

