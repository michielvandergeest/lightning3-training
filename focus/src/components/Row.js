import Blits from "@lightningjs/blits"
import Item from "./Item.js"

export default Blits.Component('Row', {
    components: {Item},
    // although we defined key to be the item I believe the docs mentioned that this is 
    // automatically set to index when in a for loop and this is what is appended to ref 
    // for each item iterated in the for loop
    template: `
    <Element>
    	<Element
    		w="1490"
    		h="500"
    		x="960"
    		y="540"
    		color="#808080"
    		mount="0.5"
    	>
    		<Item
    			:for="(item, index) in $items"
    			color="$item.color"
    			index="$index"
    			key="$index"
    			ref="item"
    		/>
    	</Element>
    </Element>
  `,
  state() {
    return {
        items: [
            {color: "0xff0000ff"},
            {color: "0x00ff00ff"},
            {color: "0x0000ffff"},
            {color: "0xffff00ff"},
            {color: "0xff00ffff"}
        ],
        focusIndex: 0,

    }
  },
  input: {
    left() {
       this.focusIndex = Math.max(this.focusIndex-1,0) // dont go past the first item in items list 
    },
    right() {
        this.focusIndex = Math.min(this.focusIndex + 1, this.items.length - 1)
    },
    up(){
      this.$emit('focusButton') // not job of row to focus items not in its 'scope'
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
  hooks: {
    focus() {
        this.$trigger('focusIndex') // trigger a call essentially to focusIndex var for wacth code to kick off for first time entering this compoennt 
    },
  }
})