import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    small = false,
    large = false,
    normal=false,
    transparent=false,
    leftIcon,
    rightIcon,
    children,
    ...rest
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        normal,
        transparent
    });
    const props = {
        onClick,
        ...rest,
    };
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <span className={cx('content')}>{children}</span>
            {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}

        </Comp>
    );
}

export default Button;
