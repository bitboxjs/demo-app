(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('bitbox'), require('bitbox/elements')) :
  typeof define === 'function' && define.amd ? define(['bitbox', 'bitbox/elements'], factory) :
  (global.demoBox = factory(global.bitbox,global.bitbox_elements));
}(this, function (bitbox,bitbox_elements) { 'use strict';

  bitbox = 'default' in bitbox ? bitbox['default'] : bitbox;

  var _defineProperty = (function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  })

  var counter = bitbox(function (_ref) {
  	var props = _ref.props;
  	var state = _ref.state;
  	var signals = _ref.signals;

  	return bitbox_elements.div({
  		margin: 8,
  		padding: 16,
  		bg: ['black', 0.1],
  		radius: 2,
  		display: 'inline-block'
  	}, function ($tree) {
  		$tree.push(bitbox_elements.div({}, function ($tree) {
  			$tree.push(props.module);
  			return $tree;
  		}([])));
  		$tree.push(bitbox_elements.h1({
  			margin: 0
  		}, function ($tree) {
  			$tree.push(String(state.count));
  			return $tree;
  		}([])));
  		$tree.push(bitbox_elements.button({
  			on: {
  				click: signals.inc
  			}
  		}, function ($tree) {
  			$tree.push('inc');
  			return $tree;
  		}([])));
  		$tree.push(bitbox_elements.button({
  			on: {
  				click: signals.dec
  			}
  		}, function ($tree) {
  			$tree.push('dec');
  			return $tree;
  		}([])));
  		return $tree;
  	}([]));
  });

  var app = bitbox(function (_ref) {
  	var props = _ref.props;
  	var state = _ref.state;
  	var signals = _ref.signals;

  	var onInput = function onInput(key) {
  		return function (e) {
  			return signals.changed(_defineProperty({}, key, e.target.value));
  		};
  	};
  	return bitbox_elements.div({
  		shadow: [0, 0, 10, 'grey', 0.8],
  		radius: 2,
  		font: [18, 'Helvetica Neue'],
  		margin: 24,
  		style: {
  			transition: 'background 0.3s'
  		},
  		padding: 24,
  		bg: [null, 500],
  		color: 'white'
  	}, function ($tree) {
  		$tree.push(bitbox_elements.input({
  			value: state.name,
  			autofocus: 1,
  			style: {
  				border: 'none',
  				outline: 'none',
  				fontSize: '42px',
  				background: 'transparent',
  				color: 'white',
  				fontWeight: 'bold'
  			},
  			on: {
  				input: onInput('name')
  			}
  		}));
  		$tree.push(bitbox_elements.pre({}, function ($tree) {
  			$tree.push('Some more information about...');
  			return $tree;
  		}([])));
  		$tree.push(bitbox_elements.div({
  			bg: ['white', 0.7],
  			color: ['black', 0.7],
  			padding: 8,
  			radius: 2,
  			shadow: [0, 0, 10, 'black', 0.2]
  		}, function ($tree) {
  			$tree.push(counter({
  				module: "foo"
  			}));
  			$tree.push(counter({
  				module: "bar"
  			}));
  			return $tree;
  		}([])));
  		return $tree;
  	}([]));
  });

  return app;

}));