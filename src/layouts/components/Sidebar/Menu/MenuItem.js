import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function MenuItem({ title, icon, to, activeIcon }) {
    const [active,setActive] = useState(false)
    return (
        <NavLink
            to={to}
            className={(nav) => {
                setActive(nav.isActive)

                return cx('menu-item', { active: nav.isActive });

            }}
        >
            {active?activeIcon:icon}
            <div className={cx('title')}>{title}</div>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
