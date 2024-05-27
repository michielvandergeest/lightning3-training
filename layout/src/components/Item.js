import Blits from "@lightningjs/blits"

export default Blits.Component('Item', {
  //Shaders are WebGL thing not Lightning, with radius we can pass top, right,bottom, radi-->
    template: `
    <Element>
    	<Element
    		w="300"
    		h="480"
    		x="$x"
    		y="250"
    		mount="{y:0.5}"
    		color="$color"
    		:effects="[$shader('radius',{radius: 20})]"
    		:scale="$focusScale"
    	>
    		<Text />
    	</Element>
    </Element>
  `,
  props: ['color', 'index', 'title', 'description'],
  state() {
    return {
        focusScale: 1
    }
  },
  computed: {
    x() {
        let padding = 60
        let offset = 15
        return this.index * (padding + 280) + offset  
    }
  },
  hooks: {
    focus() {
        this.focusScale = 1.1
        this.$emit('mainContentChange', {title: this.title, description: this.description})
    },
    unfocus() {
        this.focusScale = 1
    }
  },
  input: {
    enter() {
        console.log(this.index)
        this.$emit('hello', "World !")
    }
  }
})