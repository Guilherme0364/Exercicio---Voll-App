import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '../../components/navigation/TabBarIcon';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="Main"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Appointment"
				options={{
					title: 'Appointment',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Explore"
				options={{
					title: 'Explore',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
