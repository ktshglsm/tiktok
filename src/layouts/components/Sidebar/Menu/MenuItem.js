import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ title, icon, to, activeIcon }) {
    return (
        <NavLink
            to={to}
            className={(nav) => {

                return cx('menu-item', { active: nav.isActive });

            }}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>

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
