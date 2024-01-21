export default {
	returnPostionX() {
		document.addEventListener((event)=> {
			return event.clientX;
		})

	},
	returnPositionY() {
		return event.clientY;
	},

}