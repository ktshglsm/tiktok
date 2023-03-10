import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    function handleHasChildren(data, title) {
        setHistory((prev) => [...prev, { data: data, title: title }]);
    }
    function getItem(item) {
        console.log(item);
    }
    function onBack() {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    }
    const renderMenu = (attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {!!current.title && <Header title={current.title} onClick={() => onBack()} />}
                <div className={cx('menu-content')}>
                    {current.data.map((item, index) => {
                        return (
                            <MenuItem
                                key={index}
                                icon={item.icon}
                                content={item.content}
                                to={item.to}
                                separate={item.separate}
                                onClick={() =>
                                    !!item.children
                                        ? handleHasChildren(item.children.data, item.children.title)
                                        : getItem(item)
                                }
                            />
                        );
                    })}
                </div>
            </PopperWrapper>
        </div>
    );

    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0,700]}
            offset={[15, 10]}
            placement="bottom-end"
            render={renderMenu}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array.isRequired,
};
export default Menu;
