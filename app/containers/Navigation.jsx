import React  from 'react';
import { Link } from 'react-router';

import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = () => {
  return (
    <nav className={cx('navigation')} role="navigation">
      <Link to="/" className={cx('item')} activeClassName={cx('active')}>Home</Link>
      <Link to="/search" className={cx('item')} activeClassName={cx('active')}>Search</Link>
      <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
    </nav>
  );
};

export default Navigation;
