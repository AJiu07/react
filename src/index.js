// /* 使用ES6箭头函数 */
// var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在正在使用babel');

// import React from 'react';
// import ReactDom from 'react-dom';

// import getRouter from './router/router';

// if(module.hot){
//     module.hot.accept();
// }

// ReactDom.render(
//     getRouter(), document.getElementById('app'));


// import React from 'react';
// import ReactDom from 'react-dom';
// import {AppContainer} from 'react-hot-loader';

// import getRouter from 'router/router';

// /* 初始化 */
// renderWithHotReload(getRouter());

// /* 热更新 */
// if(module.hot){
//     module.hot.accept('./router/router',() => {
//         const getRouter = require('./router/router').default;
//         renderWithHotReload(getRouter());
//     });
// }

// function renderWithHotReload(RootElement){
//     ReactDom.render(
//         <AppContainer>
//             {RootElement}
//         </AppContainer>,
//         document.getElementById('app')
//     )
// }

import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';

import getRouter from 'router/router';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}