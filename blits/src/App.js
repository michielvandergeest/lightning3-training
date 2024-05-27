import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'

/**
 * Central for everything that happens in application
 */
export default Blits.Application({
  template: `
    <Element>
    	<RouterView />
    </Element>
  `,
  routes: [{ path: '/', component: Home }],
})
