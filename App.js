import React from 'react';
import {Linking, StyleSheet, Text, View, ScrollView, TouchableHighlight, SafeAreaView } from 'react-native';


export default function App() {
    return(
        <SafeAreaView style = {styles.container}>
  <View style = {styles.contentBorder}>
      <View style = {styles.contentBorder3}>
        <View style = {styles.headerbg}>
        <Text style = {styles.header}>A Subtle Green</Text>
        <Text style = {styles.header2}>A design by Bryant Smith</Text>
        </View>
        <View style={styles.navContainer2} >
        <View style={styles.navContainer} >
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" >
 <Text style={styles.navBtnTxt}>Home</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b">
 <Text style={styles.navBtnTxt}>About</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" >
<Text style={styles.navBtnTxt}>Services</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b">
<Text style={styles.navBtnTxt}>Contact</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" >
<Text style={styles.navBtnTxt}>FAQ</Text>
</TouchableHighlight>
</View>
</View>
</View>
<ScrollView style={styles.scroll}>
<View style= {styles.text}>
    <Text style = {styles.headerTxt}>The Article Title</Text>
<View >
  <Text style = {styles.secFloat}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy smile
  </Text>

<Text  style= {styles.sec2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.
</Text>
 
  <View  style={{position: 'absolute', right: -5}}> 
    <Text style= {styles.headList}>Links: </Text>
    <View style= {styles.list}> 
    <TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" >
<Text style={styles.navBtnTxt3}>Web Design</Text>
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt3}>Templates</Text>
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt3}>Marketing</Text>
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt3}>SEO</Text>
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt3}>Programming</Text>
</TouchableHighlight><TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt3}>Consulting</Text>
</TouchableHighlight>
    </View>
  </View>
</View>
<View style= {styles.sec3}>
<Text >Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
</View>
</View>
</ScrollView>
      </View>
  </View>
  </SafeAreaView>
);
}
const styles = StyleSheet.create({
  container : {
    height:"100%",
  },
  text : {
    padding: 20,
    backgroundColor:"#869c80",
  
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
    paddingRight:30,
  },
  contentBorder3 :{
    backgroundColor:'#f3f2f3',
    flex: 1,
    flexDirection:"column",
    height:100,
  },
  headerbg :{
    backgroundColor : "#93c2cc",
    padding:15,
    paddingTop:1,
    flex:.2,
  },
  scroll:{
    flex:1
  },
  navContainer2: {
    flex: .05,
    
    },
    header : {
      fontSize:34,
      fontWeight:"800",
      paddingTop:15,
      color:"#252f33",
   },
   header2: {
     fontSize:14,
     fontWeight: "600",
    color: "white",
    paddingBottom: 20,
    paddingLeft:25
   },
   navContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor:"#c5e4e9",
    paddingBottom: 35,
    },
    navButton: {
      flex: 1,      
      alignItems: "center",
      height: 40,
      width:100,
      
      },
      navBtnTxt: {
        color:"#252f33",
        fontSize:12,
        fontSize:10,
        paddingLeft:-50,
        paddingTop:5,

      },
      navBtnTxt3: {
        color:"#252f33",
        fontSize:12,
        fontSize:10,
        paddingLeft:-50,
    

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
      marginLeft:90,
      fontWeight:"700",
      fontSize:12,

      },
      list : {
        paddingTop : 60,
        marginLeft:70,
        

      },
      sec1 :{
        paddingBottom:80
      },
      sec2 :{
        marginTop: 70,
       paddingRight:15,
       paddingTop:5,
      },
      sec3 :{
        paddingTop:50
      },
      button : {
        backgroundColor : "green"
      }
      
  
});
         
   


