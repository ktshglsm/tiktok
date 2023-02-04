import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ icon, content, to ,onClick}) {
    return (
        <div className={cx('wrapper')}>
            <Button leftIcon={icon} to={to} transparent onClick={onClick}>
                {content}
            </Button>
        </div>
    );
}

export default MenuItem;