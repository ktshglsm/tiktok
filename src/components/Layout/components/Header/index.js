import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {
    faAdd,
    faBookAtlas,
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
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

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="toptop" />
                </div>
                <Tippy
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button normal leftIcon={<FontAwesomeIcon className={cx('add-icon')} icon={faAdd} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_LIST}>
                        <button className={cx('menu-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
