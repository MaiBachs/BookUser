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
import TextField from '@mui/material/TextField';

const { SubMenu } = Menu;

const cx = classNames.bind(styles);

function Header(props) {
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

    const handleLogout = () => {
        if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
            localStorage.removeItem('token');
            navigate('/home');
        } else {
            return;
        }
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
                        <ul className={cx('result-search')}>
                            {props.listBookCT2
                                .filter((book) => {
                                    return book.bookName.toLowerCase().includes(value.toLowerCase());
                                })
                                .map((book) => {
                                    return (
                                        <li className={cx('list-book-search')}>
                                            <Link to="/detailbook" state={book}>
                                                {book.bookName}
                                            </Link>
                                        </li>
                                    );
                                })}
                        </ul>
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
                    {localStorage.getItem('token') ? (
                        <button onClick={handleLogout}>ĐĂNG XUẤT</button>
                    ) : (
                        <button onClick={handleOpen}>ĐĂNG NHẬP</button>
                    )}
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
                                    <Menu.Item key="setting:1">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to="/bookbycategory"
                                            state={'Trinh thám - Kinh dị'}
                                        >
                                            Trinh thám - Kinh dị
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="setting:2">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to="/bookbycategory"
                                            state={'Viễn tưởng - Giả tưởng'}
                                        >
                                            Viễn tưởng - Giả tưởng
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="setting:3">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to="/bookbycategory"
                                            state={'Khởi nghiệp - Làm giàu'}
                                        >
                                            Khởi nghiệp - Làm giàu
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="setting:4">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to="/bookbycategory"
                                            state={'Marketing - Bán hàng'}
                                        >
                                            Marketing - Bán hàng
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="setting:5">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to="/bookbycategory"
                                            state={'Quản trị - Lãnh đạo'}
                                        >
                                            Quản trị - Lãnh đạo
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="setting:6">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to="/bookbycategory"
                                            state={'Tài chính cá nhân'}
                                        >
                                            Tài chính cá nhân
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="setting:7">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to="/bookbycategory"
                                            state={'Phát triển cá nhân'}
                                        >
                                            Phát triển cá nhân
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="setting:8">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to="/bookbycategory"
                                            state={'Doanh nhân - Bài học kinh doanh'}
                                        >
                                            Doanh nhân - Bài học kinh doanh
                                        </Link>
                                    </Menu.Item>
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
