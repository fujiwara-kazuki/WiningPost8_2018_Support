webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _reactHotLoader = __webpack_require__(195);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(204);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(356);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Onsen UI Styling and Icons
	__webpack_require__(361);
	__webpack_require__(368);
	
	var rootElement = document.getElementById('app');
	_reactDom2.default.render(_react2.default.createElement(
	  _reactHotLoader.AppContainer,
	  null,
	  _react2.default.createElement(_App2.default, null)
	), rootElement);
	
	if (true) {
	  module.hot.accept(356, function () {
	    var NextApp = __webpack_require__(356).default;
	    _reactDom2.default.render(_react2.default.createElement(
	      _reactHotLoader.AppContainer,
	      null,
	      _react2.default.createElement(NextApp, null)
	    ), rootElement);
	  });
	}
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(rootElement, 'rootElement', '/project/src/main.jsx');
	})();

	;

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(196);

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var AppContainer = __webpack_require__(197);
	
	module.exports = function warnAboutIncorrectUsage(arg) {
	  if (this && this.callback) {
	    throw new Error('React Hot Loader: The Webpack loader is now exported separately. ' + 'If you use Babel, we recommend that you remove "react-hot-loader" ' + 'from the "loaders" section of your Webpack configuration altogether, ' + 'and instead add "react-hot-loader/babel" to the "plugins" section ' + 'of your .babelrc file. ' + 'If you prefer not to use Babel, replace "react-hot-loader" or ' + '"react-hot" with "react-hot-loader/webpack" in the "loaders" section ' + 'of your Webpack configuration.');
	  } else if (arg && arg.types && arg.types.IfStatement) {
	    throw new Error('React Hot Loader: The Babel plugin is exported separately. ' + 'Replace "react-hot-loader" with "react-hot-loader/babel" ' + 'in the "plugins" section of your .babelrc file. ' + 'While we recommend the above, if you prefer not to use Babel, ' + 'you may remove "react-hot-loader" from the "plugins" section of ' + 'your .babelrc file altogether, and instead add ' + '"react-hot-loader/webpack" to the "loaders" section of your Webpack ' + 'configuration.');
	  } else {
	    throw new Error('React Hot Loader does not have a default export. ' + 'If you use the import statement, make sure to include the ' + 'curly braces: import { AppContainer } from "react-hot-loader". ' + 'If you use CommonJS, make sure to read the named export: ' + 'require("react-hot-loader").AppContainer.');
	  }
	};
	
	module.exports.AppContainer = AppContainer;

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(198);
	} else {
	  module.exports = __webpack_require__(199);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(7);
	var Component = React.Component;
	
	var AppContainer = function (_Component) {
	  _inherits(AppContainer, _Component);
	
	  function AppContainer() {
	    _classCallCheck(this, AppContainer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AppContainer).apply(this, arguments));
	  }
	
	  _createClass(AppContainer, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.component) {
	        return React.createElement(this.props.component, this.props.prop);
	      }
	
	      return React.Children.only(this.props.children);
	    }
	  }]);
	
	  return AppContainer;
	}(Component);
	
	module.exports = AppContainer;

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(7);
	var deepForceUpdate = __webpack_require__(200);
	var Redbox = __webpack_require__(201);
	var Component = React.Component;
	
	var AppContainer = function (_Component) {
	  _inherits(AppContainer, _Component);
	
	  function AppContainer(props) {
	    _classCallCheck(this, AppContainer);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppContainer).call(this, props));
	
	    _this.state = { error: null };
	    return _this;
	  }
	
	  _createClass(AppContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        console.error('React Hot Loader: It appears that "react-hot-loader/patch" ' + 'did not run immediately before the app started. Make sure that it ' + 'runs before any other code. For example, if you use Webpack, ' + 'you can add "react-hot-loader/patch" as the very first item to the ' + '"entry" array in its config. Alternatively, you can add ' + 'require("react-hot-loader/patch") as the very first line ' + 'in the application code, before any other imports.');
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // Hot reload is happening.
	      // Retry rendering!
	      this.setState({
	        error: null
	      });
	      // Force-update the whole tree, including
	      // components that refuse to update.
	      deepForceUpdate(this);
	    }
	
	    // This hook is going to become official in React 15.x.
	    // In 15.0, it only catches errors on initial mount.
	    // Later it will work for updates as well:
	    // https://github.com/facebook/react/pull/6020
	
	  }, {
	    key: 'unstable_handleError',
	    value: function unstable_handleError(error) {
	      this.setState({
	        error: error
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var error = this.state.error;
	
	      if (error) {
	        return React.createElement(this.props.errorReporter, { error: error });
	      }
	
	      if (this.props.component) {
	        return React.createElement(this.props.component, this.props.props);
	      } else {
	        return React.Children.only(this.props.children);
	      }
	    }
	  }]);
	
	  return AppContainer;
	}(Component);
	
	AppContainer.propTypes = {
	  component: function component(props) {
	    if (props.component) {
	      return new Error('Passing "component" prop to <AppContainer /> is deprecated. ' + 'Replace <AppContainer component={App} /> with <AppContainer><App /></AppContainer>.');
	    }
	  },
	  props: function props(_props) {
	    if (_props.props) {
	      return new Error('Passing "props" prop to <AppContainer /> is deprecated. ' + 'Replace <AppContainer component={App} props={{ myProp: myValue }} /> with <AppContainer><App myProp={myValue} /></AppContainer>.');
	    }
	  },
	  children: function children(props) {
	    if (React.Children.count(props.children) !== 1) {
	      return new Error('Invalid prop "children" supplied to AppContainer. Expected a single React element with your app’s root component, e.g. <App />.');
	    }
	  }
	};
	
	AppContainer.defaultProps = {
	  errorReporter: Redbox
	};
	
	module.exports = AppContainer;

/***/ },

/***/ 200:
/***/ function(module, exports) {

	// Constant to identify a React Component. It's been extracted from ReactTypeOfWork
	// (https://github.com/facebook/react/blob/master/src/shared/ReactTypeOfWork.js#L20)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = deepForceUpdate;
	var ReactClassComponent = 2;
	
	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);
	
	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
	        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
	      }
	    }
	  }
	}
	
	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}
	
	function forceUpdateIfPending(internalInstance) {
	  if (internalInstance._pendingForceUpdate === true) {
	    var publicInstance = internalInstance._instance;
	    var updater = publicInstance.updater;
	
	    if (typeof publicInstance.forceUpdate === 'function') {
	      publicInstance.forceUpdate();
	    } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
	      updater.enqueueForceUpdate(publicInstance);
	    }
	  }
	}
	
	function deepForceUpdateStack(instance) {
	  var internalInstance = instance._reactInternalInstance;
	  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	  traverseRenderedChildren(internalInstance, forceUpdateIfPending);
	}
	
	function deepForceUpdate(instance) {
	  var root = instance._reactInternalFiber || instance._reactInternalInstance;
	  if (typeof root.tag !== 'number') {
	    // Traverse stack-based React tree.
	    return deepForceUpdateStack(instance);
	  }
	
	  var node = root;
	  while (true) {
	    if (node.tag === ReactClassComponent) {
	      var publicInstance = node.stateNode;
	      var updater = publicInstance.updater;
	
	      if (typeof publicInstance.forceUpdate === 'function') {
	        publicInstance.forceUpdate();
	      } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
	        updater.enqueueForceUpdate(publicInstance);
	      }
	    }
	    if (node.child) {
	      node.child['return'] = node;
	      node = node.child;
	      continue;
	    }
	    if (node === root) {
	      return undefined;
	    }
	    while (!node.sibling) {
	      if (!node['return'] || node['return'] === root) {
	        return undefined;
	      }
	      node = node['return'];
	    }
	    node.sibling['return'] = node['return'];
	    node = node.sibling;
	  }
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.RedBoxError = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(202);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(204);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _style = __webpack_require__(351);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _errorStackParser = __webpack_require__(352);
	
	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);
	
	var _objectAssign = __webpack_require__(9);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _lib = __webpack_require__(354);
	
	var _sourcemappedStacktrace = __webpack_require__(355);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RedBoxError = exports.RedBoxError = function (_get__2) {
	  _inherits(RedBoxError, _get__2);
	
	  function RedBoxError(props) {
	    _classCallCheck(this, RedBoxError);
	
	    var _this = _possibleConstructorReturn(this, (RedBoxError.__proto__ || Object.getPrototypeOf(RedBoxError)).call(this, props));
	
	    _this.state = {
	      error: null,
	      mapped: false
	    };
	
	    _this.mapOnConstruction(props.error);
	    return _this;
	  }
	
	  // State is used to store the error mapped to the source map.
	
	
	  _createClass(RedBoxError, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!this.state.mapped) this.mapError(this.props.error);
	    }
	
	    // Try to map the error when the component gets constructed, this is possible
	    // in some cases like evals.
	
	  }, {
	    key: 'mapOnConstruction',
	    value: function mapOnConstruction(error) {
	      var stackLines = error.stack.split('\n');
	
	      // There's no stack, only the error message.
	      if (stackLines.length < 2) {
	        this.state = { error: error, mapped: true };
	        return;
	      }
	
	      // Using the “eval” setting on webpack already gives the correct location.
	      var isWebpackEval = stackLines[1].search(/\(webpack:\/{3}/) !== -1;
	      if (isWebpackEval) {
	        // No changes are needed here.
	        this.state = { error: error, mapped: true };
	        return;
	      }
	
	      // Other eval follow a specific pattern and can be easily parsed.
	      var isEval = stackLines[1].search(/\(eval at/) !== -1;
	      if (!isEval) {
	        // mapping will be deferred until `componentDidMount`
	        this.state = { error: error, mapped: false };
	        return;
	      }
	
	      // The first line is the error message.
	      var fixedLines = [stackLines.shift()];
	      // The rest needs to be fixed.
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = stackLines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var stackLine = _step.value;
	
	          var evalStackLine = stackLine.match(/(.+)\(eval at (.+) \(.+?\), .+(\:[0-9]+\:[0-9]+)\)/);
	          if (evalStackLine) {
	            var _evalStackLine = _slicedToArray(evalStackLine, 4),
	                atSomething = _evalStackLine[1],
	                file = _evalStackLine[2],
	                rowColumn = _evalStackLine[3];
	
	            fixedLines.push(atSomething + ' (' + file + rowColumn + ')');
	          } else {
	            // TODO: When stack frames of different types are detected, try to load the additional source maps
	            fixedLines.push(stackLine);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      error.stack = fixedLines.join('\n');
	      this.state = { error: error, mapped: true };
	    }
	  }, {
	    key: 'mapError',
	    value: function mapError(error) {
	      var _this2 = this;
	
	      _get__('mapStackTrace')(error.stack, function (mappedStack) {
	        error.stack = mappedStack.join('\n');
	        _this2.setState({ error: error, mapped: true });
	      });
	    }
	  }, {
	    key: 'renderFrames',
	    value: function renderFrames(frames) {
	      var _props = this.props,
	          filename = _props.filename,
	          editorScheme = _props.editorScheme,
	          useLines = _props.useLines,
	          useColumns = _props.useColumns;
	
	      var _get__3 = _get__('assign')({}, _get__('style'), this.props.style),
	          frame = _get__3.frame,
	          file = _get__3.file,
	          linkToFile = _get__3.linkToFile;
	
	      return frames.map(function (f, index) {
	        var text = void 0;
	        var url = void 0;
	
	        if (index === 0 && filename && !_get__('isFilenameAbsolute')(f.fileName)) {
	          url = _get__('makeUrl')(filename, editorScheme);
	          text = _get__('makeLinkText')(filename);
	        } else {
	          var lines = useLines ? f.lineNumber : null;
	          var columns = useColumns ? f.columnNumber : null;
	          url = _get__('makeUrl')(f.fileName, editorScheme, lines, columns);
	          text = _get__('makeLinkText')(f.fileName, lines, columns);
	        }
	
	        return _get__('React').createElement(
	          'div',
	          { style: frame, key: index },
	          _get__('React').createElement(
	            'div',
	            null,
	            f.functionName
	          ),
	          _get__('React').createElement(
	            'div',
	            { style: file },
	            _get__('React').createElement(
	              'a',
	              { href: url, style: linkToFile },
	              text
	            )
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // The error is received as a property to initialize state.error, which may
	      // be updated when it is mapped to the source map.
	      var error = this.state.error;
	      var className = this.props.className;
	
	      var _get__4 = _get__('assign')({}, _get__('style'), this.props.style),
	          redbox = _get__4.redbox,
	          message = _get__4.message,
	          stack = _get__4.stack,
	          frame = _get__4.frame;
	
	      var frames = void 0;
	      var parseError = void 0;
	      try {
	        frames = _get__('ErrorStackParser').parse(error);
	      } catch (e) {
	        parseError = new Error('Failed to parse stack trace. Stack trace information unavailable.');
	      }
	
	      if (parseError) {
	        frames = _get__('React').createElement(
	          'div',
	          { style: frame, key: 0 },
	          _get__('React').createElement(
	            'div',
	            null,
	            parseError.message
	          )
	        );
	      } else {
	        frames = this.renderFrames(frames);
	      }
	
	      return _get__('React').createElement(
	        'div',
	        { style: redbox, className: className },
	        _get__('React').createElement(
	          'div',
	          { style: message },
	          error.name,
	          ': ',
	          error.message
	        ),
	        _get__('React').createElement(
	          'div',
	          { style: stack },
	          frames
	        )
	      );
	    }
	  }]);
	
	  return RedBoxError;
	}(_get__('Component'));
	
	// "Portal" component for actual RedBoxError component to
	// render to (directly under body). Prevents bugs as in #27.
	
	
	RedBoxError.propTypes = {
	  error: _get__('PropTypes').instanceOf(Error).isRequired,
	  filename: _get__('PropTypes').string,
	  editorScheme: _get__('PropTypes').string,
	  useLines: _get__('PropTypes').bool,
	  useColumns: _get__('PropTypes').bool,
	  style: _get__('PropTypes').object,
	  className: _get__('PropTypes').string
	};
	RedBoxError.displayName = 'RedBoxError';
	RedBoxError.defaultProps = {
	  useLines: true,
	  useColumns: true };
	
	var RedBox = function (_get__5) {
	  _inherits(RedBox, _get__5);
	
	  function RedBox() {
	    _classCallCheck(this, RedBox);
	
	    return _possibleConstructorReturn(this, (RedBox.__proto__ || Object.getPrototypeOf(RedBox)).apply(this, arguments));
	  }
	
	  _createClass(RedBox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.el = document.createElement('div');
	      document.body.appendChild(this.el);
	      this.renderRedBoxError();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.renderRedBoxError();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get__('ReactDOM').unmountComponentAtNode(this.el);
	      document.body.removeChild(this.el);
	      this.el = null;
	    }
	  }, {
	    key: 'renderRedBoxError',
	    value: function renderRedBoxError() {
	      _get__('ReactDOM').render(_get__('React').createElement(_get__('RedBoxError'), this.props), this.el);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return RedBox;
	}(_get__('Component'));
	
	RedBox.propTypes = {
	  error: _get__('PropTypes').instanceOf(Error).isRequired
	};
	RedBox.displayName = 'RedBox';
	exports.default = RedBox;
	
	var _RewiredData__ = Object.create(null);
	
	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};
	
	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }
	
	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();
	
	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];
	
	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}
	
	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'PropTypes':
	      return _propTypes2.default;
	
	    case 'mapStackTrace':
	      return _sourcemappedStacktrace.mapStackTrace;
	
	    case 'assign':
	      return _objectAssign2.default;
	
	    case 'style':
	      return _style2.default;
	
	    case 'isFilenameAbsolute':
	      return _lib.isFilenameAbsolute;
	
	    case 'makeUrl':
	      return _lib.makeUrl;
	
	    case 'makeLinkText':
	      return _lib.makeLinkText;
	
	    case 'ErrorStackParser':
	      return _errorStackParser2.default;
	
	    case 'Component':
	      return _react.Component;
	
	    case 'ReactDOM':
	      return _reactDom2.default;
	
	    case 'React':
	      return _react2.default;
	
	    case 'RedBoxError':
	      return RedBoxError;
	  }
	
	  return undefined;
	}
	
	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}
	
	function _set_original__(variableName, _value) {
	  switch (variableName) {}
	
	  return undefined;
	}
	
	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);
	
	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
	
	  _assign__(variableName, newValue);
	
	  return prefix ? newValue : oldValue;
	}
	
	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }
	
	    return function () {
	      _reset__(variableName);
	    };
	  }
	}
	
	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}
	
	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};
	
	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }
	
	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();
	
	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }
	
	    return result;
	  };
	}
	
	var _typeOfOriginalExport = typeof RedBox === 'undefined' ? 'undefined' : _typeof(RedBox);
	
	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(RedBox, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}
	
	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(RedBox)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}
	
	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },

/***/ 351:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _DefaultExportValue = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: '0px',
	    left: '0px',
	    bottom: '0px',
	    right: '0px',
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 2147483647,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2,
	    overflow: 'auto'
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};
	exports.default = _DefaultExportValue;

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(353)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	}(this, function ErrorStackParser(StackFrame) {
	    'use strict';
	
	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
	    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
	
	    function _map(array, fn, thisArg) {
	        if (typeof Array.prototype.map === 'function') {
	            return array.map(fn, thisArg);
	        } else {
	            var output = new Array(array.length);
	            for (var i = 0; i < array.length; i++) {
	                output[i] = fn.call(thisArg, array[i]);
	            }
	            return output;
	        }
	    }
	
	    function _filter(array, fn, thisArg) {
	        if (typeof Array.prototype.filter === 'function') {
	            return array.filter(fn, thisArg);
	        } else {
	            var output = [];
	            for (var i = 0; i < array.length; i++) {
	                if (fn.call(thisArg, array[i])) {
	                    output.push(array[i]);
	                }
	            }
	            return output;
	        }
	    }
	
	    function _indexOf(array, target) {
	        if (typeof Array.prototype.indexOf === 'function') {
	            return array.indexOf(target);
	        } else {
	            for (var i = 0; i < array.length; i++) {
	                if (array[i] === target) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }
	
	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         *
	         * @param {Error} error object
	         * @return {Array} of StackFrames
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },
	
	        // Separate line and column numbers from a string of the form: (URI:Line:Column)
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }
	
	            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
	            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
	            return [parts[1], parts[2] || undefined, parts[3] || undefined];
	        },
	
	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            var filtered = _filter(error.stack.split('\n'), function(line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this);
	
	            return _map(filtered, function(line) {
	                if (line.indexOf('(eval ') > -1) {
	                    // Throw away eval information until we implement stacktrace.js/stackframe#8
	                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
	                }
	                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.join(' ') || undefined;
	                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];
	
	                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            var filtered = _filter(error.stack.split('\n'), function(line) {
	                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
	            }, this);
	
	            return _map(filtered, function(line) {
	                // Throw away eval information until we implement stacktrace.js/stackframe#8
	                if (line.indexOf(' > eval') > -1) {
	                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
	                }
	
	                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
	                    // Safari eval frames only have function names and nothing else
	                    return new StackFrame(line);
	                } else {
	                    var tokens = line.split('@');
	                    var locationParts = this.extractLocation(tokens.pop());
	                    var functionName = tokens.join('@') || undefined;
	                    return new StackFrame(functionName,
	                        undefined,
	                        locationParts[0],
	                        locationParts[1],
	                        locationParts[2],
	                        line);
	                }
	            }, this);
	        },
	
	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },
	
	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];
	
	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];
	
	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(
	                        new StackFrame(
	                            match[3] || undefined,
	                            undefined,
	                            match[2],
	                            match[1],
	                            undefined,
	                            lines[i]
	                        )
	                    );
	                }
	            }
	
	            return result;
	        },
	
	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            var filtered = _filter(error.stack.split('\n'), function(line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
	            }, this);
	
	            return _map(filtered, function(line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                        .replace(/<anonymous function(: (\w+))?>/, '$2')
	                        .replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
	                    undefined : argsRaw.split(',');
	                return new StackFrame(
	                    functionName,
	                    args,
	                    locationParts[0],
	                    locationParts[1],
	                    locationParts[2],
	                    line);
	            }, this);
	        }
	    };
	}));
	


/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	}(this, function () {
	    'use strict';
	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }
	
	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }
	
	    StackFrame.prototype = {
	        getFunctionName: function () {
	            return this.functionName;
	        },
	        setFunctionName: function (v) {
	            this.functionName = String(v);
	        },
	
	        getArgs: function () {
	            return this.args;
	        },
	        setArgs: function (v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },
	
	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function () {
	            return this.fileName;
	        },
	        setFileName: function (v) {
	            this.fileName = String(v);
	        },
	
	        getLineNumber: function () {
	            return this.lineNumber;
	        },
	        setLineNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },
	
	        getColumnNumber: function () {
	            return this.columnNumber;
	        },
	        setColumnNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },
	
	        getSource: function () {
	            return this.source;
	        },
	        setSource: function (v) {
	            this.source = String(v);
	        },
	
	        toString: function() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };
	
	    return StackFrame;
	}));


/***/ },

/***/ 354:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var filenameWithoutLoaders = exports.filenameWithoutLoaders = function filenameWithoutLoaders() {
	  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	  var index = filename.lastIndexOf('!');
	
	  return index < 0 ? filename : filename.substr(index + 1);
	};
	
	var filenameHasLoaders = exports.filenameHasLoaders = function filenameHasLoaders(filename) {
	  var actualFilename = _get__('filenameWithoutLoaders')(filename);
	
	  return actualFilename !== filename;
	};
	
	var filenameHasSchema = exports.filenameHasSchema = function filenameHasSchema(filename) {
	  return (/^[\w]+\:/.test(filename)
	  );
	};
	
	var isFilenameAbsolute = exports.isFilenameAbsolute = function isFilenameAbsolute(filename) {
	  var actualFilename = _get__('filenameWithoutLoaders')(filename);
	
	  if (actualFilename.indexOf('/') === 0) {
	    return true;
	  }
	
	  return false;
	};
	
	var makeUrl = exports.makeUrl = function makeUrl(filename, scheme, line, column) {
	  var actualFilename = _get__('filenameWithoutLoaders')(filename);
	
	  if (_get__('filenameHasSchema')(filename)) {
	    return actualFilename;
	  }
	
	  var url = 'file://' + actualFilename;
	
	  if (scheme === 'vscode') {
	    url = scheme + '://file/' + url;
	    url = url.replace(/file:\/\/\//, ''); // visual studio code does not need file:/// in its scheme
	    if (line && actualFilename === filename) {
	      url = url + ':' + line;
	
	      if (column) {
	        url = url + ':' + column;
	      }
	    }
	  } else if (scheme) {
	    url = scheme + '://open?url=' + url;
	
	    if (line && actualFilename === filename) {
	      url = url + '&line=' + line;
	
	      if (column) {
	        url = url + '&column=' + column;
	      }
	    }
	  }
	
	  return url;
	};
	
	var makeLinkText = exports.makeLinkText = function makeLinkText(filename, line, column) {
	  var text = _get__('filenameWithoutLoaders')(filename);
	
	  if (line && text === filename) {
	    text = text + ':' + line;
	
	    if (column) {
	      text = text + ':' + column;
	    }
	  }
	
	  return text;
	};
	
	var _RewiredData__ = Object.create(null);
	
	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};
	
	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }
	
	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();
	
	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];
	
	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}
	
	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'filenameWithoutLoaders':
	      return filenameWithoutLoaders;
	
	    case 'filenameHasSchema':
	      return filenameHasSchema;
	  }
	
	  return undefined;
	}
	
	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}
	
	function _set_original__(variableName, _value) {
	  switch (variableName) {}
	
	  return undefined;
	}
	
	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);
	
	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
	
	  _assign__(variableName, newValue);
	
	  return prefix ? newValue : oldValue;
	}
	
	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }
	
	    return function () {
	      _reset__(variableName);
	    };
	  }
	}
	
	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}
	
	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};
	
	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }
	
	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();
	
	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }
	
	    return result;
	  };
	}
	
	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	exports.default = _RewireAPI__;

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["sourceMappedStackTrace"] = factory();
		else
			root["sourceMappedStackTrace"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
		 * sourcemapped-stacktrace.js
		 * created by James Salter <iteration@gmail.com> (2014)
		 *
		 * https://github.com/novocaine/sourcemapped-stacktrace
		 *
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */
	
		/*global define */
	
		// note we only include source-map-consumer, not the whole source-map library,
		// which includes gear for generating source maps that we don't need
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(source_map_consumer) {
	
		  var global_mapForUri = {};
	
		  /**
		   * Re-map entries in a stacktrace using sourcemaps if available.
		   *
		   * @param {Array} stack - Array of strings from the browser's stack
		   *                        representation. Currently only Chrome
		   *                        format is supported.
		   * @param {function} done - Callback invoked with the transformed stacktrace
		   *                          (an Array of Strings) passed as the first
		   *                          argument
		   * @param {Object} [opts] - Optional options object.
		   * @param {Function} [opts.filter] - Filter function applied to each stackTrace line.
		   *                                   Lines which do not pass the filter won't be processesd.
		   * @param {boolean} [opts.cacheGlobally] - Whether to cache sourcemaps globally across multiple calls.
		   */
		  var mapStackTrace = function(stack, done, opts) {
		    var lines;
		    var line;
		    var mapForUri = {};
		    var rows = {};
		    var fields;
		    var uri;
		    var expected_fields;
		    var regex;
		    var skip_lines;
	
		    var fetcher = new Fetcher(function() {
		      var result = processSourceMaps(lines, rows, fetcher.mapForUri);
		      done(result);
		    }, opts);
	
		    if (isChromeOrEdge() || isIE11Plus()) {
		      regex = /^ +at.+\((.*):([0-9]+):([0-9]+)/;
		      expected_fields = 4;
		      // (skip first line containing exception message)
		      skip_lines = 1;
		    } else if (isFirefox() || isSafari()) {
		      regex = /@(.*):([0-9]+):([0-9]+)/;
		      expected_fields = 4;
		      skip_lines = 0;
		    } else {
		      throw new Error("unknown browser :(");
		    }
	
		    lines = stack.split("\n").slice(skip_lines);
	
		    for (var i=0; i < lines.length; i++) {
		      line = lines[i];
		      if ( opts && opts.filter && !opts.filter(line) ) continue;
		      
		      fields = line.match(regex);
		      if (fields && fields.length === expected_fields) {
		        rows[i] = fields;
		        uri = fields[1];
		        if (!uri.match(/<anonymous>/)) {
		          fetcher.fetchScript(uri);
		        }
		      }
		    }
	
		    // if opts.cacheGlobally set, all maps could have been cached already,
		    // thus we need to call done callback right away
		    if ( fetcher.sem === 0 ) {
		      fetcher.done(fetcher.mapForUri);
		    }
		  };
	
		  var isChromeOrEdge = function() {
		    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		  };
	
		  var isFirefox = function() {
		    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		  };  
	
		  var isSafari = function() {
		    return navigator.userAgent.toLowerCase().indexOf('safari') > -1;
		  };
				
		  var isIE11Plus = function() {
		   	return document.documentMode && document.documentMode >= 11;
		  };
	
		  var Fetcher = function(done, opts) {
		    this.sem = 0;
		    this.mapForUri = opts && opts.cacheGlobally ? global_mapForUri : {};
		    this.done = done;
		  };
	
		  Fetcher.prototype.fetchScript = function(uri) {
		    if (!(uri in this.mapForUri)) {
		      this.sem++;
		      this.mapForUri[uri] = null;
		    } else {
		      return;
		    }
	
		    var xhr = createXMLHTTPObject();
		    var that = this;
		    xhr.onreadystatechange = function(e) {
		      that.onScriptLoad.call(that, e, uri);
		    };
		    xhr.open("GET", uri, true);
		    xhr.send();
		  };
	
		  var absUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
	
		  Fetcher.prototype.onScriptLoad = function(e, uri) {
		    if (e.target.readyState !== 4) {
		      return;
		    }
	
		    if (e.target.status === 200 ||
		      (uri.slice(0, 7) === "file://" && e.target.status === 0))
		    {
		      // find .map in file.
		      //
		      // attempt to find it at the very end of the file, but tolerate trailing
		      // whitespace inserted by some packers.
		      var match = e.target.responseText.match("//# [s]ourceMappingURL=(.*)[\\s]*$", "m");
		      if (match && match.length === 2) {
		        // get the map
		        var mapUri = match[1];
	
		        var embeddedSourceMap = mapUri.match("data:application/json;(charset=[^;]+;)?base64,(.*)");
	
		        if (embeddedSourceMap && embeddedSourceMap[2]) {
		          this.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(atob(embeddedSourceMap[2]));
		          this.done(this.mapForUri);
		        } else {
		          if (!absUrlRegex.test(mapUri)) {
		            // relative url; according to sourcemaps spec is 'source origin'
		            var origin;
		            var lastSlash = uri.lastIndexOf('/');
		            if (lastSlash !== -1) {
		              origin = uri.slice(0, lastSlash + 1);
		              mapUri = origin + mapUri;
		              // note if lastSlash === -1, actual script uri has no slash
		              // somehow, so no way to use it as a prefix... we give up and try
		              // as absolute
		            }
		          }
	
		          var xhrMap = createXMLHTTPObject();
		          var that = this;
		          xhrMap.onreadystatechange = function() {
		            if (xhrMap.readyState === 4) {
		              that.sem--;
		              if (xhrMap.status === 200 ||
		                (mapUri.slice(0, 7) === "file://" && xhrMap.status === 0)) {
		                that.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(xhrMap.responseText);
		              }
		              if (that.sem === 0) {
		                that.done(that.mapForUri);
		              }
		            }
		          };
	
		          xhrMap.open("GET", mapUri, true);
		          xhrMap.send();
		        }
		      } else {
		        // no map
		        this.sem--;
		      }
		    } else {
		      // HTTP error fetching uri of the script
		      this.sem--;
		    }
	
		    if (this.sem === 0) {
		      this.done(this.mapForUri);
		    }
		  };
	
		  var processSourceMaps = function(lines, rows, mapForUri) {
		    var result = [];
		    var map;
		    for (var i=0; i < lines.length; i++) {
		      var row = rows[i];
		      if (row) {
		        var uri = row[1];
		        var line = parseInt(row[2], 10);
		        var column = parseInt(row[3], 10);
		        map = mapForUri[uri];
	
		        if (map) {
		          // we think we have a map for that uri. call source-map library
		          var origPos = map.originalPositionFor(
		            { line: line, column: column });
		          result.push(formatOriginalPosition(origPos.source,
		            origPos.line, origPos.column, origPos.name || origName(lines[i])));
		        } else {
		          // we can't find a map for that url, but we parsed the row.
		          // reformat unchanged line for consistency with the sourcemapped
		          // lines.
		          result.push(formatOriginalPosition(uri, line, column, origName(lines[i])));
		        }
		      } else {
		        // we weren't able to parse the row, push back what we were given
		        result.push(lines[i]);
		      }
		    }
	
		    return result;
		  };
	
		  function origName(origLine) {
		    var match = String(origLine).match((isChromeOrEdge() || isIE11Plus()) ?
		      / +at +([^ ]*).*/ :
		      /([^@]*)@.*/);
		    return match && match[1];
		  }
	
		  var formatOriginalPosition = function(source, line, column, name) {
		    // mimic chrome's format
		    return "    at " + (name ? name : "(unknown)") +
		      " (" + source + ":" + line + ":" + column + ")";
		  };
	
		  // xmlhttprequest boilerplate
		  var XMLHttpFactories = [
			function () {return new XMLHttpRequest();},
			function () {return new ActiveXObject("Msxml2.XMLHTTP");},
			function () {return new ActiveXObject("Msxml3.XMLHTTP");},
			function () {return new ActiveXObject("Microsoft.XMLHTTP");}
		  ];
	
		  function createXMLHTTPObject() {
		      var xmlhttp = false;
		      for (var i=0;i<XMLHttpFactories.length;i++) {
		          try {
		              xmlhttp = XMLHttpFactories[i]();
		          }
		          catch (e) {
		              continue;
		          }
		          break;
		      }
		      return xmlhttp;
		  }
	
		  return {
		    mapStackTrace: mapStackTrace
		  }
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* -*- Mode: js; js-indent-level: 2; -*- */
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */
	
		var util = __webpack_require__(2);
		var binarySearch = __webpack_require__(3);
		var ArraySet = __webpack_require__(4).ArraySet;
		var base64VLQ = __webpack_require__(5);
		var quickSort = __webpack_require__(7).quickSort;
	
		function SourceMapConsumer(aSourceMap) {
		  var sourceMap = aSourceMap;
		  if (typeof aSourceMap === 'string') {
		    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
		  }
	
		  return sourceMap.sections != null
		    ? new IndexedSourceMapConsumer(sourceMap)
		    : new BasicSourceMapConsumer(sourceMap);
		}
	
		SourceMapConsumer.fromSourceMap = function(aSourceMap) {
		  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
		}
	
		/**
		 * The version of the source mapping spec that we are consuming.
		 */
		SourceMapConsumer.prototype._version = 3;
	
		// `__generatedMappings` and `__originalMappings` are arrays that hold the
		// parsed mapping coordinates from the source map's "mappings" attribute. They
		// are lazily instantiated, accessed via the `_generatedMappings` and
		// `_originalMappings` getters respectively, and we only parse the mappings
		// and create these arrays once queried for a source location. We jump through
		// these hoops because there can be many thousands of mappings, and parsing
		// them is expensive, so we only want to do it if we must.
		//
		// Each object in the arrays is of the form:
		//
		//     {
		//       generatedLine: The line number in the generated code,
		//       generatedColumn: The column number in the generated code,
		//       source: The path to the original source file that generated this
		//               chunk of code,
		//       originalLine: The line number in the original source that
		//                     corresponds to this chunk of generated code,
		//       originalColumn: The column number in the original source that
		//                       corresponds to this chunk of generated code,
		//       name: The name of the original symbol which generated this chunk of
		//             code.
		//     }
		//
		// All properties except for `generatedLine` and `generatedColumn` can be
		// `null`.
		//
		// `_generatedMappings` is ordered by the generated positions.
		//
		// `_originalMappings` is ordered by the original positions.
	
		SourceMapConsumer.prototype.__generatedMappings = null;
		Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
		  get: function () {
		    if (!this.__generatedMappings) {
		      this._parseMappings(this._mappings, this.sourceRoot);
		    }
	
		    return this.__generatedMappings;
		  }
		});
	
		SourceMapConsumer.prototype.__originalMappings = null;
		Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
		  get: function () {
		    if (!this.__originalMappings) {
		      this._parseMappings(this._mappings, this.sourceRoot);
		    }
	
		    return this.__originalMappings;
		  }
		});
	
		SourceMapConsumer.prototype._charIsMappingSeparator =
		  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
		    var c = aStr.charAt(index);
		    return c === ";" || c === ",";
		  };
	
		/**
		 * Parse the mappings in a string in to a data structure which we can easily
		 * query (the ordered arrays in the `this.__generatedMappings` and
		 * `this.__originalMappings` properties).
		 */
		SourceMapConsumer.prototype._parseMappings =
		  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
		    throw new Error("Subclasses must implement _parseMappings");
		  };
	
		SourceMapConsumer.GENERATED_ORDER = 1;
		SourceMapConsumer.ORIGINAL_ORDER = 2;
	
		SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
		SourceMapConsumer.LEAST_UPPER_BOUND = 2;
	
		/**
		 * Iterate over each mapping between an original source/line/column and a
		 * generated line/column in this source map.
		 *
		 * @param Function aCallback
		 *        The function that is called with each mapping.
		 * @param Object aContext
		 *        Optional. If specified, this object will be the value of `this` every
		 *        time that `aCallback` is called.
		 * @param aOrder
		 *        Either `SourceMapConsumer.GENERATED_ORDER` or
		 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
		 *        iterate over the mappings sorted by the generated file's line/column
		 *        order or the original's source/line/column order, respectively. Defaults to
		 *        `SourceMapConsumer.GENERATED_ORDER`.
		 */
		SourceMapConsumer.prototype.eachMapping =
		  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
		    var context = aContext || null;
		    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
	
		    var mappings;
		    switch (order) {
		    case SourceMapConsumer.GENERATED_ORDER:
		      mappings = this._generatedMappings;
		      break;
		    case SourceMapConsumer.ORIGINAL_ORDER:
		      mappings = this._originalMappings;
		      break;
		    default:
		      throw new Error("Unknown order of iteration.");
		    }
	
		    var sourceRoot = this.sourceRoot;
		    mappings.map(function (mapping) {
		      var source = mapping.source === null ? null : this._sources.at(mapping.source);
		      if (source != null && sourceRoot != null) {
		        source = util.join(sourceRoot, source);
		      }
		      return {
		        source: source,
		        generatedLine: mapping.generatedLine,
		        generatedColumn: mapping.generatedColumn,
		        originalLine: mapping.originalLine,
		        originalColumn: mapping.originalColumn,
		        name: mapping.name === null ? null : this._names.at(mapping.name)
		      };
		    }, this).forEach(aCallback, context);
		  };
	
		/**
		 * Returns all generated line and column information for the original source,
		 * line, and column provided. If no column is provided, returns all mappings
		 * corresponding to a either the line we are searching for or the next
		 * closest line that has any mappings. Otherwise, returns all mappings
		 * corresponding to the given line and either the column we are searching for
		 * or the next closest column that has any offsets.
		 *
		 * The only argument is an object with the following properties:
		 *
		 *   - source: The filename of the original source.
		 *   - line: The line number in the original source.
		 *   - column: Optional. the column number in the original source.
		 *
		 * and an array of objects is returned, each with the following properties:
		 *
		 *   - line: The line number in the generated source, or null.
		 *   - column: The column number in the generated source, or null.
		 */
		SourceMapConsumer.prototype.allGeneratedPositionsFor =
		  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
		    var line = util.getArg(aArgs, 'line');
	
		    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
		    // returns the index of the closest mapping less than the needle. By
		    // setting needle.originalColumn to 0, we thus find the last mapping for
		    // the given line, provided such a mapping exists.
		    var needle = {
		      source: util.getArg(aArgs, 'source'),
		      originalLine: line,
		      originalColumn: util.getArg(aArgs, 'column', 0)
		    };
	
		    if (this.sourceRoot != null) {
		      needle.source = util.relative(this.sourceRoot, needle.source);
		    }
		    if (!this._sources.has(needle.source)) {
		      return [];
		    }
		    needle.source = this._sources.indexOf(needle.source);
	
		    var mappings = [];
	
		    var index = this._findMapping(needle,
		                                  this._originalMappings,
		                                  "originalLine",
		                                  "originalColumn",
		                                  util.compareByOriginalPositions,
		                                  binarySearch.LEAST_UPPER_BOUND);
		    if (index >= 0) {
		      var mapping = this._originalMappings[index];
	
		      if (aArgs.column === undefined) {
		        var originalLine = mapping.originalLine;
	
		        // Iterate until either we run out of mappings, or we run into
		        // a mapping for a different line than the one we found. Since
		        // mappings are sorted, this is guaranteed to find all mappings for
		        // the line we found.
		        while (mapping && mapping.originalLine === originalLine) {
		          mappings.push({
		            line: util.getArg(mapping, 'generatedLine', null),
		            column: util.getArg(mapping, 'generatedColumn', null),
		            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
		          });
	
		          mapping = this._originalMappings[++index];
		        }
		      } else {
		        var originalColumn = mapping.originalColumn;
	
		        // Iterate until either we run out of mappings, or we run into
		        // a mapping for a different line than the one we were searching for.
		        // Since mappings are sorted, this is guaranteed to find all mappings for
		        // the line we are searching for.
		        while (mapping &&
		               mapping.originalLine === line &&
		               mapping.originalColumn == originalColumn) {
		          mappings.push({
		            line: util.getArg(mapping, 'generatedLine', null),
		            column: util.getArg(mapping, 'generatedColumn', null),
		            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
		          });
	
		          mapping = this._originalMappings[++index];
		        }
		      }
		    }
	
		    return mappings;
		  };
	
		exports.SourceMapConsumer = SourceMapConsumer;
	
		/**
		 * A BasicSourceMapConsumer instance represents a parsed source map which we can
		 * query for information about the original file positions by giving it a file
		 * position in the generated source.
		 *
		 * The only parameter is the raw source map (either as a JSON string, or
		 * already parsed to an object). According to the spec, source maps have the
		 * following attributes:
		 *
		 *   - version: Which version of the source map spec this map is following.
		 *   - sources: An array of URLs to the original source files.
		 *   - names: An array of identifiers which can be referrenced by individual mappings.
		 *   - sourceRoot: Optional. The URL root from which all sources are relative.
		 *   - sourcesContent: Optional. An array of contents of the original source files.
		 *   - mappings: A string of base64 VLQs which contain the actual mappings.
		 *   - file: Optional. The generated file this source map is associated with.
		 *
		 * Here is an example source map, taken from the source map spec[0]:
		 *
		 *     {
		 *       version : 3,
		 *       file: "out.js",
		 *       sourceRoot : "",
		 *       sources: ["foo.js", "bar.js"],
		 *       names: ["src", "maps", "are", "fun"],
		 *       mappings: "AA,AB;;ABCDE;"
		 *     }
		 *
		 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
		 */
		function BasicSourceMapConsumer(aSourceMap) {
		  var sourceMap = aSourceMap;
		  if (typeof aSourceMap === 'string') {
		    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
		  }
	
		  var version = util.getArg(sourceMap, 'version');
		  var sources = util.getArg(sourceMap, 'sources');
		  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
		  // requires the array) to play nice here.
		  var names = util.getArg(sourceMap, 'names', []);
		  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
		  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
		  var mappings = util.getArg(sourceMap, 'mappings');
		  var file = util.getArg(sourceMap, 'file', null);
	
		  // Once again, Sass deviates from the spec and supplies the version as a
		  // string rather than a number, so we use loose equality checking here.
		  if (version != this._version) {
		    throw new Error('Unsupported version: ' + version);
		  }
	
		  sources = sources
		    .map(String)
		    // Some source maps produce relative source paths like "./foo.js" instead of
		    // "foo.js".  Normalize these first so that future comparisons will succeed.
		    // See bugzil.la/1090768.
		    .map(util.normalize)
		    // Always ensure that absolute sources are internally stored relative to
		    // the source root, if the source root is absolute. Not doing this would
		    // be particularly problematic when the source root is a prefix of the
		    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
		    .map(function (source) {
		      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
		        ? util.relative(sourceRoot, source)
		        : source;
		    });
	
		  // Pass `true` below to allow duplicate names and sources. While source maps
		  // are intended to be compressed and deduplicated, the TypeScript compiler
		  // sometimes generates source maps with duplicates in them. See Github issue
		  // #72 and bugzil.la/889492.
		  this._names = ArraySet.fromArray(names.map(String), true);
		  this._sources = ArraySet.fromArray(sources, true);
	
		  this.sourceRoot = sourceRoot;
		  this.sourcesContent = sourcesContent;
		  this._mappings = mappings;
		  this.file = file;
		}
	
		BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
		BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
	
		/**
		 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
		 *
		 * @param SourceMapGenerator aSourceMap
		 *        The source map that will be consumed.
		 * @returns BasicSourceMapConsumer
		 */
		BasicSourceMapConsumer.fromSourceMap =
		  function SourceMapConsumer_fromSourceMap(aSourceMap) {
		    var smc = Object.create(BasicSourceMapConsumer.prototype);
	
		    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
		    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
		    smc.sourceRoot = aSourceMap._sourceRoot;
		    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
		                                                            smc.sourceRoot);
		    smc.file = aSourceMap._file;
	
		    // Because we are modifying the entries (by converting string sources and
		    // names to indices into the sources and names ArraySets), we have to make
		    // a copy of the entry or else bad things happen. Shared mutable state
		    // strikes again! See github issue #191.
	
		    var generatedMappings = aSourceMap._mappings.toArray().slice();
		    var destGeneratedMappings = smc.__generatedMappings = [];
		    var destOriginalMappings = smc.__originalMappings = [];
	
		    for (var i = 0, length = generatedMappings.length; i < length; i++) {
		      var srcMapping = generatedMappings[i];
		      var destMapping = new Mapping;
		      destMapping.generatedLine = srcMapping.generatedLine;
		      destMapping.generatedColumn = srcMapping.generatedColumn;
	
		      if (srcMapping.source) {
		        destMapping.source = sources.indexOf(srcMapping.source);
		        destMapping.originalLine = srcMapping.originalLine;
		        destMapping.originalColumn = srcMapping.originalColumn;
	
		        if (srcMapping.name) {
		          destMapping.name = names.indexOf(srcMapping.name);
		        }
	
		        destOriginalMappings.push(destMapping);
		      }
	
		      destGeneratedMappings.push(destMapping);
		    }
	
		    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
	
		    return smc;
		  };
	
		/**
		 * The version of the source mapping spec that we are consuming.
		 */
		BasicSourceMapConsumer.prototype._version = 3;
	
		/**
		 * The list of original sources.
		 */
		Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
		  get: function () {
		    return this._sources.toArray().map(function (s) {
		      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
		    }, this);
		  }
		});
	
		/**
		 * Provide the JIT with a nice shape / hidden class.
		 */
		function Mapping() {
		  this.generatedLine = 0;
		  this.generatedColumn = 0;
		  this.source = null;
		  this.originalLine = null;
		  this.originalColumn = null;
		  this.name = null;
		}
	
		/**
		 * Parse the mappings in a string in to a data structure which we can easily
		 * query (the ordered arrays in the `this.__generatedMappings` and
		 * `this.__originalMappings` properties).
		 */
		BasicSourceMapConsumer.prototype._parseMappings =
		  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
		    var generatedLine = 1;
		    var previousGeneratedColumn = 0;
		    var previousOriginalLine = 0;
		    var previousOriginalColumn = 0;
		    var previousSource = 0;
		    var previousName = 0;
		    var length = aStr.length;
		    var index = 0;
		    var cachedSegments = {};
		    var temp = {};
		    var originalMappings = [];
		    var generatedMappings = [];
		    var mapping, str, segment, end, value;
	
		    while (index < length) {
		      if (aStr.charAt(index) === ';') {
		        generatedLine++;
		        index++;
		        previousGeneratedColumn = 0;
		      }
		      else if (aStr.charAt(index) === ',') {
		        index++;
		      }
		      else {
		        mapping = new Mapping();
		        mapping.generatedLine = generatedLine;
	
		        // Because each offset is encoded relative to the previous one,
		        // many segments often have the same encoding. We can exploit this
		        // fact by caching the parsed variable length fields of each segment,
		        // allowing us to avoid a second parse if we encounter the same
		        // segment again.
		        for (end = index; end < length; end++) {
		          if (this._charIsMappingSeparator(aStr, end)) {
		            break;
		          }
		        }
		        str = aStr.slice(index, end);
	
		        segment = cachedSegments[str];
		        if (segment) {
		          index += str.length;
		        } else {
		          segment = [];
		          while (index < end) {
		            base64VLQ.decode(aStr, index, temp);
		            value = temp.value;
		            index = temp.rest;
		            segment.push(value);
		          }
	
		          if (segment.length === 2) {
		            throw new Error('Found a source, but no line and column');
		          }
	
		          if (segment.length === 3) {
		            throw new Error('Found a source and line, but no column');
		          }
	
		          cachedSegments[str] = segment;
		        }
	
		        // Generated column.
		        mapping.generatedColumn = previousGeneratedColumn + segment[0];
		        previousGeneratedColumn = mapping.generatedColumn;
	
		        if (segment.length > 1) {
		          // Original source.
		          mapping.source = previousSource + segment[1];
		          previousSource += segment[1];
	
		          // Original line.
		          mapping.originalLine = previousOriginalLine + segment[2];
		          previousOriginalLine = mapping.originalLine;
		          // Lines are stored 0-based
		          mapping.originalLine += 1;
	
		          // Original column.
		          mapping.originalColumn = previousOriginalColumn + segment[3];
		          previousOriginalColumn = mapping.originalColumn;
	
		          if (segment.length > 4) {
		            // Original name.
		            mapping.name = previousName + segment[4];
		            previousName += segment[4];
		          }
		        }
	
		        generatedMappings.push(mapping);
		        if (typeof mapping.originalLine === 'number') {
		          originalMappings.push(mapping);
		        }
		      }
		    }
	
		    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
		    this.__generatedMappings = generatedMappings;
	
		    quickSort(originalMappings, util.compareByOriginalPositions);
		    this.__originalMappings = originalMappings;
		  };
	
		/**
		 * Find the mapping that best matches the hypothetical "needle" mapping that
		 * we are searching for in the given "haystack" of mappings.
		 */
		BasicSourceMapConsumer.prototype._findMapping =
		  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
		                                         aColumnName, aComparator, aBias) {
		    // To return the position we are searching for, we must first find the
		    // mapping for the given position and then return the opposite position it
		    // points to. Because the mappings are sorted, we can use binary search to
		    // find the best mapping.
	
		    if (aNeedle[aLineName] <= 0) {
		      throw new TypeError('Line must be greater than or equal to 1, got '
		                          + aNeedle[aLineName]);
		    }
		    if (aNeedle[aColumnName] < 0) {
		      throw new TypeError('Column must be greater than or equal to 0, got '
		                          + aNeedle[aColumnName]);
		    }
	
		    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
		  };
	
		/**
		 * Compute the last column for each generated mapping. The last column is
		 * inclusive.
		 */
		BasicSourceMapConsumer.prototype.computeColumnSpans =
		  function SourceMapConsumer_computeColumnSpans() {
		    for (var index = 0; index < this._generatedMappings.length; ++index) {
		      var mapping = this._generatedMappings[index];
	
		      // Mappings do not contain a field for the last generated columnt. We
		      // can come up with an optimistic estimate, however, by assuming that
		      // mappings are contiguous (i.e. given two consecutive mappings, the
		      // first mapping ends where the second one starts).
		      if (index + 1 < this._generatedMappings.length) {
		        var nextMapping = this._generatedMappings[index + 1];
	
		        if (mapping.generatedLine === nextMapping.generatedLine) {
		          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
		          continue;
		        }
		      }
	
		      // The last mapping for each line spans the entire line.
		      mapping.lastGeneratedColumn = Infinity;
		    }
		  };
	
		/**
		 * Returns the original source, line, and column information for the generated
		 * source's line and column positions provided. The only argument is an object
		 * with the following properties:
		 *
		 *   - line: The line number in the generated source.
		 *   - column: The column number in the generated source.
		 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
		 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
		 *     closest element that is smaller than or greater than the one we are
		 *     searching for, respectively, if the exact element cannot be found.
		 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
		 *
		 * and an object is returned with the following properties:
		 *
		 *   - source: The original source file, or null.
		 *   - line: The line number in the original source, or null.
		 *   - column: The column number in the original source, or null.
		 *   - name: The original identifier, or null.
		 */
		BasicSourceMapConsumer.prototype.originalPositionFor =
		  function SourceMapConsumer_originalPositionFor(aArgs) {
		    var needle = {
		      generatedLine: util.getArg(aArgs, 'line'),
		      generatedColumn: util.getArg(aArgs, 'column')
		    };
	
		    var index = this._findMapping(
		      needle,
		      this._generatedMappings,
		      "generatedLine",
		      "generatedColumn",
		      util.compareByGeneratedPositionsDeflated,
		      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
		    );
	
		    if (index >= 0) {
		      var mapping = this._generatedMappings[index];
	
		      if (mapping.generatedLine === needle.generatedLine) {
		        var source = util.getArg(mapping, 'source', null);
		        if (source !== null) {
		          source = this._sources.at(source);
		          if (this.sourceRoot != null) {
		            source = util.join(this.sourceRoot, source);
		          }
		        }
		        var name = util.getArg(mapping, 'name', null);
		        if (name !== null) {
		          name = this._names.at(name);
		        }
		        return {
		          source: source,
		          line: util.getArg(mapping, 'originalLine', null),
		          column: util.getArg(mapping, 'originalColumn', null),
		          name: name
		        };
		      }
		    }
	
		    return {
		      source: null,
		      line: null,
		      column: null,
		      name: null
		    };
		  };
	
		/**
		 * Return true if we have the source content for every source in the source
		 * map, false otherwise.
		 */
		BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
		  function BasicSourceMapConsumer_hasContentsOfAllSources() {
		    if (!this.sourcesContent) {
		      return false;
		    }
		    return this.sourcesContent.length >= this._sources.size() &&
		      !this.sourcesContent.some(function (sc) { return sc == null; });
		  };
	
		/**
		 * Returns the original source content. The only argument is the url of the
		 * original source file. Returns null if no original source content is
		 * available.
		 */
		BasicSourceMapConsumer.prototype.sourceContentFor =
		  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
		    if (!this.sourcesContent) {
		      return null;
		    }
	
		    if (this.sourceRoot != null) {
		      aSource = util.relative(this.sourceRoot, aSource);
		    }
	
		    if (this._sources.has(aSource)) {
		      return this.sourcesContent[this._sources.indexOf(aSource)];
		    }
	
		    var url;
		    if (this.sourceRoot != null
		        && (url = util.urlParse(this.sourceRoot))) {
		      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
		      // many users. We can help them out when they expect file:// URIs to
		      // behave like it would if they were running a local HTTP server. See
		      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
		      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
		      if (url.scheme == "file"
		          && this._sources.has(fileUriAbsPath)) {
		        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
		      }
	
		      if ((!url.path || url.path == "/")
		          && this._sources.has("/" + aSource)) {
		        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
		      }
		    }
	
		    // This function is used recursively from
		    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
		    // don't want to throw if we can't find the source - we just want to
		    // return null, so we provide a flag to exit gracefully.
		    if (nullOnMissing) {
		      return null;
		    }
		    else {
		      throw new Error('"' + aSource + '" is not in the SourceMap.');
		    }
		  };
	
		/**
		 * Returns the generated line and column information for the original source,
		 * line, and column positions provided. The only argument is an object with
		 * the following properties:
		 *
		 *   - source: The filename of the original source.
		 *   - line: The line number in the original source.
		 *   - column: The column number in the original source.
		 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
		 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
		 *     closest element that is smaller than or greater than the one we are
		 *     searching for, respectively, if the exact element cannot be found.
		 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
		 *
		 * and an object is returned with the following properties:
		 *
		 *   - line: The line number in the generated source, or null.
		 *   - column: The column number in the generated source, or null.
		 */
		BasicSourceMapConsumer.prototype.generatedPositionFor =
		  function SourceMapConsumer_generatedPositionFor(aArgs) {
		    var source = util.getArg(aArgs, 'source');
		    if (this.sourceRoot != null) {
		      source = util.relative(this.sourceRoot, source);
		    }
		    if (!this._sources.has(source)) {
		      return {
		        line: null,
		        column: null,
		        lastColumn: null
		      };
		    }
		    source = this._sources.indexOf(source);
	
		    var needle = {
		      source: source,
		      originalLine: util.getArg(aArgs, 'line'),
		      originalColumn: util.getArg(aArgs, 'column')
		    };
	
		    var index = this._findMapping(
		      needle,
		      this._originalMappings,
		      "originalLine",
		      "originalColumn",
		      util.compareByOriginalPositions,
		      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
		    );
	
		    if (index >= 0) {
		      var mapping = this._originalMappings[index];
	
		      if (mapping.source === needle.source) {
		        return {
		          line: util.getArg(mapping, 'generatedLine', null),
		          column: util.getArg(mapping, 'generatedColumn', null),
		          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
		        };
		      }
		    }
	
		    return {
		      line: null,
		      column: null,
		      lastColumn: null
		    };
		  };
	
		exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
	
		/**
		 * An IndexedSourceMapConsumer instance represents a parsed source map which
		 * we can query for information. It differs from BasicSourceMapConsumer in
		 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
		 * input.
		 *
		 * The only parameter is a raw source map (either as a JSON string, or already
		 * parsed to an object). According to the spec for indexed source maps, they
		 * have the following attributes:
		 *
		 *   - version: Which version of the source map spec this map is following.
		 *   - file: Optional. The generated file this source map is associated with.
		 *   - sections: A list of section definitions.
		 *
		 * Each value under the "sections" field has two fields:
		 *   - offset: The offset into the original specified at which this section
		 *       begins to apply, defined as an object with a "line" and "column"
		 *       field.
		 *   - map: A source map definition. This source map could also be indexed,
		 *       but doesn't have to be.
		 *
		 * Instead of the "map" field, it's also possible to have a "url" field
		 * specifying a URL to retrieve a source map from, but that's currently
		 * unsupported.
		 *
		 * Here's an example source map, taken from the source map spec[0], but
		 * modified to omit a section which uses the "url" field.
		 *
		 *  {
		 *    version : 3,
		 *    file: "app.js",
		 *    sections: [{
		 *      offset: {line:100, column:10},
		 *      map: {
		 *        version : 3,
		 *        file: "section.js",
		 *        sources: ["foo.js", "bar.js"],
		 *        names: ["src", "maps", "are", "fun"],
		 *        mappings: "AAAA,E;;ABCDE;"
		 *      }
		 *    }],
		 *  }
		 *
		 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
		 */
		function IndexedSourceMapConsumer(aSourceMap) {
		  var sourceMap = aSourceMap;
		  if (typeof aSourceMap === 'string') {
		    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
		  }
	
		  var version = util.getArg(sourceMap, 'version');
		  var sections = util.getArg(sourceMap, 'sections');
	
		  if (version != this._version) {
		    throw new Error('Unsupported version: ' + version);
		  }
	
		  this._sources = new ArraySet();
		  this._names = new ArraySet();
	
		  var lastOffset = {
		    line: -1,
		    column: 0
		  };
		  this._sections = sections.map(function (s) {
		    if (s.url) {
		      // The url field will require support for asynchronicity.
		      // See https://github.com/mozilla/source-map/issues/16
		      throw new Error('Support for url field in sections not implemented.');
		    }
		    var offset = util.getArg(s, 'offset');
		    var offsetLine = util.getArg(offset, 'line');
		    var offsetColumn = util.getArg(offset, 'column');
	
		    if (offsetLine < lastOffset.line ||
		        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
		      throw new Error('Section offsets must be ordered and non-overlapping.');
		    }
		    lastOffset = offset;
	
		    return {
		      generatedOffset: {
		        // The offset fields are 0-based, but we use 1-based indices when
		        // encoding/decoding from VLQ.
		        generatedLine: offsetLine + 1,
		        generatedColumn: offsetColumn + 1
		      },
		      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
		    }
		  });
		}
	
		IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
		IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
	
		/**
		 * The version of the source mapping spec that we are consuming.
		 */
		IndexedSourceMapConsumer.prototype._version = 3;
	
		/**
		 * The list of original sources.
		 */
		Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
		  get: function () {
		    var sources = [];
		    for (var i = 0; i < this._sections.length; i++) {
		      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
		        sources.push(this._sections[i].consumer.sources[j]);
		      }
		    }
		    return sources;
		  }
		});
	
		/**
		 * Returns the original source, line, and column information for the generated
		 * source's line and column positions provided. The only argument is an object
		 * with the following properties:
		 *
		 *   - line: The line number in the generated source.
		 *   - column: The column number in the generated source.
		 *
		 * and an object is returned with the following properties:
		 *
		 *   - source: The original source file, or null.
		 *   - line: The line number in the original source, or null.
		 *   - column: The column number in the original source, or null.
		 *   - name: The original identifier, or null.
		 */
		IndexedSourceMapConsumer.prototype.originalPositionFor =
		  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
		    var needle = {
		      generatedLine: util.getArg(aArgs, 'line'),
		      generatedColumn: util.getArg(aArgs, 'column')
		    };
	
		    // Find the section containing the generated position we're trying to map
		    // to an original position.
		    var sectionIndex = binarySearch.search(needle, this._sections,
		      function(needle, section) {
		        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
		        if (cmp) {
		          return cmp;
		        }
	
		        return (needle.generatedColumn -
		                section.generatedOffset.generatedColumn);
		      });
		    var section = this._sections[sectionIndex];
	
		    if (!section) {
		      return {
		        source: null,
		        line: null,
		        column: null,
		        name: null
		      };
		    }
	
		    return section.consumer.originalPositionFor({
		      line: needle.generatedLine -
		        (section.generatedOffset.generatedLine - 1),
		      column: needle.generatedColumn -
		        (section.generatedOffset.generatedLine === needle.generatedLine
		         ? section.generatedOffset.generatedColumn - 1
		         : 0),
		      bias: aArgs.bias
		    });
		  };
	
		/**
		 * Return true if we have the source content for every source in the source
		 * map, false otherwise.
		 */
		IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
		  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
		    return this._sections.every(function (s) {
		      return s.consumer.hasContentsOfAllSources();
		    });
		  };
	
		/**
		 * Returns the original source content. The only argument is the url of the
		 * original source file. Returns null if no original source content is
		 * available.
		 */
		IndexedSourceMapConsumer.prototype.sourceContentFor =
		  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
		    for (var i = 0; i < this._sections.length; i++) {
		      var section = this._sections[i];
	
		      var content = section.consumer.sourceContentFor(aSource, true);
		      if (content) {
		        return content;
		      }
		    }
		    if (nullOnMissing) {
		      return null;
		    }
		    else {
		      throw new Error('"' + aSource + '" is not in the SourceMap.');
		    }
		  };
	
		/**
		 * Returns the generated line and column information for the original source,
		 * line, and column positions provided. The only argument is an object with
		 * the following properties:
		 *
		 *   - source: The filename of the original source.
		 *   - line: The line number in the original source.
		 *   - column: The column number in the original source.
		 *
		 * and an object is returned with the following properties:
		 *
		 *   - line: The line number in the generated source, or null.
		 *   - column: The column number in the generated source, or null.
		 */
		IndexedSourceMapConsumer.prototype.generatedPositionFor =
		  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
		    for (var i = 0; i < this._sections.length; i++) {
		      var section = this._sections[i];
	
		      // Only consider this section if the requested source is in the list of
		      // sources of the consumer.
		      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
		        continue;
		      }
		      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
		      if (generatedPosition) {
		        var ret = {
		          line: generatedPosition.line +
		            (section.generatedOffset.generatedLine - 1),
		          column: generatedPosition.column +
		            (section.generatedOffset.generatedLine === generatedPosition.line
		             ? section.generatedOffset.generatedColumn - 1
		             : 0)
		        };
		        return ret;
		      }
		    }
	
		    return {
		      line: null,
		      column: null
		    };
		  };
	
		/**
		 * Parse the mappings in a string in to a data structure which we can easily
		 * query (the ordered arrays in the `this.__generatedMappings` and
		 * `this.__originalMappings` properties).
		 */
		IndexedSourceMapConsumer.prototype._parseMappings =
		  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
		    this.__generatedMappings = [];
		    this.__originalMappings = [];
		    for (var i = 0; i < this._sections.length; i++) {
		      var section = this._sections[i];
		      var sectionMappings = section.consumer._generatedMappings;
		      for (var j = 0; j < sectionMappings.length; j++) {
		        var mapping = sectionMappings[j];
	
		        var source = section.consumer._sources.at(mapping.source);
		        if (section.consumer.sourceRoot !== null) {
		          source = util.join(section.consumer.sourceRoot, source);
		        }
		        this._sources.add(source);
		        source = this._sources.indexOf(source);
	
		        var name = section.consumer._names.at(mapping.name);
		        this._names.add(name);
		        name = this._names.indexOf(name);
	
		        // The mappings coming from the consumer for the section have
		        // generated positions relative to the start of the section, so we
		        // need to offset them to be relative to the start of the concatenated
		        // generated file.
		        var adjustedMapping = {
		          source: source,
		          generatedLine: mapping.generatedLine +
		            (section.generatedOffset.generatedLine - 1),
		          generatedColumn: mapping.generatedColumn +
		            (section.generatedOffset.generatedLine === mapping.generatedLine
		            ? section.generatedOffset.generatedColumn - 1
		            : 0),
		          originalLine: mapping.originalLine,
		          originalColumn: mapping.originalColumn,
		          name: name
		        };
	
		        this.__generatedMappings.push(adjustedMapping);
		        if (typeof adjustedMapping.originalLine === 'number') {
		          this.__originalMappings.push(adjustedMapping);
		        }
		      }
		    }
	
		    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
		    quickSort(this.__originalMappings, util.compareByOriginalPositions);
		  };
	
		exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		/* -*- Mode: js; js-indent-level: 2; -*- */
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */
	
		/**
		 * This is a helper function for getting values from parameter/options
		 * objects.
		 *
		 * @param args The object we are extracting values from
		 * @param name The name of the property we are getting.
		 * @param defaultValue An optional value to return if the property is missing
		 * from the object. If this is not specified and the property is missing, an
		 * error will be thrown.
		 */
		function getArg(aArgs, aName, aDefaultValue) {
		  if (aName in aArgs) {
		    return aArgs[aName];
		  } else if (arguments.length === 3) {
		    return aDefaultValue;
		  } else {
		    throw new Error('"' + aName + '" is a required argument.');
		  }
		}
		exports.getArg = getArg;
	
		var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
		var dataUrlRegexp = /^data:.+\,.+$/;
	
		function urlParse(aUrl) {
		  var match = aUrl.match(urlRegexp);
		  if (!match) {
		    return null;
		  }
		  return {
		    scheme: match[1],
		    auth: match[2],
		    host: match[3],
		    port: match[4],
		    path: match[5]
		  };
		}
		exports.urlParse = urlParse;
	
		function urlGenerate(aParsedUrl) {
		  var url = '';
		  if (aParsedUrl.scheme) {
		    url += aParsedUrl.scheme + ':';
		  }
		  url += '//';
		  if (aParsedUrl.auth) {
		    url += aParsedUrl.auth + '@';
		  }
		  if (aParsedUrl.host) {
		    url += aParsedUrl.host;
		  }
		  if (aParsedUrl.port) {
		    url += ":" + aParsedUrl.port
		  }
		  if (aParsedUrl.path) {
		    url += aParsedUrl.path;
		  }
		  return url;
		}
		exports.urlGenerate = urlGenerate;
	
		/**
		 * Normalizes a path, or the path portion of a URL:
		 *
		 * - Replaces consecutive slashes with one slash.
		 * - Removes unnecessary '.' parts.
		 * - Removes unnecessary '<dir>/..' parts.
		 *
		 * Based on code in the Node.js 'path' core module.
		 *
		 * @param aPath The path or url to normalize.
		 */
		function normalize(aPath) {
		  var path = aPath;
		  var url = urlParse(aPath);
		  if (url) {
		    if (!url.path) {
		      return aPath;
		    }
		    path = url.path;
		  }
		  var isAbsolute = exports.isAbsolute(path);
	
		  var parts = path.split(/\/+/);
		  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
		    part = parts[i];
		    if (part === '.') {
		      parts.splice(i, 1);
		    } else if (part === '..') {
		      up++;
		    } else if (up > 0) {
		      if (part === '') {
		        // The first part is blank if the path is absolute. Trying to go
		        // above the root is a no-op. Therefore we can remove all '..' parts
		        // directly after the root.
		        parts.splice(i + 1, up);
		        up = 0;
		      } else {
		        parts.splice(i, 2);
		        up--;
		      }
		    }
		  }
		  path = parts.join('/');
	
		  if (path === '') {
		    path = isAbsolute ? '/' : '.';
		  }
	
		  if (url) {
		    url.path = path;
		    return urlGenerate(url);
		  }
		  return path;
		}
		exports.normalize = normalize;
	
		/**
		 * Joins two paths/URLs.
		 *
		 * @param aRoot The root path or URL.
		 * @param aPath The path or URL to be joined with the root.
		 *
		 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
		 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
		 *   first.
		 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
		 *   is updated with the result and aRoot is returned. Otherwise the result
		 *   is returned.
		 *   - If aPath is absolute, the result is aPath.
		 *   - Otherwise the two paths are joined with a slash.
		 * - Joining for example 'http://' and 'www.example.com' is also supported.
		 */
		function join(aRoot, aPath) {
		  if (aRoot === "") {
		    aRoot = ".";
		  }
		  if (aPath === "") {
		    aPath = ".";
		  }
		  var aPathUrl = urlParse(aPath);
		  var aRootUrl = urlParse(aRoot);
		  if (aRootUrl) {
		    aRoot = aRootUrl.path || '/';
		  }
	
		  // `join(foo, '//www.example.org')`
		  if (aPathUrl && !aPathUrl.scheme) {
		    if (aRootUrl) {
		      aPathUrl.scheme = aRootUrl.scheme;
		    }
		    return urlGenerate(aPathUrl);
		  }
	
		  if (aPathUrl || aPath.match(dataUrlRegexp)) {
		    return aPath;
		  }
	
		  // `join('http://', 'www.example.com')`
		  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
		    aRootUrl.host = aPath;
		    return urlGenerate(aRootUrl);
		  }
	
		  var joined = aPath.charAt(0) === '/'
		    ? aPath
		    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);
	
		  if (aRootUrl) {
		    aRootUrl.path = joined;
		    return urlGenerate(aRootUrl);
		  }
		  return joined;
		}
		exports.join = join;
	
		exports.isAbsolute = function (aPath) {
		  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
		};
	
		/**
		 * Make a path relative to a URL or another path.
		 *
		 * @param aRoot The root path or URL.
		 * @param aPath The path or URL to be made relative to aRoot.
		 */
		function relative(aRoot, aPath) {
		  if (aRoot === "") {
		    aRoot = ".";
		  }
	
		  aRoot = aRoot.replace(/\/$/, '');
	
		  // It is possible for the path to be above the root. In this case, simply
		  // checking whether the root is a prefix of the path won't work. Instead, we
		  // need to remove components from the root one by one, until either we find
		  // a prefix that fits, or we run out of components to remove.
		  var level = 0;
		  while (aPath.indexOf(aRoot + '/') !== 0) {
		    var index = aRoot.lastIndexOf("/");
		    if (index < 0) {
		      return aPath;
		    }
	
		    // If the only part of the root that is left is the scheme (i.e. http://,
		    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
		    // have exhausted all components, so the path is not relative to the root.
		    aRoot = aRoot.slice(0, index);
		    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
		      return aPath;
		    }
	
		    ++level;
		  }
	
		  // Make sure we add a "../" for each component we removed from the root.
		  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
		}
		exports.relative = relative;
	
		var supportsNullProto = (function () {
		  var obj = Object.create(null);
		  return !('__proto__' in obj);
		}());
	
		function identity (s) {
		  return s;
		}
	
		/**
		 * Because behavior goes wacky when you set `__proto__` on objects, we
		 * have to prefix all the strings in our set with an arbitrary character.
		 *
		 * See https://github.com/mozilla/source-map/pull/31 and
		 * https://github.com/mozilla/source-map/issues/30
		 *
		 * @param String aStr
		 */
		function toSetString(aStr) {
		  if (isProtoString(aStr)) {
		    return '$' + aStr;
		  }
	
		  return aStr;
		}
		exports.toSetString = supportsNullProto ? identity : toSetString;
	
		function fromSetString(aStr) {
		  if (isProtoString(aStr)) {
		    return aStr.slice(1);
		  }
	
		  return aStr;
		}
		exports.fromSetString = supportsNullProto ? identity : fromSetString;
	
		function isProtoString(s) {
		  if (!s) {
		    return false;
		  }
	
		  var length = s.length;
	
		  if (length < 9 /* "__proto__".length */) {
		    return false;
		  }
	
		  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
		      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
		      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
		      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
		      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
		      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
		      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
		      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
		      s.charCodeAt(length - 9) !== 95  /* '_' */) {
		    return false;
		  }
	
		  for (var i = length - 10; i >= 0; i--) {
		    if (s.charCodeAt(i) !== 36 /* '$' */) {
		      return false;
		    }
		  }
	
		  return true;
		}
	
		/**
		 * Comparator between two mappings where the original positions are compared.
		 *
		 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
		 * mappings with the same original source/line/column, but different generated
		 * line and column the same. Useful when searching for a mapping with a
		 * stubbed out mapping.
		 */
		function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
		  var cmp = mappingA.source - mappingB.source;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.originalLine - mappingB.originalLine;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.originalColumn - mappingB.originalColumn;
		  if (cmp !== 0 || onlyCompareOriginal) {
		    return cmp;
		  }
	
		  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.generatedLine - mappingB.generatedLine;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  return mappingA.name - mappingB.name;
		}
		exports.compareByOriginalPositions = compareByOriginalPositions;
	
		/**
		 * Comparator between two mappings with deflated source and name indices where
		 * the generated positions are compared.
		 *
		 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
		 * mappings with the same generated line and column, but different
		 * source/name/original line and column the same. Useful when searching for a
		 * mapping with a stubbed out mapping.
		 */
		function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
		  var cmp = mappingA.generatedLine - mappingB.generatedLine;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
		  if (cmp !== 0 || onlyCompareGenerated) {
		    return cmp;
		  }
	
		  cmp = mappingA.source - mappingB.source;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.originalLine - mappingB.originalLine;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.originalColumn - mappingB.originalColumn;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  return mappingA.name - mappingB.name;
		}
		exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
	
		function strcmp(aStr1, aStr2) {
		  if (aStr1 === aStr2) {
		    return 0;
		  }
	
		  if (aStr1 > aStr2) {
		    return 1;
		  }
	
		  return -1;
		}
	
		/**
		 * Comparator between two mappings with inflated source and name strings where
		 * the generated positions are compared.
		 */
		function compareByGeneratedPositionsInflated(mappingA, mappingB) {
		  var cmp = mappingA.generatedLine - mappingB.generatedLine;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = strcmp(mappingA.source, mappingB.source);
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.originalLine - mappingB.originalLine;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  cmp = mappingA.originalColumn - mappingB.originalColumn;
		  if (cmp !== 0) {
		    return cmp;
		  }
	
		  return strcmp(mappingA.name, mappingB.name);
		}
		exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		/* -*- Mode: js; js-indent-level: 2; -*- */
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */
	
		exports.GREATEST_LOWER_BOUND = 1;
		exports.LEAST_UPPER_BOUND = 2;
	
		/**
		 * Recursive implementation of binary search.
		 *
		 * @param aLow Indices here and lower do not contain the needle.
		 * @param aHigh Indices here and higher do not contain the needle.
		 * @param aNeedle The element being searched for.
		 * @param aHaystack The non-empty array being searched.
		 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
		 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
		 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
		 *     closest element that is smaller than or greater than the one we are
		 *     searching for, respectively, if the exact element cannot be found.
		 */
		function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
		  // This function terminates when one of the following is true:
		  //
		  //   1. We find the exact element we are looking for.
		  //
		  //   2. We did not find the exact element, but we can return the index of
		  //      the next-closest element.
		  //
		  //   3. We did not find the exact element, and there is no next-closest
		  //      element than the one we are searching for, so we return -1.
		  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
		  var cmp = aCompare(aNeedle, aHaystack[mid], true);
		  if (cmp === 0) {
		    // Found the element we are looking for.
		    return mid;
		  }
		  else if (cmp > 0) {
		    // Our needle is greater than aHaystack[mid].
		    if (aHigh - mid > 1) {
		      // The element is in the upper half.
		      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
		    }
	
		    // The exact needle element was not found in this haystack. Determine if
		    // we are in termination case (3) or (2) and return the appropriate thing.
		    if (aBias == exports.LEAST_UPPER_BOUND) {
		      return aHigh < aHaystack.length ? aHigh : -1;
		    } else {
		      return mid;
		    }
		  }
		  else {
		    // Our needle is less than aHaystack[mid].
		    if (mid - aLow > 1) {
		      // The element is in the lower half.
		      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
		    }
	
		    // we are in termination case (3) or (2) and return the appropriate thing.
		    if (aBias == exports.LEAST_UPPER_BOUND) {
		      return mid;
		    } else {
		      return aLow < 0 ? -1 : aLow;
		    }
		  }
		}
	
		/**
		 * This is an implementation of binary search which will always try and return
		 * the index of the closest element if there is no exact hit. This is because
		 * mappings between original and generated line/col pairs are single points,
		 * and there is an implicit region between each of them, so a miss just means
		 * that you aren't on the very start of a region.
		 *
		 * @param aNeedle The element you are looking for.
		 * @param aHaystack The array that is being searched.
		 * @param aCompare A function which takes the needle and an element in the
		 *     array and returns -1, 0, or 1 depending on whether the needle is less
		 *     than, equal to, or greater than the element, respectively.
		 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
		 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
		 *     closest element that is smaller than or greater than the one we are
		 *     searching for, respectively, if the exact element cannot be found.
		 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
		 */
		exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
		  if (aHaystack.length === 0) {
		    return -1;
		  }
	
		  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
		                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
		  if (index < 0) {
		    return -1;
		  }
	
		  // We have found either the exact element, or the next-closest element than
		  // the one we are searching for. However, there may be more than one such
		  // element. Make sure we always return the smallest of these.
		  while (index - 1 >= 0) {
		    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
		      break;
		    }
		    --index;
		  }
	
		  return index;
		};
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* -*- Mode: js; js-indent-level: 2; -*- */
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */
	
		var util = __webpack_require__(2);
		var has = Object.prototype.hasOwnProperty;
	
		/**
		 * A data structure which is a combination of an array and a set. Adding a new
		 * member is O(1), testing for membership is O(1), and finding the index of an
		 * element is O(1). Removing elements from the set is not supported. Only
		 * strings are supported for membership.
		 */
		function ArraySet() {
		  this._array = [];
		  this._set = Object.create(null);
		}
	
		/**
		 * Static method for creating ArraySet instances from an existing array.
		 */
		ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
		  var set = new ArraySet();
		  for (var i = 0, len = aArray.length; i < len; i++) {
		    set.add(aArray[i], aAllowDuplicates);
		  }
		  return set;
		};
	
		/**
		 * Return how many unique items are in this ArraySet. If duplicates have been
		 * added, than those do not count towards the size.
		 *
		 * @returns Number
		 */
		ArraySet.prototype.size = function ArraySet_size() {
		  return Object.getOwnPropertyNames(this._set).length;
		};
	
		/**
		 * Add the given string to this set.
		 *
		 * @param String aStr
		 */
		ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
		  var sStr = util.toSetString(aStr);
		  var isDuplicate = has.call(this._set, sStr);
		  var idx = this._array.length;
		  if (!isDuplicate || aAllowDuplicates) {
		    this._array.push(aStr);
		  }
		  if (!isDuplicate) {
		    this._set[sStr] = idx;
		  }
		};
	
		/**
		 * Is the given string a member of this set?
		 *
		 * @param String aStr
		 */
		ArraySet.prototype.has = function ArraySet_has(aStr) {
		  var sStr = util.toSetString(aStr);
		  return has.call(this._set, sStr);
		};
	
		/**
		 * What is the index of the given string in the array?
		 *
		 * @param String aStr
		 */
		ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
		  var sStr = util.toSetString(aStr);
		  if (has.call(this._set, sStr)) {
		    return this._set[sStr];
		  }
		  throw new Error('"' + aStr + '" is not in the set.');
		};
	
		/**
		 * What is the element at the given index?
		 *
		 * @param Number aIdx
		 */
		ArraySet.prototype.at = function ArraySet_at(aIdx) {
		  if (aIdx >= 0 && aIdx < this._array.length) {
		    return this._array[aIdx];
		  }
		  throw new Error('No element indexed by ' + aIdx);
		};
	
		/**
		 * Returns the array representation of this set (which has the proper indices
		 * indicated by indexOf). Note that this is a copy of the internal array used
		 * for storing the members so that no one can mess with internal state.
		 */
		ArraySet.prototype.toArray = function ArraySet_toArray() {
		  return this._array.slice();
		};
	
		exports.ArraySet = ArraySet;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* -*- Mode: js; js-indent-level: 2; -*- */
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 *
		 * Based on the Base 64 VLQ implementation in Closure Compiler:
		 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
		 *
		 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
		 * Redistribution and use in source and binary forms, with or without
		 * modification, are permitted provided that the following conditions are
		 * met:
		 *
		 *  * Redistributions of source code must retain the above copyright
		 *    notice, this list of conditions and the following disclaimer.
		 *  * Redistributions in binary form must reproduce the above
		 *    copyright notice, this list of conditions and the following
		 *    disclaimer in the documentation and/or other materials provided
		 *    with the distribution.
		 *  * Neither the name of Google Inc. nor the names of its
		 *    contributors may be used to endorse or promote products derived
		 *    from this software without specific prior written permission.
		 *
		 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
		 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
		 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
		 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
		 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
		 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
		 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
		 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
		 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		 */
	
		var base64 = __webpack_require__(6);
	
		// A single base 64 digit can contain 6 bits of data. For the base 64 variable
		// length quantities we use in the source map spec, the first bit is the sign,
		// the next four bits are the actual value, and the 6th bit is the
		// continuation bit. The continuation bit tells us whether there are more
		// digits in this value following this digit.
		//
		//   Continuation
		//   |    Sign
		//   |    |
		//   V    V
		//   101011
	
		var VLQ_BASE_SHIFT = 5;
	
		// binary: 100000
		var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
	
		// binary: 011111
		var VLQ_BASE_MASK = VLQ_BASE - 1;
	
		// binary: 100000
		var VLQ_CONTINUATION_BIT = VLQ_BASE;
	
		/**
		 * Converts from a two-complement value to a value where the sign bit is
		 * placed in the least significant bit.  For example, as decimals:
		 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
		 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
		 */
		function toVLQSigned(aValue) {
		  return aValue < 0
		    ? ((-aValue) << 1) + 1
		    : (aValue << 1) + 0;
		}
	
		/**
		 * Converts to a two-complement value from a value where the sign bit is
		 * placed in the least significant bit.  For example, as decimals:
		 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
		 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
		 */
		function fromVLQSigned(aValue) {
		  var isNegative = (aValue & 1) === 1;
		  var shifted = aValue >> 1;
		  return isNegative
		    ? -shifted
		    : shifted;
		}
	
		/**
		 * Returns the base 64 VLQ encoded value.
		 */
		exports.encode = function base64VLQ_encode(aValue) {
		  var encoded = "";
		  var digit;
	
		  var vlq = toVLQSigned(aValue);
	
		  do {
		    digit = vlq & VLQ_BASE_MASK;
		    vlq >>>= VLQ_BASE_SHIFT;
		    if (vlq > 0) {
		      // There are still more digits in this value, so we must make sure the
		      // continuation bit is marked.
		      digit |= VLQ_CONTINUATION_BIT;
		    }
		    encoded += base64.encode(digit);
		  } while (vlq > 0);
	
		  return encoded;
		};
	
		/**
		 * Decodes the next base 64 VLQ value from the given string and returns the
		 * value and the rest of the string via the out parameter.
		 */
		exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
		  var strLen = aStr.length;
		  var result = 0;
		  var shift = 0;
		  var continuation, digit;
	
		  do {
		    if (aIndex >= strLen) {
		      throw new Error("Expected more digits in base 64 VLQ value.");
		    }
	
		    digit = base64.decode(aStr.charCodeAt(aIndex++));
		    if (digit === -1) {
		      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
		    }
	
		    continuation = !!(digit & VLQ_CONTINUATION_BIT);
		    digit &= VLQ_BASE_MASK;
		    result = result + (digit << shift);
		    shift += VLQ_BASE_SHIFT;
		  } while (continuation);
	
		  aOutParam.value = fromVLQSigned(result);
		  aOutParam.rest = aIndex;
		};
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		/* -*- Mode: js; js-indent-level: 2; -*- */
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */
	
		var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
	
		/**
		 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
		 */
		exports.encode = function (number) {
		  if (0 <= number && number < intToCharMap.length) {
		    return intToCharMap[number];
		  }
		  throw new TypeError("Must be between 0 and 63: " + number);
		};
	
		/**
		 * Decode a single base 64 character code digit to an integer. Returns -1 on
		 * failure.
		 */
		exports.decode = function (charCode) {
		  var bigA = 65;     // 'A'
		  var bigZ = 90;     // 'Z'
	
		  var littleA = 97;  // 'a'
		  var littleZ = 122; // 'z'
	
		  var zero = 48;     // '0'
		  var nine = 57;     // '9'
	
		  var plus = 43;     // '+'
		  var slash = 47;    // '/'
	
		  var littleOffset = 26;
		  var numberOffset = 52;
	
		  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
		  if (bigA <= charCode && charCode <= bigZ) {
		    return (charCode - bigA);
		  }
	
		  // 26 - 51: abcdefghijklmnopqrstuvwxyz
		  if (littleA <= charCode && charCode <= littleZ) {
		    return (charCode - littleA + littleOffset);
		  }
	
		  // 52 - 61: 0123456789
		  if (zero <= charCode && charCode <= nine) {
		    return (charCode - zero + numberOffset);
		  }
	
		  // 62: +
		  if (charCode == plus) {
		    return 62;
		  }
	
		  // 63: /
		  if (charCode == slash) {
		    return 63;
		  }
	
		  // Invalid base64 digit.
		  return -1;
		};
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		/* -*- Mode: js; js-indent-level: 2; -*- */
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */
	
		// It turns out that some (most?) JavaScript engines don't self-host
		// `Array.prototype.sort`. This makes sense because C++ will likely remain
		// faster than JS when doing raw CPU-intensive sorting. However, when using a
		// custom comparator function, calling back and forth between the VM's C++ and
		// JIT'd JS is rather slow *and* loses JIT type information, resulting in
		// worse generated code for the comparator function than would be optimal. In
		// fact, when sorting with a comparator, these costs outweigh the benefits of
		// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
		// a ~3500ms mean speed-up in `bench/bench.html`.
	
		/**
		 * Swap the elements indexed by `x` and `y` in the array `ary`.
		 *
		 * @param {Array} ary
		 *        The array.
		 * @param {Number} x
		 *        The index of the first item.
		 * @param {Number} y
		 *        The index of the second item.
		 */
		function swap(ary, x, y) {
		  var temp = ary[x];
		  ary[x] = ary[y];
		  ary[y] = temp;
		}
	
		/**
		 * Returns a random integer within the range `low .. high` inclusive.
		 *
		 * @param {Number} low
		 *        The lower bound on the range.
		 * @param {Number} high
		 *        The upper bound on the range.
		 */
		function randomIntInRange(low, high) {
		  return Math.round(low + (Math.random() * (high - low)));
		}
	
		/**
		 * The Quick Sort algorithm.
		 *
		 * @param {Array} ary
		 *        An array to sort.
		 * @param {function} comparator
		 *        Function to use to compare two items.
		 * @param {Number} p
		 *        Start index of the array
		 * @param {Number} r
		 *        End index of the array
		 */
		function doQuickSort(ary, comparator, p, r) {
		  // If our lower bound is less than our upper bound, we (1) partition the
		  // array into two pieces and (2) recurse on each half. If it is not, this is
		  // the empty array and our base case.
	
		  if (p < r) {
		    // (1) Partitioning.
		    //
		    // The partitioning chooses a pivot between `p` and `r` and moves all
		    // elements that are less than or equal to the pivot to the before it, and
		    // all the elements that are greater than it after it. The effect is that
		    // once partition is done, the pivot is in the exact place it will be when
		    // the array is put in sorted order, and it will not need to be moved
		    // again. This runs in O(n) time.
	
		    // Always choose a random pivot so that an input array which is reverse
		    // sorted does not cause O(n^2) running time.
		    var pivotIndex = randomIntInRange(p, r);
		    var i = p - 1;
	
		    swap(ary, pivotIndex, r);
		    var pivot = ary[r];
	
		    // Immediately after `j` is incremented in this loop, the following hold
		    // true:
		    //
		    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
		    //
		    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
		    for (var j = p; j < r; j++) {
		      if (comparator(ary[j], pivot) <= 0) {
		        i += 1;
		        swap(ary, i, j);
		      }
		    }
	
		    swap(ary, i + 1, j);
		    var q = i + 1;
	
		    // (2) Recurse on each half.
	
		    doQuickSort(ary, comparator, p, q - 1);
		    doQuickSort(ary, comparator, q + 1, r);
		  }
		}
	
		/**
		 * Sort the given array in-place with the given comparator function.
		 *
		 * @param {Array} ary
		 *        An array to sort.
		 * @param {function} comparator
		 *        Function to use to compare two items.
		 */
		exports.quickSort = function (ary, comparator) {
		  doQuickSort(ary, comparator, 0, ary.length - 1);
		};
	
	
	/***/ }
	/******/ ])
	});
	;

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(204);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactOnsenui = __webpack_require__(357);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'show',
	    value: function show() {
	      this.setState({
	        isOpen: true
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.setState({
	        isOpen: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactOnsenui.Splitter,
	        null,
	        _react2.default.createElement(
	          _reactOnsenui.SplitterSide,
	          {
	            side: 'left',
	            collapse: true,
	            isOpen: this.state.isOpen,
	            onClose: this.hide.bind(this),
	            swipeable: true },
	          _react2.default.createElement(
	            _reactOnsenui.Page,
	            null,
	            'Menu content'
	          )
	        ),
	        _react2.default.createElement(
	          _reactOnsenui.SplitterContent,
	          null,
	          _react2.default.createElement(
	            _reactOnsenui.Page,
	            null,
	            _react2.default.createElement(
	              _reactOnsenui.Button,
	              { onClick: this.show.bind(this) },
	              'Open'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	var _default = App;
	exports.default = _default;
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(App, 'App', '/project/src/App.jsx');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/project/src/App.jsx');
	})();

	;

/***/ },

/***/ 361:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 368:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3JlYWN0LWhvdC1sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3JlYWN0LWhvdC1sb2FkZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS90ZXJtaW5hbHVzZXIvLmNvcmRvdmEvfi9yZWFjdC1ob3QtbG9hZGVyL2xpYi9BcHBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3JlYWN0LWhvdC1sb2FkZXIvbGliL0FwcENvbnRhaW5lci5wcm9kLmpzIiwid2VicGFjazovLy8vaG9tZS90ZXJtaW5hbHVzZXIvLmNvcmRvdmEvfi9yZWFjdC1ob3QtbG9hZGVyL2xpYi9BcHBDb250YWluZXIuZGV2LmpzIiwid2VicGFjazovLy8vaG9tZS90ZXJtaW5hbHVzZXIvLmNvcmRvdmEvfi9yZWFjdC1kZWVwLWZvcmNlLXVwZGF0ZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3JlZGJveC1yZWFjdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3JlZGJveC1yZWFjdC9saWIvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L2Vycm9yLXN0YWNrLXBhcnNlci9lcnJvci1zdGFjay1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3N0YWNrZnJhbWUvc3RhY2tmcmFtZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvdGVybWluYWx1c2VyLy5jb3Jkb3ZhL34vcmVkYm94LXJlYWN0L2xpYi9saWIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3NvdXJjZW1hcHBlZC1zdGFja3RyYWNlL2Rpc3Qvc291cmNlbWFwcGVkLXN0YWNrdHJhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9vbnNlbnVpL2Nzcy1jb21wb25lbnRzLXNyYy9zcmMvb25zZW4tY3NzLWNvbXBvbmVudHMuY3NzIiwid2VicGFjazovLy8uL34vb25zZW51aS9jc3Mvb25zZW51aS5jc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsInJvb3RFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiTmV4dEFwcCIsImRlZmF1bHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaXNPcGVuIiwic2V0U3RhdGUiLCJoaWRlIiwiYmluZCIsInNob3ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQU1BOzs7Ozs7QUFKQTtBQUNBLG9CQUFBQSxDQUFRLEdBQVI7QUFDQSxvQkFBQUEsQ0FBUSxHQUFSOztBQUlBLEtBQU1DLGNBQWNDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEI7QUFDQUMsb0JBQVNDLE1BQVQsQ0FDRTtBQUFDLCtCQUFEO0FBQUE7QUFDRSxpQ0FBQyxhQUFEO0FBREYsRUFERixFQUlFSixXQUpGOztBQU9BLEtBQUksSUFBSixFQUFnQjtBQUNkSyxVQUFPQyxHQUFQLENBQVdDLE1BQVgsQ0FBa0IsR0FBbEIsRUFBMkIsWUFBTTtBQUMvQixTQUFNQyxVQUFVLG1CQUFBVCxDQUFRLEdBQVIsRUFBaUJVLE9BQWpDO0FBQ0FOLHdCQUFTQyxNQUFULENBQ0U7QUFBQyxtQ0FBRDtBQUFBO0FBQ0cscUNBQUMsT0FBRDtBQURILE1BREYsRUFJRUosV0FKRjtBQU1ELElBUkQ7QUFTRDs7Ozs7Ozs7aUNBbEJLQSxXOzs7Ozs7Ozs7O0FDWE4sMkM7Ozs7Ozs7QUNBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0gsaUtBQWdLLGVBQWU7QUFDL0s7QUFDQTs7QUFFQSw0Qzs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFOzs7Ozs7OztBQ05BOztBQUVBLGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRCwrQjs7Ozs7OztBQ3BDQTs7QUFFQSxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBOEQsZUFBZTtBQUM3RTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJIQUEwSCxJQUFJO0FBQzlIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSx1SEFBc0gsSUFBSSxTQUFTLG1CQUFtQixvQ0FBb0MsUUFBUTtBQUNsTTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCOzs7Ozs7O0FDckdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7O0FDckZBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUEscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRLG1DQUFrQyxpQ0FBaUMsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0seUNBQXlDLEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWEsRUFBRSwyQkFBMkIsMEJBQTBCLFlBQVksRUFBRSwyQ0FBMkMsOEJBQThCLEVBQUUsT0FBTyw2RUFBNkUsRUFBRSxHQUFHLEVBQUU7O0FBRXJwQixpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0EsOERBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQWtFLGdFQUFnRTtBQUNsSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQXlCLDZCQUE2QjtBQUN0RCxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsMkJBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQSxnQkFBZSwrQkFBK0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTLHNDQUFzQztBQUMvQztBQUNBO0FBQ0EsWUFBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0M7Ozs7Ozs7QUM1ZkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsNEJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLDRCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULDRCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsTUFBTTtBQUN6QixxQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7QUFDYixVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsRUFBQzs7Ozs7Ozs7O0FDdk5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBLDREQUEyRCxVQUFVO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7Ozs7Ozs7QUMxR0Q7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQzs7Ozs7OztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0QscUNBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQSxlQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBLGVBQWMsT0FBTztBQUNyQixlQUFjLFNBQVM7QUFDdkI7QUFDQSxlQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQWtCLGtCQUFrQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRUFBcUUsWUFBWSxHQUFHOztBQUVwRjtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLDZCQUE2QjtBQUMzQztBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWUsNkJBQTZCO0FBQzVDLGdCQUFlLDRDQUE0QztBQUMzRCxnQkFBZSw0Q0FBNEM7QUFDM0QsZ0JBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EscUJBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOzs7QUFHRixRQUFPO0FBQ1A7QUFDQTs7QUFFQSxrQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7O0FBRVo7QUFDQTtBQUNBLFNBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdEQUF1RCxZQUFZO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLHdDQUF3QztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdELG1CQUFtQixFQUFFO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixNQUFNO0FBQ3BDO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQiwyQkFBMkI7QUFDL0MsdUJBQXNCLCtDQUErQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLDJCQUEyQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsMkJBQTJCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBLHVCQUFzQiw0QkFBNEI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQSxrQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsUUFBTztBQUNQO0FBQ0E7O0FBRUEsa0JBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLFFBQU87QUFDUDtBQUNBOztBQUVBLGtCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLFFBQU87QUFDUDtBQUNBOztBQUVBLGtCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RDtBQUM1RCxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7OztBQUdBLFFBQU87QUFDUDtBQUNBOztBQUVBLGtCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixrQkFBaUI7O0FBRWpCLHFCQUFvQjtBQUNwQixzQkFBcUI7O0FBRXJCLGtCQUFpQjtBQUNqQixrQkFBaUI7O0FBRWpCLGtCQUFpQjtBQUNqQixtQkFBa0I7O0FBRWxCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQSxrQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksTUFBTTtBQUNsQjtBQUNBLGFBQVksT0FBTztBQUNuQjtBQUNBLGFBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE1BQU07QUFDbEI7QUFDQSxhQUFZLFNBQVM7QUFDckI7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE1BQU07QUFDbEI7QUFDQSxhQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEVBQUM7QUFDRCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNsMkVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztLQUVxQlUsRzs7O0FBQ25CLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMkdBQ1hBLEtBRFc7O0FBR2pCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFRO0FBREcsTUFBYjtBQUhpQjtBQU1sQjs7Ozs0QkFFTTtBQUNMLFlBQUtDLFFBQUwsQ0FBYztBQUNaRCxpQkFBUTtBQURJLFFBQWQ7QUFHRDs7OzRCQUVNO0FBQ0wsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELGlCQUFRO0FBREksUUFBZDtBQUdEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUMsK0JBQUQ7QUFBQTtBQUNFO0FBQUMscUNBQUQ7QUFBQTtBQUNFLG1CQUFLLE1BRFA7QUFFRSx1QkFBVSxJQUZaO0FBR0UscUJBQVEsS0FBS0QsS0FBTCxDQUFXQyxNQUhyQjtBQUlFLHNCQUFTLEtBQUtFLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FKWDtBQUtFLHdCQUFXLElBTGI7QUFNRTtBQUFDLCtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBTkYsVUFERjtBQVdFO0FBQUMsd0NBQUQ7QUFBQTtBQUNFO0FBQUMsK0JBQUQ7QUFBQTtBQUNFO0FBQUMsbUNBQUQ7QUFBQSxpQkFBUSxTQUFTLEtBQUtDLElBQUwsQ0FBVUQsSUFBVixDQUFlLElBQWYsQ0FBakI7QUFBQTtBQUFBO0FBREY7QUFERjtBQVhGLFFBREY7QUFtQkQ7Ozs7R0F6QzhCRSxnQkFBTUMsUzs7Z0JBQWxCVCxHOzs7Ozs7Ozs7aUNBQUFBLEc7Ozs7Ozs7Ozs7OztBQ0pyQiwwQzs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlYWN0LWhvdC1sb2FkZXIvcGF0Y2gnO1xuaW1wb3J0IHtBcHBDb250YWluZXJ9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG4vLyBPbnNlbiBVSSBTdHlsaW5nIGFuZCBJY29uc1xucmVxdWlyZSgnb25zZW51aS9jc3MtY29tcG9uZW50cy1zcmMvc3JjL29uc2VuLWNzcy1jb21wb25lbnRzLmNzcycpO1xucmVxdWlyZSgnb25zZW51aS9jc3Mvb25zZW51aS5jc3MnKTtcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwQ29udGFpbmVyPlxuICAgIDxBcHAgLz5cbiAgPC9BcHBDb250YWluZXI+LFxuICByb290RWxlbWVudFxuKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vQXBwJywgKCkgPT4ge1xuICAgIGNvbnN0IE5leHRBcHAgPSByZXF1aXJlKCcuL0FwcCcpLmRlZmF1bHQ7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgIDxOZXh0QXBwIC8+XG4gICAgICA8L0FwcENvbnRhaW5lcj4sXG4gICAgICByb290RWxlbWVudFxuICAgICk7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvaG9tZS90ZXJtaW5hbHVzZXIvLmNvcmRvdmEvfi9yZWFjdC1ob3QtbG9hZGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBcHBDb250YWluZXIgPSByZXF1aXJlKCcuL0FwcENvbnRhaW5lcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdhcm5BYm91dEluY29ycmVjdFVzYWdlKGFyZykge1xuICBpZiAodGhpcyAmJiB0aGlzLmNhbGxiYWNrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBIb3QgTG9hZGVyOiBUaGUgV2VicGFjayBsb2FkZXIgaXMgbm93IGV4cG9ydGVkIHNlcGFyYXRlbHkuICcgKyAnSWYgeW91IHVzZSBCYWJlbCwgd2UgcmVjb21tZW5kIHRoYXQgeW91IHJlbW92ZSBcInJlYWN0LWhvdC1sb2FkZXJcIiAnICsgJ2Zyb20gdGhlIFwibG9hZGVyc1wiIHNlY3Rpb24gb2YgeW91ciBXZWJwYWNrIGNvbmZpZ3VyYXRpb24gYWx0b2dldGhlciwgJyArICdhbmQgaW5zdGVhZCBhZGQgXCJyZWFjdC1ob3QtbG9hZGVyL2JhYmVsXCIgdG8gdGhlIFwicGx1Z2luc1wiIHNlY3Rpb24gJyArICdvZiB5b3VyIC5iYWJlbHJjIGZpbGUuICcgKyAnSWYgeW91IHByZWZlciBub3QgdG8gdXNlIEJhYmVsLCByZXBsYWNlIFwicmVhY3QtaG90LWxvYWRlclwiIG9yICcgKyAnXCJyZWFjdC1ob3RcIiB3aXRoIFwicmVhY3QtaG90LWxvYWRlci93ZWJwYWNrXCIgaW4gdGhlIFwibG9hZGVyc1wiIHNlY3Rpb24gJyArICdvZiB5b3VyIFdlYnBhY2sgY29uZmlndXJhdGlvbi4nKTtcbiAgfSBlbHNlIGlmIChhcmcgJiYgYXJnLnR5cGVzICYmIGFyZy50eXBlcy5JZlN0YXRlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgSG90IExvYWRlcjogVGhlIEJhYmVsIHBsdWdpbiBpcyBleHBvcnRlZCBzZXBhcmF0ZWx5LiAnICsgJ1JlcGxhY2UgXCJyZWFjdC1ob3QtbG9hZGVyXCIgd2l0aCBcInJlYWN0LWhvdC1sb2FkZXIvYmFiZWxcIiAnICsgJ2luIHRoZSBcInBsdWdpbnNcIiBzZWN0aW9uIG9mIHlvdXIgLmJhYmVscmMgZmlsZS4gJyArICdXaGlsZSB3ZSByZWNvbW1lbmQgdGhlIGFib3ZlLCBpZiB5b3UgcHJlZmVyIG5vdCB0byB1c2UgQmFiZWwsICcgKyAneW91IG1heSByZW1vdmUgXCJyZWFjdC1ob3QtbG9hZGVyXCIgZnJvbSB0aGUgXCJwbHVnaW5zXCIgc2VjdGlvbiBvZiAnICsgJ3lvdXIgLmJhYmVscmMgZmlsZSBhbHRvZ2V0aGVyLCBhbmQgaW5zdGVhZCBhZGQgJyArICdcInJlYWN0LWhvdC1sb2FkZXIvd2VicGFja1wiIHRvIHRoZSBcImxvYWRlcnNcIiBzZWN0aW9uIG9mIHlvdXIgV2VicGFjayAnICsgJ2NvbmZpZ3VyYXRpb24uJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBIb3QgTG9hZGVyIGRvZXMgbm90IGhhdmUgYSBkZWZhdWx0IGV4cG9ydC4gJyArICdJZiB5b3UgdXNlIHRoZSBpbXBvcnQgc3RhdGVtZW50LCBtYWtlIHN1cmUgdG8gaW5jbHVkZSB0aGUgJyArICdjdXJseSBicmFjZXM6IGltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ob3QtbG9hZGVyXCIuICcgKyAnSWYgeW91IHVzZSBDb21tb25KUywgbWFrZSBzdXJlIHRvIHJlYWQgdGhlIG5hbWVkIGV4cG9ydDogJyArICdyZXF1aXJlKFwicmVhY3QtaG90LWxvYWRlclwiKS5BcHBDb250YWluZXIuJyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLkFwcENvbnRhaW5lciA9IEFwcENvbnRhaW5lcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3JlYWN0LWhvdC1sb2FkZXIvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9BcHBDb250YWluZXIucHJvZCcpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL0FwcENvbnRhaW5lci5kZXYnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3JlYWN0LWhvdC1sb2FkZXIvbGliL0FwcENvbnRhaW5lci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50O1xuXG52YXIgQXBwQ29udGFpbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFwcENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQXBwQ29udGFpbmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHBDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihBcHBDb250YWluZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFwcENvbnRhaW5lciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5jb21wb25lbnQsIHRoaXMucHJvcHMucHJvcCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcHBDb250YWluZXI7XG59KENvbXBvbmVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwQ29udGFpbmVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL2hvbWUvdGVybWluYWx1c2VyLy5jb3Jkb3ZhL34vcmVhY3QtaG90LWxvYWRlci9saWIvQXBwQ29udGFpbmVyLnByb2QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGRlZXBGb3JjZVVwZGF0ZSA9IHJlcXVpcmUoJ3JlYWN0LWRlZXAtZm9yY2UtdXBkYXRlJyk7XG52YXIgUmVkYm94ID0gcmVxdWlyZSgncmVkYm94LXJlYWN0Jyk7XG52YXIgQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50O1xuXG52YXIgQXBwQ29udGFpbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFwcENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQXBwQ29udGFpbmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcENvbnRhaW5lcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwQ29udGFpbmVyKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgZXJyb3I6IG51bGwgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwQ29udGFpbmVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodHlwZW9mIF9fUkVBQ1RfSE9UX0xPQURFUl9fID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWFjdCBIb3QgTG9hZGVyOiBJdCBhcHBlYXJzIHRoYXQgXCJyZWFjdC1ob3QtbG9hZGVyL3BhdGNoXCIgJyArICdkaWQgbm90IHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGFwcCBzdGFydGVkLiBNYWtlIHN1cmUgdGhhdCBpdCAnICsgJ3J1bnMgYmVmb3JlIGFueSBvdGhlciBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHVzZSBXZWJwYWNrLCAnICsgJ3lvdSBjYW4gYWRkIFwicmVhY3QtaG90LWxvYWRlci9wYXRjaFwiIGFzIHRoZSB2ZXJ5IGZpcnN0IGl0ZW0gdG8gdGhlICcgKyAnXCJlbnRyeVwiIGFycmF5IGluIGl0cyBjb25maWcuIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gYWRkICcgKyAncmVxdWlyZShcInJlYWN0LWhvdC1sb2FkZXIvcGF0Y2hcIikgYXMgdGhlIHZlcnkgZmlyc3QgbGluZSAnICsgJ2luIHRoZSBhcHBsaWNhdGlvbiBjb2RlLCBiZWZvcmUgYW55IG90aGVyIGltcG9ydHMuJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAvLyBIb3QgcmVsb2FkIGlzIGhhcHBlbmluZy5cbiAgICAgIC8vIFJldHJ5IHJlbmRlcmluZyFcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfSk7XG4gICAgICAvLyBGb3JjZS11cGRhdGUgdGhlIHdob2xlIHRyZWUsIGluY2x1ZGluZ1xuICAgICAgLy8gY29tcG9uZW50cyB0aGF0IHJlZnVzZSB0byB1cGRhdGUuXG4gICAgICBkZWVwRm9yY2VVcGRhdGUodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGdvaW5nIHRvIGJlY29tZSBvZmZpY2lhbCBpbiBSZWFjdCAxNS54LlxuICAgIC8vIEluIDE1LjAsIGl0IG9ubHkgY2F0Y2hlcyBlcnJvcnMgb24gaW5pdGlhbCBtb3VudC5cbiAgICAvLyBMYXRlciBpdCB3aWxsIHdvcmsgZm9yIHVwZGF0ZXMgYXMgd2VsbDpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC82MDIwXG5cbiAgfSwge1xuICAgIGtleTogJ3Vuc3RhYmxlX2hhbmRsZUVycm9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdGFibGVfaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBlcnJvciA9IHRoaXMuc3RhdGUuZXJyb3I7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmVycm9yUmVwb3J0ZXIsIHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5jb21wb25lbnQsIHRoaXMucHJvcHMucHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFwcENvbnRhaW5lcjtcbn0oQ29tcG9uZW50KTtcblxuQXBwQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBmdW5jdGlvbiBjb21wb25lbnQocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQYXNzaW5nIFwiY29tcG9uZW50XCIgcHJvcCB0byA8QXBwQ29udGFpbmVyIC8+IGlzIGRlcHJlY2F0ZWQuICcgKyAnUmVwbGFjZSA8QXBwQ29udGFpbmVyIGNvbXBvbmVudD17QXBwfSAvPiB3aXRoIDxBcHBDb250YWluZXI+PEFwcCAvPjwvQXBwQ29udGFpbmVyPi4nKTtcbiAgICB9XG4gIH0sXG4gIHByb3BzOiBmdW5jdGlvbiBwcm9wcyhfcHJvcHMpIHtcbiAgICBpZiAoX3Byb3BzLnByb3BzKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQYXNzaW5nIFwicHJvcHNcIiBwcm9wIHRvIDxBcHBDb250YWluZXIgLz4gaXMgZGVwcmVjYXRlZC4gJyArICdSZXBsYWNlIDxBcHBDb250YWluZXIgY29tcG9uZW50PXtBcHB9IHByb3BzPXt7IG15UHJvcDogbXlWYWx1ZSB9fSAvPiB3aXRoIDxBcHBDb250YWluZXI+PEFwcCBteVByb3A9e215VmFsdWV9IC8+PC9BcHBDb250YWluZXI+LicpO1xuICAgIH1cbiAgfSxcbiAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHByb3BzKSB7XG4gICAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzLmNoaWxkcmVuKSAhPT0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIFwiY2hpbGRyZW5cIiBzdXBwbGllZCB0byBBcHBDb250YWluZXIuIEV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgd2l0aCB5b3VyIGFwcOKAmXMgcm9vdCBjb21wb25lbnQsIGUuZy4gPEFwcCAvPi4nKTtcbiAgICB9XG4gIH1cbn07XG5cbkFwcENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yUmVwb3J0ZXI6IFJlZGJveFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBDb250YWluZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvaG9tZS90ZXJtaW5hbHVzZXIvLmNvcmRvdmEvfi9yZWFjdC1ob3QtbG9hZGVyL2xpYi9BcHBDb250YWluZXIuZGV2LmpzXG4gKiogbW9kdWxlIGlkID0gMTk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb25zdGFudCB0byBpZGVudGlmeSBhIFJlYWN0IENvbXBvbmVudC4gSXQncyBiZWVuIGV4dHJhY3RlZCBmcm9tIFJlYWN0VHlwZU9mV29ya1xuLy8gKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL21hc3Rlci9zcmMvc2hhcmVkL1JlYWN0VHlwZU9mV29yay5qcyNMMjApXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBkZWVwRm9yY2VVcGRhdGU7XG52YXIgUmVhY3RDbGFzc0NvbXBvbmVudCA9IDI7XG5cbmZ1bmN0aW9uIHRyYXZlcnNlUmVuZGVyZWRDaGlsZHJlbihpbnRlcm5hbEluc3RhbmNlLCBjYWxsYmFjaywgYXJndW1lbnQpIHtcbiAgY2FsbGJhY2soaW50ZXJuYWxJbnN0YW5jZSwgYXJndW1lbnQpO1xuXG4gIGlmIChpbnRlcm5hbEluc3RhbmNlLl9yZW5kZXJlZENvbXBvbmVudCkge1xuICAgIHRyYXZlcnNlUmVuZGVyZWRDaGlsZHJlbihpbnRlcm5hbEluc3RhbmNlLl9yZW5kZXJlZENvbXBvbmVudCwgY2FsbGJhY2ssIGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW50ZXJuYWxJbnN0YW5jZS5fcmVuZGVyZWRDaGlsZHJlbikge1xuICAgICAgaWYgKGludGVybmFsSW5zdGFuY2UuX3JlbmRlcmVkQ2hpbGRyZW4uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0cmF2ZXJzZVJlbmRlcmVkQ2hpbGRyZW4oaW50ZXJuYWxJbnN0YW5jZS5fcmVuZGVyZWRDaGlsZHJlbltrZXldLCBjYWxsYmFjaywgYXJndW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRQZW5kaW5nRm9yY2VVcGRhdGUoaW50ZXJuYWxJbnN0YW5jZSkge1xuICBpZiAoaW50ZXJuYWxJbnN0YW5jZS5fcGVuZGluZ0ZvcmNlVXBkYXRlID09PSBmYWxzZSkge1xuICAgIGludGVybmFsSW5zdGFuY2UuX3BlbmRpbmdGb3JjZVVwZGF0ZSA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9yY2VVcGRhdGVJZlBlbmRpbmcoaW50ZXJuYWxJbnN0YW5jZSkge1xuICBpZiAoaW50ZXJuYWxJbnN0YW5jZS5fcGVuZGluZ0ZvcmNlVXBkYXRlID09PSB0cnVlKSB7XG4gICAgdmFyIHB1YmxpY0luc3RhbmNlID0gaW50ZXJuYWxJbnN0YW5jZS5faW5zdGFuY2U7XG4gICAgdmFyIHVwZGF0ZXIgPSBwdWJsaWNJbnN0YW5jZS51cGRhdGVyO1xuXG4gICAgaWYgKHR5cGVvZiBwdWJsaWNJbnN0YW5jZS5mb3JjZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHVibGljSW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZXIgJiYgdHlwZW9mIHVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB1cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZShwdWJsaWNJbnN0YW5jZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBGb3JjZVVwZGF0ZVN0YWNrKGluc3RhbmNlKSB7XG4gIHZhciBpbnRlcm5hbEluc3RhbmNlID0gaW5zdGFuY2UuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZTtcbiAgdHJhdmVyc2VSZW5kZXJlZENoaWxkcmVuKGludGVybmFsSW5zdGFuY2UsIHNldFBlbmRpbmdGb3JjZVVwZGF0ZSk7XG4gIHRyYXZlcnNlUmVuZGVyZWRDaGlsZHJlbihpbnRlcm5hbEluc3RhbmNlLCBmb3JjZVVwZGF0ZUlmUGVuZGluZyk7XG59XG5cbmZ1bmN0aW9uIGRlZXBGb3JjZVVwZGF0ZShpbnN0YW5jZSkge1xuICB2YXIgcm9vdCA9IGluc3RhbmNlLl9yZWFjdEludGVybmFsRmliZXIgfHwgaW5zdGFuY2UuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZTtcbiAgaWYgKHR5cGVvZiByb290LnRhZyAhPT0gJ251bWJlcicpIHtcbiAgICAvLyBUcmF2ZXJzZSBzdGFjay1iYXNlZCBSZWFjdCB0cmVlLlxuICAgIHJldHVybiBkZWVwRm9yY2VVcGRhdGVTdGFjayhpbnN0YW5jZSk7XG4gIH1cblxuICB2YXIgbm9kZSA9IHJvb3Q7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKG5vZGUudGFnID09PSBSZWFjdENsYXNzQ29tcG9uZW50KSB7XG4gICAgICB2YXIgcHVibGljSW5zdGFuY2UgPSBub2RlLnN0YXRlTm9kZTtcbiAgICAgIHZhciB1cGRhdGVyID0gcHVibGljSW5zdGFuY2UudXBkYXRlcjtcblxuICAgICAgaWYgKHR5cGVvZiBwdWJsaWNJbnN0YW5jZS5mb3JjZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwdWJsaWNJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmICh1cGRhdGVyICYmIHR5cGVvZiB1cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB1cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZShwdWJsaWNJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub2RlLmNoaWxkKSB7XG4gICAgICBub2RlLmNoaWxkWydyZXR1cm4nXSA9IG5vZGU7XG4gICAgICBub2RlID0gbm9kZS5jaGlsZDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gcm9vdCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgd2hpbGUgKCFub2RlLnNpYmxpbmcpIHtcbiAgICAgIGlmICghbm9kZVsncmV0dXJuJ10gfHwgbm9kZVsncmV0dXJuJ10gPT09IHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlWydyZXR1cm4nXTtcbiAgICB9XG4gICAgbm9kZS5zaWJsaW5nWydyZXR1cm4nXSA9IG5vZGVbJ3JldHVybiddO1xuICAgIG5vZGUgPSBub2RlLnNpYmxpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvaG9tZS90ZXJtaW5hbHVzZXIvLmNvcmRvdmEvfi9yZWFjdC1kZWVwLWZvcmNlLXVwZGF0ZS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuX19SZXdpcmVBUElfXyA9IGV4cG9ydHMuX19SZXNldERlcGVuZGVuY3lfXyA9IGV4cG9ydHMuX19zZXRfXyA9IGV4cG9ydHMuX19SZXdpcmVfXyA9IGV4cG9ydHMuX19HZXREZXBlbmRlbmN5X18gPSBleHBvcnRzLl9fZ2V0X18gPSBleHBvcnRzLlJlZEJveEVycm9yID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zdHlsZSA9IHJlcXVpcmUoJy4vc3R5bGUuanMnKTtcblxudmFyIF9zdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZSk7XG5cbnZhciBfZXJyb3JTdGFja1BhcnNlciA9IHJlcXVpcmUoJ2Vycm9yLXN0YWNrLXBhcnNlcicpO1xuXG52YXIgX2Vycm9yU3RhY2tQYXJzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXJyb3JTdGFja1BhcnNlcik7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX2xpYiA9IHJlcXVpcmUoJy4vbGliJyk7XG5cbnZhciBfc291cmNlbWFwcGVkU3RhY2t0cmFjZSA9IHJlcXVpcmUoJ3NvdXJjZW1hcHBlZC1zdGFja3RyYWNlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlZEJveEVycm9yID0gZXhwb3J0cy5SZWRCb3hFcnJvciA9IGZ1bmN0aW9uIChfZ2V0X18yKSB7XG4gIF9pbmhlcml0cyhSZWRCb3hFcnJvciwgX2dldF9fMik7XG5cbiAgZnVuY3Rpb24gUmVkQm94RXJyb3IocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVkQm94RXJyb3IpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlZEJveEVycm9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVkQm94RXJyb3IpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgbWFwcGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5tYXBPbkNvbnN0cnVjdGlvbihwcm9wcy5lcnJvcik7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLy8gU3RhdGUgaXMgdXNlZCB0byBzdG9yZSB0aGUgZXJyb3IgbWFwcGVkIHRvIHRoZSBzb3VyY2UgbWFwLlxuXG5cbiAgX2NyZWF0ZUNsYXNzKFJlZEJveEVycm9yLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUubWFwcGVkKSB0aGlzLm1hcEVycm9yKHRoaXMucHJvcHMuZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIFRyeSB0byBtYXAgdGhlIGVycm9yIHdoZW4gdGhlIGNvbXBvbmVudCBnZXRzIGNvbnN0cnVjdGVkLCB0aGlzIGlzIHBvc3NpYmxlXG4gICAgLy8gaW4gc29tZSBjYXNlcyBsaWtlIGV2YWxzLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdtYXBPbkNvbnN0cnVjdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hcE9uQ29uc3RydWN0aW9uKGVycm9yKSB7XG4gICAgICB2YXIgc3RhY2tMaW5lcyA9IGVycm9yLnN0YWNrLnNwbGl0KCdcXG4nKTtcblxuICAgICAgLy8gVGhlcmUncyBubyBzdGFjaywgb25seSB0aGUgZXJyb3IgbWVzc2FnZS5cbiAgICAgIGlmIChzdGFja0xpbmVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZXJyb3I6IGVycm9yLCBtYXBwZWQ6IHRydWUgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBVc2luZyB0aGUg4oCcZXZhbOKAnSBzZXR0aW5nIG9uIHdlYnBhY2sgYWxyZWFkeSBnaXZlcyB0aGUgY29ycmVjdCBsb2NhdGlvbi5cbiAgICAgIHZhciBpc1dlYnBhY2tFdmFsID0gc3RhY2tMaW5lc1sxXS5zZWFyY2goL1xcKHdlYnBhY2s6XFwvezN9LykgIT09IC0xO1xuICAgICAgaWYgKGlzV2VicGFja0V2YWwpIHtcbiAgICAgICAgLy8gTm8gY2hhbmdlcyBhcmUgbmVlZGVkIGhlcmUuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVycm9yOiBlcnJvciwgbWFwcGVkOiB0cnVlIH07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXIgZXZhbCBmb2xsb3cgYSBzcGVjaWZpYyBwYXR0ZXJuIGFuZCBjYW4gYmUgZWFzaWx5IHBhcnNlZC5cbiAgICAgIHZhciBpc0V2YWwgPSBzdGFja0xpbmVzWzFdLnNlYXJjaCgvXFwoZXZhbCBhdC8pICE9PSAtMTtcbiAgICAgIGlmICghaXNFdmFsKSB7XG4gICAgICAgIC8vIG1hcHBpbmcgd2lsbCBiZSBkZWZlcnJlZCB1bnRpbCBgY29tcG9uZW50RGlkTW91bnRgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVycm9yOiBlcnJvciwgbWFwcGVkOiBmYWxzZSB9O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBmaXJzdCBsaW5lIGlzIHRoZSBlcnJvciBtZXNzYWdlLlxuICAgICAgdmFyIGZpeGVkTGluZXMgPSBbc3RhY2tMaW5lcy5zaGlmdCgpXTtcbiAgICAgIC8vIFRoZSByZXN0IG5lZWRzIHRvIGJlIGZpeGVkLlxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHN0YWNrTGluZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHN0YWNrTGluZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgdmFyIGV2YWxTdGFja0xpbmUgPSBzdGFja0xpbmUubWF0Y2goLyguKylcXChldmFsIGF0ICguKykgXFwoLis/XFwpLCAuKyhcXDpbMC05XStcXDpbMC05XSspXFwpLyk7XG4gICAgICAgICAgaWYgKGV2YWxTdGFja0xpbmUpIHtcbiAgICAgICAgICAgIHZhciBfZXZhbFN0YWNrTGluZSA9IF9zbGljZWRUb0FycmF5KGV2YWxTdGFja0xpbmUsIDQpLFxuICAgICAgICAgICAgICAgIGF0U29tZXRoaW5nID0gX2V2YWxTdGFja0xpbmVbMV0sXG4gICAgICAgICAgICAgICAgZmlsZSA9IF9ldmFsU3RhY2tMaW5lWzJdLFxuICAgICAgICAgICAgICAgIHJvd0NvbHVtbiA9IF9ldmFsU3RhY2tMaW5lWzNdO1xuXG4gICAgICAgICAgICBmaXhlZExpbmVzLnB1c2goYXRTb21ldGhpbmcgKyAnICgnICsgZmlsZSArIHJvd0NvbHVtbiArICcpJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFdoZW4gc3RhY2sgZnJhbWVzIG9mIGRpZmZlcmVudCB0eXBlcyBhcmUgZGV0ZWN0ZWQsIHRyeSB0byBsb2FkIHRoZSBhZGRpdGlvbmFsIHNvdXJjZSBtYXBzXG4gICAgICAgICAgICBmaXhlZExpbmVzLnB1c2goc3RhY2tMaW5lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlcnJvci5zdGFjayA9IGZpeGVkTGluZXMuam9pbignXFxuJyk7XG4gICAgICB0aGlzLnN0YXRlID0geyBlcnJvcjogZXJyb3IsIG1hcHBlZDogdHJ1ZSB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21hcEVycm9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFwRXJyb3IoZXJyb3IpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBfZ2V0X18oJ21hcFN0YWNrVHJhY2UnKShlcnJvci5zdGFjaywgZnVuY3Rpb24gKG1hcHBlZFN0YWNrKSB7XG4gICAgICAgIGVycm9yLnN0YWNrID0gbWFwcGVkU3RhY2suam9pbignXFxuJyk7XG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGVycm9yOiBlcnJvciwgbWFwcGVkOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyRnJhbWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRnJhbWVzKGZyYW1lcykge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZmlsZW5hbWUgPSBfcHJvcHMuZmlsZW5hbWUsXG4gICAgICAgICAgZWRpdG9yU2NoZW1lID0gX3Byb3BzLmVkaXRvclNjaGVtZSxcbiAgICAgICAgICB1c2VMaW5lcyA9IF9wcm9wcy51c2VMaW5lcyxcbiAgICAgICAgICB1c2VDb2x1bW5zID0gX3Byb3BzLnVzZUNvbHVtbnM7XG5cbiAgICAgIHZhciBfZ2V0X18zID0gX2dldF9fKCdhc3NpZ24nKSh7fSwgX2dldF9fKCdzdHlsZScpLCB0aGlzLnByb3BzLnN0eWxlKSxcbiAgICAgICAgICBmcmFtZSA9IF9nZXRfXzMuZnJhbWUsXG4gICAgICAgICAgZmlsZSA9IF9nZXRfXzMuZmlsZSxcbiAgICAgICAgICBsaW5rVG9GaWxlID0gX2dldF9fMy5saW5rVG9GaWxlO1xuXG4gICAgICByZXR1cm4gZnJhbWVzLm1hcChmdW5jdGlvbiAoZiwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHRleHQgPSB2b2lkIDA7XG4gICAgICAgIHZhciB1cmwgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIGZpbGVuYW1lICYmICFfZ2V0X18oJ2lzRmlsZW5hbWVBYnNvbHV0ZScpKGYuZmlsZU5hbWUpKSB7XG4gICAgICAgICAgdXJsID0gX2dldF9fKCdtYWtlVXJsJykoZmlsZW5hbWUsIGVkaXRvclNjaGVtZSk7XG4gICAgICAgICAgdGV4dCA9IF9nZXRfXygnbWFrZUxpbmtUZXh0JykoZmlsZW5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBsaW5lcyA9IHVzZUxpbmVzID8gZi5saW5lTnVtYmVyIDogbnVsbDtcbiAgICAgICAgICB2YXIgY29sdW1ucyA9IHVzZUNvbHVtbnMgPyBmLmNvbHVtbk51bWJlciA6IG51bGw7XG4gICAgICAgICAgdXJsID0gX2dldF9fKCdtYWtlVXJsJykoZi5maWxlTmFtZSwgZWRpdG9yU2NoZW1lLCBsaW5lcywgY29sdW1ucyk7XG4gICAgICAgICAgdGV4dCA9IF9nZXRfXygnbWFrZUxpbmtUZXh0JykoZi5maWxlTmFtZSwgbGluZXMsIGNvbHVtbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9nZXRfXygnUmVhY3QnKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgc3R5bGU6IGZyYW1lLCBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgX2dldF9fKCdSZWFjdCcpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBmLmZ1bmN0aW9uTmFtZVxuICAgICAgICAgICksXG4gICAgICAgICAgX2dldF9fKCdSZWFjdCcpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IGZpbGUgfSxcbiAgICAgICAgICAgIF9nZXRfXygnUmVhY3QnKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgIHsgaHJlZjogdXJsLCBzdHlsZTogbGlua1RvRmlsZSB9LFxuICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgLy8gVGhlIGVycm9yIGlzIHJlY2VpdmVkIGFzIGEgcHJvcGVydHkgdG8gaW5pdGlhbGl6ZSBzdGF0ZS5lcnJvciwgd2hpY2ggbWF5XG4gICAgICAvLyBiZSB1cGRhdGVkIHdoZW4gaXQgaXMgbWFwcGVkIHRvIHRoZSBzb3VyY2UgbWFwLlxuICAgICAgdmFyIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcbiAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcblxuICAgICAgdmFyIF9nZXRfXzQgPSBfZ2V0X18oJ2Fzc2lnbicpKHt9LCBfZ2V0X18oJ3N0eWxlJyksIHRoaXMucHJvcHMuc3R5bGUpLFxuICAgICAgICAgIHJlZGJveCA9IF9nZXRfXzQucmVkYm94LFxuICAgICAgICAgIG1lc3NhZ2UgPSBfZ2V0X180Lm1lc3NhZ2UsXG4gICAgICAgICAgc3RhY2sgPSBfZ2V0X180LnN0YWNrLFxuICAgICAgICAgIGZyYW1lID0gX2dldF9fNC5mcmFtZTtcblxuICAgICAgdmFyIGZyYW1lcyA9IHZvaWQgMDtcbiAgICAgIHZhciBwYXJzZUVycm9yID0gdm9pZCAwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZnJhbWVzID0gX2dldF9fKCdFcnJvclN0YWNrUGFyc2VyJykucGFyc2UoZXJyb3IpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBwYXJzZUVycm9yID0gbmV3IEVycm9yKCdGYWlsZWQgdG8gcGFyc2Ugc3RhY2sgdHJhY2UuIFN0YWNrIHRyYWNlIGluZm9ybWF0aW9uIHVuYXZhaWxhYmxlLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyc2VFcnJvcikge1xuICAgICAgICBmcmFtZXMgPSBfZ2V0X18oJ1JlYWN0JykuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBmcmFtZSwga2V5OiAwIH0sXG4gICAgICAgICAgX2dldF9fKCdSZWFjdCcpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBwYXJzZUVycm9yLm1lc3NhZ2VcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcmFtZXMgPSB0aGlzLnJlbmRlckZyYW1lcyhmcmFtZXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2dldF9fKCdSZWFjdCcpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiByZWRib3gsIGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICAgIF9nZXRfXygnUmVhY3QnKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgc3R5bGU6IG1lc3NhZ2UgfSxcbiAgICAgICAgICBlcnJvci5uYW1lLFxuICAgICAgICAgICc6ICcsXG4gICAgICAgICAgZXJyb3IubWVzc2FnZVxuICAgICAgICApLFxuICAgICAgICBfZ2V0X18oJ1JlYWN0JykuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBzdGFjayB9LFxuICAgICAgICAgIGZyYW1lc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWRCb3hFcnJvcjtcbn0oX2dldF9fKCdDb21wb25lbnQnKSk7XG5cbi8vIFwiUG9ydGFsXCIgY29tcG9uZW50IGZvciBhY3R1YWwgUmVkQm94RXJyb3IgY29tcG9uZW50IHRvXG4vLyByZW5kZXIgdG8gKGRpcmVjdGx5IHVuZGVyIGJvZHkpLiBQcmV2ZW50cyBidWdzIGFzIGluICMyNy5cblxuXG5SZWRCb3hFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBfZ2V0X18oJ1Byb3BUeXBlcycpLmluc3RhbmNlT2YoRXJyb3IpLmlzUmVxdWlyZWQsXG4gIGZpbGVuYW1lOiBfZ2V0X18oJ1Byb3BUeXBlcycpLnN0cmluZyxcbiAgZWRpdG9yU2NoZW1lOiBfZ2V0X18oJ1Byb3BUeXBlcycpLnN0cmluZyxcbiAgdXNlTGluZXM6IF9nZXRfXygnUHJvcFR5cGVzJykuYm9vbCxcbiAgdXNlQ29sdW1uczogX2dldF9fKCdQcm9wVHlwZXMnKS5ib29sLFxuICBzdHlsZTogX2dldF9fKCdQcm9wVHlwZXMnKS5vYmplY3QsXG4gIGNsYXNzTmFtZTogX2dldF9fKCdQcm9wVHlwZXMnKS5zdHJpbmdcbn07XG5SZWRCb3hFcnJvci5kaXNwbGF5TmFtZSA9ICdSZWRCb3hFcnJvcic7XG5SZWRCb3hFcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHVzZUxpbmVzOiB0cnVlLFxuICB1c2VDb2x1bW5zOiB0cnVlIH07XG5cbnZhciBSZWRCb3ggPSBmdW5jdGlvbiAoX2dldF9fNSkge1xuICBfaW5oZXJpdHMoUmVkQm94LCBfZ2V0X181KTtcblxuICBmdW5jdGlvbiBSZWRCb3goKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZEJveCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlZEJveC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlZEJveCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlZEJveCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgIHRoaXMucmVuZGVyUmVkQm94RXJyb3IoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLnJlbmRlclJlZEJveEVycm9yKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIF9nZXRfXygnUmVhY3RET00nKS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuZWwpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICAgIHRoaXMuZWwgPSBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlclJlZEJveEVycm9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVkQm94RXJyb3IoKSB7XG4gICAgICBfZ2V0X18oJ1JlYWN0RE9NJykucmVuZGVyKF9nZXRfXygnUmVhY3QnKS5jcmVhdGVFbGVtZW50KF9nZXRfXygnUmVkQm94RXJyb3InKSwgdGhpcy5wcm9wcyksIHRoaXMuZWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWRCb3g7XG59KF9nZXRfXygnQ29tcG9uZW50JykpO1xuXG5SZWRCb3gucHJvcFR5cGVzID0ge1xuICBlcnJvcjogX2dldF9fKCdQcm9wVHlwZXMnKS5pbnN0YW5jZU9mKEVycm9yKS5pc1JlcXVpcmVkXG59O1xuUmVkQm94LmRpc3BsYXlOYW1lID0gJ1JlZEJveCc7XG5leHBvcnRzLmRlZmF1bHQgPSBSZWRCb3g7XG5cbnZhciBfUmV3aXJlZERhdGFfXyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbnZhciBJTlRFTlRJT05BTF9VTkRFRklORUQgPSAnX19JTlRFTlRJT05BTF9VTkRFRklORURfXyc7XG52YXIgX1Jld2lyZUFQSV9fID0ge307XG5cbihmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGFkZFByb3BlcnR5VG9BUElPYmplY3QobmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX1Jld2lyZUFQSV9fLCBuYW1lLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX19nZXRfXycsIF9nZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fR2V0RGVwZW5kZW5jeV9fJywgX2dldF9fKTtcbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX19SZXdpcmVfXycsIF9zZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fc2V0X18nLCBfc2V0X18pO1xuICBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KCdfX3Jlc2V0X18nLCBfcmVzZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fUmVzZXREZXBlbmRlbmN5X18nLCBfcmVzZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fd2l0aF9fJywgX3dpdGhfXyk7XG59KSgpO1xuXG5mdW5jdGlvbiBfZ2V0X18odmFyaWFibGVOYW1lKSB7XG4gIGlmIChfUmV3aXJlZERhdGFfXyA9PT0gdW5kZWZpbmVkIHx8IF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBfZ2V0X29yaWdpbmFsX18odmFyaWFibGVOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmFsdWUgPSBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdO1xuXG4gICAgaWYgKHZhbHVlID09PSBJTlRFTlRJT05BTF9VTkRFRklORUQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX2dldF9vcmlnaW5hbF9fKHZhcmlhYmxlTmFtZSkge1xuICBzd2l0Y2ggKHZhcmlhYmxlTmFtZSkge1xuICAgIGNhc2UgJ1Byb3BUeXBlcyc6XG4gICAgICByZXR1cm4gX3Byb3BUeXBlczIuZGVmYXVsdDtcblxuICAgIGNhc2UgJ21hcFN0YWNrVHJhY2UnOlxuICAgICAgcmV0dXJuIF9zb3VyY2VtYXBwZWRTdGFja3RyYWNlLm1hcFN0YWNrVHJhY2U7XG5cbiAgICBjYXNlICdhc3NpZ24nOlxuICAgICAgcmV0dXJuIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQ7XG5cbiAgICBjYXNlICdzdHlsZSc6XG4gICAgICByZXR1cm4gX3N0eWxlMi5kZWZhdWx0O1xuXG4gICAgY2FzZSAnaXNGaWxlbmFtZUFic29sdXRlJzpcbiAgICAgIHJldHVybiBfbGliLmlzRmlsZW5hbWVBYnNvbHV0ZTtcblxuICAgIGNhc2UgJ21ha2VVcmwnOlxuICAgICAgcmV0dXJuIF9saWIubWFrZVVybDtcblxuICAgIGNhc2UgJ21ha2VMaW5rVGV4dCc6XG4gICAgICByZXR1cm4gX2xpYi5tYWtlTGlua1RleHQ7XG5cbiAgICBjYXNlICdFcnJvclN0YWNrUGFyc2VyJzpcbiAgICAgIHJldHVybiBfZXJyb3JTdGFja1BhcnNlcjIuZGVmYXVsdDtcblxuICAgIGNhc2UgJ0NvbXBvbmVudCc6XG4gICAgICByZXR1cm4gX3JlYWN0LkNvbXBvbmVudDtcblxuICAgIGNhc2UgJ1JlYWN0RE9NJzpcbiAgICAgIHJldHVybiBfcmVhY3REb20yLmRlZmF1bHQ7XG5cbiAgICBjYXNlICdSZWFjdCc6XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0O1xuXG4gICAgY2FzZSAnUmVkQm94RXJyb3InOlxuICAgICAgcmV0dXJuIFJlZEJveEVycm9yO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gX2Fzc2lnbl9fKHZhcmlhYmxlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKF9SZXdpcmVkRGF0YV9fID09PSB1bmRlZmluZWQgfHwgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIF9zZXRfb3JpZ2luYWxfXyh2YXJpYWJsZU5hbWUsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9zZXRfb3JpZ2luYWxfXyh2YXJpYWJsZU5hbWUsIF92YWx1ZSkge1xuICBzd2l0Y2ggKHZhcmlhYmxlTmFtZSkge31cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBfdXBkYXRlX29wZXJhdGlvbl9fKG9wZXJhdGlvbiwgdmFyaWFibGVOYW1lLCBwcmVmaXgpIHtcbiAgdmFyIG9sZFZhbHVlID0gX2dldF9fKHZhcmlhYmxlTmFtZSk7XG5cbiAgdmFyIG5ld1ZhbHVlID0gb3BlcmF0aW9uID09PSAnKysnID8gb2xkVmFsdWUgKyAxIDogb2xkVmFsdWUgLSAxO1xuXG4gIF9hc3NpZ25fXyh2YXJpYWJsZU5hbWUsIG5ld1ZhbHVlKTtcblxuICByZXR1cm4gcHJlZml4ID8gbmV3VmFsdWUgOiBvbGRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gX3NldF9fKHZhcmlhYmxlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKCh0eXBlb2YgdmFyaWFibGVOYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YXJpYWJsZU5hbWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyh2YXJpYWJsZU5hbWUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF9SZXdpcmVkRGF0YV9fW25hbWVdID0gdmFyaWFibGVOYW1lW25hbWVdO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID0gSU5URU5USU9OQUxfVU5ERUZJTkVEO1xuICAgIH0gZWxzZSB7XG4gICAgICBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9yZXNldF9fKHZhcmlhYmxlTmFtZSk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVzZXRfXyh2YXJpYWJsZU5hbWUpIHtcbiAgZGVsZXRlIF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV07XG59XG5cbmZ1bmN0aW9uIF93aXRoX18ob2JqZWN0KSB7XG4gIHZhciByZXdpcmVkVmFyaWFibGVOYW1lcyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gIHZhciBwcmV2aW91c1ZhbHVlcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHJld2lyZWRWYXJpYWJsZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhYmxlTmFtZSkge1xuICAgICAgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9IHByZXZpb3VzVmFsdWVzW3ZhcmlhYmxlTmFtZV07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV3aXJlZFZhcmlhYmxlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAodmFyaWFibGVOYW1lKSB7XG4gICAgICBwcmV2aW91c1ZhbHVlc1t2YXJpYWJsZU5hbWVdID0gX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXTtcbiAgICAgIF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPSBvYmplY3RbdmFyaWFibGVOYW1lXTtcbiAgICB9KTtcbiAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcblxuICAgIGlmICghIXJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzdWx0LnRoZW4ocmVzZXQpLmNhdGNoKHJlc2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzZXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG52YXIgX3R5cGVPZk9yaWdpbmFsRXhwb3J0ID0gdHlwZW9mIFJlZEJveCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoUmVkQm94KTtcblxuZnVuY3Rpb24gYWRkTm9uRW51bWVyYWJsZVByb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWRCb3gsIG5hbWUsIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5pZiAoKF90eXBlT2ZPcmlnaW5hbEV4cG9ydCA9PT0gJ29iamVjdCcgfHwgX3R5cGVPZk9yaWdpbmFsRXhwb3J0ID09PSAnZnVuY3Rpb24nKSAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKFJlZEJveCkpIHtcbiAgYWRkTm9uRW51bWVyYWJsZVByb3BlcnR5KCdfX2dldF9fJywgX2dldF9fKTtcbiAgYWRkTm9uRW51bWVyYWJsZVByb3BlcnR5KCdfX0dldERlcGVuZGVuY3lfXycsIF9nZXRfXyk7XG4gIGFkZE5vbkVudW1lcmFibGVQcm9wZXJ0eSgnX19SZXdpcmVfXycsIF9zZXRfXyk7XG4gIGFkZE5vbkVudW1lcmFibGVQcm9wZXJ0eSgnX19zZXRfXycsIF9zZXRfXyk7XG4gIGFkZE5vbkVudW1lcmFibGVQcm9wZXJ0eSgnX19yZXNldF9fJywgX3Jlc2V0X18pO1xuICBhZGROb25FbnVtZXJhYmxlUHJvcGVydHkoJ19fUmVzZXREZXBlbmRlbmN5X18nLCBfcmVzZXRfXyk7XG4gIGFkZE5vbkVudW1lcmFibGVQcm9wZXJ0eSgnX193aXRoX18nLCBfd2l0aF9fKTtcbiAgYWRkTm9uRW51bWVyYWJsZVByb3BlcnR5KCdfX1Jld2lyZUFQSV9fJywgX1Jld2lyZUFQSV9fKTtcbn1cblxuZXhwb3J0cy5fX2dldF9fID0gX2dldF9fO1xuZXhwb3J0cy5fX0dldERlcGVuZGVuY3lfXyA9IF9nZXRfXztcbmV4cG9ydHMuX19SZXdpcmVfXyA9IF9zZXRfXztcbmV4cG9ydHMuX19zZXRfXyA9IF9zZXRfXztcbmV4cG9ydHMuX19SZXNldERlcGVuZGVuY3lfXyA9IF9yZXNldF9fO1xuZXhwb3J0cy5fX1Jld2lyZUFQSV9fID0gX1Jld2lyZUFQSV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL2hvbWUvdGVybWluYWx1c2VyLy5jb3Jkb3ZhL34vcmVkYm94LXJlYWN0L2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIF9EZWZhdWx0RXhwb3J0VmFsdWUgPSB7XG4gIHJlZGJveDoge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIGJvdHRvbTogJzBweCcsXG4gICAgcmlnaHQ6ICcwcHgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZDogJ3JnYigyMDQsIDAsIDApJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICB6SW5kZXg6IDIxNDc0ODM2NDcsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICB9LFxuICBtZXNzYWdlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnXG4gIH0sXG4gIHN0YWNrOiB7XG4gICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgbWFyZ2luVG9wOiAnMmVtJ1xuICB9LFxuICBmcmFtZToge1xuICAgIG1hcmdpblRvcDogJzFlbSdcbiAgfSxcbiAgZmlsZToge1xuICAgIGZvbnRTaXplOiAnMC44ZW0nLFxuICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJ1xuICB9LFxuICBsaW5rVG9GaWxlOiB7XG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSdcbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9EZWZhdWx0RXhwb3J0VmFsdWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvaG9tZS90ZXJtaW5hbHVzZXIvLmNvcmRvdmEvfi9yZWRib3gtcmVhY3QvbGliL3N0eWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMzUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvLyBVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24gKFVNRCkgdG8gc3VwcG9ydCBBTUQsIENvbW1vbkpTL05vZGUuanMsIFJoaW5vLCBhbmQgYnJvd3NlcnMuXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKCdlcnJvci1zdGFjay1wYXJzZXInLCBbJ3N0YWNrZnJhbWUnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ3N0YWNrZnJhbWUnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5FcnJvclN0YWNrUGFyc2VyID0gZmFjdG9yeShyb290LlN0YWNrRnJhbWUpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlcihTdGFja0ZyYW1lKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEZJUkVGT1hfU0FGQVJJX1NUQUNLX1JFR0VYUCA9IC8oXnxAKVxcUytcXDpcXGQrLztcbiAgICB2YXIgQ0hST01FX0lFX1NUQUNLX1JFR0VYUCA9IC9eXFxzKmF0IC4qKFxcUytcXDpcXGQrfFxcKG5hdGl2ZVxcKSkvbTtcbiAgICB2YXIgU0FGQVJJX05BVElWRV9DT0RFX1JFR0VYUCA9IC9eKGV2YWxAKT8oXFxbbmF0aXZlIGNvZGVcXF0pPyQvO1xuXG4gICAgZnVuY3Rpb24gX21hcChhcnJheSwgZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGUubWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZuLCB0aGlzQXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBuZXcgQXJyYXkoYXJyYXkubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbaV0gPSBmbi5jYWxsKHRoaXNBcmcsIGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZmlsdGVyKGFycmF5LCBmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZm4sIHRoaXNBcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChmbi5jYWxsKHRoaXNBcmcsIGFycmF5W2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChhcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbmRleE9mKGFycmF5LCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZW4gYW4gRXJyb3Igb2JqZWN0LCBleHRyYWN0IHRoZSBtb3N0IGluZm9ybWF0aW9uIGZyb20gaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIG9iamVjdFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX0gb2YgU3RhY2tGcmFtZXNcbiAgICAgICAgICovXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZShlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvci5zdGFja3RyYWNlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZXJyb3JbJ29wZXJhI3NvdXJjZWxvYyddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmEoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGFjayAmJiBlcnJvci5zdGFjay5tYXRjaChDSFJPTUVfSUVfU1RBQ0tfUkVHRVhQKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVjhPcklFKGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3Iuc3RhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZGT3JTYWZhcmkoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwYXJzZSBnaXZlbiBFcnJvciBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBTZXBhcmF0ZSBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBmcm9tIGEgc3RyaW5nIG9mIHRoZSBmb3JtOiAoVVJJOkxpbmU6Q29sdW1uKVxuICAgICAgICBleHRyYWN0TG9jYXRpb246IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJGV4dHJhY3RMb2NhdGlvbih1cmxMaWtlKSB7XG4gICAgICAgICAgICAvLyBGYWlsLWZhc3QgYnV0IHJldHVybiBsb2NhdGlvbnMgbGlrZSBcIihuYXRpdmUpXCJcbiAgICAgICAgICAgIGlmICh1cmxMaWtlLmluZGV4T2YoJzonKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3VybExpa2VdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmVnRXhwID0gLyguKz8pKD86XFw6KFxcZCspKT8oPzpcXDooXFxkKykpPyQvO1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gcmVnRXhwLmV4ZWModXJsTGlrZS5yZXBsYWNlKC9bXFwoXFwpXS9nLCAnJykpO1xuICAgICAgICAgICAgcmV0dXJuIFtwYXJ0c1sxXSwgcGFydHNbMl0gfHwgdW5kZWZpbmVkLCBwYXJ0c1szXSB8fCB1bmRlZmluZWRdO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlVjhPcklFOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZVY4T3JJRShlcnJvcikge1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkID0gX2ZpbHRlcihlcnJvci5zdGFjay5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFsaW5lLm1hdGNoKENIUk9NRV9JRV9TVEFDS19SRUdFWFApO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBfbWFwKGZpbHRlcmVkLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZignKGV2YWwgJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaHJvdyBhd2F5IGV2YWwgaW5mb3JtYXRpb24gdW50aWwgd2UgaW1wbGVtZW50IHN0YWNrdHJhY2UuanMvc3RhY2tmcmFtZSM4XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoL2V2YWwgY29kZS9nLCAnZXZhbCcpLnJlcGxhY2UoLyhcXChldmFsIGF0IFteXFwoKV0qKXwoXFwpXFwsLiokKS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBsaW5lLnJlcGxhY2UoL15cXHMrLywgJycpLnJlcGxhY2UoL1xcKGV2YWwgY29kZS9nLCAnKCcpLnNwbGl0KC9cXHMrLykuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFydHMgPSB0aGlzLmV4dHJhY3RMb2NhdGlvbih0b2tlbnMucG9wKCkpO1xuICAgICAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSB0b2tlbnMuam9pbignICcpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBfaW5kZXhPZihbJ2V2YWwnLCAnPGFub255bW91cz4nXSwgbG9jYXRpb25QYXJ0c1swXSkgPiAtMSA/IHVuZGVmaW5lZCA6IGxvY2F0aW9uUGFydHNbMF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrRnJhbWUoZnVuY3Rpb25OYW1lLCB1bmRlZmluZWQsIGZpbGVOYW1lLCBsb2NhdGlvblBhcnRzWzFdLCBsb2NhdGlvblBhcnRzWzJdLCBsaW5lKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlRkZPclNhZmFyaTogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkcGFyc2VGRk9yU2FmYXJpKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBfZmlsdGVyKGVycm9yLnN0YWNrLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhbGluZS5tYXRjaChTQUZBUklfTkFUSVZFX0NPREVfUkVHRVhQKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gX21hcChmaWx0ZXJlZCwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIC8vIFRocm93IGF3YXkgZXZhbCBpbmZvcm1hdGlvbiB1bnRpbCB3ZSBpbXBsZW1lbnQgc3RhY2t0cmFjZS5qcy9zdGFja2ZyYW1lIzhcbiAgICAgICAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCcgPiBldmFsJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC8gbGluZSAoXFxkKykoPzogPiBldmFsIGxpbmUgXFxkKykqID4gZXZhbFxcOlxcZCtcXDpcXGQrL2csICc6JDEnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCdAJykgPT09IC0xICYmIGxpbmUuaW5kZXhPZignOicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgZXZhbCBmcmFtZXMgb25seSBoYXZlIGZ1bmN0aW9uIG5hbWVzIGFuZCBub3RoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0ZyYW1lKGxpbmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBsaW5lLnNwbGl0KCdAJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvblBhcnRzID0gdGhpcy5leHRyYWN0TG9jYXRpb24odG9rZW5zLnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHRva2Vucy5qb2luKCdAJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrRnJhbWUoZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblBhcnRzWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VPcGVyYTogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkcGFyc2VPcGVyYShlKSB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhY2t0cmFjZSB8fCAoZS5tZXNzYWdlLmluZGV4T2YoJ1xcbicpID4gLTEgJiZcbiAgICAgICAgICAgICAgICBlLm1lc3NhZ2Uuc3BsaXQoJ1xcbicpLmxlbmd0aCA+IGUuc3RhY2t0cmFjZS5zcGxpdCgnXFxuJykubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmE5KGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghZS5zdGFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmExMChlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYTExKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlT3BlcmE5OiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZU9wZXJhOShlKSB7XG4gICAgICAgICAgICB2YXIgbGluZVJFID0gL0xpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykvaTtcbiAgICAgICAgICAgIHZhciBsaW5lcyA9IGUubWVzc2FnZS5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAyLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMikge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGxpbmVSRS5leGVjKGxpbmVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFN0YWNrRnJhbWUodW5kZWZpbmVkLCB1bmRlZmluZWQsIG1hdGNoWzJdLCBtYXRjaFsxXSwgdW5kZWZpbmVkLCBsaW5lc1tpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZU9wZXJhMTA6IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJHBhcnNlT3BlcmExMChlKSB7XG4gICAgICAgICAgICB2YXIgbGluZVJFID0gL0xpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykoPzo6IEluIGZ1bmN0aW9uIChcXFMrKSk/JC9pO1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gZS5zdGFja3RyYWNlLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbGluZVJFLmV4ZWMobGluZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBTdGFja0ZyYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzNdIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIE9wZXJhIDEwLjY1KyBFcnJvci5zdGFjayB2ZXJ5IHNpbWlsYXIgdG8gRkYvU2FmYXJpXG4gICAgICAgIHBhcnNlT3BlcmExMTogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkcGFyc2VPcGVyYTExKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBfZmlsdGVyKGVycm9yLnN0YWNrLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWxpbmUubWF0Y2goRklSRUZPWF9TQUZBUklfU1RBQ0tfUkVHRVhQKSAmJiAhbGluZS5tYXRjaCgvXkVycm9yIGNyZWF0ZWQgYXQvKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gX21hcChmaWx0ZXJlZCwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBsaW5lLnNwbGl0KCdAJyk7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFydHMgPSB0aGlzLmV4dHJhY3RMb2NhdGlvbih0b2tlbnMucG9wKCkpO1xuICAgICAgICAgICAgICAgIHZhciBmdW5jdGlvbkNhbGwgPSAodG9rZW5zLnNoaWZ0KCkgfHwgJycpO1xuICAgICAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSBmdW5jdGlvbkNhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88YW5vbnltb3VzIGZ1bmN0aW9uKDogKFxcdyspKT8+LywgJyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXChbXlxcKV0qXFwpL2csICcnKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3NSYXc7XG4gICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uQ2FsbC5tYXRjaCgvXFwoKFteXFwpXSopXFwpLykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1JhdyA9IGZ1bmN0aW9uQ2FsbC5yZXBsYWNlKC9eW15cXChdK1xcKChbXlxcKV0qKVxcKSQvLCAnJDEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSAoYXJnc1JhdyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3NSYXcgPT09ICdbYXJndW1lbnRzIG5vdCBhdmFpbGFibGVdJykgP1xuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgOiBhcmdzUmF3LnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0ZyYW1lKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMV0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMl0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmUpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xufSkpO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L2Vycm9yLXN0YWNrLXBhcnNlci9lcnJvci1zdGFjay1wYXJzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvLyBVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24gKFVNRCkgdG8gc3VwcG9ydCBBTUQsIENvbW1vbkpTL05vZGUuanMsIFJoaW5vLCBhbmQgYnJvd3NlcnMuXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKCdzdGFja2ZyYW1lJywgW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuU3RhY2tGcmFtZSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gX2lzTnVtYmVyKG4pIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTdGFja0ZyYW1lKGZ1bmN0aW9uTmFtZSwgYXJncywgZmlsZU5hbWUsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgc291cmNlKSB7XG4gICAgICAgIGlmIChmdW5jdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRGdW5jdGlvbk5hbWUoZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFyZ3MoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbGVOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsZU5hbWUoZmlsZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGluZU51bWJlcihsaW5lTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uTnVtYmVyKGNvbHVtbk51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNvdXJjZShzb3VyY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgU3RhY2tGcmFtZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIGdldEZ1bmN0aW9uTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25OYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXRGdW5jdGlvbk5hbWU6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IFN0cmluZyh2KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRBcmdzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcmdzO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBcmdzOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3MgbXVzdCBiZSBhbiBBcnJheScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcmdzID0gdjtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBOT1RFOiBQcm9wZXJ0eSBuYW1lIG1heSBiZSBtaXNsZWFkaW5nIGFzIGl0IGluY2x1ZGVzIHRoZSBwYXRoLFxuICAgICAgICAvLyBidXQgaXQgc29tZXdoYXQgbWlycm9ycyBWOCdzIEphdmFTY3JpcHRTdGFja1RyYWNlQXBpXG4gICAgICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avdjgvd2lraS9KYXZhU2NyaXB0U3RhY2tUcmFjZUFwaSBhbmQgR2Vja28nc1xuICAgICAgICAvLyBodHRwOi8vbXhyLm1vemlsbGEub3JnL21vemlsbGEtY2VudHJhbC9zb3VyY2UveHBjb20vYmFzZS9uc0lFeGNlcHRpb24uaWRsIzE0XG4gICAgICAgIGdldEZpbGVOYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RmlsZU5hbWU6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVOYW1lID0gU3RyaW5nKHYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldExpbmVOdW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVOdW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldExpbmVOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBpZiAoIV9pc051bWJlcih2KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0xpbmUgTnVtYmVyIG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGluZU51bWJlciA9IE51bWJlcih2KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb2x1bW5OdW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbHVtbk51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Q29sdW1uTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKCFfaXNOdW1iZXIodikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb2x1bW4gTnVtYmVyIG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sdW1uTnVtYmVyID0gTnVtYmVyKHYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICAgICAgICB9LFxuICAgICAgICBzZXRTb3VyY2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IFN0cmluZyh2KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gdGhpcy5nZXRGdW5jdGlvbk5hbWUoKSB8fCAne2Fub255bW91c30nO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAnKCcgKyAodGhpcy5nZXRBcmdzKCkgfHwgW10pLmpvaW4oJywnKSArICcpJztcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IHRoaXMuZ2V0RmlsZU5hbWUoKSA/ICgnQCcgKyB0aGlzLmdldEZpbGVOYW1lKCkpIDogJyc7XG4gICAgICAgICAgICB2YXIgbGluZU51bWJlciA9IF9pc051bWJlcih0aGlzLmdldExpbmVOdW1iZXIoKSkgPyAoJzonICsgdGhpcy5nZXRMaW5lTnVtYmVyKCkpIDogJyc7XG4gICAgICAgICAgICB2YXIgY29sdW1uTnVtYmVyID0gX2lzTnVtYmVyKHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCkpID8gKCc6JyArIHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCkpIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb25OYW1lICsgYXJncyArIGZpbGVOYW1lICsgbGluZU51bWJlciArIGNvbHVtbk51bWJlcjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gU3RhY2tGcmFtZTtcbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL2hvbWUvdGVybWluYWx1c2VyLy5jb3Jkb3ZhL34vc3RhY2tmcmFtZS9zdGFja2ZyYW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMzUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGZpbGVuYW1lV2l0aG91dExvYWRlcnMgPSBleHBvcnRzLmZpbGVuYW1lV2l0aG91dExvYWRlcnMgPSBmdW5jdGlvbiBmaWxlbmFtZVdpdGhvdXRMb2FkZXJzKCkge1xuICB2YXIgZmlsZW5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuXG4gIHZhciBpbmRleCA9IGZpbGVuYW1lLmxhc3RJbmRleE9mKCchJyk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IGZpbGVuYW1lIDogZmlsZW5hbWUuc3Vic3RyKGluZGV4ICsgMSk7XG59O1xuXG52YXIgZmlsZW5hbWVIYXNMb2FkZXJzID0gZXhwb3J0cy5maWxlbmFtZUhhc0xvYWRlcnMgPSBmdW5jdGlvbiBmaWxlbmFtZUhhc0xvYWRlcnMoZmlsZW5hbWUpIHtcbiAgdmFyIGFjdHVhbEZpbGVuYW1lID0gX2dldF9fKCdmaWxlbmFtZVdpdGhvdXRMb2FkZXJzJykoZmlsZW5hbWUpO1xuXG4gIHJldHVybiBhY3R1YWxGaWxlbmFtZSAhPT0gZmlsZW5hbWU7XG59O1xuXG52YXIgZmlsZW5hbWVIYXNTY2hlbWEgPSBleHBvcnRzLmZpbGVuYW1lSGFzU2NoZW1hID0gZnVuY3Rpb24gZmlsZW5hbWVIYXNTY2hlbWEoZmlsZW5hbWUpIHtcbiAgcmV0dXJuICgvXltcXHddK1xcOi8udGVzdChmaWxlbmFtZSlcbiAgKTtcbn07XG5cbnZhciBpc0ZpbGVuYW1lQWJzb2x1dGUgPSBleHBvcnRzLmlzRmlsZW5hbWVBYnNvbHV0ZSA9IGZ1bmN0aW9uIGlzRmlsZW5hbWVBYnNvbHV0ZShmaWxlbmFtZSkge1xuICB2YXIgYWN0dWFsRmlsZW5hbWUgPSBfZ2V0X18oJ2ZpbGVuYW1lV2l0aG91dExvYWRlcnMnKShmaWxlbmFtZSk7XG5cbiAgaWYgKGFjdHVhbEZpbGVuYW1lLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIG1ha2VVcmwgPSBleHBvcnRzLm1ha2VVcmwgPSBmdW5jdGlvbiBtYWtlVXJsKGZpbGVuYW1lLCBzY2hlbWUsIGxpbmUsIGNvbHVtbikge1xuICB2YXIgYWN0dWFsRmlsZW5hbWUgPSBfZ2V0X18oJ2ZpbGVuYW1lV2l0aG91dExvYWRlcnMnKShmaWxlbmFtZSk7XG5cbiAgaWYgKF9nZXRfXygnZmlsZW5hbWVIYXNTY2hlbWEnKShmaWxlbmFtZSkpIHtcbiAgICByZXR1cm4gYWN0dWFsRmlsZW5hbWU7XG4gIH1cblxuICB2YXIgdXJsID0gJ2ZpbGU6Ly8nICsgYWN0dWFsRmlsZW5hbWU7XG5cbiAgaWYgKHNjaGVtZSA9PT0gJ3ZzY29kZScpIHtcbiAgICB1cmwgPSBzY2hlbWUgKyAnOi8vZmlsZS8nICsgdXJsO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKC9maWxlOlxcL1xcL1xcLy8sICcnKTsgLy8gdmlzdWFsIHN0dWRpbyBjb2RlIGRvZXMgbm90IG5lZWQgZmlsZTovLy8gaW4gaXRzIHNjaGVtZVxuICAgIGlmIChsaW5lICYmIGFjdHVhbEZpbGVuYW1lID09PSBmaWxlbmFtZSkge1xuICAgICAgdXJsID0gdXJsICsgJzonICsgbGluZTtcblxuICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICB1cmwgPSB1cmwgKyAnOicgKyBjb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHNjaGVtZSkge1xuICAgIHVybCA9IHNjaGVtZSArICc6Ly9vcGVuP3VybD0nICsgdXJsO1xuXG4gICAgaWYgKGxpbmUgJiYgYWN0dWFsRmlsZW5hbWUgPT09IGZpbGVuYW1lKSB7XG4gICAgICB1cmwgPSB1cmwgKyAnJmxpbmU9JyArIGxpbmU7XG5cbiAgICAgIGlmIChjb2x1bW4pIHtcbiAgICAgICAgdXJsID0gdXJsICsgJyZjb2x1bW49JyArIGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxudmFyIG1ha2VMaW5rVGV4dCA9IGV4cG9ydHMubWFrZUxpbmtUZXh0ID0gZnVuY3Rpb24gbWFrZUxpbmtUZXh0KGZpbGVuYW1lLCBsaW5lLCBjb2x1bW4pIHtcbiAgdmFyIHRleHQgPSBfZ2V0X18oJ2ZpbGVuYW1lV2l0aG91dExvYWRlcnMnKShmaWxlbmFtZSk7XG5cbiAgaWYgKGxpbmUgJiYgdGV4dCA9PT0gZmlsZW5hbWUpIHtcbiAgICB0ZXh0ID0gdGV4dCArICc6JyArIGxpbmU7XG5cbiAgICBpZiAoY29sdW1uKSB7XG4gICAgICB0ZXh0ID0gdGV4dCArICc6JyArIGNvbHVtbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGV4dDtcbn07XG5cbnZhciBfUmV3aXJlZERhdGFfXyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbnZhciBJTlRFTlRJT05BTF9VTkRFRklORUQgPSAnX19JTlRFTlRJT05BTF9VTkRFRklORURfXyc7XG52YXIgX1Jld2lyZUFQSV9fID0ge307XG5cbihmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGFkZFByb3BlcnR5VG9BUElPYmplY3QobmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX1Jld2lyZUFQSV9fLCBuYW1lLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX19nZXRfXycsIF9nZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fR2V0RGVwZW5kZW5jeV9fJywgX2dldF9fKTtcbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX19SZXdpcmVfXycsIF9zZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fc2V0X18nLCBfc2V0X18pO1xuICBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KCdfX3Jlc2V0X18nLCBfcmVzZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fUmVzZXREZXBlbmRlbmN5X18nLCBfcmVzZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fd2l0aF9fJywgX3dpdGhfXyk7XG59KSgpO1xuXG5mdW5jdGlvbiBfZ2V0X18odmFyaWFibGVOYW1lKSB7XG4gIGlmIChfUmV3aXJlZERhdGFfXyA9PT0gdW5kZWZpbmVkIHx8IF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBfZ2V0X29yaWdpbmFsX18odmFyaWFibGVOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmFsdWUgPSBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdO1xuXG4gICAgaWYgKHZhbHVlID09PSBJTlRFTlRJT05BTF9VTkRFRklORUQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX2dldF9vcmlnaW5hbF9fKHZhcmlhYmxlTmFtZSkge1xuICBzd2l0Y2ggKHZhcmlhYmxlTmFtZSkge1xuICAgIGNhc2UgJ2ZpbGVuYW1lV2l0aG91dExvYWRlcnMnOlxuICAgICAgcmV0dXJuIGZpbGVuYW1lV2l0aG91dExvYWRlcnM7XG5cbiAgICBjYXNlICdmaWxlbmFtZUhhc1NjaGVtYSc6XG4gICAgICByZXR1cm4gZmlsZW5hbWVIYXNTY2hlbWE7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBfYXNzaWduX18odmFyaWFibGVOYW1lLCB2YWx1ZSkge1xuICBpZiAoX1Jld2lyZWREYXRhX18gPT09IHVuZGVmaW5lZCB8fCBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gX3NldF9vcmlnaW5hbF9fKHZhcmlhYmxlTmFtZSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3NldF9vcmlnaW5hbF9fKHZhcmlhYmxlTmFtZSwgX3ZhbHVlKSB7XG4gIHN3aXRjaCAodmFyaWFibGVOYW1lKSB7fVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVfb3BlcmF0aW9uX18ob3BlcmF0aW9uLCB2YXJpYWJsZU5hbWUsIHByZWZpeCkge1xuICB2YXIgb2xkVmFsdWUgPSBfZ2V0X18odmFyaWFibGVOYW1lKTtcblxuICB2YXIgbmV3VmFsdWUgPSBvcGVyYXRpb24gPT09ICcrKycgPyBvbGRWYWx1ZSArIDEgOiBvbGRWYWx1ZSAtIDE7XG5cbiAgX2Fzc2lnbl9fKHZhcmlhYmxlTmFtZSwgbmV3VmFsdWUpO1xuXG4gIHJldHVybiBwcmVmaXggPyBuZXdWYWx1ZSA6IG9sZFZhbHVlO1xufVxuXG5mdW5jdGlvbiBfc2V0X18odmFyaWFibGVOYW1lLCB2YWx1ZSkge1xuICBpZiAoKHR5cGVvZiB2YXJpYWJsZU5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhcmlhYmxlTmFtZSkpID09PSAnb2JqZWN0Jykge1xuICAgIE9iamVjdC5rZXlzKHZhcmlhYmxlTmFtZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgX1Jld2lyZWREYXRhX19bbmFtZV0gPSB2YXJpYWJsZU5hbWVbbmFtZV07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPSBJTlRFTlRJT05BTF9VTkRFRklORUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX3Jlc2V0X18odmFyaWFibGVOYW1lKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF9yZXNldF9fKHZhcmlhYmxlTmFtZSkge1xuICBkZWxldGUgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXTtcbn1cblxuZnVuY3Rpb24gX3dpdGhfXyhvYmplY3QpIHtcbiAgdmFyIHJld2lyZWRWYXJpYWJsZU5hbWVzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgdmFyIHByZXZpb3VzVmFsdWVzID0ge307XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgcmV3aXJlZFZhcmlhYmxlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAodmFyaWFibGVOYW1lKSB7XG4gICAgICBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID0gcHJldmlvdXNWYWx1ZXNbdmFyaWFibGVOYW1lXTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICByZXdpcmVkVmFyaWFibGVOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYWJsZU5hbWUpIHtcbiAgICAgIHByZXZpb3VzVmFsdWVzW3ZhcmlhYmxlTmFtZV0gPSBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdO1xuICAgICAgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9IG9iamVjdFt2YXJpYWJsZU5hbWVdO1xuICAgIH0pO1xuICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuXG4gICAgaWYgKCEhcmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXN1bHQudGhlbihyZXNldCkuY2F0Y2gocmVzZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNldCgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbmV4cG9ydHMuX19nZXRfXyA9IF9nZXRfXztcbmV4cG9ydHMuX19HZXREZXBlbmRlbmN5X18gPSBfZ2V0X187XG5leHBvcnRzLl9fUmV3aXJlX18gPSBfc2V0X187XG5leHBvcnRzLl9fc2V0X18gPSBfc2V0X187XG5leHBvcnRzLl9fUmVzZXREZXBlbmRlbmN5X18gPSBfcmVzZXRfXztcbmV4cG9ydHMuX19SZXdpcmVBUElfXyA9IF9SZXdpcmVBUElfXztcbmV4cG9ydHMuZGVmYXVsdCA9IF9SZXdpcmVBUElfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9ob21lL3Rlcm1pbmFsdXNlci8uY29yZG92YS9+L3JlZGJveC1yZWFjdC9saWIvbGliLmpzXG4gKiogbW9kdWxlIGlkID0gMzU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzb3VyY2VNYXBwZWRTdGFja1RyYWNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNvdXJjZU1hcHBlZFN0YWNrVHJhY2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOy8qXG5cdCAqIHNvdXJjZW1hcHBlZC1zdGFja3RyYWNlLmpzXG5cdCAqIGNyZWF0ZWQgYnkgSmFtZXMgU2FsdGVyIDxpdGVyYXRpb25AZ21haWwuY29tPiAoMjAxNClcblx0ICpcblx0ICogaHR0cHM6Ly9naXRodWIuY29tL25vdm9jYWluZS9zb3VyY2VtYXBwZWQtc3RhY2t0cmFjZVxuXHQgKlxuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcblx0ICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuXHQgKi9cblxuXHQvKmdsb2JhbCBkZWZpbmUgKi9cblxuXHQvLyBub3RlIHdlIG9ubHkgaW5jbHVkZSBzb3VyY2UtbWFwLWNvbnN1bWVyLCBub3QgdGhlIHdob2xlIHNvdXJjZS1tYXAgbGlicmFyeSxcblx0Ly8gd2hpY2ggaW5jbHVkZXMgZ2VhciBmb3IgZ2VuZXJhdGluZyBzb3VyY2UgbWFwcyB0aGF0IHdlIGRvbid0IG5lZWRcblx0IShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW19fd2VicGFja19yZXF1aXJlX18oMSldLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IGZ1bmN0aW9uKHNvdXJjZV9tYXBfY29uc3VtZXIpIHtcblxuXHQgIHZhciBnbG9iYWxfbWFwRm9yVXJpID0ge307XG5cblx0ICAvKipcblx0ICAgKiBSZS1tYXAgZW50cmllcyBpbiBhIHN0YWNrdHJhY2UgdXNpbmcgc291cmNlbWFwcyBpZiBhdmFpbGFibGUuXG5cdCAgICpcblx0ICAgKiBAcGFyYW0ge0FycmF5fSBzdGFjayAtIEFycmF5IG9mIHN0cmluZ3MgZnJvbSB0aGUgYnJvd3NlcidzIHN0YWNrXG5cdCAgICogICAgICAgICAgICAgICAgICAgICAgICByZXByZXNlbnRhdGlvbi4gQ3VycmVudGx5IG9ubHkgQ2hyb21lXG5cdCAgICogICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgaXMgc3VwcG9ydGVkLlxuXHQgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgLSBDYWxsYmFjayBpbnZva2VkIHdpdGggdGhlIHRyYW5zZm9ybWVkIHN0YWNrdHJhY2Vcblx0ICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFuIEFycmF5IG9mIFN0cmluZ3MpIHBhc3NlZCBhcyB0aGUgZmlyc3Rcblx0ICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRcblx0ICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QuXG5cdCAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMuZmlsdGVyXSAtIEZpbHRlciBmdW5jdGlvbiBhcHBsaWVkIHRvIGVhY2ggc3RhY2tUcmFjZSBsaW5lLlxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaW5lcyB3aGljaCBkbyBub3QgcGFzcyB0aGUgZmlsdGVyIHdvbid0IGJlIHByb2Nlc3Nlc2QuXG5cdCAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5jYWNoZUdsb2JhbGx5XSAtIFdoZXRoZXIgdG8gY2FjaGUgc291cmNlbWFwcyBnbG9iYWxseSBhY3Jvc3MgbXVsdGlwbGUgY2FsbHMuXG5cdCAgICovXG5cdCAgdmFyIG1hcFN0YWNrVHJhY2UgPSBmdW5jdGlvbihzdGFjaywgZG9uZSwgb3B0cykge1xuXHQgICAgdmFyIGxpbmVzO1xuXHQgICAgdmFyIGxpbmU7XG5cdCAgICB2YXIgbWFwRm9yVXJpID0ge307XG5cdCAgICB2YXIgcm93cyA9IHt9O1xuXHQgICAgdmFyIGZpZWxkcztcblx0ICAgIHZhciB1cmk7XG5cdCAgICB2YXIgZXhwZWN0ZWRfZmllbGRzO1xuXHQgICAgdmFyIHJlZ2V4O1xuXHQgICAgdmFyIHNraXBfbGluZXM7XG5cblx0ICAgIHZhciBmZXRjaGVyID0gbmV3IEZldGNoZXIoZnVuY3Rpb24oKSB7XG5cdCAgICAgIHZhciByZXN1bHQgPSBwcm9jZXNzU291cmNlTWFwcyhsaW5lcywgcm93cywgZmV0Y2hlci5tYXBGb3JVcmkpO1xuXHQgICAgICBkb25lKHJlc3VsdCk7XG5cdCAgICB9LCBvcHRzKTtcblxuXHQgICAgaWYgKGlzQ2hyb21lT3JFZGdlKCkgfHwgaXNJRTExUGx1cygpKSB7XG5cdCAgICAgIHJlZ2V4ID0gL14gK2F0LitcXCgoLiopOihbMC05XSspOihbMC05XSspLztcblx0ICAgICAgZXhwZWN0ZWRfZmllbGRzID0gNDtcblx0ICAgICAgLy8gKHNraXAgZmlyc3QgbGluZSBjb250YWluaW5nIGV4Y2VwdGlvbiBtZXNzYWdlKVxuXHQgICAgICBza2lwX2xpbmVzID0gMTtcblx0ICAgIH0gZWxzZSBpZiAoaXNGaXJlZm94KCkgfHwgaXNTYWZhcmkoKSkge1xuXHQgICAgICByZWdleCA9IC9AKC4qKTooWzAtOV0rKTooWzAtOV0rKS87XG5cdCAgICAgIGV4cGVjdGVkX2ZpZWxkcyA9IDQ7XG5cdCAgICAgIHNraXBfbGluZXMgPSAwO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBicm93c2VyIDooXCIpO1xuXHQgICAgfVxuXG5cdCAgICBsaW5lcyA9IHN0YWNrLnNwbGl0KFwiXFxuXCIpLnNsaWNlKHNraXBfbGluZXMpO1xuXG5cdCAgICBmb3IgKHZhciBpPTA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICBsaW5lID0gbGluZXNbaV07XG5cdCAgICAgIGlmICggb3B0cyAmJiBvcHRzLmZpbHRlciAmJiAhb3B0cy5maWx0ZXIobGluZSkgKSBjb250aW51ZTtcblx0ICAgICAgXG5cdCAgICAgIGZpZWxkcyA9IGxpbmUubWF0Y2gocmVnZXgpO1xuXHQgICAgICBpZiAoZmllbGRzICYmIGZpZWxkcy5sZW5ndGggPT09IGV4cGVjdGVkX2ZpZWxkcykge1xuXHQgICAgICAgIHJvd3NbaV0gPSBmaWVsZHM7XG5cdCAgICAgICAgdXJpID0gZmllbGRzWzFdO1xuXHQgICAgICAgIGlmICghdXJpLm1hdGNoKC88YW5vbnltb3VzPi8pKSB7XG5cdCAgICAgICAgICBmZXRjaGVyLmZldGNoU2NyaXB0KHVyaSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIC8vIGlmIG9wdHMuY2FjaGVHbG9iYWxseSBzZXQsIGFsbCBtYXBzIGNvdWxkIGhhdmUgYmVlbiBjYWNoZWQgYWxyZWFkeSxcblx0ICAgIC8vIHRodXMgd2UgbmVlZCB0byBjYWxsIGRvbmUgY2FsbGJhY2sgcmlnaHQgYXdheVxuXHQgICAgaWYgKCBmZXRjaGVyLnNlbSA9PT0gMCApIHtcblx0ICAgICAgZmV0Y2hlci5kb25lKGZldGNoZXIubWFwRm9yVXJpKTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgdmFyIGlzQ2hyb21lT3JFZGdlID0gZnVuY3Rpb24oKSB7XG5cdCAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID4gLTE7XG5cdCAgfTtcblxuXHQgIHZhciBpc0ZpcmVmb3ggPSBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTE7XG5cdCAgfTsgIFxuXG5cdCAgdmFyIGlzU2FmYXJpID0gZnVuY3Rpb24oKSB7XG5cdCAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NhZmFyaScpID4gLTE7XG5cdCAgfTtcblx0XHRcdFxuXHQgIHZhciBpc0lFMTFQbHVzID0gZnVuY3Rpb24oKSB7XG5cdCAgIFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50TW9kZSAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gMTE7XG5cdCAgfTtcblxuXHQgIHZhciBGZXRjaGVyID0gZnVuY3Rpb24oZG9uZSwgb3B0cykge1xuXHQgICAgdGhpcy5zZW0gPSAwO1xuXHQgICAgdGhpcy5tYXBGb3JVcmkgPSBvcHRzICYmIG9wdHMuY2FjaGVHbG9iYWxseSA/IGdsb2JhbF9tYXBGb3JVcmkgOiB7fTtcblx0ICAgIHRoaXMuZG9uZSA9IGRvbmU7XG5cdCAgfTtcblxuXHQgIEZldGNoZXIucHJvdG90eXBlLmZldGNoU2NyaXB0ID0gZnVuY3Rpb24odXJpKSB7XG5cdCAgICBpZiAoISh1cmkgaW4gdGhpcy5tYXBGb3JVcmkpKSB7XG5cdCAgICAgIHRoaXMuc2VtKys7XG5cdCAgICAgIHRoaXMubWFwRm9yVXJpW3VyaV0gPSBudWxsO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgeGhyID0gY3JlYXRlWE1MSFRUUE9iamVjdCgpO1xuXHQgICAgdmFyIHRoYXQgPSB0aGlzO1xuXHQgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcblx0ICAgICAgdGhhdC5vblNjcmlwdExvYWQuY2FsbCh0aGF0LCBlLCB1cmkpO1xuXHQgICAgfTtcblx0ICAgIHhoci5vcGVuKFwiR0VUXCIsIHVyaSwgdHJ1ZSk7XG5cdCAgICB4aHIuc2VuZCgpO1xuXHQgIH07XG5cblx0ICB2YXIgYWJzVXJsUmVnZXggPSBuZXcgUmVnRXhwKCdeKD86W2Etel0rOik/Ly8nLCAnaScpO1xuXG5cdCAgRmV0Y2hlci5wcm90b3R5cGUub25TY3JpcHRMb2FkID0gZnVuY3Rpb24oZSwgdXJpKSB7XG5cdCAgICBpZiAoZS50YXJnZXQucmVhZHlTdGF0ZSAhPT0gNCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIGlmIChlLnRhcmdldC5zdGF0dXMgPT09IDIwMCB8fFxuXHQgICAgICAodXJpLnNsaWNlKDAsIDcpID09PSBcImZpbGU6Ly9cIiAmJiBlLnRhcmdldC5zdGF0dXMgPT09IDApKVxuXHQgICAge1xuXHQgICAgICAvLyBmaW5kIC5tYXAgaW4gZmlsZS5cblx0ICAgICAgLy9cblx0ICAgICAgLy8gYXR0ZW1wdCB0byBmaW5kIGl0IGF0IHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZmlsZSwgYnV0IHRvbGVyYXRlIHRyYWlsaW5nXG5cdCAgICAgIC8vIHdoaXRlc3BhY2UgaW5zZXJ0ZWQgYnkgc29tZSBwYWNrZXJzLlxuXHQgICAgICB2YXIgbWF0Y2ggPSBlLnRhcmdldC5yZXNwb25zZVRleHQubWF0Y2goXCIvLyMgW3Ndb3VyY2VNYXBwaW5nVVJMPSguKilbXFxcXHNdKiRcIiwgXCJtXCIpO1xuXHQgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID09PSAyKSB7XG5cdCAgICAgICAgLy8gZ2V0IHRoZSBtYXBcblx0ICAgICAgICB2YXIgbWFwVXJpID0gbWF0Y2hbMV07XG5cblx0ICAgICAgICB2YXIgZW1iZWRkZWRTb3VyY2VNYXAgPSBtYXBVcmkubWF0Y2goXCJkYXRhOmFwcGxpY2F0aW9uL2pzb247KGNoYXJzZXQ9W147XSs7KT9iYXNlNjQsKC4qKVwiKTtcblxuXHQgICAgICAgIGlmIChlbWJlZGRlZFNvdXJjZU1hcCAmJiBlbWJlZGRlZFNvdXJjZU1hcFsyXSkge1xuXHQgICAgICAgICAgdGhpcy5tYXBGb3JVcmlbdXJpXSA9IG5ldyBzb3VyY2VfbWFwX2NvbnN1bWVyLlNvdXJjZU1hcENvbnN1bWVyKGF0b2IoZW1iZWRkZWRTb3VyY2VNYXBbMl0pKTtcblx0ICAgICAgICAgIHRoaXMuZG9uZSh0aGlzLm1hcEZvclVyaSk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGlmICghYWJzVXJsUmVnZXgudGVzdChtYXBVcmkpKSB7XG5cdCAgICAgICAgICAgIC8vIHJlbGF0aXZlIHVybDsgYWNjb3JkaW5nIHRvIHNvdXJjZW1hcHMgc3BlYyBpcyAnc291cmNlIG9yaWdpbidcblx0ICAgICAgICAgICAgdmFyIG9yaWdpbjtcblx0ICAgICAgICAgICAgdmFyIGxhc3RTbGFzaCA9IHVyaS5sYXN0SW5kZXhPZignLycpO1xuXHQgICAgICAgICAgICBpZiAobGFzdFNsYXNoICE9PSAtMSkge1xuXHQgICAgICAgICAgICAgIG9yaWdpbiA9IHVyaS5zbGljZSgwLCBsYXN0U2xhc2ggKyAxKTtcblx0ICAgICAgICAgICAgICBtYXBVcmkgPSBvcmlnaW4gKyBtYXBVcmk7XG5cdCAgICAgICAgICAgICAgLy8gbm90ZSBpZiBsYXN0U2xhc2ggPT09IC0xLCBhY3R1YWwgc2NyaXB0IHVyaSBoYXMgbm8gc2xhc2hcblx0ICAgICAgICAgICAgICAvLyBzb21laG93LCBzbyBubyB3YXkgdG8gdXNlIGl0IGFzIGEgcHJlZml4Li4uIHdlIGdpdmUgdXAgYW5kIHRyeVxuXHQgICAgICAgICAgICAgIC8vIGFzIGFic29sdXRlXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgdmFyIHhock1hcCA9IGNyZWF0ZVhNTEhUVFBPYmplY3QoKTtcblx0ICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcblx0ICAgICAgICAgIHhock1hcC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgaWYgKHhock1hcC5yZWFkeVN0YXRlID09PSA0KSB7XG5cdCAgICAgICAgICAgICAgdGhhdC5zZW0tLTtcblx0ICAgICAgICAgICAgICBpZiAoeGhyTWFwLnN0YXR1cyA9PT0gMjAwIHx8XG5cdCAgICAgICAgICAgICAgICAobWFwVXJpLnNsaWNlKDAsIDcpID09PSBcImZpbGU6Ly9cIiAmJiB4aHJNYXAuc3RhdHVzID09PSAwKSkge1xuXHQgICAgICAgICAgICAgICAgdGhhdC5tYXBGb3JVcmlbdXJpXSA9IG5ldyBzb3VyY2VfbWFwX2NvbnN1bWVyLlNvdXJjZU1hcENvbnN1bWVyKHhock1hcC5yZXNwb25zZVRleHQpO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICBpZiAodGhhdC5zZW0gPT09IDApIHtcblx0ICAgICAgICAgICAgICAgIHRoYXQuZG9uZSh0aGF0Lm1hcEZvclVyaSk7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICB4aHJNYXAub3BlbihcIkdFVFwiLCBtYXBVcmksIHRydWUpO1xuXHQgICAgICAgICAgeGhyTWFwLnNlbmQoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgLy8gbm8gbWFwXG5cdCAgICAgICAgdGhpcy5zZW0tLTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gSFRUUCBlcnJvciBmZXRjaGluZyB1cmkgb2YgdGhlIHNjcmlwdFxuXHQgICAgICB0aGlzLnNlbS0tO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5zZW0gPT09IDApIHtcblx0ICAgICAgdGhpcy5kb25lKHRoaXMubWFwRm9yVXJpKTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgdmFyIHByb2Nlc3NTb3VyY2VNYXBzID0gZnVuY3Rpb24obGluZXMsIHJvd3MsIG1hcEZvclVyaSkge1xuXHQgICAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgICAgdmFyIG1hcDtcblx0ICAgIGZvciAodmFyIGk9MDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciByb3cgPSByb3dzW2ldO1xuXHQgICAgICBpZiAocm93KSB7XG5cdCAgICAgICAgdmFyIHVyaSA9IHJvd1sxXTtcblx0ICAgICAgICB2YXIgbGluZSA9IHBhcnNlSW50KHJvd1syXSwgMTApO1xuXHQgICAgICAgIHZhciBjb2x1bW4gPSBwYXJzZUludChyb3dbM10sIDEwKTtcblx0ICAgICAgICBtYXAgPSBtYXBGb3JVcmlbdXJpXTtcblxuXHQgICAgICAgIGlmIChtYXApIHtcblx0ICAgICAgICAgIC8vIHdlIHRoaW5rIHdlIGhhdmUgYSBtYXAgZm9yIHRoYXQgdXJpLiBjYWxsIHNvdXJjZS1tYXAgbGlicmFyeVxuXHQgICAgICAgICAgdmFyIG9yaWdQb3MgPSBtYXAub3JpZ2luYWxQb3NpdGlvbkZvcihcblx0ICAgICAgICAgICAgeyBsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbiB9KTtcblx0ICAgICAgICAgIHJlc3VsdC5wdXNoKGZvcm1hdE9yaWdpbmFsUG9zaXRpb24ob3JpZ1Bvcy5zb3VyY2UsXG5cdCAgICAgICAgICAgIG9yaWdQb3MubGluZSwgb3JpZ1Bvcy5jb2x1bW4sIG9yaWdQb3MubmFtZSB8fCBvcmlnTmFtZShsaW5lc1tpXSkpKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gd2UgY2FuJ3QgZmluZCBhIG1hcCBmb3IgdGhhdCB1cmwsIGJ1dCB3ZSBwYXJzZWQgdGhlIHJvdy5cblx0ICAgICAgICAgIC8vIHJlZm9ybWF0IHVuY2hhbmdlZCBsaW5lIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBzb3VyY2VtYXBwZWRcblx0ICAgICAgICAgIC8vIGxpbmVzLlxuXHQgICAgICAgICAgcmVzdWx0LnB1c2goZm9ybWF0T3JpZ2luYWxQb3NpdGlvbih1cmksIGxpbmUsIGNvbHVtbiwgb3JpZ05hbWUobGluZXNbaV0pKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIC8vIHdlIHdlcmVuJ3QgYWJsZSB0byBwYXJzZSB0aGUgcm93LCBwdXNoIGJhY2sgd2hhdCB3ZSB3ZXJlIGdpdmVuXG5cdCAgICAgICAgcmVzdWx0LnB1c2gobGluZXNbaV0pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfTtcblxuXHQgIGZ1bmN0aW9uIG9yaWdOYW1lKG9yaWdMaW5lKSB7XG5cdCAgICB2YXIgbWF0Y2ggPSBTdHJpbmcob3JpZ0xpbmUpLm1hdGNoKChpc0Nocm9tZU9yRWRnZSgpIHx8IGlzSUUxMVBsdXMoKSkgP1xuXHQgICAgICAvICthdCArKFteIF0qKS4qLyA6XG5cdCAgICAgIC8oW15AXSopQC4qLyk7XG5cdCAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV07XG5cdCAgfVxuXG5cdCAgdmFyIGZvcm1hdE9yaWdpbmFsUG9zaXRpb24gPSBmdW5jdGlvbihzb3VyY2UsIGxpbmUsIGNvbHVtbiwgbmFtZSkge1xuXHQgICAgLy8gbWltaWMgY2hyb21lJ3MgZm9ybWF0XG5cdCAgICByZXR1cm4gXCIgICAgYXQgXCIgKyAobmFtZSA/IG5hbWUgOiBcIih1bmtub3duKVwiKSArXG5cdCAgICAgIFwiIChcIiArIHNvdXJjZSArIFwiOlwiICsgbGluZSArIFwiOlwiICsgY29sdW1uICsgXCIpXCI7XG5cdCAgfTtcblxuXHQgIC8vIHhtbGh0dHByZXF1ZXN0IGJvaWxlcnBsYXRlXG5cdCAgdmFyIFhNTEh0dHBGYWN0b3JpZXMgPSBbXG5cdFx0ZnVuY3Rpb24gKCkge3JldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTt9LFxuXHRcdGZ1bmN0aW9uICgpIHtyZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoXCJNc3htbDIuWE1MSFRUUFwiKTt9LFxuXHRcdGZ1bmN0aW9uICgpIHtyZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoXCJNc3htbDMuWE1MSFRUUFwiKTt9LFxuXHRcdGZ1bmN0aW9uICgpIHtyZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTt9XG5cdCAgXTtcblxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVhNTEhUVFBPYmplY3QoKSB7XG5cdCAgICAgIHZhciB4bWxodHRwID0gZmFsc2U7XG5cdCAgICAgIGZvciAodmFyIGk9MDtpPFhNTEh0dHBGYWN0b3JpZXMubGVuZ3RoO2krKykge1xuXHQgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICB4bWxodHRwID0gWE1MSHR0cEZhY3Rvcmllc1tpXSgpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICBjb250aW51ZTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGJyZWFrO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB4bWxodHRwO1xuXHQgIH1cblxuXHQgIHJldHVybiB7XG5cdCAgICBtYXBTdGFja1RyYWNlOiBtYXBTdGFja1RyYWNlXG5cdCAgfVxuXHR9LmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG5cblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cblx0Lypcblx0ICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcblx0ICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG5cdCAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2Vcblx0ICovXG5cblx0dmFyIHV0aWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgYmluYXJ5U2VhcmNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0dmFyIEFycmF5U2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KS5BcnJheVNldDtcblx0dmFyIGJhc2U2NFZMUSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBxdWlja1NvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLnF1aWNrU29ydDtcblxuXHRmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwKSB7XG5cdCAgdmFyIHNvdXJjZU1hcCA9IGFTb3VyY2VNYXA7XG5cdCAgaWYgKHR5cGVvZiBhU291cmNlTWFwID09PSAnc3RyaW5nJykge1xuXHQgICAgc291cmNlTWFwID0gSlNPTi5wYXJzZShhU291cmNlTWFwLnJlcGxhY2UoL15cXClcXF1cXH0nLywgJycpKTtcblx0ICB9XG5cblx0ICByZXR1cm4gc291cmNlTWFwLnNlY3Rpb25zICE9IG51bGxcblx0ICAgID8gbmV3IEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcihzb3VyY2VNYXApXG5cdCAgICA6IG5ldyBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCk7XG5cdH1cblxuXHRTb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwID0gZnVuY3Rpb24oYVNvdXJjZU1hcCkge1xuXHQgIHJldHVybiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuXHQgKi9cblx0U291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuXHQvLyBgX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kIGBfX29yaWdpbmFsTWFwcGluZ3NgIGFyZSBhcnJheXMgdGhhdCBob2xkIHRoZVxuXHQvLyBwYXJzZWQgbWFwcGluZyBjb29yZGluYXRlcyBmcm9tIHRoZSBzb3VyY2UgbWFwJ3MgXCJtYXBwaW5nc1wiIGF0dHJpYnV0ZS4gVGhleVxuXHQvLyBhcmUgbGF6aWx5IGluc3RhbnRpYXRlZCwgYWNjZXNzZWQgdmlhIHRoZSBgX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcblx0Ly8gYF9vcmlnaW5hbE1hcHBpbmdzYCBnZXR0ZXJzIHJlc3BlY3RpdmVseSwgYW5kIHdlIG9ubHkgcGFyc2UgdGhlIG1hcHBpbmdzXG5cdC8vIGFuZCBjcmVhdGUgdGhlc2UgYXJyYXlzIG9uY2UgcXVlcmllZCBmb3IgYSBzb3VyY2UgbG9jYXRpb24uIFdlIGp1bXAgdGhyb3VnaFxuXHQvLyB0aGVzZSBob29wcyBiZWNhdXNlIHRoZXJlIGNhbiBiZSBtYW55IHRob3VzYW5kcyBvZiBtYXBwaW5ncywgYW5kIHBhcnNpbmdcblx0Ly8gdGhlbSBpcyBleHBlbnNpdmUsIHNvIHdlIG9ubHkgd2FudCB0byBkbyBpdCBpZiB3ZSBtdXN0LlxuXHQvL1xuXHQvLyBFYWNoIG9iamVjdCBpbiB0aGUgYXJyYXlzIGlzIG9mIHRoZSBmb3JtOlxuXHQvL1xuXHQvLyAgICAge1xuXHQvLyAgICAgICBnZW5lcmF0ZWRMaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBjb2RlLFxuXHQvLyAgICAgICBnZW5lcmF0ZWRDb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgY29kZSxcblx0Ly8gICAgICAgc291cmNlOiBUaGUgcGF0aCB0byB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGUgdGhhdCBnZW5lcmF0ZWQgdGhpc1xuXHQvLyAgICAgICAgICAgICAgIGNodW5rIG9mIGNvZGUsXG5cdC8vICAgICAgIG9yaWdpbmFsTGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UgdGhhdFxuXHQvLyAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRzIHRvIHRoaXMgY2h1bmsgb2YgZ2VuZXJhdGVkIGNvZGUsXG5cdC8vICAgICAgIG9yaWdpbmFsQ29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlIHRoYXRcblx0Ly8gICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRzIHRvIHRoaXMgY2h1bmsgb2YgZ2VuZXJhdGVkIGNvZGUsXG5cdC8vICAgICAgIG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBvcmlnaW5hbCBzeW1ib2wgd2hpY2ggZ2VuZXJhdGVkIHRoaXMgY2h1bmsgb2Zcblx0Ly8gICAgICAgICAgICAgY29kZS5cblx0Ly8gICAgIH1cblx0Ly9cblx0Ly8gQWxsIHByb3BlcnRpZXMgZXhjZXB0IGZvciBgZ2VuZXJhdGVkTGluZWAgYW5kIGBnZW5lcmF0ZWRDb2x1bW5gIGNhbiBiZVxuXHQvLyBgbnVsbGAuXG5cdC8vXG5cdC8vIGBfZ2VuZXJhdGVkTWFwcGluZ3NgIGlzIG9yZGVyZWQgYnkgdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMuXG5cdC8vXG5cdC8vIGBfb3JpZ2luYWxNYXBwaW5nc2AgaXMgb3JkZXJlZCBieSB0aGUgb3JpZ2luYWwgcG9zaXRpb25zLlxuXG5cdFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fX2dlbmVyYXRlZE1hcHBpbmdzID0gbnVsbDtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ19nZW5lcmF0ZWRNYXBwaW5ncycsIHtcblx0ICBnZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgIGlmICghdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzKSB7XG5cdCAgICAgIHRoaXMuX3BhcnNlTWFwcGluZ3ModGhpcy5fbWFwcGluZ3MsIHRoaXMuc291cmNlUm9vdCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3M7XG5cdCAgfVxuXHR9KTtcblxuXHRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX19vcmlnaW5hbE1hcHBpbmdzID0gbnVsbDtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ19vcmlnaW5hbE1hcHBpbmdzJywge1xuXHQgIGdldDogZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKCF0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncykge1xuXHQgICAgICB0aGlzLl9wYXJzZU1hcHBpbmdzKHRoaXMuX21hcHBpbmdzLCB0aGlzLnNvdXJjZVJvb3QpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gdGhpcy5fX29yaWdpbmFsTWFwcGluZ3M7XG5cdCAgfVxuXHR9KTtcblxuXHRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IgPVxuXHQgIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IoYVN0ciwgaW5kZXgpIHtcblx0ICAgIHZhciBjID0gYVN0ci5jaGFyQXQoaW5kZXgpO1xuXHQgICAgcmV0dXJuIGMgPT09IFwiO1wiIHx8IGMgPT09IFwiLFwiO1xuXHQgIH07XG5cblx0LyoqXG5cdCAqIFBhcnNlIHRoZSBtYXBwaW5ncyBpbiBhIHN0cmluZyBpbiB0byBhIGRhdGEgc3RydWN0dXJlIHdoaWNoIHdlIGNhbiBlYXNpbHlcblx0ICogcXVlcnkgKHRoZSBvcmRlcmVkIGFycmF5cyBpbiB0aGUgYHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG5cdCAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG5cdCAqL1xuXHRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3BhcnNlTWFwcGluZ3MgPVxuXHQgIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcihcIlN1YmNsYXNzZXMgbXVzdCBpbXBsZW1lbnQgX3BhcnNlTWFwcGluZ3NcIik7XG5cdCAgfTtcblxuXHRTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVIgPSAxO1xuXHRTb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUiA9IDI7XG5cblx0U291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQgPSAxO1xuXHRTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cblx0LyoqXG5cdCAqIEl0ZXJhdGUgb3ZlciBlYWNoIG1hcHBpbmcgYmV0d2VlbiBhbiBvcmlnaW5hbCBzb3VyY2UvbGluZS9jb2x1bW4gYW5kIGFcblx0ICogZ2VuZXJhdGVkIGxpbmUvY29sdW1uIGluIHRoaXMgc291cmNlIG1hcC5cblx0ICpcblx0ICogQHBhcmFtIEZ1bmN0aW9uIGFDYWxsYmFja1xuXHQgKiAgICAgICAgVGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggZWFjaCBtYXBwaW5nLlxuXHQgKiBAcGFyYW0gT2JqZWN0IGFDb250ZXh0XG5cdCAqICAgICAgICBPcHRpb25hbC4gSWYgc3BlY2lmaWVkLCB0aGlzIG9iamVjdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBgdGhpc2AgZXZlcnlcblx0ICogICAgICAgIHRpbWUgdGhhdCBgYUNhbGxiYWNrYCBpcyBjYWxsZWQuXG5cdCAqIEBwYXJhbSBhT3JkZXJcblx0ICogICAgICAgIEVpdGhlciBgU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSYCBvclxuXHQgKiAgICAgICAgYFNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSYC4gU3BlY2lmaWVzIHdoZXRoZXIgeW91IHdhbnQgdG9cblx0ICogICAgICAgIGl0ZXJhdGUgb3ZlciB0aGUgbWFwcGluZ3Mgc29ydGVkIGJ5IHRoZSBnZW5lcmF0ZWQgZmlsZSdzIGxpbmUvY29sdW1uXG5cdCAqICAgICAgICBvcmRlciBvciB0aGUgb3JpZ2luYWwncyBzb3VyY2UvbGluZS9jb2x1bW4gb3JkZXIsIHJlc3BlY3RpdmVseS4gRGVmYXVsdHMgdG9cblx0ICogICAgICAgIGBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVJgLlxuXHQgKi9cblx0U291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmVhY2hNYXBwaW5nID1cblx0ICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9lYWNoTWFwcGluZyhhQ2FsbGJhY2ssIGFDb250ZXh0LCBhT3JkZXIpIHtcblx0ICAgIHZhciBjb250ZXh0ID0gYUNvbnRleHQgfHwgbnVsbDtcblx0ICAgIHZhciBvcmRlciA9IGFPcmRlciB8fCBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVI7XG5cblx0ICAgIHZhciBtYXBwaW5ncztcblx0ICAgIHN3aXRjaCAob3JkZXIpIHtcblx0ICAgIGNhc2UgU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSOlxuXHQgICAgICBtYXBwaW5ncyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzO1xuXHQgICAgICBicmVhaztcblx0ICAgIGNhc2UgU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVI6XG5cdCAgICAgIG1hcHBpbmdzID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5ncztcblx0ICAgICAgYnJlYWs7XG5cdCAgICBkZWZhdWx0OlxuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIG9yZGVyIG9mIGl0ZXJhdGlvbi5cIik7XG5cdCAgICB9XG5cblx0ICAgIHZhciBzb3VyY2VSb290ID0gdGhpcy5zb3VyY2VSb290O1xuXHQgICAgbWFwcGluZ3MubWFwKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG5cdCAgICAgIHZhciBzb3VyY2UgPSBtYXBwaW5nLnNvdXJjZSA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9zb3VyY2VzLmF0KG1hcHBpbmcuc291cmNlKTtcblx0ICAgICAgaWYgKHNvdXJjZSAhPSBudWxsICYmIHNvdXJjZVJvb3QgIT0gbnVsbCkge1xuXHQgICAgICAgIHNvdXJjZSA9IHV0aWwuam9pbihzb3VyY2VSb290LCBzb3VyY2UpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgc291cmNlOiBzb3VyY2UsXG5cdCAgICAgICAgZ2VuZXJhdGVkTGluZTogbWFwcGluZy5nZW5lcmF0ZWRMaW5lLFxuXHQgICAgICAgIGdlbmVyYXRlZENvbHVtbjogbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4sXG5cdCAgICAgICAgb3JpZ2luYWxMaW5lOiBtYXBwaW5nLm9yaWdpbmFsTGluZSxcblx0ICAgICAgICBvcmlnaW5hbENvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtbixcblx0ICAgICAgICBuYW1lOiBtYXBwaW5nLm5hbWUgPT09IG51bGwgPyBudWxsIDogdGhpcy5fbmFtZXMuYXQobWFwcGluZy5uYW1lKVxuXHQgICAgICB9O1xuXHQgICAgfSwgdGhpcykuZm9yRWFjaChhQ2FsbGJhY2ssIGNvbnRleHQpO1xuXHQgIH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBvcmlnaW5hbCBzb3VyY2UsXG5cdCAqIGxpbmUsIGFuZCBjb2x1bW4gcHJvdmlkZWQuIElmIG5vIGNvbHVtbiBpcyBwcm92aWRlZCwgcmV0dXJucyBhbGwgbWFwcGluZ3Ncblx0ICogY29ycmVzcG9uZGluZyB0byBhIGVpdGhlciB0aGUgbGluZSB3ZSBhcmUgc2VhcmNoaW5nIGZvciBvciB0aGUgbmV4dFxuXHQgKiBjbG9zZXN0IGxpbmUgdGhhdCBoYXMgYW55IG1hcHBpbmdzLiBPdGhlcndpc2UsIHJldHVybnMgYWxsIG1hcHBpbmdzXG5cdCAqIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGxpbmUgYW5kIGVpdGhlciB0aGUgY29sdW1uIHdlIGFyZSBzZWFyY2hpbmcgZm9yXG5cdCAqIG9yIHRoZSBuZXh0IGNsb3Nlc3QgY29sdW1uIHRoYXQgaGFzIGFueSBvZmZzZXRzLlxuXHQgKlxuXHQgKiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cdCAqXG5cdCAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuXHQgKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG5cdCAqICAgLSBjb2x1bW46IE9wdGlvbmFsLiB0aGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLlxuXHQgKlxuXHQgKiBhbmQgYW4gYXJyYXkgb2Ygb2JqZWN0cyBpcyByZXR1cm5lZCwgZWFjaCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cblx0ICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqL1xuXHRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuYWxsR2VuZXJhdGVkUG9zaXRpb25zRm9yID1cblx0ICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IoYUFyZ3MpIHtcblx0ICAgIHZhciBsaW5lID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyk7XG5cblx0ICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gZXhhY3QgbWF0Y2gsIEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9maW5kTWFwcGluZ1xuXHQgICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGNsb3Nlc3QgbWFwcGluZyBsZXNzIHRoYW4gdGhlIG5lZWRsZS4gQnlcblx0ICAgIC8vIHNldHRpbmcgbmVlZGxlLm9yaWdpbmFsQ29sdW1uIHRvIDAsIHdlIHRodXMgZmluZCB0aGUgbGFzdCBtYXBwaW5nIGZvclxuXHQgICAgLy8gdGhlIGdpdmVuIGxpbmUsIHByb3ZpZGVkIHN1Y2ggYSBtYXBwaW5nIGV4aXN0cy5cblx0ICAgIHZhciBuZWVkbGUgPSB7XG5cdCAgICAgIHNvdXJjZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKSxcblx0ICAgICAgb3JpZ2luYWxMaW5lOiBsaW5lLFxuXHQgICAgICBvcmlnaW5hbENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nLCAwKVxuXHQgICAgfTtcblxuXHQgICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsKSB7XG5cdCAgICAgIG5lZWRsZS5zb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuc291cmNlUm9vdCwgbmVlZGxlLnNvdXJjZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoIXRoaXMuX3NvdXJjZXMuaGFzKG5lZWRsZS5zb3VyY2UpKSB7XG5cdCAgICAgIHJldHVybiBbXTtcblx0ICAgIH1cblx0ICAgIG5lZWRsZS5zb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmluZGV4T2YobmVlZGxlLnNvdXJjZSk7XG5cblx0ICAgIHZhciBtYXBwaW5ncyA9IFtdO1xuXG5cdCAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhuZWVkbGUsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5hbExpbmVcIixcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luYWxDb2x1bW5cIixcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQpO1xuXHQgICAgaWYgKGluZGV4ID49IDApIHtcblx0ICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzW2luZGV4XTtcblxuXHQgICAgICBpZiAoYUFyZ3MuY29sdW1uID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICB2YXIgb3JpZ2luYWxMaW5lID0gbWFwcGluZy5vcmlnaW5hbExpbmU7XG5cblx0ICAgICAgICAvLyBJdGVyYXRlIHVudGlsIGVpdGhlciB3ZSBydW4gb3V0IG9mIG1hcHBpbmdzLCBvciB3ZSBydW4gaW50b1xuXHQgICAgICAgIC8vIGEgbWFwcGluZyBmb3IgYSBkaWZmZXJlbnQgbGluZSB0aGFuIHRoZSBvbmUgd2UgZm91bmQuIFNpbmNlXG5cdCAgICAgICAgLy8gbWFwcGluZ3MgYXJlIHNvcnRlZCwgdGhpcyBpcyBndWFyYW50ZWVkIHRvIGZpbmQgYWxsIG1hcHBpbmdzIGZvclxuXHQgICAgICAgIC8vIHRoZSBsaW5lIHdlIGZvdW5kLlxuXHQgICAgICAgIHdoaWxlIChtYXBwaW5nICYmIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSBvcmlnaW5hbExpbmUpIHtcblx0ICAgICAgICAgIG1hcHBpbmdzLnB1c2goe1xuXHQgICAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkTGluZScsIG51bGwpLFxuXHQgICAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcblx0ICAgICAgICAgICAgbGFzdENvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2xhc3RHZW5lcmF0ZWRDb2x1bW4nLCBudWxsKVxuXHQgICAgICAgICAgfSk7XG5cblx0ICAgICAgICAgIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzWysraW5kZXhdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgb3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG5cdCAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCBlaXRoZXIgd2UgcnVuIG91dCBvZiBtYXBwaW5ncywgb3Igd2UgcnVuIGludG9cblx0ICAgICAgICAvLyBhIG1hcHBpbmcgZm9yIGEgZGlmZmVyZW50IGxpbmUgdGhhbiB0aGUgb25lIHdlIHdlcmUgc2VhcmNoaW5nIGZvci5cblx0ICAgICAgICAvLyBTaW5jZSBtYXBwaW5ncyBhcmUgc29ydGVkLCB0aGlzIGlzIGd1YXJhbnRlZWQgdG8gZmluZCBhbGwgbWFwcGluZ3MgZm9yXG5cdCAgICAgICAgLy8gdGhlIGxpbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IuXG5cdCAgICAgICAgd2hpbGUgKG1hcHBpbmcgJiZcblx0ICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09IGxpbmUgJiZcblx0ICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9PSBvcmlnaW5hbENvbHVtbikge1xuXHQgICAgICAgICAgbWFwcGluZ3MucHVzaCh7XG5cdCAgICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG5cdCAgICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuXHQgICAgICAgICAgICBsYXN0Q29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbGFzdEdlbmVyYXRlZENvbHVtbicsIG51bGwpXG5cdCAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbKytpbmRleF07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBtYXBwaW5ncztcblx0ICB9O1xuXG5cdGV4cG9ydHMuU291cmNlTWFwQ29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuXHQvKipcblx0ICogQSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyIGluc3RhbmNlIHJlcHJlc2VudHMgYSBwYXJzZWQgc291cmNlIG1hcCB3aGljaCB3ZSBjYW5cblx0ICogcXVlcnkgZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBvcmlnaW5hbCBmaWxlIHBvc2l0aW9ucyBieSBnaXZpbmcgaXQgYSBmaWxlXG5cdCAqIHBvc2l0aW9uIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLlxuXHQgKlxuXHQgKiBUaGUgb25seSBwYXJhbWV0ZXIgaXMgdGhlIHJhdyBzb3VyY2UgbWFwIChlaXRoZXIgYXMgYSBKU09OIHN0cmluZywgb3Jcblx0ICogYWxyZWFkeSBwYXJzZWQgdG8gYW4gb2JqZWN0KS4gQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzb3VyY2UgbWFwcyBoYXZlIHRoZVxuXHQgKiBmb2xsb3dpbmcgYXR0cmlidXRlczpcblx0ICpcblx0ICogICAtIHZlcnNpb246IFdoaWNoIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXAgc3BlYyB0aGlzIG1hcCBpcyBmb2xsb3dpbmcuXG5cdCAqICAgLSBzb3VyY2VzOiBBbiBhcnJheSBvZiBVUkxzIHRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMuXG5cdCAqICAgLSBuYW1lczogQW4gYXJyYXkgb2YgaWRlbnRpZmllcnMgd2hpY2ggY2FuIGJlIHJlZmVycmVuY2VkIGJ5IGluZGl2aWR1YWwgbWFwcGluZ3MuXG5cdCAqICAgLSBzb3VyY2VSb290OiBPcHRpb25hbC4gVGhlIFVSTCByb290IGZyb20gd2hpY2ggYWxsIHNvdXJjZXMgYXJlIHJlbGF0aXZlLlxuXHQgKiAgIC0gc291cmNlc0NvbnRlbnQ6IE9wdGlvbmFsLiBBbiBhcnJheSBvZiBjb250ZW50cyBvZiB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGVzLlxuXHQgKiAgIC0gbWFwcGluZ3M6IEEgc3RyaW5nIG9mIGJhc2U2NCBWTFFzIHdoaWNoIGNvbnRhaW4gdGhlIGFjdHVhbCBtYXBwaW5ncy5cblx0ICogICAtIGZpbGU6IE9wdGlvbmFsLiBUaGUgZ2VuZXJhdGVkIGZpbGUgdGhpcyBzb3VyY2UgbWFwIGlzIGFzc29jaWF0ZWQgd2l0aC5cblx0ICpcblx0ICogSGVyZSBpcyBhbiBleGFtcGxlIHNvdXJjZSBtYXAsIHRha2VuIGZyb20gdGhlIHNvdXJjZSBtYXAgc3BlY1swXTpcblx0ICpcblx0ICogICAgIHtcblx0ICogICAgICAgdmVyc2lvbiA6IDMsXG5cdCAqICAgICAgIGZpbGU6IFwib3V0LmpzXCIsXG5cdCAqICAgICAgIHNvdXJjZVJvb3QgOiBcIlwiLFxuXHQgKiAgICAgICBzb3VyY2VzOiBbXCJmb28uanNcIiwgXCJiYXIuanNcIl0sXG5cdCAqICAgICAgIG5hbWVzOiBbXCJzcmNcIiwgXCJtYXBzXCIsIFwiYXJlXCIsIFwiZnVuXCJdLFxuXHQgKiAgICAgICBtYXBwaW5nczogXCJBQSxBQjs7QUJDREU7XCJcblx0ICogICAgIH1cblx0ICpcblx0ICogWzBdOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFVMVJHQWVoUXdSeXBVVG92RjFLUmxwaU9GemUwYi1fMmdjNmZBSDBLWTBrL2VkaXQ/cGxpPTEjXG5cdCAqL1xuXHRmdW5jdGlvbiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXApIHtcblx0ICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcblx0ICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG5cdCAgICBzb3VyY2VNYXAgPSBKU09OLnBhcnNlKGFTb3VyY2VNYXAucmVwbGFjZSgvXlxcKVxcXVxcfScvLCAnJykpO1xuXHQgIH1cblxuXHQgIHZhciB2ZXJzaW9uID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAndmVyc2lvbicpO1xuXHQgIHZhciBzb3VyY2VzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlcycpO1xuXHQgIC8vIFNhc3MgMy4zIGxlYXZlcyBvdXQgdGhlICduYW1lcycgYXJyYXksIHNvIHdlIGRldmlhdGUgZnJvbSB0aGUgc3BlYyAod2hpY2hcblx0ICAvLyByZXF1aXJlcyB0aGUgYXJyYXkpIHRvIHBsYXkgbmljZSBoZXJlLlxuXHQgIHZhciBuYW1lcyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ25hbWVzJywgW10pO1xuXHQgIHZhciBzb3VyY2VSb290ID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlUm9vdCcsIG51bGwpO1xuXHQgIHZhciBzb3VyY2VzQ29udGVudCA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NvdXJjZXNDb250ZW50JywgbnVsbCk7XG5cdCAgdmFyIG1hcHBpbmdzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnbWFwcGluZ3MnKTtcblx0ICB2YXIgZmlsZSA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ2ZpbGUnLCBudWxsKTtcblxuXHQgIC8vIE9uY2UgYWdhaW4sIFNhc3MgZGV2aWF0ZXMgZnJvbSB0aGUgc3BlYyBhbmQgc3VwcGxpZXMgdGhlIHZlcnNpb24gYXMgYVxuXHQgIC8vIHN0cmluZyByYXRoZXIgdGhhbiBhIG51bWJlciwgc28gd2UgdXNlIGxvb3NlIGVxdWFsaXR5IGNoZWNraW5nIGhlcmUuXG5cdCAgaWYgKHZlcnNpb24gIT0gdGhpcy5fdmVyc2lvbikge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCB2ZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cdCAgfVxuXG5cdCAgc291cmNlcyA9IHNvdXJjZXNcblx0ICAgIC5tYXAoU3RyaW5nKVxuXHQgICAgLy8gU29tZSBzb3VyY2UgbWFwcyBwcm9kdWNlIHJlbGF0aXZlIHNvdXJjZSBwYXRocyBsaWtlIFwiLi9mb28uanNcIiBpbnN0ZWFkIG9mXG5cdCAgICAvLyBcImZvby5qc1wiLiAgTm9ybWFsaXplIHRoZXNlIGZpcnN0IHNvIHRoYXQgZnV0dXJlIGNvbXBhcmlzb25zIHdpbGwgc3VjY2VlZC5cblx0ICAgIC8vIFNlZSBidWd6aWwubGEvMTA5MDc2OC5cblx0ICAgIC5tYXAodXRpbC5ub3JtYWxpemUpXG5cdCAgICAvLyBBbHdheXMgZW5zdXJlIHRoYXQgYWJzb2x1dGUgc291cmNlcyBhcmUgaW50ZXJuYWxseSBzdG9yZWQgcmVsYXRpdmUgdG9cblx0ICAgIC8vIHRoZSBzb3VyY2Ugcm9vdCwgaWYgdGhlIHNvdXJjZSByb290IGlzIGFic29sdXRlLiBOb3QgZG9pbmcgdGhpcyB3b3VsZFxuXHQgICAgLy8gYmUgcGFydGljdWxhcmx5IHByb2JsZW1hdGljIHdoZW4gdGhlIHNvdXJjZSByb290IGlzIGEgcHJlZml4IG9mIHRoZVxuXHQgICAgLy8gc291cmNlICh2YWxpZCwgYnV0IHdoeT8/KS4gU2VlIGdpdGh1YiBpc3N1ZSAjMTk5IGFuZCBidWd6aWwubGEvMTE4ODk4Mi5cblx0ICAgIC5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHQgICAgICByZXR1cm4gc291cmNlUm9vdCAmJiB1dGlsLmlzQWJzb2x1dGUoc291cmNlUm9vdCkgJiYgdXRpbC5pc0Fic29sdXRlKHNvdXJjZSlcblx0ICAgICAgICA/IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlKVxuXHQgICAgICAgIDogc291cmNlO1xuXHQgICAgfSk7XG5cblx0ICAvLyBQYXNzIGB0cnVlYCBiZWxvdyB0byBhbGxvdyBkdXBsaWNhdGUgbmFtZXMgYW5kIHNvdXJjZXMuIFdoaWxlIHNvdXJjZSBtYXBzXG5cdCAgLy8gYXJlIGludGVuZGVkIHRvIGJlIGNvbXByZXNzZWQgYW5kIGRlZHVwbGljYXRlZCwgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXJcblx0ICAvLyBzb21ldGltZXMgZ2VuZXJhdGVzIHNvdXJjZSBtYXBzIHdpdGggZHVwbGljYXRlcyBpbiB0aGVtLiBTZWUgR2l0aHViIGlzc3VlXG5cdCAgLy8gIzcyIGFuZCBidWd6aWwubGEvODg5NDkyLlxuXHQgIHRoaXMuX25hbWVzID0gQXJyYXlTZXQuZnJvbUFycmF5KG5hbWVzLm1hcChTdHJpbmcpLCB0cnVlKTtcblx0ICB0aGlzLl9zb3VyY2VzID0gQXJyYXlTZXQuZnJvbUFycmF5KHNvdXJjZXMsIHRydWUpO1xuXG5cdCAgdGhpcy5zb3VyY2VSb290ID0gc291cmNlUm9vdDtcblx0ICB0aGlzLnNvdXJjZXNDb250ZW50ID0gc291cmNlc0NvbnRlbnQ7XG5cdCAgdGhpcy5fbWFwcGluZ3MgPSBtYXBwaW5ncztcblx0ICB0aGlzLmZpbGUgPSBmaWxlO1xuXHR9XG5cblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSk7XG5cdEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmNvbnN1bWVyID0gU291cmNlTWFwQ29uc3VtZXI7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgZnJvbSBhIFNvdXJjZU1hcEdlbmVyYXRvci5cblx0ICpcblx0ICogQHBhcmFtIFNvdXJjZU1hcEdlbmVyYXRvciBhU291cmNlTWFwXG5cdCAqICAgICAgICBUaGUgc291cmNlIG1hcCB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5cdCAqIEByZXR1cm5zIEJhc2ljU291cmNlTWFwQ29uc3VtZXJcblx0ICovXG5cdEJhc2ljU291cmNlTWFwQ29uc3VtZXIuZnJvbVNvdXJjZU1hcCA9XG5cdCAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZnJvbVNvdXJjZU1hcChhU291cmNlTWFwKSB7XG5cdCAgICB2YXIgc21jID0gT2JqZWN0LmNyZWF0ZShCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSk7XG5cblx0ICAgIHZhciBuYW1lcyA9IHNtYy5fbmFtZXMgPSBBcnJheVNldC5mcm9tQXJyYXkoYVNvdXJjZU1hcC5fbmFtZXMudG9BcnJheSgpLCB0cnVlKTtcblx0ICAgIHZhciBzb3VyY2VzID0gc21jLl9zb3VyY2VzID0gQXJyYXlTZXQuZnJvbUFycmF5KGFTb3VyY2VNYXAuX3NvdXJjZXMudG9BcnJheSgpLCB0cnVlKTtcblx0ICAgIHNtYy5zb3VyY2VSb290ID0gYVNvdXJjZU1hcC5fc291cmNlUm9vdDtcblx0ICAgIHNtYy5zb3VyY2VzQ29udGVudCA9IGFTb3VyY2VNYXAuX2dlbmVyYXRlU291cmNlc0NvbnRlbnQoc21jLl9zb3VyY2VzLnRvQXJyYXkoKSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21jLnNvdXJjZVJvb3QpO1xuXHQgICAgc21jLmZpbGUgPSBhU291cmNlTWFwLl9maWxlO1xuXG5cdCAgICAvLyBCZWNhdXNlIHdlIGFyZSBtb2RpZnlpbmcgdGhlIGVudHJpZXMgKGJ5IGNvbnZlcnRpbmcgc3RyaW5nIHNvdXJjZXMgYW5kXG5cdCAgICAvLyBuYW1lcyB0byBpbmRpY2VzIGludG8gdGhlIHNvdXJjZXMgYW5kIG5hbWVzIEFycmF5U2V0cyksIHdlIGhhdmUgdG8gbWFrZVxuXHQgICAgLy8gYSBjb3B5IG9mIHRoZSBlbnRyeSBvciBlbHNlIGJhZCB0aGluZ3MgaGFwcGVuLiBTaGFyZWQgbXV0YWJsZSBzdGF0ZVxuXHQgICAgLy8gc3RyaWtlcyBhZ2FpbiEgU2VlIGdpdGh1YiBpc3N1ZSAjMTkxLlxuXG5cdCAgICB2YXIgZ2VuZXJhdGVkTWFwcGluZ3MgPSBhU291cmNlTWFwLl9tYXBwaW5ncy50b0FycmF5KCkuc2xpY2UoKTtcblx0ICAgIHZhciBkZXN0R2VuZXJhdGVkTWFwcGluZ3MgPSBzbWMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuXHQgICAgdmFyIGRlc3RPcmlnaW5hbE1hcHBpbmdzID0gc21jLl9fb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2VuZXJhdGVkTWFwcGluZ3MubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIHNyY01hcHBpbmcgPSBnZW5lcmF0ZWRNYXBwaW5nc1tpXTtcblx0ICAgICAgdmFyIGRlc3RNYXBwaW5nID0gbmV3IE1hcHBpbmc7XG5cdCAgICAgIGRlc3RNYXBwaW5nLmdlbmVyYXRlZExpbmUgPSBzcmNNYXBwaW5nLmdlbmVyYXRlZExpbmU7XG5cdCAgICAgIGRlc3RNYXBwaW5nLmdlbmVyYXRlZENvbHVtbiA9IHNyY01hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuXG5cdCAgICAgIGlmIChzcmNNYXBwaW5nLnNvdXJjZSkge1xuXHQgICAgICAgIGRlc3RNYXBwaW5nLnNvdXJjZSA9IHNvdXJjZXMuaW5kZXhPZihzcmNNYXBwaW5nLnNvdXJjZSk7XG5cdCAgICAgICAgZGVzdE1hcHBpbmcub3JpZ2luYWxMaW5lID0gc3JjTWFwcGluZy5vcmlnaW5hbExpbmU7XG5cdCAgICAgICAgZGVzdE1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBzcmNNYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG5cdCAgICAgICAgaWYgKHNyY01hcHBpbmcubmFtZSkge1xuXHQgICAgICAgICAgZGVzdE1hcHBpbmcubmFtZSA9IG5hbWVzLmluZGV4T2Yoc3JjTWFwcGluZy5uYW1lKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBkZXN0T3JpZ2luYWxNYXBwaW5ncy5wdXNoKGRlc3RNYXBwaW5nKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGRlc3RHZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGRlc3RNYXBwaW5nKTtcblx0ICAgIH1cblxuXHQgICAgcXVpY2tTb3J0KHNtYy5fX29yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuXG5cdCAgICByZXR1cm4gc21jO1xuXHQgIH07XG5cblx0LyoqXG5cdCAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cblx0ICovXG5cdEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuXHQvKipcblx0ICogVGhlIGxpc3Qgb2Ygb3JpZ2luYWwgc291cmNlcy5cblx0ICovXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ3NvdXJjZXMnLCB7XG5cdCAgZ2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5fc291cmNlcy50b0FycmF5KCkubWFwKGZ1bmN0aW9uIChzKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbCA/IHV0aWwuam9pbih0aGlzLnNvdXJjZVJvb3QsIHMpIDogcztcblx0ICAgIH0sIHRoaXMpO1xuXHQgIH1cblx0fSk7XG5cblx0LyoqXG5cdCAqIFByb3ZpZGUgdGhlIEpJVCB3aXRoIGEgbmljZSBzaGFwZSAvIGhpZGRlbiBjbGFzcy5cblx0ICovXG5cdGZ1bmN0aW9uIE1hcHBpbmcoKSB7XG5cdCAgdGhpcy5nZW5lcmF0ZWRMaW5lID0gMDtcblx0ICB0aGlzLmdlbmVyYXRlZENvbHVtbiA9IDA7XG5cdCAgdGhpcy5zb3VyY2UgPSBudWxsO1xuXHQgIHRoaXMub3JpZ2luYWxMaW5lID0gbnVsbDtcblx0ICB0aGlzLm9yaWdpbmFsQ29sdW1uID0gbnVsbDtcblx0ICB0aGlzLm5hbWUgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhcnNlIHRoZSBtYXBwaW5ncyBpbiBhIHN0cmluZyBpbiB0byBhIGRhdGEgc3RydWN0dXJlIHdoaWNoIHdlIGNhbiBlYXNpbHlcblx0ICogcXVlcnkgKHRoZSBvcmRlcmVkIGFycmF5cyBpbiB0aGUgYHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG5cdCAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG5cdCAqL1xuXHRCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG5cdCAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuXHQgICAgdmFyIGdlbmVyYXRlZExpbmUgPSAxO1xuXHQgICAgdmFyIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcblx0ICAgIHZhciBwcmV2aW91c09yaWdpbmFsTGluZSA9IDA7XG5cdCAgICB2YXIgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IDA7XG5cdCAgICB2YXIgcHJldmlvdXNTb3VyY2UgPSAwO1xuXHQgICAgdmFyIHByZXZpb3VzTmFtZSA9IDA7XG5cdCAgICB2YXIgbGVuZ3RoID0gYVN0ci5sZW5ndGg7XG5cdCAgICB2YXIgaW5kZXggPSAwO1xuXHQgICAgdmFyIGNhY2hlZFNlZ21lbnRzID0ge307XG5cdCAgICB2YXIgdGVtcCA9IHt9O1xuXHQgICAgdmFyIG9yaWdpbmFsTWFwcGluZ3MgPSBbXTtcblx0ICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuXHQgICAgdmFyIG1hcHBpbmcsIHN0ciwgc2VnbWVudCwgZW5kLCB2YWx1ZTtcblxuXHQgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG5cdCAgICAgIGlmIChhU3RyLmNoYXJBdChpbmRleCkgPT09ICc7Jykge1xuXHQgICAgICAgIGdlbmVyYXRlZExpbmUrKztcblx0ICAgICAgICBpbmRleCsrO1xuXHQgICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcblx0ICAgICAgfVxuXHQgICAgICBlbHNlIGlmIChhU3RyLmNoYXJBdChpbmRleCkgPT09ICcsJykge1xuXHQgICAgICAgIGluZGV4Kys7XG5cdCAgICAgIH1cblx0ICAgICAgZWxzZSB7XG5cdCAgICAgICAgbWFwcGluZyA9IG5ldyBNYXBwaW5nKCk7XG5cdCAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWRMaW5lID0gZ2VuZXJhdGVkTGluZTtcblxuXHQgICAgICAgIC8vIEJlY2F1c2UgZWFjaCBvZmZzZXQgaXMgZW5jb2RlZCByZWxhdGl2ZSB0byB0aGUgcHJldmlvdXMgb25lLFxuXHQgICAgICAgIC8vIG1hbnkgc2VnbWVudHMgb2Z0ZW4gaGF2ZSB0aGUgc2FtZSBlbmNvZGluZy4gV2UgY2FuIGV4cGxvaXQgdGhpc1xuXHQgICAgICAgIC8vIGZhY3QgYnkgY2FjaGluZyB0aGUgcGFyc2VkIHZhcmlhYmxlIGxlbmd0aCBmaWVsZHMgb2YgZWFjaCBzZWdtZW50LFxuXHQgICAgICAgIC8vIGFsbG93aW5nIHVzIHRvIGF2b2lkIGEgc2Vjb25kIHBhcnNlIGlmIHdlIGVuY291bnRlciB0aGUgc2FtZVxuXHQgICAgICAgIC8vIHNlZ21lbnQgYWdhaW4uXG5cdCAgICAgICAgZm9yIChlbmQgPSBpbmRleDsgZW5kIDwgbGVuZ3RoOyBlbmQrKykge1xuXHQgICAgICAgICAgaWYgKHRoaXMuX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IoYVN0ciwgZW5kKSkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgc3RyID0gYVN0ci5zbGljZShpbmRleCwgZW5kKTtcblxuXHQgICAgICAgIHNlZ21lbnQgPSBjYWNoZWRTZWdtZW50c1tzdHJdO1xuXHQgICAgICAgIGlmIChzZWdtZW50KSB7XG5cdCAgICAgICAgICBpbmRleCArPSBzdHIubGVuZ3RoO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBzZWdtZW50ID0gW107XG5cdCAgICAgICAgICB3aGlsZSAoaW5kZXggPCBlbmQpIHtcblx0ICAgICAgICAgICAgYmFzZTY0VkxRLmRlY29kZShhU3RyLCBpbmRleCwgdGVtcCk7XG5cdCAgICAgICAgICAgIHZhbHVlID0gdGVtcC52YWx1ZTtcblx0ICAgICAgICAgICAgaW5kZXggPSB0ZW1wLnJlc3Q7XG5cdCAgICAgICAgICAgIHNlZ21lbnQucHVzaCh2YWx1ZSk7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMikge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGEgc291cmNlLCBidXQgbm8gbGluZSBhbmQgY29sdW1uJyk7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGEgc291cmNlIGFuZCBsaW5lLCBidXQgbm8gY29sdW1uJyk7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIGNhY2hlZFNlZ21lbnRzW3N0cl0gPSBzZWdtZW50O1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8vIEdlbmVyYXRlZCBjb2x1bW4uXG5cdCAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gPSBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiArIHNlZ21lbnRbMF07XG5cdCAgICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcblxuXHQgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA+IDEpIHtcblx0ICAgICAgICAgIC8vIE9yaWdpbmFsIHNvdXJjZS5cblx0ICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gcHJldmlvdXNTb3VyY2UgKyBzZWdtZW50WzFdO1xuXHQgICAgICAgICAgcHJldmlvdXNTb3VyY2UgKz0gc2VnbWVudFsxXTtcblxuXHQgICAgICAgICAgLy8gT3JpZ2luYWwgbGluZS5cblx0ICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lID0gcHJldmlvdXNPcmlnaW5hbExpbmUgKyBzZWdtZW50WzJdO1xuXHQgICAgICAgICAgcHJldmlvdXNPcmlnaW5hbExpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZTtcblx0ICAgICAgICAgIC8vIExpbmVzIGFyZSBzdG9yZWQgMC1iYXNlZFxuXHQgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgKz0gMTtcblxuXHQgICAgICAgICAgLy8gT3JpZ2luYWwgY29sdW1uLlxuXHQgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9IHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gKyBzZWdtZW50WzNdO1xuXHQgICAgICAgICAgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cblx0ICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA+IDQpIHtcblx0ICAgICAgICAgICAgLy8gT3JpZ2luYWwgbmFtZS5cblx0ICAgICAgICAgICAgbWFwcGluZy5uYW1lID0gcHJldmlvdXNOYW1lICsgc2VnbWVudFs0XTtcblx0ICAgICAgICAgICAgcHJldmlvdXNOYW1lICs9IHNlZ21lbnRbNF07XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgZ2VuZXJhdGVkTWFwcGluZ3MucHVzaChtYXBwaW5nKTtcblx0ICAgICAgICBpZiAodHlwZW9mIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSAnbnVtYmVyJykge1xuXHQgICAgICAgICAgb3JpZ2luYWxNYXBwaW5ncy5wdXNoKG1hcHBpbmcpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBxdWlja1NvcnQoZ2VuZXJhdGVkTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQpO1xuXHQgICAgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gZ2VuZXJhdGVkTWFwcGluZ3M7XG5cblx0ICAgIHF1aWNrU29ydChvcmlnaW5hbE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKTtcblx0ICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzID0gb3JpZ2luYWxNYXBwaW5ncztcblx0ICB9O1xuXG5cdC8qKlxuXHQgKiBGaW5kIHRoZSBtYXBwaW5nIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBoeXBvdGhldGljYWwgXCJuZWVkbGVcIiBtYXBwaW5nIHRoYXRcblx0ICogd2UgYXJlIHNlYXJjaGluZyBmb3IgaW4gdGhlIGdpdmVuIFwiaGF5c3RhY2tcIiBvZiBtYXBwaW5ncy5cblx0ICovXG5cdEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9maW5kTWFwcGluZyA9XG5cdCAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZmluZE1hcHBpbmcoYU5lZWRsZSwgYU1hcHBpbmdzLCBhTGluZU5hbWUsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYUNvbHVtbk5hbWUsIGFDb21wYXJhdG9yLCBhQmlhcykge1xuXHQgICAgLy8gVG8gcmV0dXJuIHRoZSBwb3NpdGlvbiB3ZSBhcmUgc2VhcmNoaW5nIGZvciwgd2UgbXVzdCBmaXJzdCBmaW5kIHRoZVxuXHQgICAgLy8gbWFwcGluZyBmb3IgdGhlIGdpdmVuIHBvc2l0aW9uIGFuZCB0aGVuIHJldHVybiB0aGUgb3Bwb3NpdGUgcG9zaXRpb24gaXRcblx0ICAgIC8vIHBvaW50cyB0by4gQmVjYXVzZSB0aGUgbWFwcGluZ3MgYXJlIHNvcnRlZCwgd2UgY2FuIHVzZSBiaW5hcnkgc2VhcmNoIHRvXG5cdCAgICAvLyBmaW5kIHRoZSBiZXN0IG1hcHBpbmcuXG5cblx0ICAgIGlmIChhTmVlZGxlW2FMaW5lTmFtZV0gPD0gMCkge1xuXHQgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdMaW5lIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEsIGdvdCAnXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhTmVlZGxlW2FMaW5lTmFtZV0pO1xuXHQgICAgfVxuXHQgICAgaWYgKGFOZWVkbGVbYUNvbHVtbk5hbWVdIDwgMCkge1xuXHQgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb2x1bW4gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMCwgZ290ICdcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICArIGFOZWVkbGVbYUNvbHVtbk5hbWVdKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGJpbmFyeVNlYXJjaC5zZWFyY2goYU5lZWRsZSwgYU1hcHBpbmdzLCBhQ29tcGFyYXRvciwgYUJpYXMpO1xuXHQgIH07XG5cblx0LyoqXG5cdCAqIENvbXB1dGUgdGhlIGxhc3QgY29sdW1uIGZvciBlYWNoIGdlbmVyYXRlZCBtYXBwaW5nLiBUaGUgbGFzdCBjb2x1bW4gaXNcblx0ICogaW5jbHVzaXZlLlxuXHQgKi9cblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29tcHV0ZUNvbHVtblNwYW5zID1cblx0ICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9jb21wdXRlQ29sdW1uU3BhbnMoKSB7XG5cdCAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3MubGVuZ3RoOyArK2luZGV4KSB7XG5cdCAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXhdO1xuXG5cdCAgICAgIC8vIE1hcHBpbmdzIGRvIG5vdCBjb250YWluIGEgZmllbGQgZm9yIHRoZSBsYXN0IGdlbmVyYXRlZCBjb2x1bW50LiBXZVxuXHQgICAgICAvLyBjYW4gY29tZSB1cCB3aXRoIGFuIG9wdGltaXN0aWMgZXN0aW1hdGUsIGhvd2V2ZXIsIGJ5IGFzc3VtaW5nIHRoYXRcblx0ICAgICAgLy8gbWFwcGluZ3MgYXJlIGNvbnRpZ3VvdXMgKGkuZS4gZ2l2ZW4gdHdvIGNvbnNlY3V0aXZlIG1hcHBpbmdzLCB0aGVcblx0ICAgICAgLy8gZmlyc3QgbWFwcGluZyBlbmRzIHdoZXJlIHRoZSBzZWNvbmQgb25lIHN0YXJ0cykuXG5cdCAgICAgIGlmIChpbmRleCArIDEgPCB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGgpIHtcblx0ICAgICAgICB2YXIgbmV4dE1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleCArIDFdO1xuXG5cdCAgICAgICAgaWYgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9PT0gbmV4dE1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuXHQgICAgICAgICAgbWFwcGluZy5sYXN0R2VuZXJhdGVkQ29sdW1uID0gbmV4dE1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC0gMTtcblx0ICAgICAgICAgIGNvbnRpbnVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIFRoZSBsYXN0IG1hcHBpbmcgZm9yIGVhY2ggbGluZSBzcGFucyB0aGUgZW50aXJlIGxpbmUuXG5cdCAgICAgIG1hcHBpbmcubGFzdEdlbmVyYXRlZENvbHVtbiA9IEluZmluaXR5O1xuXHQgICAgfVxuXHQgIH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSwgbGluZSwgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIGdlbmVyYXRlZFxuXHQgKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Rcblx0ICogd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cdCAqXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG5cdCAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLlxuXHQgKiAgIC0gYmlhczogRWl0aGVyICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3Jcblx0ICogICAgICdTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcblx0ICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcblx0ICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuXHQgKiAgICAgRGVmYXVsdHMgdG8gJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cblx0ICpcblx0ICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIHNvdXJjZTogVGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlLCBvciBudWxsLlxuXHQgKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cblx0ICovXG5cdEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLm9yaWdpbmFsUG9zaXRpb25Gb3IgPVxuXHQgIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcblx0ICAgIHZhciBuZWVkbGUgPSB7XG5cdCAgICAgIGdlbmVyYXRlZExpbmU6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpLFxuXHQgICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcblx0ICAgIH07XG5cblx0ICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRNYXBwaW5nKFxuXHQgICAgICBuZWVkbGUsXG5cdCAgICAgIHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLFxuXHQgICAgICBcImdlbmVyYXRlZExpbmVcIixcblx0ICAgICAgXCJnZW5lcmF0ZWRDb2x1bW5cIixcblx0ICAgICAgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCxcblx0ICAgICAgdXRpbC5nZXRBcmcoYUFyZ3MsICdiaWFzJywgU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQpXG5cdCAgICApO1xuXG5cdCAgICBpZiAoaW5kZXggPj0gMCkge1xuXHQgICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzW2luZGV4XTtcblxuXHQgICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lID09PSBuZWVkbGUuZ2VuZXJhdGVkTGluZSkge1xuXHQgICAgICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhtYXBwaW5nLCAnc291cmNlJywgbnVsbCk7XG5cdCAgICAgICAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuXHQgICAgICAgICAgc291cmNlID0gdGhpcy5fc291cmNlcy5hdChzb3VyY2UpO1xuXHQgICAgICAgICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsKSB7XG5cdCAgICAgICAgICAgIHNvdXJjZSA9IHV0aWwuam9pbih0aGlzLnNvdXJjZVJvb3QsIHNvdXJjZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBuYW1lID0gdXRpbC5nZXRBcmcobWFwcGluZywgJ25hbWUnLCBudWxsKTtcblx0ICAgICAgICBpZiAobmFtZSAhPT0gbnVsbCkge1xuXHQgICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmF0KG5hbWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG5cdCAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnb3JpZ2luYWxMaW5lJywgbnVsbCksXG5cdCAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdvcmlnaW5hbENvbHVtbicsIG51bGwpLFxuXHQgICAgICAgICAgbmFtZTogbmFtZVxuXHQgICAgICAgIH07XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgc291cmNlOiBudWxsLFxuXHQgICAgICBsaW5lOiBudWxsLFxuXHQgICAgICBjb2x1bW46IG51bGwsXG5cdCAgICAgIG5hbWU6IG51bGxcblx0ICAgIH07XG5cdCAgfTtcblxuXHQvKipcblx0ICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG5cdCAqIG1hcCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQgKi9cblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuaGFzQ29udGVudHNPZkFsbFNvdXJjZXMgPVxuXHQgIGZ1bmN0aW9uIEJhc2ljU291cmNlTWFwQ29uc3VtZXJfaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKSB7XG5cdCAgICBpZiAoIXRoaXMuc291cmNlc0NvbnRlbnQpIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnQubGVuZ3RoID49IHRoaXMuX3NvdXJjZXMuc2l6ZSgpICYmXG5cdCAgICAgICF0aGlzLnNvdXJjZXNDb250ZW50LnNvbWUoZnVuY3Rpb24gKHNjKSB7IHJldHVybiBzYyA9PSBudWxsOyB9KTtcblx0ICB9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29udGVudC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgdGhlIHVybCBvZiB0aGVcblx0ICogb3JpZ2luYWwgc291cmNlIGZpbGUuIFJldHVybnMgbnVsbCBpZiBubyBvcmlnaW5hbCBzb3VyY2UgY29udGVudCBpc1xuXHQgKiBhdmFpbGFibGUuXG5cdCAqL1xuXHRCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yID1cblx0ICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIG51bGxPbk1pc3NpbmcpIHtcblx0ICAgIGlmICghdGhpcy5zb3VyY2VzQ29udGVudCkge1xuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsKSB7XG5cdCAgICAgIGFTb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuc291cmNlUm9vdCwgYVNvdXJjZSk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLl9zb3VyY2VzLmhhcyhhU291cmNlKSkge1xuXHQgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFt0aGlzLl9zb3VyY2VzLmluZGV4T2YoYVNvdXJjZSldO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgdXJsO1xuXHQgICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsXG5cdCAgICAgICAgJiYgKHVybCA9IHV0aWwudXJsUGFyc2UodGhpcy5zb3VyY2VSb290KSkpIHtcblx0ICAgICAgLy8gWFhYOiBmaWxlOi8vIFVSSXMgYW5kIGFic29sdXRlIHBhdGhzIGxlYWQgdG8gdW5leHBlY3RlZCBiZWhhdmlvciBmb3Jcblx0ICAgICAgLy8gbWFueSB1c2Vycy4gV2UgY2FuIGhlbHAgdGhlbSBvdXQgd2hlbiB0aGV5IGV4cGVjdCBmaWxlOi8vIFVSSXMgdG9cblx0ICAgICAgLy8gYmVoYXZlIGxpa2UgaXQgd291bGQgaWYgdGhleSB3ZXJlIHJ1bm5pbmcgYSBsb2NhbCBIVFRQIHNlcnZlci4gU2VlXG5cdCAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4NTU5Ny5cblx0ICAgICAgdmFyIGZpbGVVcmlBYnNQYXRoID0gYVNvdXJjZS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCBcIlwiKTtcblx0ICAgICAgaWYgKHVybC5zY2hlbWUgPT0gXCJmaWxlXCJcblx0ICAgICAgICAgICYmIHRoaXMuX3NvdXJjZXMuaGFzKGZpbGVVcmlBYnNQYXRoKSkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50W3RoaXMuX3NvdXJjZXMuaW5kZXhPZihmaWxlVXJpQWJzUGF0aCldXG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoKCF1cmwucGF0aCB8fCB1cmwucGF0aCA9PSBcIi9cIilcblx0ICAgICAgICAgICYmIHRoaXMuX3NvdXJjZXMuaGFzKFwiL1wiICsgYVNvdXJjZSkpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFt0aGlzLl9zb3VyY2VzLmluZGV4T2YoXCIvXCIgKyBhU291cmNlKV07XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHJlY3Vyc2l2ZWx5IGZyb21cblx0ICAgIC8vIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvci4gSW4gdGhhdCBjYXNlLCB3ZVxuXHQgICAgLy8gZG9uJ3Qgd2FudCB0byB0aHJvdyBpZiB3ZSBjYW4ndCBmaW5kIHRoZSBzb3VyY2UgLSB3ZSBqdXN0IHdhbnQgdG9cblx0ICAgIC8vIHJldHVybiBudWxsLCBzbyB3ZSBwcm92aWRlIGEgZmxhZyB0byBleGl0IGdyYWNlZnVsbHkuXG5cdCAgICBpZiAobnVsbE9uTWlzc2luZykge1xuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFTb3VyY2UgKyAnXCIgaXMgbm90IGluIHRoZSBTb3VyY2VNYXAuJyk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcblx0ICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG5cdCAqIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS5cblx0ICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS5cblx0ICogICAtIGJpYXM6IEVpdGhlciAnU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQnIG9yXG5cdCAqICAgICAnU291cmNlTWFwQ29uc3VtZXIuTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG5cdCAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG5cdCAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cblx0ICogICAgIERlZmF1bHRzIHRvICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG5cdCAqXG5cdCAqIGFuZCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cdCAqXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuXHQgKi9cblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZ2VuZXJhdGVkUG9zaXRpb25Gb3IgPVxuXHQgIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2dlbmVyYXRlZFBvc2l0aW9uRm9yKGFBcmdzKSB7XG5cdCAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKTtcblx0ICAgIGlmICh0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbCkge1xuXHQgICAgICBzb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuc291cmNlUm9vdCwgc291cmNlKTtcblx0ICAgIH1cblx0ICAgIGlmICghdGhpcy5fc291cmNlcy5oYXMoc291cmNlKSkge1xuXHQgICAgICByZXR1cm4ge1xuXHQgICAgICAgIGxpbmU6IG51bGwsXG5cdCAgICAgICAgY29sdW1uOiBudWxsLFxuXHQgICAgICAgIGxhc3RDb2x1bW46IG51bGxcblx0ICAgICAgfTtcblx0ICAgIH1cblx0ICAgIHNvdXJjZSA9IHRoaXMuX3NvdXJjZXMuaW5kZXhPZihzb3VyY2UpO1xuXG5cdCAgICB2YXIgbmVlZGxlID0ge1xuXHQgICAgICBzb3VyY2U6IHNvdXJjZSxcblx0ICAgICAgb3JpZ2luYWxMaW5lOiB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKSxcblx0ICAgICAgb3JpZ2luYWxDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcblx0ICAgIH07XG5cblx0ICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRNYXBwaW5nKFxuXHQgICAgICBuZWVkbGUsXG5cdCAgICAgIHRoaXMuX29yaWdpbmFsTWFwcGluZ3MsXG5cdCAgICAgIFwib3JpZ2luYWxMaW5lXCIsXG5cdCAgICAgIFwib3JpZ2luYWxDb2x1bW5cIixcblx0ICAgICAgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyxcblx0ICAgICAgdXRpbC5nZXRBcmcoYUFyZ3MsICdiaWFzJywgU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQpXG5cdCAgICApO1xuXG5cdCAgICBpZiAoaW5kZXggPj0gMCkge1xuXHQgICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbaW5kZXhdO1xuXG5cdCAgICAgIGlmIChtYXBwaW5nLnNvdXJjZSA9PT0gbmVlZGxlLnNvdXJjZSkge1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkTGluZScsIG51bGwpLFxuXHQgICAgICAgICAgY29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkQ29sdW1uJywgbnVsbCksXG5cdCAgICAgICAgICBsYXN0Q29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbGFzdEdlbmVyYXRlZENvbHVtbicsIG51bGwpXG5cdCAgICAgICAgfTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBsaW5lOiBudWxsLFxuXHQgICAgICBjb2x1bW46IG51bGwsXG5cdCAgICAgIGxhc3RDb2x1bW46IG51bGxcblx0ICAgIH07XG5cdCAgfTtcblxuXHRleHBvcnRzLkJhc2ljU291cmNlTWFwQ29uc3VtZXIgPSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyO1xuXG5cdC8qKlxuXHQgKiBBbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXIgaW5zdGFuY2UgcmVwcmVzZW50cyBhIHBhcnNlZCBzb3VyY2UgbWFwIHdoaWNoXG5cdCAqIHdlIGNhbiBxdWVyeSBmb3IgaW5mb3JtYXRpb24uIEl0IGRpZmZlcnMgZnJvbSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyIGluXG5cdCAqIHRoYXQgaXQgdGFrZXMgXCJpbmRleGVkXCIgc291cmNlIG1hcHMgKGkuZS4gb25lcyB3aXRoIGEgXCJzZWN0aW9uc1wiIGZpZWxkKSBhc1xuXHQgKiBpbnB1dC5cblx0ICpcblx0ICogVGhlIG9ubHkgcGFyYW1ldGVyIGlzIGEgcmF3IHNvdXJjZSBtYXAgKGVpdGhlciBhcyBhIEpTT04gc3RyaW5nLCBvciBhbHJlYWR5XG5cdCAqIHBhcnNlZCB0byBhbiBvYmplY3QpLiBBY2NvcmRpbmcgdG8gdGhlIHNwZWMgZm9yIGluZGV4ZWQgc291cmNlIG1hcHMsIHRoZXlcblx0ICogaGF2ZSB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG5cdCAqXG5cdCAqICAgLSB2ZXJzaW9uOiBXaGljaCB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwIHNwZWMgdGhpcyBtYXAgaXMgZm9sbG93aW5nLlxuXHQgKiAgIC0gZmlsZTogT3B0aW9uYWwuIFRoZSBnZW5lcmF0ZWQgZmlsZSB0aGlzIHNvdXJjZSBtYXAgaXMgYXNzb2NpYXRlZCB3aXRoLlxuXHQgKiAgIC0gc2VjdGlvbnM6IEEgbGlzdCBvZiBzZWN0aW9uIGRlZmluaXRpb25zLlxuXHQgKlxuXHQgKiBFYWNoIHZhbHVlIHVuZGVyIHRoZSBcInNlY3Rpb25zXCIgZmllbGQgaGFzIHR3byBmaWVsZHM6XG5cdCAqICAgLSBvZmZzZXQ6IFRoZSBvZmZzZXQgaW50byB0aGUgb3JpZ2luYWwgc3BlY2lmaWVkIGF0IHdoaWNoIHRoaXMgc2VjdGlvblxuXHQgKiAgICAgICBiZWdpbnMgdG8gYXBwbHksIGRlZmluZWQgYXMgYW4gb2JqZWN0IHdpdGggYSBcImxpbmVcIiBhbmQgXCJjb2x1bW5cIlxuXHQgKiAgICAgICBmaWVsZC5cblx0ICogICAtIG1hcDogQSBzb3VyY2UgbWFwIGRlZmluaXRpb24uIFRoaXMgc291cmNlIG1hcCBjb3VsZCBhbHNvIGJlIGluZGV4ZWQsXG5cdCAqICAgICAgIGJ1dCBkb2Vzbid0IGhhdmUgdG8gYmUuXG5cdCAqXG5cdCAqIEluc3RlYWQgb2YgdGhlIFwibWFwXCIgZmllbGQsIGl0J3MgYWxzbyBwb3NzaWJsZSB0byBoYXZlIGEgXCJ1cmxcIiBmaWVsZFxuXHQgKiBzcGVjaWZ5aW5nIGEgVVJMIHRvIHJldHJpZXZlIGEgc291cmNlIG1hcCBmcm9tLCBidXQgdGhhdCdzIGN1cnJlbnRseVxuXHQgKiB1bnN1cHBvcnRlZC5cblx0ICpcblx0ICogSGVyZSdzIGFuIGV4YW1wbGUgc291cmNlIG1hcCwgdGFrZW4gZnJvbSB0aGUgc291cmNlIG1hcCBzcGVjWzBdLCBidXRcblx0ICogbW9kaWZpZWQgdG8gb21pdCBhIHNlY3Rpb24gd2hpY2ggdXNlcyB0aGUgXCJ1cmxcIiBmaWVsZC5cblx0ICpcblx0ICogIHtcblx0ICogICAgdmVyc2lvbiA6IDMsXG5cdCAqICAgIGZpbGU6IFwiYXBwLmpzXCIsXG5cdCAqICAgIHNlY3Rpb25zOiBbe1xuXHQgKiAgICAgIG9mZnNldDoge2xpbmU6MTAwLCBjb2x1bW46MTB9LFxuXHQgKiAgICAgIG1hcDoge1xuXHQgKiAgICAgICAgdmVyc2lvbiA6IDMsXG5cdCAqICAgICAgICBmaWxlOiBcInNlY3Rpb24uanNcIixcblx0ICogICAgICAgIHNvdXJjZXM6IFtcImZvby5qc1wiLCBcImJhci5qc1wiXSxcblx0ICogICAgICAgIG5hbWVzOiBbXCJzcmNcIiwgXCJtYXBzXCIsIFwiYXJlXCIsIFwiZnVuXCJdLFxuXHQgKiAgICAgICAgbWFwcGluZ3M6IFwiQUFBQSxFOztBQkNERTtcIlxuXHQgKiAgICAgIH1cblx0ICogICAgfV0sXG5cdCAqICB9XG5cdCAqXG5cdCAqIFswXTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xVTFSR0FlaFF3UnlwVVRvdkYxS1JscGlPRnplMGItXzJnYzZmQUgwS1kway9lZGl0I2hlYWRpbmc9aC41MzVlczN4ZXByZ3Rcblx0ICovXG5cdGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwKSB7XG5cdCAgdmFyIHNvdXJjZU1hcCA9IGFTb3VyY2VNYXA7XG5cdCAgaWYgKHR5cGVvZiBhU291cmNlTWFwID09PSAnc3RyaW5nJykge1xuXHQgICAgc291cmNlTWFwID0gSlNPTi5wYXJzZShhU291cmNlTWFwLnJlcGxhY2UoL15cXClcXF1cXH0nLywgJycpKTtcblx0ICB9XG5cblx0ICB2YXIgdmVyc2lvbiA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3ZlcnNpb24nKTtcblx0ICB2YXIgc2VjdGlvbnMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzZWN0aW9ucycpO1xuXG5cdCAgaWYgKHZlcnNpb24gIT0gdGhpcy5fdmVyc2lvbikge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCB2ZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cdCAgfVxuXG5cdCAgdGhpcy5fc291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuXHQgIHRoaXMuX25hbWVzID0gbmV3IEFycmF5U2V0KCk7XG5cblx0ICB2YXIgbGFzdE9mZnNldCA9IHtcblx0ICAgIGxpbmU6IC0xLFxuXHQgICAgY29sdW1uOiAwXG5cdCAgfTtcblx0ICB0aGlzLl9zZWN0aW9ucyA9IHNlY3Rpb25zLm1hcChmdW5jdGlvbiAocykge1xuXHQgICAgaWYgKHMudXJsKSB7XG5cdCAgICAgIC8vIFRoZSB1cmwgZmllbGQgd2lsbCByZXF1aXJlIHN1cHBvcnQgZm9yIGFzeW5jaHJvbmljaXR5LlxuXHQgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMTZcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdXBwb3J0IGZvciB1cmwgZmllbGQgaW4gc2VjdGlvbnMgbm90IGltcGxlbWVudGVkLicpO1xuXHQgICAgfVxuXHQgICAgdmFyIG9mZnNldCA9IHV0aWwuZ2V0QXJnKHMsICdvZmZzZXQnKTtcblx0ICAgIHZhciBvZmZzZXRMaW5lID0gdXRpbC5nZXRBcmcob2Zmc2V0LCAnbGluZScpO1xuXHQgICAgdmFyIG9mZnNldENvbHVtbiA9IHV0aWwuZ2V0QXJnKG9mZnNldCwgJ2NvbHVtbicpO1xuXG5cdCAgICBpZiAob2Zmc2V0TGluZSA8IGxhc3RPZmZzZXQubGluZSB8fFxuXHQgICAgICAgIChvZmZzZXRMaW5lID09PSBsYXN0T2Zmc2V0LmxpbmUgJiYgb2Zmc2V0Q29sdW1uIDwgbGFzdE9mZnNldC5jb2x1bW4pKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignU2VjdGlvbiBvZmZzZXRzIG11c3QgYmUgb3JkZXJlZCBhbmQgbm9uLW92ZXJsYXBwaW5nLicpO1xuXHQgICAgfVxuXHQgICAgbGFzdE9mZnNldCA9IG9mZnNldDtcblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgZ2VuZXJhdGVkT2Zmc2V0OiB7XG5cdCAgICAgICAgLy8gVGhlIG9mZnNldCBmaWVsZHMgYXJlIDAtYmFzZWQsIGJ1dCB3ZSB1c2UgMS1iYXNlZCBpbmRpY2VzIHdoZW5cblx0ICAgICAgICAvLyBlbmNvZGluZy9kZWNvZGluZyBmcm9tIFZMUS5cblx0ICAgICAgICBnZW5lcmF0ZWRMaW5lOiBvZmZzZXRMaW5lICsgMSxcblx0ICAgICAgICBnZW5lcmF0ZWRDb2x1bW46IG9mZnNldENvbHVtbiArIDFcblx0ICAgICAgfSxcblx0ICAgICAgY29uc3VtZXI6IG5ldyBTb3VyY2VNYXBDb25zdW1lcih1dGlsLmdldEFyZyhzLCAnbWFwJykpXG5cdCAgICB9XG5cdCAgfSk7XG5cdH1cblxuXHRJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuXHRJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU291cmNlTWFwQ29uc3VtZXI7XG5cblx0LyoqXG5cdCAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cblx0ICovXG5cdEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGlzdCBvZiBvcmlnaW5hbCBzb3VyY2VzLlxuXHQgKi9cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUsICdzb3VyY2VzJywge1xuXHQgIGdldDogZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIHNvdXJjZXMgPSBbXTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLl9zZWN0aW9uc1tpXS5jb25zdW1lci5zb3VyY2VzLmxlbmd0aDsgaisrKSB7XG5cdCAgICAgICAgc291cmNlcy5wdXNoKHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXNbal0pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gc291cmNlcztcblx0ICB9XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UsIGxpbmUsIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBnZW5lcmF0ZWRcblx0ICogc291cmNlJ3MgbGluZSBhbmQgY29sdW1uIHBvc2l0aW9ucyBwcm92aWRlZC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0XG5cdCAqIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuXHQgKlxuXHQgKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLlxuXHQgKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS5cblx0ICpcblx0ICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIHNvdXJjZTogVGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlLCBvciBudWxsLlxuXHQgKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cblx0ICovXG5cdEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUub3JpZ2luYWxQb3NpdGlvbkZvciA9XG5cdCAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcblx0ICAgIHZhciBuZWVkbGUgPSB7XG5cdCAgICAgIGdlbmVyYXRlZExpbmU6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpLFxuXHQgICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcblx0ICAgIH07XG5cblx0ICAgIC8vIEZpbmQgdGhlIHNlY3Rpb24gY29udGFpbmluZyB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uIHdlJ3JlIHRyeWluZyB0byBtYXBcblx0ICAgIC8vIHRvIGFuIG9yaWdpbmFsIHBvc2l0aW9uLlxuXHQgICAgdmFyIHNlY3Rpb25JbmRleCA9IGJpbmFyeVNlYXJjaC5zZWFyY2gobmVlZGxlLCB0aGlzLl9zZWN0aW9ucyxcblx0ICAgICAgZnVuY3Rpb24obmVlZGxlLCBzZWN0aW9uKSB7XG5cdCAgICAgICAgdmFyIGNtcCA9IG5lZWRsZS5nZW5lcmF0ZWRMaW5lIC0gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZTtcblx0ICAgICAgICBpZiAoY21wKSB7XG5cdCAgICAgICAgICByZXR1cm4gY21wO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiAobmVlZGxlLmdlbmVyYXRlZENvbHVtbiAtXG5cdCAgICAgICAgICAgICAgICBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4pO1xuXHQgICAgICB9KTtcblx0ICAgIHZhciBzZWN0aW9uID0gdGhpcy5fc2VjdGlvbnNbc2VjdGlvbkluZGV4XTtcblxuXHQgICAgaWYgKCFzZWN0aW9uKSB7XG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgc291cmNlOiBudWxsLFxuXHQgICAgICAgIGxpbmU6IG51bGwsXG5cdCAgICAgICAgY29sdW1uOiBudWxsLFxuXHQgICAgICAgIG5hbWU6IG51bGxcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHNlY3Rpb24uY29uc3VtZXIub3JpZ2luYWxQb3NpdGlvbkZvcih7XG5cdCAgICAgIGxpbmU6IG5lZWRsZS5nZW5lcmF0ZWRMaW5lIC1cblx0ICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuXHQgICAgICBjb2x1bW46IG5lZWRsZS5nZW5lcmF0ZWRDb2x1bW4gLVxuXHQgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBuZWVkbGUuZ2VuZXJhdGVkTGluZVxuXHQgICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcblx0ICAgICAgICAgOiAwKSxcblx0ICAgICAgYmlhczogYUFyZ3MuYmlhc1xuXHQgICAgfSk7XG5cdCAgfTtcblxuXHQvKipcblx0ICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG5cdCAqIG1hcCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQgKi9cblx0SW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG5cdCAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX2hhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuX3NlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChzKSB7XG5cdCAgICAgIHJldHVybiBzLmNvbnN1bWVyLmhhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCk7XG5cdCAgICB9KTtcblx0ICB9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29udGVudC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgdGhlIHVybCBvZiB0aGVcblx0ICogb3JpZ2luYWwgc291cmNlIGZpbGUuIFJldHVybnMgbnVsbCBpZiBubyBvcmlnaW5hbCBzb3VyY2UgY29udGVudCBpc1xuXHQgKiBhdmFpbGFibGUuXG5cdCAqL1xuXHRJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLnNvdXJjZUNvbnRlbnRGb3IgPVxuXHQgIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIG51bGxPbk1pc3NpbmcpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcblxuXHQgICAgICB2YXIgY29udGVudCA9IHNlY3Rpb24uY29uc3VtZXIuc291cmNlQ29udGVudEZvcihhU291cmNlLCB0cnVlKTtcblx0ICAgICAgaWYgKGNvbnRlbnQpIHtcblx0ICAgICAgICByZXR1cm4gY29udGVudDtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgaWYgKG51bGxPbk1pc3NpbmcpIHtcblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU291cmNlICsgJ1wiIGlzIG5vdCBpbiB0aGUgU291cmNlTWFwLicpO1xuXHQgICAgfVxuXHQgIH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBvcmlnaW5hbCBzb3VyY2UsXG5cdCAqIGxpbmUsIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aFxuXHQgKiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cdCAqXG5cdCAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuXHQgKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG5cdCAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG5cdCAqXG5cdCAqIGFuZCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cdCAqXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuXHQgKi9cblx0SW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5nZW5lcmF0ZWRQb3NpdGlvbkZvciA9XG5cdCAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX2dlbmVyYXRlZFBvc2l0aW9uRm9yKGFBcmdzKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciBzZWN0aW9uID0gdGhpcy5fc2VjdGlvbnNbaV07XG5cblx0ICAgICAgLy8gT25seSBjb25zaWRlciB0aGlzIHNlY3Rpb24gaWYgdGhlIHJlcXVlc3RlZCBzb3VyY2UgaXMgaW4gdGhlIGxpc3Qgb2Zcblx0ICAgICAgLy8gc291cmNlcyBvZiB0aGUgY29uc3VtZXIuXG5cdCAgICAgIGlmIChzZWN0aW9uLmNvbnN1bWVyLnNvdXJjZXMuaW5kZXhPZih1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpKSA9PT0gLTEpIHtcblx0ICAgICAgICBjb250aW51ZTtcblx0ICAgICAgfVxuXHQgICAgICB2YXIgZ2VuZXJhdGVkUG9zaXRpb24gPSBzZWN0aW9uLmNvbnN1bWVyLmdlbmVyYXRlZFBvc2l0aW9uRm9yKGFBcmdzKTtcblx0ICAgICAgaWYgKGdlbmVyYXRlZFBvc2l0aW9uKSB7XG5cdCAgICAgICAgdmFyIHJldCA9IHtcblx0ICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZFBvc2l0aW9uLmxpbmUgK1xuXHQgICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuXHQgICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWRQb3NpdGlvbi5jb2x1bW4gK1xuXHQgICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSA9PT0gZ2VuZXJhdGVkUG9zaXRpb24ubGluZVxuXHQgICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG5cdCAgICAgICAgICAgICA6IDApXG5cdCAgICAgICAgfTtcblx0ICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgIGxpbmU6IG51bGwsXG5cdCAgICAgIGNvbHVtbjogbnVsbFxuXHQgICAgfTtcblx0ICB9O1xuXG5cdC8qKlxuXHQgKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG5cdCAqIHF1ZXJ5ICh0aGUgb3JkZXJlZCBhcnJheXMgaW4gdGhlIGB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuXHQgKiBgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3NgIHByb3BlcnRpZXMpLlxuXHQgKi9cblx0SW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG5cdCAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcblx0ICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuXHQgICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MgPSBbXTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcblx0ICAgICAgdmFyIHNlY3Rpb25NYXBwaW5ncyA9IHNlY3Rpb24uY29uc3VtZXIuX2dlbmVyYXRlZE1hcHBpbmdzO1xuXHQgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlY3Rpb25NYXBwaW5ncy5sZW5ndGg7IGorKykge1xuXHQgICAgICAgIHZhciBtYXBwaW5nID0gc2VjdGlvbk1hcHBpbmdzW2pdO1xuXG5cdCAgICAgICAgdmFyIHNvdXJjZSA9IHNlY3Rpb24uY29uc3VtZXIuX3NvdXJjZXMuYXQobWFwcGluZy5zb3VyY2UpO1xuXHQgICAgICAgIGlmIChzZWN0aW9uLmNvbnN1bWVyLnNvdXJjZVJvb3QgIT09IG51bGwpIHtcblx0ICAgICAgICAgIHNvdXJjZSA9IHV0aWwuam9pbihzZWN0aW9uLmNvbnN1bWVyLnNvdXJjZVJvb3QsIHNvdXJjZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMuX3NvdXJjZXMuYWRkKHNvdXJjZSk7XG5cdCAgICAgICAgc291cmNlID0gdGhpcy5fc291cmNlcy5pbmRleE9mKHNvdXJjZSk7XG5cblx0ICAgICAgICB2YXIgbmFtZSA9IHNlY3Rpb24uY29uc3VtZXIuX25hbWVzLmF0KG1hcHBpbmcubmFtZSk7XG5cdCAgICAgICAgdGhpcy5fbmFtZXMuYWRkKG5hbWUpO1xuXHQgICAgICAgIG5hbWUgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuXG5cdCAgICAgICAgLy8gVGhlIG1hcHBpbmdzIGNvbWluZyBmcm9tIHRoZSBjb25zdW1lciBmb3IgdGhlIHNlY3Rpb24gaGF2ZVxuXHQgICAgICAgIC8vIGdlbmVyYXRlZCBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZWN0aW9uLCBzbyB3ZVxuXHQgICAgICAgIC8vIG5lZWQgdG8gb2Zmc2V0IHRoZW0gdG8gYmUgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjb25jYXRlbmF0ZWRcblx0ICAgICAgICAvLyBnZW5lcmF0ZWQgZmlsZS5cblx0ICAgICAgICB2YXIgYWRqdXN0ZWRNYXBwaW5nID0ge1xuXHQgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG5cdCAgICAgICAgICBnZW5lcmF0ZWRMaW5lOiBtYXBwaW5nLmdlbmVyYXRlZExpbmUgK1xuXHQgICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuXHQgICAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiArXG5cdCAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBtYXBwaW5nLmdlbmVyYXRlZExpbmVcblx0ICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG5cdCAgICAgICAgICAgIDogMCksXG5cdCAgICAgICAgICBvcmlnaW5hbExpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuXHQgICAgICAgICAgb3JpZ2luYWxDb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG5cdCAgICAgICAgICBuYW1lOiBuYW1lXG5cdCAgICAgICAgfTtcblxuXHQgICAgICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBhZGp1c3RlZE1hcHBpbmcub3JpZ2luYWxMaW5lID09PSAnbnVtYmVyJykge1xuXHQgICAgICAgICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MucHVzaChhZGp1c3RlZE1hcHBpbmcpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBxdWlja1NvcnQodGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKTtcblx0ICAgIHF1aWNrU29ydCh0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG5cdCAgfTtcblxuXHRleHBvcnRzLkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lciA9IEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcjtcblxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuXHQvKlxuXHQgKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcblx0ICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuXHQgKi9cblxuXHQvKipcblx0ICogVGhpcyBpcyBhIGhlbHBlciBmdW5jdGlvbiBmb3IgZ2V0dGluZyB2YWx1ZXMgZnJvbSBwYXJhbWV0ZXIvb3B0aW9uc1xuXHQgKiBvYmplY3RzLlxuXHQgKlxuXHQgKiBAcGFyYW0gYXJncyBUaGUgb2JqZWN0IHdlIGFyZSBleHRyYWN0aW5nIHZhbHVlcyBmcm9tXG5cdCAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB3ZSBhcmUgZ2V0dGluZy5cblx0ICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBBbiBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIHByb3BlcnR5IGlzIG1pc3Npbmdcblx0ICogZnJvbSB0aGUgb2JqZWN0LiBJZiB0aGlzIGlzIG5vdCBzcGVjaWZpZWQgYW5kIHRoZSBwcm9wZXJ0eSBpcyBtaXNzaW5nLCBhblxuXHQgKiBlcnJvciB3aWxsIGJlIHRocm93bi5cblx0ICovXG5cdGZ1bmN0aW9uIGdldEFyZyhhQXJncywgYU5hbWUsIGFEZWZhdWx0VmFsdWUpIHtcblx0ICBpZiAoYU5hbWUgaW4gYUFyZ3MpIHtcblx0ICAgIHJldHVybiBhQXJnc1thTmFtZV07XG5cdCAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdCAgICByZXR1cm4gYURlZmF1bHRWYWx1ZTtcblx0ICB9IGVsc2Uge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhTmFtZSArICdcIiBpcyBhIHJlcXVpcmVkIGFyZ3VtZW50LicpO1xuXHQgIH1cblx0fVxuXHRleHBvcnRzLmdldEFyZyA9IGdldEFyZztcblxuXHR2YXIgdXJsUmVnZXhwID0gL14oPzooW1xcdytcXC0uXSspOik/XFwvXFwvKD86KFxcdys6XFx3KylAKT8oW1xcdy5dKikoPzo6KFxcZCspKT8oXFxTKikkLztcblx0dmFyIGRhdGFVcmxSZWdleHAgPSAvXmRhdGE6LitcXCwuKyQvO1xuXG5cdGZ1bmN0aW9uIHVybFBhcnNlKGFVcmwpIHtcblx0ICB2YXIgbWF0Y2ggPSBhVXJsLm1hdGNoKHVybFJlZ2V4cCk7XG5cdCAgaWYgKCFtYXRjaCkge1xuXHQgICAgcmV0dXJuIG51bGw7XG5cdCAgfVxuXHQgIHJldHVybiB7XG5cdCAgICBzY2hlbWU6IG1hdGNoWzFdLFxuXHQgICAgYXV0aDogbWF0Y2hbMl0sXG5cdCAgICBob3N0OiBtYXRjaFszXSxcblx0ICAgIHBvcnQ6IG1hdGNoWzRdLFxuXHQgICAgcGF0aDogbWF0Y2hbNV1cblx0ICB9O1xuXHR9XG5cdGV4cG9ydHMudXJsUGFyc2UgPSB1cmxQYXJzZTtcblxuXHRmdW5jdGlvbiB1cmxHZW5lcmF0ZShhUGFyc2VkVXJsKSB7XG5cdCAgdmFyIHVybCA9ICcnO1xuXHQgIGlmIChhUGFyc2VkVXJsLnNjaGVtZSkge1xuXHQgICAgdXJsICs9IGFQYXJzZWRVcmwuc2NoZW1lICsgJzonO1xuXHQgIH1cblx0ICB1cmwgKz0gJy8vJztcblx0ICBpZiAoYVBhcnNlZFVybC5hdXRoKSB7XG5cdCAgICB1cmwgKz0gYVBhcnNlZFVybC5hdXRoICsgJ0AnO1xuXHQgIH1cblx0ICBpZiAoYVBhcnNlZFVybC5ob3N0KSB7XG5cdCAgICB1cmwgKz0gYVBhcnNlZFVybC5ob3N0O1xuXHQgIH1cblx0ICBpZiAoYVBhcnNlZFVybC5wb3J0KSB7XG5cdCAgICB1cmwgKz0gXCI6XCIgKyBhUGFyc2VkVXJsLnBvcnRcblx0ICB9XG5cdCAgaWYgKGFQYXJzZWRVcmwucGF0aCkge1xuXHQgICAgdXJsICs9IGFQYXJzZWRVcmwucGF0aDtcblx0ICB9XG5cdCAgcmV0dXJuIHVybDtcblx0fVxuXHRleHBvcnRzLnVybEdlbmVyYXRlID0gdXJsR2VuZXJhdGU7XG5cblx0LyoqXG5cdCAqIE5vcm1hbGl6ZXMgYSBwYXRoLCBvciB0aGUgcGF0aCBwb3J0aW9uIG9mIGEgVVJMOlxuXHQgKlxuXHQgKiAtIFJlcGxhY2VzIGNvbnNlY3V0aXZlIHNsYXNoZXMgd2l0aCBvbmUgc2xhc2guXG5cdCAqIC0gUmVtb3ZlcyB1bm5lY2Vzc2FyeSAnLicgcGFydHMuXG5cdCAqIC0gUmVtb3ZlcyB1bm5lY2Vzc2FyeSAnPGRpcj4vLi4nIHBhcnRzLlxuXHQgKlxuXHQgKiBCYXNlZCBvbiBjb2RlIGluIHRoZSBOb2RlLmpzICdwYXRoJyBjb3JlIG1vZHVsZS5cblx0ICpcblx0ICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIHVybCB0byBub3JtYWxpemUuXG5cdCAqL1xuXHRmdW5jdGlvbiBub3JtYWxpemUoYVBhdGgpIHtcblx0ICB2YXIgcGF0aCA9IGFQYXRoO1xuXHQgIHZhciB1cmwgPSB1cmxQYXJzZShhUGF0aCk7XG5cdCAgaWYgKHVybCkge1xuXHQgICAgaWYgKCF1cmwucGF0aCkge1xuXHQgICAgICByZXR1cm4gYVBhdGg7XG5cdCAgICB9XG5cdCAgICBwYXRoID0gdXJsLnBhdGg7XG5cdCAgfVxuXHQgIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpO1xuXG5cdCAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgvXFwvKy8pO1xuXHQgIGZvciAodmFyIHBhcnQsIHVwID0gMCwgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdCAgICBwYXJ0ID0gcGFydHNbaV07XG5cdCAgICBpZiAocGFydCA9PT0gJy4nKSB7XG5cdCAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcblx0ICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuXHQgICAgICB1cCsrO1xuXHQgICAgfSBlbHNlIGlmICh1cCA+IDApIHtcblx0ICAgICAgaWYgKHBhcnQgPT09ICcnKSB7XG5cdCAgICAgICAgLy8gVGhlIGZpcnN0IHBhcnQgaXMgYmxhbmsgaWYgdGhlIHBhdGggaXMgYWJzb2x1dGUuIFRyeWluZyB0byBnb1xuXHQgICAgICAgIC8vIGFib3ZlIHRoZSByb290IGlzIGEgbm8tb3AuIFRoZXJlZm9yZSB3ZSBjYW4gcmVtb3ZlIGFsbCAnLi4nIHBhcnRzXG5cdCAgICAgICAgLy8gZGlyZWN0bHkgYWZ0ZXIgdGhlIHJvb3QuXG5cdCAgICAgICAgcGFydHMuc3BsaWNlKGkgKyAxLCB1cCk7XG5cdCAgICAgICAgdXAgPSAwO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHBhcnRzLnNwbGljZShpLCAyKTtcblx0ICAgICAgICB1cC0tO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHQgIHBhdGggPSBwYXJ0cy5qb2luKCcvJyk7XG5cblx0ICBpZiAocGF0aCA9PT0gJycpIHtcblx0ICAgIHBhdGggPSBpc0Fic29sdXRlID8gJy8nIDogJy4nO1xuXHQgIH1cblxuXHQgIGlmICh1cmwpIHtcblx0ICAgIHVybC5wYXRoID0gcGF0aDtcblx0ICAgIHJldHVybiB1cmxHZW5lcmF0ZSh1cmwpO1xuXHQgIH1cblx0ICByZXR1cm4gcGF0aDtcblx0fVxuXHRleHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcblxuXHQvKipcblx0ICogSm9pbnMgdHdvIHBhdGhzL1VSTHMuXG5cdCAqXG5cdCAqIEBwYXJhbSBhUm9vdCBUaGUgcm9vdCBwYXRoIG9yIFVSTC5cblx0ICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIFVSTCB0byBiZSBqb2luZWQgd2l0aCB0aGUgcm9vdC5cblx0ICpcblx0ICogLSBJZiBhUGF0aCBpcyBhIFVSTCBvciBhIGRhdGEgVVJJLCBhUGF0aCBpcyByZXR1cm5lZCwgdW5sZXNzIGFQYXRoIGlzIGFcblx0ICogICBzY2hlbWUtcmVsYXRpdmUgVVJMOiBUaGVuIHRoZSBzY2hlbWUgb2YgYVJvb3QsIGlmIGFueSwgaXMgcHJlcGVuZGVkXG5cdCAqICAgZmlyc3QuXG5cdCAqIC0gT3RoZXJ3aXNlIGFQYXRoIGlzIGEgcGF0aC4gSWYgYVJvb3QgaXMgYSBVUkwsIHRoZW4gaXRzIHBhdGggcG9ydGlvblxuXHQgKiAgIGlzIHVwZGF0ZWQgd2l0aCB0aGUgcmVzdWx0IGFuZCBhUm9vdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlIHRoZSByZXN1bHRcblx0ICogICBpcyByZXR1cm5lZC5cblx0ICogICAtIElmIGFQYXRoIGlzIGFic29sdXRlLCB0aGUgcmVzdWx0IGlzIGFQYXRoLlxuXHQgKiAgIC0gT3RoZXJ3aXNlIHRoZSB0d28gcGF0aHMgYXJlIGpvaW5lZCB3aXRoIGEgc2xhc2guXG5cdCAqIC0gSm9pbmluZyBmb3IgZXhhbXBsZSAnaHR0cDovLycgYW5kICd3d3cuZXhhbXBsZS5jb20nIGlzIGFsc28gc3VwcG9ydGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gam9pbihhUm9vdCwgYVBhdGgpIHtcblx0ICBpZiAoYVJvb3QgPT09IFwiXCIpIHtcblx0ICAgIGFSb290ID0gXCIuXCI7XG5cdCAgfVxuXHQgIGlmIChhUGF0aCA9PT0gXCJcIikge1xuXHQgICAgYVBhdGggPSBcIi5cIjtcblx0ICB9XG5cdCAgdmFyIGFQYXRoVXJsID0gdXJsUGFyc2UoYVBhdGgpO1xuXHQgIHZhciBhUm9vdFVybCA9IHVybFBhcnNlKGFSb290KTtcblx0ICBpZiAoYVJvb3RVcmwpIHtcblx0ICAgIGFSb290ID0gYVJvb3RVcmwucGF0aCB8fCAnLyc7XG5cdCAgfVxuXG5cdCAgLy8gYGpvaW4oZm9vLCAnLy93d3cuZXhhbXBsZS5vcmcnKWBcblx0ICBpZiAoYVBhdGhVcmwgJiYgIWFQYXRoVXJsLnNjaGVtZSkge1xuXHQgICAgaWYgKGFSb290VXJsKSB7XG5cdCAgICAgIGFQYXRoVXJsLnNjaGVtZSA9IGFSb290VXJsLnNjaGVtZTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUGF0aFVybCk7XG5cdCAgfVxuXG5cdCAgaWYgKGFQYXRoVXJsIHx8IGFQYXRoLm1hdGNoKGRhdGFVcmxSZWdleHApKSB7XG5cdCAgICByZXR1cm4gYVBhdGg7XG5cdCAgfVxuXG5cdCAgLy8gYGpvaW4oJ2h0dHA6Ly8nLCAnd3d3LmV4YW1wbGUuY29tJylgXG5cdCAgaWYgKGFSb290VXJsICYmICFhUm9vdFVybC5ob3N0ICYmICFhUm9vdFVybC5wYXRoKSB7XG5cdCAgICBhUm9vdFVybC5ob3N0ID0gYVBhdGg7XG5cdCAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVJvb3RVcmwpO1xuXHQgIH1cblxuXHQgIHZhciBqb2luZWQgPSBhUGF0aC5jaGFyQXQoMCkgPT09ICcvJ1xuXHQgICAgPyBhUGF0aFxuXHQgICAgOiBub3JtYWxpemUoYVJvb3QucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyBhUGF0aCk7XG5cblx0ICBpZiAoYVJvb3RVcmwpIHtcblx0ICAgIGFSb290VXJsLnBhdGggPSBqb2luZWQ7XG5cdCAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVJvb3RVcmwpO1xuXHQgIH1cblx0ICByZXR1cm4gam9pbmVkO1xuXHR9XG5cdGV4cG9ydHMuam9pbiA9IGpvaW47XG5cblx0ZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24gKGFQYXRoKSB7XG5cdCAgcmV0dXJuIGFQYXRoLmNoYXJBdCgwKSA9PT0gJy8nIHx8ICEhYVBhdGgubWF0Y2godXJsUmVnZXhwKTtcblx0fTtcblxuXHQvKipcblx0ICogTWFrZSBhIHBhdGggcmVsYXRpdmUgdG8gYSBVUkwgb3IgYW5vdGhlciBwYXRoLlxuXHQgKlxuXHQgKiBAcGFyYW0gYVJvb3QgVGhlIHJvb3QgcGF0aCBvciBVUkwuXG5cdCAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciBVUkwgdG8gYmUgbWFkZSByZWxhdGl2ZSB0byBhUm9vdC5cblx0ICovXG5cdGZ1bmN0aW9uIHJlbGF0aXZlKGFSb290LCBhUGF0aCkge1xuXHQgIGlmIChhUm9vdCA9PT0gXCJcIikge1xuXHQgICAgYVJvb3QgPSBcIi5cIjtcblx0ICB9XG5cblx0ICBhUm9vdCA9IGFSb290LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cblx0ICAvLyBJdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHBhdGggdG8gYmUgYWJvdmUgdGhlIHJvb3QuIEluIHRoaXMgY2FzZSwgc2ltcGx5XG5cdCAgLy8gY2hlY2tpbmcgd2hldGhlciB0aGUgcm9vdCBpcyBhIHByZWZpeCBvZiB0aGUgcGF0aCB3b24ndCB3b3JrLiBJbnN0ZWFkLCB3ZVxuXHQgIC8vIG5lZWQgdG8gcmVtb3ZlIGNvbXBvbmVudHMgZnJvbSB0aGUgcm9vdCBvbmUgYnkgb25lLCB1bnRpbCBlaXRoZXIgd2UgZmluZFxuXHQgIC8vIGEgcHJlZml4IHRoYXQgZml0cywgb3Igd2UgcnVuIG91dCBvZiBjb21wb25lbnRzIHRvIHJlbW92ZS5cblx0ICB2YXIgbGV2ZWwgPSAwO1xuXHQgIHdoaWxlIChhUGF0aC5pbmRleE9mKGFSb290ICsgJy8nKSAhPT0gMCkge1xuXHQgICAgdmFyIGluZGV4ID0gYVJvb3QubGFzdEluZGV4T2YoXCIvXCIpO1xuXHQgICAgaWYgKGluZGV4IDwgMCkge1xuXHQgICAgICByZXR1cm4gYVBhdGg7XG5cdCAgICB9XG5cblx0ICAgIC8vIElmIHRoZSBvbmx5IHBhcnQgb2YgdGhlIHJvb3QgdGhhdCBpcyBsZWZ0IGlzIHRoZSBzY2hlbWUgKGkuZS4gaHR0cDovLyxcblx0ICAgIC8vIGZpbGU6Ly8vLCBldGMuKSwgb25lIG9yIG1vcmUgc2xhc2hlcyAoLyksIG9yIHNpbXBseSBub3RoaW5nIGF0IGFsbCwgd2Vcblx0ICAgIC8vIGhhdmUgZXhoYXVzdGVkIGFsbCBjb21wb25lbnRzLCBzbyB0aGUgcGF0aCBpcyBub3QgcmVsYXRpdmUgdG8gdGhlIHJvb3QuXG5cdCAgICBhUm9vdCA9IGFSb290LnNsaWNlKDAsIGluZGV4KTtcblx0ICAgIGlmIChhUm9vdC5tYXRjaCgvXihbXlxcL10rOlxcLyk/XFwvKiQvKSkge1xuXHQgICAgICByZXR1cm4gYVBhdGg7XG5cdCAgICB9XG5cblx0ICAgICsrbGV2ZWw7XG5cdCAgfVxuXG5cdCAgLy8gTWFrZSBzdXJlIHdlIGFkZCBhIFwiLi4vXCIgZm9yIGVhY2ggY29tcG9uZW50IHdlIHJlbW92ZWQgZnJvbSB0aGUgcm9vdC5cblx0ICByZXR1cm4gQXJyYXkobGV2ZWwgKyAxKS5qb2luKFwiLi4vXCIpICsgYVBhdGguc3Vic3RyKGFSb290Lmxlbmd0aCArIDEpO1xuXHR9XG5cdGV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZTtcblxuXHR2YXIgc3VwcG9ydHNOdWxsUHJvdG8gPSAoZnVuY3Rpb24gKCkge1xuXHQgIHZhciBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHQgIHJldHVybiAhKCdfX3Byb3RvX18nIGluIG9iaik7XG5cdH0oKSk7XG5cblx0ZnVuY3Rpb24gaWRlbnRpdHkgKHMpIHtcblx0ICByZXR1cm4gcztcblx0fVxuXG5cdC8qKlxuXHQgKiBCZWNhdXNlIGJlaGF2aW9yIGdvZXMgd2Fja3kgd2hlbiB5b3Ugc2V0IGBfX3Byb3RvX19gIG9uIG9iamVjdHMsIHdlXG5cdCAqIGhhdmUgdG8gcHJlZml4IGFsbCB0aGUgc3RyaW5ncyBpbiBvdXIgc2V0IHdpdGggYW4gYXJiaXRyYXJ5IGNoYXJhY3Rlci5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3NvdXJjZS1tYXAvcHVsbC8zMSBhbmRcblx0ICogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMzBcblx0ICpcblx0ICogQHBhcmFtIFN0cmluZyBhU3RyXG5cdCAqL1xuXHRmdW5jdGlvbiB0b1NldFN0cmluZyhhU3RyKSB7XG5cdCAgaWYgKGlzUHJvdG9TdHJpbmcoYVN0cikpIHtcblx0ICAgIHJldHVybiAnJCcgKyBhU3RyO1xuXHQgIH1cblxuXHQgIHJldHVybiBhU3RyO1xuXHR9XG5cdGV4cG9ydHMudG9TZXRTdHJpbmcgPSBzdXBwb3J0c051bGxQcm90byA/IGlkZW50aXR5IDogdG9TZXRTdHJpbmc7XG5cblx0ZnVuY3Rpb24gZnJvbVNldFN0cmluZyhhU3RyKSB7XG5cdCAgaWYgKGlzUHJvdG9TdHJpbmcoYVN0cikpIHtcblx0ICAgIHJldHVybiBhU3RyLnNsaWNlKDEpO1xuXHQgIH1cblxuXHQgIHJldHVybiBhU3RyO1xuXHR9XG5cdGV4cG9ydHMuZnJvbVNldFN0cmluZyA9IHN1cHBvcnRzTnVsbFByb3RvID8gaWRlbnRpdHkgOiBmcm9tU2V0U3RyaW5nO1xuXG5cdGZ1bmN0aW9uIGlzUHJvdG9TdHJpbmcocykge1xuXHQgIGlmICghcykge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblxuXHQgIHZhciBsZW5ndGggPSBzLmxlbmd0aDtcblxuXHQgIGlmIChsZW5ndGggPCA5IC8qIFwiX19wcm90b19fXCIubGVuZ3RoICovKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXG5cdCAgaWYgKHMuY2hhckNvZGVBdChsZW5ndGggLSAxKSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuXHQgICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMikgIT09IDk1ICAvKiAnXycgKi8gfHxcblx0ICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDMpICE9PSAxMTEgLyogJ28nICovIHx8XG5cdCAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA0KSAhPT0gMTE2IC8qICd0JyAqLyB8fFxuXHQgICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNSkgIT09IDExMSAvKiAnbycgKi8gfHxcblx0ICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDYpICE9PSAxMTQgLyogJ3InICovIHx8XG5cdCAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA3KSAhPT0gMTEyIC8qICdwJyAqLyB8fFxuXHQgICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gOCkgIT09IDk1ICAvKiAnXycgKi8gfHxcblx0ICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDkpICE9PSA5NSAgLyogJ18nICovKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXG5cdCAgZm9yICh2YXIgaSA9IGxlbmd0aCAtIDEwOyBpID49IDA7IGktLSkge1xuXHQgICAgaWYgKHMuY2hhckNvZGVBdChpKSAhPT0gMzYgLyogJyQnICovKSB7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdoZXJlIHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuXHQgKlxuXHQgKiBPcHRpb25hbGx5IHBhc3MgaW4gYHRydWVgIGFzIGBvbmx5Q29tcGFyZUdlbmVyYXRlZGAgdG8gY29uc2lkZXIgdHdvXG5cdCAqIG1hcHBpbmdzIHdpdGggdGhlIHNhbWUgb3JpZ2luYWwgc291cmNlL2xpbmUvY29sdW1uLCBidXQgZGlmZmVyZW50IGdlbmVyYXRlZFxuXHQgKiBsaW5lIGFuZCBjb2x1bW4gdGhlIHNhbWUuIFVzZWZ1bCB3aGVuIHNlYXJjaGluZyBmb3IgYSBtYXBwaW5nIHdpdGggYVxuXHQgKiBzdHViYmVkIG91dCBtYXBwaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMobWFwcGluZ0EsIG1hcHBpbmdCLCBvbmx5Q29tcGFyZU9yaWdpbmFsKSB7XG5cdCAgdmFyIGNtcCA9IG1hcHBpbmdBLnNvdXJjZSAtIG1hcHBpbmdCLnNvdXJjZTtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG5cdCAgaWYgKGNtcCAhPT0gMCB8fCBvbmx5Q29tcGFyZU9yaWdpbmFsKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIG1hcHBpbmdBLm5hbWUgLSBtYXBwaW5nQi5uYW1lO1xuXHR9XG5cdGV4cG9ydHMuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMgPSBjb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucztcblxuXHQvKipcblx0ICogQ29tcGFyYXRvciBiZXR3ZWVuIHR3byBtYXBwaW5ncyB3aXRoIGRlZmxhdGVkIHNvdXJjZSBhbmQgbmFtZSBpbmRpY2VzIHdoZXJlXG5cdCAqIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb25zIGFyZSBjb21wYXJlZC5cblx0ICpcblx0ICogT3B0aW9uYWxseSBwYXNzIGluIGB0cnVlYCBhcyBgb25seUNvbXBhcmVHZW5lcmF0ZWRgIHRvIGNvbnNpZGVyIHR3b1xuXHQgKiBtYXBwaW5ncyB3aXRoIHRoZSBzYW1lIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4sIGJ1dCBkaWZmZXJlbnRcblx0ICogc291cmNlL25hbWUvb3JpZ2luYWwgbGluZSBhbmQgY29sdW1uIHRoZSBzYW1lLiBVc2VmdWwgd2hlbiBzZWFyY2hpbmcgZm9yIGFcblx0ICogbWFwcGluZyB3aXRoIGEgc3R1YmJlZCBvdXQgbWFwcGluZy5cblx0ICovXG5cdGZ1bmN0aW9uIGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKG1hcHBpbmdBLCBtYXBwaW5nQiwgb25seUNvbXBhcmVHZW5lcmF0ZWQpIHtcblx0ICB2YXIgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG5cdCAgaWYgKGNtcCAhPT0gMCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW4gLSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG5cdCAgaWYgKGNtcCAhPT0gMCB8fCBvbmx5Q29tcGFyZUdlbmVyYXRlZCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICBjbXAgPSBtYXBwaW5nQS5zb3VyY2UgLSBtYXBwaW5nQi5zb3VyY2U7XG5cdCAgaWYgKGNtcCAhPT0gMCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbExpbmUgLSBtYXBwaW5nQi5vcmlnaW5hbExpbmU7XG5cdCAgaWYgKGNtcCAhPT0gMCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIG1hcHBpbmdBLm5hbWUgLSBtYXBwaW5nQi5uYW1lO1xuXHR9XG5cdGV4cG9ydHMuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQgPSBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZDtcblxuXHRmdW5jdGlvbiBzdHJjbXAoYVN0cjEsIGFTdHIyKSB7XG5cdCAgaWYgKGFTdHIxID09PSBhU3RyMikge1xuXHQgICAgcmV0dXJuIDA7XG5cdCAgfVxuXG5cdCAgaWYgKGFTdHIxID4gYVN0cjIpIHtcblx0ICAgIHJldHVybiAxO1xuXHQgIH1cblxuXHQgIHJldHVybiAtMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdpdGggaW5mbGF0ZWQgc291cmNlIGFuZCBuYW1lIHN0cmluZ3Mgd2hlcmVcblx0ICogdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCKSB7XG5cdCAgdmFyIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uIC0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgY21wID0gc3RyY21wKG1hcHBpbmdBLnNvdXJjZSwgbWFwcGluZ0Iuc291cmNlKTtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG5cdCAgaWYgKGNtcCAhPT0gMCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICByZXR1cm4gc3RyY21wKG1hcHBpbmdBLm5hbWUsIG1hcHBpbmdCLm5hbWUpO1xuXHR9XG5cdGV4cG9ydHMuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQgPSBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZDtcblxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuXHQvKlxuXHQgKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcblx0ICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuXHQgKi9cblxuXHRleHBvcnRzLkdSRUFURVNUX0xPV0VSX0JPVU5EID0gMTtcblx0ZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cblx0LyoqXG5cdCAqIFJlY3Vyc2l2ZSBpbXBsZW1lbnRhdGlvbiBvZiBiaW5hcnkgc2VhcmNoLlxuXHQgKlxuXHQgKiBAcGFyYW0gYUxvdyBJbmRpY2VzIGhlcmUgYW5kIGxvd2VyIGRvIG5vdCBjb250YWluIHRoZSBuZWVkbGUuXG5cdCAqIEBwYXJhbSBhSGlnaCBJbmRpY2VzIGhlcmUgYW5kIGhpZ2hlciBkbyBub3QgY29udGFpbiB0aGUgbmVlZGxlLlxuXHQgKiBAcGFyYW0gYU5lZWRsZSBUaGUgZWxlbWVudCBiZWluZyBzZWFyY2hlZCBmb3IuXG5cdCAqIEBwYXJhbSBhSGF5c3RhY2sgVGhlIG5vbi1lbXB0eSBhcnJheSBiZWluZyBzZWFyY2hlZC5cblx0ICogQHBhcmFtIGFDb21wYXJlIEZ1bmN0aW9uIHdoaWNoIHRha2VzIHR3byBlbGVtZW50cyBhbmQgcmV0dXJucyAtMSwgMCwgb3IgMS5cblx0ICogQHBhcmFtIGFCaWFzIEVpdGhlciAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuXHQgKiAgICAgJ2JpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcblx0ICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcblx0ICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVjdXJzaXZlU2VhcmNoKGFMb3csIGFIaWdoLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcykge1xuXHQgIC8vIFRoaXMgZnVuY3Rpb24gdGVybWluYXRlcyB3aGVuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XG5cdCAgLy9cblx0ICAvLyAgIDEuIFdlIGZpbmQgdGhlIGV4YWN0IGVsZW1lbnQgd2UgYXJlIGxvb2tpbmcgZm9yLlxuXHQgIC8vXG5cdCAgLy8gICAyLiBXZSBkaWQgbm90IGZpbmQgdGhlIGV4YWN0IGVsZW1lbnQsIGJ1dCB3ZSBjYW4gcmV0dXJuIHRoZSBpbmRleCBvZlxuXHQgIC8vICAgICAgdGhlIG5leHQtY2xvc2VzdCBlbGVtZW50LlxuXHQgIC8vXG5cdCAgLy8gICAzLiBXZSBkaWQgbm90IGZpbmQgdGhlIGV4YWN0IGVsZW1lbnQsIGFuZCB0aGVyZSBpcyBubyBuZXh0LWNsb3Nlc3Rcblx0ICAvLyAgICAgIGVsZW1lbnQgdGhhbiB0aGUgb25lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLCBzbyB3ZSByZXR1cm4gLTEuXG5cdCAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGFIaWdoIC0gYUxvdykgLyAyKSArIGFMb3c7XG5cdCAgdmFyIGNtcCA9IGFDb21wYXJlKGFOZWVkbGUsIGFIYXlzdGFja1ttaWRdLCB0cnVlKTtcblx0ICBpZiAoY21wID09PSAwKSB7XG5cdCAgICAvLyBGb3VuZCB0aGUgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG5cdCAgICByZXR1cm4gbWlkO1xuXHQgIH1cblx0ICBlbHNlIGlmIChjbXAgPiAwKSB7XG5cdCAgICAvLyBPdXIgbmVlZGxlIGlzIGdyZWF0ZXIgdGhhbiBhSGF5c3RhY2tbbWlkXS5cblx0ICAgIGlmIChhSGlnaCAtIG1pZCA+IDEpIHtcblx0ICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgaW4gdGhlIHVwcGVyIGhhbGYuXG5cdCAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2gobWlkLCBhSGlnaCwgYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBUaGUgZXhhY3QgbmVlZGxlIGVsZW1lbnQgd2FzIG5vdCBmb3VuZCBpbiB0aGlzIGhheXN0YWNrLiBEZXRlcm1pbmUgaWZcblx0ICAgIC8vIHdlIGFyZSBpbiB0ZXJtaW5hdGlvbiBjYXNlICgzKSBvciAoMikgYW5kIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgdGhpbmcuXG5cdCAgICBpZiAoYUJpYXMgPT0gZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCkge1xuXHQgICAgICByZXR1cm4gYUhpZ2ggPCBhSGF5c3RhY2subGVuZ3RoID8gYUhpZ2ggOiAtMTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBtaWQ7XG5cdCAgICB9XG5cdCAgfVxuXHQgIGVsc2Uge1xuXHQgICAgLy8gT3VyIG5lZWRsZSBpcyBsZXNzIHRoYW4gYUhheXN0YWNrW21pZF0uXG5cdCAgICBpZiAobWlkIC0gYUxvdyA+IDEpIHtcblx0ICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgaW4gdGhlIGxvd2VyIGhhbGYuXG5cdCAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2goYUxvdywgbWlkLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIHdlIGFyZSBpbiB0ZXJtaW5hdGlvbiBjYXNlICgzKSBvciAoMikgYW5kIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgdGhpbmcuXG5cdCAgICBpZiAoYUJpYXMgPT0gZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCkge1xuXHQgICAgICByZXR1cm4gbWlkO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGFMb3cgPCAwID8gLTEgOiBhTG93O1xuXHQgICAgfVxuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGJpbmFyeSBzZWFyY2ggd2hpY2ggd2lsbCBhbHdheXMgdHJ5IGFuZCByZXR1cm5cblx0ICogdGhlIGluZGV4IG9mIHRoZSBjbG9zZXN0IGVsZW1lbnQgaWYgdGhlcmUgaXMgbm8gZXhhY3QgaGl0LiBUaGlzIGlzIGJlY2F1c2Vcblx0ICogbWFwcGluZ3MgYmV0d2VlbiBvcmlnaW5hbCBhbmQgZ2VuZXJhdGVkIGxpbmUvY29sIHBhaXJzIGFyZSBzaW5nbGUgcG9pbnRzLFxuXHQgKiBhbmQgdGhlcmUgaXMgYW4gaW1wbGljaXQgcmVnaW9uIGJldHdlZW4gZWFjaCBvZiB0aGVtLCBzbyBhIG1pc3MganVzdCBtZWFuc1xuXHQgKiB0aGF0IHlvdSBhcmVuJ3Qgb24gdGhlIHZlcnkgc3RhcnQgb2YgYSByZWdpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBhTmVlZGxlIFRoZSBlbGVtZW50IHlvdSBhcmUgbG9va2luZyBmb3IuXG5cdCAqIEBwYXJhbSBhSGF5c3RhY2sgVGhlIGFycmF5IHRoYXQgaXMgYmVpbmcgc2VhcmNoZWQuXG5cdCAqIEBwYXJhbSBhQ29tcGFyZSBBIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoZSBuZWVkbGUgYW5kIGFuIGVsZW1lbnQgaW4gdGhlXG5cdCAqICAgICBhcnJheSBhbmQgcmV0dXJucyAtMSwgMCwgb3IgMSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbmVlZGxlIGlzIGxlc3Ncblx0ICogICAgIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIGVsZW1lbnQsIHJlc3BlY3RpdmVseS5cblx0ICogQHBhcmFtIGFCaWFzIEVpdGhlciAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuXHQgKiAgICAgJ2JpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcblx0ICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcblx0ICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuXHQgKiAgICAgRGVmYXVsdHMgdG8gJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG5cdCAqL1xuXHRleHBvcnRzLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaChhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcykge1xuXHQgIGlmIChhSGF5c3RhY2subGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gLTE7XG5cdCAgfVxuXG5cdCAgdmFyIGluZGV4ID0gcmVjdXJzaXZlU2VhcmNoKC0xLCBhSGF5c3RhY2subGVuZ3RoLCBhTmVlZGxlLCBhSGF5c3RhY2ssXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFDb21wYXJlLCBhQmlhcyB8fCBleHBvcnRzLkdSRUFURVNUX0xPV0VSX0JPVU5EKTtcblx0ICBpZiAoaW5kZXggPCAwKSB7XG5cdCAgICByZXR1cm4gLTE7XG5cdCAgfVxuXG5cdCAgLy8gV2UgaGF2ZSBmb3VuZCBlaXRoZXIgdGhlIGV4YWN0IGVsZW1lbnQsIG9yIHRoZSBuZXh0LWNsb3Nlc3QgZWxlbWVudCB0aGFuXG5cdCAgLy8gdGhlIG9uZSB3ZSBhcmUgc2VhcmNoaW5nIGZvci4gSG93ZXZlciwgdGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUgc3VjaFxuXHQgIC8vIGVsZW1lbnQuIE1ha2Ugc3VyZSB3ZSBhbHdheXMgcmV0dXJuIHRoZSBzbWFsbGVzdCBvZiB0aGVzZS5cblx0ICB3aGlsZSAoaW5kZXggLSAxID49IDApIHtcblx0ICAgIGlmIChhQ29tcGFyZShhSGF5c3RhY2tbaW5kZXhdLCBhSGF5c3RhY2tbaW5kZXggLSAxXSwgdHJ1ZSkgIT09IDApIHtcblx0ICAgICAgYnJlYWs7XG5cdCAgICB9XG5cdCAgICAtLWluZGV4O1xuXHQgIH1cblxuXHQgIHJldHVybiBpbmRleDtcblx0fTtcblxuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuXHQvKlxuXHQgKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcblx0ICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuXHQgKi9cblxuXHR2YXIgdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5cdC8qKlxuXHQgKiBBIGRhdGEgc3RydWN0dXJlIHdoaWNoIGlzIGEgY29tYmluYXRpb24gb2YgYW4gYXJyYXkgYW5kIGEgc2V0LiBBZGRpbmcgYSBuZXdcblx0ICogbWVtYmVyIGlzIE8oMSksIHRlc3RpbmcgZm9yIG1lbWJlcnNoaXAgaXMgTygxKSwgYW5kIGZpbmRpbmcgdGhlIGluZGV4IG9mIGFuXG5cdCAqIGVsZW1lbnQgaXMgTygxKS4gUmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgc2V0IGlzIG5vdCBzdXBwb3J0ZWQuIE9ubHlcblx0ICogc3RyaW5ncyBhcmUgc3VwcG9ydGVkIGZvciBtZW1iZXJzaGlwLlxuXHQgKi9cblx0ZnVuY3Rpb24gQXJyYXlTZXQoKSB7XG5cdCAgdGhpcy5fYXJyYXkgPSBbXTtcblx0ICB0aGlzLl9zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRpYyBtZXRob2QgZm9yIGNyZWF0aW5nIEFycmF5U2V0IGluc3RhbmNlcyBmcm9tIGFuIGV4aXN0aW5nIGFycmF5LlxuXHQgKi9cblx0QXJyYXlTZXQuZnJvbUFycmF5ID0gZnVuY3Rpb24gQXJyYXlTZXRfZnJvbUFycmF5KGFBcnJheSwgYUFsbG93RHVwbGljYXRlcykge1xuXHQgIHZhciBzZXQgPSBuZXcgQXJyYXlTZXQoKTtcblx0ICBmb3IgKHZhciBpID0gMCwgbGVuID0gYUFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICBzZXQuYWRkKGFBcnJheVtpXSwgYUFsbG93RHVwbGljYXRlcyk7XG5cdCAgfVxuXHQgIHJldHVybiBzZXQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJldHVybiBob3cgbWFueSB1bmlxdWUgaXRlbXMgYXJlIGluIHRoaXMgQXJyYXlTZXQuIElmIGR1cGxpY2F0ZXMgaGF2ZSBiZWVuXG5cdCAqIGFkZGVkLCB0aGFuIHRob3NlIGRvIG5vdCBjb3VudCB0b3dhcmRzIHRoZSBzaXplLlxuXHQgKlxuXHQgKiBAcmV0dXJucyBOdW1iZXJcblx0ICovXG5cdEFycmF5U2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gQXJyYXlTZXRfc2l6ZSgpIHtcblx0ICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fc2V0KS5sZW5ndGg7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCB0aGUgZ2l2ZW4gc3RyaW5nIHRvIHRoaXMgc2V0LlxuXHQgKlxuXHQgKiBAcGFyYW0gU3RyaW5nIGFTdHJcblx0ICovXG5cdEFycmF5U2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBBcnJheVNldF9hZGQoYVN0ciwgYUFsbG93RHVwbGljYXRlcykge1xuXHQgIHZhciBzU3RyID0gdXRpbC50b1NldFN0cmluZyhhU3RyKTtcblx0ICB2YXIgaXNEdXBsaWNhdGUgPSBoYXMuY2FsbCh0aGlzLl9zZXQsIHNTdHIpO1xuXHQgIHZhciBpZHggPSB0aGlzLl9hcnJheS5sZW5ndGg7XG5cdCAgaWYgKCFpc0R1cGxpY2F0ZSB8fCBhQWxsb3dEdXBsaWNhdGVzKSB7XG5cdCAgICB0aGlzLl9hcnJheS5wdXNoKGFTdHIpO1xuXHQgIH1cblx0ICBpZiAoIWlzRHVwbGljYXRlKSB7XG5cdCAgICB0aGlzLl9zZXRbc1N0cl0gPSBpZHg7XG5cdCAgfVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBJcyB0aGUgZ2l2ZW4gc3RyaW5nIGEgbWVtYmVyIG9mIHRoaXMgc2V0P1xuXHQgKlxuXHQgKiBAcGFyYW0gU3RyaW5nIGFTdHJcblx0ICovXG5cdEFycmF5U2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBBcnJheVNldF9oYXMoYVN0cikge1xuXHQgIHZhciBzU3RyID0gdXRpbC50b1NldFN0cmluZyhhU3RyKTtcblx0ICByZXR1cm4gaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKTtcblx0fTtcblxuXHQvKipcblx0ICogV2hhdCBpcyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIHN0cmluZyBpbiB0aGUgYXJyYXk/XG5cdCAqXG5cdCAqIEBwYXJhbSBTdHJpbmcgYVN0clxuXHQgKi9cblx0QXJyYXlTZXQucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBBcnJheVNldF9pbmRleE9mKGFTdHIpIHtcblx0ICB2YXIgc1N0ciA9IHV0aWwudG9TZXRTdHJpbmcoYVN0cik7XG5cdCAgaWYgKGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cikpIHtcblx0ICAgIHJldHVybiB0aGlzLl9zZXRbc1N0cl07XG5cdCAgfVxuXHQgIHRocm93IG5ldyBFcnJvcignXCInICsgYVN0ciArICdcIiBpcyBub3QgaW4gdGhlIHNldC4nKTtcblx0fTtcblxuXHQvKipcblx0ICogV2hhdCBpcyB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXg/XG5cdCAqXG5cdCAqIEBwYXJhbSBOdW1iZXIgYUlkeFxuXHQgKi9cblx0QXJyYXlTZXQucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gQXJyYXlTZXRfYXQoYUlkeCkge1xuXHQgIGlmIChhSWR4ID49IDAgJiYgYUlkeCA8IHRoaXMuX2FycmF5Lmxlbmd0aCkge1xuXHQgICAgcmV0dXJuIHRoaXMuX2FycmF5W2FJZHhdO1xuXHQgIH1cblx0ICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgaW5kZXhlZCBieSAnICsgYUlkeCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgc2V0ICh3aGljaCBoYXMgdGhlIHByb3BlciBpbmRpY2VzXG5cdCAqIGluZGljYXRlZCBieSBpbmRleE9mKS4gTm90ZSB0aGF0IHRoaXMgaXMgYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBhcnJheSB1c2VkXG5cdCAqIGZvciBzdG9yaW5nIHRoZSBtZW1iZXJzIHNvIHRoYXQgbm8gb25lIGNhbiBtZXNzIHdpdGggaW50ZXJuYWwgc3RhdGUuXG5cdCAqL1xuXHRBcnJheVNldC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIEFycmF5U2V0X3RvQXJyYXkoKSB7XG5cdCAgcmV0dXJuIHRoaXMuX2FycmF5LnNsaWNlKCk7XG5cdH07XG5cblx0ZXhwb3J0cy5BcnJheVNldCA9IEFycmF5U2V0O1xuXG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG5cdC8qXG5cdCAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuXHQgKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG5cdCAqXG5cdCAqIEJhc2VkIG9uIHRoZSBCYXNlIDY0IFZMUSBpbXBsZW1lbnRhdGlvbiBpbiBDbG9zdXJlIENvbXBpbGVyOlxuXHQgKiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nsb3N1cmUtY29tcGlsZXIvc291cmNlL2Jyb3dzZS90cnVuay9zcmMvY29tL2dvb2dsZS9kZWJ1Z2dpbmcvc291cmNlbWFwL0Jhc2U2NFZMUS5qYXZhXG5cdCAqXG5cdCAqIENvcHlyaWdodCAyMDExIFRoZSBDbG9zdXJlIENvbXBpbGVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cdCAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuXHQgKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG5cdCAqIG1ldDpcblx0ICpcblx0ICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcblx0ICogICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXHQgKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG5cdCAqICAgIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG5cdCAqICAgIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZFxuXHQgKiAgICB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cdCAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcblx0ICogICAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkXG5cdCAqICAgIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cblx0ICpcblx0ICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuXHQgKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG5cdCAqIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuXHQgKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuXHQgKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcblx0ICogU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuXHQgKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcblx0ICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG5cdCAqIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcblx0ICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG5cdCAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cdCAqL1xuXG5cdHZhciBiYXNlNjQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdC8vIEEgc2luZ2xlIGJhc2UgNjQgZGlnaXQgY2FuIGNvbnRhaW4gNiBiaXRzIG9mIGRhdGEuIEZvciB0aGUgYmFzZSA2NCB2YXJpYWJsZVxuXHQvLyBsZW5ndGggcXVhbnRpdGllcyB3ZSB1c2UgaW4gdGhlIHNvdXJjZSBtYXAgc3BlYywgdGhlIGZpcnN0IGJpdCBpcyB0aGUgc2lnbixcblx0Ly8gdGhlIG5leHQgZm91ciBiaXRzIGFyZSB0aGUgYWN0dWFsIHZhbHVlLCBhbmQgdGhlIDZ0aCBiaXQgaXMgdGhlXG5cdC8vIGNvbnRpbnVhdGlvbiBiaXQuIFRoZSBjb250aW51YXRpb24gYml0IHRlbGxzIHVzIHdoZXRoZXIgdGhlcmUgYXJlIG1vcmVcblx0Ly8gZGlnaXRzIGluIHRoaXMgdmFsdWUgZm9sbG93aW5nIHRoaXMgZGlnaXQuXG5cdC8vXG5cdC8vICAgQ29udGludWF0aW9uXG5cdC8vICAgfCAgICBTaWduXG5cdC8vICAgfCAgICB8XG5cdC8vICAgViAgICBWXG5cdC8vICAgMTAxMDExXG5cblx0dmFyIFZMUV9CQVNFX1NISUZUID0gNTtcblxuXHQvLyBiaW5hcnk6IDEwMDAwMFxuXHR2YXIgVkxRX0JBU0UgPSAxIDw8IFZMUV9CQVNFX1NISUZUO1xuXG5cdC8vIGJpbmFyeTogMDExMTExXG5cdHZhciBWTFFfQkFTRV9NQVNLID0gVkxRX0JBU0UgLSAxO1xuXG5cdC8vIGJpbmFyeTogMTAwMDAwXG5cdHZhciBWTFFfQ09OVElOVUFUSU9OX0JJVCA9IFZMUV9CQVNFO1xuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBmcm9tIGEgdHdvLWNvbXBsZW1lbnQgdmFsdWUgdG8gYSB2YWx1ZSB3aGVyZSB0aGUgc2lnbiBiaXQgaXNcblx0ICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG5cdCAqICAgMSBiZWNvbWVzIDIgKDEwIGJpbmFyeSksIC0xIGJlY29tZXMgMyAoMTEgYmluYXJ5KVxuXHQgKiAgIDIgYmVjb21lcyA0ICgxMDAgYmluYXJ5KSwgLTIgYmVjb21lcyA1ICgxMDEgYmluYXJ5KVxuXHQgKi9cblx0ZnVuY3Rpb24gdG9WTFFTaWduZWQoYVZhbHVlKSB7XG5cdCAgcmV0dXJuIGFWYWx1ZSA8IDBcblx0ICAgID8gKCgtYVZhbHVlKSA8PCAxKSArIDFcblx0ICAgIDogKGFWYWx1ZSA8PCAxKSArIDA7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgdG8gYSB0d28tY29tcGxlbWVudCB2YWx1ZSBmcm9tIGEgdmFsdWUgd2hlcmUgdGhlIHNpZ24gYml0IGlzXG5cdCAqIHBsYWNlZCBpbiB0aGUgbGVhc3Qgc2lnbmlmaWNhbnQgYml0LiAgRm9yIGV4YW1wbGUsIGFzIGRlY2ltYWxzOlxuXHQgKiAgIDIgKDEwIGJpbmFyeSkgYmVjb21lcyAxLCAzICgxMSBiaW5hcnkpIGJlY29tZXMgLTFcblx0ICogICA0ICgxMDAgYmluYXJ5KSBiZWNvbWVzIDIsIDUgKDEwMSBiaW5hcnkpIGJlY29tZXMgLTJcblx0ICovXG5cdGZ1bmN0aW9uIGZyb21WTFFTaWduZWQoYVZhbHVlKSB7XG5cdCAgdmFyIGlzTmVnYXRpdmUgPSAoYVZhbHVlICYgMSkgPT09IDE7XG5cdCAgdmFyIHNoaWZ0ZWQgPSBhVmFsdWUgPj4gMTtcblx0ICByZXR1cm4gaXNOZWdhdGl2ZVxuXHQgICAgPyAtc2hpZnRlZFxuXHQgICAgOiBzaGlmdGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGJhc2UgNjQgVkxRIGVuY29kZWQgdmFsdWUuXG5cdCAqL1xuXHRleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIGJhc2U2NFZMUV9lbmNvZGUoYVZhbHVlKSB7XG5cdCAgdmFyIGVuY29kZWQgPSBcIlwiO1xuXHQgIHZhciBkaWdpdDtcblxuXHQgIHZhciB2bHEgPSB0b1ZMUVNpZ25lZChhVmFsdWUpO1xuXG5cdCAgZG8ge1xuXHQgICAgZGlnaXQgPSB2bHEgJiBWTFFfQkFTRV9NQVNLO1xuXHQgICAgdmxxID4+Pj0gVkxRX0JBU0VfU0hJRlQ7XG5cdCAgICBpZiAodmxxID4gMCkge1xuXHQgICAgICAvLyBUaGVyZSBhcmUgc3RpbGwgbW9yZSBkaWdpdHMgaW4gdGhpcyB2YWx1ZSwgc28gd2UgbXVzdCBtYWtlIHN1cmUgdGhlXG5cdCAgICAgIC8vIGNvbnRpbnVhdGlvbiBiaXQgaXMgbWFya2VkLlxuXHQgICAgICBkaWdpdCB8PSBWTFFfQ09OVElOVUFUSU9OX0JJVDtcblx0ICAgIH1cblx0ICAgIGVuY29kZWQgKz0gYmFzZTY0LmVuY29kZShkaWdpdCk7XG5cdCAgfSB3aGlsZSAodmxxID4gMCk7XG5cblx0ICByZXR1cm4gZW5jb2RlZDtcblx0fTtcblxuXHQvKipcblx0ICogRGVjb2RlcyB0aGUgbmV4dCBiYXNlIDY0IFZMUSB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBzdHJpbmcgYW5kIHJldHVybnMgdGhlXG5cdCAqIHZhbHVlIGFuZCB0aGUgcmVzdCBvZiB0aGUgc3RyaW5nIHZpYSB0aGUgb3V0IHBhcmFtZXRlci5cblx0ICovXG5cdGV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gYmFzZTY0VkxRX2RlY29kZShhU3RyLCBhSW5kZXgsIGFPdXRQYXJhbSkge1xuXHQgIHZhciBzdHJMZW4gPSBhU3RyLmxlbmd0aDtcblx0ICB2YXIgcmVzdWx0ID0gMDtcblx0ICB2YXIgc2hpZnQgPSAwO1xuXHQgIHZhciBjb250aW51YXRpb24sIGRpZ2l0O1xuXG5cdCAgZG8ge1xuXHQgICAgaWYgKGFJbmRleCA+PSBzdHJMZW4pIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbW9yZSBkaWdpdHMgaW4gYmFzZSA2NCBWTFEgdmFsdWUuXCIpO1xuXHQgICAgfVxuXG5cdCAgICBkaWdpdCA9IGJhc2U2NC5kZWNvZGUoYVN0ci5jaGFyQ29kZUF0KGFJbmRleCsrKSk7XG5cdCAgICBpZiAoZGlnaXQgPT09IC0xKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGRpZ2l0OiBcIiArIGFTdHIuY2hhckF0KGFJbmRleCAtIDEpKTtcblx0ICAgIH1cblxuXHQgICAgY29udGludWF0aW9uID0gISEoZGlnaXQgJiBWTFFfQ09OVElOVUFUSU9OX0JJVCk7XG5cdCAgICBkaWdpdCAmPSBWTFFfQkFTRV9NQVNLO1xuXHQgICAgcmVzdWx0ID0gcmVzdWx0ICsgKGRpZ2l0IDw8IHNoaWZ0KTtcblx0ICAgIHNoaWZ0ICs9IFZMUV9CQVNFX1NISUZUO1xuXHQgIH0gd2hpbGUgKGNvbnRpbnVhdGlvbik7XG5cblx0ICBhT3V0UGFyYW0udmFsdWUgPSBmcm9tVkxRU2lnbmVkKHJlc3VsdCk7XG5cdCAgYU91dFBhcmFtLnJlc3QgPSBhSW5kZXg7XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cblx0Lypcblx0ICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcblx0ICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG5cdCAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2Vcblx0ICovXG5cblx0dmFyIGludFRvQ2hhck1hcCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJy5zcGxpdCgnJyk7XG5cblx0LyoqXG5cdCAqIEVuY29kZSBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSBvZiAwIHRvIDYzIHRvIGEgc2luZ2xlIGJhc2UgNjQgZGlnaXQuXG5cdCAqL1xuXHRleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChudW1iZXIpIHtcblx0ICBpZiAoMCA8PSBudW1iZXIgJiYgbnVtYmVyIDwgaW50VG9DaGFyTWFwLmxlbmd0aCkge1xuXHQgICAgcmV0dXJuIGludFRvQ2hhck1hcFtudW1iZXJdO1xuXHQgIH1cblx0ICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYzOiBcIiArIG51bWJlcik7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlY29kZSBhIHNpbmdsZSBiYXNlIDY0IGNoYXJhY3RlciBjb2RlIGRpZ2l0IHRvIGFuIGludGVnZXIuIFJldHVybnMgLTEgb25cblx0ICogZmFpbHVyZS5cblx0ICovXG5cdGV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKGNoYXJDb2RlKSB7XG5cdCAgdmFyIGJpZ0EgPSA2NTsgICAgIC8vICdBJ1xuXHQgIHZhciBiaWdaID0gOTA7ICAgICAvLyAnWidcblxuXHQgIHZhciBsaXR0bGVBID0gOTc7ICAvLyAnYSdcblx0ICB2YXIgbGl0dGxlWiA9IDEyMjsgLy8gJ3onXG5cblx0ICB2YXIgemVybyA9IDQ4OyAgICAgLy8gJzAnXG5cdCAgdmFyIG5pbmUgPSA1NzsgICAgIC8vICc5J1xuXG5cdCAgdmFyIHBsdXMgPSA0MzsgICAgIC8vICcrJ1xuXHQgIHZhciBzbGFzaCA9IDQ3OyAgICAvLyAnLydcblxuXHQgIHZhciBsaXR0bGVPZmZzZXQgPSAyNjtcblx0ICB2YXIgbnVtYmVyT2Zmc2V0ID0gNTI7XG5cblx0ICAvLyAwIC0gMjU6IEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXG5cdCAgaWYgKGJpZ0EgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gYmlnWikge1xuXHQgICAgcmV0dXJuIChjaGFyQ29kZSAtIGJpZ0EpO1xuXHQgIH1cblxuXHQgIC8vIDI2IC0gNTE6IGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XG5cdCAgaWYgKGxpdHRsZUEgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGl0dGxlWikge1xuXHQgICAgcmV0dXJuIChjaGFyQ29kZSAtIGxpdHRsZUEgKyBsaXR0bGVPZmZzZXQpO1xuXHQgIH1cblxuXHQgIC8vIDUyIC0gNjE6IDAxMjM0NTY3ODlcblx0ICBpZiAoemVybyA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBuaW5lKSB7XG5cdCAgICByZXR1cm4gKGNoYXJDb2RlIC0gemVybyArIG51bWJlck9mZnNldCk7XG5cdCAgfVxuXG5cdCAgLy8gNjI6ICtcblx0ICBpZiAoY2hhckNvZGUgPT0gcGx1cykge1xuXHQgICAgcmV0dXJuIDYyO1xuXHQgIH1cblxuXHQgIC8vIDYzOiAvXG5cdCAgaWYgKGNoYXJDb2RlID09IHNsYXNoKSB7XG5cdCAgICByZXR1cm4gNjM7XG5cdCAgfVxuXG5cdCAgLy8gSW52YWxpZCBiYXNlNjQgZGlnaXQuXG5cdCAgcmV0dXJuIC0xO1xuXHR9O1xuXG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG5cdC8qXG5cdCAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuXHQgKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG5cdCAqL1xuXG5cdC8vIEl0IHR1cm5zIG91dCB0aGF0IHNvbWUgKG1vc3Q/KSBKYXZhU2NyaXB0IGVuZ2luZXMgZG9uJ3Qgc2VsZi1ob3N0XG5cdC8vIGBBcnJheS5wcm90b3R5cGUuc29ydGAuIFRoaXMgbWFrZXMgc2Vuc2UgYmVjYXVzZSBDKysgd2lsbCBsaWtlbHkgcmVtYWluXG5cdC8vIGZhc3RlciB0aGFuIEpTIHdoZW4gZG9pbmcgcmF3IENQVS1pbnRlbnNpdmUgc29ydGluZy4gSG93ZXZlciwgd2hlbiB1c2luZyBhXG5cdC8vIGN1c3RvbSBjb21wYXJhdG9yIGZ1bmN0aW9uLCBjYWxsaW5nIGJhY2sgYW5kIGZvcnRoIGJldHdlZW4gdGhlIFZNJ3MgQysrIGFuZFxuXHQvLyBKSVQnZCBKUyBpcyByYXRoZXIgc2xvdyAqYW5kKiBsb3NlcyBKSVQgdHlwZSBpbmZvcm1hdGlvbiwgcmVzdWx0aW5nIGluXG5cdC8vIHdvcnNlIGdlbmVyYXRlZCBjb2RlIGZvciB0aGUgY29tcGFyYXRvciBmdW5jdGlvbiB0aGFuIHdvdWxkIGJlIG9wdGltYWwuIEluXG5cdC8vIGZhY3QsIHdoZW4gc29ydGluZyB3aXRoIGEgY29tcGFyYXRvciwgdGhlc2UgY29zdHMgb3V0d2VpZ2ggdGhlIGJlbmVmaXRzIG9mXG5cdC8vIHNvcnRpbmcgaW4gQysrLiBCeSB1c2luZyBvdXIgb3duIEpTLWltcGxlbWVudGVkIFF1aWNrIFNvcnQgKGJlbG93KSwgd2UgZ2V0XG5cdC8vIGEgfjM1MDBtcyBtZWFuIHNwZWVkLXVwIGluIGBiZW5jaC9iZW5jaC5odG1sYC5cblxuXHQvKipcblx0ICogU3dhcCB0aGUgZWxlbWVudHMgaW5kZXhlZCBieSBgeGAgYW5kIGB5YCBpbiB0aGUgYXJyYXkgYGFyeWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFyeVxuXHQgKiAgICAgICAgVGhlIGFycmF5LlxuXHQgKiBAcGFyYW0ge051bWJlcn0geFxuXHQgKiAgICAgICAgVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtLlxuXHQgKiBAcGFyYW0ge051bWJlcn0geVxuXHQgKiAgICAgICAgVGhlIGluZGV4IG9mIHRoZSBzZWNvbmQgaXRlbS5cblx0ICovXG5cdGZ1bmN0aW9uIHN3YXAoYXJ5LCB4LCB5KSB7XG5cdCAgdmFyIHRlbXAgPSBhcnlbeF07XG5cdCAgYXJ5W3hdID0gYXJ5W3ldO1xuXHQgIGFyeVt5XSA9IHRlbXA7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UgYGxvdyAuLiBoaWdoYCBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBsb3dcblx0ICogICAgICAgIFRoZSBsb3dlciBib3VuZCBvbiB0aGUgcmFuZ2UuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoaWdoXG5cdCAqICAgICAgICBUaGUgdXBwZXIgYm91bmQgb24gdGhlIHJhbmdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gcmFuZG9tSW50SW5SYW5nZShsb3csIGhpZ2gpIHtcblx0ICByZXR1cm4gTWF0aC5yb3VuZChsb3cgKyAoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBRdWljayBTb3J0IGFsZ29yaXRobS5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gYXJ5XG5cdCAqICAgICAgICBBbiBhcnJheSB0byBzb3J0LlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJhdG9yXG5cdCAqICAgICAgICBGdW5jdGlvbiB0byB1c2UgdG8gY29tcGFyZSB0d28gaXRlbXMuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwXG5cdCAqICAgICAgICBTdGFydCBpbmRleCBvZiB0aGUgYXJyYXlcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHJcblx0ICogICAgICAgIEVuZCBpbmRleCBvZiB0aGUgYXJyYXlcblx0ICovXG5cdGZ1bmN0aW9uIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcCwgcikge1xuXHQgIC8vIElmIG91ciBsb3dlciBib3VuZCBpcyBsZXNzIHRoYW4gb3VyIHVwcGVyIGJvdW5kLCB3ZSAoMSkgcGFydGl0aW9uIHRoZVxuXHQgIC8vIGFycmF5IGludG8gdHdvIHBpZWNlcyBhbmQgKDIpIHJlY3Vyc2Ugb24gZWFjaCBoYWxmLiBJZiBpdCBpcyBub3QsIHRoaXMgaXNcblx0ICAvLyB0aGUgZW1wdHkgYXJyYXkgYW5kIG91ciBiYXNlIGNhc2UuXG5cblx0ICBpZiAocCA8IHIpIHtcblx0ICAgIC8vICgxKSBQYXJ0aXRpb25pbmcuXG5cdCAgICAvL1xuXHQgICAgLy8gVGhlIHBhcnRpdGlvbmluZyBjaG9vc2VzIGEgcGl2b3QgYmV0d2VlbiBgcGAgYW5kIGByYCBhbmQgbW92ZXMgYWxsXG5cdCAgICAvLyBlbGVtZW50cyB0aGF0IGFyZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHBpdm90IHRvIHRoZSBiZWZvcmUgaXQsIGFuZFxuXHQgICAgLy8gYWxsIHRoZSBlbGVtZW50cyB0aGF0IGFyZSBncmVhdGVyIHRoYW4gaXQgYWZ0ZXIgaXQuIFRoZSBlZmZlY3QgaXMgdGhhdFxuXHQgICAgLy8gb25jZSBwYXJ0aXRpb24gaXMgZG9uZSwgdGhlIHBpdm90IGlzIGluIHRoZSBleGFjdCBwbGFjZSBpdCB3aWxsIGJlIHdoZW5cblx0ICAgIC8vIHRoZSBhcnJheSBpcyBwdXQgaW4gc29ydGVkIG9yZGVyLCBhbmQgaXQgd2lsbCBub3QgbmVlZCB0byBiZSBtb3ZlZFxuXHQgICAgLy8gYWdhaW4uIFRoaXMgcnVucyBpbiBPKG4pIHRpbWUuXG5cblx0ICAgIC8vIEFsd2F5cyBjaG9vc2UgYSByYW5kb20gcGl2b3Qgc28gdGhhdCBhbiBpbnB1dCBhcnJheSB3aGljaCBpcyByZXZlcnNlXG5cdCAgICAvLyBzb3J0ZWQgZG9lcyBub3QgY2F1c2UgTyhuXjIpIHJ1bm5pbmcgdGltZS5cblx0ICAgIHZhciBwaXZvdEluZGV4ID0gcmFuZG9tSW50SW5SYW5nZShwLCByKTtcblx0ICAgIHZhciBpID0gcCAtIDE7XG5cblx0ICAgIHN3YXAoYXJ5LCBwaXZvdEluZGV4LCByKTtcblx0ICAgIHZhciBwaXZvdCA9IGFyeVtyXTtcblxuXHQgICAgLy8gSW1tZWRpYXRlbHkgYWZ0ZXIgYGpgIGlzIGluY3JlbWVudGVkIGluIHRoaXMgbG9vcCwgdGhlIGZvbGxvd2luZyBob2xkXG5cdCAgICAvLyB0cnVlOlxuXHQgICAgLy9cblx0ICAgIC8vICAgKiBFdmVyeSBlbGVtZW50IGluIGBhcnlbcCAuLiBpXWAgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBwaXZvdC5cblx0ICAgIC8vXG5cdCAgICAvLyAgICogRXZlcnkgZWxlbWVudCBpbiBgYXJ5W2krMSAuLiBqLTFdYCBpcyBncmVhdGVyIHRoYW4gdGhlIHBpdm90LlxuXHQgICAgZm9yICh2YXIgaiA9IHA7IGogPCByOyBqKyspIHtcblx0ICAgICAgaWYgKGNvbXBhcmF0b3IoYXJ5W2pdLCBwaXZvdCkgPD0gMCkge1xuXHQgICAgICAgIGkgKz0gMTtcblx0ICAgICAgICBzd2FwKGFyeSwgaSwgaik7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgc3dhcChhcnksIGkgKyAxLCBqKTtcblx0ICAgIHZhciBxID0gaSArIDE7XG5cblx0ICAgIC8vICgyKSBSZWN1cnNlIG9uIGVhY2ggaGFsZi5cblxuXHQgICAgZG9RdWlja1NvcnQoYXJ5LCBjb21wYXJhdG9yLCBwLCBxIC0gMSk7XG5cdCAgICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHEgKyAxLCByKTtcblx0ICB9XG5cdH1cblxuXHQvKipcblx0ICogU29ydCB0aGUgZ2l2ZW4gYXJyYXkgaW4tcGxhY2Ugd2l0aCB0aGUgZ2l2ZW4gY29tcGFyYXRvciBmdW5jdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gYXJ5XG5cdCAqICAgICAgICBBbiBhcnJheSB0byBzb3J0LlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJhdG9yXG5cdCAqICAgICAgICBGdW5jdGlvbiB0byB1c2UgdG8gY29tcGFyZSB0d28gaXRlbXMuXG5cdCAqL1xuXHRleHBvcnRzLnF1aWNrU29ydCA9IGZ1bmN0aW9uIChhcnksIGNvbXBhcmF0b3IpIHtcblx0ICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIDAsIGFyeS5sZW5ndGggLSAxKTtcblx0fTtcblxuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvaG9tZS90ZXJtaW5hbHVzZXIvLmNvcmRvdmEvfi9zb3VyY2VtYXBwZWQtc3RhY2t0cmFjZS9kaXN0L3NvdXJjZW1hcHBlZC1zdGFja3RyYWNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1NwbGl0dGVyLCBTcGxpdHRlclNpZGUsIFNwbGl0dGVyQ29udGVudCwgUGFnZSwgQnV0dG9ufSBmcm9tICdyZWFjdC1vbnNlbnVpJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3BsaXR0ZXI+XG4gICAgICAgIDxTcGxpdHRlclNpZGVcbiAgICAgICAgICBzaWRlPSdsZWZ0J1xuICAgICAgICAgIGNvbGxhcHNlPXt0cnVlfVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oaWRlLmJpbmQodGhpcyl9XG4gICAgICAgICAgc3dpcGVhYmxlPXt0cnVlfT5cbiAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIE1lbnUgY29udGVudFxuICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgPC9TcGxpdHRlclNpZGU+XG4gICAgICAgIDxTcGxpdHRlckNvbnRlbnQ+XG4gICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvdy5iaW5kKHRoaXMpfT5PcGVuPC9CdXR0b24+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICA8L1NwbGl0dGVyQ29udGVudD5cbiAgICAgIDwvU3BsaXR0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQXBwLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb25zZW51aS9jc3MtY29tcG9uZW50cy1zcmMvc3JjL29uc2VuLWNzcy1jb21wb25lbnRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDM2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vbnNlbnVpL2Nzcy9vbnNlbnVpLmNzc1xuICoqIG1vZHVsZSBpZCA9IDM2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==