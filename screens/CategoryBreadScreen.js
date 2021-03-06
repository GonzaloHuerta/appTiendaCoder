import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryBreadScreen = ({navigation})=>{
    return(
        <View style={styles.screen}>
            <Text>Category Bread Screen</Text>
            <Button title="Ir a detalle" onPress={()=>{
                navigation.navigate('DetailBread')
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

export default CategoryBreadScreen;