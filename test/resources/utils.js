


exports.utils = {
	
	capture: function(fileName) {
		this._captureCounter = this._captureCounter || 0;
		this._captureCounter += 1;
		var screenshotsFolder = "test/screenshots/";
		casper.capture(screenshotsFolder + this._captureCounter + "-" + fileName);
	}
}