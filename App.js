import React, { Component } from 'react';
import { Modal, Text, Button, View, Alert, StyleSheet } from 'react-native';

class App extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        <Button
          title="Show modal"
          onPress={() => { this.setModalVisible(true) }} />
       <Modal
          transparent = { false } // if this proptery is set to true, the content below the modal will be visible but the status bar turns white
          visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <View>
              <Button
                 title="Hide modal"
                 onPress={() => {this.setModalVisible(!this.state.modalVisible)}} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  modal: {
    height: '45%',
    width: '80%',
    borderRadius: 24,
    backgroundColor: 'red',
    justifyContent: 'flex-end'
  }

})

export default App