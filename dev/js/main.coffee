init = ->
	ieTest()
	return
ieTest = ->
	ie_upto10 = /MSIE \d/.test(navigator.userAgent)
	ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent)
	isIe = ie_upto10 or ie_11up
	$("html").addClass "IE"	if isIe
	return
$(document).ready ->
	init()
	return
