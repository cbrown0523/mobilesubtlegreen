import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return(
        <SafeAreaView style = {styles.container}>
  <View style = {styles.contentBorder}>
      <View style = {styles.contentBorder3}>
        <View style = {styles.headerbg}>
        <Text style = {styles.header}>A Subtle Green</Text>
        <Text style = {styles.header2}>A design by Bryant Smith</Text>
        </View>
        <View>
        <View style={styles.navContainer} >
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
 <Text style={styles.navBtnTxt}>Home</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
 <Text style={styles.navBtnTxt}>About</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Portfolio</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Services</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Contact</Text>
</TouchableHighlight>
</View>
</View>

<View style= {styles.text}>
    <View style = {styles.headerTxt}>The Article Title</View>
<View >
  <Text style = {styles.secFloat}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy smile</Text>

<Text  style= {styles.sec2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
 
  <View  style={{position: 'absolute', right: -5}}> 
    <Text style= {styles.headList}>Links: </Text>
    <View style= {styles.list}>
    <TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Web Design</Text>
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Templates</Text>
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Marketing</Text>
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>SEO</Text>
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Programming</Text>
</TouchableHighlight><TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Consulting</Text>
</TouchableHighlight>
    </View>
  </View>
</View>
<View style= {styles.sec3}>
<Text >Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
</View>
</View>
        </View>
      </View>
  </View>
  </SafeAreaView>
);
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection : "column",
    height:"100%",
  },
  text : {
    padding: 20,
    fontFamily: 'helvetica',
    backgroundColor:"#869c80",
    height:560
  
  },
  contentBorder : {
    backgroundColor: "#252f33",
    height : "100",
    padding:50,
    flex: 1,
    flexDirection:"column",
    height:100
  },
  secFloat : {
    paddingRight:50
  },
  contentBorder3 :{
    backgroundColor:'#f3f2f3',
    flex: 1,
    flexDirection:"column",
    height:100
  },
  headerbg :{
    backgroundColor : "#93c2cc",
    padding:15,
    paddingTop:1
  },
    header : {
      fontSize:34,
      fontWeight:"800",
      paddingTop:15,
      color:"#252f33"
   },
   header2: {
     fontSize:14,
     fontWeight: 600,
    color: "white",
    paddingBottom: 20,
    paddingLeft:25
   },
   navContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor:"#c5e4e9",
    paddingBottom: 35,
    paddingLeft: 15  
    },
    navButton: {
      flex: 1,      
      alignItems: "center",
      height: 40,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 25,
      width:100,
      
      },
      navBtnTxt: {
        color:"#252f33",
        fontSize:14,
        fontWeight:600
      },
      
      test :{
        paddingTop:5
      },
      headerTxt : {
          fontSize :24,
          color:"#2c4969"
      },
      headList :{
      paddingTop:20,
      marginRight:15,
      fontWeight:700
      },
      list : {
        paddingTop : 40  
      },
      sec1 :{
        paddingBottom:80
      },
      sec2 :{
        marginTop: 70,
       paddingRight:100
      },
      sec3 :{
        paddingTop:50
      },
      button : {
        backgroundColor : "green"
      }
      
  
});
         
   


