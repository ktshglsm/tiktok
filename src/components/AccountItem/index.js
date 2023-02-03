import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/322468930_721833059551171_8815409563668299918_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=p8RjQ8_1UrgAX9xitHi&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAKj7lnp_2Lz_1ggpHOE6xP64KmTBzYR5pNrPKDFkH88g&oe=63E18919' alt='avt'/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>Hương
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </h4>
            <p className={cx('username')}>2103</p>
        </div>
    </div>;
}

export default AccountItem;
