require(['jquery'], function($){
	var module = {}, extend = {};


	// Module Styles
	extend.styles = {"base":{"global":{"css":"view.less"},"slug":"base"}};
	if (!extend.styles['base']['global']) {
		extend.styles['base']['global'] = {};
	}
	extend.styles['base']['global']['js'] = null;
	extend.defaultStyle = extend.styles['base'];

	// View JS
	

	webs.modules.ModuleClassLoader.register('follow', module, extend);
});