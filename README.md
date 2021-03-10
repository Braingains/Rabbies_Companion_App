We've been tasked by Rabbie's Tours inc to build an app for tour guides on the road to share info and tips with one another.
This will use the Google Maps api and allow users to add and edit markers on the map for points of interest such as toilets, photostops, parking, cafes, attractions, detours, road closures etc. The kind of info tour guides need to know.
These markers can be catagorised and filtered by type/tour/author so the user can more easily see relevant info. These markers can have information strings attached for opening hours etc.

TODO:
	- restructure app into seperate files ✓
	- get add marker form working (attraction should be dropdown)
	- get update/delete working
	- get lat/lng onclick, auto populate the form
	- use seperate icons based on type
	- filter to only fetch certain types of markers

MVP:

	- Be able to load and view a map
	- to add a markers to the map and save it on a db
	- To edit/delete a marker
	- To view all/filter markers by category
	- Populate the map with initial data
	- Colour-code tags
	- CSS

Extensions:

	- Be able to catagorise markers by route/tour
	- Create designs for custom markers
	- Extend the functionality outside of Scotland
	- Have the app automatically find the user's current location.
	- Be able to rate markers with stars etc
	- Track which users contribute most/have a league table
	- Be able to save photos to the DB, have the pics be clickable to show where to get that pic
	- Have a route selector and show the driving route on the map
	- Have an alternate route/detour function.
	- Search for nearest markers
	- Fancy CSS
	
	

Advanced Extensions:

	- Really fancy CSS
  	- Convert it for React Native
	- Have user login/authentication
	- Litter tracking for Mac
	- Track user's GPS routes
	- Specific functionality for user types - e.g Guide/Ops
	- Integrate it into Rabbies' systems

Reminder: do not deploy app with API key. Use key management system.
https://betterprogramming.pub/how-to-hide-your-api-keys-c2b952bc07e6
