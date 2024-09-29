import {StyleSheet} from 'react-native';

const stylesO = StyleSheet.create({
  Tela_de_fundo:{
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding:7,
  },
  Tela_de_interface:{
    backgroundColor: 'white',
    borderRadius: 10,
    height: 370,
    paddingTop:40,
  
  },
  Tela_de_valores:{
    alignItems: 'center'
  },
  textbox:{
    marginTop: 10,
    backgroundColor: 'gray',
    borderRadius: 7,
    height: 40,
    width: 260,
  },
  Buttonstyle:{
    backgroundColor: 'black',
    color: 'white',
    marginTop: 10,
    borderRadius: 13,
    width: 260,
  },
  Titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  Text_Resposta:{
    marginTop: 22,
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default stylesO;