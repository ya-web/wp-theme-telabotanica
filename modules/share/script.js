'use strict';

var Tela = window.Tela || {};

Tela.share = (function(){

  function share(selector){
    var $el     = $(selector),
      $links;

    function init(){
      $links = $el.find('.share-item a');

      $links.on('click', onClickLink);
    }

    function onClickLink(e){
      e.preventDefault();
      e.stopPropagation();
      openInNewWindow($(this).attr('href'));
    }

    function openInNewWindow(url){
      var newWindow = window.open(url, 'share', 'height=400,width=600');
      if (window.focus) {newWindow.focus();}
    }

    init();

    return $el;
  }

  return function(selector){
    return $(selector).each(function(){
      share(this);
    });
  };

})();

$(document).ready(function(){
  Tela.share('.share');
});