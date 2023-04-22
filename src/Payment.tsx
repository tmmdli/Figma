import React from "react";
import { Image,View,Text,TouchableOpacity,StyleSheet } from "react-native";

const Payment = () =>{
return(
    <View style={styles.container}>
        <View style={styles.title}>
            <TouchableOpacity>
                <Image
                style={styles.button}
                 source={require('./button1.png')}/>
            </TouchableOpacity>
                    <Text style={styles.text}>Credit / Debit Card </Text>
                    </View>
        <View style={styles.title1}>
             <Image 
            source={require('./card.png')}/>
            <Text style={styles.cardnumber}>4242  4242  4242 4242</Text>
            <Text style={styles.cardtext}>LESLEE HARRON</Text>
            <Text style={styles.cardhistory}>04/22</Text>
            <Image
             style={styles.majorty}
            source={require('./majorty.png')}/>
            <Image
            style={styles.cardellips}
            source={require('./cardellips.png')}/>
            </View>
            <View style={styles.titlee}>
                <TouchableOpacity>
                    <Image
                    source={require('./photo.png')}/>
                </TouchableOpacity>
            </View>


        <View style={styles.title2}>
                <Text style={styles.text1}>Name on card</Text>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.text2}>Leslee Harron</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title3}>
                <Text style={styles.text3}>Card number</Text>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text4}>4242 4242 4242 4242</Text>
                </TouchableOpacity>
            </View>
            <View style={{ left: 42, top: 15 }}>
                <Text>Exprity date</Text>
            </View>
            <View style={{ left: 220 }}>
                <Text>CVC</Text>
            </View>

            <View style={styles.title4}>
                <TouchableOpacity style={styles.button3}>
                    <Text style={styles.text5}>04/22</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4}>
                    <Text style={styles.text6}>474</Text>
                    <Image
                        style={{ left: 100, top: -10 }}
                        source={require('./cvckod.png')}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={styles.title5}>
                <TouchableOpacity style={styles.button5}>
                    <Text style={styles.text7}>Use this card</Text>
                </TouchableOpacity>
            </View>


    </View>


);

};


export default Payment;

const styles= StyleSheet.create({
container:{
flex:1,
backgroundColor:'#E5E5E5'
},
title:{
    flex:0.3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    right: 18,
    marginHorizontal:50

},
button:{
    backgroundColor: 'rgba(7, 18, 42, 0.15)',
    borderRadius:8,
    width:42,
    height:42,
    alignContent:'center',
    alignItems:'center',
    marginBottom:-5,

    

},
text:{
color:'#07122A',
fontSize:22,
fontWeight:'600',

},

title1:{
    flex:0.8,
    alignItems:'center'


},

majorty:{
    top:-290,
    left:110

},
cardellips:{
    top:-359,
    left:53

},



cardnumber:{
    color:'#FFFFFF',
    fontSize:26,
    fontWeight:'400',
    top:-130

},
cardtext:{
    color:'#FFFFFF',
    fontSize:20,
    padding:10,
    top:-100,
    marginRight:120

},
cardhistory:{
    color:'#FFFFFF',
    fontSize:20,
    paddingStart:200,
    top:-140

},

 text1:{
    fontWeight: '400',
        fontSize: 14,
        color: '#8698A8',
        right: 120,

 },
 button1:{
    backgroundColor: '#FFFFFF',
        width: 327,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',

 },
 text2:{
    color: '#0B152D',
        fontWeight: '500',
        fontSize: 17,
        left: 10,

    
 },
 titlee:{
    alignItems:'center',
    flex:0.2
 },


 title2:{
    alignItems: 'center',
        flex: 0.3
 },
 text3:{
    fontWeight: '400',
        fontSize: 14,
        color: '#8698A8',
        right: 120,

 },
 button2:{
    backgroundColor: '#FFFFFF',
        width: 327,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',

 },
 text4:{ 
     color: '#000000',
     fontWeight: '500',
     fontSize: 17,
     left: 10,
    
 },

 title3:{
    alignItems: 'center',
        flex: 0.3
 },

 text5:{
    top: 10,
        color: '#000000',
        fontWeight: '500',
        fontSize: 17,
        left: 12,

 },
 button3:{
    backgroundColor: '#FFFFFF',
        width: 154,
        height: 48,
        borderRadius: 8,
        left: 39,

 },
 button4:{
    backgroundColor: '#FFFFFF',
        width: 154,
        height: 48,
        borderRadius: 8,
        left:12
    
 },

 text6:{ 
    top: 10,
    color: '#000000',
    fontWeight: '500',
    fontSize: 17,
    left: 10,
    
 },

 title4:{
    flexDirection: 'row',
        gap: 50,
        flex: 0.3
 },
 title5:{
    alignItems: 'center',
        flex: 0.4
 },

 text7:{
    color: '#FFFFFF'
 },
 button5:{
    backgroundColor: '#07122A',
        width: 327,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
 },




})
