import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function QuestionsList (){

    return(
        <View>
            <Text style={styles.text}>
                Question
            </Text>
            <Button style={stylesBtn.btn} title="Vraix"/>
            <Button style={stylesBtn.btn} title="Faux"/>

        </View>
    )
}

const stylesBtn = StyleSheet.create({
    btn: {
        flex: 1,
        margin: '10px'
    },
  });

const styles = StyleSheet.create({
text: {
    flex: 2,
    margin: '10px'
},
});