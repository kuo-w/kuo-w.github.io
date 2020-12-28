# Portfolio

Pre-rendered React website for Github User page.

#### Motivation

I wanted something minimal and concise to convey my technical experiences.

React gives the flexibility of components. Pre-rendering makes the distributed content just HTML. I don't need interactivity so it keeps things fast to load.

Note that the `develop` branch contains the actual source code. The `master branch` is just for distribution.

## Getting Started

#### Requirements

- [Yarn](https://yarnpkg.com/)

#### Development

Data is sourced from `data.yaml`.

The app reads this in and renders corresponding components.

#### Web Server

Install with `yarn`.

Run with `yarn dev`.

Navigate to [localhost:1234](http://localhost:1234) in browser to view.

#### Deployment

Deploy the application as static HTML by pre-rendering with `React-snap` and deploying to GitHub using `gh-pages`. 

`yarn build` to build to folder `dist`. 

`prebuild` and `postbuild` run automatically to cleanup `dist` folder.

Deploy with `yarn deploy` to deploy `dist` to remote `master` branch.

## Built With

- [Parcel](https://parceljs.org/) - Zero-config Web Application Bundler
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Snap](https://github.com/stereobooster/react-snap) - Pre-renders a web app into static HTML
- [gh-pages](https://github.com/tschaub/gh-pages) - Publish files to a GitHub branch

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE.md) for details.
