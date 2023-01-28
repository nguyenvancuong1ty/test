import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Video from '~/components/Video';
import Image from '~/components/image';
import Button from '~/components/Button';
import Actions from '~/components/Actions';

const cx = classNames.bind(styles);
function Home() {
    const [data, setData] = useState([]);
    const [isonTop, setIsonTop] = useState(false);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(1);
    const wrapRef = useRef();
    // useEffect(() => {
    //     const callAPI = async () => {
    //         await fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=${page}&per_page=4`)
    //             .then((res) => res.json())
    //             .then((data) => setData((prev) => [...prev, ...data.data]));
    //         setLoading(true);
    //     };
    //     callAPI();
    // }, [page]);

    // const handleScroll = useCallback(() => {
    //     wrapRef.current.scrollTop > 70 ? setIsonTop(true) : setIsonTop(false);
    //     const height = wrapRef.current.clientHeight * perPage;
    //     if (wrapRef.current.scrollTop > height) {
    //         setTimeout(() => {
    //             setLoading(true);
    //             setPage((prev) => prev + 1);
    //         }, 1500);
    //         setPerPage((prev) => prev + 4);
    //     }
    // }, [perPage]);
    // useEffect(() => {
    //     wrapRef.current.addEventListener('scroll', handleScroll);
    //     const cloneRef = wrapRef.current;
    //     return () => {
    //         cloneRef.removeEventListener('scroll', handleScroll);
    //     };
    // }, [handleScroll, perPage]);

    useEffect(() => {
        const callAPI = async () => {
            await fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=${page}&per_page=3`)
                .then((res) => res.json())
                .then((data) => setData((prev) => [...prev, ...data.data]));
            setLoading(true);
        };
        callAPI();
    }, [page, perPage]);

    const fetchMoreData = () => {
        setTimeout(() => {
            setLoading(true);
            setPage((prev) => prev + 1);
            setPerPage((prev) => prev + 1);
        }, 1000);
    };

    const handleScroll = () => {
        wrapRef.current.scrollTop > 140 ? setIsonTop(true) : setIsonTop(false);
    };

    const handleScrollTop = () => {
        wrapRef.current.scrollTop = 0;
    };

    return (
        <div className={cx('wrap')} ref={wrapRef} id="scrollableDiv" onScroll={handleScroll}>
            <InfiniteScroll
                dataLength={data.length}
                scrollableTarget="scrollableDiv"
                next={fetchMoreData}
                hasMore={true}
                loader={isLoading && <div className={cx('loader')}></div>}
            >
                {data.map((item) => {
                    return (
                        <div className={cx('content')} key={item.id}>
                            <div className={cx('item')}>
                                <div className={cx('header')}>
                                    <Image className={cx('image')} src={item.avatar} alt="" />
                                    <div>
                                        <span>{item.nickname}</span>
                                        <span>
                                            {item.first_name} {item.last_name}
                                        </span>
                                        <h5>{item.popular_video.description}</h5>
                                    </div>

                                    <Button primary children="Follow" marginAuto />
                                </div>
                                <div className={cx('body')}>
                                    <Video data={item} className={cx('video')} />
                                    <div className={cx('action')}>
                                        <div style={{ flex: 1 }}></div>
                                        <Actions data={item}></Actions>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </InfiniteScroll>
            <button className={isonTop ? cx('btn-ontop', { hide: 'hide' }) : cx('btn-ontop')} onClick={handleScrollTop}>
                onTop
            </button>
        </div>
    );
}

export default Home;
