import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MediaDate.scss';
import { Link } from 'react-router-dom';

function MediaDate() {
    return (
        <div class="media">
            <div class="block-date mr-3">
                <span>11</span>
                <p>Apr</p>
            </div>
            <div class="media-body">
                <p>
                    <Link className="link">Waka thông báo tạm dừng chương trình “Thử thách đọc sách”</Link>{' '}
                </p>
            </div>
        </div>
    );
}

export default MediaDate;
