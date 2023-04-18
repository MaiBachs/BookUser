import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineSearch, AiOutlineUnorderedList } from 'react-icons/ai';
import { RiVipDiamondFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useState, useCallback } from 'react';
import Login from './Login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSearch = () => {
        if (value === '') {
            return;
        }
        axios
            .post('https://host.up.railway.app/getBookByName', { bookName: value })
            .then((response) => {
                setResult(response.data);
                navigate('/detailbook', { state: response.data[0] });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className={cx('logo-search')}>
                    <div className={cx('logo')}>
                        <img src="https://ebook.waka.vn/themes/desktop/images/logo-waka.png?v=1" alt="logo" />
                    </div>
                    <div className={cx('search')}>
                        <input
                            placeholder="Nhập tên sách"
                            value={value}
                            onChange={(event) => {
                                handleChange(event);
                            }}
                        ></input>
                        <button onClick={handleSearch}>
                            <AiOutlineSearch className={cx('search-icon')} />
                            Tìm kiếm
                        </button>
                    </div>
                </div>
                <div className={cx('menu')}>
                    <a>
                        <img src="https://ebook.waka.vn/themes/desktop/images/hieu-soi.png" alt="logo"></img>
                    </a>
                    <Tippy content="Vip" className={cx('tippy')} theme="tomato">
                        <a href="">
                            <RiVipDiamondFill className={cx('vip-icon')} />
                        </a>
                    </Tippy>
                    <button onClick={handleOpen}>ĐĂNG NHẬP</button>
                    <Login open={open} handleOpen={handleOpen} handleClose={handleClose} />
                </div>
            </div>
            <div className={cx('header-bottom')}>
                <ul className={cx('nav')}>
                    <li>
                        <span>
                            <AiOutlineUnorderedList className={cx('list-icon')} />
                        </span>
                        <div>
                            <Menu className={cx('menu')}>
                                <SubMenu className={cx('submenu')} title="Danh mục">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </li>
                    <li>
                        <Link className={cx('link-menu')}>Sách mới nhất</Link>
                    </li>
                    <li>
                        <Link className={cx('link-menu')}>Bảng xếp hạng</Link>
                    </li>
                    <li>
                        <Link className={cx('link-menu')}>Miễn phí HOT</Link>
                    </li>
                    <li>
                        <Link className={cx('link-menu')}>Tuyển tập</Link>
                    </li>
                    <li>
                        <Link className={cx('link-menu')}>Khuyên đọc</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
