import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/Hello';
import Textboxvalue from './components/Textboxvalue';
import GetRadiovalue from './components/GetRadiovalue';
import Edbutton from './components/Edbutton';
import Jsondatadisplay from './components/Jsondatadisplay';
import ArrayUnique from './components/ArrayUnique';
import Allownumbers from './components/AllowNumbers';
import Onecomp from './components/Firstcomp';
import Maincomp from './components/Maincomp';
import Randomstring from './components/Randomstring';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/*<App />*/}
            <>
                <Hello />
                <Textboxvalue />
                <GetRadiovalue />
                <Edbutton />
                <Jsondatadisplay />
                <ArrayUnique />
                <Allownumbers />
                <Maincomp />
                <Randomstring />
            </>

        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
