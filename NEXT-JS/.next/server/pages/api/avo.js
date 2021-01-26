module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/data.ts":
/*!**************************!*\
  !*** ./database/data.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  '2zd33b8c': {
    name: 'Maluma Hass Avocado',
    id: '2zd33b8c',
    sku: 'NUR72KCM',
    price: 1.15,
    image: '/images/maluma.jpg',
    attributes: {
      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      shape: 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado'
    }
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado'
    }
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado'
    }
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado'
    }
  },
  b8uthe2y: {
    name: 'Hass Avocado',
    id: 'b8uthe2y',
    sku: 'RMRCZN7E',
    price: 1.39,
    image: '/images/hass.jpg',
    attributes: {
      description: "The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)",
      shape: 'Oval',
      hardiness: '−1 °C',
      taste: 'Gorgeous, is an avocado'
    }
  },
  ewxsd6xb: {
    name: 'Lamb Hass Avocado',
    id: 'ewxsd6xb',
    sku: 'N55229ZA',
    price: 1.34,
    image: '/images/lamb.jpg',
    attributes: {
      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',
      shape: 'Obovate',
      hardiness: '-2 °C',
      taste: 'Great, is an avocado'
    }
  },
  fpr72m9k: {
    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    sku: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description: "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado'
    }
  },
  t9dv25gs: {
    name: 'Reed Avocado',
    id: 't9dv25gs',
    sku: 'ZY3T9XXC',
    price: 1.18,
    image: '/images/reed.jpg',
    attributes: {
      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',
      shape: 'Round',
      hardiness: '−1 °C',
      taste: 'Exquisite, is an avocado'
    }
  },
  t345w48y: {
    name: 'Zutano Avocado',
    id: 't345w48y',
    sku: 'MW79ZZ6Y',
    price: 1.25,
    image: '/images/zutano.jpg',
    attributes: {
      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',
      shape: 'Pear',
      hardiness: '-5 °C',
      taste: 'Splendid, is an avocado'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./database/db.ts":
/*!************************!*\
  !*** ./database/db.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.ts");
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)


class Database {
  constructor() {}

  async getAll() {
    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
    await randomDelay();
    return asArray;
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__["default"], id)) {
      return null;
    }

    const entry = _data__WEBPACK_IMPORTED_MODULE_0__["default"][id];
    await randomDelay();
    return entry;
  }

} // Let's also add a delay to make it a bit closer to reality


const randomDelay = () => new Promise(resolve => {
  const max = 350;
  const min = 100;
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(resolve, delay);
});

/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./pages/api/avo/index.ts":
/*!********************************!*\
  !*** ./pages/api/avo/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ "./database/db.ts");


const allAvos = async (request, response) => {
  //  
  const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify({
    data: allEntries,
    length
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (allAvos);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvL2luZGV4LnRzIl0sIm5hbWVzIjpbImRhdGEiLCJuYW1lIiwiaWQiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSIsImI4dXRoZTJ5IiwiZXd4c2Q2eGIiLCJmcHI3Mm05ayIsInQ5ZHYyNWdzIiwidDM0NXc0OHkiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiYXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImFsbERhdGEiLCJyYW5kb21EZWxheSIsImdldEJ5SWQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJlbnRyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwibWF4IiwibWluIiwiZGVsYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiYWxsQXZvcyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRiIiwiREIiLCJhbGxFbnRyaWVzIiwibGVuZ3RoIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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QWYsQ0FBYjtBQUNILENBUkQ7O0FBVWVOLHNFQUFmLEUiLCJmaWxlIjoicGFnZXMvYXBpL2F2by5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F2by9pbmRleC50c1wiKTtcbiIsImNvbnN0IGRhdGE6IFJlY29yZDxUUHJvZHVjdElkLCBUUHJvZHVjdD4gPSB7XG4gICcyemQzM2I4Yyc6IHtcbiAgICBuYW1lOiAnTWFsdW1hIEhhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICcyemQzM2I4YycsXG4gICAgc2t1OiAnTlVSNzJLQ00nLFxuICAgIHByaWNlOiAxLjE1LFxuICAgIGltYWdlOiAnL2ltYWdlcy9tYWx1bWEuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0EgcmVsYXRpdmVseSBuZXcgY3VsdGl2YXIsIGl0IHdhcywgdGhlIHByZXR0eSBib3kgYmFieSwgZGlzY292ZXJlZCBpbiBTb3V0aCBBZnJpY2EgaW4gdGhlIGVhcmx5IDE5OTBzIGJ5IE1yLiBBLkcuIChEcmllcykgSm91YmVydC4gTWFsdW1hIEJhYnl5LiBJdCBpcyBhIGNoYW5jZSBzZWVkbGluZyBvZiB1bmtub3duIHBhcmVudGFnZScsXG4gICAgICBzaGFwZTogJ092YWwnLFxuICAgICAgaGFyZGluZXNzOiAnMSDCsEMnLFxuICAgICAgdGFzdGU6ICdDYXRjaHksIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gICc2dHJmZ2traic6IHtcbiAgICBuYW1lOiAnRnVlcnRlIEF2b2NhZG8nLFxuICAgIGlkOiAnNnRyZmdra2onLFxuICAgIHNrdTogJ0FYNE04U0pWJyxcbiAgICBwcmljZTogMS4yMSxcbiAgICBpbWFnZTogJy9pbWFnZXMvZnVlcnRlLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgRnVlcnRlIGF2b2NhZG8gaXMgdGhlIHNlY29uZCBsYXJnZXN0IGNvbW1lcmNpYWwgdmFyaWV0eSBiZWhpbmQgSGFzcy4gSXQgaXMgYSBsb25nIHRpbWUgQ2FsaWZvcm5pYSBjb21tZXJjaWFsIHZhcmlldHkgdmFsdWVkIGZvciBpdHMgd2ludGVyIHNlYXNvbiByaXBlbmluZyBhbmQgaXRzIEItVHlwZSBibG9zc29tIHR5cGUgd2hpY2ggbW9zdCBncm93ZXJzIHBsYW50IGFkamFjZW50IHRvIHRoZSBIYXNzIGZvciBhIG1vcmUgY29uc2lzdGVudCBwcm9kdWN0aW9uIGN5Y2xlLiBUaGlzIGF2b2NhZG8gdGVuZHMgdG8gcHJvZHVjZSBoZWF2aWx5IGluIGFsdGVybmF0ZSB5ZWFycy4nLFxuICAgICAgc2hhcGU6ICdQZWFyJyxcbiAgICAgIGhhcmRpbmVzczogJy0xIMKwQycsXG4gICAgICB0YXN0ZTogJ01hZ25pZmljZW50LCBpcyBhIHN0cm9uZyBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICAnN2JjcjQ5ZW0nOiB7XG4gICAgbmFtZTogJ0d3ZW4gSGFzcyBBdm9jYWRvJyxcbiAgICBpZDogJzdiY3I0OWVtJyxcbiAgICBza3U6ICdIWUE3OEY2SicsXG4gICAgcHJpY2U6IDEuMjUsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2d3ZW4uanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJBIHNlZWRsaW5nIGJyZWQgZnJvbSAnSGFzcycgeCAnVGhpbGxlJyBpbiAxOTgyLCAnR3dlbicgaXMgaGlnaGVyIHlpZWxkaW5nIGFuZCBtb3JlIGR3YXJmaW5nIHRoYW4gJ0hhc3MnIGluIENhbGlmb3JuaWEuIFRoZSBmcnVpdCBoYXMgYW4gb3ZhbCBzaGFwZSwgc2xpZ2h0bHkgc21hbGxlciB0aGFuICdIYXNzJyAoMTAw4oCTMjAwIGcgb3IgMy414oCTNy4xIG96KSwgd2l0aCBhIHJpY2gsIG51dHR5IGZsYXZvci4gVGhlIHNraW4gdGV4dHVyZSBpcyBtb3JlIGZpbmVseSBwZWJibGVkIHRoYW4gJ0hhc3MnLCBhbmQgaXMgZHVsbCBncmVlbiB3aGVuIHJpcGUuIEl0IGlzIGZyb3N0LWhhcmR5IGRvd24gdG8g4oiSMSDCsEMgKDMwIMKwRilcIixcbiAgICAgIHNoYXBlOiAnUGx1bXAnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdTdXBlcmIsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gICcwOTgzMjNrcyc6IHtcbiAgICBuYW1lOiAnQmFjb24gQXZvY2FkbycsXG4gICAgaWQ6ICcwOTgzMjNrcycsXG4gICAgc2t1OiAnQlhEMTAwQkxLJyxcbiAgICBwcmljZTogMS41MSxcbiAgICBpbWFnZTogJy9pbWFnZXMvYmFjb24uanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0RldmVsb3BlZCBieSBhIGZhcm1lciwgSmFtZXMgQmFjb24sIGluIDE5NTQsIEJhY29uIGhhcyBtZWRpdW0tc2l6ZWQgZnJ1aXQgd2l0aCBzbW9vdGgsIGdyZWVuIHNraW4gd2l0aCB5ZWxsb3ctZ3JlZW4sIGxpZ2h0LXRhc3RpbmcgZmxlc2guIFdoZW4gcmlwZSwgdGhlIHNraW4gcmVtYWlucyBncmVlbiwgYnV0IGRhcmtlbnMgc2xpZ2h0bHksIGFuZCBmcnVpdCB5aWVsZHMgdG8gZ2VudGxlIHByZXNzdXJlLiBJdCBpcyBjb2xkLWhhcmR5IGRvd24gdG8g4oiSNSDCsEMgKDIzIMKwRiknLFxuICAgICAgc2hhcGU6ICdPdmFsJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjUgwrBDJyxcbiAgICAgIHRhc3RlOiAnQ3JlYW15LCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICBiOHV0aGUyeToge1xuICAgIG5hbWU6ICdIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnYjh1dGhlMnknLFxuICAgIHNrdTogJ1JNUkNaTjdFJyxcbiAgICBwcmljZTogMS4zOSxcbiAgICBpbWFnZTogJy9pbWFnZXMvaGFzcy5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlRoZSAnSGFzcycgaXMgdGhlIG1vc3QgY29tbW9uIGN1bHRpdmFyIG9mIGF2b2NhZG8uIEl0IHByb2R1Y2VzIGZydWl0IHllYXItcm91bmQgYW5kIGFjY291bnRzIGZvciA4MCUgb2YgY3VsdGl2YXRlZCBhdm9jYWRvcyBpbiB0aGUgd29ybGQuWzIxXVs1NV0gQWxsICdIYXNzJyB0cmVlcyBhcmUgZGVzY2VuZGVkIGZyb20gYSBzaW5nbGUgJ21vdGhlciB0cmVlJyByYWlzZWQgYnkgYSBtYWlsIGNhcnJpZXIgbmFtZWQgUnVkb2xwaCBIYXNzLCBvZiBMYSBIYWJyYSBIZWlnaHRzLCBDYWxpZm9ybmlhLlsyMF1bNTVdIEhhc3MgcGF0ZW50ZWQgdGhlIHByb2R1Y3RpdmUgdHJlZSBpbiAxOTM1LiBUaGUgJ21vdGhlciB0cmVlJywgb2YgdW5jZXJ0YWluIHN1YnNwZWNpZXMsIGRpZWQgb2Ygcm9vdCByb3QgYW5kIHdhcyBjdXQgZG93biBpbiBTZXB0ZW1iZXIgMjAwMi5bMjFdWzU1XVs1Nl0gJ0hhc3MnIHRyZWVzIGhhdmUgbWVkaXVtLXNpemVkICgxNTDigJMyNTAgZyBvciA1LjPigJM4Ljggb3opLCBvdmF0ZSBmcnVpdCB3aXRoIGEgYmxhY2ssIHBlYmJsZWQgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIG51dHR5LCByaWNoIGZsYXZvciB3aXRoIDE5JSBvaWwuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSBjYW4gd2l0aHN0YW5kIHRlbXBlcmF0dXJlcyB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxuICAgICAgc2hhcGU6ICdPdmFsJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcbiAgICAgIHRhc3RlOiAnR29yZ2VvdXMsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIGV3eHNkNnhiOiB7XG4gICAgbmFtZTogJ0xhbWIgSGFzcyBBdm9jYWRvJyxcbiAgICBpZDogJ2V3eHNkNnhiJyxcbiAgICBza3U6ICdONTUyMjlaQScsXG4gICAgcHJpY2U6IDEuMzQsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2xhbWIuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBMYW1iIEhhc3MgYXZvY2FkbyBpcyBhIGNyb3NzIGJldHdlZW4gYSBIYXNzIGFuZCBHd2VuIGF2b2NhZG8uIFRoZSBmcnVpdHMgYXJlIGxhcmdlciBpbiBzaXplIGFuZCBsYXRlciBtYXR1cmluZyB0aGFuIEhhc3MuIEl0IGlzIGdhaW5pbmcgaW4gcG9wdWxhcml0eSBhcyBhIGNvbW1lcmNpYWwgYW5kIGJhY2t5YXJkIHZhcmlldHkgZHVlIHRvIGl0cyBleGNlcHRpb25hbCBmbGF2b3IgYW5kIGVhc3kgcGVlbGluZyBxdWFsaXRpZXMuIFRoZSB0cmVlIGhhcyBhbiB1cHJpZ2h0LCBjb21wYWN0IGhhYml0LicsXG4gICAgICBzaGFwZTogJ09ib3ZhdGUnLFxuICAgICAgaGFyZGluZXNzOiAnLTIgwrBDJyxcbiAgICAgIHRhc3RlOiAnR3JlYXQsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIGZwcjcybTlrOiB7XG4gICAgbmFtZTogJ1BpbmtlcnRvbiBBdm9jYWRvJyxcbiAgICBpZDogJ2ZwcjcybTlrJyxcbiAgICBza3U6ICdCNEhaNDJUTScsXG4gICAgcHJpY2U6IDEuMjcsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3BpbmtlcnRvbi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkZpcnN0IGdyb3duIG9uIHRoZSBQaW5rZXJ0b24gUmFuY2ggaW4gU2F0aWNveSwgQ2FsaWZvcm5pYSwgaW4gdGhlIGVhcmx5IDE5NzBzLCAnUGlua2VydG9uJyBpcyBhIHNlZWRsaW5nIG9mICdIYXNzJyB4ICdSaW5jb24nLiBUaGUgbGFyZ2UgZnJ1aXQgaGFzIGEgc21hbGwgc2VlZCwgYW5kIGl0cyBncmVlbiBza2luIGRlZXBlbnMgaW4gY29sb3IgYXMgaXQgcmlwZW5zLiBUaGUgdGhpY2sgZmxlc2ggaGFzIGEgc21vb3RoLCBjcmVhbXkgdGV4dHVyZSwgcGFsZSBncmVlbiBjb2xvciwgZ29vZCBmbGF2b3IsIGFuZCBoaWdoIG9pbCBjb250ZW50LiBJdCBzaG93cyBzb21lIGNvbGQgdG9sZXJhbmNlLCB0byDiiJIxIMKwQyAoMzAgwrBGKSBhbmQgYmVhcnMgY29uc2lzdGVudGx5IGhlYXZ5IGNyb3BzLiBBIGh5YnJpZCBHdWF0ZW1hbGFuIHR5cGUsIGl0IGhhcyBleGNlbGxlbnQgcGVlbGluZyBjaGFyYWN0ZXJpc3RpY3NcIixcbiAgICAgIHNoYXBlOiAnTG9uZyBwZWFyJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcbiAgICAgIHRhc3RlOiAnTWFydmVsb3VzLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICB0OWR2MjVnczoge1xuICAgIG5hbWU6ICdSZWVkIEF2b2NhZG8nLFxuICAgIGlkOiAndDlkdjI1Z3MnLFxuICAgIHNrdTogJ1pZM1Q5WFhDJyxcbiAgICBwcmljZTogMS4xOCxcbiAgICBpbWFnZTogJy9pbWFnZXMvcmVlZC5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnRGV2ZWxvcGVkIGZyb20gYSBjaGFuY2Ugc2VlZGxpbmcgZm91bmQgaW4gMTk0OCBieSBKYW1lcyBTLiBSZWVkIGluIENhbGlmb3JuaWEsIHRoaXMgY3VsdGl2YXIgaGFzIGxhcmdlLCByb3VuZCwgZ3JlZW4gZnJ1aXQgd2l0aCBhIHNtb290aCB0ZXh0dXJlIGFuZCBkYXJrLCB0aGljaywgZ2xvc3N5IHNraW4uIFNtb290aCBhbmQgZGVsaWNhdGUsIHRoZSBmbGVzaCBoYXMgYSBzbGlnaHRseSBudXR0eSBmbGF2b3IuIFRoZSBza2luIHJpcGVucyBncmVlbi4gQSBHdWF0ZW1hbGFuIHR5cGUsIGl0IGlzIGhhcmR5IHRvIOKIkjEgwrBDICgzMCDCsEYpLiBUcmVlIHNpemUgaXMgYWJvdXQgNSBieSA0IG0gKDE2LjQgYnkgMTMuMSBmdCknLFxuICAgICAgc2hhcGU6ICdSb3VuZCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ0V4cXVpc2l0ZSwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgdDM0NXc0OHk6IHtcbiAgICBuYW1lOiAnWnV0YW5vIEF2b2NhZG8nLFxuICAgIGlkOiAndDM0NXc0OHknLFxuICAgIHNrdTogJ01XNzlaWjZZJyxcbiAgICBwcmljZTogMS4yNSxcbiAgICBpbWFnZTogJy9pbWFnZXMvenV0YW5vLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgWnV0YW5vIGF2b2NhZG8gaXMgYSBjb2xkIGhhcmR5LCBjb25zaXN0ZW50IHByb2R1Y2luZyBhdm9jYWRvIHZhcmlldHkuIEl0IHJlc2VtYmxlcyB0aGUgRnVlcnRlIGluIGFwcGVhcmFuY2UgYnV0IGlzIGxlc3MgZmxhdm9yZnVsIGJ1dCBtb3JlIGNvbGQgaGFyZHkuIFRoZSBncmVlbiBmcnVpdHMgYXJlIG9ib3ZhdGUgaW4gc2hhcGUgd2l0aCB3YXh5IGJ1bXBzIG9uIHRoZSBza2luLiBUaGUgZmxlc2ggaGFzIGEgbG93IG9pbCBidXQgaGlnaCB3YXRlciBjb250ZW50IHdoaWNoIGNhdXNlcyBpdCB0byBoYXZlIGEgbW9yZSBmaWJyb3VzIHRleHR1cmUuJyxcbiAgICAgIHNoYXBlOiAnUGVhcicsXG4gICAgICBoYXJkaW5lc3M6ICctNSDCsEMnLFxuICAgICAgdGFzdGU6ICdTcGxlbmRpZCwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0YVxuIiwiLy8gT2ggeW91IGN1cmlvdXMuLi5cbi8vIFRoaXMgaXMgbm90IGEgcmVhbCBkYXRhYmFzZSxcbi8vIEJ1dCBsZXQncyBpbWFnaW5lIGl0IGlzIG9uZSA6KVxuaW1wb3J0IGFsbERhdGEgZnJvbSAnLi9kYXRhJ1xuXG5jbGFzcyBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxUUHJvZHVjdFtdPiB7XG4gICAgY29uc3QgYXNBcnJheSA9IE9iamVjdC52YWx1ZXMoYWxsRGF0YSlcbiAgICBhd2FpdCByYW5kb21EZWxheSgpXG4gICAgcmV0dXJuIGFzQXJyYXlcbiAgfVxuXG4gIGFzeW5jIGdldEJ5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8VFByb2R1Y3QgfCBudWxsPiB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYWxsRGF0YSwgaWQpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5ID0gYWxsRGF0YVtpZF1cbiAgICBhd2FpdCByYW5kb21EZWxheSgpXG4gICAgcmV0dXJuIGVudHJ5XG4gIH1cbn1cblxuLy8gTGV0J3MgYWxzbyBhZGQgYSBkZWxheSB0byBtYWtlIGl0IGEgYml0IGNsb3NlciB0byByZWFsaXR5XG5jb25zdCByYW5kb21EZWxheSA9ICgpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgbWF4ID0gMzUwXG4gICAgY29uc3QgbWluID0gMTAwXG4gICAgY29uc3QgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG5cbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KVxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gXCJodHRwXCI7XG5pbXBvcnQgREIgZnJvbSAnQGRhdGFiYXNlJ1xuXG5cbmNvbnN0IGFsbEF2b3MgPWFzeW5jIChyZXF1ZXN0OkluY29taW5nTWVzc2FnZSxyZXNwb25zZTpTZXJ2ZXJSZXNwb25zZSk9PntcbiAgICAvLyAgXG4gICAgY29uc3QgZGIgPW5ldyBEQigpXG4gICAgY29uc3QgYWxsRW50cmllcz1hd2FpdCBkYi5nZXRBbGwoKVxuICAgIGNvbnN0IGxlbmd0aCA9YWxsRW50cmllcy5sZW5ndGhcbiAgICByZXNwb25zZS5zdGF0dXNDb2RlPTIwMFxuICAgIHJlc3BvbnNlLnNldEhlYWRlcignQ29udGVudC10eXBlJywnYXBwbGljYXRpb24vanNvbicpXG4gICAgcmVzcG9uc2UuZW5kKEpTT04uc3RyaW5naWZ5KHtkYXRhOmFsbEVudHJpZXMsbGVuZ3RofSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsbEF2b3M7Il0sInNvdXJjZVJvb3QiOiIifQ==