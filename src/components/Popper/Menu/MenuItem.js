import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ icon, content, to ,onClick , separate=false}) {
    const classes=cx('wrapper',{
        separate
    })
    return (
        <div className={classes}>
            <Button leftIcon={icon} to={to} transparent onClick={onClick} >
                {content}
            </Button>
        </div>
    );
}

export default MenuItem;
