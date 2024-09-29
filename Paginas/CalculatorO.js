import {Text, Image, ScrollView, View, StyleSheet, TextInput, Button} from 'react-native';
import stylesO from '../Estilos/StyleO.js';
import {useState} from 'react';

const CalculadoraO = ({Navigation})=>{
  const [Altura1, setAltura1] = useState('');
  const [Kg1, setKg2] = useState('');
  const [Resultado1, setResultado1] = useState(null);

  function calculo(){
    if(setResultado1 != null){
      const calculolinho = (parseFloat(Kg1) / parseFloat((Altura1 ** 2)));

      if(calculolinho >= 0 && calculolinho <= 18.9){
        setResultado1("Você é magrelo")
      }
      else if (calculolinho >= 19 && calculolinho <= 26.9){
        setResultado1("Você tem peso normal")
      }
      else if(calculolinho >= 27 && calculolinho <= 31.9){
        setResultado1("Você é sobre peso")
      }
      else if(calculolinho >= 32){
        setResultado1("OBESO")
      }
    }
    else{
      resultado2('ERROR')
    }
  }

  function limpar(){
    setAltura1('')
    setKg2('')
    setResultado1(null)
  }

  return(
  <ScrollView style={stylesO.Tela_de_fundo}>
    <View>
      <Button title="Voltar" onPress={Navigation} color="#E18672"/>
    </View>
    <View style={stylesO.Tela_de_interface}>
      <Text  style={stylesO.Titulo}>Calculadora para ver se você é obeso</Text>
      <View style={stylesO.Tela_de_valores}>
        <TextInput
        placeholder = 'Digite sua Altura (em Metros)'
        keyboardType= 'numeric'
        value={Altura1}
        onChangeText={setAltura1}
        style={stylesO.textbox}
        />
        <TextInput
        placeholder = 'Digite seu peso'
        keyboardType= 'numeric'
        value={Kg1}
        onChangeText={setKg2}
        style={stylesO.textbox}
        />
        <View style={stylesO.Buttonstyle}>
        <Button mode="contained" title="Você é gordo?" onPress={calculo} color='black'/>
        </View>
        <View style={stylesO.Buttonstyle}>
          <Button mode='contained' title="Limpar" onPress={limpar} color='black'/>
        </View>
        {setResultado1 && <View>
          <Text style={stylesO.Text_Resposta}>{Resultado1}</Text>
        </View>}
    </View>
    </View>
  </ScrollView>
  )}

  export default CalculadoraO;