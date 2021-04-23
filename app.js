/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples sync recursive .*\\.html":
/*!********************************!*\
  !*** ./examples sync .*\.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./example2.html": "./examples/example2.html",
	"./example3.html": "./examples/example3.html",
	"./example4.html": "./examples/example4.html",
	"./example5.html": "./examples/example5.html",
	"./example6.html": "./examples/example6.html",
	"./example7.html": "./examples/example7.html",
	"./example8.html": "./examples/example8.html",
	"./example9.html": "./examples/example9.html"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./examples sync recursive .*\\.html";

/***/ }),

/***/ "./examples/example2.html":
/*!********************************!*\
  !*** ./examples/example2.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\neasel-bitmap example:\nAn image\n-->\n<easel-canvas width=\"400\" height=\"300\">\n    <easel-bitmap\n        image=\"images/awesome-background.jpg\"\n        :x=\"0\"\n        :y=\"0\"\n        :align=\"['left','top']\"\n    >\n    </easel-bitmap>\n</easel-canvas>\n";

/***/ }),

/***/ "./examples/example3.html":
/*!********************************!*\
  !*** ./examples/example3.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\neasel-canvas example:\nLook how easy!\n-->\n<easel-canvas width=\"500\" height=\"100\">\n    <easel-shape\n        form=\"rect\"\n        :dimensions=\"[500,100]\"\n        :x=\"0\"\n        :y=\"0\"\n        fill=\"#CCCCFF\"\n    >\n    </easel-shape>\n    <easel-text\n        text=\"This is so easy!\"\n        :x=\"250\"\n        :y=\"75\"\n        font=\"70px Calibri\"\n        color=\"white\"\n        :shadow=\"['#000088',3,2,3]\"\n        :align=\"['center', 'alphabetic']\"\n    >\n    </easel-text>\n</easel-canvas>\n";

/***/ }),

/***/ "./examples/example4.html":
/*!********************************!*\
  !*** ./examples/example4.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\neasel-container example:\nA container that is flipped, shrunk by half, and positioned with x,y.\n-->\n<easel-canvas width=\"500\" height=\"100\">\n    <easel-container\n        flip=\"horizontal\"\n        scale=\".5\"\n        :x=\"250\"\n        :y=\"50\"\n    >\n        <easel-bitmap\n            image=\"images/wooden-sign-texture.png\"\n            :align=\"['center', 'center']\"\n        >\n        </easel-bitmap>\n        <easel-text\n            text=\"Dan's Left Shoe Emporium\"\n            font=\"50px 'Times New Roman'\"\n            :y=\"25\"\n            :align=\"['center', 'alphabetic']\"\n        >\n        </easel-text>\n    </easel-container>\n</easel-canvas>\n";

/***/ }),

/***/ "./examples/example5.html":
/*!********************************!*\
  !*** ./examples/example5.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\neasel-shape example:\nDraw a blue triangle with a red border.\n-->\n<easel-canvas width=\"200\" height=\"200\">\n    <easel-shape\n        form=\"star\"\n        :dimensions=\"[100, 3, 0]\"\n        fill=\"blue\"\n        stroke=\"red\"\n        :x=\"0\"\n        :y=\"0\"\n    >\n    </easel-shape>\n</easel-canvas>\n";

/***/ }),

/***/ "./examples/example6.html":
/*!********************************!*\
  !*** ./examples/example6.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\neasel-sprite-sheet and easel-sprite example:\nA sprite sheet based on the grid at\nhttp://www.dankuck.com/vue-easeljs/images/lastguardian-all.png\nusing the first character's frames from 0 to 7.\nTry changing the easel-sprite's animation to \"confusion\".\n-->\n<easel-canvas width=\"64\" height=\"64\" :anti-alias=\"false\">\n    <easel-sprite-sheet\n        :images=\"['images/lastguardian-all.png']\"\n        :frames=\"{width:32,height:32}\"\n        :animations=\"{\n            stand: 7,\n            walk: [6, 7],\n            walkAndStand: [6, 7, 'stand'],\n            confusion: {\n                frames: [5, 1, 0, 2],\n            },\n        }\"\n        :framerate=\"4\"\n    >\n        <easel-sprite\n            :x=\"32\"\n            :y=\"48\"\n            animation=\"walk\"\n            align=\"bottom-center\"\n        >\n        </easel-sprite>\n    </easel-sprite-sheet>\n</easel-canvas>\n";

/***/ }),

/***/ "./examples/example7.html":
/*!********************************!*\
  !*** ./examples/example7.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\neasel-text example:\nA red sentence in 20px Arial font centered at x with y at the alphabetic baseline.\n-->\n<easel-canvas width=\"500\" height=\"64\">\n    <easel-text\n        text=\"The Ran In Span Falls Manly On The Plan\"\n        :x=\"250\"\n        :y=\"32\"\n        font=\"20px Arial\"\n        color=\"red\"\n        :align=\"['center','alphabetic']\"\n    >\n    </easel-text>\n</easel-canvas>\n";

/***/ }),

/***/ "./examples/example8.html":
/*!********************************!*\
  !*** ./examples/example8.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\nAlignment example: if a 50x50 square shape is aligned at ['left', 'top'], and its x and y\nare at 65, 70, then the square's top left point will be at 65, 70 and its\nbottom right point will be at 115, 120.\n-->\n<easel-canvas width=\"200\" height=\"150\">\n    <easel-container :x=\"35\" :y=\"10\">\n        <easel-text text=\"(0,0)\" :align=\"['right','bottom']\" :x=\"0\" :y=\"0\"></easel-text>\n        <easel-shape form=\"rect\" :dimensions=\"[200, 200]\" stroke=\"#CCC\" :x=\"0\" :y=\"0\" :align=\"['left', 'top']\">\n        </easel-shape>\n        <easel-shape form=\"circle\" :dimensions=\"1\" fill=\"black\" :x=\"0\" :y=\"0\" :align=\"['center', 'center']\">\n        </easel-shape>\n        <easel-shape form=\"rect\" :dimensions=\"[50, 50]\" fill=\"#88F\" :x=\"65\" :y=\"70\" :align=\"['left', 'top']\">\n        </easel-shape>\n        <easel-shape form=\"circle\" :dimensions=\"1\" fill=\"black\" :x=\"65\" :y=\"70\" :align=\"['center', 'center']\">\n        </easel-shape>\n        <easel-text text=\"(65,70)\" :align=\"['right','bottom']\" :x=\"65\" :y=\"70\"></easel-text>\n        <easel-text text=\"(115,120)\" :align=\"['left','top']\" :x=\"115\" :y=\"120\"></easel-text>\n    </easel-container>\n</easel-canvas>\n";

/***/ }),

/***/ "./examples/example9.html":
/*!********************************!*\
  !*** ./examples/example9.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\nContinued alignment example:\nIf the same square was aligned at ['right', 'bottom'], then it's bottom right point\nwould be at 65, 70 and its top left point would be at 15, 20.\n-->\n<easel-canvas width=\"200\" height=\"150\">\n    <easel-container :x=\"35\" :y=\"10\">\n        <easel-text text=\"(0,0)\" :align=\"['right','bottom']\" :x=\"0\" :y=\"0\"></easel-text>\n        <easel-shape form=\"rect\" :dimensions=\"[200, 200]\" stroke=\"#CCC\" :x=\"0\" :y=\"0\" :align=\"['left', 'top']\">\n        </easel-shape>\n        <easel-shape form=\"circle\" :dimensions=\"1\" fill=\"black\" :x=\"0\" :y=\"0\" :align=\"['center', 'center']\">\n        </easel-shape>\n        <easel-shape form=\"rect\" :dimensions=\"[50, 50]\" fill=\"#88F\" :x=\"65\" :y=\"70\" :align=\"['right', 'bottom']\">\n        </easel-shape>\n        <easel-shape form=\"circle\" :dimensions=\"1\" fill=\"black\" :x=\"65\" :y=\"70\" :align=\"['center', 'center']\">\n        </easel-shape>\n        <easel-text text=\"(65,70)\" :align=\"['left','top']\" :x=\"65\" :y=\"70\"></easel-text>\n        <easel-text text=\"(15,20)\" :align=\"['right','bottom']\" :x=\"15\" :y=\"20\"></easel-text>\n    </easel-container>\n</easel-canvas>\n";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Exampler.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Exampler.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//


var makeName = function makeName() {
  return 'dynamic-' + new String(Math.random()).replace(/.*\./, '');
};

vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.warnHandler = function (err, vm) {
  if (vm.$options.warnHandler) {
    vm.$options.warnHandler(err);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['html'],
  data: function data() {
    return {
      code: this.html,
      is: null,
      errors: []
    };
  },
  mounted: function mounted() {
    this.refresh();
  },
  watch: {
    code: function code() {
      this.refreshAfterDelay();
    }
  },
  methods: {
    refreshAfterDelay: function refreshAfterDelay() {
      var _this = this;

      if (this.delayedRefresh) {
        clearTimeout(this.delayedRefresh);
      }

      this.delayedRefresh = setTimeout(function () {
        _this.delayedRefresh = null;

        _this.refresh();
      }, 1000);
    },
    refresh: function refresh() {
      this.errors = [];
      var name = makeName();
      var parent = this;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(name, {
        template: this.code,
        data: function data() {
          return {
            // make a few common tools available to editors
            console: console,
            alert: function (_alert) {
              function alert() {
                return _alert.apply(this, arguments);
              }

              alert.toString = function () {
                return _alert.toString();
              };

              return alert;
            }(function () {
              return alert.apply(void 0, arguments);
            }),
            window: window,
            document: document
          };
        },
        warnHandler: function warnHandler(err) {
          parent.errors.push(err);
        }
      });
      this.is = name;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Gary.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Gary.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keep_trying_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keep-trying.js */ "./src/keep-trying.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      width: 400,
      height: 300,
      ratio: 300 / 400,
      garyStart: 32 * 6 + 16,
      gary: {
        animation: 'stand',
        x: 200,
        y: 285,
        flip: 'horizontal',
        moving: null,
        target: null,
        scale: 1
      },
      points: [[215, 220], [130, 275], [310, 275], [250, 220]],
      showLabels: true,
      showPoints: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.resizeHandler = Object(_keep_trying_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (tryAgain) {
      var offsetWidth = _this.$refs.canvas.$el.parentNode.offsetWidth;

      if (offsetWidth == 0) {
        tryAgain();
      } else {
        _this.width = offsetWidth;
        _this.height = _this.width * _this.ratio;
      }
    });
    window.addEventListener('resize', this.resizeHandler);
    this.resizeHandler();
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  computed: {
    baseScale: function baseScale() {
      // some magic numbers
      return Math.abs(this.gary.y - 207.10) / 67.9;
    },
    speed: function speed() {
      return 5 * this.resultScale;
    },
    resultScale: {
      get: function get() {
        if (isNaN(this.gary.scale)) {
          return this.baseScale;
        } else {
          return this.baseScale * this.gary.scale;
        }
      },
      set: function set(value) {
        this.gary.scale = value / this.baseScale;
      }
    },
    runningLocally: function runningLocally() {
      return /^file:\/\//.test(location.href);
    }
  },
  methods: {
    toggleRun: function toggleRun() {
      if (!this.gary.moving) {
        this.startMoving();
      } else {
        this.stopMoving();
      }
    },
    startMoving: function startMoving() {
      var _this2 = this;

      var gary = this.gary;

      if (!gary.target) {
        gary.target = this.points[0];
      }

      var garyGo = function garyGo() {
        var diffX = gary.target[0] - gary.x;
        var diffY = gary.target[1] - gary.y;
        var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));

        if (distance < _this2.speed) {
          _this2.chooseNextTarget();

          return;
        }

        var moveX, moveY;

        if (diffX === 0) {
          moveX = 0;
          moveY = diffY > 0 ? _this2.speed : -_this2.speed;
        } else {
          var percent = _this2.speed / distance;
          moveX = diffX * percent;
          moveY = diffY * percent;
        }

        gary.x += moveX;
        gary.y += moveY;

        if (Math.abs(moveX) < Math.abs(moveY) * 2) {
          var animation = moveY > 0 ? 'runDown' : 'runUp';

          if (gary.animation != animation) {
            gary.animation = animation;
            gary.flip = '';
          }
        } else {
          var _animation = 'runRight';
          var flip = moveX > 0 ? '' : 'horizontal';

          if (gary.animation != _animation || gary.flip != flip) {
            gary.animation = _animation;
            gary.flip = flip;
          }
        }
      };

      gary.moving = setInterval(garyGo, 100);
      garyGo();
    },
    stopMoving: function stopMoving() {
      var gary = this.gary;
      gary.animation = 'stand';
      clearInterval(gary.moving);
      gary.moving = null;
    },
    chooseNextTarget: function chooseNextTarget() {
      var i = this.points.indexOf(this.gary.target);
      i = (i + 1) % this.points.length;
      this.gary.target = this.points[i];
    }
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-easeljs/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-easeljs/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (t, e) {
  for (var i in e) t[i] = e[i];
}(exports, function (t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var r = i[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
  }

  var i = {};
  return e.m = t, e.c = i, e.i = function (t) {
    return t;
  }, e.d = function (t, e, i) {
    Object.defineProperty(t, e, {
      configurable: !1,
      enumerable: !0,
      get: i
    });
  }, e.n = function (t) {
    var i = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return e.d(i, "a", i), i;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 38);
}([function (t, e, i) {
  "use strict";

  var n = this.createjs = this.createjs || {};
  e.a = n,
  /*!
  * EaselJS
  * Visit http://createjs.com/ for documentation, updates and examples.
  *
  * Copyright (c) 2010 gskinner.com, inc.
  *
  * Permission is hereby granted, free of charge, to any person
  * obtaining a copy of this software and associated documentation
  * files (the "Software"), to deal in the Software without
  * restriction, including without limitation the rights to use,
  * copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the
  * Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  * OTHER DEALINGS IN THE SOFTWARE.
  */
  this.createjs = this.createjs || {}, n.extend = function (t, e) {
    function i() {
      this.constructor = t;
    }

    return i.prototype = e.prototype, t.prototype = new i();
  }, this.createjs = this.createjs || {}, n.promote = function (t, e) {
    var i = t.prototype,
        n = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;

    if (n) {
      i[(e += "_") + "constructor"] = n.constructor;

      for (var r in n) i.hasOwnProperty(r) && "function" == typeof n[r] && (i[e + r] = n[r]);
    }

    return t;
  }, this.createjs = this.createjs || {}, n.indexOf = function (t, e) {
    for (var i = 0, n = t.length; i < n; i++) if (e === t[i]) return i;

    return -1;
  }, this.createjs = this.createjs || {}, function () {
    function t() {
      throw "UID cannot be instantiated";
    }

    t._nextID = 0, t.get = function () {
      return t._nextID++;
    }, n.UID = t;
  }(), this.createjs = this.createjs || {}, n.deprecate = function (t, e) {
    return function () {
      var i = "Deprecated property or method '" + e + "'. See docs for info.";
      return console && (console.warn ? console.warn(i) : console.log(i)), t && t.apply(this, arguments);
    };
  }, this.createjs = this.createjs || {}, function () {
    function t(t, e, i) {
      this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = new Date().getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
    }

    var e = t.prototype;
    e.preventDefault = function () {
      this.defaultPrevented = this.cancelable && !0;
    }, e.stopPropagation = function () {
      this.propagationStopped = !0;
    }, e.stopImmediatePropagation = function () {
      this.immediatePropagationStopped = this.propagationStopped = !0;
    }, e.remove = function () {
      this.removed = !0;
    }, e.clone = function () {
      return new t(this.type, this.bubbles, this.cancelable);
    }, e.set = function (t) {
      var e = this;

      for (var i in t) e[i] = t[i];

      return this;
    }, e.toString = function () {
      return "[Event (type=" + this.type + ")]";
    }, n.Event = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      this._listeners = null, this._captureListeners = null;
    }

    var e = t.prototype;
    t.initialize = function (t) {
      t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger;
    }, e.addEventListener = function (t, e, i) {
      var n;
      n = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
      var r = n[t];
      return r && this.removeEventListener(t, e, i), r = n[t], r ? r.push(e) : n[t] = [e], e;
    }, e.on = function (t, e, i, n, r, s) {
      return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function (t) {
        e.call(i, t, r), n && t.remove();
      }, s);
    }, e.removeEventListener = function (t, e, i) {
      var n = i ? this._captureListeners : this._listeners;

      if (n) {
        var r = n[t];
        if (r) for (var s = 0, a = r.length; s < a; s++) if (r[s] == e) {
          1 == a ? delete n[t] : r.splice(s, 1);
          break;
        }
      }
    }, e.off = e.removeEventListener, e.removeAllEventListeners = function (t) {
      t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null;
    }, e.dispatchEvent = function (t, e, i) {
      if ("string" == typeof t) {
        var r = this._listeners;
        if (!(e || r && r[t])) return !0;
        t = new n.Event(t, e, i);
      } else t.target && t.clone && (t = t.clone());

      try {
        t.target = this;
      } catch (s) {}

      if (t.bubbles && this.parent) {
        for (var a = this, o = [a]; a.parent;) o.push(a = a.parent);

        var h,
            c = o.length;

        for (h = c - 1; h >= 0 && !t.propagationStopped; h--) o[h]._dispatchEvent(t, 1 + (0 == h));

        for (h = 1; h < c && !t.propagationStopped; h++) o[h]._dispatchEvent(t, 3);
      } else this._dispatchEvent(t, 2);

      return !t.defaultPrevented;
    }, e.hasEventListener = function (t) {
      var e = this._listeners,
          i = this._captureListeners;
      return !!(e && e[t] || i && i[t]);
    }, e.willTrigger = function (t) {
      for (var e = this; e;) {
        if (e.hasEventListener(t)) return !0;
        e = e.parent;
      }

      return !1;
    }, e.toString = function () {
      return "[EventDispatcher]";
    }, e._dispatchEvent = function (t, e) {
      var i,
          n,
          r = this,
          s = e <= 2 ? this._captureListeners : this._listeners;

      if (t && s && (n = s[t.type]) && (i = n.length)) {
        try {
          t.currentTarget = this;
        } catch (a) {}

        try {
          t.eventPhase = 0 | e;
        } catch (a) {}

        t.removed = !1, n = n.slice();

        for (var o = 0; o < i && !t.immediatePropagationStopped; o++) {
          var h = n[o];
          h.handleEvent ? h.handleEvent(t) : h(t), t.removed && (r.off(t.type, h, 1 == e), t.removed = !1);
        }
      }

      2 === e && this._dispatchEvent(t, 2.1);
    }, n.EventDispatcher = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      throw "Ticker cannot be instantiated.";
    }

    t.RAF_SYNCHED = "synched", t.RAF = "raf", t.TIMEOUT = "timeout", t.timingMode = null, t.maxDelta = 0, t.paused = !1, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, n.EventDispatcher.initialize(t), t._addEventListener = t.addEventListener, t.addEventListener = function () {
      return !t._inited && t.init(), t._addEventListener.apply(t, arguments);
    }, t._inited = !1, t._startTime = 0, t._pausedTime = 0, t._ticks = 0, t._pausedTicks = 0, t._interval = 50, t._lastTime = 0, t._times = null, t._tickTimes = null, t._timerId = null, t._raf = !0, t._setInterval = function (e) {
      t._interval = e, t._inited && t._setupTick();
    }, t.setInterval = n.deprecate(t._setInterval, "Ticker.setInterval"), t._getInterval = function () {
      return t._interval;
    }, t.getInterval = n.deprecate(t._getInterval, "Ticker.getInterval"), t._setFPS = function (e) {
      t._setInterval(1e3 / e);
    }, t.setFPS = n.deprecate(t._setFPS, "Ticker.setFPS"), t._getFPS = function () {
      return 1e3 / t._interval;
    }, t.getFPS = n.deprecate(t._getFPS, "Ticker.getFPS");

    try {
      Object.defineProperties(t, {
        interval: {
          get: t._getInterval,
          set: t._setInterval
        },
        framerate: {
          get: t._getFPS,
          set: t._setFPS
        }
      });
    } catch (e) {
      console.log(e);
    }

    t.init = function () {
      t._inited || (t._inited = !0, t._times = [], t._tickTimes = [], t._startTime = t._getTime(), t._times.push(t._lastTime = 0), t.interval = t._interval);
    }, t.reset = function () {
      if (t._raf) {
        var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
        e && e(t._timerId);
      } else clearTimeout(t._timerId);

      t.removeAllEventListeners("tick"), t._timerId = t._times = t._tickTimes = null, t._startTime = t._lastTime = t._ticks = t._pausedTime = 0, t._inited = !1;
    }, t.getMeasuredTickTime = function (e) {
      var i = 0,
          n = t._tickTimes;
      if (!n || n.length < 1) return -1;
      e = Math.min(n.length, e || 0 | t._getFPS());

      for (var r = 0; r < e; r++) i += n[r];

      return i / e;
    }, t.getMeasuredFPS = function (e) {
      var i = t._times;
      return !i || i.length < 2 ? -1 : (e = Math.min(i.length - 1, e || 0 | t._getFPS()), 1e3 / ((i[0] - i[e]) / e));
    }, t.getTime = function (e) {
      return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1;
    }, t.getEventTime = function (e) {
      return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1;
    }, t.getTicks = function (e) {
      return t._ticks - (e ? t._pausedTicks : 0);
    }, t._handleSynch = function () {
      t._timerId = null, t._setupTick(), t._getTime() - t._lastTime >= .97 * (t._interval - 1) && t._tick();
    }, t._handleRAF = function () {
      t._timerId = null, t._setupTick(), t._tick();
    }, t._handleTimeout = function () {
      t._timerId = null, t._setupTick(), t._tick();
    }, t._setupTick = function () {
      if (null == t._timerId) {
        var e = t.timingMode;

        if (e == t.RAF_SYNCHED || e == t.RAF) {
          var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
          if (i) return t._timerId = i(e == t.RAF ? t._handleRAF : t._handleSynch), void (t._raf = !0);
        }

        t._raf = !1, t._timerId = setTimeout(t._handleTimeout, t._interval);
      }
    }, t._tick = function () {
      var e = t.paused,
          i = t._getTime(),
          r = i - t._lastTime;

      if (t._lastTime = i, t._ticks++, e && (t._pausedTicks++, t._pausedTime += r), t.hasEventListener("tick")) {
        var s = new n.Event("tick"),
            a = t.maxDelta;
        s.delta = a && r > a ? a : r, s.paused = e, s.time = i, s.runTime = i - t._pausedTime, t.dispatchEvent(s);
      }

      for (t._tickTimes.unshift(t._getTime() - i); t._tickTimes.length > 100;) t._tickTimes.pop();

      for (t._times.unshift(i); t._times.length > 100;) t._times.pop();
    };
    var i = window,
        r = i.performance.now || i.performance.mozNow || i.performance.msNow || i.performance.oNow || i.performance.webkitNow;
    t._getTime = function () {
      return (r && r.call(i.performance) || new Date().getTime()) - t._startTime;
    }, n.Ticker = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.readyState = t.readyState, this._video = t, this._canvas = null, this._lastTime = -1, this.readyState < 2 && t.addEventListener("canplaythrough", this._videoReady.bind(this));
    }

    var e = t.prototype;
    e.getImage = function () {
      if (!(this.readyState < 2)) {
        var t = this._canvas,
            e = this._video;

        if (t || (t = this._canvas = n.createCanvas ? n.createCanvas() : document.createElement("canvas"), t.width = e.videoWidth, t.height = e.videoHeight), e.readyState >= 2 && e.currentTime !== this._lastTime) {
          var i = t.getContext("2d");
          i.clearRect(0, 0, t.width, t.height), i.drawImage(e, 0, 0, t.width, t.height), this._lastTime = e.currentTime;
        }

        return t;
      }
    }, e._videoReady = function () {
      this.readyState = 2;
    }, n.VideoBuffer = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i, n, r, s, a, o, h, c, u) {
      this.Event_constructor(t, e, i), this.stageX = n, this.stageY = r, this.rawX = null == h ? n : h, this.rawY = null == c ? r : c, this.nativeEvent = s, this.pointerID = a, this.primary = !!o, this.relatedTarget = u;
    }

    var e = n.extend(t, n.Event);
    e._get_localX = function () {
      return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
    }, e._get_localY = function () {
      return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
    }, e._get_isTouch = function () {
      return this.pointerID !== -1;
    };

    try {
      Object.defineProperties(e, {
        localX: {
          get: e._get_localX
        },
        localY: {
          get: e._get_localY
        },
        isTouch: {
          get: e._get_isTouch
        }
      });
    } catch (i) {}

    e.clone = function () {
      return new t(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
    }, e.toString = function () {
      return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]";
    }, n.MouseEvent = n.promote(t, "Event");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i, n, r, s) {
      this.setValues(t, e, i, n, r, s);
    }

    var e = t.prototype;
    t.DEG_TO_RAD = Math.PI / 180, t.identity = null, e.setValues = function (t, e, i, n, r, s) {
      return this.a = null == t ? 1 : t, this.b = e || 0, this.c = i || 0, this.d = null == n ? 1 : n, this.tx = r || 0, this.ty = s || 0, this;
    }, e.append = function (t, e, i, n, r, s) {
      var a = this.a,
          o = this.b,
          h = this.c,
          c = this.d;
      return 1 == t && 0 == e && 0 == i && 1 == n || (this.a = a * t + h * e, this.b = o * t + c * e, this.c = a * i + h * n, this.d = o * i + c * n), this.tx = a * r + h * s + this.tx, this.ty = o * r + c * s + this.ty, this;
    }, e.prepend = function (t, e, i, n, r, s) {
      var a = this.a,
          o = this.c,
          h = this.tx;
      return this.a = t * a + i * this.b, this.b = e * a + n * this.b, this.c = t * o + i * this.d, this.d = e * o + n * this.d, this.tx = t * h + i * this.ty + r, this.ty = e * h + n * this.ty + s, this;
    }, e.appendMatrix = function (t) {
      return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, e.prependMatrix = function (t) {
      return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, e.appendTransform = function (e, i, n, r, s, a, o, h, c) {
      if (s % 360) var u = s * t.DEG_TO_RAD,
          l = Math.cos(u),
          d = Math.sin(u);else l = 1, d = 0;
      return a || o ? (a *= t.DEG_TO_RAD, o *= t.DEG_TO_RAD, this.append(Math.cos(o), Math.sin(o), -Math.sin(a), Math.cos(a), e, i), this.append(l * n, d * n, -d * r, l * r, 0, 0)) : this.append(l * n, d * n, -d * r, l * r, e, i), (h || c) && (this.tx -= h * this.a + c * this.c, this.ty -= h * this.b + c * this.d), this;
    }, e.prependTransform = function (e, i, n, r, s, a, o, h, c) {
      if (s % 360) var u = s * t.DEG_TO_RAD,
          l = Math.cos(u),
          d = Math.sin(u);else l = 1, d = 0;
      return (h || c) && (this.tx -= h, this.ty -= c), a || o ? (a *= t.DEG_TO_RAD, o *= t.DEG_TO_RAD, this.prepend(l * n, d * n, -d * r, l * r, 0, 0), this.prepend(Math.cos(o), Math.sin(o), -Math.sin(a), Math.cos(a), e, i)) : this.prepend(l * n, d * n, -d * r, l * r, e, i), this;
    }, e.rotate = function (e) {
      e *= t.DEG_TO_RAD;
      var i = Math.cos(e),
          n = Math.sin(e),
          r = this.a,
          s = this.b;
      return this.a = r * i + this.c * n, this.b = s * i + this.d * n, this.c = -r * n + this.c * i, this.d = -s * n + this.d * i, this;
    }, e.skew = function (e, i) {
      return e *= t.DEG_TO_RAD, i *= t.DEG_TO_RAD, this.append(Math.cos(i), Math.sin(i), -Math.sin(e), Math.cos(e), 0, 0), this;
    }, e.scale = function (t, e) {
      return this.a *= t, this.b *= t, this.c *= e, this.d *= e, this;
    }, e.translate = function (t, e) {
      return this.tx += this.a * t + this.c * e, this.ty += this.b * t + this.d * e, this;
    }, e.identity = function () {
      return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this;
    }, e.invert = function () {
      var t = this.a,
          e = this.b,
          i = this.c,
          n = this.d,
          r = this.tx,
          s = t * n - e * i;
      return this.a = n / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this.ty - n * r) / s, this.ty = -(t * this.ty - e * r) / s, this;
    }, e.isIdentity = function () {
      return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d;
    }, e.equals = function (t) {
      return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d;
    }, e.transformPoint = function (t, e, i) {
      return i = i || {}, i.x = t * this.a + e * this.c + this.tx, i.y = t * this.b + e * this.d + this.ty, i;
    }, e.decompose = function (e) {
      null == e && (e = {}), e.x = this.tx, e.y = this.ty, e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
      var i = Math.atan2(-this.c, this.d),
          n = Math.atan2(this.b, this.a),
          r = Math.abs(1 - i / n);
      return r < 1e-5 ? (e.rotation = n / t.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (e.rotation += e.rotation <= 0 ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = i / t.DEG_TO_RAD, e.skewY = n / t.DEG_TO_RAD), e;
    }, e.copy = function (t) {
      return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, e.clone = function () {
      return new t(this.a, this.b, this.c, this.d, this.tx, this.ty);
    }, e.toString = function () {
      return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
    }, t.identity = new t(), n.Matrix2D = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i, n, r) {
      this.setValues(t, e, i, n, r);
    }

    var e = t.prototype;
    e.setValues = function (t, e, i, r, s) {
      return this.visible = null == t || !!t, this.alpha = null == e ? 1 : e, this.shadow = i, this.compositeOperation = r, this.matrix = s || this.matrix && this.matrix.identity() || new n.Matrix2D(), this;
    }, e.append = function (t, e, i, n, r) {
      return this.alpha *= e, this.shadow = i || this.shadow, this.compositeOperation = n || this.compositeOperation, this.visible = this.visible && t, r && this.matrix.appendMatrix(r), this;
    }, e.prepend = function (t, e, i, n, r) {
      return this.alpha *= e, this.shadow = this.shadow || i, this.compositeOperation = this.compositeOperation || n, this.visible = this.visible && t, r && this.matrix.prependMatrix(r), this;
    }, e.identity = function () {
      return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this;
    }, e.clone = function () {
      return new t(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone());
    }, n.DisplayProps = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e) {
      this.setValues(t, e);
    }

    var e = t.prototype;
    e.setValues = function (t, e) {
      return this.x = t || 0, this.y = e || 0, this;
    }, e.copy = function (t) {
      return this.x = t.x, this.y = t.y, this;
    }, e.clone = function () {
      return new t(this.x, this.y);
    }, e.toString = function () {
      return "[Point (x=" + this.x + " y=" + this.y + ")]";
    }, n.Point = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i, n) {
      this.setValues(t, e, i, n);
    }

    var e = t.prototype;
    e.setValues = function (t, e, i, n) {
      return this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0, this;
    }, e.extend = function (t, e, i, n) {
      return i = i || 0, n = n || 0, t + i > this.x + this.width && (this.width = t + i - this.x), e + n > this.y + this.height && (this.height = e + n - this.y), t < this.x && (this.width += this.x - t, this.x = t), e < this.y && (this.height += this.y - e, this.y = e), this;
    }, e.pad = function (t, e, i, n) {
      return this.x -= e, this.y -= t, this.width += e + n, this.height += t + i, this;
    }, e.copy = function (t) {
      return this.setValues(t.x, t.y, t.width, t.height);
    }, e.contains = function (t, e, i, n) {
      return i = i || 0, n = n || 0, t >= this.x && t + i <= this.x + this.width && e >= this.y && e + n <= this.y + this.height;
    }, e.union = function (t) {
      return this.clone().extend(t.x, t.y, t.width, t.height);
    }, e.intersection = function (e) {
      var i = e.x,
          n = e.y,
          r = i + e.width,
          s = n + e.height;
      return this.x > i && (i = this.x), this.y > n && (n = this.y), this.x + this.width < r && (r = this.x + this.width), this.y + this.height < s && (s = this.y + this.height), r <= i || s <= n ? null : new t(i, n, r - i, s - n);
    }, e.intersects = function (t) {
      return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this.height && this.y <= t.y + t.height;
    }, e.isEmpty = function () {
      return this.width <= 0 || this.height <= 0;
    }, e.clone = function () {
      return new t(this.x, this.y, this.width, this.height);
    }, e.toString = function () {
      return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]";
    }, n.Rectangle = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i, n, r, s, a) {
      t.addEventListener && (this.target = t, this.overLabel = null == i ? "over" : i, this.outLabel = null == e ? "out" : e, this.downLabel = null == n ? "down" : n, this.play = r, this._isPressed = !1, this._isOver = !1, this._enabled = !1, t.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), s && (a && (s.actionsEnabled = !1, s.gotoAndStop && s.gotoAndStop(a)), t.hitArea = s));
    }

    var e = t.prototype;
    e._setEnabled = function (t) {
      if (t != this._enabled) {
        var e = this.target;
        this._enabled = t, t ? (e.cursor = "pointer", e.addEventListener("rollover", this), e.addEventListener("rollout", this), e.addEventListener("mousedown", this), e.addEventListener("pressup", this), e._reset && (e.__reset = e._reset, e._reset = this._reset)) : (e.cursor = null, e.removeEventListener("rollover", this), e.removeEventListener("rollout", this), e.removeEventListener("mousedown", this), e.removeEventListener("pressup", this), e.__reset && (e._reset = e.__reset, delete e.__reset));
      }
    }, e.setEnabled = n.deprecate(e._setEnabled, "ButtonHelper.setEnabled"), e._getEnabled = function () {
      return this._enabled;
    }, e.getEnabled = n.deprecate(e._getEnabled, "ButtonHelper.getEnabled");

    try {
      Object.defineProperties(e, {
        enabled: {
          get: e._getEnabled,
          set: e._setEnabled
        }
      });
    } catch (i) {}

    e.toString = function () {
      return "[ButtonHelper]";
    }, e.handleEvent = function (t) {
      var e,
          i = this.target,
          n = t.type;
      "mousedown" == n ? (this._isPressed = !0, e = this.downLabel) : "pressup" == n ? (this._isPressed = !1, e = this._isOver ? this.overLabel : this.outLabel) : "rollover" == n ? (this._isOver = !0, e = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, e = this._isPressed ? this.overLabel : this.outLabel), this.play ? i.gotoAndPlay && i.gotoAndPlay(e) : i.gotoAndStop && i.gotoAndStop(e);
    }, e._reset = function () {
      var t = this.paused;
      this.__reset(), this.paused = t;
    }, n.ButtonHelper = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i, n) {
      this.color = t || "black", this.offsetX = e || 0, this.offsetY = i || 0, this.blur = n || 0;
    }

    var e = t.prototype;
    t.identity = new t("transparent", 0, 0, 0), e.toString = function () {
      return "[Shadow]";
    }, e.clone = function () {
      return new t(this.color, this.offsetX, this.offsetY, this.blur);
    }, n.Shadow = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(t);
    }

    var e = n.extend(t, n.EventDispatcher);
    e._getAnimations = function () {
      return this._animations.slice();
    }, e.getAnimations = n.deprecate(e._getAnimations, "SpriteSheet.getAnimations");

    try {
      Object.defineProperties(e, {
        animations: {
          get: e._getAnimations
        }
      });
    } catch (i) {}

    e.getNumFrames = function (t) {
      if (null == t) return this._frames ? this._frames.length : this._numFrames || 0;
      var e = this._data[t];
      return null == e ? 0 : e.frames.length;
    }, e.getAnimation = function (t) {
      return this._data[t];
    }, e.getFrame = function (t) {
      var e;
      return this._frames && (e = this._frames[t]) ? e : null;
    }, e.getFrameBounds = function (t, e) {
      var i = this.getFrame(t);
      return i ? (e || new n.Rectangle()).setValues(-i.regX, -i.regY, i.rect.width, i.rect.height) : null;
    }, e.toString = function () {
      return "[SpriteSheet]";
    }, e.clone = function () {
      throw "SpriteSheet cannot be cloned.";
    }, e._parseData = function (t) {
      var e,
          i,
          r,
          s,
          a = this;

      if (null != t) {
        if (this.framerate = t.framerate || 0, t.images && (i = t.images.length) > 0) for (s = this._images = [], e = 0; e < i; e++) {
          var o = t.images[e];

          if ("string" == typeof o) {
            var h = o;
            o = document.createElement("img"), o.src = h;
          }

          s.push(o), o.getContext || o.naturalWidth || (a._loadCount++, a.complete = !1, function (t, e) {
            o.onload = function () {
              t._handleImageLoad(e);
            };
          }(a, h), function (t, e) {
            o.onerror = function () {
              t._handleImageError(e);
            };
          }(a, h));
        }
        if (null == t.frames) ;else if (Array.isArray(t.frames)) for (this._frames = [], s = t.frames, e = 0, i = s.length; e < i; e++) {
          var c = s[e];

          a._frames.push({
            image: a._images[c[4] ? c[4] : 0],
            rect: new n.Rectangle(c[0], c[1], c[2], c[3]),
            regX: c[5] || 0,
            regY: c[6] || 0
          });
        } else r = t.frames, this._frameWidth = r.width, this._frameHeight = r.height, this._regX = r.regX || 0, this._regY = r.regY || 0, this._spacing = r.spacing || 0, this._margin = r.margin || 0, this._numFrames = r.count, 0 == this._loadCount && this._calculateFrames();

        if (this._animations = [], null != (r = t.animations)) {
          this._data = {};
          var u;

          for (u in r) {
            var l = {
              name: u
            },
                d = r[u];
            if ("number" == typeof d) s = l.frames = [d];else if (Array.isArray(d)) {
              if (1 == d.length) l.frames = [d[0]];else for (l.speed = d[3], l.next = d[2], s = l.frames = [], e = d[0]; e <= d[1]; e++) s.push(e);
            } else {
              l.speed = d.speed, l.next = d.next;
              var f = d.frames;
              s = l.frames = "number" == typeof f ? [f] : f.slice(0);
            }
            l.next !== !0 && void 0 !== l.next || (l.next = u), (l.next === !1 || s.length < 2 && l.next == u) && (l.next = null), l.speed || (l.speed = 1), a._animations.push(u), a._data[u] = l;
          }
        }
      }
    }, e._handleImageLoad = function (t) {
      0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"));
    }, e._handleImageError = function (t) {
      var e = new n.Event("error");
      e.src = t, this.dispatchEvent(e), 0 == --this._loadCount && this.dispatchEvent("complete");
    }, e._calculateFrames = function () {
      var t = this;

      if (!this._frames && 0 != this._frameWidth) {
        this._frames = [];
        var e = this._numFrames || 1e5,
            i = 0,
            r = this._frameWidth,
            s = this._frameHeight,
            a = this._spacing,
            o = this._margin;

        t: for (var h = 0, c = this._images; h < c.length; h++) for (var u = c[h], l = u.width || u.naturalWidth, d = u.height || u.naturalHeight, f = o; f <= d - o - s;) {
          for (var p = o; p <= l - o - r;) {
            if (i >= e) break t;
            i++, t._frames.push({
              image: u,
              rect: new n.Rectangle(p, f, r, s),
              regX: t._regX,
              regY: t._regY
            }), p += r + a;
          }

          f += s + a;
        }

        this._numFrames = i;
      }
    }, n.SpriteSheet = n.promote(t, "EventDispatcher");
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear();
    }

    var e = t.prototype,
        i = t;
    t.getRGB = function (t, e, i, n) {
      return null != t && null == i && (n = e, i = 255 & t, e = t >> 8 & 255, t = t >> 16 & 255), null == n ? "rgb(" + t + "," + e + "," + i + ")" : "rgba(" + t + "," + e + "," + i + "," + n + ")";
    }, t.getHSL = function (t, e, i, n) {
      return null == n ? "hsl(" + t % 360 + "," + e + "%," + i + "%)" : "hsla(" + t % 360 + "," + e + "%," + i + "%," + n + ")";
    }, t.BASE_64 = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
      a: 26,
      b: 27,
      c: 28,
      d: 29,
      e: 30,
      f: 31,
      g: 32,
      h: 33,
      i: 34,
      j: 35,
      k: 36,
      l: 37,
      m: 38,
      n: 39,
      o: 40,
      p: 41,
      q: 42,
      r: 43,
      s: 44,
      t: 45,
      u: 46,
      v: 47,
      w: 48,
      x: 49,
      y: 50,
      z: 51,
      0: 52,
      1: 53,
      2: 54,
      3: 55,
      4: 56,
      5: 57,
      6: 58,
      7: 59,
      8: 60,
      9: 61,
      "+": 62,
      "/": 63
    }, t.STROKE_CAPS_MAP = ["butt", "round", "square"], t.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
    var r = n.createCanvas ? n.createCanvas() : document.createElement("canvas");
    r.getContext && (t._ctx = r.getContext("2d"), r.width = r.height = 1), e._getInstructions = function () {
      return this._updateInstructions(), this._instructions;
    }, e.getInstructions = n.deprecate(e._getInstructions, "Graphics.getInstructions");

    try {
      Object.defineProperties(e, {
        instructions: {
          get: e._getInstructions
        }
      });
    } catch (s) {}

    e.isEmpty = function () {
      return !(this._instructions.length || this._activeInstructions.length);
    }, e.draw = function (t, e) {
      this._updateInstructions();

      for (var i = this._instructions, n = this._storeIndex, r = i.length; n < r; n++) i[n].exec(t, e);
    }, e.drawAsPath = function (t) {
      this._updateInstructions();

      for (var e, i = this._instructions, n = this._storeIndex, r = i.length; n < r; n++) (e = i[n]).path !== !1 && e.exec(t);
    }, e.moveTo = function (t, e) {
      return this.append(new i.MoveTo(t, e), !0);
    }, e.lineTo = function (t, e) {
      return this.append(new i.LineTo(t, e));
    }, e.arcTo = function (t, e, n, r, s) {
      return this.append(new i.ArcTo(t, e, n, r, s));
    }, e.arc = function (t, e, n, r, s, a) {
      return this.append(new i.Arc(t, e, n, r, s, a));
    }, e.quadraticCurveTo = function (t, e, n, r) {
      return this.append(new i.QuadraticCurveTo(t, e, n, r));
    }, e.bezierCurveTo = function (t, e, n, r, s, a) {
      return this.append(new i.BezierCurveTo(t, e, n, r, s, a));
    }, e.rect = function (t, e, n, r) {
      return this.append(new i.Rect(t, e, n, r));
    }, e.closePath = function () {
      return this._activeInstructions.length ? this.append(new i.ClosePath()) : this;
    }, e.clear = function () {
      return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this;
    }, e.beginFill = function (t) {
      return this._setFill(t ? new i.Fill(t) : null);
    }, e.beginLinearGradientFill = function (t, e, n, r, s, a) {
      return this._setFill(new i.Fill().linearGradient(t, e, n, r, s, a));
    }, e.beginRadialGradientFill = function (t, e, n, r, s, a, o, h) {
      return this._setFill(new i.Fill().radialGradient(t, e, n, r, s, a, o, h));
    }, e.beginBitmapFill = function (t, e, n) {
      return this._setFill(new i.Fill(null, n).bitmap(t, e));
    }, e.endFill = function () {
      return this.beginFill();
    }, e.setStrokeStyle = function (t, e, n, r, s) {
      return this._updateInstructions(!0), this._strokeStyle = this.command = new i.StrokeStyle(t, e, n, r, s), this._stroke && (this._stroke.ignoreScale = s), this._strokeIgnoreScale = s, this;
    }, e.setStrokeDash = function (t, e) {
      return this._updateInstructions(!0), this._strokeDash = this.command = new i.StrokeDash(t, e), this;
    }, e.beginStroke = function (t) {
      return this._setStroke(t ? new i.Stroke(t) : null);
    }, e.beginLinearGradientStroke = function (t, e, n, r, s, a) {
      return this._setStroke(new i.Stroke().linearGradient(t, e, n, r, s, a));
    }, e.beginRadialGradientStroke = function (t, e, n, r, s, a, o, h) {
      return this._setStroke(new i.Stroke().radialGradient(t, e, n, r, s, a, o, h));
    }, e.beginBitmapStroke = function (t, e) {
      return this._setStroke(new i.Stroke().bitmap(t, e));
    }, e.endStroke = function () {
      return this.beginStroke();
    }, e.curveTo = e.quadraticCurveTo, e.drawRect = e.rect, e.drawRoundRect = function (t, e, i, n, r) {
      return this.drawRoundRectComplex(t, e, i, n, r, r, r, r);
    }, e.drawRoundRectComplex = function (t, e, n, r, s, a, o, h) {
      return this.append(new i.RoundRect(t, e, n, r, s, a, o, h));
    }, e.drawCircle = function (t, e, n) {
      return this.append(new i.Circle(t, e, n));
    }, e.drawEllipse = function (t, e, n, r) {
      return this.append(new i.Ellipse(t, e, n, r));
    }, e.drawPolyStar = function (t, e, n, r, s, a) {
      return this.append(new i.PolyStar(t, e, n, r, s, a));
    }, e.append = function (t, e) {
      return this._activeInstructions.push(t), this.command = t, e || (this._dirty = !0), this;
    }, e.decodePath = function (e) {
      for (var i = this, n = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], r = [2, 2, 4, 6, 0], s = 0, a = e.length, o = [], h = 0, c = 0, u = t.BASE_64; s < a;) {
        var l = e.charAt(s),
            d = u[l],
            f = d >> 3,
            p = n[f];
        if (!p || 3 & d) throw "bad path data (@" + s + "): " + l;
        var _ = r[f];
        f || (h = c = 0), o.length = 0, s++;

        for (var v = (d >> 2 & 1) + 2, m = 0; m < _; m++) {
          var g = u[e.charAt(s)],
              x = g >> 5 ? -1 : 1;
          g = (31 & g) << 6 | u[e.charAt(s + 1)], 3 == v && (g = g << 6 | u[e.charAt(s + 2)]), g = x * g / 10, m % 2 ? h = g += h : c = g += c, o[m] = g, s += v;
        }

        p.apply(i, o);
      }

      return this;
    }, e.store = function () {
      return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this;
    }, e.unstore = function () {
      return this._storeIndex = 0, this;
    }, e.clone = function () {
      var e = new t();
      return e.command = this.command, e._stroke = this._stroke, e._strokeStyle = this._strokeStyle, e._strokeDash = this._strokeDash, e._strokeIgnoreScale = this._strokeIgnoreScale, e._fill = this._fill, e._instructions = this._instructions.slice(), e._commitIndex = this._commitIndex, e._activeInstructions = this._activeInstructions.slice(), e._dirty = this._dirty, e._storeIndex = this._storeIndex, e;
    }, e.toString = function () {
      return "[Graphics]";
    }, e.mt = e.moveTo, e.lt = e.lineTo, e.at = e.arcTo, e.bt = e.bezierCurveTo, e.qt = e.quadraticCurveTo, e.a = e.arc, e.r = e.rect, e.cp = e.closePath, e.c = e.clear, e.f = e.beginFill, e.lf = e.beginLinearGradientFill, e.rf = e.beginRadialGradientFill, e.bf = e.beginBitmapFill, e.ef = e.endFill, e.ss = e.setStrokeStyle, e.sd = e.setStrokeDash, e.s = e.beginStroke, e.ls = e.beginLinearGradientStroke, e.rs = e.beginRadialGradientStroke, e.bs = e.beginBitmapStroke, e.es = e.endStroke, e.dr = e.drawRect, e.rr = e.drawRoundRect, e.rc = e.drawRoundRectComplex, e.dc = e.drawCircle, e.de = e.drawEllipse, e.dp = e.drawPolyStar, e.p = e.decodePath, e._updateInstructions = function (e) {
      var i = this._instructions,
          n = this._activeInstructions,
          r = this._commitIndex;

      if (this._dirty && n.length) {
        i.length = r, i.push(t.beginCmd);
        var s = n.length,
            a = i.length;
        i.length = a + s;

        for (var o = 0; o < s; o++) i[o + a] = n[o];

        this._fill && i.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && i.push(this._strokeDash), this._strokeStyle !== this._oldStrokeStyle && i.push(this._strokeStyle), e && (this._oldStrokeStyle = this._strokeStyle, this._oldStrokeDash = this._strokeDash), i.push(this._stroke)), this._dirty = !1;
      }

      e && (n.length = 0, this._commitIndex = i.length);
    }, e._setFill = function (t) {
      return this._updateInstructions(!0), this.command = this._fill = t, this;
    }, e._setStroke = function (t) {
      return this._updateInstructions(!0), (this.command = this._stroke = t) && (t.ignoreScale = this._strokeIgnoreScale), this;
    }, (i.LineTo = function (t, e) {
      this.x = t, this.y = e;
    }).prototype.exec = function (t) {
      t.lineTo(this.x, this.y);
    }, (i.MoveTo = function (t, e) {
      this.x = t, this.y = e;
    }).prototype.exec = function (t) {
      t.moveTo(this.x, this.y);
    }, (i.ArcTo = function (t, e, i, n, r) {
      this.x1 = t, this.y1 = e, this.x2 = i, this.y2 = n, this.radius = r;
    }).prototype.exec = function (t) {
      t.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
    }, (i.Arc = function (t, e, i, n, r, s) {
      this.x = t, this.y = e, this.radius = i, this.startAngle = n, this.endAngle = r, this.anticlockwise = !!s;
    }).prototype.exec = function (t) {
      t.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
    }, (i.QuadraticCurveTo = function (t, e, i, n) {
      this.cpx = t, this.cpy = e, this.x = i, this.y = n;
    }).prototype.exec = function (t) {
      t.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
    }, (i.BezierCurveTo = function (t, e, i, n, r, s) {
      this.cp1x = t, this.cp1y = e, this.cp2x = i, this.cp2y = n, this.x = r, this.y = s;
    }).prototype.exec = function (t) {
      t.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
    }, (i.Rect = function (t, e, i, n) {
      this.x = t, this.y = e, this.w = i, this.h = n;
    }).prototype.exec = function (t) {
      t.rect(this.x, this.y, this.w, this.h);
    }, (i.ClosePath = function () {}).prototype.exec = function (t) {
      t.closePath();
    }, (i.BeginPath = function () {}).prototype.exec = function (t) {
      t.beginPath();
    }, e = (i.Fill = function (t, e) {
      this.style = t, this.matrix = e;
    }).prototype, e.exec = function (t) {
      if (this.style) {
        t.fillStyle = this.style;
        var e = this.matrix;
        e && (t.save(), t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), t.fill(), e && t.restore();
      }
    }, e.linearGradient = function (e, i, n, r, s, a) {
      for (var o = this.style = t._ctx.createLinearGradient(n, r, s, a), h = 0, c = e.length; h < c; h++) o.addColorStop(i[h], e[h]);

      return o.props = {
        colors: e,
        ratios: i,
        x0: n,
        y0: r,
        x1: s,
        y1: a,
        type: "linear"
      }, this;
    }, e.radialGradient = function (e, i, n, r, s, a, o, h) {
      for (var c = this.style = t._ctx.createRadialGradient(n, r, s, a, o, h), u = 0, l = e.length; u < l; u++) c.addColorStop(i[u], e[u]);

      return c.props = {
        colors: e,
        ratios: i,
        x0: n,
        y0: r,
        r0: s,
        x1: a,
        y1: o,
        r1: h,
        type: "radial"
      }, this;
    }, e.bitmap = function (e, i) {
      if (e.naturalWidth || e.getContext || e.readyState >= 2) {
        var n = this.style = t._ctx.createPattern(e, i || "");

        n.props = {
          image: e,
          repetition: i,
          type: "bitmap"
        };
      }

      return this;
    }, e.path = !1, e = (i.Stroke = function (t, e) {
      this.style = t, this.ignoreScale = e;
    }).prototype, e.exec = function (t) {
      this.style && (t.strokeStyle = this.style, this.ignoreScale && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0)), t.stroke(), this.ignoreScale && t.restore());
    }, e.linearGradient = i.Fill.prototype.linearGradient, e.radialGradient = i.Fill.prototype.radialGradient, e.bitmap = i.Fill.prototype.bitmap, e.path = !1, e = (i.StrokeStyle = function (t, e, i, n, r) {
      this.width = t, this.caps = e, this.joints = i, this.miterLimit = n, this.ignoreScale = r;
    }).prototype, e.exec = function (e) {
      e.lineWidth = null == this.width ? "1" : this.width, e.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : t.STROKE_CAPS_MAP[this.caps], e.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : t.STROKE_JOINTS_MAP[this.joints], e.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, e.ignoreScale = null != this.ignoreScale && this.ignoreScale;
    }, e.path = !1, (i.StrokeDash = function (t, e) {
      this.segments = t, this.offset = e || 0;
    }).prototype.exec = function (t) {
      t.setLineDash && (t.setLineDash(this.segments || i.StrokeDash.EMPTY_SEGMENTS), t.lineDashOffset = this.offset || 0);
    }, i.StrokeDash.EMPTY_SEGMENTS = [], (i.RoundRect = function (t, e, i, n, r, s, a, o) {
      this.x = t, this.y = e, this.w = i, this.h = n, this.radiusTL = r, this.radiusTR = s, this.radiusBR = a, this.radiusBL = o;
    }).prototype.exec = function (t) {
      var e = (h < c ? h : c) / 2,
          i = 0,
          n = 0,
          r = 0,
          s = 0,
          a = this.x,
          o = this.y,
          h = this.w,
          c = this.h,
          u = this.radiusTL,
          l = this.radiusTR,
          d = this.radiusBR,
          f = this.radiusBL;
      u < 0 && (u *= i = -1), u > e && (u = e), l < 0 && (l *= n = -1), l > e && (l = e), d < 0 && (d *= r = -1), d > e && (d = e), f < 0 && (f *= s = -1), f > e && (f = e), t.moveTo(a + h - l, o), t.arcTo(a + h + l * n, o - l * n, a + h, o + l, l), t.lineTo(a + h, o + c - d), t.arcTo(a + h + d * r, o + c + d * r, a + h - d, o + c, d), t.lineTo(a + f, o + c), t.arcTo(a - f * s, o + c + f * s, a, o + c - f, f), t.lineTo(a, o + u), t.arcTo(a - u * i, o - u * i, a + u, o, u), t.closePath();
    }, (i.Circle = function (t, e, i) {
      this.x = t, this.y = e, this.radius = i;
    }).prototype.exec = function (t) {
      t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    }, (i.Ellipse = function (t, e, i, n) {
      this.x = t, this.y = e, this.w = i, this.h = n;
    }).prototype.exec = function (t) {
      var e = this.x,
          i = this.y,
          n = this.w,
          r = this.h,
          s = .5522848,
          a = n / 2 * s,
          o = r / 2 * s,
          h = e + n,
          c = i + r,
          u = e + n / 2,
          l = i + r / 2;
      t.moveTo(e, l), t.bezierCurveTo(e, l - o, u - a, i, u, i), t.bezierCurveTo(u + a, i, h, l - o, h, l), t.bezierCurveTo(h, l + o, u + a, c, u, c), t.bezierCurveTo(u - a, c, e, l + o, e, l);
    }, (i.PolyStar = function (t, e, i, n, r, s) {
      this.x = t, this.y = e, this.radius = i, this.sides = n, this.pointSize = r, this.angle = s;
    }).prototype.exec = function (t) {
      var e = this.x,
          i = this.y,
          n = this.radius,
          r = (this.angle || 0) / 180 * Math.PI,
          s = this.sides,
          a = 1 - (this.pointSize || 0),
          o = Math.PI / s;
      t.moveTo(e + Math.cos(r) * n, i + Math.sin(r) * n);

      for (var h = 0; h < s; h++) r += o, 1 != a && t.lineTo(e + Math.cos(r) * n * a, i + Math.sin(r) * n * a), r += o, t.lineTo(e + Math.cos(r) * n, i + Math.sin(r) * n);

      t.closePath();
    }, t.beginCmd = new i.BeginPath(), n.Graphics = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.bitmapCache = null, this.id = n.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._props = new n.DisplayProps(), this._rectangle = new n.Rectangle(), this._bounds = null, this._webGLRenderStyle = t._StageGL_NONE;
    }

    var e = n.extend(t, n.EventDispatcher);
    t._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], t.suppressCrossDomainErrors = !1, t._snapToPixelEnabled = !1, t._StageGL_NONE = 0, t._StageGL_SPRITE = 1, t._StageGL_BITMAP = 2;
    var i = n.createCanvas ? n.createCanvas() : document.createElement("canvas");
    i.getContext && (t._hitTestCanvas = i, t._hitTestContext = i.getContext("2d"), i.width = i.height = 1), e._getStage = function () {
      for (var t = this, e = n.Stage; t.parent;) t = t.parent;

      return t instanceof e ? t : null;
    }, e.getStage = n.deprecate(e._getStage, "DisplayObject.getStage");

    try {
      Object.defineProperties(e, {
        stage: {
          get: e._getStage
        },
        cacheID: {
          get: function () {
            return this.bitmapCache && this.bitmapCache.cacheID;
          },
          set: function (t) {
            this.bitmapCache && (this.bitmapCache.cacheID = t);
          }
        },
        scale: {
          get: function () {
            return this.scaleX;
          },
          set: function (t) {
            this.scaleX = this.scaleY = t;
          }
        }
      });
    } catch (r) {}

    e.isVisible = function () {
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY);
    }, e.draw = function (t, e) {
      var i = this.bitmapCache;
      return !(!i || e) && i.draw(t);
    }, e.updateContext = function (e) {
      var i = this,
          n = i.mask,
          r = i._props.matrix;
      n && n.graphics && !n.graphics.isEmpty() && (n.getMatrix(r), e.transform(r.a, r.b, r.c, r.d, r.tx, r.ty), n.graphics.drawAsPath(e), e.clip(), r.invert(), e.transform(r.a, r.b, r.c, r.d, r.tx, r.ty)), this.getMatrix(r);
      var s = r.tx,
          a = r.ty;
      t._snapToPixelEnabled && i.snapToPixel && (s = s + (s < 0 ? -.5 : .5) | 0, a = a + (a < 0 ? -.5 : .5) | 0), e.transform(r.a, r.b, r.c, r.d, s, a), e.globalAlpha *= i.alpha, i.compositeOperation && (e.globalCompositeOperation = i.compositeOperation), i.shadow && this._applyShadow(e, i.shadow);
    }, e.cache = function (t, e, i, r, s, a) {
      this.bitmapCache || (this.bitmapCache = new n.BitmapCache()), this.bitmapCache.define(this, t, e, i, r, s, a);
    }, e.updateCache = function (t) {
      if (!this.bitmapCache) throw "cache() must be called before updateCache()";
      this.bitmapCache.update(t);
    }, e.uncache = function () {
      this.bitmapCache && (this.bitmapCache.release(), this.bitmapCache = void 0);
    }, e.getCacheDataURL = function () {
      return this.bitmapCache ? this.bitmapCache.getDataURL() : null;
    }, e.localToGlobal = function (t, e, i) {
      return this.getConcatenatedMatrix(this._props.matrix).transformPoint(t, e, i || new n.Point());
    }, e.globalToLocal = function (t, e, i) {
      return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(t, e, i || new n.Point());
    }, e.localToLocal = function (t, e, i, n) {
      return n = this.localToGlobal(t, e, n), i.globalToLocal(n.x, n.y, n);
    }, e.setTransform = function (t, e, i, n, r, s, a, o, h) {
      return this.x = t || 0, this.y = e || 0, this.scaleX = null == i ? 1 : i, this.scaleY = null == n ? 1 : n, this.rotation = r || 0, this.skewX = s || 0, this.skewY = a || 0, this.regX = o || 0, this.regY = h || 0, this;
    }, e.getMatrix = function (t) {
      var e = this,
          i = t && t.identity() || new n.Matrix2D();
      return e.transformMatrix ? i.copy(e.transformMatrix) : i.appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY);
    }, e.getConcatenatedMatrix = function (t) {
      for (var e = this, i = this.getMatrix(t); e = e.parent;) i.prependMatrix(e.getMatrix(e._props.matrix));

      return i;
    }, e.getConcatenatedDisplayProps = function (t) {
      var e = this;
      t = t ? t.identity() : new n.DisplayProps();
      var i = this,
          r = i.getMatrix(t.matrix);

      do t.prepend(i.visible, i.alpha, i.shadow, i.compositeOperation), i != e && r.prependMatrix(i.getMatrix(i._props.matrix)); while (i = i.parent);

      return t;
    }, e.hitTest = function (e, i) {
      var n = t._hitTestContext;
      n.setTransform(1, 0, 0, 1, -e, -i), this.draw(n);

      var r = this._testHit(n);

      return n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, 2, 2), r;
    }, e.set = function (t) {
      var e = this;

      for (var i in t) e[i] = t[i];

      return this;
    }, e.getBounds = function () {
      if (this._bounds) return this._rectangle.copy(this._bounds);
      var t = this.cacheCanvas;

      if (t) {
        var e = this._cacheScale;
        return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t.height / e);
      }

      return null;
    }, e.getTransformedBounds = function () {
      return this._getBounds();
    }, e.setBounds = function (t, e, i, r) {
      return null == t ? void (this._bounds = t) : void (this._bounds = (this._bounds || new n.Rectangle()).setValues(t, e, i, r));
    }, e.clone = function () {
      return this._cloneProps(new t());
    }, e.toString = function () {
      return "[DisplayObject (name=" + this.name + ")]";
    }, e._updateState = null, e._cloneProps = function (t) {
      return t.alpha = this.alpha, t.mouseEnabled = this.mouseEnabled, t.tickEnabled = this.tickEnabled, t.name = this.name, t.regX = this.regX, t.regY = this.regY, t.rotation = this.rotation, t.scaleX = this.scaleX, t.scaleY = this.scaleY, t.shadow = this.shadow, t.skewX = this.skewX, t.skewY = this.skewY, t.visible = this.visible, t.x = this.x, t.y = this.y, t.compositeOperation = this.compositeOperation, t.snapToPixel = this.snapToPixel, t.filters = null == this.filters ? null : this.filters.slice(0), t.mask = this.mask, t.hitArea = this.hitArea, t.cursor = this.cursor, t._bounds = this._bounds, t;
    }, e._applyShadow = function (t, e) {
      e = e || Shadow.identity, t.shadowColor = e.color, t.shadowOffsetX = e.offsetX, t.shadowOffsetY = e.offsetY, t.shadowBlur = e.blur;
    }, e._tick = function (t) {
      var e = this._listeners;
      e && e.tick && (t.target = null, t.propagationStopped = t.immediatePropagationStopped = !1, this.dispatchEvent(t));
    }, e._testHit = function (e) {
      try {
        var i = e.getImageData(0, 0, 1, 1).data[3] > 1;
      } catch (n) {
        if (!t.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
      }

      return i;
    }, e._getBounds = function (t, e) {
      return this._transformBounds(this.getBounds(), t, e);
    }, e._transformBounds = function (t, e, i) {
      if (!t) return t;
      var n = t.x,
          r = t.y,
          s = t.width,
          a = t.height,
          o = this._props.matrix;
      o = i ? o.identity() : this.getMatrix(o), (n || r) && o.appendTransform(0, 0, 1, 1, 0, 0, 0, -n, -r), e && o.prependMatrix(e);
      var h = s * o.a,
          c = s * o.b,
          u = a * o.c,
          l = a * o.d,
          d = o.tx,
          f = o.ty,
          p = d,
          _ = d,
          v = f,
          m = f;
      return (n = h + d) < p ? p = n : n > _ && (_ = n), (n = h + u + d) < p ? p = n : n > _ && (_ = n), (n = u + d) < p ? p = n : n > _ && (_ = n), (r = c + f) < v ? v = r : r > m && (m = r), (r = c + l + f) < v ? v = r : r > m && (m = r), (r = l + f) < v ? v = r : r > m && (m = r), t.setValues(p, v, _ - p, m - v);
    }, e._hasMouseEventListener = function () {
      for (var e = this, i = t._MOUSE_EVENTS, n = 0, r = i.length; n < r; n++) if (e.hasEventListener(i[n])) return !0;

      return !!this.cursor;
    }, n.DisplayObject = n.promote(t, "EventDispatcher");
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0;
    }

    var e = n.extend(t, n.DisplayObject);
    e._getNumChildren = function () {
      return this.children.length;
    }, e.getNumChildren = n.deprecate(e._getNumChildren, "Container.getNumChildren");

    try {
      Object.defineProperties(e, {
        numChildren: {
          get: e._getNumChildren
        }
      });
    } catch (i) {}

    e.initialize = t, e.isVisible = function () {
      var t = this.cacheCanvas || this.children.length;
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t);
    }, e.draw = function (t, e) {
      if (this.DisplayObject_draw(t, e)) return !0;

      for (var i = this.children.slice(), n = 0, r = i.length; n < r; n++) {
        var s = i[n];
        s.isVisible() && (t.save(), s.updateContext(t), s.draw(t), t.restore());
      }

      return !0;
    }, e.addChild = function (t) {
      var e = arguments,
          i = this;
      if (null == t) return t;
      var r = arguments.length;

      if (r > 1) {
        for (var s = 0; s < r; s++) i.addChild(e[s]);

        return arguments[r - 1];
      }

      var a = t.parent,
          o = a === this;
      return a && a._removeChildAt(n.indexOf(a.children, t), o), t.parent = this, this.children.push(t), o || t.dispatchEvent("added"), t;
    }, e.addChildAt = function (t, e) {
      var i = arguments,
          r = this,
          s = arguments.length,
          a = arguments[s - 1];
      if (a < 0 || a > this.children.length) return arguments[s - 2];

      if (s > 2) {
        for (var o = 0; o < s - 1; o++) r.addChildAt(i[o], a + o);

        return arguments[s - 2];
      }

      var h = t.parent,
          c = h === this;
      return h && h._removeChildAt(n.indexOf(h.children, t), c), t.parent = this, this.children.splice(e, 0, t), c || t.dispatchEvent("added"), t;
    }, e.removeChild = function (t) {
      var e = arguments,
          i = this,
          r = arguments.length;

      if (r > 1) {
        for (var s = !0, a = 0; a < r; a++) s = s && i.removeChild(e[a]);

        return s;
      }

      return this._removeChildAt(n.indexOf(this.children, t));
    }, e.removeChildAt = function (t) {
      var e = arguments,
          i = this,
          n = arguments.length;

      if (n > 1) {
        for (var r = [], s = 0; s < n; s++) r[s] = e[s];

        r.sort(function (t, e) {
          return e - t;
        });

        for (var a = !0, s = 0; s < n; s++) a = a && i._removeChildAt(r[s]);

        return a;
      }

      return this._removeChildAt(t);
    }, e.removeAllChildren = function () {
      for (var t = this, e = this.children; e.length;) t._removeChildAt(0);
    }, e.getChildAt = function (t) {
      return this.children[t];
    }, e.getChildByName = function (t) {
      for (var e = this.children, i = 0, n = e.length; i < n; i++) if (e[i].name == t) return e[i];

      return null;
    }, e.sortChildren = function (t) {
      this.children.sort(t);
    }, e.getChildIndex = function (t) {
      return n.indexOf(this.children, t);
    }, e.swapChildrenAt = function (t, e) {
      var i = this.children,
          n = i[t],
          r = i[e];
      n && r && (i[t] = r, i[e] = n);
    }, e.swapChildren = function (t, e) {
      for (var i, n, r = this.children, s = 0, a = r.length; s < a && (r[s] == t && (i = s), r[s] == e && (n = s), null == i || null == n); s++);

      s != a && (r[i] = e, r[n] = t);
    }, e.setChildIndex = function (t, e) {
      var i = this.children,
          n = i.length;

      if (!(t.parent != this || e < 0 || e >= n)) {
        for (var r = 0; r < n && i[r] != t; r++);

        r != n && r != e && (i.splice(r, 1), i.splice(e, 0, t));
      }
    }, e.contains = function (t) {
      for (var e = this; t;) {
        if (t == e) return !0;
        t = t.parent;
      }

      return !1;
    }, e.hitTest = function (t, e) {
      return null != this.getObjectUnderPoint(t, e);
    }, e.getObjectsUnderPoint = function (t, e, i) {
      var n = [],
          r = this.localToGlobal(t, e);
      return this._getObjectsUnderPoint(r.x, r.y, n, i > 0, 1 == i), n;
    }, e.getObjectUnderPoint = function (t, e, i) {
      var n = this.localToGlobal(t, e);
      return this._getObjectsUnderPoint(n.x, n.y, null, i > 0, 1 == i);
    }, e.getBounds = function () {
      return this._getBounds(null, !0);
    }, e.getTransformedBounds = function () {
      return this._getBounds();
    }, e.clone = function (e) {
      var i = this._cloneProps(new t());

      return e && this._cloneChildren(i), i;
    }, e.toString = function () {
      return "[Container (name=" + this.name + ")]";
    }, e._tick = function (t) {
      var e = this;
      if (this.tickChildren) for (var i = this.children.length - 1; i >= 0; i--) {
        var n = e.children[i];
        n.tickEnabled && n._tick && n._tick(t);
      }
      this.DisplayObject__tick(t);
    }, e._cloneChildren = function (t) {
      var e = this;
      t.children.length && t.removeAllChildren();

      for (var i = t.children, n = 0, r = this.children.length; n < r; n++) {
        var s = e.children[n].clone(!0);
        s.parent = t, i.push(s);
      }
    }, e._removeChildAt = function (t, e) {
      if (t < 0 || t > this.children.length - 1) return !1;
      var i = this.children[t];
      return i && (i.parent = null), this.children.splice(t, 1), e || i.dispatchEvent("removed"), !0;
    }, e._getObjectsUnderPoint = function (e, i, r, s, a, o) {
      var h = this;
      if (o = o || 0, !o && !this._testMask(this, e, i)) return null;
      var c,
          u = n.DisplayObject._hitTestContext;
      a = a || s && this._hasMouseEventListener();

      for (var l = this.children, d = l.length, f = d - 1; f >= 0; f--) {
        var p = l[f],
            _ = p.hitArea;
        if (p.visible && (_ || p.isVisible()) && (!s || p.mouseEnabled) && (_ || h._testMask(p, e, i))) if (!_ && p instanceof t) {
          var v = p._getObjectsUnderPoint(e, i, r, s, a, o + 1);

          if (!r && v) return s && !h.mouseChildren ? h : v;
        } else {
          if (s && !a && !p._hasMouseEventListener()) continue;
          var m = p.getConcatenatedDisplayProps(p._props);
          if (c = m.matrix, _ && (c.appendMatrix(_.getMatrix(_._props.matrix)), m.alpha = _.alpha), u.globalAlpha = m.alpha, u.setTransform(c.a, c.b, c.c, c.d, c.tx - e, c.ty - i), (_ || p).draw(u), !h._testHit(u)) continue;
          if (u.setTransform(1, 0, 0, 1, 0, 0), u.clearRect(0, 0, 2, 2), !r) return s && !h.mouseChildren ? h : p;
          r.push(p);
        }
      }

      return null;
    }, e._testMask = function (t, e, i) {
      var r = t.mask;
      if (!r || !r.graphics || r.graphics.isEmpty()) return !0;
      var s = this._props.matrix,
          a = t.parent;
      s = a ? a.getConcatenatedMatrix(s) : s.identity(), s = r.getMatrix(r._props.matrix).prependMatrix(s);
      var o = n.DisplayObject._hitTestContext;
      return o.setTransform(s.a, s.b, s.c, s.d, s.tx - e, s.ty - i), r.graphics.drawAsPath(o), o.fillStyle = "#000", o.fill(), !!this._testHit(o) && (o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, 2, 2), !0);
    }, e._getBounds = function (t, e) {
      var i = this,
          n = this.DisplayObject_getBounds();
      if (n) return this._transformBounds(n, t, e);
      var r = this._props.matrix;
      r = e ? r.identity() : this.getMatrix(r), t && r.prependMatrix(t);

      for (var s = this.children.length, a = null, o = 0; o < s; o++) {
        var h = i.children[o];
        h.visible && (n = h._getBounds(r)) && (a ? a.extend(n.x, n.y, n.width, n.height) : a = n.clone());
      }

      return a;
    }, n.Container = n.promote(t, "DisplayObject");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof t ? document.getElementById(t) : t, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0);
    }

    var e = n.extend(t, n.Container);
    e._get_nextStage = function () {
      return this._nextStage;
    }, e._set_nextStage = function (t) {
      this._nextStage && (this._nextStage._prevStage = null), t && (t._prevStage = this), this._nextStage = t;
    };

    try {
      Object.defineProperties(e, {
        nextStage: {
          get: e._get_nextStage,
          set: e._set_nextStage
        }
      });
    } catch (i) {}

    e.update = function (t) {
      if (this.canvas && (this.tickOnUpdate && this.tick(t), this.dispatchEvent("drawstart", !1, !0) !== !1)) {
        n.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
        var e = this.drawRect,
            i = this.canvas.getContext("2d");
        i.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (e ? i.clearRect(e.x, e.y, e.width, e.height) : i.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), i.save(), this.drawRect && (i.beginPath(), i.rect(e.x, e.y, e.width, e.height), i.clip()), this.updateContext(i), this.draw(i, !1), i.restore(), this.dispatchEvent("drawend");
      }
    }, e.tick = function (t) {
      if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
        var e = new n.Event("tick");
        if (t) for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        this._tick(e), this.dispatchEvent("tickend");
      }
    }, e.handleEvent = function (t) {
      "tick" == t.type && this.update(t);
    }, e.clear = function () {
      if (this.canvas) {
        var t = this.canvas.getContext("2d");
        t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
      }
    }, e.toDataURL = function (t, e) {
      var i,
          n = this.canvas.getContext("2d"),
          r = this.canvas.width,
          s = this.canvas.height;

      if (t) {
        i = n.getImageData(0, 0, r, s);
        var a = n.globalCompositeOperation;
        n.globalCompositeOperation = "destination-over", n.fillStyle = t, n.fillRect(0, 0, r, s);
      }

      var o = this.canvas.toDataURL(e || "image/png");
      return t && (n.putImageData(i, 0, 0), n.globalCompositeOperation = a), o;
    }, e.enableMouseOver = function (t) {
      if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == t && this._testMouseOver(!0)), null == t) t = 20;else if (t <= 0) return;
      var e = this;
      this._mouseOverIntervalID = setInterval(function () {
        e._testMouseOver();
      }, 1e3 / Math.min(50, t));
    }, e.enableDOMEvents = function (t) {
      null == t && (t = !0);
      var e,
          i,
          n = this._eventListeners;

      if (!t && n) {
        for (e in n) i = n[e], i.t.removeEventListener(e, i.f, !1);

        this._eventListeners = null;
      } else if (t && !n && this.canvas) {
        var r = window.addEventListener ? window : document,
            s = this;
        n = this._eventListeners = {}, n.mouseup = {
          t: r,
          f: function (t) {
            s._handleMouseUp(t);
          }
        }, n.mousemove = {
          t: r,
          f: function (t) {
            s._handleMouseMove(t);
          }
        }, n.dblclick = {
          t: this.canvas,
          f: function (t) {
            s._handleDoubleClick(t);
          }
        }, n.mousedown = {
          t: this.canvas,
          f: function (t) {
            s._handleMouseDown(t);
          }
        };

        for (e in n) i = n[e], i.t.addEventListener(e, i.f, !1);
      }
    }, e.clone = function () {
      throw "Stage cannot be cloned.";
    }, e.toString = function () {
      return "[Stage (name=" + this.name + ")]";
    }, e._getElementRect = function (t) {
      var e;

      try {
        e = t.getBoundingClientRect();
      } catch (i) {
        e = {
          top: t.offsetTop,
          left: t.offsetLeft,
          width: t.offsetWidth,
          height: t.offsetHeight
        };
      }

      var n = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
          r = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
          s = window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle,
          a = parseInt(s.paddingLeft) + parseInt(s.borderLeftWidth),
          o = parseInt(s.paddingTop) + parseInt(s.borderTopWidth),
          h = parseInt(s.paddingRight) + parseInt(s.borderRightWidth),
          c = parseInt(s.paddingBottom) + parseInt(s.borderBottomWidth);
      return {
        left: e.left + n + a,
        right: e.right + n - h,
        top: e.top + r + o,
        bottom: e.bottom + r - c
      };
    }, e._getPointerData = function (t) {
      var e = this._pointerData[t];
      return e || (e = this._pointerData[t] = {
        x: 0,
        y: 0
      }), e;
    }, e._handleMouseMove = function (t) {
      t || (t = window.event), this._handlePointerMove(-1, t, t.pageX, t.pageY);
    }, e._handlePointerMove = function (t, e, i, n, r) {
      if ((!this._prevStage || void 0 !== r) && this.canvas) {
        var s = this._nextStage,
            a = this._getPointerData(t),
            o = a.inBounds;

        this._updatePointerPosition(t, e, i, n), (o || a.inBounds || this.mouseMoveOutside) && (t === -1 && a.inBounds == !o && this._dispatchMouseEvent(this, o ? "mouseleave" : "mouseenter", !1, t, a, e), this._dispatchMouseEvent(this, "stagemousemove", !1, t, a, e), this._dispatchMouseEvent(a.target, "pressmove", !0, t, a, e)), s && s._handlePointerMove(t, e, i, n, null);
      }
    }, e._updatePointerPosition = function (t, e, i, n) {
      var r = this._getElementRect(this.canvas);

      i -= r.left, n -= r.top;
      var s = this.canvas.width,
          a = this.canvas.height;
      i /= (r.right - r.left) / s, n /= (r.bottom - r.top) / a;

      var o = this._getPointerData(t);

      (o.inBounds = i >= 0 && n >= 0 && i <= s - 1 && n <= a - 1) ? (o.x = i, o.y = n) : this.mouseMoveOutside && (o.x = i < 0 ? 0 : i > s - 1 ? s - 1 : i, o.y = n < 0 ? 0 : n > a - 1 ? a - 1 : n), o.posEvtObj = e, o.rawX = i, o.rawY = n, t !== this._primaryPointerID && t !== -1 || (this.mouseX = o.x, this.mouseY = o.y, this.mouseInBounds = o.inBounds);
    }, e._handleMouseUp = function (t) {
      this._handlePointerUp(-1, t, !1);
    }, e._handlePointerUp = function (t, e, i, n) {
      var r = this._nextStage,
          s = this._getPointerData(t);

      if (!this._prevStage || void 0 !== n) {
        var a = null,
            o = s.target;
        n || !o && !r || (a = this._getObjectsUnderPoint(s.x, s.y, null, !0)), s.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, t, s, e, a), s.down = !1), a == o && this._dispatchMouseEvent(o, "click", !0, t, s, e), this._dispatchMouseEvent(o, "pressup", !0, t, s, e), i ? (t == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[t]) : s.target = null, r && r._handlePointerUp(t, e, i, n || a && this);
      }
    }, e._handleMouseDown = function (t) {
      this._handlePointerDown(-1, t, t.pageX, t.pageY);
    }, e._handlePointerDown = function (t, e, i, n, r) {
      this.preventSelection && e.preventDefault(), null != this._primaryPointerID && t !== -1 || (this._primaryPointerID = t), null != n && this._updatePointerPosition(t, e, i, n);

      var s = null,
          a = this._nextStage,
          o = this._getPointerData(t);

      r || (s = o.target = this._getObjectsUnderPoint(o.x, o.y, null, !0)), o.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, t, o, e, s), o.down = !0), this._dispatchMouseEvent(s, "mousedown", !0, t, o, e), a && a._handlePointerDown(t, e, i, n, r || s && this);
    }, e._testMouseOver = function (t, e, i) {
      var n = this;

      if (!this._prevStage || void 0 !== e) {
        var r = this._nextStage;
        if (!this._mouseOverIntervalID) return void (r && r._testMouseOver(t, e, i));

        var s = this._getPointerData(-1);

        if (s && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
          var a,
              o,
              h,
              c = s.posEvtObj,
              u = i || c && c.target == this.canvas,
              l = null,
              d = -1,
              f = "";
          !e && (t || this.mouseInBounds && u) && (l = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
          var p = this._mouseOverTarget || [],
              _ = p[p.length - 1],
              v = this._mouseOverTarget = [];

          for (a = l; a;) v.unshift(a), f || (f = a.cursor), a = a.parent;

          for (this.canvas.style.cursor = f, !e && i && (i.canvas.style.cursor = f), o = 0, h = v.length; o < h && v[o] == p[o]; o++) d = o;

          for (_ != l && this._dispatchMouseEvent(_, "mouseout", !0, -1, s, c, l), o = p.length - 1; o > d; o--) n._dispatchMouseEvent(p[o], "rollout", !1, -1, s, c, l);

          for (o = v.length - 1; o > d; o--) n._dispatchMouseEvent(v[o], "rollover", !1, -1, s, c, _);

          _ != l && this._dispatchMouseEvent(l, "mouseover", !0, -1, s, c, _), r && r._testMouseOver(t, e || l && this, i || u && this);
        }
      }
    }, e._handleDoubleClick = function (t, e) {
      var i = null,
          n = this._nextStage,
          r = this._getPointerData(-1);

      e || (i = this._getObjectsUnderPoint(r.x, r.y, null, !0), this._dispatchMouseEvent(i, "dblclick", !0, -1, r, t)), n && n._handleDoubleClick(t, e || i && this);
    }, e._dispatchMouseEvent = function (t, e, i, r, s, a, o) {
      if (t && (i || t.hasEventListener(e))) {
        var h = new n.MouseEvent(e, i, !1, s.x, s.y, a, r, r === this._primaryPointerID || r === -1, s.rawX, s.rawY, o);
        t.dispatchEvent(h);
      }
    }, n.Stage = n.promote(t, "Container");
  }(), this.createjs = this.createjs || {}, function () {
    function t(e, i) {
      if (this.Stage_constructor(e), void 0 !== i) {
        if ("object" != typeof i) throw "Invalid options object";
        var r = i.premultiply,
            s = i.transparent,
            a = i.antialias,
            o = i.preserveBuffer,
            h = i.autoPurge;
      }

      this.vocalDebug = !1, this._preserveBuffer = o || !1, this._antialias = a || !1, this._transparent = s || !1, this._premultiply = r || !1, this._autoPurge = void 0, this.autoPurge = h, this._viewportWidth = 0, this._viewportHeight = 0, this._projectionMatrix = null, this._webGLContext = null, this._clearColor = {
        r: .5,
        g: .5,
        b: .5,
        a: 0
      }, this._maxCardsPerBatch = t.DEFAULT_MAX_BATCH_SIZE, this._activeShader = null, this._vertices = null, this._vertexPositionBuffer = null, this._uvs = null, this._uvPositionBuffer = null, this._indices = null, this._textureIndexBuffer = null, this._alphas = null, this._alphaBuffer = null, this._textureDictionary = [], this._textureIDs = {}, this._batchTextures = [], this._baseTextures = [], this._batchTextureCount = 8, this._lastTextureInsert = -1, this._batchID = 0, this._drawID = 0, this._slotBlacklist = [], this._isDrawing = 0, this._lastTrackedCanvas = 0, this.isCacheControlled = !1, this._cacheContainer = new n.Container(), this._initializeWebGL();
    }

    var e = n.extend(t, n.Stage);
    t.buildUVRects = function (t, e, i) {
      if (!t || !t._frames) return null;
      void 0 === e && (e = -1), void 0 === i && (i = !1);

      for (var n = e != -1 && i ? e : 0, r = e != -1 && i ? e + 1 : t._frames.length, s = n; s < r; s++) {
        var a = t._frames[s];

        if (!(a.uvRect || a.image.width <= 0 || a.image.height <= 0)) {
          var o = a.rect;
          a.uvRect = {
            t: o.y / a.image.height,
            l: o.x / a.image.width,
            b: (o.y + o.height) / a.image.height,
            r: (o.x + o.width) / a.image.width
          };
        }
      }

      return t._frames[e != -1 ? e : 0].uvRect || {
        t: 0,
        l: 0,
        b: 1,
        r: 1
      };
    }, t.isWebGLActive = function (t) {
      return t && t instanceof WebGLRenderingContext && "undefined" != typeof WebGLRenderingContext;
    }, t.VERTEX_PROPERTY_COUNT = 6, t.INDICIES_PER_CARD = 6, t.DEFAULT_MAX_BATCH_SIZE = 1e4, t.WEBGL_MAX_INDEX_NUM = Math.pow(2, 16), t.UV_RECT = {
      t: 0,
      l: 0,
      b: 1,
      r: 1
    };

    try {
      t.COVER_VERT = new Float32Array([-1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1]), t.COVER_UV = new Float32Array([0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]), t.COVER_UV_FLIP = new Float32Array([0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0]);
    } catch (i) {}

    t.REGULAR_VARYING_HEADER = "precision mediump float;varying vec2 vTextureCoord;varying lowp float indexPicker;varying lowp float alphaValue;", t.REGULAR_VERTEX_HEADER = t.REGULAR_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;attribute lowp float textureIndex;attribute lowp float objectAlpha;uniform mat4 pMatrix;", t.REGULAR_FRAGMENT_HEADER = t.REGULAR_VARYING_HEADER + "uniform sampler2D uSampler[{{count}}];", t.REGULAR_VERTEX_BODY = "void main(void) {gl_Position = vec4((vertexPosition.x * pMatrix[0][0]) + pMatrix[3][0],(vertexPosition.y * pMatrix[1][1]) + pMatrix[3][1],pMatrix[3][2],1.0);alphaValue = objectAlpha;indexPicker = textureIndex;vTextureCoord = uvPosition;}", t.REGULAR_FRAGMENT_BODY = "void main(void) {vec4 color = vec4(1.0, 0.0, 0.0, 1.0);if (indexPicker <= 0.5) {color = texture2D(uSampler[0], vTextureCoord);{{alternates}}}{{fragColor}}}", t.REGULAR_FRAG_COLOR_NORMAL = "gl_FragColor = vec4(color.rgb, color.a * alphaValue);", t.REGULAR_FRAG_COLOR_PREMULTIPLY = "if(color.a > 0.0035) {gl_FragColor = vec4(color.rgb/color.a, color.a * alphaValue);} else {gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);}", t.PARTICLE_VERTEX_BODY = t.REGULAR_VERTEX_BODY, t.PARTICLE_FRAGMENT_BODY = t.REGULAR_FRAGMENT_BODY, t.COVER_VARYING_HEADER = "precision mediump float;varying highp vec2 vRenderCoord;varying highp vec2 vTextureCoord;", t.COVER_VERTEX_HEADER = t.COVER_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;uniform float uUpright;", t.COVER_FRAGMENT_HEADER = t.COVER_VARYING_HEADER + "uniform sampler2D uSampler;", t.COVER_VERTEX_BODY = "void main(void) {gl_Position = vec4(vertexPosition.x, vertexPosition.y, 0.0, 1.0);vRenderCoord = uvPosition;vTextureCoord = vec2(uvPosition.x, abs(uUpright - uvPosition.y));}", t.COVER_FRAGMENT_BODY = "void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = color;}", e._get_isWebGL = function () {
      return !!this._webGLContext;
    }, e._set_autoPurge = function (t) {
      t = isNaN(t) ? 1200 : t, t != -1 && (t = t < 10 ? 10 : t), this._autoPurge = t;
    }, e._get_autoPurge = function () {
      return Number(this._autoPurge);
    };

    try {
      Object.defineProperties(e, {
        isWebGL: {
          get: e._get_isWebGL
        },
        autoPurge: {
          get: e._get_autoPurge,
          set: e._set_autoPurge
        }
      });
    } catch (i) {}

    e._initializeWebGL = function () {
      if (this.canvas) {
        if (!this._webGLContext || this._webGLContext.canvas !== this.canvas) {
          var t = {
            depth: !1,
            alpha: this._transparent,
            stencil: !0,
            antialias: this._antialias,
            premultipliedAlpha: this._premultiply,
            preserveDrawingBuffer: this._preserveBuffer
          },
              e = this._webGLContext = this._fetchWebGLContext(this.canvas, t);

          if (!e) return null;
          this.updateSimultaneousTextureCount(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), this._maxTextureSlots = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this._createBuffers(e), this._initTextures(e), e.disable(e.DEPTH_TEST), e.enable(e.BLEND), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiply), this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), this.updateViewport(this._viewportWidth || this.canvas.width, this._viewportHeight || this.canvas.height);
        }
      } else this._webGLContext = null;

      return this._webGLContext;
    }, e.update = function (t) {
      if (this.canvas) {
        if (this.tickOnUpdate && this.tick(t), this.dispatchEvent("drawstart"), this.autoClear && this.clear(), this._webGLContext) this._batchDraw(this, this._webGLContext), this._autoPurge == -1 || this._drawID % (this._autoPurge / 2 | 0) || this.purgeTextures(this._autoPurge);else {
          var e = this.canvas.getContext("2d");
          e.save(), this.updateContext(e), this.draw(e, !1), e.restore();
        }
        this.dispatchEvent("drawend");
      }
    }, e.clear = function () {
      if (this.canvas) if (t.isWebGLActive(this._webGLContext)) {
        var e = this._webGLContext,
            i = this._clearColor,
            n = this._transparent ? i.a : 1;
        this._webGLContext.clearColor(i.r * n, i.g * n, i.b * n, n), e.clear(e.COLOR_BUFFER_BIT), this._webGLContext.clearColor(i.r, i.g, i.b, i.a);
      } else this.Stage_clear();
    }, e.draw = function (e, i) {
      if (e === this._webGLContext && t.isWebGLActive(this._webGLContext)) {
        var n = this._webGLContext;
        return this._batchDraw(this, n, i), !0;
      }

      return this.Stage_draw(e, i);
    }, e.cacheDraw = function (e, i, n) {
      if (t.isWebGLActive(this._webGLContext)) {
        var r = this._webGLContext;
        return this._cacheDraw(r, e, i, n), !0;
      }

      return !1;
    }, e.protectTextureSlot = function (t, e) {
      if (t > this._maxTextureSlots || t < 0) throw "Slot outside of acceptable range";
      this._slotBlacklist[t] = !!e;
    }, e.getTargetRenderTexture = function (t, e, i) {
      var n,
          r = !1,
          s = this._webGLContext;
      if (void 0 !== t.__lastRT && t.__lastRT === t.__rtA && (r = !0), r ? (void 0 === t.__rtB ? t.__rtB = this.getRenderBufferTexture(e, i) : (e == t.__rtB._width && i == t.__rtB._height || this.resizeTexture(t.__rtB, e, i), this.setTextureParams(s)), n = t.__rtB) : (void 0 === t.__rtA ? t.__rtA = this.getRenderBufferTexture(e, i) : (e == t.__rtA._width && i == t.__rtA._height || this.resizeTexture(t.__rtA, e, i), this.setTextureParams(s)), n = t.__rtA), !n) throw "Problems creating render textures, known causes include using too much VRAM by not releasing WebGL texture instances";
      return t.__lastRT = n, n;
    }, e.releaseTexture = function (t) {
      var e,
          i,
          n = this;

      if (t) {
        if (t.children) for (e = 0, i = t.children.length; e < i; e++) n.releaseTexture(t.children[e]);
        t.cacheCanvas && t.uncache();
        var r = void 0;

        if (void 0 !== t._storeID) {
          if (t === this._textureDictionary[t._storeID]) return this._killTextureObject(t), void (t._storeID = void 0);
          r = t;
        } else if (2 === t._webGLRenderStyle) r = t.image;else if (1 === t._webGLRenderStyle) {
          for (e = 0, i = t.spriteSheet._images.length; e < i; e++) n.releaseTexture(t.spriteSheet._images[e]);

          return;
        }

        if (void 0 === r) return void (this.vocalDebug && console.log("No associated texture found on release"));
        this._killTextureObject(this._textureDictionary[r._storeID]), r._storeID = void 0;
      }
    }, e.purgeTextures = function (t) {
      var e = this;
      void 0 == t && (t = 100);

      for (var i = this._textureDictionary, n = i.length, r = 0; r < n; r++) {
        var s = i[r];
        s && s._drawID + t <= e._drawID && e._killTextureObject(s);
      }
    }, e.updateSimultaneousTextureCount = function (t) {
      var e = this,
          i = this._webGLContext,
          n = !1;

      for ((t < 1 || isNaN(t)) && (t = 1), this._batchTextureCount = t; !n;) try {
        e._activeShader = e._fetchShaderProgram(i), n = !0;
      } catch (r) {
        if (1 == e._batchTextureCount) throw "Cannot compile shader " + r;
        e._batchTextureCount -= 4, e._batchTextureCount < 1 && (e._batchTextureCount = 1), e.vocalDebug && console.log("Reducing desired texture count due to errors: " + e._batchTextureCount);
      }
    }, e.updateViewport = function (t, e) {
      this._viewportWidth = 0 | t, this._viewportHeight = 0 | e;
      var i = this._webGLContext;
      i && (i.viewport(0, 0, this._viewportWidth, this._viewportHeight), this._projectionMatrix = new Float32Array([2 / this._viewportWidth, 0, 0, 0, 0, -2 / this._viewportHeight, 1, 0, 0, 0, 1, 0, -1, 1, .1, 0]), this._projectionMatrixFlip = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), this._projectionMatrixFlip.set(this._projectionMatrix), this._projectionMatrixFlip[5] *= -1, this._projectionMatrixFlip[13] *= -1);
    }, e.getFilterShader = function (t) {
      t || (t = this);
      var e = this._webGLContext,
          i = this._activeShader;
      if (t._builtShader) i = t._builtShader, t.shaderParamSetup && (e.useProgram(i), t.shaderParamSetup(e, this, i));else try {
        i = this._fetchShaderProgram(e, "filter", t.VTX_SHADER_BODY, t.FRAG_SHADER_BODY, t.shaderParamSetup && t.shaderParamSetup.bind(t)), t._builtShader = i, i._name = t.toString();
      } catch (n) {
        console && console.log("SHADER SWITCH FAILURE", n);
      }
      return i;
    }, e.getBaseTexture = function (t, e) {
      var i = Math.ceil(t > 0 ? t : 1) || 1,
          n = Math.ceil(e > 0 ? e : 1) || 1,
          r = this._webGLContext,
          s = r.createTexture();
      return this.resizeTexture(s, i, n), this.setTextureParams(r, !1), s;
    }, e.resizeTexture = function (t, e, i) {
      var n = this._webGLContext;
      n.bindTexture(n.TEXTURE_2D, t), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, e, i, 0, n.RGBA, n.UNSIGNED_BYTE, null), t.width = e, t.height = i;
    }, e.getRenderBufferTexture = function (t, e) {
      var i = this._webGLContext,
          n = this.getBaseTexture(t, e);
      if (!n) return null;
      var r = i.createFramebuffer();
      return r ? (n.width = t, n.height = e, i.bindFramebuffer(i.FRAMEBUFFER, r), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, n, 0), r._renderTexture = n, n._frameBuffer = r, n._storeID = this._textureDictionary.length, this._textureDictionary[n._storeID] = n, i.bindFramebuffer(i.FRAMEBUFFER, null), n) : null;
    }, e.setTextureParams = function (t, e) {
      e && this._antialias ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST)), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
    }, e.setClearColor = function (t) {
      var e, i, n, r, s;
      "string" == typeof t ? 0 == t.indexOf("#") ? (4 == t.length && (t = "#" + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2) + t.charAt(3) + t.charAt(3)), e = Number("0x" + t.slice(1, 3)) / 255, i = Number("0x" + t.slice(3, 5)) / 255, n = Number("0x" + t.slice(5, 7)) / 255, r = Number("0x" + t.slice(7, 9)) / 255) : 0 == t.indexOf("rgba(") && (s = t.slice(5, -1).split(","), e = Number(s[0]) / 255, i = Number(s[1]) / 255, n = Number(s[2]) / 255, r = Number(s[3])) : (e = ((4278190080 & t) >>> 24) / 255, i = ((16711680 & t) >>> 16) / 255, n = ((65280 & t) >>> 8) / 255, r = (255 & t) / 255), this._clearColor.r = e || 0, this._clearColor.g = i || 0, this._clearColor.b = n || 0, this._clearColor.a = r || 0, this._webGLContext && this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a);
    }, e.toString = function () {
      return "[StageGL (name=" + this.name + ")]";
    }, e._fetchWebGLContext = function (t, e) {
      var i;

      try {
        i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
      } catch (n) {}

      if (i) i.viewportWidth = t.width, i.viewportHeight = t.height;else {
        var r = "Could not initialize WebGL";
        console.error ? console.error(r) : console.log(r);
      }
      return i;
    }, e._fetchShaderProgram = function (e, i, n, r, s) {
      e.useProgram(null);
      var a, o;

      switch (i) {
        case "filter":
          o = t.COVER_VERTEX_HEADER + (n || t.COVER_VERTEX_BODY), a = t.COVER_FRAGMENT_HEADER + (r || t.COVER_FRAGMENT_BODY);
          break;

        case "particle":
          o = t.REGULAR_VERTEX_HEADER + t.PARTICLE_VERTEX_BODY, a = t.REGULAR_FRAGMENT_HEADER + t.PARTICLE_FRAGMENT_BODY;
          break;

        case "override":
          o = t.REGULAR_VERTEX_HEADER + (n || t.REGULAR_VERTEX_BODY), a = t.REGULAR_FRAGMENT_HEADER + (r || t.REGULAR_FRAGMENT_BODY);
          break;

        case "regular":
        default:
          o = t.REGULAR_VERTEX_HEADER + t.REGULAR_VERTEX_BODY, a = t.REGULAR_FRAGMENT_HEADER + t.REGULAR_FRAGMENT_BODY;
      }

      var h = this._createShader(e, e.VERTEX_SHADER, o),
          c = this._createShader(e, e.FRAGMENT_SHADER, a),
          u = e.createProgram();

      if (e.attachShader(u, h), e.attachShader(u, c), e.linkProgram(u), u._type = i, !e.getProgramParameter(u, e.LINK_STATUS)) throw e.useProgram(this._activeShader), e.getProgramInfoLog(u);

      switch (e.useProgram(u), i) {
        case "filter":
          u.vertexPositionAttribute = e.getAttribLocation(u, "vertexPosition"), e.enableVertexAttribArray(u.vertexPositionAttribute), u.uvPositionAttribute = e.getAttribLocation(u, "uvPosition"), e.enableVertexAttribArray(u.uvPositionAttribute), u.samplerUniform = e.getUniformLocation(u, "uSampler"), e.uniform1i(u.samplerUniform, 0), u.uprightUniform = e.getUniformLocation(u, "uUpright"), e.uniform1f(u.uprightUniform, 0), s && s(e, this, u);
          break;

        case "override":
        case "particle":
        case "regular":
        default:
          u.vertexPositionAttribute = e.getAttribLocation(u, "vertexPosition"), e.enableVertexAttribArray(u.vertexPositionAttribute), u.uvPositionAttribute = e.getAttribLocation(u, "uvPosition"), e.enableVertexAttribArray(u.uvPositionAttribute), u.textureIndexAttribute = e.getAttribLocation(u, "textureIndex"), e.enableVertexAttribArray(u.textureIndexAttribute), u.alphaAttribute = e.getAttribLocation(u, "objectAlpha"), e.enableVertexAttribArray(u.alphaAttribute);

          for (var l = [], d = 0; d < this._batchTextureCount; d++) l[d] = d;

          u.samplerData = l, u.samplerUniform = e.getUniformLocation(u, "uSampler"), e.uniform1iv(u.samplerUniform, l), u.pMatrixUniform = e.getUniformLocation(u, "pMatrix");
      }

      return e.useProgram(this._activeShader), u;
    }, e._createShader = function (e, i, n) {
      n = n.replace(/{{count}}/g, this._batchTextureCount);

      for (var r = "", s = 1; s < this._batchTextureCount; s++) r += "} else if (indexPicker <= " + s + ".5) { color = texture2D(uSampler[" + s + "], vTextureCoord);";

      n = n.replace(/{{alternates}}/g, r), n = n.replace(/{{fragColor}}/g, this._premultiply ? t.REGULAR_FRAG_COLOR_PREMULTIPLY : t.REGULAR_FRAG_COLOR_NORMAL);
      var a = e.createShader(i);
      if (e.shaderSource(a, n), e.compileShader(a), !e.getShaderParameter(a, e.COMPILE_STATUS)) throw e.getShaderInfoLog(a);
      return a;
    }, e._createBuffers = function (e) {
      var i,
          n,
          r,
          s = this._maxCardsPerBatch * t.INDICIES_PER_CARD,
          a = this._vertexPositionBuffer = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, a), i = 2;
      var o = this._vertices = new Float32Array(s * i);

      for (n = 0, r = o.length; n < r; n += i) o[n] = o[n + 1] = 0;

      e.bufferData(e.ARRAY_BUFFER, o, e.DYNAMIC_DRAW), a.itemSize = i, a.numItems = s;
      var h = this._uvPositionBuffer = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, h), i = 2;
      var c = this._uvs = new Float32Array(s * i);

      for (n = 0, r = c.length; n < r; n += i) c[n] = c[n + 1] = 0;

      e.bufferData(e.ARRAY_BUFFER, c, e.DYNAMIC_DRAW), h.itemSize = i, h.numItems = s;
      var u = this._textureIndexBuffer = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, u), i = 1;
      var l = this._indices = new Float32Array(s * i);

      for (n = 0, r = l.length; n < r; n++) l[n] = 0;

      e.bufferData(e.ARRAY_BUFFER, l, e.DYNAMIC_DRAW), u.itemSize = i, u.numItems = s;
      var d = this._alphaBuffer = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, d), i = 1;
      var f = this._alphas = new Float32Array(s * i);

      for (n = 0, r = f.length; n < r; n++) f[n] = 1;

      e.bufferData(e.ARRAY_BUFFER, f, e.DYNAMIC_DRAW), d.itemSize = i, d.numItems = s;
    }, e._initTextures = function () {
      var t = this;
      this._lastTextureInsert = -1, this._textureDictionary = [], this._textureIDs = {}, this._baseTextures = [], this._batchTextures = [];

      for (var e = 0; e < this._batchTextureCount; e++) {
        var i = t.getBaseTexture();
        if (t._baseTextures[e] = t._batchTextures[e] = i, !i) throw "Problems creating basic textures, known causes include using too much VRAM by not releasing WebGL texture instances";
      }
    }, e._loadTextureImage = function (t, e) {
      var i = e.src;
      i || (e._isCanvas = !0, i = e.src = "canvas_" + this._lastTrackedCanvas++);
      var n = this._textureIDs[i];
      void 0 === n && (n = this._textureIDs[i] = this._textureDictionary.length), void 0 === this._textureDictionary[n] && (this._textureDictionary[n] = this.getBaseTexture());
      var r = this._textureDictionary[n];
      if (r) r._batchID = this._batchID, r._storeID = n, r._imageData = e, this._insertTextureInBatch(t, r), e._storeID = n, e.complete || e.naturalWidth || e._isCanvas ? this._updateTextureImageData(t, e) : e.addEventListener("load", this._updateTextureImageData.bind(this, t, e));else {
        var s = "Problem creating desired texture, known causes include using too much VRAM by not releasing WebGL texture instances";
        console.error && console.error(s) || console.log(s), r = this._baseTextures[0], r._batchID = this._batchID, r._storeID = -1, r._imageData = r, this._insertTextureInBatch(t, r);
      }
      return r;
    }, e._updateTextureImageData = function (t, e) {
      var i = e.width & e.width - 1 || e.height & e.height - 1,
          n = this._textureDictionary[e._storeID];
      t.activeTexture(t.TEXTURE0 + n._activeIndex), t.bindTexture(t.TEXTURE_2D, n), n.isPOT = !i, this.setTextureParams(t, n.isPOT);

      try {
        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
      } catch (r) {
        var s = "\nAn error has occurred. This is most likely due to security restrictions on WebGL images with local or cross-domain origins";
        console.error ? (console.error(s), console.error(r)) : console && (console.log(s), console.log(r));
      }

      e._invalid = !1, n._w = e.width, n._h = e.height, this.vocalDebug && (i && console.warn("NPOT(Non Power of Two) Texture: " + e.src), (e.width > t.MAX_TEXTURE_SIZE || e.height > t.MAX_TEXTURE_SIZE) && console && console.error("Oversized Texture: " + e.width + "x" + e.height + " vs " + t.MAX_TEXTURE_SIZE + "max"));
    }, e._insertTextureInBatch = function (t, e) {
      var i = this;

      if (this._batchTextures[e._activeIndex] !== e) {
        var n = -1,
            r = (this._lastTextureInsert + 1) % this._batchTextureCount,
            s = r;

        do {
          if (i._batchTextures[s]._batchID != i._batchID && !i._slotBlacklist[s]) {
            n = s;
            break;
          }

          s = (s + 1) % i._batchTextureCount;
        } while (s !== r);

        n === -1 && (this.batchReason = "textureOverflow", this._drawBuffers(t), this.batchCardCount = 0, n = r), this._batchTextures[n] = e, e._activeIndex = n;
        var a = e._imageData;
        a && a._invalid && void 0 !== e._drawID ? this._updateTextureImageData(t, a) : (t.activeTexture(t.TEXTURE0 + n), t.bindTexture(t.TEXTURE_2D, e), this.setTextureParams(t)), this._lastTextureInsert = n;
      } else {
        var a = e._imageData;
        void 0 != e._storeID && a && a._invalid && this._updateTextureImageData(t, a);
      }

      e._drawID = this._drawID, e._batchID = this._batchID;
    }, e._killTextureObject = function (t) {
      var e = this;

      if (t) {
        var i = this._webGLContext;

        if (void 0 !== t._storeID && t._storeID >= 0) {
          this._textureDictionary[t._storeID] = void 0;

          for (var n in this._textureIDs) e._textureIDs[n] == t._storeID && delete e._textureIDs[n];

          t._imageData && (t._imageData._storeID = void 0), t._imageData = t._storeID = void 0;
        }

        void 0 !== t._activeIndex && this._batchTextures[t._activeIndex] === t && (this._batchTextures[t._activeIndex] = this._baseTextures[t._activeIndex]);

        try {
          t._frameBuffer && i.deleteFramebuffer(t._frameBuffer), t._frameBuffer = void 0;
        } catch (r) {
          this.vocalDebug && console.log(r);
        }

        try {
          i.deleteTexture(t);
        } catch (r) {
          this.vocalDebug && console.log(r);
        }
      }
    }, e._backupBatchTextures = function (t, e) {
      var i = this,
          n = this._webGLContext;
      this._backupTextures || (this._backupTextures = []), void 0 === e && (e = this._backupTextures);

      for (var r = 0; r < this._batchTextureCount; r++) n.activeTexture(n.TEXTURE0 + r), t ? i._batchTextures[r] = e[r] : (e[r] = i._batchTextures[r], i._batchTextures[r] = i._baseTextures[r]), n.bindTexture(n.TEXTURE_2D, i._batchTextures[r]), i.setTextureParams(n, i._batchTextures[r].isPOT);

      t && e === this._backupTextures && (this._backupTextures = []);
    }, e._batchDraw = function (t, e, i) {
      this._isDrawing > 0 && this._drawBuffers(e), this._isDrawing++, this._drawID++, this.batchCardCount = 0, this.depth = 0, this._appendToBatchGroup(t, e, new n.Matrix2D(), this.alpha, i), this.batchReason = "drawFinish", this._drawBuffers(e), this._isDrawing--;
    }, e._cacheDraw = function (t, e, i, n) {
      var r,
          s = this._activeShader,
          a = this._slotBlacklist,
          o = this._maxTextureSlots - 1,
          h = this._viewportWidth,
          c = this._viewportHeight;
      this.protectTextureSlot(o, !0);
      var u = e.getMatrix();
      u = u.clone(), u.scale(1 / n.scale, 1 / n.scale), u = u.invert(), u.translate(-n.offX / n.scale * e.scaleX, -n.offY / n.scale * e.scaleY);
      var l = this._cacheContainer;
      l.children = [e], l.transformMatrix = u, this._backupBatchTextures(!1), i && i.length ? this._drawFilters(e, i, n) : this.isCacheControlled ? (t.clear(t.COLOR_BUFFER_BIT), this._batchDraw(l, t, !0)) : (t.activeTexture(t.TEXTURE0 + o), e.cacheCanvas = this.getTargetRenderTexture(e, n._drawWidth, n._drawHeight), r = e.cacheCanvas, t.bindFramebuffer(t.FRAMEBUFFER, r._frameBuffer), this.updateViewport(n._drawWidth, n._drawHeight), this._projectionMatrix = this._projectionMatrixFlip, t.clear(t.COLOR_BUFFER_BIT), this._batchDraw(l, t, !0), t.bindFramebuffer(t.FRAMEBUFFER, null), this.updateViewport(h, c)), this._backupBatchTextures(!0), this.protectTextureSlot(o, !1), this._activeShader = s, this._slotBlacklist = a;
    }, e._drawFilters = function (t, e, i) {
      var n,
          r = this,
          s = this._webGLContext,
          a = this._maxTextureSlots - 1,
          o = this._viewportWidth,
          h = this._viewportHeight,
          c = this._cacheContainer,
          u = e.length;
      s.activeTexture(s.TEXTURE0 + a), n = this.getTargetRenderTexture(t, i._drawWidth, i._drawHeight), s.bindFramebuffer(s.FRAMEBUFFER, n._frameBuffer), this.updateViewport(i._drawWidth, i._drawHeight), s.clear(s.COLOR_BUFFER_BIT), this._batchDraw(c, s, !0), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, n), this.setTextureParams(s);
      var l = !1,
          d = 0,
          f = e[d];

      do r._activeShader = r.getFilterShader(f), r._activeShader && (s.activeTexture(s.TEXTURE0 + a), n = r.getTargetRenderTexture(t, i._drawWidth, i._drawHeight), s.bindFramebuffer(s.FRAMEBUFFER, n._frameBuffer), s.viewport(0, 0, i._drawWidth, i._drawHeight), s.clear(s.COLOR_BUFFER_BIT), r._drawCover(s, l), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, n), r.setTextureParams(s), (u > 1 || e[0]._multiPass) && (l = !l), f = null !== f._multiPass ? f._multiPass : e[++d]); while (f);

      this.isCacheControlled ? (s.bindFramebuffer(s.FRAMEBUFFER, null), this.updateViewport(o, h), this._activeShader = this.getFilterShader(this), s.clear(s.COLOR_BUFFER_BIT), this._drawCover(s, l)) : (l && (s.activeTexture(s.TEXTURE0 + a), n = this.getTargetRenderTexture(t, i._drawWidth, i._drawHeight), s.bindFramebuffer(s.FRAMEBUFFER, n._frameBuffer), this._activeShader = this.getFilterShader(this), s.viewport(0, 0, i._drawWidth, i._drawHeight), s.clear(s.COLOR_BUFFER_BIT), this._drawCover(s, !l)), s.bindFramebuffer(s.FRAMEBUFFER, null), this.updateViewport(o, h), t.cacheCanvas = n);
    }, e._appendToBatchGroup = function (e, i, r, s, a) {
      var o = this;
      e._glMtx || (e._glMtx = new n.Matrix2D());
      var h = e._glMtx;
      h.copy(r), e.transformMatrix ? h.appendMatrix(e.transformMatrix) : h.appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY);

      for (var c, u, l, d, f = e.children.length, p = 0; p < f; p++) {
        var _ = e.children[p];
        if (_.visible && s) if (_.cacheCanvas && !a || (_._updateState && _._updateState(), !_.children)) {
          o.batchCardCount + 1 > o._maxCardsPerBatch && (o.batchReason = "vertexOverflow", o._drawBuffers(i), o.batchCardCount = 0), _._glMtx || (_._glMtx = new n.Matrix2D());
          var v = _._glMtx;
          v.copy(h), _.transformMatrix ? v.appendMatrix(_.transformMatrix) : v.appendTransform(_.x, _.y, _.scaleX, _.scaleY, _.rotation, _.skewX, _.skewY, _.regX, _.regY);
          var m,
              g,
              x,
              b,
              w,
              y,
              E = _.cacheCanvas && !a;
          if (2 === _._webGLRenderStyle || E) x = !a && _.cacheCanvas || _.image;else {
            if (1 !== _._webGLRenderStyle) continue;
            if (b = _.spriteSheet.getFrame(_.currentFrame), null === b) continue;
            x = b.image;
          }
          var T = o._uvs,
              C = o._vertices,
              S = o._indices,
              R = o._alphas;

          if (x) {
            if (void 0 === x._storeID) w = o._loadTextureImage(i, x), o._insertTextureInBatch(i, w);else {
              if (w = o._textureDictionary[x._storeID], !w) {
                o.vocalDebug && console.log("Texture should not be looked up while not being stored.");
                continue;
              }

              w._batchID !== o._batchID && o._insertTextureInBatch(i, w);
            }
            if (g = w._activeIndex, 2 === _._webGLRenderStyle || E) !E && _.sourceRect ? (_._uvRect || (_._uvRect = {}), y = _.sourceRect, m = _._uvRect, m.t = y.y / x.height, m.l = y.x / x.width, m.b = (y.y + y.height) / x.height, m.r = (y.x + y.width) / x.width, c = 0, u = 0, l = y.width + c, d = y.height + u) : (m = t.UV_RECT, E ? (y = _.bitmapCache, c = y.x + y._filterOffX / y.scale, u = y.y + y._filterOffY / y.scale, l = y._drawWidth / y.scale + c, d = y._drawHeight / y.scale + u) : (c = 0, u = 0, l = x.width + c, d = x.height + u));else if (1 === _._webGLRenderStyle) {
              var A = b.rect;
              m = b.uvRect, m || (m = t.buildUVRects(_.spriteSheet, _.currentFrame, !1)), c = -b.regX, u = -b.regY, l = A.width - b.regX, d = A.height - b.regY;
            }
            var D = o.batchCardCount * t.INDICIES_PER_CARD,
                M = 2 * D;
            C[M] = c * v.a + u * v.c + v.tx, C[M + 1] = c * v.b + u * v.d + v.ty, C[M + 2] = c * v.a + d * v.c + v.tx, C[M + 3] = c * v.b + d * v.d + v.ty, C[M + 4] = l * v.a + u * v.c + v.tx, C[M + 5] = l * v.b + u * v.d + v.ty, C[M + 6] = C[M + 2], C[M + 7] = C[M + 3], C[M + 8] = C[M + 4], C[M + 9] = C[M + 5], C[M + 10] = l * v.a + d * v.c + v.tx, C[M + 11] = l * v.b + d * v.d + v.ty, T[M] = m.l, T[M + 1] = m.t, T[M + 2] = m.l, T[M + 3] = m.b, T[M + 4] = m.r, T[M + 5] = m.t, T[M + 6] = m.l, T[M + 7] = m.b, T[M + 8] = m.r, T[M + 9] = m.t, T[M + 10] = m.r, T[M + 11] = m.b, S[D] = S[D + 1] = S[D + 2] = S[D + 3] = S[D + 4] = S[D + 5] = g, R[D] = R[D + 1] = R[D + 2] = R[D + 3] = R[D + 4] = R[D + 5] = _.alpha * s, o.batchCardCount++;
          }
        } else o._appendToBatchGroup(_, i, h, _.alpha * s);
      }
    }, e._drawBuffers = function (e) {
      var i = this;

      if (!(this.batchCardCount <= 0)) {
        this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : " + this.batchReason);
        var n = this._activeShader,
            r = this._vertexPositionBuffer,
            s = this._textureIndexBuffer,
            a = this._uvPositionBuffer,
            o = this._alphaBuffer;
        e.useProgram(n), e.bindBuffer(e.ARRAY_BUFFER, r), e.vertexAttribPointer(n.vertexPositionAttribute, r.itemSize, e.FLOAT, !1, 0, 0), e.bufferSubData(e.ARRAY_BUFFER, 0, this._vertices), e.bindBuffer(e.ARRAY_BUFFER, s), e.vertexAttribPointer(n.textureIndexAttribute, s.itemSize, e.FLOAT, !1, 0, 0), e.bufferSubData(e.ARRAY_BUFFER, 0, this._indices), e.bindBuffer(e.ARRAY_BUFFER, a), e.vertexAttribPointer(n.uvPositionAttribute, a.itemSize, e.FLOAT, !1, 0, 0), e.bufferSubData(e.ARRAY_BUFFER, 0, this._uvs), e.bindBuffer(e.ARRAY_BUFFER, o), e.vertexAttribPointer(n.alphaAttribute, o.itemSize, e.FLOAT, !1, 0, 0), e.bufferSubData(e.ARRAY_BUFFER, 0, this._alphas), e.uniformMatrix4fv(n.pMatrixUniform, e.FALSE, this._projectionMatrix);

        for (var h = 0; h < this._batchTextureCount; h++) {
          var c = i._batchTextures[h];
          e.activeTexture(e.TEXTURE0 + h), e.bindTexture(e.TEXTURE_2D, c), i.setTextureParams(e, c.isPOT);
        }

        e.drawArrays(e.TRIANGLES, 0, this.batchCardCount * t.INDICIES_PER_CARD), this._batchID++;
      }
    }, e._drawCover = function (e, i) {
      this._isDrawing > 0 && this._drawBuffers(e), this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : Cover");
      var n = this._activeShader,
          r = this._vertexPositionBuffer,
          s = this._uvPositionBuffer;
      e.clear(e.COLOR_BUFFER_BIT), e.useProgram(n), e.bindBuffer(e.ARRAY_BUFFER, r), e.vertexAttribPointer(n.vertexPositionAttribute, r.itemSize, e.FLOAT, !1, 0, 0), e.bufferSubData(e.ARRAY_BUFFER, 0, t.COVER_VERT), e.bindBuffer(e.ARRAY_BUFFER, s), e.vertexAttribPointer(n.uvPositionAttribute, s.itemSize, e.FLOAT, !1, 0, 0), e.bufferSubData(e.ARRAY_BUFFER, 0, i ? t.COVER_UV_FLIP : t.COVER_UV), e.uniform1i(n.samplerUniform, 0), e.uniform1f(n.uprightUniform, i ? 0 : 1), e.drawArrays(e.TRIANGLES, 0, t.INDICIES_PER_CARD);
    }, n.StageGL = n.promote(t, "Stage");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.DisplayObject_constructor(), "string" == typeof t ? (this.image = document.createElement("img"), this.image.src = t) : this.image = t, this.sourceRect = null, this._webGLRenderStyle = n.DisplayObject._StageGL_BITMAP;
    }

    var e = n.extend(t, n.DisplayObject);
    e.initialize = t, e.isVisible = function () {
      var t = this.image,
          e = this.cacheCanvas || t && (t.naturalWidth || t.getContext || t.readyState >= 2);
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e);
    }, e.draw = function (t, e) {
      if (this.DisplayObject_draw(t, e)) return !0;
      var i = this.image,
          n = this.sourceRect;
      if (i.getImage && (i = i.getImage()), !i) return !0;

      if (n) {
        var r = n.x,
            s = n.y,
            a = r + n.width,
            o = s + n.height,
            h = 0,
            c = 0,
            u = i.width,
            l = i.height;
        r < 0 && (h -= r, r = 0), a > u && (a = u), s < 0 && (c -= s, s = 0), o > l && (o = l), t.drawImage(i, r, s, a - r, o - s, h, c, a - r, o - s);
      } else t.drawImage(i, 0, 0);

      return !0;
    }, e.getBounds = function () {
      var t = this.DisplayObject_getBounds();
      if (t) return t;
      var e = this.image,
          i = this.sourceRect || e,
          n = e && (e.naturalWidth || e.getContext || e.readyState >= 2);
      return n ? this._rectangle.setValues(0, 0, i.width, i.height) : null;
    }, e.clone = function (e) {
      var i = this.image;
      i && e && (i = i.cloneNode());
      var n = new t(i);
      return this.sourceRect && (n.sourceRect = this.sourceRect.clone()), this._cloneProps(n), n;
    }, e.toString = function () {
      return "[Bitmap (name=" + this.name + ")]";
    }, n.Bitmap = n.promote(t, "DisplayObject");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e) {
      this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = t, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, this._webGLRenderStyle = n.DisplayObject._StageGL_SPRITE, null != e && this.gotoAndPlay(e);
    }

    var e = n.extend(t, n.DisplayObject);
    e.initialize = t, e.isVisible = function () {
      var t = this.cacheCanvas || this.spriteSheet.complete;
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t);
    }, e.draw = function (t, e) {
      if (this.DisplayObject_draw(t, e)) return !0;

      this._normalizeFrame();

      var i = this.spriteSheet.getFrame(0 | this._currentFrame);
      if (!i) return !1;
      var n = i.rect;
      return n.width && n.height && t.drawImage(i.image, n.x, n.y, n.width, n.height, -i.regX, -i.regY, n.width, n.height), !0;
    }, e.play = function () {
      this.paused = !1;
    }, e.stop = function () {
      this.paused = !0;
    }, e.gotoAndPlay = function (t) {
      this.paused = !1, this._skipAdvance = !0, this._goto(t);
    }, e.gotoAndStop = function (t) {
      this.paused = !0, this._goto(t);
    }, e.advance = function (t) {
      var e = this.framerate || this.spriteSheet.framerate,
          i = e && null != t ? t / (1e3 / e) : 1;

      this._normalizeFrame(i);
    }, e.getBounds = function () {
      return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
    }, e.clone = function () {
      return this._cloneProps(new t(this.spriteSheet));
    }, e.toString = function () {
      return "[Sprite (name=" + this.name + ")]";
    }, e._cloneProps = function (t) {
      return this.DisplayObject__cloneProps(t), t.currentFrame = this.currentFrame, t.currentAnimation = this.currentAnimation, t.paused = this.paused, t.currentAnimationFrame = this.currentAnimationFrame, t.framerate = this.framerate, t._animation = this._animation, t._currentFrame = this._currentFrame, t._skipAdvance = this._skipAdvance, t;
    }, e._tick = function (t) {
      this.paused || (this._skipAdvance || this.advance(t && t.delta), this._skipAdvance = !1), this.DisplayObject__tick(t);
    }, e._normalizeFrame = function (t) {
      t = t || 0;
      var e,
          i = this._animation,
          n = this.paused,
          r = this._currentFrame;

      if (i) {
        var s = i.speed || 1,
            a = this.currentAnimationFrame;

        if (e = i.frames.length, a + t * s >= e) {
          var o = i.next;
          if (this._dispatchAnimationEnd(i, r, n, o, e - 1)) return;
          if (o) return this._goto(o, t - (e - a) / s);
          this.paused = !0, a = i.frames.length - 1;
        } else a += t * s;

        this.currentAnimationFrame = a, this._currentFrame = i.frames[0 | a];
      } else if (r = this._currentFrame += t, e = this.spriteSheet.getNumFrames(), r >= e && e > 0 && !this._dispatchAnimationEnd(i, r, n, e - 1) && (this._currentFrame -= e) >= e) return this._normalizeFrame();

      r = 0 | this._currentFrame, this.currentFrame != r && (this.currentFrame = r, this.dispatchEvent("change"));
    }, e._dispatchAnimationEnd = function (t, e, i, r, s) {
      var a = t ? t.name : null;

      if (this.hasEventListener("animationend")) {
        var o = new n.Event("animationend");
        o.name = a, o.next = r, this.dispatchEvent(o);
      }

      var h = this._animation != t || this._currentFrame != e;
      return h || i || !this.paused || (this.currentAnimationFrame = s, h = !0), h;
    }, e._goto = function (t, e) {
      if (this.currentAnimationFrame = 0, isNaN(t)) {
        var i = this.spriteSheet.getAnimation(t);
        i && (this._animation = i, this.currentAnimation = t, this._normalizeFrame(e));
      } else this.currentAnimation = this._animation = null, this._currentFrame = t, this._normalizeFrame();
    }, n.Sprite = n.promote(t, "DisplayObject");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.DisplayObject_constructor(), this.graphics = t ? t : new n.Graphics();
    }

    var e = n.extend(t, n.DisplayObject);
    e.isVisible = function () {
      var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t);
    }, e.draw = function (t, e) {
      return !!this.DisplayObject_draw(t, e) || (this.graphics.draw(t, this), !0);
    }, e.clone = function (e) {
      var i = e && this.graphics ? this.graphics.clone() : this.graphics;
      return this._cloneProps(new t(i));
    }, e.toString = function () {
      return "[Shape (name=" + this.name + ")]";
    }, n.Shape = n.promote(t, "DisplayObject");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i) {
      this.DisplayObject_constructor(), this.text = t, this.font = e, this.color = i, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null;
    }

    var e = n.extend(t, n.DisplayObject),
        i = n.createCanvas ? n.createCanvas() : document.createElement("canvas");
    i.getContext && (t._workingContext = i.getContext("2d"), i.width = i.height = 1), t.H_OFFSETS = {
      start: 0,
      left: 0,
      center: -.5,
      end: -1,
      right: -1
    }, t.V_OFFSETS = {
      top: 0,
      hanging: -.01,
      middle: -.4,
      alphabetic: -.8,
      ideographic: -.85,
      bottom: -1
    }, e.isVisible = function () {
      var t = this.cacheCanvas || null != this.text && "" !== this.text;
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t);
    }, e.draw = function (t, e) {
      if (this.DisplayObject_draw(t, e)) return !0;
      var i = this.color || "#000";
      return this.outline ? (t.strokeStyle = i, t.lineWidth = 1 * this.outline) : t.fillStyle = i, this._drawText(this._prepContext(t)), !0;
    }, e.getMeasuredWidth = function () {
      return this._getMeasuredWidth(this.text);
    }, e.getMeasuredLineHeight = function () {
      return 1.2 * this._getMeasuredWidth("M");
    }, e.getMeasuredHeight = function () {
      return this._drawText(null, {}).height;
    }, e.getBounds = function () {
      var e = this.DisplayObject_getBounds();
      if (e) return e;
      if (null == this.text || "" === this.text) return null;

      var i = this._drawText(null, {}),
          n = this.maxWidth && this.maxWidth < i.width ? this.maxWidth : i.width,
          r = n * t.H_OFFSETS[this.textAlign || "left"],
          s = this.lineHeight || this.getMeasuredLineHeight(),
          a = s * t.V_OFFSETS[this.textBaseline || "top"];

      return this._rectangle.setValues(r, a, n, i.height);
    }, e.getMetrics = function () {
      var e = {
        lines: []
      };
      return e.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), e.vOffset = e.lineHeight * t.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, e, e.lines);
    }, e.clone = function () {
      return this._cloneProps(new t(this.text, this.font, this.color));
    }, e.toString = function () {
      return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]";
    }, e._cloneProps = function (t) {
      return this.DisplayObject__cloneProps(t), t.textAlign = this.textAlign, t.textBaseline = this.textBaseline, t.maxWidth = this.maxWidth, t.outline = this.outline, t.lineHeight = this.lineHeight, t.lineWidth = this.lineWidth, t;
    }, e._prepContext = function (t) {
      return t.font = this.font || "10px sans-serif", t.textAlign = this.textAlign || "left", t.textBaseline = this.textBaseline || "top", t.lineJoin = "miter", t.miterLimit = 2.5, t;
    }, e._drawText = function (e, i, n) {
      var r = this,
          s = !!e;
      s || (e = t._workingContext, e.save(), this._prepContext(e));

      for (var a = this.lineHeight || this.getMeasuredLineHeight(), o = 0, h = 0, c = String(this.text).split(/(?:\r\n|\r|\n)/), u = 0, l = c.length; u < l; u++) {
        var d = c[u],
            f = null;

        if (null != r.lineWidth && (f = e.measureText(d).width) > r.lineWidth) {
          var p = d.split(/(\s)/);
          d = p[0], f = e.measureText(d).width;

          for (var _ = 1, v = p.length; _ < v; _ += 2) {
            var m = e.measureText(p[_] + p[_ + 1]).width;
            f + m > r.lineWidth ? (s && r._drawTextLine(e, d, h * a), n && n.push(d), f > o && (o = f), d = p[_ + 1], f = e.measureText(d).width, h++) : (d += p[_] + p[_ + 1], f += m);
          }
        }

        s && r._drawTextLine(e, d, h * a), n && n.push(d), i && null == f && (f = e.measureText(d).width), f > o && (o = f), h++;
      }

      return i && (i.width = o, i.height = h * a), s || e.restore(), i;
    }, e._drawTextLine = function (t, e, i) {
      this.outline ? t.strokeText(e, 0, i, this.maxWidth || 65535) : t.fillText(e, 0, i, this.maxWidth || 65535);
    }, e._getMeasuredWidth = function (e) {
      var i = t._workingContext;
      i.save();

      var n = this._prepContext(i).measureText(e).width;

      return i.restore(), n;
    }, n.Text = n.promote(t, "DisplayObject");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e) {
      this.Container_constructor(), this.text = t || "", this.spriteSheet = e, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
        text: 0,
        spriteSheet: 0,
        lineHeight: 0,
        letterSpacing: 0,
        spaceWidth: 0
      }, this._oldStage = null, this._drawAction = null;
    }

    var e = n.extend(t, n.Container);
    t.maxPoolSize = 100, t._spritePool = [], e.draw = function (t, e) {
      this.DisplayObject_draw(t, e) || (this._updateState(), this.Container_draw(t, e));
    }, e.getBounds = function () {
      return this._updateText(), this.Container_getBounds();
    }, e.isVisible = function () {
      var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
      return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && t);
    }, e.clone = function () {
      return this._cloneProps(new t(this.text, this.spriteSheet));
    }, e.addChild = e.addChildAt = e.removeChild = e.removeChildAt = e.removeAllChildren = function () {}, e._updateState = function () {
      this._updateText();
    }, e._cloneProps = function (t) {
      return this.Container__cloneProps(t), t.lineHeight = this.lineHeight, t.letterSpacing = this.letterSpacing, t.spaceWidth = this.spaceWidth, t;
    }, e._getFrameIndex = function (t, e) {
      var i,
          n = e.getAnimation(t);
      return n || (t != (i = t.toUpperCase()) || t != (i = t.toLowerCase()) || (i = null), i && (n = e.getAnimation(i))), n && n.frames[0];
    }, e._getFrame = function (t, e) {
      var i = this._getFrameIndex(t, e);

      return null == i ? i : e.getFrame(i);
    }, e._getLineHeight = function (t) {
      var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
      return e ? e.rect.height : 1;
    }, e._getSpaceWidth = function (t) {
      var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
      return e ? e.rect.width : 1;
    }, e._updateText = function () {
      var e,
          i = this,
          r = 0,
          s = 0,
          a = this._oldProps,
          o = !1,
          h = this.spaceWidth,
          c = this.lineHeight,
          u = this.spriteSheet,
          l = t._spritePool,
          d = this.children,
          f = 0,
          p = d.length;

      for (var _ in a) a[_] != i[_] && (a[_] = i[_], o = !0);

      if (o) {
        var v = !!this._getFrame(" ", u);
        v || h || (h = this._getSpaceWidth(u)), c || (c = this._getLineHeight(u));

        for (var m = 0, g = this.text.length; m < g; m++) {
          var x = i.text.charAt(m);
          if (" " != x || v) {
            if ("\n" != x && "\r" != x) {
              var b = i._getFrameIndex(x, u);

              null != b && (f < p ? e = d[f] : (d.push(e = l.length ? l.pop() : new n.Sprite()), e.parent = i, p++), e.spriteSheet = u, e.gotoAndStop(b), e.x = r, e.y = s, f++, r += e.getBounds().width + i.letterSpacing);
            } else "\r" == x && "\n" == i.text.charAt(m + 1) && m++, r = 0, s += c;
          } else r += h;
        }

        for (; p > f;) l.push(e = d.pop()), e.parent = null, p--;

        l.length > t.maxPoolSize && (l.length = t.maxPoolSize);
      }
    }, n.BitmapText = n.promote(t, "Container");
  }(), this.createjs = this.createjs || {}, function () {
    function t(e) {
      this.Container_constructor(), !t.inited && t.init();
      var i, r, s, a;
      e instanceof String || arguments.length > 1 ? (i = e, r = arguments[1], s = arguments[2], a = arguments[3], null == s && (s = -1), e = null) : e && (i = e.mode, r = e.startPosition, s = e.loop, a = e.labels), e || (e = {
        labels: a
      }), this.mode = i || t.INDEPENDENT, this.startPosition = r || 0, this.loop = s === !0 ? -1 : s || 0, this.currentFrame = 0, this.paused = e.paused || !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || e.frameBounds, this.framerate = null, e.useTicks = e.paused = !0, this.timeline = new n.Timeline(e), this._synchOffset = 0, this._rawPosition = -1, this._bound_resolveState = this._resolveState.bind(this), this._t = 0, this._managed = {};
    }

    function e() {
      throw "MovieClipPlugin cannot be instantiated.";
    }

    var i = n.extend(t, n.Container);
    t.INDEPENDENT = "independent", t.SINGLE_FRAME = "single", t.SYNCHED = "synched", t.inited = !1, t.init = function () {
      t.inited || (e.install(), t.inited = !0);
    }, i._getLabels = function () {
      return this.timeline.getLabels();
    }, i.getLabels = n.deprecate(i._getLabels, "MovieClip.getLabels"), i._getCurrentLabel = function () {
      return this.timeline.currentLabel;
    }, i.getCurrentLabel = n.deprecate(i._getCurrentLabel, "MovieClip.getCurrentLabel"), i._getDuration = function () {
      return this.timeline.duration;
    }, i.getDuration = n.deprecate(i._getDuration, "MovieClip.getDuration");

    try {
      Object.defineProperties(i, {
        labels: {
          get: i._getLabels
        },
        currentLabel: {
          get: i._getCurrentLabel
        },
        totalFrames: {
          get: i._getDuration
        },
        duration: {
          get: i._getDuration
        }
      });
    } catch (r) {}

    i.initialize = t, i.isVisible = function () {
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY);
    }, i.draw = function (t, e) {
      return !!this.DisplayObject_draw(t, e) || (this._updateState(), this.Container_draw(t, e), !0);
    }, i.play = function () {
      this.paused = !1;
    }, i.stop = function () {
      this.paused = !0;
    }, i.gotoAndPlay = function (t) {
      this.paused = !1, this._goto(t);
    }, i.gotoAndStop = function (t) {
      this.paused = !0, this._goto(t);
    }, i.advance = function (e) {
      var i = this,
          n = t.INDEPENDENT;

      if (this.mode === n) {
        for (var r = this, s = r.framerate; (r = r.parent) && null === s;) r.mode === n && (s = r._framerate);

        if (this._framerate = s, !this.paused) {
          var a = null !== s && s !== -1 && null !== e ? e / (1e3 / s) + this._t : 1,
              o = 0 | a;

          for (this._t = a - o; o--;) i._updateTimeline(i._rawPosition + 1, !1);
        }
      }
    }, i.clone = function () {
      throw "MovieClip cannot be cloned.";
    }, i.toString = function () {
      return "[MovieClip (name=" + this.name + ")]";
    }, i._updateState = function () {
      this._rawPosition !== -1 && this.mode === t.INDEPENDENT || this._updateTimeline(-1);
    }, i._tick = function (t) {
      this.advance(t && t.delta), this.Container__tick(t);
    }, i._goto = function (t) {
      var e = this.timeline.resolve(t);
      null != e && (this._t = 0, this._updateTimeline(e, !0));
    }, i._reset = function () {
      this._rawPosition = -1, this._t = this.currentFrame = 0, this.paused = !1;
    }, i._updateTimeline = function (e, i) {
      var n = this.mode !== t.INDEPENDENT,
          r = this.timeline;
      n && (e = this.startPosition + (this.mode === t.SINGLE_FRAME ? 0 : this._synchOffset)), e < 0 && (e = 0), (this._rawPosition !== e || n) && (this._rawPosition = e, r.loop = this.loop, r.setPosition(e, n || !this.actionsEnabled, i, this._bound_resolveState));
    }, i._renderFirstFrame = function () {
      var t = this.timeline,
          e = t.rawPosition;
      t.setPosition(0, !0, !0, this._bound_resolveState), t.rawPosition = e;
    }, i._resolveState = function () {
      var t = this,
          e = this.timeline;
      this.currentFrame = e.position;

      for (var i in this._managed) t._managed[i] = 1;

      for (var r = e.tweens, s = 0, a = r.length; s < a; s++) {
        var o = r[s],
            h = o.target;

        if (h !== t && !o.passive) {
          var c = o._stepPosition;
          h instanceof n.DisplayObject ? t._addManagedChild(h, c) : t._setState(h.state, c);
        }
      }

      var u = this.children;

      for (s = u.length - 1; s >= 0; s--) {
        var l = u[s].id;
        1 === t._managed[l] && (t.removeChildAt(s), delete t._managed[l]);
      }
    }, i._setState = function (t, e) {
      var i = this;
      if (t) for (var n = t.length - 1; n >= 0; n--) {
        var r = t[n],
            s = r.t,
            a = r.p;

        for (var o in a) s[o] = a[o];

        i._addManagedChild(s, e);
      }
    }, i._addManagedChild = function (e, i) {
      e._off || (this.addChildAt(e, 0), e instanceof t && (e._synchOffset = i, e.mode === t.INDEPENDENT && e.autoReset && !this._managed[e.id] && e._reset()), this._managed[e.id] = 2);
    }, i._getBounds = function (t, e) {
      var i = this.DisplayObject_getBounds();
      return i || this.frameBounds && (i = this._rectangle.copy(this.frameBounds[this.currentFrame])), i ? this._transformBounds(i, t, e) : this.Container__getBounds(t, e);
    }, n.MovieClip = n.promote(t, "Container"), e.priority = 100, e.ID = "MovieClip", e.install = function () {
      n.Tween._installPlugin(e);
    }, e.init = function (i, n, r) {
      "startPosition" === n && i.target instanceof t && i._addPlugin(e);
    }, e.step = function (t, e, i) {}, e.change = function (t, e, i, n, r, s) {
      if ("startPosition" === i) return 1 === r ? e.props[i] : e.prev.props[i];
    };
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      throw "SpriteSheetUtils cannot be instantiated";
    }

    var e = n.createCanvas ? n.createCanvas() : document.createElement("canvas");
    e.getContext && (t._workingCanvas = e, t._workingContext = e.getContext("2d"), e.width = e.height = 1), t.extractFrame = function (e, i) {
      isNaN(i) && (i = e.getAnimation(i).frames[0]);
      var n = e.getFrame(i);
      if (!n) return null;
      var r = n.rect,
          s = t._workingCanvas;
      s.width = r.width, s.height = r.height, t._workingContext.drawImage(n.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
      var a = document.createElement("img");
      return a.src = s.toDataURL("image/png"), a;
    }, t.addFlippedFrames = n.deprecate(null, "SpriteSheetUtils.addFlippedFrames"), t.mergeAlpha = n.deprecate(null, "SpriteSheetUtils.mergeAlpha"), t._flip = function (e, i, n, r) {
      for (var s = e._images, a = t._workingCanvas, o = t._workingContext, h = s.length / i, c = 0; c < h; c++) {
        var u = s[c];
        u.__tmp = c, o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, a.width + 1, a.height + 1), a.width = u.width, a.height = u.height, o.setTransform(n ? -1 : 1, 0, 0, r ? -1 : 1, n ? u.width : 0, r ? u.height : 0), o.drawImage(u, 0, 0);
        var l = document.createElement("img");
        l.src = a.toDataURL("image/png"), l.width = u.width || u.naturalWidth, l.height = u.height || u.naturalHeight, s.push(l);
      }

      var d = e._frames,
          f = d.length / i;

      for (c = 0; c < f; c++) {
        u = d[c];
        var p = u.rect.clone();
        l = s[u.image.__tmp + h * i];
        var _ = {
          image: l,
          rect: p,
          regX: u.regX,
          regY: u.regY
        };
        n && (p.x = (l.width || l.naturalWidth) - p.x - p.width, _.regX = p.width - u.regX), r && (p.y = (l.height || l.naturalHeight) - p.y - p.height, _.regY = p.height - u.regY), d.push(_);
      }

      var v = "_" + (n ? "h" : "") + (r ? "v" : ""),
          m = e._animations,
          g = e._data,
          x = m.length / i;

      for (c = 0; c < x; c++) {
        var b = m[c];
        u = g[b];
        var w = {
          name: b + v,
          speed: u.speed,
          next: u.next,
          frames: []
        };
        u.next && (w.next += v), d = u.frames;

        for (var y = 0, E = d.length; y < E; y++) w.frames.push(d[y] + f * i);

        g[w.name] = w, m.push(w.name);
      }
    }, n.SpriteSheetUtils = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this.framerate = t || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1;
    }

    var e = n.extend(t, n.EventDispatcher);
    t.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", t.ERR_RUNNING = "a build is already running", e.addFrame = function (e, i, n, r, s) {
      if (this._data) throw t.ERR_RUNNING;
      var a = i || e.bounds || e.nominalBounds;
      return !a && e.getBounds && (a = e.getBounds()), a ? (n = n || 1, this._frames.push({
        source: e,
        sourceRect: a,
        scale: n,
        funct: r,
        data: s,
        index: this._frames.length,
        height: a.height * n
      }) - 1) : null;
    }, e.addAnimation = function (e, i, n, r) {
      if (this._data) throw t.ERR_RUNNING;
      this._animations[e] = {
        frames: i,
        next: n,
        speed: r
      };
    }, e.addMovieClip = function (e, i, n, r, s, a) {
      var o = this;
      if (this._data) throw t.ERR_RUNNING;
      var h = e.frameBounds,
          c = i || e.bounds || e.nominalBounds;

      if (!c && e.getBounds && (c = e.getBounds()), c || h) {
        var u,
            l,
            d = this._frames.length,
            f = e.timeline.duration;

        for (u = 0; u < f; u++) {
          var p = h && h[u] ? h[u] : c;
          o.addFrame(e, p, n, o._setupMovieClipFrame, {
            i: u,
            f: r,
            d: s
          });
        }

        var _ = e.timeline._labels,
            v = [];

        for (var m in _) v.push({
          index: _[m],
          label: m
        });

        if (v.length) for (v.sort(function (t, e) {
          return t.index - e.index;
        }), u = 0, l = v.length; u < l; u++) {
          for (var g = v[u].label, x = d + v[u].index, b = d + (u == l - 1 ? f : v[u + 1].index), w = [], y = x; y < b; y++) w.push(y);

          a && !(g = a(g, e, x, b)) || o.addAnimation(g, w, !0);
        }
      }
    }, e.build = function () {
      if (this._data) throw t.ERR_RUNNING;

      for (this._startBuild(); this._drawNext(););

      return this._endBuild(), this.spriteSheet;
    }, e.buildAsync = function (e) {
      if (this._data) throw t.ERR_RUNNING;
      this.timeSlice = e, this._startBuild();
      var i = this;
      this._timerID = setTimeout(function () {
        i._run();
      }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)));
    }, e.stopAsync = function () {
      clearTimeout(this._timerID), this._data = null;
    }, e.clone = function () {
      throw "SpriteSheetBuilder cannot be cloned.";
    }, e.toString = function () {
      return "[SpriteSheetBuilder]";
    }, e._startBuild = function () {
      var e = this,
          i = this.padding || 0;
      this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
      var r = [];
      this._data = {
        images: [],
        frames: r,
        framerate: this.framerate,
        animations: this._animations
      };

      var s = this._frames.slice();

      if (s.sort(function (t, e) {
        return t.height <= e.height ? -1 : 1;
      }), s[s.length - 1].height + 2 * i > this.maxHeight) throw t.ERR_DIMENSIONS;

      for (var a = 0, o = 0, h = 0; s.length;) {
        var c = e._fillRow(s, a, h, r, i);

        if (c.w > o && (o = c.w), a += c.h, !c.h || !s.length) {
          var u = n.createCanvas ? n.createCanvas() : document.createElement("canvas");
          u.width = e._getSize(o, e.maxWidth), u.height = e._getSize(a, e.maxHeight), e._data.images[h] = u, c.h || (o = a = 0, h++);
        }
      }
    }, e._setupMovieClipFrame = function (t, e) {
      var i = t.actionsEnabled;
      t.actionsEnabled = !1, t.gotoAndStop(e.i), t.actionsEnabled = i, e.f && e.f(t, e.d, e.i);
    }, e._getSize = function (t, e) {
      for (var i = 4; Math.pow(2, ++i) < t;);

      return Math.min(e, Math.pow(2, i));
    }, e._fillRow = function (e, i, r, s, a) {
      var o = this,
          h = this.maxWidth,
          c = this.maxHeight;
      i += a;

      for (var u = c - i, l = a, d = 0, f = e.length - 1; f >= 0; f--) {
        var p = e[f],
            _ = o._scale * p.scale,
            v = p.sourceRect,
            m = p.source,
            g = Math.floor(_ * v.x - a),
            x = Math.floor(_ * v.y - a),
            b = Math.ceil(_ * v.height + 2 * a),
            w = Math.ceil(_ * v.width + 2 * a);

        if (w > h) throw t.ERR_DIMENSIONS;
        b > u || l + w > h || (p.img = r, p.rect = new n.Rectangle(l, i, w, b), d = d || b, e.splice(f, 1), s[p.index] = [l, i, w, b, r, Math.round(-g + _ * m.regX - a), Math.round(-x + _ * m.regY - a)], l += w);
      }

      return {
        w: l,
        h: d
      };
    }, e._endBuild = function () {
      this.spriteSheet = new n.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete");
    }, e._run = function () {
      for (var t = this, e = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), i = new Date().getTime() + e, r = !1; i > new Date().getTime();) if (!t._drawNext()) {
        r = !0;
        break;
      }

      if (r) this._endBuild();else {
        var s = this;
        this._timerID = setTimeout(function () {
          s._run();
        }, 50 - e);
      }
      var a = this.progress = this._index / this._frames.length;

      if (this.hasEventListener("progress")) {
        var o = new n.Event("progress");
        o.progress = a, this.dispatchEvent(o);
      }
    }, e._drawNext = function () {
      var t = this._frames[this._index],
          e = t.scale * this._scale,
          i = t.rect,
          n = t.sourceRect,
          r = this._data.images[t.img],
          s = r.getContext("2d");
      return t.funct && t.funct(t.source, t.data), s.save(), s.beginPath(), s.rect(i.x, i.y, i.width, i.height), s.clip(), s.translate(Math.ceil(i.x - n.x * e), Math.ceil(i.y - n.y * e)), s.scale(e, e), t.source.draw(s), s.restore(), ++this._index < this._frames.length;
    }, n.SpriteSheetBuilder = n.promote(t, "EventDispatcher");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.DisplayObject_constructor(), "string" == typeof t && (t = document.getElementById(t)), this.mouseEnabled = !1;
      var e = t.style;
      e.position = "absolute", e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%", this.htmlElement = t, this._oldProps = null, this._oldStage = null, this._drawAction = null;
    }

    var e = n.extend(t, n.DisplayObject);
    e.isVisible = function () {
      return null != this.htmlElement;
    }, e.draw = function (t, e) {
      return !0;
    }, e.cache = function () {}, e.uncache = function () {}, e.updateCache = function () {}, e.hitTest = function () {}, e.localToGlobal = function () {}, e.globalToLocal = function () {}, e.localToLocal = function () {}, e.clone = function () {
      throw "DOMElement cannot be cloned.";
    }, e.toString = function () {
      return "[DOMElement (name=" + this.name + ")]";
    }, e._tick = function (t) {
      var e = this.stage;
      e && e !== this._oldStage && (this._drawAction && e.off("drawend", this._drawAction), this._drawAction = e.on("drawend", this._handleDrawEnd, this), this._oldStage = e), this.DisplayObject__tick(t);
    }, e._handleDrawEnd = function (t) {
      var e = this.htmlElement;

      if (e) {
        var i = e.style,
            r = this.getConcatenatedDisplayProps(this._props),
            s = r.matrix,
            a = r.visible ? "visible" : "hidden";

        if (a != i.visibility && (i.visibility = a), r.visible) {
          var o = this._oldProps,
              h = o && o.matrix,
              c = 1e4;

          if (!h || !h.equals(s)) {
            var u = "matrix(" + (s.a * c | 0) / c + "," + (s.b * c | 0) / c + "," + (s.c * c | 0) / c + "," + (s.d * c | 0) / c + "," + (s.tx + .5 | 0);
            i.transform = i.WebkitTransform = i.OTransform = i.msTransform = u + "," + (s.ty + .5 | 0) + ")", i.MozTransform = u + "px," + (s.ty + .5 | 0) + "px)", o || (o = this._oldProps = new n.DisplayProps(!0, null)), o.matrix.copy(s);
          }

          o.alpha != r.alpha && (i.opacity = "" + (r.alpha * c | 0) / c, o.alpha = r.alpha);
        }
      }
    }, n.DOMElement = n.promote(t, "DisplayObject");
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      this.usesContext = !1, this._multiPass = null, this.VTX_SHADER_BODY = null, this.FRAG_SHADER_BODY = null;
    }

    var e = t.prototype;
    e.getBounds = function (t) {
      return t;
    }, e.shaderParamSetup = function (t, e, i) {}, e.applyFilter = function (t, e, i, n, r, s, a, o) {
      s = s || t, null == a && (a = e), null == o && (o = i);

      try {
        var h = t.getImageData(e, i, n, r);
      } catch (c) {
        return !1;
      }

      return !!this._applyFilter(h) && (s.putImageData(h, a, o), !0);
    }, e.toString = function () {
      return "[Filter]";
    }, e.clone = function () {
      return new t();
    }, e._applyFilter = function (t) {
      return !0;
    }, n.Filter = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      this.width = void 0, this.height = void 0, this.x = void 0, this.y = void 0, this.scale = 1, this.offX = 0, this.offY = 0, this.cacheID = 0, this._filterOffX = 0, this._filterOffY = 0, this._cacheDataURLID = 0, this._cacheDataURL = null, this._drawWidth = 0, this._drawHeight = 0;
    }

    var e = t.prototype;
    t.getFilterBounds = function (t, e) {
      e || (e = new n.Rectangle());
      var i = t.filters,
          r = i && i.length;
      if (!!r <= 0) return e;

      for (var s = 0; s < r; s++) {
        var a = i[s];

        if (a && a.getBounds) {
          var o = a.getBounds();
          o && (0 == s ? e.setValues(o.x, o.y, o.width, o.height) : e.extend(o.x, o.y, o.width, o.height));
        }
      }

      return e;
    }, e.toString = function () {
      return "[BitmapCache]";
    }, e.define = function (t, e, i, n, r, s, a) {
      if (!t) throw "No symbol to cache";
      this._options = a, this.target = t, this.width = n >= 1 ? n : 1, this.height = r >= 1 ? r : 1, this.x = e || 0, this.y = i || 0, this.scale = s || 1, this.update();
    }, e.update = function (e) {
      if (!this.target) throw "define() must be called before update()";
      var i = t.getFilterBounds(this.target),
          n = this.target.cacheCanvas;
      this._drawWidth = Math.ceil(this.width * this.scale) + i.width, this._drawHeight = Math.ceil(this.height * this.scale) + i.height, n && this._drawWidth == n.width && this._drawHeight == n.height || this._updateSurface(), this._filterOffX = i.x, this._filterOffY = i.y, this.offX = this.x * this.scale + this._filterOffX, this.offY = this.y * this.scale + this._filterOffY, this._drawToCache(e), this.cacheID = this.cacheID ? this.cacheID + 1 : 1;
    }, e.release = function () {
      if (this._webGLCache) this._webGLCache.isCacheControlled || (this.__lastRT && (this.__lastRT = void 0), this.__rtA && this._webGLCache._killTextureObject(this.__rtA), this.__rtB && this._webGLCache._killTextureObject(this.__rtB), this.target && this.target.cacheCanvas && this._webGLCache._killTextureObject(this.target.cacheCanvas)), this._webGLCache = !1;else {
        var t = this.target.stage;
        t instanceof n.StageGL && t.releaseTexture(this.target.cacheCanvas);
      }
      this.target = this.target.cacheCanvas = null, this.cacheID = this._cacheDataURLID = this._cacheDataURL = void 0, this.width = this.height = this.x = this.y = this.offX = this.offY = 0, this.scale = 1;
    }, e.getCacheDataURL = function () {
      var t = this.target && this.target.cacheCanvas;
      return t ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURLID = this.cacheID, this._cacheDataURL = t.toDataURL ? t.toDataURL() : null), this._cacheDataURL) : null;
    }, e.draw = function (t) {
      return !!this.target && (t.drawImage(this.target.cacheCanvas, this.x + this._filterOffX / this.scale, this.y + this._filterOffY / this.scale, this._drawWidth / this.scale, this._drawHeight / this.scale), !0);
    }, e._updateSurface = function () {
      if (!this._options || !this._options.useGL) {
        var t = this.target.cacheCanvas;
        return t || (t = this.target.cacheCanvas = n.createCanvas ? n.createCanvas() : document.createElement("canvas")), t.width = this._drawWidth, void (t.height = this._drawHeight);
      }

      if (!this._webGLCache) if ("stage" === this._options.useGL) {
        if (!this.target.stage || !this.target.stage.isWebGL) {
          var e = "Cannot use 'stage' for cache because the object's parent stage is ";
          throw e += this.target.stage ? "non WebGL." : "not set, please addChild to the correct stage.";
        }

        this.target.cacheCanvas = !0, this._webGLCache = this.target.stage;
      } else if ("new" === this._options.useGL) this.target.cacheCanvas = document.createElement("canvas"), this._webGLCache = new n.StageGL(this.target.cacheCanvas, {
        antialias: !0,
        transparent: !0,
        autoPurge: -1
      }), this._webGLCache.isCacheControlled = !0;else {
        if (!(this._options.useGL instanceof n.StageGL)) throw "Invalid option provided to useGL, expected ['stage', 'new', StageGL, undefined], got " + this._options.useGL;
        this.target.cacheCanvas = !0, this._webGLCache = this._options.useGL, this._webGLCache.isCacheControlled = !0;
      }
      var t = this.target.cacheCanvas,
          i = this._webGLCache;
      i.isCacheControlled && (t.width = this._drawWidth, t.height = this._drawHeight, i.updateViewport(this._drawWidth, this._drawHeight)), this.target.filters ? (i.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight), i.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight)) : i.isCacheControlled || i.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight);
    }, e._drawToCache = function (t) {
      var e = this.target.cacheCanvas,
          i = this.target,
          n = this._webGLCache;
      if (n) n.cacheDraw(i, i.filters, this), e = this.target.cacheCanvas, e.width = this._drawWidth, e.height = this._drawHeight;else {
        var r = e.getContext("2d");
        t || r.clearRect(0, 0, this._drawWidth + 1, this._drawHeight + 1), r.save(), r.globalCompositeOperation = t, r.setTransform(this.scale, 0, 0, this.scale, -this._filterOffX, -this._filterOffY), r.translate(-this.x, -this.y), i.draw(r, !0), r.restore(), i.filters && i.filters.length && this._applyFilters(r);
      }
      e._invalid = !0;
    }, e._applyFilters = function (t) {
      var e,
          i = this.target.filters,
          n = this._drawWidth,
          r = this._drawHeight,
          s = 0,
          a = i[s];

      do a.usesContext ? (e && (t.putImageData(e, 0, 0), e = null), a.applyFilter(t, 0, 0, n, r)) : (e || (e = t.getImageData(0, 0, n, r)), a._applyFilter(e)), a = null !== a._multiPass ? a._multiPass : i[++s]; while (a);

      e && t.putImageData(e, 0, 0);
    }, n.BitmapCache = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i) {
      this.Filter_constructor(), this._blurX = t, this._blurXTable = [], this._lastBlurX = null, this._blurY = e, this._blurYTable = [], this._lastBlurY = null, this._quality, this._lastQuality = null, this.FRAG_SHADER_TEMPLATE = "uniform float xWeight[{{blurX}}];uniform float yWeight[{{blurY}}];uniform vec2 textureOffset;void main(void) {vec4 color = vec4(0.0);float xAdj = ({{blurX}}.0-1.0)/2.0;float yAdj = ({{blurY}}.0-1.0)/2.0;vec2 sampleOffset;for(int i=0; i<{{blurX}}; i++) {for(int j=0; j<{{blurY}}; j++) {sampleOffset = vRenderCoord + (textureOffset * vec2(float(i)-xAdj, float(j)-yAdj));color += texture2D(uSampler, sampleOffset) * (xWeight[i] * yWeight[j]);}}gl_FragColor = color.rgba;}", (isNaN(i) || i < 1) && (i = 1), this.setQuality(0 | i);
    }

    var e = n.extend(t, n.Filter);
    e.getBlurX = function () {
      return this._blurX;
    }, e.getBlurY = function () {
      return this._blurY;
    }, e.setBlurX = function (t) {
      (isNaN(t) || t < 0) && (t = 0), this._blurX = t;
    }, e.setBlurY = function (t) {
      (isNaN(t) || t < 0) && (t = 0), this._blurY = t;
    }, e.getQuality = function () {
      return this._quality;
    }, e.setQuality = function (t) {
      (isNaN(t) || t < 0) && (t = 0), this._quality = 0 | t;
    }, e._getShader = function () {
      var t = this._lastBlurX !== this._blurX,
          e = this._lastBlurY !== this._blurY,
          i = this._lastQuality !== this._quality;
      return t || e || i ? ((t || i) && (this._blurXTable = this._getTable(this._blurX * this._quality)), (e || i) && (this._blurYTable = this._getTable(this._blurY * this._quality)), this._updateShader(), this._lastBlurX = this._blurX, this._lastBlurY = this._blurY, void (this._lastQuality = this._quality)) : this._compiledShader;
    }, e._setShader = function () {
      this._compiledShader;
    };

    try {
      Object.defineProperties(e, {
        blurX: {
          get: e.getBlurX,
          set: e.setBlurX
        },
        blurY: {
          get: e.getBlurY,
          set: e.setBlurY
        },
        quality: {
          get: e.getQuality,
          set: e.setQuality
        },
        _builtShader: {
          get: e._getShader,
          set: e._setShader
        }
      });
    } catch (i) {
      console.log(i);
    }

    e._getTable = function (t) {
      var e = 4.2;
      if (t <= 1) return [1];
      var i = [],
          n = Math.ceil(2 * t);
      n += n % 2 ? 0 : 1;

      for (var r = n / 2 | 0, s = -r; s <= r; s++) {
        var a = s / r * e;
        i.push(1 / Math.sqrt(2 * Math.PI) * Math.pow(Math.E, -(Math.pow(a, 2) / 4)));
      }

      var o = i.reduce(function (t, e) {
        return t + e;
      });
      return i.map(function (t, e, i) {
        return t / o;
      });
    }, e._updateShader = function () {
      if (void 0 !== this._blurX && void 0 !== this._blurY) {
        var t = this.FRAG_SHADER_TEMPLATE;
        t = t.replace(/\{\{blurX\}\}/g, this._blurXTable.length.toFixed(0)), t = t.replace(/\{\{blurY\}\}/g, this._blurYTable.length.toFixed(0)), this.FRAG_SHADER_BODY = t;
      }
    }, e.shaderParamSetup = function (t, e, i) {
      t.uniform1fv(t.getUniformLocation(i, "xWeight"), this._blurXTable), t.uniform1fv(t.getUniformLocation(i, "yWeight"), this._blurYTable), t.uniform2f(t.getUniformLocation(i, "textureOffset"), 2 / (e._viewportWidth * this._quality), 2 / (e._viewportHeight * this._quality));
    }, t.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], t.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], e.getBounds = function (t) {
      var e = 0 | this.blurX,
          i = 0 | this.blurY;
      if (e <= 0 && i <= 0) return t;
      var r = Math.pow(this.quality, .2);
      return (t || new n.Rectangle()).pad(i * r + 1, e * r + 1, i * r + 1, e * r + 1);
    }, e.clone = function () {
      return new t(this.blurX, this.blurY, this.quality);
    }, e.toString = function () {
      return "[BlurFilter]";
    }, e._applyFilter = function (e) {
      var i = this._blurX >> 1;
      if (isNaN(i) || i < 0) return !1;
      var n = this._blurY >> 1;
      if (isNaN(n) || n < 0) return !1;
      if (0 == i && 0 == n) return !1;
      var r = this.quality;
      (isNaN(r) || r < 1) && (r = 1), r |= 0, r > 3 && (r = 3), r < 1 && (r = 1);
      var s = e.data,
          a = 0,
          o = 0,
          h = 0,
          c = 0,
          u = 0,
          l = 0,
          d = 0,
          f = 0,
          p = 0,
          _ = 0,
          v = 0,
          m = 0,
          g = 0,
          x = 0,
          b = 0,
          w = i + i + 1 | 0,
          y = n + n + 1 | 0,
          E = 0 | e.width,
          T = 0 | e.height,
          C = E - 1 | 0,
          S = T - 1 | 0,
          R = i + 1 | 0,
          A = n + 1 | 0,
          D = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      },
          M = D;

      for (h = 1; h < w; h++) M = M.n = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      };

      M.n = D;
      var I = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      },
          P = I;

      for (h = 1; h < y; h++) P = P.n = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      };

      P.n = I;

      for (var O = null, F = 0 | t.MUL_TABLE[i], L = 0 | t.SHG_TABLE[i], B = 0 | t.MUL_TABLE[n], j = 0 | t.SHG_TABLE[n]; r-- > 0;) {
        d = l = 0;
        var k = F,
            U = L;

        for (o = T; --o > -1;) {
          for (f = R * (m = s[0 | l]), p = R * (g = s[l + 1 | 0]), _ = R * (x = s[l + 2 | 0]), v = R * (b = s[l + 3 | 0]), M = D, h = R; --h > -1;) M.r = m, M.g = g, M.b = x, M.a = b, M = M.n;

          for (h = 1; h < R; h++) c = l + ((C < h ? C : h) << 2) | 0, f += M.r = s[c], p += M.g = s[c + 1], _ += M.b = s[c + 2], v += M.a = s[c + 3], M = M.n;

          for (O = D, a = 0; a < E; a++) s[l++] = f * k >>> U, s[l++] = p * k >>> U, s[l++] = _ * k >>> U, s[l++] = v * k >>> U, c = d + ((c = a + i + 1) < C ? c : C) << 2, f -= O.r - (O.r = s[c]), p -= O.g - (O.g = s[c + 1]), _ -= O.b - (O.b = s[c + 2]), v -= O.a - (O.a = s[c + 3]), O = O.n;

          d += E;
        }

        for (k = B, U = j, a = 0; a < E; a++) {
          for (l = a << 2 | 0, f = A * (m = s[l]) | 0, p = A * (g = s[l + 1 | 0]) | 0, _ = A * (x = s[l + 2 | 0]) | 0, v = A * (b = s[l + 3 | 0]) | 0, P = I, h = 0; h < A; h++) P.r = m, P.g = g, P.b = x, P.a = b, P = P.n;

          for (u = E, h = 1; h <= n; h++) l = u + a << 2, f += P.r = s[l], p += P.g = s[l + 1], _ += P.b = s[l + 2], v += P.a = s[l + 3], P = P.n, h < S && (u += E);

          if (l = a, O = I, r > 0) for (o = 0; o < T; o++) c = l << 2, s[c + 3] = b = v * k >>> U, b > 0 ? (s[c] = f * k >>> U, s[c + 1] = p * k >>> U, s[c + 2] = _ * k >>> U) : s[c] = s[c + 1] = s[c + 2] = 0, c = a + ((c = o + A) < S ? c : S) * E << 2, f -= O.r - (O.r = s[c]), p -= O.g - (O.g = s[c + 1]), _ -= O.b - (O.b = s[c + 2]), v -= O.a - (O.a = s[c + 3]), O = O.n, l += E;else for (o = 0; o < T; o++) c = l << 2, s[c + 3] = b = v * k >>> U, b > 0 ? (b = 255 / b, s[c] = (f * k >>> U) * b, s[c + 1] = (p * k >>> U) * b, s[c + 2] = (_ * k >>> U) * b) : s[c] = s[c + 1] = s[c + 2] = 0, c = a + ((c = o + A) < S ? c : S) * E << 2, f -= O.r - (O.r = s[c]), p -= O.g - (O.g = s[c + 1]), _ -= O.b - (O.b = s[c + 2]), v -= O.a - (O.a = s[c + 3]), O = O.n, l += E;
        }
      }

      return !0;
    }, n.BlurFilter = n.promote(t, "Filter");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.Filter_constructor(), this.alphaMap = t, this._alphaMap = null, this._mapData = null, this._mapTexture = null, this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * (alphaMap.r * ceil(alphaMap.a)));}";
    }

    var e = n.extend(t, n.Filter);
    e.shaderParamSetup = function (t, e, i) {
      this._mapTexture || (this._mapTexture = t.createTexture()), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this._mapTexture), e.setTextureParams(t), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.alphaMap), t.uniform1i(t.getUniformLocation(i, "uAlphaSampler"), 1);
    }, e.clone = function () {
      var e = new t(this.alphaMap);
      return e._alphaMap = this._alphaMap, e._mapData = this._mapData, e;
    }, e.toString = function () {
      return "[AlphaMapFilter]";
    }, e._applyFilter = function (t) {
      if (!this.alphaMap) return !0;
      if (!this._prepAlphaMap()) return !1;

      for (var e = t.data, i = this._mapData, n = 0, r = e.length; n < r; n += 4) e[n + 3] = i[n] || 0;

      return !0;
    }, e._prepAlphaMap = function () {
      if (!this.alphaMap) return !1;
      if (this.alphaMap == this._alphaMap && this._mapData) return !0;
      this._mapData = null;
      var t,
          e = this._alphaMap = this.alphaMap,
          i = e;
      e instanceof HTMLCanvasElement ? t = i.getContext("2d") : (i = n.createCanvas ? n.createCanvas() : document.createElement("canvas"), i.width = e.width, i.height = e.height, t = i.getContext("2d"), t.drawImage(e, 0, 0));

      try {
        var r = t.getImageData(0, 0, e.width, e.height);
      } catch (s) {
        return !1;
      }

      return this._mapData = r.data, !0;
    }, n.AlphaMapFilter = n.promote(t, "Filter");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.Filter_constructor(), this.mask = t, this.usesContext = !0, this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * alphaMap.a);}";
    }

    var e = n.extend(t, n.Filter);
    e.shaderParamSetup = function (t, e, i) {
      this._mapTexture || (this._mapTexture = t.createTexture()), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this._mapTexture), e.setTextureParams(t), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.mask), t.uniform1i(t.getUniformLocation(i, "uAlphaSampler"), 1);
    }, e.applyFilter = function (t, e, i, n, r, s, a, o) {
      return !this.mask || (s = s || t, null == a && (a = e), null == o && (o = i), s.save(), t == s && (s.globalCompositeOperation = "destination-in", s.drawImage(this.mask, a, o), s.restore(), !0));
    }, e.clone = function () {
      return new t(this.mask);
    }, e.toString = function () {
      return "[AlphaMaskFilter]";
    }, n.AlphaMaskFilter = n.promote(t, "Filter");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i, n, r, s, a, o) {
      this.Filter_constructor(), this.redMultiplier = null != t ? t : 1, this.greenMultiplier = null != e ? e : 1, this.blueMultiplier = null != i ? i : 1, this.alphaMultiplier = null != n ? n : 1, this.redOffset = r || 0, this.greenOffset = s || 0, this.blueOffset = a || 0, this.alphaOffset = o || 0, this.FRAG_SHADER_BODY = "uniform vec4 uColorMultiplier;uniform vec4 uColorOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = (color * uColorMultiplier) + uColorOffset;}";
    }

    var e = n.extend(t, n.Filter);
    e.shaderParamSetup = function (t, e, i) {
      t.uniform4f(t.getUniformLocation(i, "uColorMultiplier"), this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier), t.uniform4f(t.getUniformLocation(i, "uColorOffset"), this.redOffset / 255, this.greenOffset / 255, this.blueOffset / 255, this.alphaOffset / 255);
    }, e.toString = function () {
      return "[ColorFilter]";
    }, e.clone = function () {
      return new t(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
    }, e._applyFilter = function (t) {
      for (var e = this, i = t.data, n = i.length, r = 0; r < n; r += 4) i[r] = i[r] * e.redMultiplier + e.redOffset, i[r + 1] = i[r + 1] * e.greenMultiplier + e.greenOffset, i[r + 2] = i[r + 2] * e.blueMultiplier + e.blueOffset, i[r + 3] = i[r + 3] * e.alphaMultiplier + e.alphaOffset;

      return !0;
    }, n.ColorFilter = n.promote(t, "Filter");
  }(), this.createjs = this.createjs || {}, function () {
    function t(t, e, i, n) {
      this.setColor(t, e, i, n);
    }

    var e = t.prototype;
    t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], t.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t.LENGTH = t.IDENTITY_MATRIX.length, e.setColor = function (t, e, i, n) {
      return this.reset().adjustColor(t, e, i, n);
    }, e.reset = function () {
      return this.copy(t.IDENTITY_MATRIX);
    }, e.adjustColor = function (t, e, i, n) {
      return this.adjustHue(n), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i);
    }, e.adjustBrightness = function (t) {
      return 0 == t || isNaN(t) ? this : (t = this._cleanValue(t, 255), this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this);
    }, e.adjustContrast = function (e) {
      if (0 == e || isNaN(e)) return this;
      e = this._cleanValue(e, 100);
      var i;
      return e < 0 ? i = 127 + e / 100 * 127 : (i = e % 1, i = 0 == i ? t.DELTA_INDEX[e] : t.DELTA_INDEX[e << 0] * (1 - i) + t.DELTA_INDEX[(e << 0) + 1] * i, i = 127 * i + 127), this._multiplyMatrix([i / 127, 0, 0, 0, .5 * (127 - i), 0, i / 127, 0, 0, .5 * (127 - i), 0, 0, i / 127, 0, .5 * (127 - i), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
    }, e.adjustSaturation = function (t) {
      if (0 == t || isNaN(t)) return this;
      t = this._cleanValue(t, 100);
      var e = 1 + (t > 0 ? 3 * t / 100 : t / 100),
          i = .3086,
          n = .6094,
          r = .082;
      return this._multiplyMatrix([i * (1 - e) + e, n * (1 - e), r * (1 - e), 0, 0, i * (1 - e), n * (1 - e) + e, r * (1 - e), 0, 0, i * (1 - e), n * (1 - e), r * (1 - e) + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
    }, e.adjustHue = function (t) {
      if (0 == t || isNaN(t)) return this;
      t = this._cleanValue(t, 180) / 180 * Math.PI;
      var e = Math.cos(t),
          i = Math.sin(t),
          n = .213,
          r = .715,
          s = .072;
      return this._multiplyMatrix([n + e * (1 - n) + i * -n, r + e * -r + i * -r, s + e * -s + i * (1 - s), 0, 0, n + e * -n + .143 * i, r + e * (1 - r) + .14 * i, s + e * -s + i * -.283, 0, 0, n + e * -n + i * -(1 - n), r + e * -r + i * r, s + e * (1 - s) + i * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
    }, e.concat = function (e) {
      return e = this._fixMatrix(e), e.length != t.LENGTH ? this : (this._multiplyMatrix(e), this);
    }, e.clone = function () {
      return new t().copy(this);
    }, e.toArray = function () {
      for (var e = this, i = [], n = 0, r = t.LENGTH; n < r; n++) i[n] = e[n];

      return i;
    }, e.copy = function (e) {
      for (var i = this, n = t.LENGTH, r = 0; r < n; r++) i[r] = e[r];

      return this;
    }, e.toString = function () {
      return "[ColorMatrix]";
    }, e._multiplyMatrix = function (t) {
      var e,
          i,
          n,
          r = this,
          s = [];

      for (e = 0; e < 5; e++) {
        for (i = 0; i < 5; i++) s[i] = r[i + 5 * e];

        for (i = 0; i < 5; i++) {
          var a = 0;

          for (n = 0; n < 5; n++) a += t[i + 5 * n] * s[n];

          r[i + 5 * e] = a;
        }
      }
    }, e._cleanValue = function (t, e) {
      return Math.min(e, Math.max(-e, t));
    }, e._fixMatrix = function (e) {
      return e instanceof t && (e = e.toArray()), e.length < t.LENGTH ? e = e.slice(0, e.length).concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH)) : e.length > t.LENGTH && (e = e.slice(0, t.LENGTH)), e;
    }, n.ColorMatrix = t;
  }(), this.createjs = this.createjs || {}, function () {
    function t(t) {
      this.Filter_constructor(), this.matrix = t, this.FRAG_SHADER_BODY = "uniform mat4 uColorMatrix;uniform vec4 uColorMatrixOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);mat4 m = uColorMatrix;vec4 newColor = vec4(0,0,0,0);newColor.r = color.r*m[0][0] + color.g*m[0][1] + color.b*m[0][2] + color.a*m[0][3];newColor.g = color.r*m[1][0] + color.g*m[1][1] + color.b*m[1][2] + color.a*m[1][3];newColor.b = color.r*m[2][0] + color.g*m[2][1] + color.b*m[2][2] + color.a*m[2][3];newColor.a = color.r*m[3][0] + color.g*m[3][1] + color.b*m[3][2] + color.a*m[3][3];gl_FragColor = newColor + uColorMatrixOffset;}";
    }

    var e = n.extend(t, n.Filter);
    e.shaderParamSetup = function (t, e, i) {
      var n = this.matrix,
          r = new Float32Array([n[0], n[1], n[2], n[3], n[5], n[6], n[7], n[8], n[10], n[11], n[12], n[13], n[15], n[16], n[17], n[18]]);
      t.uniformMatrix4fv(t.getUniformLocation(i, "uColorMatrix"), !1, r), t.uniform4f(t.getUniformLocation(i, "uColorMatrixOffset"), n[4] / 255, n[9] / 255, n[14] / 255, n[19] / 255);
    }, e.toString = function () {
      return "[ColorMatrixFilter]";
    }, e.clone = function () {
      return new t(this.matrix);
    }, e._applyFilter = function (t) {
      for (var e, i, n, r, s = t.data, a = s.length, o = this.matrix, h = o[0], c = o[1], u = o[2], l = o[3], d = o[4], f = o[5], p = o[6], _ = o[7], v = o[8], m = o[9], g = o[10], x = o[11], b = o[12], w = o[13], y = o[14], E = o[15], T = o[16], C = o[17], S = o[18], R = o[19], A = 0; A < a; A += 4) e = s[A], i = s[A + 1], n = s[A + 2], r = s[A + 3], s[A] = e * h + i * c + n * u + r * l + d, s[A + 1] = e * f + i * p + n * _ + r * v + m, s[A + 2] = e * g + i * x + n * b + r * w + y, s[A + 3] = e * E + i * T + n * C + r * S + R;

      return !0;
    }, n.ColorMatrixFilter = n.promote(t, "Filter");
  }(), this.createjs = this.createjs || {}, function () {
    function t() {
      throw "Touch cannot be instantiated";
    }

    t.isSupported = function () {
      return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0);
    }, t.enable = function (e, i, n) {
      return !!(e && e.canvas && t.isSupported()) && (!!e.__touch || (e.__touch = {
        pointers: {},
        multitouch: !i,
        preventDefault: !n,
        count: 0
      }, "ontouchstart" in window ? t._IOS_enable(e) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_enable(e), !0));
    }, t.disable = function (e) {
      e && ("ontouchstart" in window ? t._IOS_disable(e) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_disable(e), delete e.__touch);
    }, t._IOS_enable = function (e) {
      var i = e.canvas,
          n = e.__touch.f = function (i) {
        t._IOS_handleEvent(e, i);
      };

      i.addEventListener("touchstart", n, !1), i.addEventListener("touchmove", n, !1), i.addEventListener("touchend", n, !1), i.addEventListener("touchcancel", n, !1);
    }, t._IOS_disable = function (t) {
      var e = t.canvas;

      if (e) {
        var i = t.__touch.f;
        e.removeEventListener("touchstart", i, !1), e.removeEventListener("touchmove", i, !1), e.removeEventListener("touchend", i, !1), e.removeEventListener("touchcancel", i, !1);
      }
    }, t._IOS_handleEvent = function (t, e) {
      var i = this;

      if (t) {
        t.__touch.preventDefault && e.preventDefault && e.preventDefault();

        for (var n = e.changedTouches, r = e.type, s = 0, a = n.length; s < a; s++) {
          var o = n[s],
              h = o.identifier;
          o.target == t.canvas && ("touchstart" == r ? i._handleStart(t, h, e, o.pageX, o.pageY) : "touchmove" == r ? i._handleMove(t, h, e, o.pageX, o.pageY) : "touchend" != r && "touchcancel" != r || i._handleEnd(t, h, e));
        }
      }
    }, t._IE_enable = function (e) {
      var i = e.canvas,
          n = e.__touch.f = function (i) {
        t._IE_handleEvent(e, i);
      };

      void 0 === window.navigator.pointerEnabled ? (i.addEventListener("MSPointerDown", n, !1), window.addEventListener("MSPointerMove", n, !1), window.addEventListener("MSPointerUp", n, !1), window.addEventListener("MSPointerCancel", n, !1), e.__touch.preventDefault && (i.style.msTouchAction = "none")) : (i.addEventListener("pointerdown", n, !1), window.addEventListener("pointermove", n, !1), window.addEventListener("pointerup", n, !1), window.addEventListener("pointercancel", n, !1), e.__touch.preventDefault && (i.style.touchAction = "none")), e.__touch.activeIDs = {};
    }, t._IE_disable = function (t) {
      var e = t.__touch.f;
      void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", e, !1), window.removeEventListener("MSPointerUp", e, !1), window.removeEventListener("MSPointerCancel", e, !1), t.canvas && t.canvas.removeEventListener("MSPointerDown", e, !1)) : (window.removeEventListener("pointermove", e, !1), window.removeEventListener("pointerup", e, !1), window.removeEventListener("pointercancel", e, !1), t.canvas && t.canvas.removeEventListener("pointerdown", e, !1));
    }, t._IE_handleEvent = function (t, e) {
      if (t) {
        t.__touch.preventDefault && e.preventDefault && e.preventDefault();
        var i = e.type,
            n = e.pointerId,
            r = t.__touch.activeIDs;

        if ("MSPointerDown" == i || "pointerdown" == i) {
          if (e.srcElement != t.canvas) return;
          r[n] = !0, this._handleStart(t, n, e, e.pageX, e.pageY);
        } else r[n] && ("MSPointerMove" == i || "pointermove" == i ? this._handleMove(t, n, e, e.pageX, e.pageY) : "MSPointerUp" != i && "MSPointerCancel" != i && "pointerup" != i && "pointercancel" != i || (delete r[n], this._handleEnd(t, n, e)));
      }
    }, t._handleStart = function (t, e, i, n, r) {
      var s = t.__touch;

      if (s.multitouch || !s.count) {
        var a = s.pointers;
        a[e] || (a[e] = !0, s.count++, t._handlePointerDown(e, i, n, r));
      }
    }, t._handleMove = function (t, e, i, n, r) {
      t.__touch.pointers[e] && t._handlePointerMove(e, i, n, r);
    }, t._handleEnd = function (t, e, i) {
      var n = t.__touch,
          r = n.pointers;
      r[e] && (n.count--, t._handlePointerUp(e, i, !0), delete r[e]);
    }, n.Touch = t;
  }(), this.createjs = this.createjs || {}, function () {
    var t = n.EaselJS = n.EaselJS || {};
    t.version = "1.0.0", t.buildDate = "Thu, 14 Sep 2017 19:47:53 GMT";
  }();
}, function (t, e) {
  t.exports = function (t, e, i, n) {
    var r,
        s = t = t || {},
        a = typeof t["default"];
    "object" !== a && "function" !== a || (r = t, s = t["default"]);
    var o = "function" == typeof s ? s.options : s;

    if (e && (o.render = e.render, o.staticRenderFns = e.staticRenderFns), i && (o._scopeId = i), n) {
      var h = o.computed || (o.computed = {});
      Object.keys(n).forEach(function (t) {
        var e = n[t];

        h[t] = function () {
          return e;
        };
      });
    }

    return {
      esModule: r,
      exports: s,
      options: o
    };
  };
}, function (t, e, i) {
  "use strict";

  e.a = {
    props: ["cache"],
    updatesEaselCache: ["scale"],
    data: function () {
      return {
        cacheStarted: !1,
        cacheNeedsUpdate: !1,
        beforeCaches: [],
        cacheWhens: []
      };
    },
    mounted: function () {
      var t = this;

      this.updateCacheOnChange = function () {
        t.cacheNeedsUpdate = !0, t.setParentCacheNeedsUpdate();
      };

      var e = function () {
        t.component && t.component.on("change", t.updateCacheOnChange);
      };

      window.addEventListener("resize", this.updateCacheOnChange), e(), this.$watch("component", e), this.$options.updatesEaselCache.forEach(function (e) {
        t.$watch(e, function () {
          return t.cacheNeedsUpdate = !0;
        });
      }), Object.keys(this.$options.props).forEach(function (e) {
        t.$watch(e, function () {
          return t.setParentCacheNeedsUpdate();
        });
      }), this.$nextTick(function () {
        return t.cacheInit();
      });
    },
    destroyed: function () {
      window.removeEventListener("resize", this.updateCacheOnChange);
    },
    watch: {
      shouldCache: function () {
        this.shouldCache ? this.cacheInit() : this.cacheDestroy();
      },
      cacheNeedsUpdate: function () {
        var t = this;
        this.cacheNeedsUpdate && this.shouldCache && this.$nextTick(function () {
          t.component && t.component.cacheCanvas && (t.cacheDestroy(), t.cacheInit());
        });
      }
    },
    computed: {
      shouldCache: function () {
        return this.cache || this.cacheWhens.reduce(function (t, e) {
          return t || e();
        }, !1);
      },
      cacheScale: function () {
        for (var t = this.scale || 1, e = this.easelParent; e;) t *= e.viewportScale ? e.viewportScale.scaleX : e.scale || 1, e = e.easelParent;

        return t;
      }
    },
    methods: {
      beforeCache: function (t) {
        this.beforeCaches.push(t);
      },
      triggerBeforeCaches: function () {
        this.beforeCaches.forEach(function (t) {
          return t();
        });
      },
      cacheWhen: function (t) {
        this.cacheWhens.push(t);
      },
      cacheInit: function () {
        var t = this;
        this.shouldCache && this.getCacheBounds().then(function (e) {
          var i = e.x,
              n = e.y,
              r = e.width,
              s = e.height;
          t.triggerBeforeCaches(), t.easelCanvas.createCanvas(function () {
            t.component.cache(i, n, r, s, t.cacheScale * window.devicePixelRatio);
          }), t.cacheStarted = !0, t.cacheNeedsUpdate = !1;
        })["catch"](function (t) {
          return console.error("Cannot cache: " + t, t);
        });
      },
      cacheDestroy: function () {
        this.component.uncache(), this.cacheStarted = !1, this.cacheNeedsUpdate = !1;
      },
      setParentCacheNeedsUpdate: function () {
        this.easelParent && "cacheNeedsUpdate" in this.easelParent && (this.easelParent.cacheNeedsUpdate = !0);
      },
      getCacheBounds: function () {
        return Promise.reject("EaselCache components must define a `getCacheBounds` method");
      },
      getRelativeCacheBounds: function () {
        var t = this;
        return this.getCacheBounds().then(function (e) {
          var i = (t.x || 0) - t.component.regX + e.x,
              n = (t.y || 0) - t.component.regY + e.y;
          return {
            x: i,
            y: n,
            width: e.width,
            height: e.height
          };
        }).then(function (e) {
          return t.expandForShadow(e);
        }).then(function (e) {
          return t.getSmallestSquare(e);
        });
      },
      getSmallestSquare: function (t) {
        var e = (t.x, t.y, t.width),
            i = t.height,
            n = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2));
        return {
          x: -n,
          y: -n,
          width: 2 * n,
          height: 2 * n
        };
      },
      getSmallestCombination: function (t, e) {
        var i = Math.min(t.x, e.x),
            n = Math.min(t.y, e.y),
            r = Math.max(e.x - i + e.width, t.x - i + t.width),
            s = Math.max(e.y - n + e.height, t.y - n + t.height);
        return {
          x: i,
          y: n,
          width: r,
          height: s
        };
      },
      expandForShadow: function (t) {
        if (!this.shadow) return t;
        var e = this.shadow,
            i = (e[0], e[1]),
            n = e[2],
            r = e[3],
            s = Math.max(i, n) + r;
        return {
          x: t.x - s,
          y: t.y - s,
          width: t.width + 2 * s,
          height: t.height + 2 * s
        };
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = i(8),
      r = i(0),
      s = i(22),
      a = ["rotation", "cursor", "name"];
  e.a = {
    inject: ["easelParent", "easelCanvas"],
    props: {
      x: {},
      y: {},
      flip: {},
      rotation: {},
      scale: {},
      alpha: {},
      shadow: {},
      cursor: {},
      visible: {
        "default": !0
      },
      name: {}
    },
    data: function () {
      var t = this;
      return {
        component: null,
        forceInvisiblePromises: new s.a().on("change", function (e) {
          return t.forceInvisible = e > 0;
        }),
        forceInvisible: !1
      };
    },
    mounted: function () {
      var t = this;
      this.$watch("component", function (e, i) {
        i && t.displayObjectBreakdown(i), e && t.displayObjectInit();
      }), a.forEach(function (e) {
        t.$watch(e, function () {
          t.component && (t.component[e] = t[e]);
        });
      }), this.$watch("x", function () {
        t.component && (t.component.x = t.x || 0);
      }), this.$watch("y", function () {
        t.component && (t.component.y = t.y || 0);
      }), this.$watch("flip", function () {
        t.component && t.updateScales();
      }), this.$watch("scale", function () {
        t.component && t.updateScales();
      }), this.$watch("alpha", function () {
        t.component && t.updateAlpha();
      }), this.$watch("shadow", function () {
        t.component && t.updateShadow();
      }), this.$watch("shouldBeVisible", function () {
        t.component && t.updateVisibility();
      });
    },
    computed: {
      shouldBeVisible: function () {
        return this.visible && !this.forceInvisible;
      }
    },
    destroyed: function () {
      this.displayObjectBreakdown();
    },
    methods: {
      displayObjectInit: function () {
        var t = this;
        n.a.bindEvents(this, this.component), this.component.x = this.x || 0, this.component.y = this.y || 0, a.forEach(function (e) {
          t.component[e] = t[e];
        }), this.updateScales(), this.updateAlpha(), this.updateShadow(), this.updateVisibility(), this.easelParent.addChild(this);
      },
      displayObjectBreakdown: function (t) {
        void 0 === t && (t = null), this.easelParent.removeChild(this, t);
      },
      updateScales: function () {
        if (this.component) {
          var t = this.scale || 1;
          this.component.scaleX = "horizontal" === this.flip || "both" === this.flip ? -t : t, this.component.scaleY = "vertical" === this.flip || "both" === this.flip ? -t : t;
        }
      },
      updateAlpha: function () {
        this.component.alpha = isNaN(this.alpha) || null === this.alpha ? 1 : this.alpha;
      },
      updateShadow: function () {
        this.shadow ? this.component.shadow = new r.a.Shadow(this.shadow[0], this.shadow[1], this.shadow[2], this.shadow[3]) : this.component.shadow = null;
      },
      updateVisibility: function () {
        this.component.visible = this.shouldBeVisible;
      },
      remainInvisibleUntil: function (t) {
        return this.forceInvisiblePromises.add(t), t;
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = (i(0), i(7)),
      r = n.a.build.bind(n.a);
  e.a = {
    props: ["filters"],
    mounted: function () {
      var t = this;
      this.cacheWhen(function () {
        return t.filters && t.filters.length > 0;
      }), this.beforeCache(function () {
        t.filters && t.filters.length > 0 ? t.component.filters = t.filters.map(r) : t.component.filters = null;
      });
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = (i(0), i(23));
  e.a = {
    props: ["align"],
    watch: {
      align: function () {
        this.component && this.updateAlign();
      }
    },
    mounted: function () {
      var t = this;
      this.$watch("component", function () {
        return t.updateAlign();
      });
    },
    computed: {
      normalizedAlign: function () {
        return i.i(n.a)(this.align || ["", ""]);
      }
    },
    methods: {
      updateAlign: function () {
        var t = this;
        return this.remainInvisibleUntil(this.getAlignDimensions().then(function (e) {
          var i = e.width,
              n = e.height,
              r = t.normalizedAlign[0] || "left",
              s = t.normalizedAlign[1] || "top";
          return "left" === r ? t.component.regX = 0 : "center" === r ? t.component.regX = i / 2 : "right" === r && (t.component.regX = i), "top" === s ? t.component.regY = 0 : "center" === s ? t.component.regY = n / 2 : "bottom" === s && (t.component.regY = n), e;
        }, function (t) {
          throw console.error("Cannot align:", t), t;
        }));
      },
      getAlignDimensions: function () {
        throw new Error("EaselAlign components must define a `getAlignDimensions` method");
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return new Promise(function (e, i) {
      var n = function () {
        try {
          if (t.component) {
            if (t.component.getBounds()) {
              clearInterval(r);
              var i = t.component.getBounds(),
                  n = i.x,
                  s = i.y,
                  a = i.width,
                  o = i.height;
              e({
                x: n,
                y: s,
                width: a,
                height: o
              });
            }
          } else clearInterval(r), reject("No component available to getBounds");
        } catch (h) {
          throw clearInterval(r), h;
        }
      },
          r = setInterval(n, 10);

      n();
    });
  }

  e.a = n;
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = i(19),
      s = i(18),
      a = i(20),
      o = new r.a();
  o.register("BlurFilter", n.a.BlurFilter), o.register("ColorFilter", n.a.ColorFilter), o.register("ColorMatrixFilter", s.a), o.register("PixelStrokeFilter", a.a), e.a = o;
}, function (t, e, i) {
  "use strict";

  var n = i(26),
      r = (i.n(n), ["added", "animationend", "change", "click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "removed", "rollout", "rollover", "tick"]),
      s = function (t, e) {
    return Boolean(t.$options._parentListeners && t.$options._parentListeners[e]);
  },
      a = function (t, e) {
    return e.component = t, t.easelCanvas && t.easelCanvas.augmentEvent && (e = t.easelCanvas.augmentEvent(e)), e;
  };

  e.a = {
    bindEvents: function (t, e) {
      r.forEach(function (i) {
        s(t, i) && e.addEventListener(i, function (e) {
          return t.$emit(i, a(t, e));
        });
      });
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = (i(0), i(24)),
      r = i(25),
      s = i.n(r);
  e.a = {
    provide: function () {
      return {
        easelParent: this
      };
    },
    data: function () {
      return {
        children: []
      };
    },
    updated: function () {
      var t = this;
      this.$nextTick(function () {
        return t.syncEaselChildren();
      });
    },
    watch: {
      children: function () {
        this.syncEaselChildren();
      }
    },
    methods: {
      syncEaselChildren: function () {
        var t = this;
        this.component && i.i(n.a)(this.children).forEach(function (e, i) {
          var n = t.component.numChildren >= i ? t.component.getChildAt(i) : null;
          e.component !== n && t.component.addChildAt(e.component, i);
        });
      },
      addChild: function (t) {
        this.hasChild(t) || this.children.push(t);
      },
      removeChild: function (t, e) {
        void 0 === e && (e = null);
        var i = this.indexOfChild(t);
        return !(i < 0) && (this.children.splice(i, 1), this.component && this.component.removeChild(e || t.component), !0);
      },
      hasChild: function (t) {
        return this.indexOfChild(t) > -1;
      },
      indexOfChild: function (t) {
        return s()(this.children, t);
      }
    }
  };
}, function (t, e) {
  var i;

  i = function () {
    return this;
  }();

  try {
    i = i || Function("return this")() || (0, eval)("this");
  } catch (n) {
    "object" == typeof window && (i = window);
  }

  t.exports = i;
}, function (t, e, i) {
  var n = i(1)(i(27), null, null, null);
  n.options.__file = "/Users/dan/vue-easeljs/src/components/EaselBitmap.vue", n.esModule && Object.keys(n.esModule).some(function (t) {
    return "default" !== t && "__esModule" !== t;
  }) && console.error("named exports are not supported in *.vue files."), t.exports = n.exports;
}, function (t, e, i) {
  var n = i(1)(i(28), i(37), null, null);
  n.options.__file = "/Users/dan/vue-easeljs/src/components/EaselCanvas.vue", n.esModule && Object.keys(n.esModule).some(function (t) {
    return "default" !== t && "__esModule" !== t;
  }) && console.error("named exports are not supported in *.vue files."), n.options.functional && console.error("[vue-loader] EaselCanvas.vue: functional components are not supported with templates, they should use render functions."), t.exports = n.exports;
}, function (t, e, i) {
  var n = i(1)(i(29), i(36), null, null);
  n.options.__file = "/Users/dan/vue-easeljs/src/components/EaselContainer.vue", n.esModule && Object.keys(n.esModule).some(function (t) {
    return "default" !== t && "__esModule" !== t;
  }) && console.error("named exports are not supported in *.vue files."), n.options.functional && console.error("[vue-loader] EaselContainer.vue: functional components are not supported with templates, they should use render functions."), t.exports = n.exports;
}, function (t, e, i) {
  var n = i(1)(i(30), null, null, null);
  n.options.__file = "/Users/dan/vue-easeljs/src/components/EaselShape.vue", n.esModule && Object.keys(n.esModule).some(function (t) {
    return "default" !== t && "__esModule" !== t;
  }) && console.error("named exports are not supported in *.vue files."), t.exports = n.exports;
}, function (t, e, i) {
  var n = i(1)(i(31), null, null, null);
  n.options.__file = "/Users/dan/vue-easeljs/src/components/EaselSprite.vue", n.esModule && Object.keys(n.esModule).some(function (t) {
    return "default" !== t && "__esModule" !== t;
  }) && console.error("named exports are not supported in *.vue files."), t.exports = n.exports;
}, function (t, e, i) {
  var n = i(1)(i(32), i(35), null, null);
  n.options.__file = "/Users/dan/vue-easeljs/src/components/EaselSpriteSheet.vue", n.esModule && Object.keys(n.esModule).some(function (t) {
    return "default" !== t && "__esModule" !== t;
  }) && console.error("named exports are not supported in *.vue files."), n.options.functional && console.error("[vue-loader] EaselSpriteSheet.vue: functional components are not supported with templates, they should use render functions."), t.exports = n.exports;
}, function (t, e, i) {
  var n = i(1)(i(33), null, null, null);
  n.options.__file = "/Users/dan/vue-easeljs/src/components/EaselText.vue", n.esModule && Object.keys(n.esModule).some(function (t) {
    return "default" !== t && "__esModule" !== t;
  }) && console.error("named exports are not supported in *.vue files."), t.exports = n.exports;
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = function (t) {
    function e(t, e, i, r) {
      var s = new n.a.ColorMatrix(t, e, i, r);
      n.a.ColorMatrixFilter.apply(this, [s]);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
  }(n.a.ColorMatrixFilter);

  e.a = r;
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = function () {
    this.filters = [];
  };

  r.prototype.register = function (t, e) {
    if (e.prototype.applyFilter) this.filters[t] = e;else {
      var i = e.prototype || e.constructor.prototype;
      if (i.adjustContext) i.usesContext = !0, i.applyFilter = function (t, e, i, n, r, s, a, o) {
        return this.adjustContext(t, e, i, n, r, s, a, o);
      };else {
        if (!i.adjustImageData) throw new Error("Incompatible filter");
        i.usesContext = !1, i._applyFilter = function (t) {
          return this.adjustImageData(t);
        };
      }

      for (var r in n.a.Filter.prototype) i[r] || (i[r] = n.a.Filter.prototype[r]);

      this.filters[t] = e;
    }
  }, r.prototype.build = function (t) {
    var e = t[0],
        i = [null].concat(t.slice(1)),
        n = this.filters[e];
    if (!n) throw new Error("No such filter registered: " + e);
    return new (Function.prototype.bind.apply(n, i))();
  }, e.a = r;
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = {},
      s = function (t, e, i) {
    void 0 === t && (t = []), void 0 === e && (e = 1), void 0 === i && (i = {}), this.strokeRed = t[0] || 0, this.strokeGreen = t[1] || 0, this.strokeBlue = t[2] || 0, this.strokeAlpha = t[3] || 255, this.size = e, this.brush = this.calculateBrush(e), this.alphaCache = {}, this.options = i;
  };

  s.prototype.adjustImageData = function (t) {
    for (var e = this, i = this, n = i.strokeRed, r = i.strokeGreen, s = i.strokeBlue, a = i.strokeAlpha, o = "undefined" == typeof this.options.antiAlias || this.options.antiAlias, h = t.data, c = t.width, u = t.height, l = (h.length, h.slice(0)), d = function (t, i, d) {
      if (!(t < 0 || i < 0 || t >= c || i >= u)) {
        var f = 4 * (i * c + t),
            p = o ? e.alphaCache[d] || (e.alphaCache[d] = Math.round(Math.floor(a * d))) : a;
        !l[f + 3] && h[f + 3] < p && (h[f + 0] = n, h[f + 1] = r, h[f + 2] = s, h[f + 3] = p);
      }
    }, f = function (t, i) {
      for (var n = 0; n < e.brush.length; n++) {
        var r = e.brush[n],
            s = r.y,
            a = r.minX,
            o = r.maxX,
            h = r.a;
        d(t + a, i + s, h), d(t + o, i + s, h);

        for (var c = a + 1; c <= o - 1; c++) d(t + c, i + s, 1);
      }
    }, p = 0; p < c; p++) for (var _ = 0; _ < u; _++) l[4 * (_ * c + p) + 3] > 0 && f(p, _);

    return !0;
  }, s.prototype.calculateBrush = function (t) {
    if (r[t]) return r[t];

    for (var e = {}, i = 0; i <= t; i++) {
      var n = i / t,
          s = Math.atan(n),
          a = Math.cos(s),
          o = Math.sin(s),
          h = a * t,
          c = o * t,
          u = Math.ceil(h),
          l = Math.ceil(c),
          d = h - Math.floor(h),
          f = c - Math.floor(c),
          p = (d + f) / 2;
      0 === p && (p = 1), e[l] = {
        x: u,
        y: l,
        a: p
      };
    }

    for (var _ in e) {
      var v = e[_],
          m = v.x,
          g = v.y,
          x = v.a;
      e[m] || (e[m] = {
        x: g,
        y: m,
        a: x
      });
    }

    var b = [];

    for (var w in e) {
      var y = e[w],
          E = y.x,
          T = y.y,
          C = y.a;
      b.push({
        y: T,
        minX: -E,
        maxX: E,
        a: C
      }), 0 !== T && b.push({
        y: -T,
        minX: -E,
        maxX: E,
        a: C
      });
    }

    return r[t] = b, r[t];
  }, s.prototype.getBounds = function (t) {
    return void 0 === t && (t = null), (t || new n.a.Rectangle()).pad(2 * this.size, 2 * this.size, 2 * this.size, 2 * this.size);
  }, e.a = s;
}, function (t, e, i) {
  "use strict";

  var n = function (t) {
    void 0 === t && (t = {});
    var e = t.errorCode;
    this.callbacks = [], this.errorCode = e;
  };

  n.prototype.on = function (t, e) {
    this.callbacks.push({
      event: t,
      cb: e
    });
  }, n.prototype.off = function (t, e) {
    this.callbacks = this.callbacks.filter(function (i) {
      var n = i.event,
          r = i.cb;
      return !(n === t && r === e);
    });
  }, n.prototype.fire = function (t) {
    for (var e = arguments, i = this, n = [], r = arguments.length - 1; r-- > 0;) n[r] = e[r + 1];

    this.callbacks.filter(function (e) {
      var i = e.event;
      return i === t;
    }).forEach(function (e) {
      var r = e.cb;

      try {
        r.apply(void 0, n);
      } catch (s) {
        i.errorCode && t !== i.errorCode && i.fire(i.errorCode, t, n, r, s);
      }
    });
  }, e.a = n;
}, function (t, e, i) {
  "use strict";

  var n = i(21),
      r = function () {
    this.events = new n.a({
      errorCode: "error"
    }), this.promises = new Set();
  };

  r.prototype.add = function (t) {
    var e = this;
    if (!t["finally"]) throw new Error("We only accept promises here");
    this.promises.add(t), this.events.fire("add", this.promises.size), this.events.fire("change", this.promises.size), t["finally"](function () {
      e.promises["delete"](t), e.events.fire("remove", e.promises.size), e.events.fire("change", e.promises.size);
    });
  }, r.prototype.on = function (t, e) {
    return this.events.on(t, e), this;
  }, r.prototype.off = function (t, e) {
    return this.events.off(t, e), this;
  }, e.a = r;
}, function (t, e, i) {
  "use strict";

  function n(t) {
    "string" == typeof t && (t = t.trim().split(/\-/));
    var e = t[0],
        i = t[1];
    if (a(e) && o(i)) return [e, i];
    if (o(e) && a(i)) return [i, e];
    throw new Error("Illegal alignment, bad mix of values or unknown value in: " + e + ", " + i);
  }

  e.a = n;

  var r = ["", "left", "center", "right", "start", "end"],
      s = ["", "top", "center", "bottom", "hanging", "middle", "alphabetic", "ideographic"],
      a = function (t) {
    return r.indexOf(t) > -1;
  },
      o = function (t) {
    return s.indexOf(t) > -1;
  };
}, function (t, e, i) {
  "use strict";

  function n(t) {
    return [].concat(t).sort(r);
  }

  function r(t, e) {
    var i = t.$el.compareDocumentPosition(e.$el);
    if (i & Node.DOCUMENT_POSITION_DISCONNECTED) throw new Error("Nodes are not in the same tree");
    return i & Node.DOCUMENT_POSITION_CONTAINS ? 1 : i & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 0;
  }

  e.a = n;
}, function (t, e, i) {
  (function (t, i) {
    function n(t, e) {
      for (var i = -1, n = t ? t.length : 0; ++i < n;) if (e(t[i], i, t)) return !0;

      return !1;
    }

    function r(t, e, i, n) {
      for (var r = t.length, s = i + (n ? 1 : -1); n ? s-- : ++s < r;) if (e(t[s], s, t)) return s;

      return -1;
    }

    function s(t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    }

    function a(t, e) {
      for (var i = -1, n = Array(t); ++i < t;) n[i] = e(i);

      return n;
    }

    function o(t) {
      return function (e) {
        return t(e);
      };
    }

    function h(t, e) {
      return null == t ? void 0 : t[e];
    }

    function c(t) {
      var e = !1;
      if (null != t && "function" != typeof t.toString) try {
        e = !!(t + "");
      } catch (i) {}
      return e;
    }

    function u(t) {
      var e = -1,
          i = Array(t.size);
      return t.forEach(function (t, n) {
        i[++e] = [n, t];
      }), i;
    }

    function l(t, e) {
      return function (i) {
        return t(e(i));
      };
    }

    function d(t) {
      var e = -1,
          i = Array(t.size);
      return t.forEach(function (t) {
        i[++e] = t;
      }), i;
    }

    function f(t) {
      var e = this,
          i = -1,
          n = t ? t.length : 0;

      for (this.clear(); ++i < n;) {
        var r = t[i];
        e.set(r[0], r[1]);
      }
    }

    function p() {
      this.__data__ = ui ? ui(null) : {};
    }

    function _(t) {
      return this.has(t) && delete this.__data__[t];
    }

    function v(t) {
      var e = this.__data__;

      if (ui) {
        var i = e[t];
        return i === Nt ? void 0 : i;
      }

      return Qe.call(e, t) ? e[t] : void 0;
    }

    function m(t) {
      var e = this.__data__;
      return ui ? void 0 !== e[t] : Qe.call(e, t);
    }

    function g(t, e) {
      var i = this.__data__;
      return i[t] = ui && void 0 === e ? Nt : e, this;
    }

    function x(t) {
      var e = this,
          i = -1,
          n = t ? t.length : 0;

      for (this.clear(); ++i < n;) {
        var r = t[i];
        e.set(r[0], r[1]);
      }
    }

    function b() {
      this.__data__ = [];
    }

    function w(t) {
      var e = this.__data__,
          i = N(e, t);
      if (i < 0) return !1;
      var n = e.length - 1;
      return i == n ? e.pop() : ii.call(e, i, 1), !0;
    }

    function y(t) {
      var e = this.__data__,
          i = N(e, t);
      return i < 0 ? void 0 : e[i][1];
    }

    function E(t) {
      return N(this.__data__, t) > -1;
    }

    function T(t, e) {
      var i = this.__data__,
          n = N(i, t);
      return n < 0 ? i.push([t, e]) : i[n][1] = e, this;
    }

    function C(t) {
      var e = this,
          i = -1,
          n = t ? t.length : 0;

      for (this.clear(); ++i < n;) {
        var r = t[i];
        e.set(r[0], r[1]);
      }
    }

    function S() {
      this.__data__ = {
        hash: new f(),
        map: new (ai || x)(),
        string: new f()
      };
    }

    function R(t) {
      return at(this, t)["delete"](t);
    }

    function A(t) {
      return at(this, t).get(t);
    }

    function D(t) {
      return at(this, t).has(t);
    }

    function M(t, e) {
      return at(this, t).set(t, e), this;
    }

    function I(t) {
      var e = this,
          i = -1,
          n = t ? t.length : 0;

      for (this.__data__ = new C(); ++i < n;) e.add(t[i]);
    }

    function P(t) {
      return this.__data__.set(t, Nt), this;
    }

    function O(t) {
      return this.__data__.has(t);
    }

    function F(t) {
      this.__data__ = new x(t);
    }

    function L() {
      this.__data__ = new x();
    }

    function B(t) {
      return this.__data__["delete"](t);
    }

    function j(t) {
      return this.__data__.get(t);
    }

    function k(t) {
      return this.__data__.has(t);
    }

    function U(t, e) {
      var i = this.__data__;

      if (i instanceof x) {
        var n = i.__data__;
        if (!ai || n.length < Ut - 1) return n.push([t, e]), this;
        i = this.__data__ = new C(n);
      }

      return i.set(t, e), this;
    }

    function G(t, e) {
      var i = wi(t) || yt(t) ? a(t.length, String) : [],
          n = i.length,
          r = !!n;

      for (var s in t) !e && !Qe.call(t, s) || r && ("length" == s || ut(s, n)) || i.push(s);

      return i;
    }

    function N(t, e) {
      for (var i = t.length; i--;) if (wt(t[i][0], e)) return i;

      return -1;
    }

    function X(t, e) {
      e = lt(e, t) ? [e] : it(e);

      for (var i = 0, n = e.length; null != t && i < n;) t = t[mt(e[i++])];

      return i && i == n ? t : void 0;
    }

    function Y(t) {
      return Je.call(t);
    }

    function H(t, e) {
      return null != t && e in Object(t);
    }

    function W(t, e, i, n, r) {
      return t === e || (null == t || null == e || !Rt(t) && !At(e) ? t !== t && e !== e : V(t, e, W, i, n, r));
    }

    function V(t, e, i, n, r, s) {
      var a = wi(t),
          o = wi(e),
          h = qt,
          u = qt;
      a || (h = xi(t), h = h == $t ? ne : h), o || (u = xi(e), u = u == $t ? ne : u);
      var l = h == ne && !c(t),
          d = u == ne && !c(e),
          f = h == u;
      if (f && !l) return s || (s = new F()), a || yi(t) ? nt(t, e, i, n, r, s) : rt(t, e, h, i, n, r, s);

      if (!(r & Yt)) {
        var p = l && Qe.call(t, "__wrapped__"),
            _ = d && Qe.call(e, "__wrapped__");

        if (p || _) {
          var v = p ? t.value() : t,
              m = _ ? e.value() : e;
          return s || (s = new F()), i(v, m, n, r, s);
        }
      }

      return !!f && (s || (s = new F()), st(t, e, i, n, r, s));
    }

    function z(t, e, i, n) {
      var r = i.length,
          s = r,
          a = !n;
      if (null == t) return !s;

      for (t = Object(t); r--;) {
        var o = i[r];
        if (a && o[2] ? o[1] !== t[o[0]] : !(o[0] in t)) return !1;
      }

      for (; ++r < s;) {
        o = i[r];
        var h = o[0],
            c = t[h],
            u = o[1];

        if (a && o[2]) {
          if (void 0 === c && !(h in t)) return !1;
        } else {
          var l = new F();
          if (n) var d = n(c, u, h, t, e, l);
          if (!(void 0 === d ? W(u, c, n, Xt | Yt, l) : d)) return !1;
        }
      }

      return !0;
    }

    function $(t) {
      if (!Rt(t) || ft(t)) return !1;
      var e = Ct(t) || c(t) ? Ke : Me;
      return e.test(gt(t));
    }

    function q(t) {
      return At(t) && St(t.length) && !!Oe[Je.call(t)];
    }

    function Q(t) {
      return "function" == typeof t ? t : null == t ? jt : "object" == typeof t ? wi(t) ? Z(t[0], t[1]) : K(t) : kt(t);
    }

    function J(t) {
      if (!pt(t)) return ni(t);
      var e = [];

      for (var i in Object(t)) Qe.call(t, i) && "constructor" != i && e.push(i);

      return e;
    }

    function K(t) {
      var e = ot(t);
      return 1 == e.length && e[0][2] ? vt(e[0][0], e[0][1]) : function (i) {
        return i === t || z(i, t, e);
      };
    }

    function Z(t, e) {
      return lt(t) && _t(e) ? vt(mt(t), e) : function (i) {
        var n = Ft(i, t);
        return void 0 === n && n === e ? Lt(i, t) : W(e, n, void 0, Xt | Yt);
      };
    }

    function tt(t) {
      return function (e) {
        return X(e, t);
      };
    }

    function et(t) {
      if ("string" == typeof t) return t;
      if (Dt(t)) return gi ? gi.call(t) : "";
      var e = t + "";
      return "0" == e && 1 / t == -Ht ? "-0" : e;
    }

    function it(t) {
      return wi(t) ? t : bi(t);
    }

    function nt(t, e, i, r, s, a) {
      var o = s & Yt,
          h = t.length,
          c = e.length;
      if (h != c && !(o && c > h)) return !1;
      var u = a.get(t);
      if (u && a.get(e)) return u == e;
      var l = -1,
          d = !0,
          f = s & Xt ? new I() : void 0;

      for (a.set(t, e), a.set(e, t); ++l < h;) {
        var p = t[l],
            _ = e[l];
        if (r) var v = o ? r(_, p, l, e, t, a) : r(p, _, l, t, e, a);

        if (void 0 !== v) {
          if (v) continue;
          d = !1;
          break;
        }

        if (f) {
          if (!n(e, function (t, e) {
            if (!f.has(e) && (p === t || i(p, t, r, s, a))) return f.add(e);
          })) {
            d = !1;
            break;
          }
        } else if (p !== _ && !i(p, _, r, s, a)) {
          d = !1;
          break;
        }
      }

      return a["delete"](t), a["delete"](e), d;
    }

    function rt(t, e, i, n, r, s, a) {
      switch (i) {
        case le:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
          t = t.buffer, e = e.buffer;

        case ue:
          return !(t.byteLength != e.byteLength || !n(new ti(t), new ti(e)));

        case Qt:
        case Jt:
        case ie:
          return wt(+t, +e);

        case Kt:
          return t.name == e.name && t.message == e.message;

        case se:
        case oe:
          return t == e + "";

        case ee:
          var o = u;

        case ae:
          var h = s & Yt;
          if (o || (o = d), t.size != e.size && !h) return !1;
          var c = a.get(t);
          if (c) return c == e;
          s |= Xt, a.set(t, e);
          var l = nt(o(t), o(e), n, r, s, a);
          return a["delete"](t), l;

        case he:
          if (mi) return mi.call(t) == mi.call(e);
      }

      return !1;
    }

    function st(t, e, i, n, r, s) {
      var a = r & Yt,
          o = Bt(t),
          h = o.length,
          c = Bt(e),
          u = c.length;
      if (h != u && !a) return !1;

      for (var l = h; l--;) {
        var d = o[l];
        if (!(a ? d in e : Qe.call(e, d))) return !1;
      }

      var f = s.get(t);
      if (f && s.get(e)) return f == e;
      var p = !0;
      s.set(t, e), s.set(e, t);

      for (var _ = a; ++l < h;) {
        d = o[l];
        var v = t[d],
            m = e[d];
        if (n) var g = a ? n(m, v, d, e, t, s) : n(v, m, d, t, e, s);

        if (!(void 0 === g ? v === m || i(v, m, n, r, s) : g)) {
          p = !1;
          break;
        }

        _ || (_ = "constructor" == d);
      }

      if (p && !_) {
        var x = t.constructor,
            b = e.constructor;
        x != b && "constructor" in t && "constructor" in e && !("function" == typeof x && x instanceof x && "function" == typeof b && b instanceof b) && (p = !1);
      }

      return s["delete"](t), s["delete"](e), p;
    }

    function at(t, e) {
      var i = t.__data__;
      return dt(e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
    }

    function ot(t) {
      for (var e = Bt(t), i = e.length; i--;) {
        var n = e[i],
            r = t[n];
        e[i] = [n, r, _t(r)];
      }

      return e;
    }

    function ht(t, e) {
      var i = h(t, e);
      return $(i) ? i : void 0;
    }

    function ct(t, e, i) {
      e = lt(e, t) ? [e] : it(e);

      for (var n, r = -1, s = e.length; ++r < s;) {
        var a = mt(e[r]);
        if (!(n = null != t && i(t, a))) break;
        t = t[a];
      }

      if (n) return n;
      var s = t ? t.length : 0;
      return !!s && St(s) && ut(a, s) && (wi(t) || yt(t));
    }

    function ut(t, e) {
      return e = null == e ? Wt : e, !!e && ("number" == typeof t || Pe.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }

    function lt(t, e) {
      if (wi(t)) return !1;
      var i = typeof t;
      return !("number" != i && "symbol" != i && "boolean" != i && null != t && !Dt(t)) || ye.test(t) || !we.test(t) || null != e && t in Object(e);
    }

    function dt(t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
    }

    function ft(t) {
      return !!$e && $e in t;
    }

    function pt(t) {
      var e = t && t.constructor,
          i = "function" == typeof e && e.prototype || Ve;
      return t === i;
    }

    function _t(t) {
      return t === t && !Rt(t);
    }

    function vt(t, e) {
      return function (i) {
        return null != i && i[t] === e && (void 0 !== e || t in Object(i));
      };
    }

    function mt(t) {
      if ("string" == typeof t || Dt(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -Ht ? "-0" : e;
    }

    function gt(t) {
      if (null != t) {
        try {
          return qe.call(t);
        } catch (e) {}

        try {
          return t + "";
        } catch (e) {}
      }

      return "";
    }

    function xt(t, e, i) {
      var n = t ? t.length : 0;
      if (!n) return -1;
      var s = null == i ? 0 : It(i);
      return s < 0 && (s = ri(n + s, 0)), r(t, Q(e, 3), s);
    }

    function bt(t, e) {
      if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(Gt);

      var i = function () {
        var n = arguments,
            r = e ? e.apply(this, n) : n[0],
            s = i.cache;
        if (s.has(r)) return s.get(r);
        var a = t.apply(this, n);
        return i.cache = s.set(r, a), a;
      };

      return i.cache = new (bt.Cache || C)(), i;
    }

    function wt(t, e) {
      return t === e || t !== t && e !== e;
    }

    function yt(t) {
      return Tt(t) && Qe.call(t, "callee") && (!ei.call(t, "callee") || Je.call(t) == $t);
    }

    function Et(t) {
      return null != t && St(t.length) && !Ct(t);
    }

    function Tt(t) {
      return At(t) && Et(t);
    }

    function Ct(t) {
      var e = Rt(t) ? Je.call(t) : "";
      return e == Zt || e == te;
    }

    function St(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Wt;
    }

    function Rt(t) {
      var e = typeof t;
      return !!t && ("object" == e || "function" == e);
    }

    function At(t) {
      return !!t && "object" == typeof t;
    }

    function Dt(t) {
      return "symbol" == typeof t || At(t) && Je.call(t) == he;
    }

    function Mt(t) {
      if (!t) return 0 === t ? t : 0;

      if (t = Pt(t), t === Ht || t === -Ht) {
        var e = t < 0 ? -1 : 1;
        return e * Vt;
      }

      return t === t ? t : 0;
    }

    function It(t) {
      var e = Mt(t),
          i = e % 1;
      return e === e ? i ? e - i : e : 0;
    }

    function Pt(t) {
      if ("number" == typeof t) return t;
      if (Dt(t)) return zt;

      if (Rt(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = Rt(e) ? e + "" : e;
      }

      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(Se, "");
      var i = De.test(t);
      return i || Ie.test(t) ? Fe(t.slice(2), i ? 2 : 8) : Ae.test(t) ? zt : +t;
    }

    function Ot(t) {
      return null == t ? "" : et(t);
    }

    function Ft(t, e, i) {
      var n = null == t ? void 0 : X(t, e);
      return void 0 === n ? i : n;
    }

    function Lt(t, e) {
      return null != t && ct(t, e, H);
    }

    function Bt(t) {
      return Et(t) ? G(t) : J(t);
    }

    function jt(t) {
      return t;
    }

    function kt(t) {
      return lt(t) ? s(mt(t)) : tt(t);
    }

    var Ut = 200,
        Gt = "Expected a function",
        Nt = "__lodash_hash_undefined__",
        Xt = 1,
        Yt = 2,
        Ht = 1 / 0,
        Wt = 9007199254740991,
        Vt = 1.7976931348623157e308,
        zt = NaN,
        $t = "[object Arguments]",
        qt = "[object Array]",
        Qt = "[object Boolean]",
        Jt = "[object Date]",
        Kt = "[object Error]",
        Zt = "[object Function]",
        te = "[object GeneratorFunction]",
        ee = "[object Map]",
        ie = "[object Number]",
        ne = "[object Object]",
        re = "[object Promise]",
        se = "[object RegExp]",
        ae = "[object Set]",
        oe = "[object String]",
        he = "[object Symbol]",
        ce = "[object WeakMap]",
        ue = "[object ArrayBuffer]",
        le = "[object DataView]",
        de = "[object Float32Array]",
        fe = "[object Float64Array]",
        pe = "[object Int8Array]",
        _e = "[object Int16Array]",
        ve = "[object Int32Array]",
        me = "[object Uint8Array]",
        ge = "[object Uint8ClampedArray]",
        xe = "[object Uint16Array]",
        be = "[object Uint32Array]",
        we = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        ye = /^\w*$/,
        Ee = /^\./,
        Te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ce = /[\\^$.*+?()[\]{}|]/g,
        Se = /^\s+|\s+$/g,
        Re = /\\(\\)?/g,
        Ae = /^[-+]0x[0-9a-f]+$/i,
        De = /^0b[01]+$/i,
        Me = /^\[object .+?Constructor\]$/,
        Ie = /^0o[0-7]+$/i,
        Pe = /^(?:0|[1-9]\d*)$/,
        Oe = {};
    Oe[de] = Oe[fe] = Oe[pe] = Oe[_e] = Oe[ve] = Oe[me] = Oe[ge] = Oe[xe] = Oe[be] = !0, Oe[$t] = Oe[qt] = Oe[ue] = Oe[Qt] = Oe[le] = Oe[Jt] = Oe[Kt] = Oe[Zt] = Oe[ee] = Oe[ie] = Oe[ne] = Oe[se] = Oe[ae] = Oe[oe] = Oe[ce] = !1;

    var Fe = parseInt,
        Le = "object" == typeof t && t && t.Object === Object && t,
        Be = "object" == typeof self && self && self.Object === Object && self,
        je = Le || Be || Function("return this")(),
        ke = "object" == typeof e && e && !e.nodeType && e,
        Ue = ke && "object" == typeof i && i && !i.nodeType && i,
        Ge = Ue && Ue.exports === ke,
        Ne = Ge && Le.process,
        Xe = function () {
      try {
        return Ne && Ne.binding("util");
      } catch (t) {}
    }(),
        Ye = Xe && Xe.isTypedArray,
        He = Array.prototype,
        We = Function.prototype,
        Ve = Object.prototype,
        ze = je["__core-js_shared__"],
        $e = function () {
      var t = /[^.]+$/.exec(ze && ze.keys && ze.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }(),
        qe = We.toString,
        Qe = Ve.hasOwnProperty,
        Je = Ve.toString,
        Ke = RegExp("^" + qe.call(Qe).replace(Ce, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Ze = je.Symbol,
        ti = je.Uint8Array,
        ei = Ve.propertyIsEnumerable,
        ii = He.splice,
        ni = l(Object.keys, Object),
        ri = Math.max,
        si = ht(je, "DataView"),
        ai = ht(je, "Map"),
        oi = ht(je, "Promise"),
        hi = ht(je, "Set"),
        ci = ht(je, "WeakMap"),
        ui = ht(Object, "create"),
        li = gt(si),
        di = gt(ai),
        fi = gt(oi),
        pi = gt(hi),
        _i = gt(ci),
        vi = Ze ? Ze.prototype : void 0,
        mi = vi ? vi.valueOf : void 0,
        gi = vi ? vi.toString : void 0;

    f.prototype.clear = p, f.prototype["delete"] = _, f.prototype.get = v, f.prototype.has = m, f.prototype.set = g, x.prototype.clear = b, x.prototype["delete"] = w, x.prototype.get = y, x.prototype.has = E, x.prototype.set = T, C.prototype.clear = S, C.prototype["delete"] = R, C.prototype.get = A, C.prototype.has = D, C.prototype.set = M, I.prototype.add = I.prototype.push = P, I.prototype.has = O, F.prototype.clear = L, F.prototype["delete"] = B, F.prototype.get = j, F.prototype.has = k, F.prototype.set = U;
    var xi = Y;
    (si && xi(new si(new ArrayBuffer(1))) != le || ai && xi(new ai()) != ee || oi && xi(oi.resolve()) != re || hi && xi(new hi()) != ae || ci && xi(new ci()) != ce) && (xi = function (t) {
      var e = Je.call(t),
          i = e == ne ? t.constructor : void 0,
          n = i ? gt(i) : void 0;
      if (n) switch (n) {
        case li:
          return le;

        case di:
          return ee;

        case fi:
          return re;

        case pi:
          return ae;

        case _i:
          return ce;
      }
      return e;
    });
    var bi = bt(function (t) {
      t = Ot(t);
      var e = [];
      return Ee.test(t) && e.push(""), t.replace(Te, function (t, i, n, r) {
        e.push(n ? r.replace(Re, "$1") : i || t);
      }), e;
    });
    bt.Cache = C;
    var wi = Array.isArray,
        yi = Ye ? o(Ye) : q;
    i.exports = xt;
  }).call(e, i(10), i(34)(t));
}, function (t, e, i) {
  (function (e) {
    function i(t, e, i) {
      switch (i.length) {
        case 0:
          return t.call(e);

        case 1:
          return t.call(e, i[0]);

        case 2:
          return t.call(e, i[0], i[1]);

        case 3:
          return t.call(e, i[0], i[1], i[2]);
      }

      return t.apply(e, i);
    }

    function n(t, e) {
      var i = t ? t.length : 0;
      return !!i && o(t, e, 0) > -1;
    }

    function r(t, e, i) {
      for (var n = -1, r = t ? t.length : 0; ++n < r;) if (i(e, t[n])) return !0;

      return !1;
    }

    function s(t, e) {
      for (var i = -1, n = t ? t.length : 0, r = Array(n); ++i < n;) r[i] = e(t[i], i, t);

      return r;
    }

    function a(t, e, i, n) {
      for (var r = t.length, s = i + (n ? 1 : -1); n ? s-- : ++s < r;) if (e(t[s], s, t)) return s;

      return -1;
    }

    function o(t, e, i) {
      if (e !== e) return a(t, h, i);

      for (var n = i - 1, r = t.length; ++n < r;) if (t[n] === e) return n;

      return -1;
    }

    function h(t) {
      return t !== t;
    }

    function c(t) {
      return function (e) {
        return t(e);
      };
    }

    function u(t, e) {
      return t.has(e);
    }

    function l(t, e) {
      return null == t ? void 0 : t[e];
    }

    function d(t) {
      var e = !1;
      if (null != t && "function" != typeof t.toString) try {
        e = !!(t + "");
      } catch (i) {}
      return e;
    }

    function f(t) {
      var e = this,
          i = -1,
          n = t ? t.length : 0;

      for (this.clear(); ++i < n;) {
        var r = t[i];
        e.set(r[0], r[1]);
      }
    }

    function p() {
      this.__data__ = xt ? xt(null) : {};
    }

    function _(t) {
      return this.has(t) && delete this.__data__[t];
    }

    function v(t) {
      var e = this.__data__;

      if (xt) {
        var i = e[t];
        return i === J ? void 0 : i;
      }

      return dt.call(e, t) ? e[t] : void 0;
    }

    function m(t) {
      var e = this.__data__;
      return xt ? void 0 !== e[t] : dt.call(e, t);
    }

    function g(t, e) {
      var i = this.__data__;
      return i[t] = xt && void 0 === e ? J : e, this;
    }

    function x(t) {
      var e = this,
          i = -1,
          n = t ? t.length : 0;

      for (this.clear(); ++i < n;) {
        var r = t[i];
        e.set(r[0], r[1]);
      }
    }

    function b() {
      this.__data__ = [];
    }

    function w(t) {
      var e = this.__data__,
          i = F(e, t);
      if (i < 0) return !1;
      var n = e.length - 1;
      return i == n ? e.pop() : _t.call(e, i, 1), !0;
    }

    function y(t) {
      var e = this.__data__,
          i = F(e, t);
      return i < 0 ? void 0 : e[i][1];
    }

    function E(t) {
      return F(this.__data__, t) > -1;
    }

    function T(t, e) {
      var i = this.__data__,
          n = F(i, t);
      return n < 0 ? i.push([t, e]) : i[n][1] = e, this;
    }

    function C(t) {
      var e = this,
          i = -1,
          n = t ? t.length : 0;

      for (this.clear(); ++i < n;) {
        var r = t[i];
        e.set(r[0], r[1]);
      }
    }

    function S() {
      this.__data__ = {
        hash: new f(),
        map: new (gt || x)(),
        string: new f()
      };
    }

    function R(t) {
      return U(this, t)["delete"](t);
    }

    function A(t) {
      return U(this, t).get(t);
    }

    function D(t) {
      return U(this, t).has(t);
    }

    function M(t, e) {
      return U(this, t).set(t, e), this;
    }

    function I(t) {
      var e = this,
          i = -1,
          n = t ? t.length : 0;

      for (this.__data__ = new C(); ++i < n;) e.add(t[i]);
    }

    function P(t) {
      return this.__data__.set(t, J), this;
    }

    function O(t) {
      return this.__data__.has(t);
    }

    function F(t, e) {
      for (var i = t.length; i--;) if (H(t[i][0], e)) return i;

      return -1;
    }

    function L(t, e, i) {
      for (var a = i ? r : n, o = t[0].length, h = t.length, l = h, d = Array(h), f = 1 / 0, p = []; l--;) {
        var _ = t[l];
        l && e && (_ = s(_, c(e))), f = mt(_.length, f), d[l] = !i && (e || o >= 120 && _.length >= 120) ? new I(l && _) : void 0;
      }

      _ = t[0];
      var v = -1,
          m = d[0];

      t: for (; ++v < o && p.length < f;) {
        var g = _[v],
            x = e ? e(g) : g;

        if (g = i || 0 !== g ? g : 0, !(m ? u(m, x) : a(p, x, i))) {
          for (l = h; --l;) {
            var b = d[l];
            if (!(b ? u(b, x) : a(t[l], x, i))) continue t;
          }

          m && m.push(x), p.push(g);
        }
      }

      return p;
    }

    function B(t) {
      if (!q(t) || X(t)) return !1;
      var e = z(t) || d(t) ? pt : it;
      return e.test(Y(t));
    }

    function j(t, e) {
      return e = vt(void 0 === e ? t.length - 1 : e, 0), function () {
        for (var n = arguments, r = -1, s = vt(n.length - e, 0), a = Array(s); ++r < s;) a[r] = n[e + r];

        r = -1;

        for (var o = Array(e + 1); ++r < e;) o[r] = n[r];

        return o[e] = a, i(t, this, o);
      };
    }

    function k(t) {
      return V(t) ? t : [];
    }

    function U(t, e) {
      var i = t.__data__;
      return N(e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
    }

    function G(t, e) {
      var i = l(t, e);
      return B(i) ? i : void 0;
    }

    function N(t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
    }

    function X(t) {
      return !!ut && ut in t;
    }

    function Y(t) {
      if (null != t) {
        try {
          return lt.call(t);
        } catch (e) {}

        try {
          return t + "";
        } catch (e) {}
      }

      return "";
    }

    function H(t, e) {
      return t === e || t !== t && e !== e;
    }

    function W(t) {
      return null != t && $(t.length) && !z(t);
    }

    function V(t) {
      return Q(t) && W(t);
    }

    function z(t) {
      var e = q(t) ? ft.call(t) : "";
      return e == Z || e == tt;
    }

    function $(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= K;
    }

    function q(t) {
      var e = typeof t;
      return !!t && ("object" == e || "function" == e);
    }

    function Q(t) {
      return !!t && "object" == typeof t;
    }

    var J = "__lodash_hash_undefined__",
        K = 9007199254740991,
        Z = "[object Function]",
        tt = "[object GeneratorFunction]",
        et = /[\\^$.*+?()[\]{}|]/g,
        it = /^\[object .+?Constructor\]$/,
        nt = "object" == typeof e && e && e.Object === Object && e,
        rt = "object" == typeof self && self && self.Object === Object && self,
        st = nt || rt || Function("return this")(),
        at = Array.prototype,
        ot = Function.prototype,
        ht = Object.prototype,
        ct = st["__core-js_shared__"],
        ut = function () {
      var t = /[^.]+$/.exec(ct && ct.keys && ct.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }(),
        lt = ot.toString,
        dt = ht.hasOwnProperty,
        ft = ht.toString,
        pt = RegExp("^" + lt.call(dt).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        _t = at.splice,
        vt = Math.max,
        mt = Math.min,
        gt = G(st, "Map"),
        xt = G(Object, "create");

    f.prototype.clear = p, f.prototype["delete"] = _, f.prototype.get = v, f.prototype.has = m, f.prototype.set = g, x.prototype.clear = b, x.prototype["delete"] = w, x.prototype.get = y, x.prototype.has = E, x.prototype.set = T, C.prototype.clear = S, C.prototype["delete"] = R, C.prototype.get = A, C.prototype.has = D, C.prototype.set = M, I.prototype.add = I.prototype.push = P, I.prototype.has = O;
    var bt = j(function (t) {
      var e = s(t, k);
      return e.length && e[0] === t[0] ? L(e) : [];
    });
    t.exports = bt;
  }).call(e, i(10));
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = i(3),
      s = i(6),
      a = i(5),
      o = i(2),
      h = i(4);
  e["default"] = {
    props: ["image"],
    updatesEaselCache: ["component", "scale"],
    mixins: [r.a, a.a, o.a, h.a],
    render: function () {
      return "<!-- bitmap -->";
    },
    watch: {
      image: function () {
        this.component = new n.a.Bitmap(this.image);
      }
    },
    mounted: function () {
      this.component = new n.a.Bitmap(this.image);
    },
    methods: {
      getAlignDimensions: function () {
        return i.i(s.a)(this);
      },
      getCacheBounds: function () {
        return this.updateAlign().then(function (t) {
          var e = t.width,
              i = t.height;
          return {
            x: 0,
            y: 0,
            width: e,
            height: i
          };
        });
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = i(8),
      r = i(0),
      s = i(9);
  e["default"] = {
    mixins: [s.a],
    provide: function () {
      return {
        easelCanvas: this
      };
    },
    props: {
      antiAlias: {
        "default": !0
      },
      height: {},
      width: {},
      viewportHeight: {},
      viewportWidth: {}
    },
    data: function () {
      return {
        component: null,
        context: null,
        easelCanvas: this
      };
    },
    mounted: function () {
      var t = this;
      this.component = new r.a.Stage(this.$refs.canvas), this.context = this.component.canvas.getContext("2d"), r.a.Touch.enable(this.component, !1, !0), n.a.bindEvents(this, this.component), r.a.Ticker.addEventListener("tick", function (e) {
        return t.component.update(e);
      }), this.resizeHandler = function () {
        return t.updateSize();
      }, window.addEventListener("resize", this.resizeHandler), this.updateSize(), this.component.enableMouseOver();
    },
    destroyed: function () {
      r.a.Touch.disable(this.component), window.removeEventListener("resize", this.resizeHandler);
    },
    watch: {
      antiAlias: function () {
        this.updateAntiAlias();
      },
      height: function () {
        this.updateSize();
      },
      width: function () {
        this.updateSize();
      },
      viewportScale: function () {
        this.updateSize();
      }
    },
    computed: {
      viewport: function () {
        return {
          width: this.viewportWidth || this.width,
          height: this.viewportHeight || this.height
        };
      },
      viewportScale: function () {
        return {
          scaleX: this.width / this.viewport.width,
          scaleY: this.height / this.viewport.height
        };
      }
    },
    methods: {
      updateAntiAlias: function () {
        this.context.imageSmoothingEnabled = this.antiAlias, this.context.mozImageSmoothingEnabled = this.antiAlias, this.context.webkitImageSmoothingEnabled = this.antiAlias, this.context.msImageSmoothingEnabled = this.antiAlias;
      },
      updateSize: function () {
        var t = this,
            e = this.$refs.canvas;
        e.width = this.width * window.devicePixelRatio, e.height = this.height * window.devicePixelRatio, e.style.width = this.width + "px", e.style.height = this.height + "px", this.component.scaleX = this.viewportScale.scaleX * window.devicePixelRatio, this.component.scaleY = this.viewportScale.scaleY * window.devicePixelRatio, this.$nextTick(function () {
          return t.updateAntiAlias();
        });
      },
      createCanvas: function (t) {
        var e = r.a.createCanvas;
        r.a.createCanvas = this.createCreateCanvasMethod(), t(), r.a.createCanvas = e;
      },
      createCreateCanvasMethod: function () {
        var t = this;
        return function () {
          var e = document.createElement("canvas"),
              i = e.getContext.bind(e);
          return e.getContext = function (e) {
            var n = i(e);
            return n.imageSmoothingEnabled = t.antiAlias, n.mozImageSmoothingEnabled = t.antiAlias, n.webkitImageSmoothingEnabled = t.antiAlias, n.msImageSmoothingEnabled = t.antiAlias, n;
          }, e;
        };
      },
      augmentEvent: function (t) {
        var e = this.translateCoordinates(t.stageX, t.stageY),
            i = e[0],
            n = e[1];
        return t.viewportX = i, t.viewportY = n, t;
      },
      translateCoordinates: function (t, e) {
        return [t / this.component.scaleX, e / this.component.scaleY];
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = i(3),
      s = i(9),
      a = i(2),
      o = i(4);
  e["default"] = {
    mixins: [r.a, s.a, a.a, o.a],
    updatesEaselCache: ["children", "scale"],
    mounted: function () {
      this.component = new n.a.Container();
    },
    methods: {
      getCacheBounds: function () {
        var t = this;
        return Promise.all(this.children.map(function (t) {
          return t.getRelativeCacheBounds ? t.getRelativeCacheBounds() : Promise.reject("<" + t.$options.name + "> does not mixin EaselCache");
        })).then(function (e) {
          return e.reduce(t.getSmallestCombination, {
            x: 0,
            y: 0,
            width: 1,
            height: 1
          });
        });
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = i(3),
      s = i(2),
      a = i(4),
      o = i(5);
  e["default"] = {
    mixins: [r.a, o.a, s.a, a.a],
    props: ["form", "fill", "stroke", "dimensions"],
    updatesEaselCache: ["form", "fill", "stroke", "dimensions", "scale"],
    render: function () {
      return "<!-- shape -->";
    },
    watch: {
      form: function () {
        this.refresh();
      },
      fill: function () {
        this.refresh();
      },
      stroke: function () {
        this.refresh();
      },
      dimensions: function () {
        this.refresh();
      }
    },
    computed: {
      radiuses: function () {
        return this.dimensions.length <= 2 ? [] : 6 === this.dimensions.length ? this.dimensions.slice(2, 6) : [this.dimensions[2], this.dimensions[2], this.dimensions[2], this.dimensions[2]];
      }
    },
    mounted: function () {
      this.component = new n.a.Shape(), this.refresh();
    },
    methods: {
      refresh: function () {
        this.component && (this.component.graphics.clear(), this.fill && this.component.graphics.beginFill(this.fill), this.stroke && this.component.graphics.beginStroke(this.stroke), this.drawForm(), this.updateAlign());
      },
      drawForm: function () {
        if ("circle" === this.form) this.component.graphics.drawCircle(this.dimensions, this.dimensions, this.dimensions);else if ("ellipse" === this.form) this.component.graphics.drawEllipse(0, 0, this.dimensions[0], this.dimensions[1]);else if ("rect" === this.form) {
          var t = this.radiuses;
          0 === t.length ? this.component.graphics.drawRect(0, 0, this.dimensions[0], this.dimensions[1]) : this.component.graphics.drawRoundRectComplex(0, 0, this.dimensions[0], this.dimensions[1], t[0], t[1], t[2], t[3]);
        } else "star" === this.form && this.component.graphics.drawPolyStar(this.dimensions[0], this.dimensions[0], this.dimensions[0], this.dimensions[1], this.dimensions[2], 0);
      },
      getAlignDimensions: function () {
        return "rect" === this.form || "ellipse" === this.form ? Promise.resolve({
          width: this.dimensions[0],
          height: this.dimensions[1]
        }) : "circle" === this.form ? Promise.resolve({
          width: 2 * this.dimensions,
          height: 2 * this.dimensions
        }) : "star" === this.form ? Promise.resolve({
          width: 2 * this.dimensions[0],
          height: 2 * this.dimensions[0]
        }) : Promise.reject("No dimensions available for form " + this.form);
      },
      getCacheBounds: function () {
        return this.updateAlign().then(function (t) {
          var e = t.width,
              i = t.height;
          return {
            x: 0,
            y: 0,
            width: e,
            height: i
          };
        });
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = i(3),
      s = i(6),
      a = i(5),
      o = i(2),
      h = i(4);
  e["default"] = {
    inject: ["spriteSheet"],
    props: ["animation"],
    updatesEaselCache: ["animation", "scale"],
    mixins: [r.a, a.a, o.a, h.a],
    render: function () {
      return "<!-- sprite -->";
    },
    watch: {
      animation: function () {
        this.component && this.component.gotoAndPlay(this.animation);
      }
    },
    mounted: function () {
      this.component = new n.a.Sprite(this.spriteSheet), this.animation && this.component.gotoAndPlay(this.animation);
    },
    methods: {
      getAlignDimensions: function () {
        return i.i(s.a)(this);
      },
      getCacheBounds: function () {
        return this.updateAlign().then(function (t) {
          var e = t.width,
              i = t.height;
          return {
            x: 0,
            y: 0,
            width: e,
            height: i
          };
        });
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = i(0);
  e["default"] = {
    provide: function () {
      return {
        spriteSheet: this.spriteSheet
      };
    },
    props: ["images", "frames", "animations", "framerate"],
    data: function () {
      return {
        spriteSheet: new n.a.SpriteSheet({
          images: this.images,
          frames: this.frames,
          animations: this.animations,
          framerate: this.framerate
        })
      };
    }
  };
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = i(3),
      s = i(5),
      a = i(2),
      o = i(6),
      h = i(4);
  e["default"] = {
    mixins: [r.a, s.a, a.a, h.a],
    props: ["text", "font", "color"],
    updatesEaselCache: ["text", "font", "color", "scale"],
    render: function () {
      return "<!-- text -->";
    },
    watch: {
      text: function () {
        this.component.text = this.text;
      },
      font: function () {
        this.component.font = this.font;
      },
      color: function () {
        this.component.color = this.color;
      }
    },
    mounted: function () {
      this.component = new n.a.Text(this.text, this.font, this.color);
    },
    methods: {
      updateAlign: function () {
        var t = this.normalizedAlign,
            e = t[0],
            i = t[1];
        this.component.textAlign = e || "left", this.component.textBaseline = "center" === i ? "middle" : i || "top";
      },
      getAlignDimensions: function () {
        return this.getCacheBounds();
      },
      getCacheBounds: function () {
        return i.i(o.a)(this).then(function (t) {
          var e = t.x,
              i = t.y,
              n = t.width,
              r = t.height;
          return {
            x: e,
            y: i,
            width: n,
            height: r
          };
        });
      }
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return t.l;
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return t.i;
      }
    }), t.webpackPolyfill = 1), t;
  };
}, function (t, e, i) {
  t.exports = {
    render: function () {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;
      return i("span", [t._t("default")], 2);
    },
    staticRenderFns: []
  }, t.exports.render._withStripped = !0;
}, function (t, e, i) {
  t.exports = {
    render: function () {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;
      return i("div", [t._t("default")], 2);
    },
    staticRenderFns: []
  }, t.exports.render._withStripped = !0;
}, function (t, e, i) {
  t.exports = {
    render: function () {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;
      return i("canvas", {
        ref: "canvas"
      }, [t._t("default")], 2);
    },
    staticRenderFns: []
  }, t.exports.render._withStripped = !0;
}, function (t, e, i) {
  "use strict";

  var n = i(0),
      r = i(7);
  t.exports = {
    createjs: n.a,
    easeljs: n.a,
    EaselBitmap: i(11),
    EaselCanvas: i(12),
    EaselContainer: i(13),
    EaselShape: i(14),
    EaselSprite: i(15),
    EaselSpriteSheet: i(16),
    EaselText: i(17),
    install: function (t) {
      t.component("easel-bitmap", this.EaselBitmap), t.component("easel-canvas", this.EaselCanvas), t.component("easel-container", this.EaselContainer), t.component("easel-shape", this.EaselShape), t.component("easel-sprite", this.EaselSprite), t.component("easel-sprite-sheet", this.EaselSpriteSheet), t.component("easel-text", this.EaselText);
    },
    registerFilter: function () {
      for (var t = arguments, e = [], i = arguments.length; i--;) e[i] = t[i];

      return r.a.register.apply(r.a, e);
    }
  };
}]));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Exampler.vue?vue&type=template&id=223a757e&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Exampler.vue?vue&type=template&id=223a757e& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.code,
            expression: "code"
          }
        ],
        staticStyle: { width: "100%", height: "15em" },
        domProps: { value: _vm.code },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.code = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.errors.length > 0
        ? _c(
            "div",
            _vm._l(_vm.errors, function(error) {
              return _c("pre", { key: error }, [_vm._v(_vm._s(error))])
            }),
            0
          )
        : _vm.is
        ? _c(_vm.is, { tag: "component" })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Gary.vue?vue&type=template&id=3eab0ccc&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Gary.vue?vue&type=template&id=3eab0ccc& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "input-group col-xs-12" }, [
          _c("span", { staticClass: "input-group-addon" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.showLabels,
                  expression: "showLabels"
                }
              ],
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.showLabels)
                  ? _vm._i(_vm.showLabels, null) > -1
                  : _vm.showLabels
              },
              on: {
                change: function($event) {
                  var $$a = _vm.showLabels,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.showLabels = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.showLabels = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.showLabels = $$c
                  }
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "form-control" }, [_vm._v("Show Labels")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group col-xs-12" }, [
          _c("span", { staticClass: "input-group-addon" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.showPoints,
                  expression: "showPoints"
                }
              ],
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.showPoints)
                  ? _vm._i(_vm.showPoints, null) > -1
                  : _vm.showPoints
              },
              on: {
                change: function($event) {
                  var $$a = _vm.showPoints,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.showPoints = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.showPoints = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.showPoints = $$c
                  }
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "form-control" }, [_vm._v("Show Points")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group col-xs-12" }, [
          _c("span", { staticClass: "input-group-addon" }, [_vm._v("Scale")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.resultScale,
                expression: "resultScale",
                modifiers: { number: true }
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "range",
              "aria-label": "Gary's Scale",
              min: "0.01",
              max: "20.00",
              step: "0.1"
            },
            domProps: { value: _vm.resultScale },
            on: {
              __r: function($event) {
                _vm.resultScale = _vm._n($event.target.value)
              },
              blur: function($event) {
                return _vm.$forceUpdate()
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm.runningLocally
          ? _c("button", { on: { click: _vm.toggleRun } }, [
              _vm._v("Toggle Run")
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "easel-canvas",
        {
          ref: "canvas",
          staticStyle: { "background-color": "grey" },
          attrs: {
            width: _vm.width,
            height: _vm.height,
            "viewport-width": "400",
            "viewport-height": "300",
            "anti-alias": false
          },
          on: { click: _vm.toggleRun }
        },
        [
          _c("easel-bitmap", {
            attrs: {
              image: "images/gulfstream_park.jpg",
              x: "200",
              y: "150",
              scale: 300 / 850,
              align: ["center", "center"]
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.points, function(point, i) {
            return _vm.showPoints
              ? _c("easel-shape", {
                  key: i,
                  attrs: {
                    form: "circle",
                    dimensions: "3",
                    stroke: "black",
                    fill: point === _vm.gary.target ? "red" : "white",
                    x: point[0],
                    y: point[1],
                    align: ["center", "center"]
                  }
                })
              : _vm._e()
          }),
          _vm._v(" "),
          _c(
            "easel-sprite-sheet",
            {
              attrs: {
                images: ["images/lastguardian-all.png"],
                frames: { width: 32, height: 32 },
                animations: {
                  stand: _vm.garyStart + 5,
                  runRight: [_vm.garyStart + 6, _vm.garyStart + 7],
                  runUp: [_vm.garyStart + 0, _vm.garyStart + 1],
                  runDown: [_vm.garyStart + 2, _vm.garyStart + 3]
                },
                framerate: 30
              }
            },
            [
              _c(
                "easel-container",
                {
                  attrs: {
                    x: _vm.gary.x,
                    y: _vm.gary.y,
                    scale: _vm.resultScale
                  }
                },
                [
                  _c("easel-shape", {
                    attrs: {
                      fill: "black",
                      form: "ellipse",
                      dimensions: [16, 4],
                      alpha: ".3",
                      align: "center-center"
                    }
                  }),
                  _vm._v(" "),
                  _c("easel-sprite", {
                    attrs: {
                      animation: _vm.gary.animation,
                      flip: _vm.gary.flip,
                      align: "bottom-center"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.showLabels
                ? _c("easel-text", {
                    attrs: {
                      text: "Gary",
                      color: "yellow",
                      font: "20px Helvetica",
                      align: "alphabetic-center",
                      filters: [
                        ["PixelStrokeFilter", [0, 0, 0], 2 * _vm.resultScale]
                      ],
                      x: _vm.gary.x,
                      y: _vm.gary.y - 40 * _vm.resultScale,
                      scale: _vm.resultScale
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.js":
/*!**************************************!*\
  !*** ./node_modules/vue/dist/vue.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';
  /*  */

  var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.

  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }
  /**
   * Check if value is primitive.
   */


  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
    typeof value === 'symbol' || typeof value === 'boolean';
  }
  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */


  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }
  /**
   * Get the raw type string of a value, e.g., [object Object].
   */


  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }
  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */


  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }
  /**
   * Check if val is a valid array index.
   */


  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  function isPromise(val) {
    return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
  }
  /**
   * Convert a value to a string that is actually rendered.
   */


  function toString(val) {
    return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
  }
  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */


  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }
  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */


  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');

    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }

    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }
  /**
   * Check if a tag is a built-in tag.
   */


  var isBuiltInTag = makeMap('slot,component', true);
  /**
   * Check if an attribute is a reserved attribute.
   */

  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
  /**
   * Remove an item from an array.
   */

  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);

      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }
  /**
   * Check whether an object has the property.
   */


  var hasOwnProperty = Object.prototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  /**
   * Create a cached version of a pure function.
   */


  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }
  /**
   * Camelize a hyphen-delimited string.
   */


  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });
  /**
   * Capitalize a string.
   */

  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  /**
   * Hyphenate a camelCase string.
   */

  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });
  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */

  function polyfillBind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function nativeBind(fn, ctx) {
    return fn.bind(ctx);
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;
  /**
   * Convert an Array-like object to a real Array.
   */

  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);

    while (i--) {
      ret[i] = list[i + start];
    }

    return ret;
  }
  /**
   * Mix properties into target object.
   */


  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }

    return to;
  }
  /**
   * Merge an Array of Objects into a single Object.
   */


  function toObject(arr) {
    var res = {};

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }

    return res;
  }
  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */


  function noop(a, b, c) {}
  /**
   * Always return false.
   */


  var no = function (a, b, c) {
    return false;
  };
  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */


  var identity = function (_) {
    return _;
  };
  /**
   * Generate a string containing static keys from compiler modules.
   */


  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }
  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */


  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }

    var isObjectA = isObject(a);
    var isObjectB = isObject(b);

    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);

        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime();
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }
  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */


  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }

    return -1;
  }
  /**
   * Ensure a function is called only once.
   */


  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';
  var ASSET_TYPES = ['component', 'directive', 'filter'];
  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };
  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */

  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
  /**
   * Check if a string starts with $ or _
   */

  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }
  /**
   * Define a property.
   */


  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }
  /**
   * Parse simple path.
   */


  var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }

    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }

        obj = obj[segments[i]];
      }

      return obj;
    };
  }
  /*  */
  // can we use __proto__?


  var hasProto = ('__proto__' in {}); // Browser environment sniffing

  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

  var nativeWatch = {}.watch;
  var supportsPassive = false;

  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285

      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  } // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV


  var _isServer;

  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }

    return _isServer;
  }; // detect devtools


  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  /* istanbul ignore next */

  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */
  // $flow-disable-line


  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/function () {
      function Set() {
        this.set = Object.create(null);
      }

      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };

      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };

      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }
  /*  */


  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check

  var formatComponentName = noop;
  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;

    var classify = function (str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }

      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;

      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function (str, n) {
      var res = '';

      while (n) {
        if (n % 2 === 1) {
          res += str;
        }

        if (n > 1) {
          str += str;
        }

        n >>= 1;
      }

      return res;
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;

        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];

            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }

          tree.push(vm);
          vm = vm.$parent;
        }

        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }
  /*  */

  var uid = 0;
  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */

  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();

    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) {
        return a.id - b.id;
      });
    }

    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }; // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.


  Dep.target = null;
  var targetStack = [];

  function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }
  /*  */


  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = {
    child: {
      configurable: true
    }
  }; // DEPRECATED: alias for componentInstance for backwards compat.

  /* istanbul ignore next */

  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function (text) {
    if (text === void 0) text = '';
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  } // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.


  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
  }
  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */


  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);
  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
  /**
   * Intercept mutating methods and emit events
   */

  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;

      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;

        case 'splice':
          inserted = args.slice(2);
          break;
      }

      if (inserted) {
        ob.observeArray(inserted);
      } // notify change


      ob.dep.notify();
      return result;
    });
  });
  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */

  var shouldObserve = true;

  function toggleObserving(value) {
    shouldObserve = value;
  }
  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */


  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }

      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };
  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };
  /**
   * Observe a list of Array items.
   */


  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }; // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */


  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }
  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */

  /* istanbul ignore next */


  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }
  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */


  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }

    var ob;

    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }

    if (asRootData && ob) {
      ob.vmCount++;
    }

    return ob;
  }
  /**
   * Define a reactive property on an Object.
   */


  function defineReactive$$1(obj, key, val, customSetter, shallow) {
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);

    if (property && property.configurable === false) {
      return;
    } // cater for pre-defined getter/setters


    var getter = property && property.get;
    var setter = property && property.set;

    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;

        if (Dep.target) {
          dep.depend();

          if (childOb) {
            childOb.dep.depend();

            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }

        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */

        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */


        if (customSetter) {
          customSetter();
        } // #7981: for accessor properties without setter


        if (getter && !setter) {
          return;
        }

        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }

        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }
  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */


  function set(target, key, val) {
    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }

    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }

    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }

    if (!ob) {
      target[key] = val;
      return val;
    }

    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }
  /**
   * Delete a property and trigger change if necessary.
   */


  function del(target, key) {
    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }

    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }

    if (!hasOwn(target, key)) {
      return;
    }

    delete target[key];

    if (!ob) {
      return;
    }

    ob.dep.notify();
  }
  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */


  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();

      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }
  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */


  var strats = config.optionMergeStrategies;
  /**
   * Options with restrictions
   */

  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }

      return defaultStrat(parent, child);
    };
  }
  /**
   * Helper that recursively merges two data objects together.
   */

  function mergeData(to, from) {
    if (!from) {
      return to;
    }

    var key, toVal, fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i]; // in case the object is already observed...

      if (key === '__ob__') {
        continue;
      }

      toVal = to[key];
      fromVal = from[key];

      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }

    return to;
  }
  /**
   * Data
   */


  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }

      if (!parentVal) {
        return childVal;
      } // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.


      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
        return parentVal;
      }

      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };
  /**
   * Hooks and props are merged as arrays.
   */


  function mergeHook(parentVal, childVal) {
    var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    return res ? dedupeHooks(res) : res;
  }

  function dedupeHooks(hooks) {
    var res = [];

    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }

    return res;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });
  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */

  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);

    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });
  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */

  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }

    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */


    if (!childVal) {
      return Object.create(parentVal || null);
    }

    {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = {};
    extend(ret, parentVal);

    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];

      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }

      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }

    return ret;
  };
  /**
   * Other object hashes.
   */


  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = Object.create(null);
    extend(ret, parentVal);

    if (childVal) {
      extend(ret, childVal);
    }

    return ret;
  };

  strats.provide = mergeDataOrFn;
  /**
   * Default strategy.
   */

  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };
  /**
   * Validate component names
   */


  function checkComponents(options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
    }

    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }
  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */


  function normalizeProps(options, vm) {
    var props = options.props;

    if (!props) {
      return;
    }

    var res = {};
    var i, val, name;

    if (Array.isArray(props)) {
      i = props.length;

      while (i--) {
        val = props[i];

        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = {
            type: null
          };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : {
          type: val
        };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }

    options.props = res;
  }
  /**
   * Normalize all injections into Object-based format
   */


  function normalizeInject(options, vm) {
    var inject = options.inject;

    if (!inject) {
      return;
    }

    var normalized = options.inject = {};

    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = {
          from: inject[i]
        };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({
          from: key
        }, val) : {
          from: val
        };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }
  /**
   * Normalize raw function directives into object format.
   */


  function normalizeDirectives(options) {
    var dirs = options.directives;

    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];

        if (typeof def$$1 === 'function') {
          dirs[key] = {
            bind: def$$1,
            update: def$$1
          };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }
  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */


  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child); // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.

    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }

      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;

    for (key in parent) {
      mergeField(key);
    }

    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }

    return options;
  }
  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */


  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }

    var assets = options[type]; // check local registration variations first

    if (hasOwn(assets, id)) {
      return assets[id];
    }

    var camelizedId = camelize(id);

    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }

    var PascalCaseId = capitalize(camelizedId);

    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    } // fallback to prototype chain


    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

    if (warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }

    return res;
  }
  /*  */


  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key]; // boolean casting

    var booleanIndex = getTypeIndex(Boolean, prop.type);

    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);

        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    } // check default value


    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
      // make sure to observe it.

      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }

    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }
  /**
   * Get the default value of a prop.
   */


  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }

    var def = prop.default; // warn against non-factory defaults for Object & Array

    if (isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    } // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger


    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    } // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context


    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }
  /**
   * Assert whether a prop is valid.
   */


  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }

    if (value == null && !prop.required) {
      return;
    }

    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];

    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }

      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
      return;
    }

    var validator = prop.validator;

    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);

    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }

    return {
      valid: valid,
      expectedType: expectedType
    };
  }
  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */


  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isSameType(a, b) {
    return getType(a) === getType(b);
  }

  function getTypeIndex(type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }

    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }

    return -1;
  }

  function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }

    message += ", got " + receivedType + " "; // check if we need to specify received value

    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }

    return message;
  }

  function styleValue(value, type) {
    if (type === 'String') {
      return "\"" + value + "\"";
    } else if (type === 'Number') {
      return "" + Number(value);
    } else {
      return "" + value;
    }
  }

  function isExplicable(value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) {
      return value.toLowerCase() === elem;
    });
  }

  function isBoolean() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    return args.some(function (elem) {
      return elem.toLowerCase() === 'boolean';
    });
  }
  /*  */


  function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();

    try {
      if (vm) {
        var cur = vm;

        while (cur = cur.$parent) {
          var hooks = cur.$options.errorCaptured;

          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;

                if (capture) {
                  return;
                }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }

      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;

    try {
      res = args ? handler.apply(context, args) : handler.call(context);

      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) {
          return handleError(e, vm, info + " (Promise/async)");
        }); // issue #9511
        // avoid catch triggering multiple times when nested calls

        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }

    return res;
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }

    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */

    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
  /*  */


  var isUsingMicroTask = false;
  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;

    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  } // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).


  var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:

  /* istanbul ignore next, $flow-disable-line */

  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();

    timerFunc = function () {
      p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.

      if (isIOS) {
        setTimeout(noop);
      }
    };

    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });

    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };

    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick(cb, ctx) {
    var _resolve;

    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });

    if (!pending) {
      pending = true;
      timerFunc();
    } // $flow-disable-line


    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }
  /*  */


  var mark;
  var measure;
  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */

    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function (tag) {
        return perf.mark(tag);
      };

      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag); // perf.clearMeasures(name)
      };
    }
  }
  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;
  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var warnReservedPrefix = function (target, key) {
      warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = (key in target);
        var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

        if (!has && !isAllowed) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }

        return has || !isAllowed;
      }
    };
    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }

        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }
  /*  */

  var seenObjects = new _Set();
  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */

  function traverse(val) {
    _traverse(val, seenObjects);

    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);

    if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
      return;
    }

    if (val.__ob__) {
      var depId = val.__ob__.dep.id;

      if (seen.has(depId)) {
        return;
      }

      seen.add(depId);
    }

    if (isA) {
      i = val.length;

      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;

      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }
  /*  */


  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns, vm) {
    function invoker() {
      var arguments$1 = arguments;
      var fns = invoker.fns;

      if (Array.isArray(fns)) {
        var cloned = fns.slice();

        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
      }
    }

    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
    var name, def$$1, cur, old, event;

    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);

      if (isUndef(cur)) {
        warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }

        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }

        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }

    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }
  /*  */


  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }

    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
      // and prevent memory leak

      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }
  /*  */


  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;

    if (isUndef(propOptions)) {
      return;
    }

    var res = {};
    var attrs = data.attrs;
    var props = data.props;

    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();

          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }

    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];

        if (!preserve) {
          delete hash[key];
        }

        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];

        if (!preserve) {
          delete hash[altKey];
        }

        return true;
      }
    }

    return false;
  }
  /*  */
  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:
  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.


  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }

    return children;
  } // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.


  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;

    for (i = 0; i < children.length; i++) {
      c = children[i];

      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }

      lastIndex = res.length - 1;
      last = res[lastIndex]; //  nested

      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }

          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }

          res.push(c);
        }
      }
    }

    return res;
  }
  /*  */


  function initProvide(vm) {
    var provide = vm.$options.provide;

    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);

    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]; // #6574 in case the inject object is observed...

        if (key === '__ob__') {
          continue;
        }

        var provideKey = inject[key].from;
        var source = vm;

        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }

          source = source.$parent;
        }

        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }

      return result;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */


  function resolveSlots(children, context) {
    if (!children || !children.length) {
      return {};
    }

    var slots = {};

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      } // named slots should only be respected if the vnode was rendered in the
      // same context.


      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);

        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    } // ignore slots that contains only whitespace


    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }

    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }
  /*  */


  function normalizeScopedSlots(slots, normalSlots, prevSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;

    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized;
    } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots;
    } else {
      res = {};

      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    } // expose normal slots on scopedSlots


    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    } // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error


    if (slots && Object.isExtensible(slots)) {
      slots._normalized = res;
    }

    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
      : normalizeChildren(res);
      return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
      ) ? undefined : res;
    }; // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.


    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }

    return normalized;
  }

  function proxyNormalSlot(slots, key) {
    return function () {
      return slots[key];
    };
  }
  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */


  function renderList(val, render) {
    var ret, i, l, keys, key;

    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);

      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);

      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();

        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);

        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }

    if (!isDef(ret)) {
      ret = [];
    }

    ret._isVList = true;
    return ret;
  }
  /*  */

  /**
   * Runtime helper for rendering <slot>
   */


  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;

    if (scopedSlotFn) {
      // scoped slot
      props = props || {};

      if (bindObject) {
        if (!isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }

        props = extend(extend({}, bindObject), props);
      }

      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;

    if (target) {
      return this.$createElement('template', {
        slot: target
      }, nodes);
    } else {
      return nodes;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving filters
   */


  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }
  /*  */


  function isKeyNotMatch(expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1;
    } else {
      return expect !== actual;
    }
  }
  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */


  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName);
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }
  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */


  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }

        var hash;

        var loop = function (key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }

          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);

          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});

              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop(key);
      }
    }

    return data;
  }
  /*  */

  /**
   * Runtime helper for rendering static trees.
   */


  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.

    if (tree && !isInFor) {
      return tree;
    } // otherwise, render a fresh tree.


    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }
  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */


  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }
  /*  */


  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};

        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }

    return data;
  }
  /*  */


  function resolveScopedSlots(fns, // see flow/vnode
  res, // the following are added in 2.6
  hasDynamicKeys, contentHashKey) {
    res = res || {
      $stable: !hasDynamicKeys
    };

    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];

      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }

        res[slot.key] = slot.fn;
      }
    }

    if (contentHashKey) {
      res.$key = contentHashKey;
    }

    return res;
  }
  /*  */


  function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];

      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a special value for explicitly removing a binding
        warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
      }
    }

    return baseObj;
  } // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.


  function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
  }
  /*  */


  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }
  /*  */


  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var this$1 = this;
    var options = Ctor.options; // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check

    var contextVm;

    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent); // $flow-disable-line

      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent; // $flow-disable-line

      parent = parent._original;
    }

    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);

    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
      }

      return this$1.$slots;
    };

    Object.defineProperty(this, 'scopedSlots', {
      enumerable: true,
      get: function get() {
        return normalizeScopedSlots(data.scopedSlots, this.slots());
      }
    }); // support for compiled functional template

    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options; // pre-resolve slots for renderSlot()

      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);

        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }

        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;

    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }

      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);

      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }

      return res;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }

    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }

    return clone;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }
  /*  */

  /*  */

  /*  */

  /*  */
  // inline hooks to be invoked on component VNodes during patch


  var componentVNodeHooks = {
    init: function init(vnode, hydrating) {
      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow

        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },
    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },
    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }

      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    },
    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    }
  };
  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base; // plain options object: turn it into a constructor

    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    } // if at this stage it's not a constructor or an async component factory,
    // reject.


    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    } // async component


    var asyncFactory;

    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {}; // resolve constructor options in case global mixins are applied after
    // component constructor creation

    resolveConstructorOptions(Ctor); // transform component v-model data into props & events

    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    } // extract props


    var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    } // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners


    var listeners = data.on; // replace with listeners with .native modifier
    // so it gets processed during parent component patch.

    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot
      // work around flow
      var slot = data.slot;
      data = {};

      if (slot) {
        data.slot = slot;
      }
    } // install component management hooks onto the placeholder node


    installComponentHooks(data); // return a placeholder vnode

    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
      Ctor: Ctor,
      propsData: propsData,
      listeners: listeners,
      tag: tag,
      children: children
    }, asyncFactory);
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    }; // check inline-template render functions

    var inlineTemplate = vnode.data.inlineTemplate;

    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }

    return new vnode.componentOptions.Ctor(options);
  }

  function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});

    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];

      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1(f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };

    merged._merged = true;
    return merged;
  } // transform component v-model info (value and callback) into
  // prop and event handler respectively.


  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;

    if (isDef(existing)) {
      if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }
  /*  */


  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
  // without getting yelled at by flow

  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }

    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }

    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    } // object syntax in v-bind


    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }

    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    } // warn against non-primitive key


    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    } // support single function children as default scoped slot


    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = {
        default: children[0]
      };
      children.length = 0;
    }

    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }

    var vnode, ns;

    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

      if (config.isReservedTag(tag)) {
        // platform built-in elements
        if (isDef(data) && isDef(data.nativeOn)) {
          warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
        }

        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }

    if (Array.isArray(vnode)) {
      return vnode;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }

      if (isDef(data)) {
        registerDeepBindings(data);
      }

      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;

    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }

    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];

        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  } // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes


  function registerDeepBindings(data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }

    if (isObject(data.class)) {
      traverse(data.class);
    }
  }
  /*  */


  function initRender(vm) {
    vm._vnode = null; // the root of the child tree

    vm._staticTrees = null; // v-once cached trees

    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates

    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    }; // normalization is always applied for the public version, used in
    // user-written render functions.


    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    }; // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated


    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */

    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
      } // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.


      vm.$vnode = _parentVnode; // render self

      var vnode;

      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render"); // return error render result,
        // or previous vnode to prevent render error causing blank component

        /* istanbul ignore else */

        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      } // if the returned array contains only a single node, allow it


      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      } // return empty vnode in case the render function errored out


      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }

        vnode = createEmptyVNode();
      } // set parent


      vnode.parent = _parentVnode;
      return vnode;
    };
  }
  /*  */


  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }

    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = {
      data: data,
      context: context,
      children: children,
      tag: tag
    };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    var owner = currentRenderingInstance;

    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null;
      owner.$on('hook:destroyed', function () {
        return remove(owners, owner);
      });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          owners[i].$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;

          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }

          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)

        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });
      var reject = once(function (reason) {
        warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });
      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);

            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;

                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;

              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false; // return in case resolved synchronously

      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }
  /*  */


  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }
  /*  */


  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];

        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }
  /*  */

  /*  */


  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false; // init parent attached events

    var listeners = vm.$options._parentListeners;

    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn) {
    target.$on(event, fn);
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler(event, fn) {
    var _target = target;
    return function onceHandler() {
      var res = fn.apply(null, arguments);

      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    };
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;

    Vue.prototype.$on = function (event, fn) {
      var vm = this;

      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup

        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }

      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;

      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }

      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this; // all

      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      } // array of events


      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }

        return vm;
      } // specific event


      var cbs = vm._events[event];

      if (!cbs) {
        return vm;
      }

      if (!fn) {
        vm._events[event] = null;
        return vm;
      } // specific handler


      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();

        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];

      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";

        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }

      return vm;
    };
  }
  /*  */


  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    };
  }

  function initLifecycle(vm) {
    var options = vm.$options; // locate first non-abstract parent

    var parent = options.parent;

    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }

      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.

      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
        /* removeOnly */
        );
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }

      restoreActiveInstance(); // update __vue__ reference

      if (prevEl) {
        prevEl.__vue__ = null;
      }

      if (vm.$el) {
        vm.$el.__vue__ = vm;
      } // if parent is an HOC, update its $el as well


      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      } // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.

    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;

      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;

      if (vm._isBeingDestroyed) {
        return;
      }

      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true; // remove self from parent

      var parent = vm.$parent;

      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      } // teardown watchers


      if (vm._watcher) {
        vm._watcher.teardown();
      }

      var i = vm._watchers.length;

      while (i--) {
        vm._watchers[i].teardown();
      } // remove reference from data ob
      // frozen object may not have observer.


      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      } // call the last hook...


      vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

      vm.__patch__(vm._vnode, null); // fire destroyed hook


      callHook(vm, 'destroyed'); // turn off all instance listeners.

      vm.$off(); // remove __vue__ reference

      if (vm.$el) {
        vm.$el.__vue__ = null;
      } // release circular reference (#6759)


      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;

    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }

    callHook(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */

    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;
        mark(startTag);

        var vnode = vm._render();

        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);
        mark(startTag);

        vm._update(vnode, hydrating);

        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    } // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined


    new Watcher(vm, updateComponent, noop, {
      before: function before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true
    /* isRenderWatcher */
    );
    hydrating = false; // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook

    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }

    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    } // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.

    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.

    var needsForceUpdate = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }

    vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render

    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject; // update props

    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];

      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?

        props[key] = validateProp(key, propOptions, propsData, vm);
      }

      toggleObserving(true); // keep a copy of raw propsData

      vm.$options.propsData = propsData;
    } // update listeners


    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }

    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;

      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }

    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;

      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;

      if (isInInactiveTree(vm)) {
        return;
      }
    }

    if (!vm._inactive) {
      vm._inactive = true;

      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";

    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }

    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }

    popTarget();
  }
  /*  */


  var MAX_UPDATE_COUNT = 100;
  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;
  /**
   * Reset the scheduler's state.
   */

  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  } // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.


  var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

  var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)

  if (inBrowser && !isIE) {
    var performance = window.performance;

    if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () {
        return performance.now();
      };
    }
  }
  /**
   * Flush both queues and run the watchers.
   */


  function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id; // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.

    queue.sort(function (a, b) {
      return a.id - b.id;
    }); // do not cache length because more watchers might be pushed
    // as we run existing watchers

    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];

      if (watcher.before) {
        watcher.before();
      }

      id = watcher.id;
      has[id] = null;
      watcher.run(); // in dev build, check and stop circular updates.

      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;

        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    } // keep copies of post queues before resetting state


    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState(); // call component updated and activated hooks

    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue); // devtool hook

    /* istanbul ignore if */

    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;

    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;

      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }
  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */


  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true
      /* true */
      );
    }
  }
  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */


  function queueWatcher(watcher) {
    var id = watcher.id;

    if (has[id] == null) {
      has[id] = true;

      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;

        while (i > index && queue[i].id > watcher.id) {
          i--;
        }

        queue.splice(i + 1, 0, watcher);
      } // queue the flush


      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return;
        }

        nextTick(flushSchedulerQueue);
      }
    }
  }
  /*  */


  var uid$2 = 0;
  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */

  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;

    if (isRenderWatcher) {
      vm._watcher = this;
    }

    vm._watchers.push(this); // options


    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid$2; // uid for batching

    this.active = true;
    this.dirty = this.lazy; // for lazy watchers

    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString(); // parse expression for getter

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);

      if (!this.getter) {
        this.getter = noop;
        warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }

    this.value = this.lazy ? undefined : this.get();
  };
  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;

    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }

      popTarget();
      this.cleanupDeps();
    }

    return value;
  };
  /**
   * Add a dependency to this directive.
   */


  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;

    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);

      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };
  /**
   * Clean up for dependency collection.
   */


  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var i = this.deps.length;

    while (i--) {
      var dep = this.deps[i];

      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }

    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };
  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */


  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };
  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */


  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();

      if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;

        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };
  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */


  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };
  /**
   * Depend on all deps collected by this watcher.
   */


  Watcher.prototype.depend = function depend() {
    var i = this.deps.length;

    while (i--) {
      this.deps[i].depend();
    }
  };
  /**
   * Remove self from all dependencies' subscriber list.
   */


  Watcher.prototype.teardown = function teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }

      var i = this.deps.length;

      while (i--) {
        this.deps[i].removeSub(this);
      }

      this.active = false;
    }
  };
  /*  */


  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };

    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;

    if (opts.props) {
      initProps(vm, opts.props);
    }

    if (opts.methods) {
      initMethods(vm, opts.methods);
    }

    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true
      /* asRootData */
      );
    }

    if (opts.computed) {
      initComputed(vm, opts.computed);
    }

    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.

    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent; // root instance props should be converted

    if (!isRoot) {
      toggleObserving(false);
    }

    var loop = function (key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */

      {
        var hyphenatedKey = hyphenate(key);

        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }

        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      } // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.

      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop(key);

    toggleObserving(true);
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

    if (!isPlainObject(data)) {
      data = {};
      warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    } // proxy data on instance


    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;

    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }

      if (props && hasOwn(props, key)) {
        warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    } // observe data


    observe(data, true
    /* asRootData */
    );
  }

  function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();

    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = {
    lazy: true
  };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;

      if (getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      } // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.


      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();

    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }

    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];

      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }

        if (Dep.target) {
          watcher.depend();
        }

        return watcher.value;
      }
    };
  }

  function createGetterInvoker(fn) {
    return function computedGetter() {
      return fn.call(this, this);
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;

    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
        }

        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }

        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];

      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }

    if (typeof handler === 'string') {
      handler = vm[handler];
    }

    return vm.$watch(expOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};

    dataDef.get = function () {
      return this._data;
    };

    var propsDef = {};

    propsDef.get = function () {
      return this._props;
    };

    {
      dataDef.set = function () {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };

      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;

      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }

      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);

      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
        }
      }

      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }
  /*  */


  var uid$3 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this; // a uid

      vm._uid = uid$3++;
      var startTag, endTag;
      /* istanbul ignore if */

      if (config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      } // a flag to avoid this being observed


      vm._isVue = true; // merge options

      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */


      {
        initProxy(vm);
      } // expose real self

      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props

      initState(vm);
      initProvide(vm); // resolve provide after data/props

      callHook(vm, 'created');
      /* istanbul ignore if */

      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;

    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;

      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

        var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }

        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }

    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;

    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }

        modified[key] = latest[key];
      }
    }

    return modified;
  }

  function Vue(options) {
    if (!(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }

    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);
  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      } // additional parameters


      var args = toArray(arguments, 1);
      args.unshift(this);

      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }

      installedPlugins.push(plugin);
      return this;
    };
  }
  /*  */


  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }
  /*  */


  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */

    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;

      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.

      if (Sub.options.props) {
        initProps$1(Sub);
      }

      if (Sub.options.computed) {
        initComputed$1(Sub);
      } // allow further extension/mixin/plugin usage


      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use; // create asset registers, so extended classes
      // can have their private assets too.

      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      }); // enable recursive self-lookup

      if (name) {
        Sub.options.components[name] = Sub;
      } // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.


      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options); // cache constructor

      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;

    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;

    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }
  /*  */


  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }

          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }

          if (type === 'directive' && typeof definition === 'function') {
            definition = {
              bind: definition,
              update: definition
            };
          }

          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }
  /*  */


  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */


    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;

    for (var key in cache) {
      var cachedNode = cache[key];

      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);

        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];

    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }

    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];
  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,
    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },
    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },
    destroyed: function destroyed() {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },
    mounted: function mounted() {
      var this$1 = this;
      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) {
          return matches(val, name);
        });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) {
          return !matches(val, name);
        });
      });
    },
    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;

      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;

        if ( // not included
        include && (!name || !matches(include, name)) || // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance; // make current key freshest

          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key); // prune oldest entry

          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }

      return vnode || slot && slot[0];
    }
  };
  var builtInComponents = {
    KeepAlive: KeepAlive
  };
  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};

    configDef.get = function () {
      return config;
    };

    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.

    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick; // 2.6 explicit observable API

    Vue.observable = function (obj) {
      observe(obj);
      return obj;
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    }); // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.

    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);
  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });
  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  }); // expose FunctionalRenderContext for ssr runtime helper installation

  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });
  Vue.version = '2.6.12';
  /*  */
  // these are reserved for web because they are directly compiled away
  // during template compilation

  var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

  var acceptValue = makeMap('input,textarea,option,select,progress');

  var mustUseProp = function (tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
  };

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false;
  };
  /*  */


  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;

    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }

    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }

    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */


    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }

    if (isObject(value)) {
      return stringifyObject(value);
    }

    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */


    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;

    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }

        res += stringified;
      }
    }

    return res;
  }

  function stringifyObject(value) {
    var res = '';

    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }

        res += key;
      }
    }

    return res;
  }
  /*  */


  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };
  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.

  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function (tag) {
    return tag === 'pre';
  };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    } // basic support for MathML
    // note it doesn't support other MathML elements being component roots


    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);

  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }

    if (isReservedTag(tag)) {
      return false;
    }

    tag = tag.toLowerCase();
    /* istanbul ignore if */

    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }

    var el = document.createElement(tag);

    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');
  /*  */

  /**
   * Query an element selector if it's not an element already.
   */

  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);

      if (!selected) {
        warn('Cannot find element: ' + el);
        return document.createElement('div');
      }

      return selected;
    } else {
      return el;
    }
  }
  /*  */


  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);

    if (tagName !== 'select') {
      return elm;
    } // false or null will remove the attribute but undefined will not


    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }

    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });
  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;

    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;

    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }
  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */


  var emptyNode = new VNode('', {}, []);
  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }

    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};

    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;

      if (isDef(key)) {
        map[key] = i;
      }
    }

    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];

      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }

      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check

      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;

      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }

          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);
        /* istanbul ignore if */

        {
          createChildren(vnode, children, insertedVnodeQueue);

          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }

          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;

      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false
          /* hydrating */
          );
        } // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.


        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);

          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }

          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }

      vnode.elm = vnode.componentInstance.$el;

      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode); // make sure to invoke the insert hook

        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i; // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.

      var innerNode = vnode;

      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;

        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }

          insertedVnodeQueue.push(innerNode);
          break;
        }
      } // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself


      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }

        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }

      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }

      i = vnode.data.hook; // Reuse variable

      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }

        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    } // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.


    function setScope(vnode) {
      var i;

      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;

        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }

          ancestor = ancestor.parent;
        }
      } // for slot content they should also get the scopeId from the host instance.


      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }

        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }

      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];

        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;

        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        } // recursively invoke hooks on child component root node


        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }

        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }

        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions

      var canMove = !removeOnly;
      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }

          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];

            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }

          newStartVnode = newCh[++newStartIdx];
        }
      }

      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var seenKeys = {};

      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;

        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];

        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }

        return;
      } // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.


      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;

      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;

      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }

        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }

      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }

          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }

          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).

    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      } // assert node match


      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true
          /* hydrating */
          );
        }

        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }

      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }

                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;

              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }

                childNode = childNode.nextSibling;
              } // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.


              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }

                return false;
              }
            }
          }
        }

        if (isDef(data)) {
          var fullInvoke = false;

          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }

          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }

      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }

        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);

        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }

            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            } // either not server-rendered, or hydration failed.
            // create an empty node and replace it


            oldVnode = emptyNodeAt(oldVnode);
          } // replacing existing element


          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm); // create new node

          createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);

            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }

              ancestor.elm = vnode.elm;

              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                } // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.


                var insert = ancestor.data.hook.insert;

                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }

              ancestor = ancestor.parent;
            }
          } // destroy old node


          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }
  /*  */


  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;

    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];

      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);

        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);

        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };

      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);

    if (!dirs) {
      // $flow-disable-line
      return res;
    }

    var i, dir;

    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];

      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }

      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    } // $flow-disable-line


    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];

    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];
  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;

    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }

    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }

    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];

      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    } // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max

    /* istanbul ignore if */


    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }

    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.

      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };

        el.addEventListener('input', blocker); // $flow-disable-line

        el.__ieph = true;
        /* IE placeholder patched */
      }

      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };
  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode); // handle transition classes

    var transitionClass = el._transitionClasses;

    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    } // set the class


    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };
  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);

      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;
            break;
          // "

          case 0x27:
            inSingle = true;
            break;
          // '

          case 0x60:
            inTemplateString = true;
            break;
          // `

          case 0x28:
            paren++;
            break;
          // (

          case 0x29:
            paren--;
            break;
          // )

          case 0x5B:
            square++;
            break;
          // [

          case 0x5D:
            square--;
            break;
          // ]

          case 0x7B:
            curly++;
            break;
          // {

          case 0x7D:
            curly--;
            break;
          // }
        }

        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0; // find first non-whitespace prev char

          for (; j >= 0; j--) {
            p = exp.charAt(j);

            if (p !== ' ') {
              break;
            }
          }

          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');

    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args);
    }
  }
  /*  */

  /* eslint-disable no-unused-vars */


  function baseWarn(msg, range) {
    console.error("[Vue compiler]: " + msg);
  }
  /* eslint-enable no-unused-vars */


  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({
      name: name,
      value: value,
      dynamic: dynamic
    }, range));
    el.plain = false;
  }

  function addAttr(el, name, value, range, dynamic) {
    var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({
      name: name,
      value: value,
      dynamic: dynamic
    }, range));
    el.plain = false;
  } // add a raw attr (use this in preTransforms)


  function addRawAttr(el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({
      name: name,
      value: value
    }, range));
  }

  function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker(symbol, name, dynamic) {
    return dynamic ? "_p(" + name + ",\"" + symbol + "\")" : symbol + name; // mark the event as captured
  }

  function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    modifiers = modifiers || emptyObject; // warn prevent and passive modifier

    /* istanbul ignore if */

    if (warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.', range);
    } // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.


    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    } // check capture modifier


    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }

    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */


    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;

    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({
      value: value.trim(),
      dynamic: dynamic
    }, range);

    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */

    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr(el, name) {
    return el.rawAttrsMap[':' + name] || el.rawAttrsMap['v-bind:' + name] || el.rawAttrsMap[name];
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);

    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);

      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  } // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.


  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;

    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;

      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }

    if (removeFromMap) {
      delete el.attrsMap[name];
    }

    return val;
  }

  function getAndRemoveAttrByRegex(el, name) {
    var list = el.attrsList;

    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];

      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr;
      }
    }
  }

  function rangeSetItem(item, range) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }

      if (range.end != null) {
        item.end = range.end;
      }
    }

    return item;
  }
  /*  */

  /**
   * Cross-platform code generation for component v-model
   */


  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;
    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;

    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }

    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var assignment = genAssignmentCode(value, valueExpression);
    el.model = {
      value: "(" + value + ")",
      expression: JSON.stringify(value),
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }
  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */


  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);

    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }
  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */


  var len, str, chr, index$1, expressionPos, expressionEndPos;

  function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');

      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */

      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;

    while (!eof()) {
      chr = next();

      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }

      if (chr === 0x5B) {
        inBracket++;
      }

      if (chr === 0x5D) {
        inBracket--;
      }

      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;

    while (!eof()) {
      chr = next();

      if (chr === stringQuote) {
        break;
      }
    }
  }
  /*  */


  var warn$1; // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.

  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;
    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
    } // ensure runtime directive metadata


    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";
    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type; // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type

    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];

      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
      }
    }
    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
    var valueExpression = '$event.target.value';

    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }

    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);

    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);

    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }
  /*  */
  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.


  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    } // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4

    /* istanbul ignore if */


    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1(event, handler, capture) {
    var _target = target$1; // save current target element in closure

    return function onceHandler() {
      var res = handler.apply(null, arguments);

      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  } // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.


  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;

      handler = original._wrapper = function (e) {
        if ( // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget || // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document) {
          return original.apply(this, arguments);
        }
      };
    }

    target$1.addEventListener(name, handler, supportsPassive ? {
      capture: capture,
      passive: passive
    } : capture);
  }

  function remove$2(name, handler, capture, _target) {
    (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }

    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };
  /*  */

  var svgContainer;

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }

    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key]; // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)

      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }

        if (cur === oldProps[key]) {
          continue;
        } // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property


        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur; // avoid resetting cursor position when value is the same

        var strCur = isUndef(cur) ? '' : String(cur);

        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;

        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }

        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if ( // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  } // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true; // #6157
    // work around IE bug when accessing document.activeElement in an iframe

    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}

    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime

    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }

      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }

    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };
  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  }); // merge static and dynamic style data on the same vnode

  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it

    return data.staticStyle ? extend(data.staticStyle, style) : style;
  } // normalize possible array / string values into Object


  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }

    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }

    return bindingStyle;
  }
  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */


  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;

      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;

        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;

    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }

    return res;
  }
  /*  */


  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;

  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);

      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];
  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);

    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }

    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

    var oldStyle = oldStaticStyle || oldStyleBinding;
    var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.

    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }

    for (name in newStyle) {
      cur = newStyle[name];

      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };
  /*  */

  var whitespaceRE = /\s+/;
  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */

  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }
    /* istanbul ignore else */


    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";

      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }
  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */


  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }
    /* istanbul ignore else */


    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }

      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';

      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }

      cur = cur.trim();

      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }
  /*  */


  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }
    /* istanbul ignore else */


    if (typeof def$$1 === 'object') {
      var res = {};

      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }

      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });
  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation'; // Transition property/event sniffing

  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';

  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }

    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  } // binding to window is necessary to make hot reload work in IE in strict mode


  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
  /* istanbul ignore next */
  function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }

    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;

    if (!type) {
      return cb();
    }

    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;

    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };

    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };

    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);
    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */

    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }

    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  } // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors


  function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
  }
  /*  */


  function enter(vnode, toggleDisplay) {
    var el = vnode.elm; // call leave callback now

    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;

      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (isUndef(data)) {
      return;
    }
    /* istanbul ignore if */


    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration; // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.

    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;

    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);
    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }

        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }

      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];

        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }

        enterHook && enterHook(el, cb);
      });
    } // start enter transition


    beforeEnterHook && beforeEnterHook(el);

    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);

        if (!cb.cancelled) {
          addTransitionClass(el, toClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm; // call enter callback now

    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;

      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }
    /* istanbul ignore if */


    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);
    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }

      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }

        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }

      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      } // record leaving element


      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }

      beforeLeave && beforeLeave(el);

      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);

          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);

            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }

      leave && leave(el, cb);

      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  } // only used in dev mode


  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }
  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */


  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }

    var invokerFns = fn.fns;

    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};
  var platformModules = [attrs, klass, events, domProps, style, transition];
  /*  */
  // the directive module should be applied last, after all
  // built-in modules have been applied.

  var modules = platformModules.concat(baseModules);
  var patch = createPatchFunction({
    nodeOps: nodeOps,
    modules: modules
  });
  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */

  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;

      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }

        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;

        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.

          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */

          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.

        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);

        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */

    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;

    if (isMultiple && !Array.isArray(value)) {
      warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }

    var selected, option;

    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];

      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;

        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }

          return;
        }
      }
    }

    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }

    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }
  /*  */
  // recursively search for possible transition defined inside the component root


  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },
    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;
      /* istanbul ignore if */

      if (!value === !oldValue) {
        return;
      }

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;

      if (transition$$1) {
        vnode.data.show = true;

        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },
    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };
  var platformDirectives = {
    model: directive,
    show: show
  };
  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  }; // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered

  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;

    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options; // props

    for (var key in options.propsData) {
      data[key] = comp[key];
    } // events.
    // extract listeners and pass them directly to the transition methods


    var listeners = options._parentListeners;

    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }

    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var isNotTextNode = function (c) {
    return c.tag || isAsyncPlaceholder(c);
  };

  var isVShowDirective = function (d) {
    return d.name === 'show';
  };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,
    render: function render(h) {
      var this$1 = this;
      var children = this.$slots.default;

      if (!children) {
        return;
      } // filter out text nodes (possible whitespaces)


      children = children.filter(isNotTextNode);
      /* istanbul ignore if */

      if (!children.length) {
        return;
      } // warn multiple elements


      if (children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode; // warn invalid mode

      if (mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0]; // if this is a component root node and the component's
      // parent container node also has transition, skip.

      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      } // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive


      var child = getRealChild(rawChild);
      /* istanbul ignore if */

      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      } // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.


      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild); // mark v-show
      // so that the transition module can hand over the control to the directive

      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }

          var delayedLeave;

          var performLeave = function () {
            delayedLeave();
          };

          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };
  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);
  delete props.mode;
  var TransitionGroup = {
    props: props,
    beforeMount: function beforeMount() {
      var this$1 = this;
      var update = this._update;

      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

        this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
        );

        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },
    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];

        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;
            (c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];

        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();

          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }

        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },
    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';

      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation); // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line

      this._reflow = document.body.offsetHeight;
      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (e && e.target !== el) {
              return;
            }

            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },
    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */


        if (this._hasMove) {
          return this._hasMove;
        } // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.


        var clone = el.cloneNode();

        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }

        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */


    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;

    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };
  /*  */
  // install platform specific utils

  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents); // install platform patch function

  Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

  Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  }; // devtools global hook

  /* istanbul ignore next */


  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
        }
      }

      if (config.productionTip !== false && typeof console !== 'undefined') {
        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
      }
    }, 0);
  }
  /*  */


  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;

    if (!tagRE.test(text)) {
      return;
    }

    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;

    while (match = tagRE.exec(text)) {
      index = match.index; // push text token

      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      } // tag token


      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      rawTokens.push({
        '@binding': exp
      });
      lastIndex = index + match[0].length;
    }

    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }

    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    };
  }
  /*  */


  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');

    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);

      if (res) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
      }
    }

    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }

    var classBinding = getBindingAttr(el, 'class', false
    /* getStatic */
    );

    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';

    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }

    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }

    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };
  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');

    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);

        if (res) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false
    /* getStatic */
    );

    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';

    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }

    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }

    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };
  /*  */

  var decoder;
  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }
  };
  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr'); // Elements that you can, intentionally, leave open
  // (and which close themselves)

  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'); // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content

  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');
  /**
   * Not type-checking this file because it's mostly vendor code.
   */
  // Regular Expressions for parsing tags and attributes

  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i; // #7298: escape - to avoid being passed as HTML comment when inlined in page

  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/; // Special Elements (can contain anything)

  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};
  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g; // #5992

  var isIgnoreNewlineTag = makeMap('pre,textarea', true);

  var shouldIgnoreFirstNewline = function (tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;

    while (html) {
      last = html; // Make sure we're not in a plaintext content element like script/style

      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');

        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }

              advance(commentEnd + 3);
              continue;
            }
          } // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment


          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          } // Doctype:


          var doctypeMatch = html.match(doctype);

          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          } // End tag:


          var endTagMatch = html.match(endTag);

          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          } // Start tag:


          var startTagMatch = parseStartTag();

          if (startTagMatch) {
            handleStartTag(startTagMatch);

            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }

            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;

        if (textEnd >= 0) {
          rest = html.slice(textEnd);

          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);

            if (next < 0) {
              break;
            }

            textEnd += next;
            rest = html.slice(textEnd);
          }

          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;

          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }

          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }

          if (options.chars) {
            options.chars(text);
          }

          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);

        if (!stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"", {
            start: index + html.length
          });
        }

        break;
      }
    } // Clean up any remaining tags


    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);

      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;

        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }

        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }

        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;
      var l = match.attrs.length;
      var attrs = new Array(l);

      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };

        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({
          tag: tagName,
          lowerCasedTag: tagName.toLowerCase(),
          attrs: attrs,
          start: match.start,
          end: match.end
        });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;

      if (start == null) {
        start = index;
      }

      if (end == null) {
        end = index;
      } // Find the closest opened tag of the same type


      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();

        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.", {
              start: stack[i].start,
              end: stack[i].end
            });
          }

          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        } // Remove the open elements from the stack


        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }

        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }
  /*  */


  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:|^#/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;
  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
  var slotRE = /^v-slot(:|$)|^#/;
  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;
  var invalidAttributeRE = /[\s"'<>\/=]/;
  var decodeHTMLCached = cached(he.decode);
  var emptySlotScopeToken = "_empty_"; // configurable state

  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    };
  }
  /**
   * Convert HTML string to AST.
   */


  function parse(template, options) {
    warn$2 = options.warn || baseWarn;
    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;

    maybeComponent = function (el) {
      return !!el.component || !isReservedTag(el.tag);
    };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;
    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement(element) {
      trimEndingWhitespace(element);

      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      } // tree management


      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
            start: element.start
          });
        }
      }

      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"';
            (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }

          currentParent.children.push(element);
          element.parent = currentParent;
        }
      } // final children cleanup
      // filter out scoped slots


      element.children = element.children.filter(function (c) {
        return !c.slotScope;
      }); // remove trailing whitespace node again

      trimEndingWhitespace(element); // check pre state

      if (element.pre) {
        inVPre = false;
      }

      if (platformIsPreTag(element.tag)) {
        inPre = false;
      } // apply post-transforms


      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace(el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;

        while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === ' ') {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints(el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.', {
          start: el.start
        });
      }

      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.', el.rawAttrsMap['v-for']);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start(tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag); // handle IE svg bug

        /* istanbul ignore if */

        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);

        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated;
            }, {});
          }

          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              });
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.', {
            start: element.start
          });
        } // apply pre-transforms


        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);

          if (element.pre) {
            inVPre = true;
          }
        }

        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }

        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },
      end: function end(tag, start, end$1) {
        var element = stack[stack.length - 1]; // pop stack

        stack.length -= 1;
        currentParent = stack[stack.length - 1];

        if (options.outputSourceRange) {
          element.end = end$1;
        }

        closeElement(element);
      },
      chars: function chars(text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.', {
                start: start
              });
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.", {
                start: start
              });
            }
          }
          return;
        } // IE textarea placeholder bug

        /* istanbul ignore if */


        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }

        var children = currentParent.children;

        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }

        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }

          var res;
          var child;

          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }

          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }

            children.push(child);
          }
        }
      },
      comment: function comment(text, start, end) {
        // adding anything as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };

          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }

          currentParent.children.push(child);
        }
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var list = el.attrsList;
    var len = list.length;

    if (len) {
      var attrs = el.attrs = new Array(len);

      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };

        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element); // determine whether this is a plain element after
    // removing structural attributes

    element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);

    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }

    processAttrs(element);
    return element;
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');

    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
        }

        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;

          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true
            /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');

    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;

    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var res = parseFor(exp);

      if (res) {
        extend(el, res);
      } else {
        warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap['v-for']);
      }
    }
  }

  function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);

    if (!inMatch) {
      return;
    }

    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);

    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }

    return res;
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');

    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }

      var elseif = getAndRemoveAttr(el, 'v-else-if');

      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);

    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
    }
  }

  function findPrevElement(children) {
    var i = children.length;

    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if (children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.", children[i]);
        }

        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }

    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');

    if (once$$1 != null) {
      el.once = true;
    }
  } // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">


  function processSlotContent(el) {
    var slotScope;

    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */

      if (slotScope) {
        warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap['scope'], true);
      }

      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
      }

      el.slotScope = slotScope;
    } // slot="xxx"


    var slotTarget = getBindingAttr(el, 'slot');

    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']); // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.

      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    } // 2.6 v-slot syntax


    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);

        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }

            if (el.parent && !maybeComponent(el.parent)) {
              warn$2("<template v-slot> can only appear at the root level inside " + "the receiving component", el);
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);

        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
            }

            if (el.slotScope || el.slotTarget) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }

            if (el.scopedSlots) {
              warn$2("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", slotBinding$1);
            }
          } // add the component's children to its default slot

          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true;
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken; // remove children as they are returned from scopedSlots now

          el.children = []; // mark el non-plain so data gets generated

          el.plain = false;
        }
      }
    }
  }

  function getSlotName(binding) {
    var name = binding.name.replace(slotRE, '');

    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2("v-slot shorthand syntax requires a slot name.", binding);
      }
    }

    return dynamicArgRE.test(name) // dynamic [name]
    ? {
      name: name.slice(1, -1),
      dynamic: true
    } // static name
    : {
      name: "\"" + name + "\"",
      dynamic: false
    };
  } // handle <slot/> outlets


  function processSlotOutlet(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');

      if (el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
      }
    }
  }

  function processComponent(el) {
    var binding;

    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }

    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;

    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;

      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true; // modifiers

        modifiers = parseModifiers(name.replace(dirRE, '')); // support .foo shorthand syntax for the .prop modifier

        if (modifiers) {
          name = name.replace(modifierRE, '');
        }

        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);

          if (isDynamic) {
            name = name.slice(1, -1);
          }

          if (value.trim().length === 0) {
            warn$2("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"");
          }

          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);

              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }

            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }

            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");

              if (!isDynamic) {
                addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);

                if (hyphenate(name) !== camelize(name)) {
                  addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                }
              } else {
                // handler w/ dynamic event name
                addHandler(el, "\"update:\"+(" + name + ")", syncGen, null, false, warn$2, list[i], true // dynamic
                );
              }
            }
          }

          if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);

          if (isDynamic) {
            name = name.slice(1, -1);
          }

          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else {
          // normal directives
          name = name.replace(dirRE, ''); // parse arg

          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;

          if (arg) {
            name = name.slice(0, -(arg.length + 1));

            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }

          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);

          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);

          if (res) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]); // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation

        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;

    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }

      parent = parent.parent;
    }

    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);

    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};

    for (var i = 0, l = attrs.length; i < l; i++) {
      if (map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }

      map[attrs[i].name] = attrs[i].value;
    }

    return map;
  } // for script (e.g. type="x/template") or style, do not decode content


  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;
  /* istanbul ignore next */

  function guardIESVGBug(attrs) {
    var res = [];

    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];

      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }

    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;

    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
      }

      _el = _el.parent;
    }
  }
  /*  */


  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;

      if (!map['v-model']) {
        return;
      }

      var typeBinding;

      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }

      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + map['v-bind'] + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true); // 1. checkbox

        var branch0 = cloneASTElement(el); // process for on the main node

        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed

        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        }); // 2. add radio else-if condition

        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        }); // 3. other

        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };
  var modules$1 = [klass$1, style$1, model$1];
  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")", dir);
    }
  }
  /*  */


  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")", dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };
  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };
  /*  */

  var isStaticKey;
  var isPlatformReservedTag;
  var genStaticKeysCached = cached(genStaticKeys$1);
  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */

  function optimize(root, options) {
    if (!root) {
      return;
    }

    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no; // first pass: mark all non-static nodes.

    markStatic$1(root); // second pass: mark static roots.

    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);

    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }

      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);

        if (!child.static) {
          node.static = false;
        }
      }

      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);

          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      } // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.


      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }

      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }

      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }

    if (node.type === 3) {
      // text
      return true;
    }

    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;

      if (node.tag !== 'template') {
        return false;
      }

      if (node.for) {
        return true;
      }
    }

    return false;
  }
  /*  */


  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/; // KeyboardEvent.keyCode aliases

  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  }; // KeyboardEvent.key aliases

  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  }; // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once

  var genGuard = function (condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";

    for (var name in events) {
      var handlerCode = genHandler(events[name]);

      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }

    staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";

    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
    } else {
      return prefix + staticHandlers;
    }
  }

  function genHandler(handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value;
      }

      return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];

      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key]; // left/right

          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }

      if (keys.length) {
        code += genKeyFilter(keys);
      } // Make sure modifiers like prevent and stop get executed after key filtering


      if (genModifierCode) {
        code += genModifierCode;
      }

      var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return (// make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join('&&') + ")return null;"
    );
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);

    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }

    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + "," + "$event.key," + "" + JSON.stringify(keyName) + ")";
  }
  /*  */


  function on(el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }

    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }
  /*  */


  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }
  /*  */


  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };
  /*  */

  var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;

    this.maybeComponent = function (el) {
      return !!el.component || !isReservedTag(el.tag);
    };

    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;

      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;

        if (!el.plain || el.pre && state.maybeComponent(el)) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      } // module transforms


      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }

      return code;
    }
  } // hoist static sub-trees out


  function genStatic(el, state) {
    el.staticProcessed = true; // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.

    var originalPreState = state.pre;

    if (el.pre) {
      state.pre = el.pre;
    }

    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    state.pre = originalPreState;
    return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  } // v-once


  function genOnce(el, state) {
    el.onceProcessed = true;

    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;

      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }

        parent = parent.parent;
      }

      if (!key) {
        state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
        return genElement(el, state);
      }

      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion

    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();

    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    } // v-if with v-once should generate code like (a)?_m(0):_m(1)


    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if (state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true
      /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion

    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{'; // directives first.
    // directives may mutate the el's other properties before they are generated.

    var dirs = genDirectives(el, state);

    if (dirs) {
      data += dirs + ',';
    } // key


    if (el.key) {
      data += "key:" + el.key + ",";
    } // ref


    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }

    if (el.refInFor) {
      data += "refInFor:true,";
    } // pre


    if (el.pre) {
      data += "pre:true,";
    } // record original tag name for components using "is" attribute


    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    } // module data generation functions


    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    } // attributes


    if (el.attrs) {
      data += "attrs:" + genProps(el.attrs) + ",";
    } // DOM props


    if (el.props) {
      data += "domProps:" + genProps(el.props) + ",";
    } // event handlers


    if (el.events) {
      data += genHandlers(el.events, false) + ",";
    }

    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true) + ",";
    } // slot target
    // only for non-scoped slots


    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    } // scoped slots


    if (el.scopedSlots) {
      data += genScopedSlots(el, el.scopedSlots, state) + ",";
    } // component v-model


    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    } // inline-template


    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);

      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }

    data = data.replace(/,$/, '') + '}'; // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.

    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + el.tag + "\"," + genProps(el.dynamicAttrs) + ")";
    } // v-bind data wrap


    if (el.wrapData) {
      data = el.wrapData(data);
    } // v-on data wrap


    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }

    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;

    if (!dirs) {
      return;
    }

    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;

    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];

      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }

      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : "\"" + dir.arg + "\"") : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }

    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];

    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn('Inline-template components must have exactly one child element.', {
        start: el.start
      });
    }

    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(el, slots, state) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      ;
    }); // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.

    var needsKey = !!el.if; // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.

    if (!needsForceUpdate) {
      var parent = el.parent;

      while (parent) {
        if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
          needsForceUpdate = true;
          break;
        }

        if (parent.if) {
          needsKey = true;
        }

        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots).map(function (key) {
      return genScopedSlot(slots[key], state);
    }).join(',');
    return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;

    while (i) {
      hash = hash * 33 ^ str.charCodeAt(--i);
    }

    return hash >>> 0;
  }

  function containsSlotChild(el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true;
      }

      return el.children.some(containsSlotChild);
    }

    return false;
  }

  function genScopedSlot(el, state) {
    var isLegacySyntax = el.attrsMap['slot-scope'];

    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null");
    }

    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot);
    }

    var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
    var fn = "function(" + slotScope + "){" + "return " + (el.tag === 'template' ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}"; // reverse proxy v-slot without scope on this.$slots

    var reverseProxy = slotScope ? "" : ",proxy:true";
    return "{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}";
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;

    if (children.length) {
      var el$1 = children[0]; // optimize single v-for

      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
        return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
      }

      var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType$1 ? "," + normalizationType$1 : '');
    }
  } // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed


  function getNormalizationType(children, maybeComponent) {
    var res = 0;

    for (var i = 0; i < children.length; i++) {
      var el = children[i];

      if (el.type !== 1) {
        continue;
      }

      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }

      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }

    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    } else if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + JSON.stringify(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) {
      return {
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      };
    })) : null;
    var bind$$1 = el.attrsMap['v-bind'];

    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }

    if (attrs) {
      res += "," + attrs;
    }

    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }

    return res + ')';
  } // componentName is el.component, take it as argument to shun flow's pessimistic refinement


  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var staticProps = "";
    var dynamicProps = "";

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);

      if (prop.dynamic) {
        dynamicProps += prop.name + "," + value + ",";
      } else {
        staticProps += "\"" + prop.name + "\":" + value + ",";
      }
    }

    staticProps = "{" + staticProps.slice(0, -1) + "}";

    if (dynamicProps) {
      return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
    } else {
      return staticProps;
    }
  } // #3895, #4268


  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }
  /*  */
  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed


  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b'); // these unary operators should not be used as property/method names

  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)'); // strip strings in expressions

  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g; // detect problematic expressions in a template

  function detectErrors(ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode(node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];

          if (value) {
            var range = node.rawAttrsMap[name];

            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", warn, range);
            } else if (name === 'v-slot' || name[0] === '#') {
              checkFunctionParameterExpression(value, name + "=\"" + value + "\"", warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", warn, range);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", warn, range);
            }
          }
        }
      }

      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent(exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);

    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
      warn("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim(), range);
    }

    checkExpression(exp, text, warn, range);
  }

  function checkFor(node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier(ident, type, text, warn, range) {
    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        warn("invalid " + type + " \"" + ident + "\" in expression: " + text.trim(), range);
      }
    }
  }

  function checkExpression(exp, text, warn, range) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

      if (keywordMatch) {
        warn("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim(), range);
      } else {
        warn("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
      }
    }
  }

  function checkFunctionParameterExpression(exp, text, warn, range) {
    try {
      new Function(exp, '');
    } catch (e) {
      warn("invalid function parameter expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
    }
  }
  /*  */


  var range = 2;

  function generateCodeFrame(source, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = source.length;
    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];

    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;

      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) {
            continue;
          }

          res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
          var lineLength = lines[j].length;

          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }

            count += lineLength + 1;
          }
        }

        break;
      }
    }

    return res.join('\n');
  }

  function repeat$1(str, n) {
    var result = '';

    if (n > 0) {
      while (true) {
        // eslint-disable-line
        if (n & 1) {
          result += str;
        }

        n >>>= 1;

        if (n <= 0) {
          break;
        }

        str += str;
      }
    }

    return result;
  }
  /*  */


  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({
        err: err,
        code: code
      });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);
    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;
      /* istanbul ignore if */

      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      } // check cache

      var key = options.delimiters ? String(options.delimiters) + template : template;

      if (cache[key]) {
        return cache[key];
      } // compile


      var compiled = compile(template, options); // check compilation errors/tips

      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
            });
          } else {
            warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
              return "- " + e;
            }).join('\n') + '\n', vm);
          }
        }

        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) {
              return tip(e.msg, vm);
            });
          } else {
            compiled.tips.forEach(function (msg) {
              return tip(msg, vm);
            });
          }
        }
      } // turn code into functions

      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      }); // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use

      /* istanbul ignore if */

      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;
            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }
      return cache[key] = res;
    };
  }
  /*  */


  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = {
                msg: msg
              };

              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }

                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }

              (tip ? tips : errors).push(data);
            };
          } // merge custom modules


          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          } // merge custom directives


          if (options.directives) {
            finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
          } // copy other options


          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;
        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }
  /*  */
  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.


  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);

    if (options.optimize !== false) {
      optimize(ast, options);
    }

    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });
  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;
  /*  */
  // check whether current browser encodes a char inside attribute values

  var div;

  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  } // #3663: IE encodes newlines inside attribute values while other browsers don't


  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false; // #6828: chrome encodes content in a[href]

  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });
  var mount = Vue.prototype.$mount;

  Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);
    /* istanbul ignore if */

    if (el === document.body || el === document.documentElement) {
      warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options; // resolve template/el and convert to render function

    if (!options.render) {
      var template = options.template;

      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */

            if (!template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }

      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        /* istanbul ignore if */

        if (config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }

    return mount.call(this, el, hydrating);
  };
  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */


  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue.compile = compileToFunctions;
  return Vue;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/Exampler.vue":
/*!**************************!*\
  !*** ./src/Exampler.vue ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Exampler_vue_vue_type_template_id_223a757e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exampler.vue?vue&type=template&id=223a757e& */ "./src/Exampler.vue?vue&type=template&id=223a757e&");
/* harmony import */ var _Exampler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Exampler.vue?vue&type=script&lang=js& */ "./src/Exampler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Exampler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Exampler_vue_vue_type_template_id_223a757e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Exampler_vue_vue_type_template_id_223a757e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Exampler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/Exampler.vue?vue&type=script&lang=js&":
/*!***************************************************!*\
  !*** ./src/Exampler.vue?vue&type=script&lang=js& ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Exampler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./Exampler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Exampler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Exampler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/Exampler.vue?vue&type=template&id=223a757e&":
/*!*********************************************************!*\
  !*** ./src/Exampler.vue?vue&type=template&id=223a757e& ***!
  \*********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exampler_vue_vue_type_template_id_223a757e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./Exampler.vue?vue&type=template&id=223a757e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Exampler.vue?vue&type=template&id=223a757e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exampler_vue_vue_type_template_id_223a757e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exampler_vue_vue_type_template_id_223a757e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/Gary.vue":
/*!**********************!*\
  !*** ./src/Gary.vue ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gary_vue_vue_type_template_id_3eab0ccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gary.vue?vue&type=template&id=3eab0ccc& */ "./src/Gary.vue?vue&type=template&id=3eab0ccc&");
/* harmony import */ var _Gary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gary.vue?vue&type=script&lang=js& */ "./src/Gary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gary_vue_vue_type_template_id_3eab0ccc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gary_vue_vue_type_template_id_3eab0ccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Gary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/Gary.vue?vue&type=script&lang=js&":
/*!***********************************************!*\
  !*** ./src/Gary.vue?vue&type=script&lang=js& ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./Gary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Gary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/Gary.vue?vue&type=template&id=3eab0ccc&":
/*!*****************************************************!*\
  !*** ./src/Gary.vue?vue&type=template&id=3eab0ccc& ***!
  \*****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gary_vue_vue_type_template_id_3eab0ccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./Gary.vue?vue&type=template&id=3eab0ccc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Gary.vue?vue&type=template&id=3eab0ccc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gary_vue_vue_type_template_id_3eab0ccc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gary_vue_vue_type_template_id_3eab0ccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gary_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gary.vue */ "./src/Gary.vue");
/* harmony import */ var _Exampler_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Exampler.vue */ "./src/Exampler.vue");

 // Expose these variables for people who like to use devtools

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
window.VueEaseljs = __webpack_require__(/*! vue-easeljs */ "./node_modules/vue-easeljs/dist/index.js");
window.createjs = window.VueEaseljs.createjs;
window.easeljs = window.VueEaseljs.easeljs; // same object as createjs

Vue.use(VueEaseljs);
Vue.component('gary', _Gary_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
Vue.component('exampler', _Exampler_vue__WEBPACK_IMPORTED_MODULE_1__["default"]); // fancy foot work to require all the examples

var examplesContext = __webpack_require__("./examples sync recursive .*\\.html");

var examples = examplesContext.keys().map(examplesContext);
var tab = 'gary';

if (location.hash) {
  tab = location.hash.substr(1).split(/\./)[0];
}

var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      tab: tab,
      examples: examples
    };
  }
});

/***/ }),

/***/ "./src/keep-trying.js":
/*!****************************!*\
  !*** ./src/keep-trying.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keepTrying; });
/**
 * Pass a closure to this and get back a function.
 *
 * The closure receives one parameter `tryAgain`.
 *
 * Whenever the returned function is called, it will call the closure. If the
 * closure completes, then nothing special happens.
 *
 * But if the closure calls `tryAgain`, excution of the closure stops
 * immediately, and the closure is scheduled to run again on an interval every
 * 100ms. It will keep running until it completes without calling `tryAgain`.
 *
 * If the returned function is called again while the interval is running, the
 * closure will be run, but no extra interval will be created.
 */
function keepTrying(cb) {
  var tryAgainBreakOut = {};
  var resizer = null;
  var tryAgain = false;

  var tryAgainCb = function tryAgainCb() {
    tryAgain = true;
    throw tryAgainBreakOut;
  };

  return function () {
    var callCb = function callCb() {
      tryAgain = false;

      try {
        cb(tryAgainCb);
      } catch (e) {
        if (e !== tryAgainBreakOut) {
          throw e;
        }
      }

      if (tryAgain && !resizer) {
        resizer = setInterval(callCb, 100);
      }

      if (!tryAgain && resizer) {
        clearInterval(resizer);
        resizer = null;
      }
    };

    callCb();
  };
}
;

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/app.js */"./src/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map