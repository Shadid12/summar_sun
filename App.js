import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Button, Content, Form, Item, Input, Label } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      loading: false
    }
  }
  
  register() {
    
  }

  render() {
    return (


      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email </Label>
              <Input onChangeText={ (email) => this.setState({email}) }/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={ (password) => this.setState({password}) }/>
            </Item>
          </Form>
          <View style={[styles.layout]}>
            <Button full info onPress={ this.register }>
              <Text>Register </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 20
  }
});