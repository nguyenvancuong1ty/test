import {
    faChevronLeft,
    faCoins,
    faEarthAsia,
    faGear,
    faKeyboard,
    faQuestionCircle,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
function MenuItem() {
    const listItem = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Languge',
                datas: [
                    {
                        name: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        name: 'en',
                        title: 'English',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard',
            to: '/intro',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
        },
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            title: 'Feedback and help',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
        },
        {
            icon: <FontAwesomeIcon icon={faRightToBracket} />,
            title: 'Setting',
        },
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Languge',
                datas: [
                    {
                        name: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        name: 'en',
                        title: 'English',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard',
            to: '/intro',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
        },
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            title: 'Feedback and help',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
        },
        {
            icon: <FontAwesomeIcon icon={faRightToBracket} />,
            title: 'Setting',
        },
    ];

    const initialQuantityItem = 5;
    const [history, setHistory] = useState([{ datas: listItem }]);
    const [quantityItem, setQuantityItem] = useState(initialQuantityItem);
    let currentMenu = history[0];

    const handleClickMenu = (item) => {
        item.children && setHistory((prev) => [item.children, ...prev]);
    };

    const handlePrevClick = () => {
        setHistory((prev) => prev.slice(1, prev.length));
    };
    return (
        <>
            {currentMenu.title && (
                <div className={cx('menu-title')}>
                    <span onClick={handlePrevClick}>
                        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                    </span>
                    <h3 className={cx('menu-text')}>{currentMenu.title}</h3>
                </div>
            )}
            {currentMenu.datas.map((item, index) => {
                return (
                    index < quantityItem && (
                        <Button to={item.to} key={index} className={cx('item')} onClick={() => handleClickMenu(item)}>
                            {item.icon && <span>{item.icon}</span>}
                            <h4>{item.title}</h4>
                        </Button>
                    )
                );
            })}
            {currentMenu.datas.length > 5 &&
                (quantityItem === initialQuantityItem ? (
                    <span onClick={() => setQuantityItem(currentMenu.datas.length)}>See All</span>
                ) : (
                    <span onClick={() => setQuantityItem(initialQuantityItem)}>Hide</span>
                ))}
        </>
    );
}

export default MenuItem;
