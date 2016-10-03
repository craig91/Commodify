let data = {
	water: [

		{name: "Blk. Enhanced Water 16.9oz" , price: 24.99, image: "http://i.imgur.com/AlZWXmN.png", description: "blk. alkaline mineral water, is infused with naturally black fulvic trace minerals. The innovative infusion of Fulvic trace minerals with fresh alkaline water, gives blk it's distinct black color. Fulvic trace minerals are thought to contain an abundance of natural plant sourced nutrients including: natural electrolytes, amino acids, 77 trace minerals, antioxidants, and a pH of 8.0+"}, 


	{name: "Andes Mountain Water 50CL GLASS", price: 34.99, image: "http://i.imgur.com/JlkZ29gl.jpg", description: "Water scooped by the hands of an authentic local Andean villiage boy. The Andes has one of the waters with lowest mineral content and a natural PH of 7. It is considered part of the world's purest waters."},


	{name: "Glace Rare Iceberg Water", price: 15.00, image: "http://i.imgur.com/gNJNAfR.jpg", description: "Imagine a time when the earth was pure. And imagine a time, tens of thousands of years ago, when all of earth’s water was original, untouched, and absolutely perfect. Imagine water absorbed by the clean atmosphere, and then falling as snow. More snow falls and, it becomes compressed, becomes ice and, as thousands of years pass, it is locked deep and safe inside Greenland’s frozen heart. The heart beats, the ice moves, and gradually it breaks away and an iceberg is born. And now thanks to the wonders of global warming, it has never been easier to have a nice cold glass of iceberg water. Get it now before it’s all gone!"},


	{name: "Byarozavik Organic Birch Tree Water 17 fl. oz.", price: 8.99, image: "http://i.imgur.com/nyd5MgE.jpg", description: "A centuries-old tradition in Scandinavia, Eastern Europe, Russia and Northern China with a light, crisp, refreshing taste! Non-GMO, gluten free, USDA Organic! Hydrate and rejuvenate your body. Copper, calcium, zinc, iron, potassium, magnesium and many other micronutrients in trace amounts... easier to absorb! Excellent source of Xylitol!"} ,



	{name: "Icelandic Glacial Natural Spring Water, 500mL/16.9fl. oz.", price: 14.99, image: "http://i.imgur.com/1XdPlCXl.png" , description: "From spring to door. Bottled at the source. Water without compromise. Icelandic Glacial™ is the super-premium natural spring water from the 'Land Of Fire and Ice'. Home to glaciers, spouting geysers, volcanoes and raging rivers, Iceland is one of the world’s cleanest ecosystems. It’s also home to the legendary Ölfus Spring, the source of Icelandic Glacial.  Formed more than 5,000 years ago and shielded by an impenetrable barrier of lava rock, the Spring is constantly replenished by rain, snow and ice-melt from the nearby mountains.  The water is slowly and naturally filtered through layers of volcanic rock, thereby producing a natural spring water so pure that nothing is added or taken away."},



	{name: "Waiākea Hawaiaan Volcanic Water 500 mL", price: 11.99, image: , description: " Completely isolated from the rest of the world, Waiākea® offers purity in its ultimate form. It is premium by nature. Waiākea® is filtered through thousands of feet of porous lava rock before re-emerging at its community water source, located at the eastern base of the Mauna Loa volcano in a secluded area surrounded by rich and bio-diverse forest preserves. Waiākea is constantly flowing and takes less than 30 days to arrive from where it originates on Mauna Loa. This gives Waiākea a superior rating in virginality, and a soft and smoothe taste with a hint of sweet."}


],


	air: [
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""}
],


	seeds: [
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""}
],


	land: [
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""}
],


	thing: [
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""}
],



	nextThing: [
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""},
	{name: "", price: null, image: "", description: ""}
]};

data.getWater = function () {
	return this.water;
};

data.getAir = function () {
	return this.air;
};

data.getSeeds = function () {
	return this.seeds;
};

data.getLand = function () {
	return this.land;
};

data.getThing = function () {
	return this.thing;
};

data.getNextThing = function () {
	return this.nextThing;
};

export default data;
