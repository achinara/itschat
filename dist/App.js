"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import {Form} from './Form/Form';
//import {Messages} from './Messages/Messages';

var App = function () {
    function App(_ref) {
        var el = _ref.el;

        _classCallCheck(this, App);

        this.el = el;
        this.render();
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            this.el.innerHTML = "<div class=\"chat\">\n\t\t\t<div class=\"chat-header\">\n\t\t\t\t<h1>\u0427\u0430\u0442</h1>\n\t\t\t</div>\n        </div>";
        }
    }]);

    return App;
}();