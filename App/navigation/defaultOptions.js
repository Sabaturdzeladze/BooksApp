import Colors from "../constants/Colors";

export default {
  headerTintColor: Platform.OS === 'android' ? Colors.primary : '',
};
