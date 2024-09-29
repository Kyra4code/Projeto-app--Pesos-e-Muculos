import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E18672',
    justifyContent: 'space-between',
    border: 0,
  },
  titulo:{
    margin: 8,
    marginTop: 289,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer:{
    backgroundColor: '#7B4A76',
    alignItems: 'center',
    marginTop: 100,
  },
  copyright:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  click:{
    height: 60,
    width: 60
  },
  botao1:{
    height: "5%",
    width: "85%",
    marginLeft: 20,
    alignItems: 'center',
    borderRadius: 9,
  },
  botao2:{
    height: "5%",
    width: "85%",
    marginLeft: 20,
    alignItems: 'center',
    borderRadius: 9,
  }
});

export default styles;