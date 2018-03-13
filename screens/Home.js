import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux';
import { login } from '../redux/actions'
import { 
  Text, 
  View,
  Alert
} from 'react-native';

class Home extends React.Component {
  state = {}

  componentWillMount() {
  }

  
  render() {
    return (
     <View>
      <Text>Home Test</Text>
     </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);
