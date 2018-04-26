/**
 * Created by Nastya on 15.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import color from 'color';
import styles from './styles';
import {Dimensions} from 'react-native';

const TextAddContainer = (props) => {
  const { onPress, text } = props;

    const maxWidth = Dimensions.get('window').width / 2;

  const underlayColor = color(styles.$buttonBackgroundColorbase).darken(styles.$buttonBackgroundColorModifier);

  if (text === null) {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          underlayColor={underlayColor}
          style={styles.textAddContainer}
          onPress={onPress}
        >
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../res/images/icons/text-document.png')}
          />
        </TouchableHighlight>
      </View>

    );
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.textAddContainer}
        onPress={onPress}
      >
        <Text
            numberOfLines={6}
            style={styles.text}
        >
          {text}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

TextAddContainer.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default TextAddContainer;
