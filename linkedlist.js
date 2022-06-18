class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		var newNode = {
			value: value,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		var newNode = {
			value: value,
			next: null,
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	print() {
		var obj = [];
		var pos = 1;
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
			let newNode = {
				value: value,
				next: null,
			};

			for (let i = 0; i != index - 1; i++) {
				current = current.next;
			}

			let tmpNode = current.next;

			current.next = newNode;
			newNode.next = tmpNode;

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

		this.length--;
	}
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(20);
myLinkedList.prepend(25);

myLinkedList.insert(3, 30);
myLinkedList.insert(1, 90);
myLinkedList.insert(5, 99);

myLinkedList.remove(5);

myLinkedList.print();
