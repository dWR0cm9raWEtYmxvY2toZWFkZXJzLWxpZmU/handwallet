
import React, { Component } from 'react'
import {
    View, TouchableOpacity, Text, Image, StatusBar
} from 'react-native'

import styles from './styles'
import { connect } from 'react-redux'


class Home extends Component{
    render(){
	const { auth } = this.props
	return(
	    <View style={styles.ctn}>
		<StatusBar barStyle="dark-content"/>
		<View style={styles.info}>
		    <TouchableOpacity style={{marginTop:30}}>
			<Image style={styles.btn}source={require('./icons/list.png')} />
		    </TouchableOpacity>		    
		    <TouchableOpacity style={{marginTop:30}}>
			<Image style={styles.avatar}source={require('./icons/avatar.jpg')} />
		    </TouchableOpacity>
		    <Text
			style={{marginTop:12, fontSize:16}}
			allowFontScaling={false}>mercury</Text>		    
		    <View style={styles.snacks}>
			<View style={styles.property}>
			    <View allowFontScaling={false} style={styles.equal}>
				<Text allowFontScaling={false}>≈</Text>
				<Text allowFontScaling={false} style={{fontSize:32}}>0</Text>
			    </View>
			    <Text allowFontScaling={false} style={{fontSize:8}}>{auth.currency}($)</Text>
			</View>
			<TouchableOpacity >
			    <Image style={styles.refresh}source={require('./icons/refresh.png')} />
			</TouchableOpacity>						    			
		    </View>
		</View>
		<View style={styles.func}>
		    <TouchableOpacity style={{marginTop:10}}>
			<Image style={styles.tool}source={require('./icons/camera.png')} />
		    </TouchableOpacity>
		    <TouchableOpacity style={{marginTop:10}}>
			<Image style={styles.tool}source={require('./icons/credit.png')} />
		    </TouchableOpacity>
		    <TouchableOpacity style={{marginTop:10}}>
			<Image style={styles.tool}source={require('./icons/send.png')} />
		    </TouchableOpacity>		    
		</View>
	    </View>
	)
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps)(Home)
