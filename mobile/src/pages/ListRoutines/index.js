import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons'

import Header from '../../components/Header';

import api from '../../services/api';
import styles from './styles'

export default function ListRoutines(){
  const { navigate } = useNavigation();

  const [doingActivities, setDoingActivities] = useState([]);

  useEffect(() => {
    api.get('/todoing').then(response => {
      setDoingActivities(response.data)
    })
  }, [])

  function handleDelete(doingActivity){
    api.delete(`/todoing/${doingActivity.id_doing}`)
    navigate('Landing')
  }

  async function handleCompletedActivityList(doingActivity){
    const id_completed = doingActivity.id;

    try{
      await api.post('/completedtodo', {id_completed});
      navigate('Landing')

    }catch{
      alert("Rotina já finalizada! Exclua da sua lista no ícone de lixeira")
    }
    
  }

  return(
    <View style={styles.container}>
      <Header title="MINHAS ROTINAS" />

      <View style={styles.containerList}>

        <FlatList 
          data={doingActivities}
          keyExtractor={doingActivity => String(doingActivity.id_doing)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: doingActivity }) => (
            <>
              <View style={styles.todoList}>
                <View style={styles.todoTopBar}>
                  <Text style={styles.todoTitle}>
                    {doingActivity.title} 
                  </Text>
                  <Icon name="trash-2" color="#000" size={24} onPress={() => handleDelete(doingActivity)}/>
                </View>
                <Text style={styles.todoDescription}>
                  Marque este Todo quando finalizá-lo!
                </Text>

                <View style={styles.todoFooter}>
                  <Text style={styles.todoActivity}>{doingActivity.description}</Text>
                  <View style={styles.todoDetails}>
                    <Text style={styles.todoDetailsText}>{doingActivity.day}</Text>
                    <Text style={styles.todoDetailsText}>{doingActivity.hour}</Text>
                  </View>
                </View>

                <RectButton style={styles.todoButton} onPress={() => handleCompletedActivityList(doingActivity)}>
                  <View style={styles.todoButtonIcon}>
                    <Icon name="chevrons-right" color="#FFF" size={24} />
                  </View>
                  <Text style={styles.todoButtonText}>Finalizar Rotina</Text>
                </RectButton>
              </View>
            </>
          )}
        />

      </View>
    </View>
  )
}