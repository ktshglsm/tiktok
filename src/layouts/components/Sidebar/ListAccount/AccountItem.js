
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ListAccount.module.scss';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div>
            <Tippy
                interactive
                placement="bottom"
                delay={[700, 0]}
                offset={[-14, 0]}
                render={(attrs) => (
                    <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <AccountPreview />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            {data.full_name}
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <p className={cx('username')}>{data.nickname}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
