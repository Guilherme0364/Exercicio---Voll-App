import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '../../components/navigation/TabBarIcon';
import { tabs } from '@/src/utils/BottomTabs';
import { screenOptions } from '@/src/utils/ScreenOptions';


export default function TabLayout() {
	return (
		<Tabs
			screenOptions={screenOptions}
		>
			{tabs.map((tab) => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						title: `${tab.title}`,
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon name={focused ? `${tab.icon}` : `${tab.focusedIcon}` } color={color} />
						),
					}}
				/>
			))

			}
		</Tabs>
	);
}