import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import QuestionsList from './QuestionsList'

export default function Home () {
    
    const goToQuestionsList = () => {
        Actions.questionslist()
    }

    return(
        <View style={styles.buttons}> 
            <Button style={stylesBtn.btn}
                title="Jouer à ce jeu de merde"
                onPress={goToQuestionsList}
            />
            <Button style={stylesBtn.btn}
                title="Classement des pd"
            />
            <Button style={stylesBtn.btn}
                title="t'as pas de question j'ai dit"
            />            
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '5px'
    },
  });

  const stylesBtn = StyleSheet.create({
    btn: {
        flex: 3,
        margin: '10px'
    },
  });

