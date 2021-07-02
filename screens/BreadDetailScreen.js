import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const BreadDetailScreen = ({navigation})=>{
    return(
        <View style={styles.screen}>
            <Text>Bread Detail Screen</Text>
            <Button title="Ir a home" onPress={()=>{
                navigation.navigate("Home")
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default BreadDetailScreen;