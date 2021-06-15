import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard,
  Dimensions
} from 'react-native';
import { 
  Button, 
  Text, 
  Input, 
  Block,
  theme } from 'galio-framework';

let userTFRef = React.createRef();


export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.viewContainer}>
          <StatusBar style="auto" />
          <Image
            style={styles.stretch}
            source={require('../VaccinatedApp/src/static/assets/vaccine.png')}
          />
          <Text h2 style={styles.appName}>Vaccinated App</Text>
          <Input
            rounded
            placeholder="usuario"
            right
            icon="user"
            family="antdesign"
            iconSize={14}
            iconColor="blue"
            color={theme.COLORS.INFO}
            style={{ borderColor: theme.COLORS.INFO }}
            placeholderTextColor={theme.COLORS.INFO}
            id="userTF"
          />
          <Input
            rounded
            placeholder="contraseña"
            right
            icon="key"
            family="antdesign"
            iconSize={14}
            iconColor="blue"
            color={theme.COLORS.INFO}
            style={{ borderColor: theme.COLORS.INFO, marginBottom: 50 }}
            placeholderTextColor={theme.COLORS.INFO}
          />
          <Button 
            round 
            color="info"
            style={styles.loginButton}
          >
            Iniciar sesión
          </Button>
          <Text h7 style={styles.dontHaveAccount}>¿No tienes una cuenta?</Text>
          <Text h7 style={styles.createAccount}>Crea una cuenta tocando este texto</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  appName: {
    textAlign: 'center',
    marginBottom: 50
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    marginBottom: 50
  },
  loginButton: {
    width: 300,
    marginBottom: 30
  },
  dontHaveAccount: {
    marginBottom: 20
  },
  createAccount: {
    textDecorationLine: 'underline',
    color: 'blue'
  }
});
