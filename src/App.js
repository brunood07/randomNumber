import React, { useState } from 'react';
import { 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    StyleSheet 
} from 'react-native';

const App = () => {
    const [number, setNumber] = useState(0);

    function handleNumber() {
        const newNumber = Math.floor(Math.random() * 100);

        setNumber(newNumber)
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.number}>{number}</Text>
            <TouchableOpacity style={style.button} onPress={handleNumber}>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
})

export default App;