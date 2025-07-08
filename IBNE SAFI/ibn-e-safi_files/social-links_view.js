define(['jquery', 'ModuleClassLoader'], function($, ModuleClassLoader){
	var module = {}, extend = {};


		// SubModules

		// Module Styles
		extend.styles = {"base":{"global":{"css":"view.less"},"slug":"base"},"style1":{"inherit":"base","default":true,"slug":"style1"},"style2":{"inherit":"base","slug":"style2"},"style3":{"inherit":"base","slug":"style3"},"style4":{"inherit":"base","slug":"style4"},"style5":{"inherit":"base","slug":"style5"},"style6":{"inherit":"base","slug":"style6"},"style7":{"inherit":"base","slug":"style7"},"style8":{"inherit":"base","slug":"style8"}};
		if (!extend.styles['base']['global']) {
			extend.styles['base']['global'] = {};
		}
		extend.styles['base']['global']['js'] = null;
		if (!extend.styles['style1']['global']) {
			extend.styles['style1']['global'] = {};
		}
		extend.styles['style1']['global']['js'] = null;
		if (!extend.styles['style2']['global']) {
			extend.styles['style2']['global'] = {};
		}
		extend.styles['style2']['global']['js'] = null;
		if (!extend.styles['style3']['global']) {
			extend.styles['style3']['global'] = {};
		}
		extend.styles['style3']['global']['js'] = null;
		if (!extend.styles['style4']['global']) {
			extend.styles['style4']['global'] = {};
		}
		extend.styles['style4']['global']['js'] = null;
		if (!extend.styles['style5']['global']) {
			extend.styles['style5']['global'] = {};
		}
		extend.styles['style5']['global']['js'] = null;
		if (!extend.styles['style6']['global']) {
			extend.styles['style6']['global'] = {};
		}
		extend.styles['style6']['global']['js'] = null;
		if (!extend.styles['style7']['global']) {
			extend.styles['style7']['global'] = {};
		}
		extend.styles['style7']['global']['js'] = null;
		if (!extend.styles['style8']['global']) {
			extend.styles['style8']['global'] = {};
		}
		extend.styles['style8']['global']['js'] = null;
		extend.defaultStyle = extend.styles['style1'];

		// View JS
		


	ModuleClassLoader.register('social-links', module, extend);
});