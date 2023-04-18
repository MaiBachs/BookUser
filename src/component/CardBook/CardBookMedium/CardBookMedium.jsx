import React from 'react';
import styles from './CardBookMedium.module.scss';
import classNames from 'classnames/bind';
import { BiBookHeart } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

const cx = classNames.bind(styles);

function CardBookMedium(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('div')}>
                <div className={cx('content')}>
                    <img className={cx('thumbnail')} src={props.book.coverBook} alt="..."></img>
                    <BiBookHeart className={cx('book-icon')} />
                    <div className={cx('introduce')}></div>
                    <button className={cx('detail')}>Chi tiết</button>
                </div>
                <div className={cx('views')}>
                    <AiOutlineEye className={cx('views-icon')} />
                    <span>Lượt xem</span>
                </div>
            </div>
        </div>
    );
}

export default CardBookMedium;
