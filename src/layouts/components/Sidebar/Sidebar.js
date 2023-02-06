import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { FollowingActiveIcon, FollowingIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon  } from '~/components/Icon';
const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title='For You' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}to='/'></MenuItem>
            <MenuItem title='Following' icon={<FollowingIcon/>} activeIcon={<FollowingActiveIcon/>}to='/following'></MenuItem>
            <MenuItem title='Live' icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}to='/live'></MenuItem>

        </Menu>
    </aside>;
}

export default Sidebar;