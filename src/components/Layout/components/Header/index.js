import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {
    faAdd,
    faArrowUpFromBracket,
    faBookAtlas,
    faCircleQuestion,
    faCircleXmark,
    faCloudArrowUp,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
   
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
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
const USER_MENU_LIST =[
    { icon: <FontAwesomeIcon icon={faUser} />, content: 'View Profile' ,to: '/profile'},
    { icon: <FontAwesomeIcon icon={faCoins} />, content: 'Get coins' ,to: '/coin'},
    { icon: <FontAwesomeIcon icon={faGear} />, content: 'Settings' ,to: '/setting'},
    ...MENU_LIST,
    { icon: <FontAwesomeIcon icon={faSignOut} />, content: 'Log out' ,to: '/',separate:true},

]
const currentUser = true;

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="toptop" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0 ? true : false}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>
                            <Tippy content="Messenger" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Notifications" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button normal leftIcon={<FontAwesomeIcon className={cx('add-icon')} icon={faAdd} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    {currentUser ? (
                        <>
                            
                            <Menu items={USER_MENU_LIST}>
                            <img
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
