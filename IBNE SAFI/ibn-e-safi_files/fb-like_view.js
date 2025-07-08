require(['jquery'], function($){
	var module = {}, extend = {};


	// Module Styles
	extend.styles = {"default":{"global":{"css":"view.less"},"slug":"default"}};
	if (!extend.styles['default']['global']) {
		extend.styles['default']['global'] = {};
	}
	extend.styles['default']['global']['js'] = null;
	extend.defaultStyle = extend.styles['default'];

	// View JS
	

	webs.modules.ModuleClassLoader.register('fb-like', module, extend);
});