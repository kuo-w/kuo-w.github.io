# Portfolio

Pre-rendered React website for Github User page.

## Getting Started

#### Requirements

- [npm](https://www.npmjs.com/)

#### Development

Data is sourced from `data.yaml`.

The app reads this in and renders the corresponding components.

#### Web Server

Install with `npm install`.

Run with `npm run dev`.

Navigate to [localhost:1234](http://localhost:1234) in browser to view.

#### Deployment

Deploy the application as static HTML by pre-rendering with `React-snap` and deploying to GitHub using `gh-pages`. 

`npm run build` to build to folder `dist`. The `prebuild` step and `postbuild` step will run automatically.

Deploy with `npm run deploy` to deploy `dist` to remote `master` branch.

## Built With

- [Parcel](https://parceljs.org/) - Web Application Bundler
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Snap](https://github.com/stereobooster/react-snap) - Pre-renders a web app into static HTML
- [gh-pages](https://github.com/tschaub/gh-pages) - Publish files to a GitHub branch

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE.md) for details.
