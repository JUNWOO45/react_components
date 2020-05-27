import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:00PM" comment="Hello World! - 1" avatar={faker.image.avatar()}/>
            <CommentDetail author="Junwoo" timeAgo="Yesterday at 5:00PM"comment="Hello World! - 2"avatar={faker.image.avatar()} />
            <CommentDetail author="Gaon" timeAgo="Today at 12:00PM" comment="Hello World! - 3" avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
