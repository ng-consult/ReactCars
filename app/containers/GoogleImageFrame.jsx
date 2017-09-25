import React from 'react';
import {shape, string} from 'prop-types';
import classNames from 'classnames/bind';
import styles from 'css/components/iframe';

const cx = classNames.bind(styles);

const GoogleImageFrame = ({routeParams: {make, model}}) => {
	const URL = `https://www.bing.com/images/search?q=${encodeURIComponent(make)}+${encodeURIComponent(model)}&FORM=HDRSC2`;

	return (<div>
		<h3>BING Image results for <u>{make}</u> - <u>{model}</u></h3>
		<iframe className={cx('iframe')} src={URL}></iframe>
	</div>);
};

GoogleImageFrame.PropTypes = {
 routeParams: shape({
		make: string,
		model: string,
	}),
};

export default GoogleImageFrame;
