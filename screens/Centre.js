import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
//import { auth } from "../firebase";
export const navigationRef = React.createRef();
import centres from "../centredb";
class Centre extends React.Component {
  register = () => {
    this.props.navigation.navigate("Register", {
      centre: this.props.route.params.centre,
    });
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.props.route.params.centre.img}
          style={styles.image}
        />
        <Text
          style={{
            fontSize: 25,
            color: "white",
            marginBottom: 15,
          }}
        >
          {this.props.route.params.centre.name}
        </Text>
        {/* <Text
          style={{
            fontSize: 20,
            color: "white",
            marginBottom: 15,
          }}
        >
          {this.props.route.params.centre.cont}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            marginBottom: 15,
          }}
        >
          {this.props.route.params.centre.city}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            margin: 15,
          }}
        >
          {this.props.route.params.centre.add}
        </Text>
        
        
        
        
        
        */}

        <Text
          style={{
            fontSize: 15,
            color: "white",
            margin: 15,
          }}
        >
          {/* photosynthesis, the process by which green plants and certain other
          organisms transform light energy into chemical energy. During
          photosynthesis in green plants, light energy is captured and used to
          convert water, carbon dioxide, and minerals into oxygen and
          energy-rich organic compounds. */}
          {this.props.route.params.centre.info}
        </Text>
        
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
    textAlign: "center",
  },
  item: {},
  image: {
    width: 350,
    height: 350,
    resize: "contain",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  itemText: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#406882",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
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

export default Centre;
