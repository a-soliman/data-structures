// setTimeout(function() {
// 	window.location.reload(1);
// }, 5000)
//=====================================================================
					//START

	//== creating constructor function
// function User(firstName, lastName, age, gender) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// 	this.age = age
// 	this.gender = gender
// }
// var user1 = new User("John", "Smith", 26, "male")

// var user200 = new User("Jill","Gordon", 23, "female")

// console.log(user200)

//============================================================
	// == prototyoe objects ===

// User.prototype.emailDomain = '@facebook.com'

// console.log(user200.emailDomain)

// User.prototype.getEmailaddress = function() {
// 	return this.firstName + this.lastName + this.emailDomain
// }

// console.log(user1.getEmailaddress())

//============================================================
//============================================================
//============================================================
// === Linked List ===
		//______________________
/*
// linked list constructor function
function LinkedList() {
	this.head = null;
	this.tail = null;
}
// Node constructor function
function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}
// adding a head node through the prototype
LinkedList.prototype.addToHead = function(value) {
	var newNode = new Node(value,this.head, null)
	//checking if the list is NOT EMPTY
	if(this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}
	this.head = newNode;
}