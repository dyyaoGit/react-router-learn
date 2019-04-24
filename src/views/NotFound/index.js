import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="not-found">
                <h1>
                    404！习近平说，这个页面没有！
                </h1>

                <ul>
                    <li>1. 如果你不服，请找你的领导。</li>
                    <li>2. 如果你不服，请自觉离职。</li>
                </ul>
            </div>
        )
    }
}

export default NotFound;