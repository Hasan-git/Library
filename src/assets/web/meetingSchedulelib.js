'use strict';
CRUMINA.Bootstrap = function() {
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $(".selectpicker").selectpicker();
  var element = $('input[name="datetimepicker"]');
  if (element.length) {
    var beforeUpdateDate = moment().subtract(29, "days");
    element.daterangepicker({
      minDate : "12/05/1900",
      startDate : beforeUpdateDate,
      autoUpdateInput : false,
      singleDatePicker : true,
      showDropdowns : true,
      locale : {
        format : "DD/MM/YYYY"
      }
    });
    element.on("focus", function() {
      $(this).closest(".form-group").addClass("is-focused");
    });
    element.on("apply.daterangepicker", function(canCreateDiscussions, roadwork) {
      $(this).val(roadwork.startDate.format("DD/MM/YYYY"));
      $(this).closest(".form-group").addClass("is-focused");
    });
    element.on("hide.daterangepicker", function() {
      if ("" === $(this).val()) {
        $(this).closest(".form-group").removeClass("is-focused");
      }
    });
  }
}, $(document).ready(function() {
  CRUMINA.Bootstrap();
}), CRUMINA.FormValidation = function() {
  $(".needs-validation").each(function() {
    var selectElem = $(this)[0];
    selectElem.addEventListener("submit", function(event) {
      if (0 == selectElem.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      selectElem.classList.add("was-validated");
    }, false);
  });
}, $(document).ready(function() {
  CRUMINA.FormValidation();
}), CRUMINA.fullCalendar = function() {
  /** @type {(Element|null)} */
  var div = document.getElementById("calendar");
  (new FullCalendar.Calendar(div, {
    plugins : ["interaction", "dayGrid", "timeGrid"],
    defaultView : "dayGridMonth",
    defaultDate : "2019-05-07",
    header : {
      left : "prev",
      center : "title",
      right : "next,dayGridMonth,timeGridWeek,timeGridDay"
    },
    buttonText : {
      month : " ",
      week : " ",
      day : " "
    },
    buttonIcons : {
      prev : "far fa-chevron-left",
      next : "far fa-chevron-right"
    },
    eventClick : function(event) {
      var i = event.event.url.match(/^modal:(#[-\w]+)$/);
      if (i) {
        event.jsEvent.preventDefault();
        var elidsel = i[1];
        $(elidsel).modal("show");
      }
    },
    events : [{
      title : "غرفة 1",
      start : "2019-05-08",
      url : "modal:#public-event2"
    }, {
      title : "غرفة 305",
      start : "2019-05-08",
      url : "modal:#private-event2"
    }, {
      title : "قاعة 301",
      start : "2019-05-30",
      url : "modal:#private-event2"
    }, {
      title : "قاعة 408",
      start : "2019-05-30",
      url : "modal:#public-event2"
    }, {
      title : "غرفة 304",
      start : "2019-05-26",
      url : "modal:#public-event2"
    }, {
      title : "قاعة 304",
      start : "2019-05-26",
      url : "modal:#private-event2"
    }, {
      title : "غرفة 401",
      start : "2019-05-26",
      url : "modal:#public-event2"
    }]
  })).render();
}, $(document).ready(function() {
  if ($("#calendar").length > 0) {
    CRUMINA.fullCalendar();
  }
}), $(document).ready(function() {
  var $header = $("#header--standard");
  if ($header.length) {
    $header.headroom({
      offset : 100,
      tolerance : 5,
      classes : {
        initial : "animated",
        pinned : "slideDown",
        unpinned : "slideUp"
      }
    });
  }
}), CRUMINA.rangeSlider = function() {
  $(".range-slider-js").ionRangeSlider({
    type : "double",
    grid : true,
    min : 0,
    max : 1e3,
    from : 200,
    to : 800,
    prefix : "$"
  });
}, $(document).ready(function() {
  CRUMINA.rangeSlider();
}), CRUMINA.IsotopeSort = function() {
  $(".sorting-container").each(function() {
    var $current = $(this);
    var layout = $current.data("layout").length ? $current.data("layout") : "masonry";
    $current.isotope({
      itemSelector : ".sorting-item",
      layoutMode : layout,
      percentPosition : true
    });
    $current.imagesLoaded().progress(function() {
      $current.isotope("layout");
    });
    $current.siblings(".sorting-menu").find("li").on("click", function() {
      if ($(this).hasClass("active")) {
        return false;
      }
      $(this).parent().find(".active").removeClass("active");
      $(this).addClass("active");
      var updatedFilter = $(this).data("filter");
      return void 0 !== updatedFilter ? ($current.isotope({
        filter : updatedFilter
      }), false) : void 0;
    });
  });
}, $(document).ready(function() {
  CRUMINA.IsotopeSort();
}), $(document).ready(function() {
  var $this = $(".skills-item");
  $this.each(function() {
    $this.appear({
      force_process : true
    });
    $this.on("appear", function() {
      var $wizard = $(this);
      if (!$wizard.data("inited")) {
        $wizard.find(".skills-item-meter-active").fadeTo(300, 1).addClass("skills-animate");
        $wizard.data("inited", true);
      }
    });
  });
}), CRUMINA.mediaPopups = function() {
  $(".play-video").magnificPopup({
    disableOn : 700,
    type : "iframe",
    mainClass : "mfp-fade",
    removalDelay : 160,
    preloader : false,
    fixedContentPos : false
  });
  $(".js-zoom-image").magnificPopup({
    type : "image",
    removalDelay : 500,
    callbacks : {
      beforeOpen : function() {
        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
        /** @type {string} */
        this.st.mainClass = "mfp-zoom-in";
      }
    },
    closeOnContentClick : true,
    midClick : true
  });
  $(".js-zoom-gallery").each(function() {
    $(this).magnificPopup({
      delegate : "a",
      type : "image",
      gallery : {
        enabled : true
      },
      removalDelay : 500,
      callbacks : {
        beforeOpen : function() {
          this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
          /** @type {string} */
          this.st.mainClass = "mfp-zoom-in";
        }
      },
      closeOnContentClick : true,
      midClick : true
    });
  });
}, $(document).ready(function() {
  if (void 0 !== $.fn.magnificPopup) {
    CRUMINA.mediaPopups();
  }
}), CRUMINA.equalHeight = function() {
  $(".js-equal-child").find(".theme-module").matchHeight({
    property : "min-height"
  });
}, $(document).ready(function() {
  if (void 0 !== $.fn.matchHeight) {
    CRUMINA.equalHeight();
  }
}), CRUMINA.Materialize = function() {
  $.material.init();
  $(".checkbox > label").on("click", function() {
    $(this).closest(".checkbox").addClass("clicked");
  });
}, $(document).ready(function() {
  CRUMINA.Materialize();
}), $(document).ready(function() {
  var results = $(".js-user-search");
  if (results.length) {
    results.selectize({
      delimiter : ",",
      persist : false,
      maxItems : 2,
      valueField : "name",
      labelField : "name",
      searchField : ["name"],
      options : [{
        image : "img/avatar30-sm.jpg",
        name : "Marie Claire Stevens",
        message : "12 Friends in Common",
        icon : "olymp-happy-face-icon"
      }, {
        image : "img/avatar54-sm.jpg",
        name : "Marie Davidson",
        message : "4 Friends in Common",
        icon : "olymp-happy-face-icon"
      }, {
        image : "img/avatar49-sm.jpg",
        name : "Marina Polson",
        message : "Mutual Friend: Mathilda Brinker",
        icon : "olymp-happy-face-icon"
      }, {
        image : "img/avatar36-sm.jpg",
        name : "Ann Marie Gibson",
        message : "New York, NY",
        icon : "olymp-happy-face-icon"
      }, {
        image : "img/avatar22-sm.jpg",
        name : "Dave Marinara",
        message : "8 Friends in Common",
        icon : "olymp-happy-face-icon"
      }, {
        image : "img/avatar41-sm.jpg",
        name : "The Marina Bar",
        message : "Restaurant / Bar",
        icon : "olymp-star-icon"
      }],
      render : {
        option : function(e, $) {
          return '<div class="inline-items">' + (e.image ? '<div class="author-thumb"><img src="' + $(e.image) + '" alt="avatar"></div>' : "") + '<div class="notification-event">' + (e.name ? '<span class="h6 notification-friend"></a>' + $(e.name) + "</span>" : "") + (e.message ? '<span class="chat-message-item">' + $(e.message) + "</span>" : "") + "</div>" + (e.icon ? '<span class="notification-icon"><svg class="' + $(e.icon) + '"><use xlink:href="icons/icons.svg#' + $(e.icon) + '"></use></svg></span>' :
          "") + "</div>";
        },
        item : function(l, i) {
          return '<div><span class="label">' + i(l.name) + "</span></div>";
        }
      }
    });
  }
}), CRUMINA.StickySidebar = function() {
  var $header = $("#site-header");
  $(".crumina-sticky-sidebar").each(function() {
    new StickySidebar(this, {
      topSpacing : $header.height(),
      bottomSpacing : 0,
      containerSelector : false,
      innerWrapperSelector : ".sidebar__inner",
      resizeSensor : true,
      stickyClass : "is-affixed",
      minWidth : 0
    });
  });
}, $(document).ready(function() {
  CRUMINA.StickySidebar();
});
var swipers = {};
$(document).ready(function() {
  /** @type {number} */
  var initIterator = 0;
  /** @type {boolean} */
  var breakpoints = false;
  $(".swiper-container").each(function() {
    var $t = $(this);
    var index = "swiper-unique-id-" + initIterator;
    $t.addClass("swiper-" + index + " initialized").attr("id", index);
    $t.find(".swiper-pagination").addClass("pagination-" + index);
    var $effect = $t.data("effect") ? $t.data("effect") : "slide";
    var $crossfade = !$t.data("crossfade") || $t.data("crossfade");
    var loop = 0 != $t.data("loop") || $t.data("loop");
    var $showItems = $t.data("show-items") ? $t.data("show-items") : 1;
    var $scrollItems = $t.data("scroll-items") ? $t.data("scroll-items") : 1;
    var $scrollDirection = $t.data("direction") ? $t.data("direction") : "horizontal";
    var $mouseScroll = !!$t.data("mouse-scroll") && $t.data("mouse-scroll");
    /** @type {number} */
    var autoplay = $t.data("autoplay") ? parseInt($t.data("autoplay"), 10) : 0;
    /** @type {boolean} */
    var auto_height = !!$t.hasClass("auto-height");
    /** @type {number} */
    var $slidesSpace = $showItems > 1 ? 20 : 0;
    if ($showItems > 1) {
      breakpoints = {
        480 : {
          slidesPerView : 1,
          slidesPerGroup : 1
        },
        768 : {
          slidesPerView : 2,
          slidesPerGroup : 2
        }
      };
    }
    swipers["swiper-" + index] = new Swiper(".swiper-" + index, {
      pagination : ".pagination-" + index,
      paginationClickable : true,
      direction : $scrollDirection,
      mousewheelControl : $mouseScroll,
      mousewheelReleaseOnEdges : $mouseScroll,
      slidesPerView : $showItems,
      slidesPerGroup : $scrollItems,
      spaceBetween : $slidesSpace,
      keyboardControl : true,
      setWrapperSize : true,
      preloadImages : true,
      updateOnImagesReady : true,
      autoplay : autoplay,
      autoHeight : auto_height,
      loop : loop,
      breakpoints : breakpoints,
      effect : $effect,
      fade : {
        crossFade : $crossfade
      },
      parallax : true,
      onSlideChangeStart : function(s) {
        var i = $t.siblings(".slider-slides");
        if (i.length) {
          i.find(".slide-active").removeClass("slide-active");
          var realIndex = s.slides.eq(s.activeIndex).attr("data-swiper-slide-index");
          i.find(".slides-item").eq(realIndex).addClass("slide-active");
        }
      }
    });
    initIterator++;
  });
  $(".btn-prev").on("click", function() {
    var index = $(this).closest(".slider-slides").siblings(".swiper-container").attr("id");
    swipers["swiper-" + index].slidePrev();
  });
  $(".btn-next").on("click", function() {
    var index = $(this).closest(".slider-slides").siblings(".swiper-container").attr("id");
    swipers["swiper-" + index].slideNext();
  });
  $(".btn-prev-without").on("click", function() {
    var index = $(this).closest(".swiper-container").attr("id");
    swipers["swiper-" + index].slidePrev();
  });
  $(".btn-next-without").on("click", function() {
    var index = $(this).closest(".swiper-container").attr("id");
    swipers["swiper-" + index].slideNext();
  });
  $(".slider-slides .slides-item").on("click", function() {
    if ($(this).hasClass("slide-active")) {
      return false;
    }
    var stopIndex = $(this).parent().find(".slides-item").index(this);
    var index = $(this).closest(".slider-slides").siblings(".swiper-container").attr("id");
    return swipers["swiper-" + index].slideTo(stopIndex + 1), $(this).parent().find(".slide-active").removeClass("slide-active"), $(this).addClass("slide-active"), false;
  });
}), $(document).ready(function() {
  var e = $(".counter");
  if (e.length) {
    e.each(function() {
      jQuery(this).waypoint(function() {
        $(this.element).find("span").countTo();
        this.destroy();
      }, {
        offset : "95%"
      });
    });
  }
}), CRUMINA.maps = {
  maps : {
    mapUSA : {
      config : {
        id : "map",
        map : {
          center : new L.LatLng(38.897663, -77.036575),
          zoom : 12,
          maxZoom : 18,
          layers : new L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
            maxZoom : 16,
            attribution : ""
          })
        },
        icon : {
          iconSize : [36, 54],
          iconAnchor : [22, 94],
          className : "icon-map"
        }
      },
      markers : [{
        coords : [38.897663, -77.036575],
        icon : "map-marker.png"
      }]
    }
  },
  init : function() {
    var name;
    for (name in this.maps) {
      var o = this.maps[name];
      if (o.config && o.markers && document.getElementById(o.config.id)) {
        var tab_settings = new L.map(o.config.id, o.config.map);
        var flowers = L.markerClusterGroup({
          iconCreateFunction : function(cluster) {
            var t = cluster.getChildCount();
            var icon = o.config.cluster;
            return new L.DivIcon({
              html : "<div><span>" + t + "</span></div>",
              className : "marker-cluster marker-cluster-" + name,
              iconSize : new L.Point(icon.iconSize[0], icon.iconSize[1])
            });
          }
        });
        o.markers.forEach(function(p) {
          /** @type {string} */
          o.config.icon.iconUrl = "./img/" + p.icon;
          var awesomeIcon = L.icon(o.config.icon);
          var flower1 = L.marker(p.coords, {
            icon : awesomeIcon
          });
          flowers.addLayer(flower1);
        });
        tab_settings.addLayer(flowers);
        this.disableScroll(jQuery("#" + o.config.id), tab_settings);
      }
    }
  },
  disableScroll : function(disable, settings) {
    settings.scrollWheelZoom.disable();
    disable.bind("mousewheel DOMMouseScroll", function(event) {
      event.stopPropagation();
      if (1 == event.ctrlKey) {
        event.preventDefault();
        settings.scrollWheelZoom.enable();
        setTimeout(function() {
          settings.scrollWheelZoom.disable();
        }, 1E3);
      } else {
        settings.scrollWheelZoom.disable();
      }
    });
  }
}, $(document).ready(function() {
  CRUMINA.maps.init();
});
