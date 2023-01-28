import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './Actions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Actions({ data }) {
    const [isTym, setIsTym] = useState(false);
    const [tym, setTym] = useState(data.likes_count);
    const handleTym = () => {
        setIsTym(!isTym);
        isTym ? setTym((prev) => prev - 1) : setTym((prev) => prev + 1);
    };
    return (
        <>
            <div className={cx('action-item')}>
                <FontAwesomeIcon
                    className={isTym ? cx('action-icon', { tym: 'tym' }) : cx('action-icon')}
                    icon={faHeart}
                    onClick={handleTym}
                />
                <p>{tym}</p>
            </div>
            <div className={cx('action-item')}>
                <FontAwesomeIcon className={cx('action-icon')} icon={faCommentDots} />
                <p>{data.popular_video.comments_count}</p>
            </div>
            <div className={cx('action-item')}>
                <FontAwesomeIcon className={cx('action-icon')} icon={faShare} />
                <p>{data.popular_video.shares_count}</p>
            </div>
        </>
    );
}
export default Actions;
