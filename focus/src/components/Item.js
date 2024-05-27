import Blits from "@lightningjs/blits"

export default Blits.Component('Item', {
    // z index is relevant to this current component, highest precedence is 2 cause there are another 2 elements 
    // defined in this template
    template: `
    <Element>
    	<Element
    		w="280"
    		h="480"
    		x="$x"
    		y="250"
    		z="2"
    		mount="{y:0.5}"
    		color="$color"
    	>
    	</Element>
    	<Element
    		w="286"
    		h="486"
    		x="$x - 3"
    		y="250"
    		mount="{y:0.5}"
    		color="#fff"
    		:show="$active"
    	></Element>
    </Element>
  `,
  props: ['color', 'index'],
  state() {
    return {
        active: false
    }
  },
  computed: {
    x() {
        let padding = 15
        let offset = 15
        return this.index * (padding + 280) + offset  
    }
  },
  hooks: {
    focus() {
        this.active = true
    },
    unfocus() {
        this.active = false
    }
  },
  input: {
    enter() {
        console.log(this.index)
        this.$emit('hello', "World !")
    }
  }
})