import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Are you sure???!?</ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Test" timeAgo="Today at 4:00PM" comment="Hello World! - 1" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Junwoo" timeAgo="Yesterday at 5:00PM"comment="Hello World! - 2"avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Gaon" timeAgo="Today at 12:00PM" comment="Hello World! - 3" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
