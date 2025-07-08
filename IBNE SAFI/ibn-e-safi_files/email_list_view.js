define(['jquery', 'ModuleClassLoader'], function($, ModuleClassLoader){
	var module = {}, extend = {};


		// SubModules
			extend.submodules = {"button":{"moduleType":"button"},"title":{"moduleType":"title"},"text":{"moduleType":"text"}};

		// Module Styles
		extend.styles = {"default":{"global":{"css":"view.less"},"slug":"default"}};
		if (!extend.styles['default']['global']) {
			extend.styles['default']['global'] = {};
		}
		extend.styles['default']['global']['js'] = null;
		extend.defaultStyle = extend.styles['default'];

		// View JS
		module.oneLoaded = function() {
	var
	self = this,
	form = self.el.find("form"),

	$inputs = form.find(".input-container > input"),
	$inputName = form.find(".input-container-name > input"),
	$inputEmail = form.find(".input-container-email > input"),
	$inputVerify = form.find(".input-container-verify > input"),
	submitButton = self.el.find(".w-button"),

	errBlank = "Name can't be blank",
	errInvName = "Invalid Name",
	errInvEmail = "Invalid Email Address",
	errMatch = "Email does not match",
	errors = [errBlank, errInvName, errInvEmail, errMatch],

	emailRegexp = /^\s*([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})\s*$/;

	$inputs
		.focus(function() {
			var $el = $(this).removeClass("error"), val = $el.val();
			if(val === $el.data("defaultval") || $.inArray(val, errors) !== -1) $el.val("");
		})
		.blur(function() {
			var $el = $(this);
			if($el.val() === "") $el.val($el.data("defaultval"));
		});


	submitButton.click(function(){ form.submit(); return false; });
	form.submit(function(){
		var
		error = false,
		valName = $inputName.val(),
		valEmail = $inputEmail.val(),
		valVerify = $inputVerify.val();

		form.removeClass("error");
		$inputs.removeClass("error");

		if(valName.match(/^\s*$/)) {
			error = true;
			$inputName.val(errBlank).addClass("error");
		} else if(valName.match($inputName.data("defaultval"))) {
			error = true;
			$inputName.val(errInvName).addClass("error");
		}

		if(!valEmail.match(emailRegexp)) {
			error = true;
			$inputEmail.val(errInvEmail).addClass("error");
		}
		if(!valVerify.match(emailRegexp)) {
			error = true;
			$inputVerify.val(errInvEmail).addClass("error");
		}
		if(valVerify !== valEmail) {
			error = true;
			$inputVerify.val(errMatch).addClass("error");
		}

		if (!error) {
			self.validEmail = valEmail;
			$.ajax({
				"url": form.attr("action"),
				"type": form.attr("method"),
				"data": form.serialize(),
				"dataType": "jsonp",
				"contentType": 'application/json;charset=UTF-8',
				"success": function(data) {
					self.el.height(self.el.height());
					if(data.error) {
						self.showError(data.errorMsg);
					} else {
						self.showSuccess();
					}
				}
			});
		}
		return false;
	});
};

// back-end error callback
module.showError = function(errArray) {
	// We don't really need this since we already have front-end validation
};

module.showSuccess = function() {
	var formContainer = this.el.find(".w-email_list").after('<div class="w-email_list-success webs-text">'+
		'<h6><strong>Thank You</strong></h6>'+
		'<p>To complete the registration process, please click the link in the email we just sent to '+
		'<span class="w-email_list-confirm">' + this.validEmail + '</span>.</p>'+
	'</div>');
	formContainer.remove();
};



	ModuleClassLoader.register('email_list', module, extend);
});