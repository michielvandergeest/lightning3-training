import Blits from '@lightningjs/blits'

import Loader from '../components/Loader.js'

export default Blits.Component('Home', {
  components: {},
  template: `
    <Element
    	w="1920"
    	h="1080"
    	color="#1e293b"
    >
    	<Element
    		:src="$imagePath"
    		w="200"
    		h="200"
    		:x="$reveal"
    		y="320"
    		:effects="[$shader('radius', {radius: 12})]"
    		@loaded="$showImage"
    		@error="$handleImageError"
    		:color="$imageColor"
    		clipping="true"
    	/>
    </Element>
  `,
  methods: {
    showImage(dimensions) {
      console.log(dimensions);
      this.$setTimeout(() => {
        this.reveal = 860
      }, 1000)
    },
    handleImageError(err) {
      console.log(err);
      this.imagePath = 'assets/backup.png'
      this.imageColor= "#ff0000"
    }
  },
  state() {
    return {
      reveal: 1920, // offscreen before we have not determined that the image can load (there is a bug using show or alpha, hence this route)
      imagePath: 'assets/logo.png',
      imageColor: '#ffffff' // apparently white does not influence the color of the image
    }
  }
})
