import React, { cloneElement } from 'react';
import BootstrapMixin from './BootstrapMixin';
import classNames from 'classnames';

const ListGroupItem = React.createClass({
  mixins: [BootstrapMixin],

  propTypes: {
    bsStyle: React.PropTypes.oneOf(['danger', 'info', 'success', 'warning']),
    className: React.PropTypes.string,
    active: React.PropTypes.any,
    disabled: React.PropTypes.any,
    header: React.PropTypes.node,
    listItem: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    href: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      bsClass: 'list-group-item',
      listItem: false
    };
  },

  render() {
    let classes = this.getBsClassSet();

    classes.active = this.props.active;
    classes.disabled = this.props.disabled;

    if (this.props.href) {
      return this.renderAnchor(classes);
    } else if (this.props.onClick) {
      return this.renderButton(classes);
    } else if (this.props.listItem) {
      return this.renderLi(classes);
    }
    return this.renderSpan(classes);
  },

  renderLi(classes) {
    return (
      <li
        {...this.props} className={classNames(this.props.className, classes)}>
        {this.props.header ? this.renderStructuredContent() : this.props.children}
      </li>
    );
  },

  renderAnchor(classes) {
    return (
      <a
        {...this.props}
        className={classNames(this.props.className, classes)}
      >
        {this.props.header ? this.renderStructuredContent() : this.props.children}
      </a>
    );
  },

  renderButton(classes) {
    return (
      <button
        type="button"
        {...this.props}
        className={classNames(this.props.className, classes)}>
        {this.props.header ? this.renderStructuredContent() : this.props.children}
      </button>
    );
  },

  renderSpan(classes) {
    return (
      <span
        {...this.props} className={classNames(this.props.className, classes)}>
        {this.props.header ? this.renderStructuredContent() : this.props.children}
      </span>
    );
  },

  renderStructuredContent() {
    let header;
    if (React.isValidElement(this.props.header)) {
      header = cloneElement(this.props.header, {
        key: 'header',
        className: classNames(this.props.header.props.className, 'list-group-item-heading')
      });
    } else {
      header = (
        <h4 key="header" className="list-group-item-heading">
          {this.props.header}
        </h4>
      );
    }

    let content = (
      <p key="content" className="list-group-item-text">
        {this.props.children}
      </p>
    );

    return [header, content];
  }
});

export default ListGroupItem;
