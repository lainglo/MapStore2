var PropTypes = require('prop-types');
/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = require('react');
var {FormattedNumber} = require('react-intl');

class NumberFormat extends React.Component {
    static propTypes = {
        value: PropTypes.object,
        numberParams: PropTypes.object
    };

    static contextTypes = {
        intl: PropTypes.object
    };

    static defaultProps = {
        value: new Date()
    };

    render() {
        return this.context.intl ? <FormattedNumber value={this.props.value} {...this.props.numberParams}/> : <span>{this.props.value && this.props.value.toString() || ''}</span>;
    }
}

module.exports = NumberFormat;
