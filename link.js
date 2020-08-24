class link {
	constructor(value){
		this._value = value;
	}

	get value() {
		return this._value;
	}

	get nextL() {
		return this._nextL;
	}

	get prevL() {
		return this._prevL;
	}

	set value(newval) {
		this._value = newval;
	}

	set nextL(newnext) {
		this._nextL = newnext;
	}

	set prevL(newprev) {
		this._prevL = newprev;
	}

	hasPrev() {
		if (this._prevL != null) {
			return true;
		}
		return false;
	}

	hasNext() {
		if (this._nextL != null) {
			return true;
		}
		return false;
	}
}