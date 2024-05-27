import Blits from '@lightningjs/blits'
import Row from '../components/Row'
import Button from '../components/Button'

export default Blits.Component('Home', {
  components: {
    Row,
    Button
  },
  template: `
    <Element
    	w="1920"
    	h="1080"
    	:color="$color"
    >
    	<Button
    		x="960"
    		y="250"
    		ref="button"
    	/>
    	<Row ref="row" />
    </Element>
  `,
  hooks: {
    ready(){
      this.select("row").focus()
      this.$listen('changeBackground', ()=> {
        console.log("changeBackground event received");
        this.color === "#1e293b" ? this.color = "#7393B3" : this.color = "#1e293b"       
      })

      // job of home to focus on items in its 'scope'
      this.$listen('focusButton', ()=> {
        this.select('button').focus()
      })
      this.$listen('focusRow', () => {
        this.select("row").focus()
      })
    }
  },
  state() {
    return {
      color: "#1e293b"
    }
  }
})
