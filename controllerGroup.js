function GroupView($list_elem) {
	var $info_elements,
		group = new Group(),
		id_active_person = "";
	
	function addEventListeners() {
		var personeView = new PersonView();
		
		viewToUl();
		
		$info_elements = $(".tab_page ul li input");		
		$("#bt_add").on("click", handingAdd);		
		$("#bt_save").on("click", handingSavePerson);
	}
	
	function handingAdd() {	
		var person,
			person_view;
		
		$info_elements.val("");

		person = new Person(group.countPersones() + 1);

		$("#list_group").addClass("hidden");
		$("#info_edit").removeClass("hidden");

		person_view = new PersonView(person);
	}

	function handingEdit(i) {	
		var personView,
			person;
			
		id_active_person = i;
		person = group.getPersonById(i);
		personView = new PersonView(person);
		
		$("#list_group").addClass("hidden");
		$("#info_edit").removeClass("hidden");
		
		personView.fillFields();
	}	
	
	function handingSavePerson() {
		var person;
		
		if(id_active_person) {
			person = group.getPersonById(id_active_person);
			person.setJSON($info_elements);
			id_active_person = "";
			
		} else {
			person = new Person(group.countPersones() + 1);
			person.setJSON($info_elements);		
			group.addPerson(person);
		}	
						
		$("#person_info").addClass("hidden");
		$("#list_group").removeClass("hidden");	
		
		viewToUl();
	}	
	
	function viewToUl() {
		var goupList,
			list = "",
			i;
		
		goupList = group.getGroup();
		
		for(i = 0; i < group.countPersones(); i++) {
			personView = new PersonView(goupList[i]);
			list = list + personView.renderToLi();			
		}
		
		$list_elem.html("<ul>" + list + "</ul>");
		
		$("#list ul li").each(function(i, elem) {
			$(elem).on("click", function(number) {
				return function() {
					handingEdit(number);
				}	
			}(i+1)	
			)
		});
	}	
	
	addEventListeners();
	
	return this;
}