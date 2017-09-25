import React from 'react';

import classNames from 'classnames/bind';
import Markdown from 'react-remarkable';

import styles from 'css/components/home';
import {connect} from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import {} from 'prop-types';
import {dispatchThatFetch} from '../store/connections';

const cx = classNames.bind(styles);

import {CAR_OF_THE_WEEK_ACTIONS} from '../constants/index';

const printState = (state) => {
  return JSON.stringify(state, null, 2);
};

const Home = (props) => {
  //
  return (
    <div className={cx('home')}>
      <h1 className={cx('home__header')}>Google Doc Car of the Week</h1>

      <cite>Change the content of the google doc, and hard refresh this page.</cite>
      <h3>Issues</h3>
      <h4>Policy Controls</h4>
      <ol>
        <li>
          Google DOC doesn't provide any cors headers, therefor, it is impossible to load directly the JSON from the browser, as it will raise the Allow Origin POlicy error.
        </li>
        <li>
          There was a cool hack, which basicaly uses mode; 'no-cors' in the fetch API, but this has been deprecated in CHrome, and now, it returns an opaque response.
        </li>
        <li>
          The only solution I came with, was to use a custom made node.js proxy, but this solution is not viable as well, because Google Doc changes the download link regularly.
        </li>
        <li>
          As a consequence, it might be a good idea to provide a <b>consistent</b> external URL, or even better, get the back-end guys to dig where the Allow-Access headers are set in their code, and update it accordingly.
        </li>
      </ol>


      <pre>
        {printState(props.carsOfTheWeekReducers)}
      </pre>
    </div>
  );
};

const componentWillMount = ({dispatch}) => {
	dispatchThatFetch(dispatch)(
    CAR_OF_THE_WEEK_ACTIONS.REQUEST,
    CAR_OF_THE_WEEK_ACTIONS.SUCCESS,
    CAR_OF_THE_WEEK_ACTIONS.ERROR)('https://doc-04-2c-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/2705dlvepo8r6ujlrg8dqqvgiflhedbh/1506304800000/10373323858895933772/*/0ByDU-RzfQlBwLWpfdU9SSE15eWs?e=download');
};

const mapStateToProps = (state) => {
  return state;
};

const HomePage = lifecycle({componentWillMount})(Home);

console.log(HomePage);

export default connect(mapStateToProps)(HomePage);


