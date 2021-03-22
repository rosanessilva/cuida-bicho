import * as React from 'react';
import { Button, View } from 'react-native';

import Produtos from '../Produtos';

export default function inicio_produtos({props}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Navigator>
                <Stack.Screen name="Produtos" component={Produtos}/>
            </Stack.Navigator>
        </View>
    )
}