import Image from '~/components/image';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <HeadlessTippy
            interactive
            placement="bottom-start"
            delay={[500, 0]}
            render={(attrs) => (
                <div className={cx('wrap')} tabIndex="-1" {...attrs}>
                    <header className={cx('header')}>
                        <Link className={cx('img-link')} to={`/intro/${data.nickname}`}>
                            <Image className={cx('img')} alt="" src={data.avatar} />
                        </Link>
                        <Button primary children="Follow" foreignClass />
                    </header>
                    <div>
                        <h3 className={cx('name')}>
                            {data.nickname}
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                        </h3>
                        <p className={cx('desp')}>{`${data.first_name} ${data.last_name} `}</p>
                    </div>
                    <footer className={cx('desp')}>
                        <span className={cx('count')}>{data.followers_count}.0K</span>
                        <span>Follower</span>
                        <span className={cx('count')}>{data.likes_count}.0M</span>
                        <span>Like</span>
                    </footer>
                </div>
            )}
        >
            <Link to={`/intro/${data.nickname}`} className={cx('item')}>
                <Image className={cx('img')} alt="" src={data.avatar} />
                <div className={cx('info')}>
                    <h3 className={cx('name')}>
                        {data.nickname}
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                    </h3>
                    <p className={cx('desp')}>{`${data.first_name} ${data.last_name} `}</p>
                </div>
            </Link>
        </HeadlessTippy>
    );
}

export default AccountItem;
