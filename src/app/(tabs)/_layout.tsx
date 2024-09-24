import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function _layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#4CAF50',

                tabBarShowLabel: false
            }}
        >

            <Tabs.Screen name='index' options={{
                headerTitle: 'Create Post',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }} />
            <Tabs.Screen name='new' options={{
                headerTitle: 'Create Post',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square-o" color={color} />,
            }} />

            <Tabs.Screen name='profile' options={{
                headerTitle: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
            }} />

        </Tabs>
    )
}