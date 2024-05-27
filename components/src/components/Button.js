import Blits from '@lightningjs/blits'

export default Blits.Component('Button', {
  template: `
    <Element
    	w="190"
    	h="50"
    	x="5"
    	y="145"
    	color="#808080"
    >
    	<Text
    		content="$text"
    		x="95"
    		y="25"
    		mount="0.5"
    		wordwrap="10"
    		contain="width"
    	/>
    </Element>
  `,
  props: ['text'],
})
