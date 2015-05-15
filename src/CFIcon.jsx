if (typeof module !== 'undefined' && module.exports) {
  var React = require('react');
}

var CFIcon = React.createClass({
  propTypes: {
    iconName: React.PropTypes.string.isRequired,
    config: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ])
  },
  getDefaultProps: function() {
    return {
      config: []
    };
  },
  render: function() {
    var iconConfig = (this.props.config instanceof Array) ? this.props.config : [this.props.config];
    var iconClasses = 'cf-icon cf-icon-' + this.props.iconName + iconConfig.map(function(t) {
      return ' cf-icon__' + t
    }).join('');

    if (this.props.className) {
      iconClasses += ' ' + this.props.className;
    }

    var iconProps = omit(this.props, 'iconName', 'config', 'className');

    return (
      <span className={iconClasses} {...iconProps} />
    );
  }
});

function omit(obj) {
  var omitted = Array.prototype.slice.call(arguments, 1);
  var out = {};
  var props = Object.getOwnPropertyNames(obj);
  for (var i=0;i<props.length;i++) {
    var prop = props[i];
    if (omitted.indexOf(prop) < 0) {
      out[prop] = obj[prop];
    }
  }
  return out
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CFIcon;
}
