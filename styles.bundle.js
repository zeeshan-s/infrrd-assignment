webpackJsonp([2,4],{

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(459);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(479)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 14px; }\n\n.display-inline-flex {\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.display-block {\n  display: block; }\n\n.container {\n  width: 1170px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n[class^=\"column\"] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.margin-top {\n  margin-top: 20px; }\n\n.margin-left-10 {\n  margin-left: 10px; }\n\n.column-30 {\n  -ms-flex: 0 0 calc(30% - 30px);\n      flex: 0 0 calc(30% - 30px);\n  max-width: calc(30% - 30px); }\n\n.column-70 {\n  -ms-flex: 0 0 calc(70% - 30px);\n      flex: 0 0 calc(70% - 30px);\n  max-width: calc(70% - 30px); }\n\n.rooms-list {\n  padding: 30px 15px;\n  border: 1px solid #ddd;\n  margin: 15px;\n  border-radius: 5px; }\n  .rooms-list .room-icon {\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100px;\n    font-size: 40px; }\n  .rooms-list .room-content {\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: calc(100% - 110px); }\n    .rooms-list .room-content .room-name {\n      display: -ms-flexbox;\n      display: flex;\n      width: calc(100% - 200px);\n      font-size: 24px; }\n    .rooms-list .room-content .button-list {\n      display: -ms-flexbox;\n      display: flex;\n      width: 200px; }\n      .rooms-list .room-content .button-list .room-status {\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        font-size: 14px;\n        font-weight: bold;\n        text-transform: uppercase;\n        -ms-flex-align: center;\n            align-items: center; }\n      .rooms-list .room-content .button-list button {\n        width: 100%;\n        cursor: pointer;\n        text-align: center;\n        background: #39a77a;\n        border: 0;\n        color: #fff;\n        font-size: 14px;\n        font-weight: bold;\n        text-transform: uppercase;\n        padding: 10px;\n        border-radius: 5px; }\n        .rooms-list .room-content .button-list button:hover, .rooms-list .room-content .button-list button:active, .rooms-list .room-content .button-list button:focus {\n          background: #297959; }\n\n.booking-column {\n  background: #19202a;\n  color: #fff;\n  padding: 15px;\n  border-radius: 3px;\n  height: 350px; }\n\n.card-footer ul {\n  padding: 0;\n  margin: 0;\n  border-top: 1px solid #ddd;\n  margin-top: 45px;\n  padding-top: 10px; }\n  .card-footer ul li {\n    display: block;\n    font-size: 12px;\n    font-weight: bold;\n    color: #989090;\n    text-decoration: underline;\n    cursor: pointer; }\n\n.date-input {\n  width: calc(100% - 10px);\n  height: 30px;\n  padding-left: 10px;\n  margin-bottom: 30px;\n  margin-top: 10px; }\n\n.time-input input {\n  margin-top: 10px;\n  padding: 5px 10px;\n  margin-right: 10px; }\n\n.search-box-footer {\n  margin-top: 100px;\n  text-align: right;\n  position: relative; }\n\n.search-btn {\n  cursor: pointer;\n  background: #FF9800;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 10px 30px;\n  border-radius: 5px;\n  border: 1px solid #f5bf70; }\n  .search-btn:hover, .search-btn:active, .search-btn:focus {\n    outline: 0;\n    background: #f5ab06; }\n\n.modal {\n  position: fixed;\n  z-index: 999;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  top: 0;\n  height: 100%; }\n\n.modal:after {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.61);\n  content: '';\n  top: 0;\n  z-index: -1;\n  left: 0; }\n\n.modla-header {\n  background: #19202a;\n  color: #fff;\n  font-size: 18px;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  position: relative; }\n\n.modal-content {\n  width: 600px;\n  margin: auto;\n  background: #fff; }\n\nspan.modal-close {\n  position: absolute;\n  right: 9px;\n  font-size: 14px;\n  top: 12px;\n  opacity: 0.6;\n  cursor: pointer; }\n\n.modal-body {\n  padding: 15px;\n  float: left; }\n\n.modal-footer {\n  border-top: 1px solid #ddd;\n  padding: 15px;\n  margin-top: 10px;\n  text-align: right;\n  float: left;\n  width: calc(100% - 30px); }\n\n.form-lbl {\n  display: inline-block;\n  width: 30%;\n  float: left; }\n\n.form-input {\n  display: inline-block;\n  float: left;\n  width: 70%; }\n\n.form-row {\n  width: 100%;\n  float: left;\n  margin: 10px 0; }\n\n.form-input textarea, .form-input input[type=\"date\"] {\n  width: 90%; }\n\n.form-input input {\n  height: 25px; }\n\n.form-input textarea {\n  height: 100px; }\n\n.all-meetings {\n  margin-bottom: -20px;\n  margin-top: 10px;\n  height: 0px;\n  overflow: hidden; }\n  .all-meetings.expand {\n    height: initial; }\n\nspan.scheduled-user {\n  margin-left: 30px; }\n\nspan.scheduled-time {\n  margin-left: 30px; }\n\n.error-msg {\n  color: red;\n  font-weight: bold;\n  font-size: 12px; }\n\n.alert-box {\n  position: fixed;\n  background: #29c129;\n  top: 40px;\n  right: 30px;\n  color: #fff;\n  min-width: 200px;\n  padding: 20px 30px;\n  border-radius: 5px; }\n\n.booking-validations {\n  position: absolute;\n  top: -30px; }\n\n.cursur-pointer {\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ 479:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(295);


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ })

},[483]);
//# sourceMappingURL=styles.bundle.js.map