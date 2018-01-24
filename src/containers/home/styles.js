
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    ctn:{
	flex:1,	
	backgroundColor:'#f8f8f8',
    },
    info:{
	display:'flex',
	alignItems:'center',
	flexDirection:'column',
	borderBottomWidth: 1,
	borderBottomColor: '#000',
	borderStyle: 'solid',
	paddingBottom:20
    },
    snacks:{
	marginTop:64,
	display:'flex',
	width:'100%',
	flexDirection:'row',
	justifyContent:'space-between',
    },
    property:{
	display:'flex',
	alignItems:'center',
	justifyContent:'center',
	marginLeft:24
    },
    equal:{
	display:'flex',
	flexDirection:'row',
	justifyContent:'center',
	alignItems:'center'
    },
    func:{
	marginTop:20,
	display:'flex',
	width:'100%',
	flexDirection:'row',
	justifyContent:'space-around',	
    },
    avatar:{
	width:64,
	height:64,
	borderRadius:33
    },
    btn:{
	width:32,
	height:32
    },
    refresh:{
	width:42,
	height:42,
	marginRight:24
    },
    tool:{
	width:42,
	height:42,
    }
})

export default styles
