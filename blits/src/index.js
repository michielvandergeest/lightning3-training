

import Blits from '@lightningjs/blits'
import App from './App.js'

Blits.Launch(App, 'app', {
  // This is canvas width and height (all other components get placed in this canvas)
  w: 1920,
  h: 1080,
  multithreaded: false,
  debugLevel: 1,
  inspector: true, // impactful on performance, renders HTML elements until it comes on screen for debugging (remove for production)
  fonts: [
    {
      family: 'lato',
      type: 'msdf',
      file: 'fonts/Lato-Regular.ttf',
    },
    {
      family: 'raleway',
      type: 'msdf',
      file: 'fonts/Raleway-ExtraBold.ttf',
    },
    {
      family: 'opensans',
      type: 'web',
      file: 'fonts/OpenSans-Medium.ttf',
    },
  ],
})
