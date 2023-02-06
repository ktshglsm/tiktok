import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
function Footer() {
    return ( <div className={cx('wrapper')}><span>© 2023 TikTok</span></div> );
}

export default Footer;