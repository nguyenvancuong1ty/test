import { useEffect, useState } from 'react';

import AccountItem from '../AcountItem';
// import SearchAcount from '~/components/SearchAcount';
import styles from './Account.module.scss';
// import { Wrapper as PoperWrapper } from '~/components/Poper';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountSuggested() {
    const num = 5;
    const [data, setData] = useState([]);
    const [initCurrent, setInitCurrent] = useState(num);

    useEffect(() => {
        async function initProducts() {
            await fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=20`)
                .then((response) => response.json())
                .then((data) => {
                    setData(data.data);
                })
                .catch((err) => console.error(err));
        }
        initProducts();
    }, []);

    return (
        <div className={cx('list-acount')}>
            {data.length > 0 &&
                data.map((item, index) => {
                    return index < initCurrent && <AccountItem data={item} key={item.id} />;
                })}
            {initCurrent > num ? (
                <span
                    className={cx('see-more')}
                    onClick={() => {
                        setInitCurrent(num);
                    }}
                >
                    Hide
                </span>
            ) : (
                <span
                    className={cx('see-more')}
                    onClick={() => {
                        setInitCurrent(data.length);
                    }}
                >
                    See All
                </span>
            )}
        </div>
    );
}

export default AccountSuggested;
