
import {View,StyleSheet,Image,Text} from 'react-native'

const colors=['red','#add8e6','#9ab973','#FFAC1C','#FF7F7F']
const Film = (props) =>
{
    return (   <View style={styles.container1}>
        <View style={[styles.film,{backgroundColor:colors[(props.movie.id)%colors.length]}]}>

              <View style={styles.container2}>

              <Image style={styles.logo1} source={{uri:props.movie.url}} />
                <View>
                  <Text style={styles.fname}>{props.movie.name}</Text>
                  <Text style={styles.fname}>{props.movie.about}</Text>
                  <Text style={{marginTop:10}}>{props.movie.type}</Text>
                  </View>
             </View>
                    <View style={styles.container3}>
                       <Image  style={styles.star} source={require('../assets/star.png')}></Image>
                       <Text style={{marginLeft:10}}>{props.movie.rating}</Text>
                   </View>
                  
        </View>

   </View>)
}


const styles=StyleSheet.create(
    {
        container1:
        {
            display:'flex',
            
            flexDirection:'row',
            justifyContent:'center',
            marginTop:30
       },
       container2:
       {
         display:'flex', 
         flexDirection:'row'
       },
        film:
        {
               display:'flex',
               flexDirection:'row',
               justifyContent:'space-between',
               width:"90%",
               height:90,
               borderRadius:15,
               padding:15
     
               
        },
       logo1:
       {
           height:65,
           width:45,
           marginRight:15
       },
       fname:
       {
           fontWeight:'bold',
           textDecorationStyle:'solid',
           fontSize:15,
           color:'white'
       },
       star:
       {
           width:20,
           height:20,
           alignSelf:'flex-end'
       },
       container3:
       {
            display:'flex',
            flexDirection:'row',
            alignSelf:'flex-end'
       }
    })
export default Film;