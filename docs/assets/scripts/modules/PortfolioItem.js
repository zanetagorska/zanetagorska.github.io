import $ from 'jquery';

class PortfolioItem {
  constructor() {
    this.portfolioItem = $(".portfolio-item");
    this.windowWidth = $(window).width();
    this.events();
  }

  events() {
    this.addHoverEffect();
    this.changeEffectIfWindowResize();
  }

  addHoverEffect() {
    if(this.windowWidth >= 890) {
      this.portfolioItem.hover(
        function() {
          $(this).addClass("portfolio-item--active");
        }, function() {
          $(this).removeClass("portfolio-item--active");
        }
      );
    } else {
      this.portfolioItem.addClass("portfolio-item--active");
    }
  }

  changeEffectIfWindowResize() {
    $(window).resize(function() {
      
    });
  }

}

export default PortfolioItem;