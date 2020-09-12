import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
        <ScrollView>
            <Text>TESTING</Text>
        </ScrollView>
        );
    }
}

export default About;