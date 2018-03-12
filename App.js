import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Button, Content, Form, Item, Input, Label, Body, Title} from 'native-base';
import EventList from './components/EventList';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            register: true,
            fontLoaded: false,
            loggedIn: true
        }
    }


    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({fontLoaded: true});
    }


    render() {
        if (this.state.loggedIn) {
          return (
            this.state.fontLoaded ? (
              <EventList />
            ): null
          )
        }
        else if (this.state.register) {
            return (
                this.state.fontLoaded ? (
                    <Container>
                        <Header>
                          <Body>
                                <Title style={[styles.title]}>Register Now</Title>
                          </Body>
                        </Header>
                        <Content>
                            <Form>
                                <Item floatingLabel>
                                    <Label>Email </Label>
                                    <Input onChangeText={(email) => this.setState({email})}/>
                                </Item>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
                                </Item>
                            </Form>
                            <View style={[styles.layout]}>
                                <Button full info onPress={() => this.setState({register: true})}>
                                    <Text>Register </Text>
                                </Button>
                            </View>

                            <View style={[styles.layout]}>
                                <Button full success onPress={() => this.setState({register: !this.state.register})}>
                                    <Text>Login </Text>
                                </Button>
                            </View>
                        </Content>
                    </Container>
                ) : null
            );
        }
        else {
            return (
                this.state.fontLoaded ? (
                    <Container>
                        <Header>
                            <Body>
                            <Title style={[styles.title]}>Sign in</Title>
                            </Body>
                        </Header>
                        <Content>
                            <Form>
                                <Item floatingLabel>
                                    <Label>Email </Label>
                                    <Input onChangeText={(email) => this.setState({email})}/>
                                </Item>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input secureTextEntry={true}
                                           onChangeText={(password) => this.setState({password})}/>
                                </Item>
                            </Form>
                            <View style={[styles.layout]}>
                                <Button full success onPress={() => this.setState({register: false})}>
                                    <Text>Login</Text>
                                </Button>
                            </View>
                            <View style={[styles.layout]}>
                                <Button full info onPress={() => this.setState({register: true})}>
                                    <Text>Register</Text>
                                </Button>
                            </View>
                        </Content>
                    </Container>
                ) : null
            )
        }
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        padding: 20
    },
    title: {
      marginTop: 10
    }
});