import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons'

import Header from '../../components/Header';

import api from '../../services/api';
import styles from './styles'

export default function AddRoutine() {
  const { navigate } = useNavigation();

  const [activities, setActivities] = useState([]);
  const [total, setTotal] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadingActivities(){
    if(loading){
      return
    }
    if(total > 0 && activities.length === total){
      return;
    }
    setLoading(true);
    const res = await api.get('todo', {
      params: {
        page
      }
    });
    setActivities([...activities, ...res.data]);
    setTotal(res.headers["x-total-count"])
    setPage(page + 1);
    setLoading(false)
  }

  useEffect(() => {
    loadingActivities();
  }, [])

/*   useEffect(() => {
    api.get('todo').then(response => {
      setActivities(response.data)
    })
  }, []) */

  async function handleAddRoutinesList(activity){
    const id_doing = activity.id;

    try{
      await api.post('/todoing', {id_doing});
      navigate('Tabs')
    }catch{
      alert("Erro na inserção!")
    }
  }

  async function handleDeleteRoutinesList(activity){
    const id = activity.id;

    try{
      await api.delete(`/todo/${id}`);
      navigate('Landing')
    }catch{
      alert("Erro na exclusão!")
    }
  }
 
  return (
    <View style={styles.container}>
      <Header title="LISTA DE ROTINAS" add={true}/>

      <View style={styles.containerList}>
      <FlatList 
        data={activities}
        keyExtractor={activity => String(activity.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadingActivities}
        onEndReachedThreshold={0.2}
        renderItem={({ item: activity }) => (
          <>
          
            <View style={styles.todoList}>
              <Text style={styles.todoTitle}>
                {activity.title}
              </Text>
              <Text style={styles.todoDescription}>
                Defina se você deseja adicionar esse Todo para sua lista.
              </Text>
              <View style={styles.todoFooter}>
                <Text style={styles.todoActivity}>{activity.description}</Text>
                <View style={styles.todoDetails}>
                  <Text style={styles.todoDetailsText}>{activity.day}</Text>
                  <Text style={styles.todoDetailsText}>{activity.hour}</Text>
                </View>
                <RectButton style={styles.todoButtonPrimary} onPress={() => handleAddRoutinesList(activity)}>
                  <View style={styles.todoButtonIcon}>
                    <Icon name="plus-circle" color="#FFF" size={24} />
                  </View>
                  <Text style={styles.todoButtonText}>Adicionar Rotina</Text>
                </RectButton>
                <RectButton style={styles.todoButtonSecundary} onPress={() => handleDeleteRoutinesList(activity)}>
                  <View style={styles.todoButtonIcon}>
                    <Icon name="trash-2" color="#FFF" size={24} />
                  </View>
                  <Text style={styles.todoButtonText}>Excluir Rotina</Text>
                </RectButton>
              </View>
            </View>
          
          </>
        )}
      />
      </View>
    </View>
  )
}