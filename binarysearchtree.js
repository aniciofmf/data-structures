class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	iterate(node) {
		var tree = { value: node.value };
		tree.left = node.left === null ? null : this.iterate(node.left);
		tree.right = node.right === null ? null : this.iterate(node.right);
		return tree;
	}

	isLeaf(node) {
		return node.left === null && node.right === null;
	}

	insert(value) {
		var node = new Node(value);
		var tmpNode = null;
		var keepIteration = true;

		if (this.root === null) {
			this.root = node;
			return;
		}

		tmpNode = this.root;

		while (keepIteration) {
			if (node.value < tmpNode.value) {
				if (tmpNode.left === null) {
					tmpNode.left = node;
					keepIteration = false;
				}

				tmpNode = tmpNode.left;
			} else {
				if (tmpNode.right === null) {
					tmpNode.right = node;
					keepIteration = false;
				}

				tmpNode = tmpNode.right;
			}
		}
	}

	search(value) {
		var tmpNode = this.root;
		var found = false;

		if (tmpNode !== null && value) {
			while (!found && tmpNode !== null) {
				if (value < tmpNode.value) {
					if (tmpNode.value == value) {
						found = true;
					}

					tmpNode = tmpNode.left;
				} else {
					if (tmpNode.value == value) {
						found = true;
					}

					tmpNode = tmpNode.right;
				}
			}
		}

		return found;
	}

	remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(120);
tree.insert(10);
tree.insert(25);

/*var resultIteration = tree.iterate(tree.root);
console.log(resultIteration);*/

var foundElement = tree.search(9);
console.log(foundElement);

var foundElement = tree.search(120);
console.log(foundElement);

var foundElement = tree.search("searching");
console.log(foundElement);
