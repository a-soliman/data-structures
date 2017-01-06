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
// adding a tail node through the prototype
LinkedList.prototype.addToTail = function(value) {
	var newNode = new Node(value, null, this.tail)
	//checking if the list isn't empty
	if(this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode
	}
	this.tail = newNode
}
// Removing the head and returning it's value
LinkedList.prototype.removeHead = function() {
	//check if the list is empty
	if(!this.head) {
		return null;
	} else {
		//store the value to return it later
		var val = this.head.value;
		this.head = this.head.next;

		//check to see if the list still contains Nodes
		if(this.head) {
			this.head.prev = null;
		} else {
			this.tail = null;
		}
	} return val;
}
// Removing the tail and returning its value
LinkedList.prototype.removeTail = function() {
	//chck if the list is empty
	if(!this.tail) {
		return null;
	} else {
		var val = this.tail.value;
		this.tail = this.tail.prev;

		//check if there are Nodes in the lisr
		if(this.tail) {
			this.tail.next = null;
		} else {
			this.head  = null;
		}
	} return val;
}

// Search method the linked-list
LinkedList.prototype.search = function(searchValue) {
	//specifing a start point for the earch
	var currentNode = this.head;

	//traveling from Node to Node
	while(currentNode) {
		if(currentNode.value === searchValue) {
			return currentNode.value;
		}

		currentNode = currentNode.next;
	}
	return null;
}

LinkedList.prototype.indexOf = function(value) {
	if(!this.head) {
		return null;
	} else {
		var result = [];
		var currentNode = this.head;
		var currentIndex = 0;

		while(currentNode) {
			if(currentNode.value === value) {
				result.push(currentIndex)
			}
			currentNode = currentNode.next;
			currentIndex++;
			
		}
	}
	if(result.length !== 0) {
		return result
	} else {
		return ("Didn't Find your Value!")
	}
}