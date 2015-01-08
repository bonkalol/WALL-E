module.exports = function changeEvent(event) {

	console.log(
		'[watcher] File ' + event.path.replace(/.*(?=assets)/,'') + ' was ' + event.type + ', compiling...'
	);

}
