import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'

export default Blits.Application({
  template: `
    <Element>
    	<RouterView />
    </Element>
  `,
  routes: [{ path: '/', component: Home }],
  keymap: {}, // add new keys or override (gets merged to default key map)
  keys: {}, // add new keys (get merged to default key map)

})

/**
 * Additional notes
 * Moving items offsecreen we can free up memory - anything off screen does not take up resources
 */
