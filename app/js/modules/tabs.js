/* =====================================

1. Табы

у контейнера должно быть табов должно быть [data-tab-container]
у этой кнопки должно быть установлено значение [data-tab-target="tabName"]
для выбора цели-таба
[data-tab-item-active] - добавляется активному табу, использовать как активный селектор
[data-tab] - для всех табов, где значение [data-tab="tabName"],
tabName должно быть уникально внутри контейнера

====================================== */

;(function () {

	// 1.
	var tabsController = document.querySelectorAll('[data-tab-target]');

	bindListeners(tabsController, 'mousedown', function (event, element) {

		event.preventDefault();

		var tabTarget = element.getAttribute('data-tab-target'),
			tabContainer = element.closest('[data-tab-container]');

		var tabActive = tabContainer.querySelectorAll('[data-tab-item-active]');

		[].forEach.call(tabActive, function (element, index, array) {

			element.removeAttribute('data-tab-item-active');

		});

		var tab = tabContainer.querySelector('[data-tab="' + tabTarget + '"]');

		tab.setAttribute('data-tab-item-active', '');

	});

})();