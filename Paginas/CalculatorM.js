import {Text, View, ScrollView, Button, TextInput} from 'react-native';
import {useState} from 'react';
import stylesM from '../Estilos/StyleM.js';

const CalculadoraM = ({Navigation})=>{

  const [Altura1, setAltura1] = useState('');
  const[Kg1, setKg2] = useState('');
  const [Resultado1, setResultado1] = useState(null);

 function calculo(){
    if(setResultado1 != null){
      const calculolinho = (parseFloat(Kg1) / parseFloat((Altura1 ** 2)));

      if(calculolinho >= 0 && calculolinho <= 17.9){
        setResultado1("Você é magrelinho")
      }
      else if (calculolinho >= 18 && calculolinho <= 22){
        setResultado1("Você é normal")
      }
      else if(calculolinho >= 22.1 && calculolinho <= 26){
        setResultado1("Você possuí massa maior que a média")
      }
      else if(calculolinho >= 26.1){
        setResultado1("Massa maior que a média")
      }
    }
    else{
      resultado2('ERROR')
    }
  }

  function limpeza(){
    setAltura1('');
    setKg2('')
    setResultado1(null);
  }

  return(
     <ScrollView style={stylesM.Tela_de_fundo}>
    <View>
      <Button title="Voltar" onPress={Navigation} color="#E18672"/>
    </View>
    <View style={stylesM.Tela_de_interface}>
      <Text  style={stylesM.Titulo}>Calculadora para ver se você é Musculoso</Text>
      <View style={stylesM.Tela_de_valores}>
        <TextInput
        placeholder = 'Digite sua Altura (em Metros)'
        keyboardType= 'numeric'
        value={Altura1}
        onChangeText={setAltura1}
        style={stylesM.textbox}
        />
        <TextInput
        placeholder = 'Digite sua massa Muscular'
        keyboardType= 'numeric'
        value={Kg1}
        onChangeText={setKg2}
        style={stylesM.textbox}
        />
        <View style={stylesM.Buttonstyle}>
        <Button mode="contained" title="Você é Fortinho??" onPress={calculo} color='black'/>
        </View>
        <View style={stylesM.Buttonstyle}>
          <Button mode='contained' title="Limpar" onPress={limpeza} color='black'/>
        </View>
        {setResultado1 && <View>
          <Text style={stylesM.Text_Resposta}>{Resultado1}</Text>
        </View>}
    </View>
    </View>
  </ScrollView>
  ); 
}

export default CalculadoraM;