import React, {Component} from 'react';
import {StyleSheet, View, PermissionsAndroid,FlatList,Text, TouchableOpacity, TextInput,Image} from 'react-native';
import Contacts from 'react-native-contacts';

class ContactsList extends Component {
    constructor(props){
        super(props)
        this.state={
            contacts: [],
            text:'',
            filteredData:[]
          }       
    }

  componentDidMount(){
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.'
      }
    ).then(() => {
      Contacts.getAll()
    .then((contacts) => {
      this.setState({contacts})
      this.setState({filteredData:contacts});
    })
    .catch((e) => {
      console.log(e)
      })
    })
  }

  searchData = (text) => {
    if (text) {
      const newData = this.state.contacts.filter(item=>{
        const itemData = item.displayName
          ? item.displayName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({filteredData:newData});
      this.setState({text});
    } else {
      this.setState({filteredData:this.state.contacts});
      this.setState({text:''});
    }
  };

  render () {
    return (
      <View style={styles.container}>
          <TextInput 
            style={styles.textInput}
            value={this.state.text}
            onChangeText={(text)=>{this.searchData(text)}}
            placeholder="search Here"
          />
        <FlatList
          data={this.state.filteredData}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details',{item:item})}>
                    <View style={styles.contactsStyle}>
                        <View>
                            <Image source={require('../asserts/user.png')} style={{height:50,width:50}} />
                        </View>
                        <View>
                            <Text style={styles.contactsText}>{item.displayName}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginVertical:5,
    marginHorizontal:5,
  },
  contactsText: {
    color: 'grey',
    fontSize:30,
    paddingLeft:30
  },
  contactsStyle:{
      flexDirection:'row',
      alignItems:'center',
      margin:5,
      paddingVertical:10,
      borderBottomWidth:2,
      borderColor:'black'
    },
  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"
  }
});

export default ContactsList