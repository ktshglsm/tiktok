import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function AccountPreview() {
    const data = {
        nickname: 'The Red Devils',
        avatar: '//ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png',
        full_name: 'Manchester United',
        tick: true,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('username')}>{data.nickname}</p>
                <div className={cx('more')}>
                    <strong className={cx('total')}>8.6M</strong>
                    <span className={cx('follower')}>Follower</span>
                    <strong className={cx('total')}>671.5M</strong>
                    <span className={cx('follower')}>Likes</span>
                </div >
            </div>
        </div>
    );
}

export default AccountPreview;
