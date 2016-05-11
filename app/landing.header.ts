import {Component, Input} from 'angular2/core'

@Component({
    selector: 'header',
    template: `
<div id="upper-wrap"></div>
<div id="header-wrap">
	<div class="header-content-wrap">
		<div class="upper" data-ga-action="Clicked Upper Tabs">
			<ul class="pull-left">
				<li><a href="http://kitchenaid.ca/en_CA/find-a-store" data-ga-label="@clicked-text">Find a retailer</a></li>
				<li><a href="http://kitchenaid.ca/en_CA/contact-us" data-ga-label="@clicked-text">Contact us</a></li>
				<li><a href="http://kitchenaid.ca/en_CA/promotions" data-ga-label="@clicked-text">Special offers</a></li>
			</ul>
			<div class="pull-right">
				<script>
					$('.search-textbox').keypress(function(e) {
						if (e.which == 13 || e.keyCode == 13) {
							e.preventDefault();
							doSearch();
						}
					});

					$('.search-textbox-icon').click(function(e){
						doSearch();
					});

					function doSearch() {
						var val = $('.search-textbox').val();
						if (!val) return;
						window.location = 'http://www.kitchenaid.ca/webapp/wcs/stores/servlet/WHRORNAjaxCatalogSearchView?storeId=10231&catalogId=10581&langId=-300&beginIndex=0&searchTerm=' + val;
					}
				</script>
				<input type="text" name="searchTerm" placeholder="SEARCH" class="search-textbox">
				<img class="search-textbox-icon" src="./public/images/search-icon.jpg"/>
				<p class="language pull-left"><a href="http://trouvermon.kitchenaid.ca" data-ga-label="@clicked-text">Français</a></p>
			</div>
			<a data-ga-category="Kitchenaid Qualifier Home" data-ga-action="Clicked Home Button" data-ga-label="To Main Site" class="logo pull-left" href="http://www.kitchenaid.ca"><img src="http://www.kitchenaid.ca/wcs/images/img_logo.png"/></a>
		</div>
		<div class="lower" data-ga-action="Clicked Main Nav Tabs">
			<ul class="menu">
				<li>
					<a href="http://kitchenaid.ca/en_CA/major-appliances" data-ga-label="@clicked-text">Major Appliances</a>
					<ul class="submenu double" data-ga-action="Clicked Majors Dropdown Nav">
						<a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/cooktops-3/102310008/" data-ga-label="@clicked-text"><li id="cookingproducts-secondary" class="secondary-section">Cooktops</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014/" data-ga-label="@clicked-text"><li id="dishwashers-secondary" class="secondary-section">Dishwashers</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/disposers-and-compactors-3/102310299/" data-ga-label="@clicked-text"><li id="cooking-appliances-secondary" class="secondary-section">Disposers &amp; Compactors</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/hoods-and-vents-3/102310029/" data-ga-label="@clicked-text"><li id="countertop-appliances-secondary" class="secondary-section">Hoods &amp; Vents</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/microwaves-3/102310037/" data-ga-label="@clicked-text"><li id="countertop-appliances-secondary" class="secondary-section">Microwaves</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/ranges-3/102310042/" data-ga-label="@clicked-text"><li id="countertop-appliances-secondary" class="secondary-section">Ranges</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/" data-ga-label="@clicked-text"><li id="ventilation-secondary" class="secondary-section">Refrigerators</li></a>
				        
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-2/undercounter-refrigerators-3/102310356/" data-ga-label="@clicked-text"><li id="ventilation-secondary" class="secondary-section">Undercounter Refrigerators</li></a>
				        
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/wall-ovens-3/102310003/" data-ga-label="@clicked-text"><li id="outdoor-kitchen-secondary" class="secondary-section">Wall Ovens</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/major-appliances-1/warming-drawers-3/102310057/" data-ga-label="@clicked-text"><li id="outdoor-kitchen-secondary" class="secondary-section">Warming Drawers</li></a>
				        <a href="http://kitchenaid.ca/en_CA/2_2_89/global_best-products.content.html" data-ga-label="@clicked-text"><li id="recommended-products-secondary" class="secondary-section">Recommended Products</li></a>
				        <a href="http://findmy.kitchenaid.ca"><li>Find Your Perfect Appliance</li></a>
						<a href="http://www.kitchenaid.ca/en_CA/2_2_89/global_best-products.content.html"><li class="insert"><img src="http://www.kitchenaid.ca/images/consumer-reports/menu-image.jpg"/></li></a>
					</ul>
				</li>
				<li>
					<a href="http://kitchenaid.ca/en_CA/countertop-appliances" data-ga-label="@clicked-text">Countertop Appliances</a>
					<ul class="submenu" data-ga-action="Clicked Portables Dropdown Nav">
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/pro-line/" data-ga-label="@clicked-text"><li id="pro-line-series-secondary" class="secondary-section">Pro Line Series</li></a>
				        <a href="http://kitchenaid.ca/en_CA/2_1_2_30_209/brand_small-appliances_Beverage-Maker_overview.content.html" data-ga-label="@clicked-text"><li id="beverage-makers-secondary" class="secondary-section">Beverage Products</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/blenders/" data-ga-label="@clicked-text"><li id="blenders-secondary" class="secondary-section">Blenders</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/coffee-products/" data-ga-label="@clicked-text"><li id="coffeeproducts-secondary" class="secondary-section">Coffee Products</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/commercial-products/" data-ga-label="@clicked-text"><li id="commericalproducts-secondary" class="secondary-section">Commercial Products</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/countertop-ovens/" data-ga-label="@clicked-text"><li id="countertopovens-secondary" class="secondary-section">Countertop Ovens</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/kettles/" data-ga-label="@clicked-text"><li id="electric-kettles-secondary" class="secondary-section">Electric Kettles</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/food-processors/" data-ga-label="@clicked-text"><li id="foodprocessors-secondary" class="secondary-section">Food Processors</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/hand-blenders/" data-ga-label="@clicked-text"><li id="handblenders-secondary" class="secondary-section">Hand Blenders</li></a>
				        <a href="http://kitchenaid.ca/en_CA/2_2_727/global_water-filters.content.html" data-ga-label="@clicked-text"><li id="water-filters-secondary" class="secondary-section">Water Filters</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/hand-mixers/" data-ga-label="@clicked-text"><li id="handmixers-secondary" class="secondary-section">Hand Mixers</li></a>
				        <a href="http://kitchenaid.ca/en_CA/2_1_2_31_173/brand_small-appliances_juicers_overview.content.html" data-ga-label="@clicked-text"><li id="handmixers-secondary" class="secondary-section">Juicers</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/slow-cookers/" data-ga-label="@clicked-text"><li id="slowcookers-secondary" class="secondary-section">Slow Cookers and Multicookers</li></a>
				<a href="http://kitchenaid.ca/en_CA/2_1_2_32_886/brand_small-appliances_sparkling-beverage-makers_overview.content.html" data-ga-label="@clicked-text"><li id="sparkling-secondary" class="secondary-section">Sparkling Beverage Maker</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/stand-mixer-attachments/" data-ga-label="@clicked-text"><li id="standmixerattachments-secondary" class="secondary-section">Stand Mixer Attachments</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/stand-mixers/" data-ga-label="@clicked-text"><li id="standmixers-secondary" class="secondary-section">Stand Mixers</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/toasters/" data-ga-label="@clicked-text"><li id="toasters-secondary" class="secondary-section">Toasters</li></a>
				        <a href="http://kitchenaid.ca/en_CA/countertop-appliances/waffle-makers/" data-ga-label="@clicked-text"><li id="wafflemakers-secondary" class="secondary-section">Waffle Makers</li></a>
					</ul>
				</li>
				<li>
					<a href="http://kitchenaid.ca/en_CA/kitchenware" data-ga-label="@clicked-text">Kitchenware</a>
					<ul class="submenu" data-ga-action="Clicked Kitchenware Dropdown Nav">
						<a href="http://kitchenaid.ca/en_CA/kitchenware/bakeware" data-ga-label="@clicked-text"><li class="secondary-section">Bakeware</li></a>
				        <a href="http://kitchenaid.ca/en_CA/kitchenware/cookware" data-ga-label="@clicked-text"><li class="secondary-section">Cookware</li></a>

				        <a href="http://kitchenaid.ca/en_CA/2_1_2_20_091715/brand_small-appliances_cutlery_overview.content.html?skipCache=true" data-ga-label="@clicked-text"><li class="secondary-section">Cutlery</li></a>

				        <a href="http://kitchenaid.ca/en_CA/kitchenware/tea-kettles"><li class="secondary-section">Tea Kettles</li></a>
					</ul>
				</li>
				<li>
					<a href="http://kitchenaid.ca/en_CA/major-appliances" data-ga-label="@clicked-text">Accessories</a>
					<ul class="submenu" data-ga-action="Clicked Accessories Dropdown Nav">
						<a href="http://kitchenaid.ca/en_CA/2_2_3327/global_affresh.content.html" data-ga-label="@clicked-text"><li class="secondary-section">Cleaning Products</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/cooktops-3/102310085/" data-ga-label="@clicked-text"><li class="secondary-section">Cooktops</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/dishwashers-3/102310066/" data-ga-label="@clicked-text"><li class="secondary-section">Dishwashers</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/hoods-and-vents-3/102310162/" data-ga-label="@clicked-text"><li class="secondary-section">Hoods &amp; Vents</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/microwaves-3/102310095/" data-ga-label="@clicked-text"><li class="secondary-section">Microwaves</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/ranges-3/102310308/" data-ga-label="@clicked-text"><li class="secondary-section">Ranges</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/refrigerators-3/102310075/" data-ga-label="@clicked-text"><li class="secondary-section">Refrigerators</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/wall-ovens-3/102310301/" data-ga-label="@clicked-text"><li class="secondary-section">Wall Ovens</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/blenders-3/102310103/" data-ga-label="@clicked-text"><li class="secondary-section">Blenders</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/coffee-products-3/102310104/" data-ga-label="@clicked-text"><li class="secondary-section">Coffee Products</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/countertop-ovens-3/102310105/" data-ga-label="@clicked-text"><li class="secondary-section">Countertop Ovens</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/food-processors-3/102310106/" data-ga-label="@clicked-text"><li class="secondary-section">Food Processors</li></a>
				<a href="http://kitchenaid.ca/en_CA/shop/accessories-1/stand-mixers-3/102310102/" data-ga-label="@clicked-text"><li class="secondary-section">Stand Mixers</li></a>
				        <a href="http://kitchenaid.ca/en_CA/shop/accessories-1/hand-blenders-3/102310107/" data-ga-label="@clicked-text"><li class="secondary-section">Hand Blender</li></a>  
				<a href="http://kitchenaid.ca/en_CA/2_2_727/global_water-filters.content.html" data-ga-label="@clicked-text"><li class="secondary-section">Water Filters</li></a>   
					</ul>
				</li>
				<li>
					<a href="http://kitchenaid.ca/en_CA/customer-service" data-ga-label="@clicked-text">Service & Support</a>
					<ul class="submenu" data-ga-action="Clicked Service & Support Dropdown Nav">
						<a href="http://kitchenaid.ca/en_CA/customer-service/manuals/" data-ga-label="@clicked-text"><li class="secondary-section">Manuals &amp; Literature</li></a>
				        <a href="http://kitchenaid.ca/en_CA/customer-service/my-appliances/" data-ga-label="@clicked-text"><li class="secondary-section">My Appliances</li></a>
				        <a href="http://kitchenaid.ca/en_CA/customer-service/register-products/" data-ga-label="@clicked-text"><li class="secondary-section">Register Products</li></a>
				        <a href="http://kitchenaid.ca/en_CA/2_2_91/global_certified-care.content.html" data-ga-label="@clicked-text"><li class="secondary-section">Extended Service Plans</li></a>
				        <a href="http://kitchenaid.ca/en_CA/customer-service/replacement-parts/" target="_blank" data-ga-label="@clicked-text"><li class="secondary-section">Replacement Parts</li></a>
				        <a href="http://kitchenaid.ca/en_CA/customer-service/schedule-service/" data-ga-label="@clicked-text"><li class="secondary-section">Schedule Service</li></a>
				        <a href="http://kitchenaid.ca/en_CA/contact-us/" data-ga-label="@clicked-text"><li class="secondary-section">Contact Us</li></a>
					</ul>
				</li>
				<li>
					<a href="http://kitchenaid.ca/en_CA/culinary-inspiration" data-ga-label="@clicked-text">Culinary Inspiration</a>
					<ul class="submenu" data-ga-action="Clicked Culinary Inspiration Dropdown Nav">
						<a href="http://blog.kitchenaid.ca" data-ga-label="@clicked-text"><li class="secondary-section">Blog: United We Create</li></a>
				        <a href="http://kitchenaid.ca/en_CA/culinary-inspiration/kitchen-gallery/" data-ga-label="@clicked-text"><li class="secondary-section">Kitchen Gallery</li></a>
				        <a href="http://kitchenaid.ca/en_CA/culinary-inspiration/partners-and-events/" data-ga-label="@clicked-text"><li class="secondary-section">Partners &amp; Events</li></a>
				        <a href="http://kitchenaid.ca/en_CA/2_2_762/global_stand-mixer-buying-guide.content.html" data-ga-label="@clicked-text"><li class="secondary-section">Find Your Stand Mixer</li></a>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>
    `
})
export class Header {
}