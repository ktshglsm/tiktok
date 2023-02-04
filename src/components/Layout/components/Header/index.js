import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {
    faAdd,
    faBookAtlas,
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { AnimationIcon, MessengerIcon, NotificationsIcon } from '~/assets/Icon';
import Search from '../Search';
const cx = classNames.bind(styles);
const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faBookAtlas} />,
        content: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    content: 'English',
                },
                {
                    code: 'vi',
                    content: 'Vietnamese',
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, content: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, content: 'Keyboard shortcut' },
];
const USER_MENU_LIST = [
    { icon: <FontAwesomeIcon icon={faUser} />, content: 'View Profile', to: '/profile' },
    { icon: <FontAwesomeIcon icon={faCoins} />, content: 'Get coins', to: '/coin' },
    { icon: <FontAwesomeIcon icon={faGear} />, content: 'Settings', to: '/setting' },
    ...MENU_LIST,
    { icon: <FontAwesomeIcon icon={faSignOut} />, content: 'Log out', to: '/', separate: true },
];
const currentUser = true;

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="toptop" />
                </div>
                <Search/>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button normal leftIcon={<FontAwesomeIcon className={cx('add-icon')} icon={faAdd} />}>
                                Upload
                            </Button>
                            <Tippy content="Add Animation" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <AnimationIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Messenger" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <MessengerIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Notifications" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <NotificationsIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button normal leftIcon={<FontAwesomeIcon className={cx('add-icon')} icon={faAdd} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                            <Tippy content="Add Animation" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <AnimationIcon />
                                </button>
                            </Tippy>
                        </>
                    )}
                    {currentUser ? (
                        <>
                            <Menu items={USER_MENU_LIST}>
                                <Image
                                    className={cx('menu-avatar')}
                                    src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/322468930_721833059551171_8815409563668299918_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=p8RjQ8_1UrgAX9xitHi&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAKj7lnp_2Lz_1ggpHOE6xP64KmTBzYR5pNrPKDFkH88g&oe=63E18919"
                                    alt="avt"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Menu items={MENU_LIST}>
                                <button className={cx('menu-icon')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
