import { Text, SafeAreaView, StyleSheet, View, Button, Linking, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Estilos/Style_Home.js';

const Home = ({Navigation, twoNavigation})=>{

 const linkagem = ()=>{
    Linking.openURL('https://github.com/Kyra4code')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}> Bem vindo a {'\n'}calculadora de {'\n'}Obesos e Musculosos</Text>
      </View>
      <View style={styles.botao1}>
        <Button title="Calcular Obesidade" onPress={Navigation} color='#4A8649'/>
      </View>
      <View style={styles.botao2}>
        <Button title="Calcular Massa muscular" onPress={twoNavigation} color='#4B899C'/>
      </View>
      {/*View abaixo é o footer do app*/}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.click} onPress={linkagem}>
            <Icon name="github" size={60} color="000000"/>
          </TouchableOpacity>
          <Text style={styles.copyright}>By Kyra4code</Text>
        </View>
    </SafeAreaView>
  );
}

export default Home;