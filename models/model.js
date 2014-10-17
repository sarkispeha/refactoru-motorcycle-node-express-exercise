
// MODEL

var locations = {

	chile:	{	
		name: 'Chile',
		description: 'Second stop on the Journey of Che',
		next: 'peru'
	},
	peru:	{
		name: 'Peru',
		description: 'Third stop on the Journey of Che',
		next: 'colombia'
	},
	colombia:	{
		name: 'Colombia',
		description: 'Fourth stop on the Journey of Che',
		next: 'venezuela'
	},
	venezuela:	{
		name: 'Venezuela',
		description: 'Fifth stop on the Journey of Che',
		next: 'usa'
	},
	usa:	{
		name: 'USA',
		description: 'Second stop on the Journey of Che',
		next: 'chile'
	}
};

// Export the whole object
module.exports = locations;