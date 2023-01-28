import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({ isActive, primary, large, onClick, children, foreignClass, marginAuto , ...props }) {
    let Component = 'button';
    if (props.href) {
        Component = 'a';
    } else if (isActive) {
        Component = NavLink;
    } else if (props.to) {
        Component = Link;
    }
    const classes = cx('wrapper', {
        primary,
        large,
        foreignClass,
        marginAuto
    });
    return (
        <Component className={classes} {...props} onClick={onClick}>
            {props.icon && <span>{props.icon}</span>}
            {children}
        </Component>
    );
}

export default Button;
