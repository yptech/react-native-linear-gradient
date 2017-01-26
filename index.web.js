import React, { Component, PropTypes } from 'react';
import { PointPropType, View } from 'react-native';

export default class LinearGradient extends Component {
    static propTypes = {
        start: PointPropType,
        end: PointPropType,
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
        locations: PropTypes.arrayOf(PropTypes.number),
        ...View.propTypes,
    };
  render() {
    let colors = this.props.colors.join();
    return (
        <View
            {...this.props}
            style={[{background: `linear-gradient(top, ${colors})`}, this.props.style]}
        />
    );
  }
}
