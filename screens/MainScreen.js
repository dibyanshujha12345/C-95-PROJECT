import React, * as react from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";

export default class MainScreen extends React.Component {
  gotoTopics = async () => {
    await this.props.navigation.navigate("Topics");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Topics");
          }}
          // onPress={this.gotoTopics}
          style={[styles.button]}
        >
          <Text style={styles.buttonText}>Topics</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A374D",
  },
  button: {
    backgroundColor: "#406882",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#406882",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#406882",
    fontWeight: "700",
    fontSize: 16,
  },
});
