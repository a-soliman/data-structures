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

// Search the linked-list
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



var myll = new LinkedList()

myll.addToHead(123)
myll.addToHead('world')
myll.addToHead('hello')

myll.addToTail(19)
myll.addToTail('world')
myll.addToTail(20)

console.log(myll.indexOf('world'))

*/
//_______________________________________________________________________
//_______________________________________________________________________
//_______________________________________________________________________

	//=== Reviewing Factorial(i) && Recursion => RecallSelf Function

// 4! = 4 * 3 * 2 * 1 = 24

// 3! = 3 * 2* 1 = 6

// function factorial(num) {
// 	if(num === 1) {
// 		return num;
// 	}
// 		else {
// 			return num * factorial(num -1)
// 		}
// }
// //_______________________________________________________________________
//_______________________________________________________________________
//_______________________________________________________________________

/*	
	//Binary Search Tree
	//====================

// crating the constructer function
function BST(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

// an insert method
BST.prototype.insert = function(value) {
	//check if the valuse is less than the parent Node => move to LEFT
	if(value <= this.value) {

		//check if the LEFT POS is free 
		if(!this.left) {
			this.left = new BST(value); 
		}
		else {
			this.left.insert(value);
		}
	}
	//Oherwise move to the right side
	else if(value > this.value) {
		// check if the RIGHT side is free
		if(!this.right) {
			this.right = new BST(value)
		}
		else {
			this.right.insert(value);
		}

	}
};

// CONTAINES method => search through
BST.prototype.contains = function(value) {
	// chck if the value matches the value of the current node
	if(value === this.value) {
		return true;
	}
	//If it's not
	else {
		// check if the value is less or greather than the nodes value
		if(value < this.value) {
			if(!this.left) {
				return false;
			}
			else {
				return this.left.contains(value);
			}
		}
		//if its greater
		else if(value > this.value) {
			if(!this.right) {
				return false;
			}
			else {
				return this.right.contains(value)
			}
		}
	}
}

// depthFirstTraversal Method
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
	if(order === 'pre-order') {
		iteratorFunc(this.value)
	}
	if(this.left) {
		this.left.depthFirstTraversal(iteratorFunc, order);
	}
	if(order === 'in-order') {
		iteratorFunc(this.value);
	}

	if(this.right) {
		this.right.depthFirstTraversal(iteratorFunc, order)
	}

	if(order === 'post-order') {
		iteratorFunc(this.value)
	}
	
}

//breadthFirstTraversal method
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
	var queue  = [this];

	while(queue.length) {
		var treeNode = queue.shift();
		iteratorFunc(treeNode);
		if(treeNode.left) {
			queue.push(treeNode.left);
		}
		if(treeNode.right) {
			queue.push(treeNode.right);
		}
	}
}

// getMinVal method
BST.prototype.getMinVal = function() {
	if(this.left) {
		return this.left.getMinVal();
	}
	else {
		return this.value;
	}
}

// getMaxVal method
BST.prototype.getMaxVal = function() {
	if(this.right) {
		return this.right.getMaxVal();
	}
	else {
		return this.value;
	}
} 


var bst = new BST(50);


bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// bst.depthFirstTraversal(log, 'post-order')

function log(value) {
	console.log(value)
}

function log2(node) {
	console.log(node.value)
}

// bst.breadthFirstTraversal(log2);
console.log('MIN : ' , bst.getMinVal())
console.log('MAX : ' , bst.getMaxVal())

*/

// //_______________________________________________________________________
//_______________________________________________________________________
//_______________________________________________________________________


	//Hash Table
	//====================

 function HashTable(size) {
 	this.buckets = Array(size);
 	this.numBucketes = this.buckets.length;
 }

 function HashNode(key, value, next) {
 	this.key = key;
 	this.value = value;
 	this.next = next || null;
 }

//Hsh method ((takes a letter and hashes it into a number))
HashTable.prototype.hash = function(key) {
	var total = 0;
	for(var i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}
	var bucket = total % this.numBucketes;
	return bucket;
}

// insert method to insert a new bucket or change the value of an existing one
HashTable.prototype.insert = function(key, value) {
  //hash the key to number so the bucket gets desided
  var index = this.hash(key);
  
  //if there the bucket is free then place it there
  if(!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  }
  // check if the first position is equal to the new node's key => if yes then change the value
  else if(this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  //if non of the above
  else {
    var currentNode = this.buckets[index];
    
    while(currentNode.next) {
      //check if any of the existing nodes in the ckain have the same key => if yes then change the value
      if(currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      //if not then contenu looping
      currentNode = currentNode.next;
    }
    //if you didnt find the placethe new node at the very end of the chain inside the bucket
    currentNode.next = new HashNode(key, value)
  }
}

//get method to retive information:
HashTable.prototype.get = function(key) {
	//hash the key into a number
	var index = this.hash(key);

	//check if the bucket is empty
	if(!this.buckets[index]) {
		return null;
	}
	else {
		var currentNode = this.buckets[index];

		while(currentNode){
			if(currentNode.key === key) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return null; 
	}
}

// retriveAll method to retrive all the information stored in the Hash table
HashTable.prototype.retriveAll = function() {
	var allNodes = [];

	for(var i = 0; i < this.numBucketes; i++) {
		var currentNode = this.buckets[i]
		while(currentNode) {
			allNodes.push(currentNode)
			currentNode = currentNode.next;
		}
	}
	return allNodes;
}

 var myHT = new HashTable(30);
 myHT.insert('Dean', 'dean@gmail.com')
 myHT.insert('Megan', 'megan@gmail.com')
 myHT.insert('Dane','dane@yahoo.com')
 // console.log(myHT.buckets)
// console.log(myHT.get('Dane'))

console.log(myHT.retriveAll())