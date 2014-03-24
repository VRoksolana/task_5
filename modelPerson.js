function Person(id) {
	var properties = {
						"id": "",
						"information": {
									"name": "",
									"last_name": "",
									"skype": "",
									"telephon": "",
									"e-mail": "",
									"age": "",
									"sex": ""
						}
					};
				
	function setIdPerson() {
		properties["id"] = id? id: "";
	}
	
	this.setJSON = function(elements) {
		var item,
			i = 0;
			
		for(item in properties["information"]) {			
			properties["information"][item] = elements[i].value;					
			i++;
		}	
	};
	
	this.getJSON = function() {
		return properties["information"];
	};	

	this.getId = function() {
		return properties["id"];
	};
	
	this.getName = function() {
		return properties["information"]["name"];
	};
	
	this.setName = function(name) {
		properties["information"]["name"] = name;
	};

	setIdPerson();
	
	return this;
}