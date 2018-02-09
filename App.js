import React from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clickCounter: "0"};

    this._onTap = this._onTap.bind(this);
  }

  _onTap() {
    this.state.clickCounter++;
    ToastAndroid.show("You've pressed " + this.state.clickCounter + " times",ToastAndroid.SHORT)
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>This app showcases Android toast</Text>
          <Button
            onPress={this._onTap}
            title={"Tap this"}
          />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
