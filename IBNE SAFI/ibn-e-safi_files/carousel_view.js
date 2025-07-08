define(['jquery', 'ModuleClassLoader'], function($, ModuleClassLoader){
	var module = {}, extend = {};


		// SubModules
			extend.submodules = {"button":{"moduleType":"button"}};

		// Module Styles
		extend.styles = {"default":{"global":{"css":"plain.view.less","js":"plain.view.js"},"default":true,"slug":"default"}};
		extend.styles['default']['global']['js'] = (function(module, extend){
			

/* plain.view.js */

			return module;
		});
		extend.defaultStyle = extend.styles['default'];

		// View JS
		require([webs.props.staticServer + "/static/projects/finch/js/transitions.js"]);

$.extend(module, {

	events: {
		'click .w-carousel-prev':  'previousSlide',
		'click .w-carousel-next':  'nextSlide',
		'click .w-carousel-index': 'indexClick'
	},

	oneLoaded: function() {
		var self = this, data = this.data;

		this.activeSlide = 0;				// current slide's index

		this.$carousel = this.el.find('.w-carousel');
		this.$list = this.$carousel.find('ul.w-carousel-list');
		this.$indices = this.$carousel.find('.w-carousel-indices').children();
		this.slides = this.$list.children();
		this.count = this.slides.length;

		this.pushCCInfo();

		window.temp = $('#webs-header').trigger('slidesLoaded');

		if(this.data.autoplay && this.count > 1) this.play();
	},

	play: function() {
		var self = this;
		setInterval(function(){ self.nextSlide(); }, this.data.speed);
	},

	indexClick: function(e) {
		this.selectSlide(parseInt($(e.target).text(), 10) -1);
		return false;
	},

	selectSlide: function(i) {
		if(i===-1) i+=this.count;
		else if(this.count=== i) i = 0;

		if(this.transitioning) return false;

		var
		self = this,
		oldEl = this.slides.eq(this.activeSlide).addClass('outgoing'),
		newEl = this.slides.eq(i).addClass('incoming'),
		oldi = this.activeSlide,
		transition = webs.transitions[this.data.transition] || webs.transitions.none,
		invertTransition = (i < oldi) && !(i === 0 && oldi === this.count-1) || 
			(i === this.count-1 && oldi === 0);

		this.$carousel.addClass("w-carousel-transitioning");

		this.activeSlide = i;
		this.transitioning = true;

		transition(oldEl, newEl, this.data.duration, invertTransition, function(){
			self.transitioning = false;
			oldEl.removeClass("outgoing active");
			newEl.removeClass("incoming").addClass("active");
			self.$carousel.removeClass("w-carousel-transitioning");

			self.$indices.eq(oldi).removeClass("active");
			self.$indices.eq(i).addClass("active");
		});

		self.el.trigger('slideSelected', self);
	},
	previousSlide: function() { this.selectSlide(this.activeSlide-1); return false; },
	nextSlide: function() { this.selectSlide(this.activeSlide+1); return false; },

	describeSubmodules: function() {
		var self = this,
			buttons = self.el.find(".w-carousel-button");
			submoduleDescriptions = [];
		var count = 0;
		$.each(buttons, function(buttonIndex) {
			if (self.data.slides.length <= buttonIndex) return;
			submoduleDescriptions.push({
				name: "button" + buttonIndex,
					el: buttons.eq(buttonIndex).find(".webs-submodule"),
					slug: "button",
					data: self.data.slides[buttonIndex].button
			});
		});
		return submoduleDescriptions;
	},

	pushCCInfo: function(){
		var slides = this.data.slides;
		for(var i=0,len=slides.length;i<slides.length;i++) {
			var image = slides[i].image;
			if(image.imageType == 'flickr') {
				try {
					webs.page.addCCImage({
						title: image.flickr.title,
						artist: image.flickr.ownerName,
						url: 'http://www.flickr.com/photos/' + image.flickr.ownerId + '/' + image.flickr.photoId
					});
				} catch(ex) {
					webs.log.error('Unable to create ccImage', image, ex);
				}
			}
		}
	}
});


	ModuleClassLoader.register('carousel', module, extend);
});