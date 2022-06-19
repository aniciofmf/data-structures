class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DLinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	// null <- 10 -> null

	append(value) {
		var newNode = new Node(value);

		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		var newNode = new Node(value);
		newNode.next = this.head;

		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
	}

	print() {
		var obj = [];
		var pos = 0;
		var current = this.head;

		while (current !== null) {
			obj.push({ pos: pos, value: current.value });
			current = current.next;
			pos++;
		}

		console.log(obj, " total nodes:", pos);
	}

	insert(index, value) {
		if (index == 0) {
			this.prepend(value);
		}

		if (index >= this.lenght) {
			this.append(value);
		}

		if (index < this.length) {
			let current = this.head;
			let newNode = new Node(value);

			for (let i = 0; i != index - 1; i++) {
				current = current.next;
			}

			let tmpNode = current.next;

			newNode.next = tmpNode;
			tmpNode.prev = newNode;
			current.next = newNode;
			newNode.prev = current;

			this.length++;
		}
	}

	remove(index) {
		var current = this.head;

		for (let i = 0; i != index - 1; i++) {
			current = current.next;
		}

		let tmpNode = current.next;

		current.next = tmpNode.next;
		current.prev = tmpNode.prev;

		this.length--;
	}
}

var dlinklist = new DLinkedList(10);
dlinklist.append(1);
dlinklist.append(2);
dlinklist.prepend(3);

dlinklist.insert(2, 5);
dlinklist.insert(4, 15);

dlinklist.remove(4);

dlinklist.print();
