var Organism = function(size) {
	this.size = size || 4;
	this.genome = [];
};

function main(params) {
	var organism = Organism();
	console.log(organism.size);
}main();