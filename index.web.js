import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

type PropsType = {
  start?: Array<number> | {x: number, y: number};
  end?: Array<number> | {x: number, y: number};
  colors: Array<string>;
  locations?: Array<number>;
} & typeof(View);

export default class LinearGradient extends Component {
    static propTypes = {
        start: PropTypes.oneOfType([
          PointPropType,
        ]),
        end: PropTypes.oneOfType([
          PointPropType,
        ]),
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
        locations: PropTypes.arrayOf(PropTypes.number),
        style: {
            ...View.propTypes.style,
            background: PropTypes.string
        },
        ...View.propTypes,
    };
  render() {
    let colors = this.props.colors.join();
    return <View {...this.props} style={{background: `linear-gradient(top, ${colors})`}}/>;
  }
}
