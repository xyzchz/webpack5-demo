import React from 'react';
import Loadable from 'react-loadable';

export default (loader) => {
    return Loadable({
        loader,
        delay: 200, // 默认200ms
        loading: ({ error, pastDelay }) => {
            if (error) {
                return <div>Error!</div>;
            } else if (pastDelay) {
                return <div>正在加载...</div>;
            } else {
                return null;
            }
        },
    });
}