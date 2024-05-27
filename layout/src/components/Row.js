import Blits from "@lightningjs/blits"
import Item from "./Item.js"

export default Blits.Component('Row', {
    components: {Item},
    template: `
    <Element>
    	<Element
    		w="1490"
    		h="500"
    		x="190"
    		y="$y"
    		:alpha.transition="{value: $rowAlpha, duration: 200, easing: 'ease-in'}"
    	>
    		<Item
    			:for="(item, index) in $data"
    			color="$item.color"
    			index="$index"
    			key="$index"
    			ref="item"
    			title="$item.title"
    			description="$item.description"
    		/>
    	</Element>
    </Element>
  `,
  props: ['y', 'data'],
  state() {
    return {
        focusIndex: 0,
        rowAlpha: 0.2
    }
  },
  hooks: {
    focus() {
      console.log("Focused !");
        this.$trigger('focusIndex') // trigger a call essentially to focusIndex var for wacth code to kick off for first time entering this compoennt 
        this.rowAlpha = 1
    },
    unfocus() {
      this.rowAlpha = 0.2
    }
  },
  input: {
    left() {
       this.focusIndex = Math.max(this.focusIndex-1,0) // dont go past the first item in items list 
       if (this.focusIndex == 0) {
        this.$emit('focusSidebar')
       }
    },
    right() {
        this.focusIndex = Math.min(this.focusIndex + 1, this.data.length - 1)
    }
  },
  watch: {
    focusIndex(value, oldValue) {
        const focusedItem = this.select(`item${value}`)
        if (focusedItem) {
            focusedItem.focus()
        }
    }
  },
})