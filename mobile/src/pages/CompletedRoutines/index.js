import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList, } from 'react-native-gesture-handler';

import Header from '../../components/Header';

import api from '../../services/api';
import styles from './styles'

export default function CompletedRoutines(){


  const [completedActivities, setCompletedActivities] = useState([]);

  useEffect(() => {
    api.get('/completedtodo').then(response => {
      setCompletedActivities(response.data)
    })
  }, [])




  return(
    <View style={styles.container}>
      <Header title="ROTINAS FINALIZADAS" />

      <View style={styles.containerList}>

        <FlatList 
          data={completedActivities}
          keyExtractor={completedActivity => String(completedActivity.id_completed)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: completedActivity }) => (
            <>
              <View style={styles.todoList}>
                <View style={styles.todoTopBar}>
                  <Text style={styles.todoTitle}>
                    {completedActivity.title} 
                  </Text>
                </View>
                <Text style={styles.todoDescription}>
                  Atividade Finalizada!
                </Text>

                <View style={styles.todoFooter}>
                  <Text style={styles.todoActivity}>{completedActivity.description}</Text>
                  <View style={styles.todoDetails}>
                    <Text style={styles.todoDetailsText}>{completedActivity.day}</Text>
                    <Text style={styles.todoDetailsText}>{completedActivity.hour}</Text>
                  </View>
                </View>


              </View>
            </>
          )}
        />

      </View>
    </View>
  )
}