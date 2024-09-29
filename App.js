import { Text, SafeAreaView, StyleSheet, View, Button, Linking, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import Home from './Paginas/Home.js';
import CalculadoraO from './Paginas/CalculatorO.js';
import CalculadoraM from './Paginas/CalculatorM.js';


export default function App() {

  const [pagina, setPagina] = useState("Home");


  const renderPag = () =>{
    switch (pagina){
    case "Home":
      return <Home Navigation={()=> setPagina("Obesidade")} twoNavigation={()=> setPagina("Muscular")}/>
    case "Obesidade":
      return <CalculadoraO Navigation={()=>setPagina("Home")}/>
    case "Muscular":
      return <CalculadoraM Navigation={()=> setPagina("Home")}/>
    default:
      return <Home/>
    }
  }

  return <View style={{flex:1}}>{renderPag()}</View>
}
