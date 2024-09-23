const tabs = [
	{
	  name: 'Main',
	  title: 'Main',
	  icon: 'home' as const, // Aqui você força a string a ser interpretada como válida
	  focusedIcon: 'home-outline' as const,
	},
	{
	  name: 'Appointment',
	  title: 'Appointment',
	  icon: 'calendar' as const,
	  focusedIcon: 'calendar-outline' as const,
	},
	{
	  name: 'Explore',
	  title: 'Explore',
	  icon: 'search' as const,
	  focusedIcon: 'search-outline' as const,
	},
	{
	  name: 'Profile',
	  title: 'Profile',
	  icon: 'person-sharp' as const,
	  focusedIcon: 'person-sharp' as const,
	},
]

export { tabs }

