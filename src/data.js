let data = {
	water: [{name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}],
	air: [{name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}],
	seeds: [{name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}],
	land: [{name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}],
	thing: [{name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}],
	nextThing: [{name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}, {name: "", price: null, image: "", description: ""}]
};

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