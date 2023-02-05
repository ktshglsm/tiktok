import PropTypes from 'prop-types';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function Header({ title, onClick }) {
    return (
       
        <header className={cx('header')}>
            <button className={cx('header-icon')} onClick={onClick} >
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}
Header.propTypes={
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func,
}
export default Header;
