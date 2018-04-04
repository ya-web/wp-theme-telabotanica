var Tela = window.Tela || {};
Tela.modules = Tela.modules || {};

Tela.modules.membersDirectory = (function() {
	
	function module(selector) {
		var $el = $(selector),
			$pays,
			$departement;
		
		function init() {
			$pays = $el.find('#field_3');
			$departement = $el.find('.field_departement');

			departementToggle($pays,$departement);
		}
	
		function departementToggle($pays,$departement) {
			// showing 'departement' field only when 'France' is selected	
			if($pays.val() !== 'France') {
				$departement.hide();
				$pays.change(function() {
					($(this).val() === 'France') ? $departement.show() : $departement.hide();
				});
			}else{ 
				$departement.show();
			}
		}

	init();
	
	}

	return function(selector) {
		return $(selector).each(function() {
	    	module(this);
		});
	};
})();


$(document).ready(function() {
  Tela.modules.membersDirectory('#bps_directory24437');
});
