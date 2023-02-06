import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import classNames from 'classnames/bind';
import styles from './ListAccount.module.scss';
const cx = classNames.bind(styles);

function ListAccount({ title, moreBtn }) {
    const account = {
        nickname: 'The Red Devils',
        avatar: '//ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png',
        full_name: 'Manchester United',
        tick: true,
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            <AccountItem data={account} />
            
            <p className={cx('more-btn')}>{moreBtn}</p>
        </div>
    );
}

ListAccount.propTypes = {
    title: PropTypes.string.isRequired,
    moreBtn: PropTypes.string,
};

export default ListAccount;
