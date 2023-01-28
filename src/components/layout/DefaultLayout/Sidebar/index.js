import { HomeIcon, FollowIcon, LiveIcon } from '~/components/icon';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import AccountSuggested from '~/components/layout/components/AccountSuggested';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div className={cx('item')}>
                        <Button to="/" children="For You" large icon={<HomeIcon />} isActive />
                    </div>
                    <div className={cx('item')}>
                        <Button to="/following" children="Following" large icon={<FollowIcon />} isActive />
                    </div>
                    <div className={cx('item')}>
                        <Button to="/live" children="Live" large icon={<LiveIcon />} isActive />
                    </div>
                </div>
                <div className={cx('suggested')}>
                    <h5>Suggested accounts</h5>
                    <AccountSuggested />
                </div>
                <div className={cx('suggested')}>
                    <h5>Following accounts</h5>
                    <AccountSuggested />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
