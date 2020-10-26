import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'
import { Feather as Icon } from '@expo/vector-icons'

import Header from '../../components/Header';

import api from '../../services/api';

import styles from './styles';


export default function NewRoutine() {
  const { navigate } = useNavigation();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  
  function mhora(v){
    v=v.replace(/\D/g,"");                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{2})(\d)/,"$1:$2");
    return v;
  }
  
  function handleAddNewRoutine(){
    const data = { title, description, day, hour }
    try{
      api.post('/todo', data)
      navigate('Landing')
    }catch{
      alert("Erro ao criar nova Rotina")
    }

  }

  return (
    <View styles={styles.container}>
      <Header title="ADICIONAR NOVA ROTINA" />


      <View style={[styles.containerList, styles.todoList ]}>
        <Text style={styles.todoTitle}>
          Insira as informações necessárias para a criação de um novo To-Do.
        </Text>

        <View style={styles.todoFooter}>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Título" 
              placeholderTextColor="#c8c8ca"  
              value = {title}
              onChangeText = {text => setTitle(text)}
            />
            <TextInput
              style={styles.input} 
              placeholder="Descrição" 
              placeholderTextColor="#c8c8ca"
              value = {description}
              onChangeText = {text => setDescription(text)}
            />
            <View style={styles.inputSelect}> 
              <RNPickerSelect
                placeholder={{ label: 'Segunda Feira', value: 'Segunda Feira', color: "#000" }}
                style={{
                  inputAndroid: {
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 0.5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    color: 'black',
                    paddingRight: 30, // to ensure the text is never behind the icon
                  },
                }}
                onValueChange={(value) => setDay(value)}
                items={[
                  { label: 'Terça Feira', value: 'Terça Feira', color: "#000"  },
                  { label: 'Quarta Feira', value: 'Quarta Feira', color: "#000" },
                  { label: 'Quinta Feira', value: 'Quinta Feira', color: "#000" },
                  { label: 'Sexta Feira', value: 'Sexta Feira', color: "#000" },
                  { label: 'Sábado', value: 'Sábado', color: "#000" },
                  { label: 'Domingo', value: 'Domingo', color: "#000" },
                ]}
              />
            </View>
            <TextInput 
              style={styles.input} 
              placeholder="Horário" 
              keyboardType={'numeric'} 
              maxLength={5}  
              placeholderTextColor="#c8c8ca" 
              value={mhora(hour)} 
              onChangeText={text => setHour(text)}
            />
          </View>
          <RectButton style={styles.todoButton} onPress={handleAddNewRoutine}>
            <View style={styles.todoButtonIcon}>
              <Icon name="plus-circle" color="#FFF" size={24} />
            </View>
            <Text style={styles.todoButtonText}>Nova Rotina</Text>
          </RectButton>

        </View>
      </View>
    </View>
  )
}