import { Text } from "react-native"
import { SafeAreaView } from "react-native"
import Splash from "./views/splash"
import Login from "./views/login"
import Register from "./views/register"

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <Register/>
        </SafeAreaView>
    )
}