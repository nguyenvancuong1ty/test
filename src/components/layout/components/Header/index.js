import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css';

import { Wrapper as PoperWrapper } from '~/components/Poper';
import MenuItem from '~/components/Poper/Menu';
import Searchcpn from '~/components/Searchcpn';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/icon';

const cx = classNames.bind(styles);
function Header({className}) {
    return (
        <header className={className || cx('wraper')}>
            <div className={cx('container')}>
                <Link className={cx('logo')} to="/">
                    <img className={cx('img')} alt="" src="img/logo-tiktok.png" />
                </Link>
                <Searchcpn></Searchcpn>
                <div className={cx('opstion')}>
                    <Tippy delay={[0, 200]} content="Upload Video">
                        <div className={cx('opstion-item')}>
                            <UploadIcon className={cx('icon-upload')}></UploadIcon>
                        </div>
                    </Tippy>
                    <Tippy delay={[0, 200]} content="Message">
                        <div className={cx('opstion-item')}>
                            <MessageIcon className={cx('icon-message')}></MessageIcon>
                        </div>
                    </Tippy>
                    <Tippy delay={[0, 200]} content="Inbox">
                        <div className={cx('positi')}>
                            <div className={cx('opstion-item')}>
                                <InboxIcon className={cx('icon-inbox')}></InboxIcon>
                                <span>12</span>
                            </div>
                        </div>
                    </Tippy>
                    <HeadlessTippy
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('list-item')} tabIndex="-1" {...attrs}>
                                <PoperWrapper>
                                    {/* <h3>List Item</h3> */}
                                    <div>
                                        <MenuItem></MenuItem>
                                    </div>
                                </PoperWrapper>
                            </div>
                        )}
                        // onClickOutside={() => setIsShow(false)}
                    >
                        <div className={cx('opstion-item')}>
                            <img alt="avt" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/117763212_698219704096372_3673295371131637864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iCJ3KMOoFH4AX-hbt8i&_nc_ht=scontent.fhan2-4.fna&oh=00_AfATMeSCB9hS9X3l0POCef5xFuvHFf56I4_6jw_uj1WqIQ&oe=63FB4642" />
                        </div>
                    </HeadlessTippy>

                    {/* <Button children="Dang nhap" primary /> */}

                    {/* <HeadlessTippy
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('list-item')} tabIndex="-1" {...attrs}>
                                <PoperWrapper>
                                    <h3>List Item</h3>
                                    <div>
                                        <MenuItem></MenuItem>
                                    </div>
                                </PoperWrapper>
                            </div>
                        )}
                        // onClickOutside={() => setIsShow(false)}
                    >
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </HeadlessTippy> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
