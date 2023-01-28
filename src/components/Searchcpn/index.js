import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Searchcpn.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import SearchAcount from '~/components/SearchAcount';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Searchcpn() {
    const [dataSearch, setDataSearch] = useState([]);
    const [dataInput, setDataInput] = useState('');
    const [isShow, setIsShow] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const debounced = useDebounce(dataInput, 700);

    const inputRef = useRef();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setDataSearch([
    //             {
    //                 avt: 'https://hinhgaixinh.com/wp-content/uploads/2022/03/anh-gai-xinh-hoc-sinh-tuyet-dep.jpg',
    //                 name: 'Kieuoanh',
    //                 deps: 'nhu ho cai',
    //             },
    //             {
    //                 avt: 'https://i.vietgiaitri.com/2021/2/27/dac-san-gai-xinh-truong-nguoi-ta-khi-chup-can-mat-ngu-quan-sac-sao-than-thai-dinh-cao-3d3-5602224.jpg',
    //                 name: 'Hoahau',
    //                 deps: 'nhu ho cai',
    //             },
    //             {
    //                 avt: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-cap-2-3.jpg',
    //                 name: 'Kha Như',
    //                 deps: 'nhu ho cai',
    //             },
    //             {
    //                 avt: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/gai-xinh-toc-dai.jpg',
    //                 name: 'ThanTuong',
    //                 deps: 'nhu ho cai',
    //             },
    //         ]);
    //     }, 2000);
    // }, []);

    useEffect(() => {
        if (!debounced.trim()) {
            setDataSearch([]);
            return;
        }

        setIsLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setDataSearch(res.data);
                setIsLoading(false);
            })

            .catch(() => {
                setIsLoading(false);
            });
    }, [debounced]);

    const handleChangeInput = (e) => {
        setDataInput(e.target.value);
        setIsShow(true);
    };

    const handleBtnRemove = () => {
        setDataInput('');
        inputRef.current.focus();
    };

    return (
        <HeadlessTippy
            interactive="true"
            visible={dataSearch.length > 0 && dataInput && isShow}
            render={(attrs) => (
                <div className={cx('search-poper')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <h2>Acount</h2>
                        <SearchAcount dataSearch={dataSearch} />
                    </PoperWrapper>
                </div>
            )}
            onClickOutside={() => setIsShow(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    className={cx('input')}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck="false"
                    value={dataInput}
                    onChange={handleChangeInput}
                />
                {dataInput && !isLoading && (
                    <button className={cx('icon-remove')} onClick={handleBtnRemove}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {isLoading && (
                    <button className={cx('icon-loadding')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                <button className={cx('icon-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Searchcpn;
