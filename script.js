//your JS code here. If required.
student = {
	"name" : "Surya Pandiaraj"
}

Object.prototype.getKeys = function (){
	return Object.keys(this);
}

console.log(student.getKeys())