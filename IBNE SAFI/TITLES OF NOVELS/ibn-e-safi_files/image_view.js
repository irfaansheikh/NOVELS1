define(['jquery', 'ModuleClassLoader'], function($, ModuleClassLoader){
	var module = {}, extend = {};


		// SubModules

		// Module Styles
		extend.styles = {"default":{"global":{"css":"view.less"},"slug":"default"}};
		if (!extend.styles['default']['global']) {
			extend.styles['default']['global'] = {};
		}
		extend.styles['default']['global']['js'] = null;
		extend.defaultStyle = extend.styles['default'];

		// View JS
		module.fancybox = {
    cssPath: webs.props.staticServer + "/static/global/js/fancybox/jquery.fancybox-1.3.4.css",
    jsPath:  webs.props.staticServer + "/static/global/js/fancybox/jquery.fancybox-1.3.4.pack"
};

module.oneLoaded = function(){
	if(this.data.imageType == 'flickr') {
		try {
			webs.page.addCCImage({
				title: this.data.flickr.title,
				artist: this.data.flickr.ownerName,
				url: 'http://www.flickr.com/photos/' + this.data.flickr.ownerId + '/' + this.data.flickr.photoId
			});
		} catch(ex) {
			webs.log.error('Unable to create ccImage', this.data, ex);
		}
	}
	if (this.data.linkInfo && this.data.linkInfo.lightbox && this.data.linkInfo.enabled) {
		if (!webs.fancybox) {
			try {
				$("head").append('<link rel="stylesheet" type="text/css" href="' + this.fancybox.cssPath + '"/>');
				webs.fancybox = true;
			} catch(ex) {
				webs.log.error("Unable to setup fancybox", this.data, ex);
			}
		}
		var self = this;
		require({ paths: { fancybox: this.fancybox.jsPath } },
			["fancybox"],
			function(){
				self.el.find("a").attr({ href: self.data.url, title: self.data.linkInfo.caption }).addClass('lightbox-link').fancybox();
			}
		);
	}
};



	ModuleClassLoader.register('image', module, extend);
});