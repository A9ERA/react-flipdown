"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _flipdown = require("./flipdown");

require("./flipdown.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ReactFlipdown = _ref => {
  let {
    endTime,
    theme = "dark",
    headings = ["Days", "Hours", "Minutes", "Seconds"]
  } = _ref;
  const [containerId, setContainerId] = (0, _react.useState)("Flipdown-".concat([...Array(10)].map(() => Math.random().toString(36)[2]).join('')));
  (0, _react.useEffect)(() => {
    let container = document.getElementById(containerId); // create element with id=element_id class=flipdown

    let element_id = [...Array(10)].map(() => Math.random().toString(36)[2]).join('');
    let el = document.createElement('div');
    el.id = element_id;
    el.className = 'flipdown'; // clear container

    container.innerHTML = ''; // append element to container

    container.appendChild(el); // init flipdown

    new _flipdown.FlipDown(endTime, element_id, {
      theme: theme,
      headings: headings
    }).start();
  }, [endTime, theme, headings]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: containerId
  });
};

var _default = ReactFlipdown;
exports.default = _default;