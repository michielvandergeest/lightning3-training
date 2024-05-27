import Blits from "@lightningjs/blits";


export default Blits.Component('Button', {
    template: `
    <Element
    	width="300"
    	height="50"
    	mount="0.5"
    	:color="$color"
    >
    	<Text
    		content="Change Background"
    		mount="0.5"
    		x="150"
    		y="25"
    		color="#000000"
    	/>
    </Element>
  `,
  hooks: {
    focus() {
        this.color = "#ffffff"
    },
    unfocus() {
        this.color="#808080"
    }
  },
  state() { return {
    color: "#808080"
  }},
  input: {
    enter() {
        console.log("Button entered!");
        this.$emit('changeBackground')
    },
    down() {
        this.$emit('focusRow') // not job of button to focus items not in its 'scope'
    }
  }

})