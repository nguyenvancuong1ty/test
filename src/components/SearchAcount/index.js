import Image from '~/components/image';

import styles from './SearchAcount.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function SearchAcount({ dataSearch }) {
    return (
        <div className={cx('')}>
            {dataSearch.map((item, index) => {
                return (
                    <Link to={`/intro/${item.full_name}`} key={index} className={cx('item')}>
                        <Image className={cx('img')} alt="" src={item.avatar} />
                        <div className={cx('info')}>
                            <h3 className={cx('name')}>
                                {item.full_name}
                                {item.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                            </h3>
                            <p className={cx('desp')}>{item.nickname}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default SearchAcount;
