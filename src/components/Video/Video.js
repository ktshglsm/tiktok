import { faCheckCircle, faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Video.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Video({ user, follow=false, title, music, srcVideo }) {
    const [followed,setFollowed] = useState(follow)
    const [like,setLike] = useState(false)

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={user.avatar} alt={user.full_name} />
            <div className={cx('follow-btn')}>
                <Button outline={!followed} normalBorder={followed} small onClick={()=>setFollowed(!followed)}>
                    {followed?'Following':'Follow'}
                </Button>
                
            </div>
            <div>
                <div className={cx('info')}>
                    <Link to={`/@${user.nickname}`} className={cx('full-nickname')}>
                        <h4 className={cx('name')}>
                            {user.full_name}
                            {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <p className={cx('username')}>{user.nickname}</p>
                    </Link>
                    <div className={cx('cap')}>
                        <span className={cx('title')}>{title}</span>
                        <div className={cx('music')}>
                            <FontAwesomeIcon icon={faMusic} />
                            <span className={cx('music-name')}>{music}</span>
                        </div>
                    </div>
                </div>
                <div className={cx('video-detail')}>
                    <video width="306px" height="auto" controls className={cx('video')} loop >
                        <source src={srcVideo} type="video/mp4" />
                    </video>
                    <div className={cx('video-statistic')}>
                        <button className={cx('video-icon',{like:like})} onClick={()=>setLike(!like)}>
                            <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                        </button>
                        <span className={cx('video-total')}>111k</span>
                        <span className={cx('video-icon')}>
                            <FontAwesomeIcon icon={faComment} className={cx('icon')} />
                        </span>
                        <span className={cx('video-total')}>111k</span>

                        <span className={cx('video-icon')}>
                            <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                        </span>
                        <span className={cx('video-total')}>111k</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
