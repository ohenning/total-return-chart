# Total Return Chart

## Purpose

Visualize growth of selected stock prices and the [`total stock return`](https://financeformulas.net/Total-Stock-Return.html) (inluding re-invested dividends).

To view the charts, navigate to one of the following routes:

- /microsoft
- /apple
- /exxon

## Techstack

- [`Nuxt JS 3`](https://v3.nuxtjs.org/)
- [`Vue JS 3`](https://v3.vuejs.org/)
- [`Apex Charts`](https://apexcharts.com/)

## Local Development

### Prerequisites

- Node installed (min version 14.16.0)
- npm installed

### Run the app

1. npm install
2. npm run dev

### Run the app using docker

1. docker build .
2. docker run -p 3000:3000 {image_sha}

## Stuff to improve

- Landing page at root route
- Dynamic Sub-Pages
- Proper typings
- Understand nuxt JS public import logic and do it properly
- Responsive

## Maintainer

[@ohenning](https://github.com/ohenning)
