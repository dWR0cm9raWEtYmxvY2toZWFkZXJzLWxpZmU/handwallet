
import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity, ScrollView
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import styles from './styles'

const currencys = [
    "ALL", "BTC", "ETH", "EOS", "MKR", "REP", "LRC"
]

class Drawer extends Component{
    render(){
	const { dispatch, navigation } = this.props
	const select = async reddit =>{
	    await dispatch({type:'CURRENCY', reddit})
	    await navigation.navigate('DrawerToggle')
	}
	const Currencys = currencys.map((item)=>{
	    console.log(item)
	    return (
		<TouchableOpacity onPress={()=>select('BTC')} style={styles.itembox}>
		    <Text style={{fontSize:15}} allowFontScaling={false}>BTC</Text>
		</TouchableOpacity>
	    )
	})
	return(
	    <ScrollView>
		<SafeAreaView style={styles.ctn} forceInset={{ top: 'always', horizontal: 'never' }}>
		    <TouchableOpacity onPress={()=>select('BTC')} style={styles.itembox}>
			<Text style={{fontSize:15}} allowFontScaling={false}>BTC</Text>
		    </TouchableOpacity>
		</SafeAreaView>
	    </ScrollView>
	)
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps)(Drawer)
