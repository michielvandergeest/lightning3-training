import Blits from '@lightningjs/blits'
import Box from '../components/Box.js'

export default Blits.Component('Home', {
  components: {
    Box,
  },
  template: `
    <Element
    	w="1920"
    	h="1080"
    	color="#1e293b"
    >
    	<Box
    		:for="(box, index) in $boxes"
    		xpos="$box.xpos"
    		paint="$box.paint"
    		text="$box.text"
    		textColor="#808080"
    	/>
    </Element>
  `,
  hooks: {
    ready() {
      // this.select('box').focus()
    },
  },
  state() {
    return {
      boxes: [
        { xpos: 50, paint: '#ff0000', text: 'Awesome!' },
        { xpos: 260, paint: '#00ff00', text: 'My!' },
        { xpos: 470, paint: '#0000ff', text: 'Guy!' },
      ],
    }
  },
})
