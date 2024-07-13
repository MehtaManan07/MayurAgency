import { View } from 'react-native';
import styles from './styles';
import { Header } from './components';

const Dashboard = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
    </View>
  );
};

export default Dashboard;
