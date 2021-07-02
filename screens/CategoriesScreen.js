import { NavigationRouteContext } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = ({navigation})=>{
    return(
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button 
                title="Ir a categorías de pan"
                onPress={()=>{
                    navigation.navigate('BreadCategory');
                }}
            />
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

export default CategoriesScreen;