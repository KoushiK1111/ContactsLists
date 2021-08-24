import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert,Image } from 'react-native';

class Details extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props.route.params.item)
    }
    render() {
        const { displayName, phoneNumbers } = this.props.route.params.item
        return (
            <View style={{ flex: 1, marginHorizontal: 5 }}>
                <View style={style.NameContainer}>
                    <Image source={require('../asserts/user.png')} style={{height:100,width:100}} />
                    <Text style={style.nameText}>{displayName}</Text>
                </View>
                <View style={style.numberContainer}>
                    {phoneNumbers.map(phone => (
                        <Text style={style.numberLabelText} key={phone.id}>{phone.label} : <Text style={style.numberStyle}> {phone.number}</Text></Text>
                    ))}
                </View>
                <TouchableOpacity style={style.buttonStyle} onPress={() => Alert.alert('calls are not allowed')}>
                    <Text style={style.buttonText}>Call</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    NameContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        paddingBottom: 10,
        borderBottomWidth: 2
    },
    nameText: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    numberContainer: {
        flex: 2,
    },
    numberLabelText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        paddingBottom: 10
    },
    numberStyle: {
        fontWeight: 'normal',
        fontSize: 18,
        color: 'grey'
    },
    buttonStyle: {
        borderWidth: 2,
        height: 50,
        width: '100%',
        backgroundColor: 'green',
        marginBottom: 20,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 24,
        alignSelf: 'center',
        paddingTop: 5,
        color: 'white'
    }

})

export default Details;