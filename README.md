![Stichting Sticky's logo](./assets/images/logo.svg)

# Stichting Sticky

Repository with the source code for the [stichtingsticky.nl](https://stichtingsticky.nl/) website. Plain HTML, CSS and a little JavaScript — no build step.

## Getting started

```sh
# Clone the repository
$ git clone git@github.com:stichting-sticky/static.git
```

The site lives in the repository root: the pages are the `*.html` files, and everything they use (styles, scripts, fonts, images and documents such as the statutes) is in [`./assets/`](./assets/). To preview locally, serve the folder with any static file server:

```sh
$ python3 -m http.server 4321
```

Then open [localhost:4321](http://localhost:4321/). Pushing to `main` deploys the site to GitHub Pages.

## License

Copyright 2020 - 2026 Stichting Sticky. All Rights Reserved. This project is licensed under the terms of the MIT license. View the [full license](./LICENSE).
