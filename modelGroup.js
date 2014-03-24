function Group() {
	var group = [],
		listName = [
					'Андрей',
					'Богдан',
					'Георг',
					'Надежда',
					'Роксолана',
					'Сергей',
					'Юлия'
					];
	
	function createGroup() {
		var person,
			i;
		
		for(i = 0; i < listName.length; i++) {
			person = new Person(i+1);
			person.setName(listName[i]);
			group.push(person);
		} 
	}

	function existInGroup(person) {
		var exist = false; 
		
		for(i = 0; i < group.length; i++) {		
			if(person.getId() === group[i].getId()) {
				exist = true;
			}
		}
		return exist;
	}

	this.getGroup = function() {
		return group;
	};
	
	this.countPersones = function() {
		return group.length;
	};
	
	this.getPersonById = function(id) {
		var person = null,
			i;
		
		for(i = 0; i < group.length; i++) {
			if(group[i].getId() == id) {
				person = group[i];
			}
		}
		
		return person;
	};
	
	this.addPerson = function(person) {
		if(!existInGroup(person)) {
			group.push(person)
		}
	};
	
	createGroup();
	
	return this;
}