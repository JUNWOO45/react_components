import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';

const CommentDetail = (props) => {
    // console.log('props : ', props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                {/* <img alt="avatar" src={faker.image.avatar()} /> */}
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {/* Today at 6:00PM */}
                        {props.timeAgo}
                    </span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    );
}

// ReactDOM.render(
//     <CommentDetail />,
//     document.querySelector('#test')
// );

export default CommentDetail;
