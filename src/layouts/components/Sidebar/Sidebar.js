import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { FollowingActiveIcon, FollowingIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon  } from '~/components/Icon';
import ListAccount from './ListAccount';
import Footer from './Footer';
const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title='For You' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}to='/'></MenuItem>
            <MenuItem title='Following' icon={<FollowingIcon/>} activeIcon={<FollowingActiveIcon/>}to='/following'></MenuItem>
            <MenuItem title='Live' icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}to='/live'></MenuItem>

        </Menu>
        <ListAccount title='Suggest Account' moreBtn='See all'/>
        <ListAccount title='Following Account' moreBtn='See more'/>
        <Footer/>

        
    </aside>;
}

export default Sidebar;