import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

const App = () => {
    const avatar = Faker.fake("{{image.avatar}}");

    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={avatar} />
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
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
