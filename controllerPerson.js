function PersonView(person) {
	var $info_elements;
	
	function addEventListeners() {		
		$("#tab_1_content").removeClass("hidden");
		
		$(".tabs ul li").each(function(i, tab) {
			$(tab).on("click", function(number) {
				return function() {
					handingShowPage(number);
				}	
			}(i+1)	
			)
		});	
		$("#bt_edit").on("click", handingEditInfo);			
		$("#bt_preview").on("click", handingShowInfo);
		
		$info_elements = $(".tab_page ul li input");	
	}
	
	function handingShowPage(i) {
		var $active_tab, 
			$new_active_tab;
		
		$active_tab = $(".tab_active");
		$active_tab.removeClass("tab_active");
		$("#" + $active_tab.attr("id") + "_content").addClass("hidden");
		
		$new_active_tab = $(".tabs ul li#tab_" + i);		
		$new_active_tab.addClass("tab_active");
		$("#" + $new_active_tab.attr("id") + "_content").removeClass("hidden");
	}
	
	
	function handingShowInfo() {
		var person,
			item,
			person_info,
			str_td = "";	
			
		person = new Person();
	
		$("#info_edit").addClass("hidden");
		$("#person_info").removeClass("hidden");		
		
		person.setJSON($info_elements);
		person_info = person.getJSON();	
		for(item in person_info) {
			str_td = str_td + "<tr><td>" + person_info[item] + "</td></tr>";
		}		
		$("#info").html("<table>" + str_td + "</table>");	
	}
	
	
	function handingEditInfo() {
		$("#person_info").addClass("hidden");
		$("#info_edit").removeClass("hidden");
	}
	
	this.renderToLi = function() {
		return "<li id=" + person.getId() + ">" + person.getName() + "</li>";
	};
		
	this.fillFields = function() {
		var person_info = person.getJSON();
	
		$("#id_name").val(person_info["name"]);
		$("#id_last_name").val(person_info["last_name"]);
		$("#id_skype").val(person_info["skype"]);
		$("#id_telephone").val(person_info["telephone"]);
		$("#id_mail").val(person_info["mail"]);
		$("#id_age").val(person_info["age"]);
		$("#id_sex").val(person_info["sex"]);
	};	
	
	addEventListeners();

	return this;
}