**Mapix** is a simple webpage made in React to enable me to draw maps with pixel art, so I can test in my 2D games.

## Next steps

- [x] **add custom cursor on drawing area**
- [x] **refactor App to use context**
- [x] **add export array-map functionality (each map is represented as a 2D matrix), which will write the map in the _ResultArea_**
- [x] **replace buttons by canvas (I made with buttons just to allow me to implement it very fast, in some minutes. Now I showld evolve it to use canvas to allow faster drawing and better rendering)**
- [ ] add color picker (at the moment, user can only select 9 colors), enabling user to choose any color he wants.
- [ ] export with canvas (read colors from canvas and export 2D matrix)
- [ ] enable user to select resolutions other than 800x640
- [ ] add custom tiles, not only colors

![Mapix Screenshot](/public/mapix-screenshot.png)

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
