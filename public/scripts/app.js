'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BergmanApp = function BergmanApp() {
  return React.createElement(
    'div',
    null,
    React.createElement(Nav, null),
    React.createElement(AppContent, null)
  );
};

var AppContent = function AppContent() {
  return React.createElement(
    'div',
    { className: 'w3-content', style: { maxWidth: '2000px', marginTop: '46px' } },
    React.createElement(Slideshow, null),
    React.createElement(About, null)
  );
};

var NavLarge = function NavLarge(props) {
  return React.createElement(
    'div',
    { className: 'w3-top' },
    React.createElement(
      'div',
      { className: 'w3-bar w3-black w3-card' },
      React.createElement(
        'a',
        {
          className: 'w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right',
          href: 'javascript:void(0)',
          onClick: props.toggleNavMenu,
          title: 'Toggle Navigation Menu'
        },
        React.createElement('i', { className: 'fa fa-bars' })
      ),
      React.createElement(
        'a',
        { href: '#', className: 'w3-bar-item w3-hover-red w3-button w3-padding-large' },
        'HOME'
      ),
      React.createElement(
        'a',
        { href: '#about', className: 'w3-bar-item w3-hover-red w3-button w3-padding-large w3-hide-small' },
        'ABOUT'
      ),
      React.createElement(
        'a',
        { href: '#schedule', className: 'w3-bar-item w3-hover-red w3-button w3-padding-large w3-hide-small' },
        'SCHEDULE'
      ),
      React.createElement(
        'a',
        { href: '#contact', className: 'w3-bar-item w3-hover-red w3-button w3-padding-large w3-hide-small' },
        'CONTACT'
      )
    )
  );
};

var NavSmall = function NavSmall() {
  return React.createElement(
    'div',
    { id: 'navDemo', className: 'w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top', style: { marginTop: '46px' } },
    React.createElement(
      'a',
      { href: '#about', className: 'w3-bar-item w3-button w3-padding-large w3-hover-red' },
      'ABOUT'
    ),
    React.createElement(
      'a',
      { href: '#schedule', className: 'w3-bar-item w3-button w3-padding-large w3-hover-red' },
      'SCHEDULE'
    ),
    React.createElement(
      'a',
      { href: '#contact', className: 'w3-bar-item w3-button w3-padding-large w3-hover-red' },
      'CONTACT'
    )
  );
};

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.toggleNavMenu = _this.toggleNavMenu.bind(_this);
    return _this;
  }

  _createClass(Nav, [{
    key: 'toggleNavMenu',
    value: function toggleNavMenu() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(NavLarge, { toggleNavMenu: this.toggleNavMenu }),
        React.createElement(NavSmall, null)
      );
    }
  }]);

  return Nav;
}(React.Component);

var Slideshow = function (_React$Component2) {
  _inherits(Slideshow, _React$Component2);

  function Slideshow(props) {
    _classCallCheck(this, Slideshow);

    var _this2 = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

    _this2.runSlideshow = _this2.runSlideshow.bind(_this2);
    _this2.myIndex = 0;
    return _this2;
  }

  _createClass(Slideshow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.runSlideshow();
    }
  }, {
    key: 'runSlideshow',
    value: function runSlideshow() {
      var i = void 0;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      this.myIndex++;
      if (this.myIndex > x.length) {
        this.myIndex = 1;
      }
      x[this.myIndex - 1].style.display = "block";
      setTimeout(this.runSlideshow, 4000);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Slide, { imgSrc: 'https://www.nwpb.org/wp-content/uploads/2018/02/Adult-Piano-Concert.jpeg', slideTitle: true }),
        React.createElement(Slide, { imgSrc: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }),
        React.createElement(Slide, { imgSrc: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' })
      );
    }
  }]);

  return Slideshow;
}(React.Component);

var Slide = function Slide(props) {
  return React.createElement(
    'div',
    { className: 'mySlides w3-display-container w3-center' },
    React.createElement('img', { className: 'w3-opacity-max', src: props.imgSrc, style: { width: '100%' } }),
    React.createElement(Header, { slideTitle: props.slideTitle })
  );
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    { className: 'w3-display-middle w3-text-red' },
    React.createElement(
      'h1',
      { className: "w3-jumbo w3-center " + (props.slideTitle && 'w3-animate-top'), style: { textShadow: '1px 1px 0 #000', lineHeight: '15vmin' } },
      'Lisa Bergman'
    ),
    React.createElement('hr', { className: 'w3-border-black', style: { margin: 'auto', width: '40%' } }),
    React.createElement(
      'p',
      { className: 'w3-large w3-center' },
      React.createElement(
        'strong',
        null,
        'Pianist, Producer'
      )
    )
  );
};

var RoleInThirds = function RoleInThirds(props) {
  return React.createElement(
    'div',
    { className: 'w3-third' },
    React.createElement(
      'p',
      null,
      React.createElement(
        'strong',
        null,
        props.org
      ),
      ', ',
      props.role
    ),
    React.createElement(
      'a',
      { href: props.url },
      React.createElement('img', { src: props.imgSrc, className: 'w3-circle w3-margin-bottom', alt: 'Random Name', style: { width: '60%' } })
    )
  );
};

var About = function About(props) {
  return React.createElement(
    'div',
    { className: 'w3-container w3-content w3-center w3-padding-64', style: { maxWidth: '800px' }, id: 'about' },
    React.createElement(SectionHeading, {
      title: 'ABOUT LISA',
      subtitle: 'Finding truth in music.'
    }),
    React.createElement(
      'p',
      { className: 'w3-justify' },
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ),
    React.createElement(
      'div',
      { className: 'w3-row w3-padding-32' },
      React.createElement(RoleInThirds, {
        org: 'NOISE',
        role: 'Executive Director',
        url: 'http://noiseforkids.org/',
        imgSrc: 'https://www.w3schools.com/w3images/bandmember.jpg'
      }),
      React.createElement(RoleInThirds, {
        org: 'Somewhere',
        role: 'Some Position',
        url: '#',
        imgSrc: 'https://www.w3schools.com/w3images/bandmember.jpg'
      }),
      React.createElement(RoleInThirds, {
        org: 'Somewhere Again',
        role: 'Some Other Position',
        url: '#',
        imgSrc: 'https://www.w3schools.com/w3images/bandmember.jpg'
      })
    )
  );
};

var SectionHeading = function SectionHeading(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      { className: 'w3-wide' },
      props.title
    ),
    props.subtitle && React.createElement(
      'p',
      { className: 'w3-opacity' },
      React.createElement(
        'i',
        null,
        props.subtitle
      )
    )
  );
};

ReactDOM.render(React.createElement(BergmanApp, null), document.getElementById('app'));
