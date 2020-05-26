import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Junwoo
                </a>
                <div className="metadata">
                    <span className="date">
                        Today at 6:00PM
                    </span>
                </div>
                <div className="text">Hello World!</div>
            </div>
        </div>
    );
}

// ReactDOM.render(
//     <CommentDetail />,
//     document.querySelector('#test')
// );

export default CommentDetail;
