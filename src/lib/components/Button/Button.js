import React from 'react';
import styles from './Button.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick = e => {
    e.stopPropagation();
    // Waves - Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  };

  render() {
    let {
      active,
      block,
      circle,
      className,
      color,
      disabled,
      download,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      role,
      type,
      social,
      action,
      tag: Tag,
      target,
      innerRef,
      ...attributes
    } = this.props;

    const classes = classNames(
      floating ? [styles['btn-floating'], styles['btn']] : [styles['btn']],
      flat
        ? [styles['btn-flat']]
        : gradient
        ? [styles[`${gradient}-gradient`]]
        : [styles[`btn${outline ? '-outline' : ''}-${color}`]],
      size ? [styles[`btn-${size}`]] : false,
      rounded ? [styles['btn-rounded']] : false,
      circle && [styles['btn-circle']],
      block ? [styles['btn-block']] : false,
      social ? [styles['btn-' + social]] : false,
      action ? [styles['btn-action']] : false,
      [className],
      { active, disabled: disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={Tag === 'button' && !type ? 'button' : type}
        target={target}
        role={Tag === 'a' && !role ? 'button' : role}
        className={classes}
        ref={innerRef}
        onMouseUp={this.handleClick}
        onTouchStart={this.handleClick}
        {...attributes}
        download={download}
        disabled={disabled}
      >
        {this.props.children}
      </Tag>
    );
  }
}

Button.defaultProps = {
  color: 'default',
  tag: 'button'
};

Button.propTypes = {
  active: PropTypes.bool,
  action: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  social: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string
};

export default Button;
export { Button as MDBBtn };
