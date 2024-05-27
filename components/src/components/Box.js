import Blits from '@lightningjs/blits'
import Button from './Button'

/**
 * key="value"
 * :key="value" - reactive (unlikely to see this - dynamic and reactive is typical)
 * key="$var" - dynamic
 * :key="$var" - dynamic and reactive
 */
export default Blits.Component('Box', {
  components: {
    Button,
  },
  template: `
    <!-- color format RRGGBBAA-->
    <Element
    	w="200"
    	h="200"
    	x="$xpos"
    	y="540"
    	color="$paint"
    >
    	<Text
    		x="100"
    		y="100"
    		mount="0.5"
    		:content="$word"
    		color="$textColor"
    	/>
    	<Button text="Click" />
    </Element>
  `,
  props: ['paint', 'text', 'xpos', 'textColor'], // what can be passed into this component (defaults that exist for Text and Element components are NOT passed down in custom components)
  state() {
    return {
      word: 'Hello',
    }
  },
  input: {
    up() {
      this.word = this.word === 'Hello' ? 'World !' : 'Hello'
    },
  },
})
