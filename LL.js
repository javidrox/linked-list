class LL {
	constructor(){
		this._size = 0;
		this._first = null;
		this._last = null;
	}

	get size(){
		return this._size;
	}

	get first(){
		return this._first;
	}

	get last(){
		return this._last;
	}

	//add value to the END of the linked list
	add(value){
		this._size++;
		let newL = new link(value);
		newL.nextL = null;
		newL.prevL = this._last;
		if(this._size != 1){
			this._last.nextL = newL;
		}
		this._last = newL;
		if(this._size == 1){
			this._first = newL;
		}
	}

	//add value to the START of the linked list
	addFirst(value){
		this._size++;
		let newL = new link(value);
		newL.nextL = this._first;
		newL.prevL = null;
		if(this._size != 1){
			this._first.prevL = newL;
		}
		this._first = newL;
		if(this._size == 1){
			this._last = newL;
		}
	}

	//remove all elements from the list
	clear(){
		this._first = null;
		this._last = null;
		this._size = 0;
	}

	//returns the index of the first occurrence of the specified element, or -1 if it does not contains it
	indexOf(val){
		let x = 0;
		let tempL = this._first;
		while(tempL != null){
			if(tempL.value == val){
				return x;
			}
			x++;
			tempL = tempL.nextL;
		}
		return -1;
	}

	//returns true if the list contains a specified value
	contains(val){
		let tempL = this._first;
		//console.log(tempL);
		while(tempL != null){
			if(tempL.value == val){
				return true;
			}
			tempL = tempL.nextL;
		}
		return false;
	}

	//adds value at specified index in list
	addAt(value, index){
		if(index <= this._size){
			this._size++;
			let newL = new link(value);
			let x = 0;
			let tempL = this._first;
			while(x < index){
				tempL = tempL.nextL;
				x++;
			}
			newL.nextL = tempL;
			newL.prevL = tempL.prevL;
			tempL.prevL = newL;
			newL.prevL.nextL = newL;
		}
		else{
			console.log("Invalid index! Please provide an index less than the current size of the list");
		}
	}

	//replaces the value of the element at the specified index
	setVal(value, index){
		if(index <= this._size){
			let x = 0;
			let tempL = this._first;
			while(x < index){
				tempL = tempL.nextL;
				x++;
			}
			tempL.value = value;
		}
		else{
			console.log("Invalid index! Please provide an index less than the current size of the list");
		}
	}

	//removes element at specified index from the list
	removeIndex(index){
		if(index <= this._size){
			this._size--;
			let x = 0;
			let tempL = this._first;
			while(x < index){
				tempL = tempL.nextL;
				x++;
			}
			if(this._first != tempL){
				tempL.prevL.nextL = tempL.nextL;
			}
			else{
				this._first = tempL.nextL;
			}
			if(this._last != tempL){
				tempL.nextL.prevL = tempL.prevL;
			}
			else{
				this._last = tempL.prevL;
			}
		}
		else{
			console.log("Invalid index! Please provide an index less than the current size of the list");
		}
	}

	//removes first occurrence of specified element from the list
	removeValue(value){
		let tempL = this._first;
		while(tempL != null){
			if(tempL.value == value){
				if(this._first != tempL){
					tempL.prevL.nextL = tempL.nextL;
				}
				else{
					this._first = tempL.nextL;
				}
				if(this._last != tempL){
					tempL.nextL.prevL = tempL.prevL;
				}
				else{
					this._last = tempL.prevL;
				}
				this._size--;
				return;
			}
			tempL = tempL.nextL;
		}
		console.log("value not found!");
	}

	//prints values of the linked list in order
	print(){
		let tempL = this._first;
		while(tempL != null){
			console.log(tempL.value);
			tempL = tempL.nextL;
		}
	}

	//prints values of the linked list in REVERSE order
	printR(){
		let tempL = this._last;
		while(tempL != null){
			console.log(tempL.value);
			tempL = tempL.prevL;
		}
	}
}