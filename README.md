# Market App

Technology Stack:

### React.js with Typescript

### Redux

### Redux-Saga

### Styled-components

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Folder Structure

```
.gitignore
README.md
package-lock.json
package.json
public
   |-- favicon.ico
   |-- index.html
   |-- logo192.png
   |-- logo512.png
   |-- manifest.json
   |-- robots.txt
src
   |-- App.test.tsx
   |-- App.tsx
   |-- assets
   |   |-- fonts
   |   |   |-- OpenSans
   |   |   |   |-- LICENSE.txt
   |   |   |   |-- OpenSans-Italic.ttf
   |   |   |   |-- OpenSans.ttf
   |   |   |   |-- README.txt
   |   |   |   |-- static
   |   |   |   |   |-- OpenSans
   |   |   |   |   |   |-- OpenSans-Bold.ttf
   |   |   |   |   |   |-- OpenSans-BoldItalic.ttf
   |   |   |   |   |   |-- OpenSans-ExtraBold.ttf
   |   |   |   |   |   |-- OpenSans-ExtraBoldItalic.ttf
   |   |   |   |   |   |-- OpenSans-Italic.ttf
   |   |   |   |   |   |-- OpenSans-Light.ttf
   |   |   |   |   |   |-- OpenSans-LightItalic.ttf
   |   |   |   |   |   |-- OpenSans-Medium.ttf
   |   |   |   |   |   |-- OpenSans-MediumItalic.ttf
   |   |   |   |   |   |-- OpenSans-Regular.ttf
   |   |   |   |   |   |-- OpenSans-SemiBold.ttf
   |   |   |   |   |   |-- OpenSans-SemiBoldItalic.ttf
   |   |   |   |   |-- OpenSans_Condensed
   |   |   |   |   |   |-- OpenSans_Condensed-Bold.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-BoldItalic.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-ExtraBold.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-ExtraBoldItalic.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-Italic.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-Light.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-LightItalic.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-Medium.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-MediumItalic.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-Regular.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-SemiBold.ttf
   |   |   |   |   |   |-- OpenSans_Condensed-SemiBoldItalic.ttf
   |   |   |   |   |-- OpenSans_SemiCondensed
   |   |   |   |   |   |-- OpenSans_SemiCondensed-Bold.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-BoldItalic.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-ExtraBold.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-ExtraBoldItalic.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-Italic.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-Light.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-LightItalic.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-Medium.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-MediumItalic.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-Regular.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-SemiBold.ttf
   |   |   |   |   |   |-- OpenSans_SemiCondensed-SemiBoldItalic.ttf
   |   |-- icons
   |   |   |-- arrow-left.svg
   |   |   |-- arrow-right.svg
   |   |   |-- checked-blue.svg
   |   |   |-- checked-white.svg
   |   |-- images
   |   |   |-- Basket.svg
   |   |   |-- Logo.png
   |   |   |-- NotFound.png
   |   |   |-- cart-empty.png
   |   |   |-- mugs.jpeg
   |   |   |-- mugs2.jpeg
   |   |   |-- mugs3.jpeg
   |   |   |-- shirt1.jpg
   |   |   |-- shirt2.jpeg
   |   |   |-- shirt3.jpeg
   |-- components
   |   |-- BrandFilter
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- CartItem
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- FilterBox
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- Filters
   |   |   |-- filters.types.ts
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- Footer
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- Header
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- LoadingScreen
   |   |   |-- BlankSlates.tsx
   |   |   |-- CleanSlate.tsx
   |   |   |-- LoadingScreen.tsx
   |   |   |-- LoadingSpinner.tsx
   |   |   |-- SvgIcon.tsx
   |   |-- Modal
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- Pagination
   |   |   |-- index.tsx
   |   |   |-- styles.tsx
   |   |-- ProductTile
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- SortFilter
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- TagFilter
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |-- containers
   |   |-- Cart
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- Listings
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- MainView
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |   |-- Sidebar
   |   |   |-- index.tsx
   |   |   |-- styles.ts
   |-- index.css
   |-- index.tsx
   |-- logo.svg
   |-- react-app-env.d.ts
   |-- reportWebVitals.ts
   |-- setupTests.ts
   |-- static
   |   |-- brands.ts
   |   |-- filters.ts
   |   |-- helpers.ts
   |   |-- items.ts
   |-- store
   |   |-- actions
   |   |   |-- app.ts
   |   |   |-- brands.ts
   |   |   |-- cart.ts
   |   |   |-- filters.ts
   |   |   |-- products.ts
   |   |   |-- tags.ts
   |   |-- reducers
   |   |   |-- app.ts
   |   |   |-- brands.ts
   |   |   |-- cart.ts
   |   |   |-- filters.ts
   |   |   |-- index.ts
   |   |   |-- products.ts
   |   |   |-- tags.ts
   |   |-- sagas
   |   |   |-- __tests__
   |   |   |   |-- cart.js
   |   |   |   |-- products.js
   |   |   |-- brands.ts
   |   |   |-- index.ts
   |   |   |-- products.ts
   |   |-- services
   |   |   |-- index.ts
   |   |-- store.types.ts
   |-- theme
   |   |-- Colors.ts
   |   |-- StyledElements.ts
   |   |-- ThemeConfig.ts
   |-- types.d.ts
   |-- types
   |   |-- brand.types.ts
   |   |-- filters.types.ts
   |   |-- product.types.ts
   |   |-- tags.types.ts
tsconfig.json
```
