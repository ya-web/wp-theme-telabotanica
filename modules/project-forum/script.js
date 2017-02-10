'use strict';

var Tela = window.Tela || {};

Tela.epForum = (function(){

  function manageForum(selector){
    var $formAbonnement = $(selector),
        $boutonAbonnement = $formAbonnement.find('input[type="submit"]');

    function init(){
      $boutonAbonnement.on('click', confirmFormSubmit);
    }

    function confirmFormSubmit(e){
      e.preventDefault();
      e.stopPropagation();
      var message = $boutonAbonnement.attr("title");
      if (confirm(message)) {
        $formAbonnement.submit();
      }
    }

    init();
  }

  return function(selector){
    $(selector).each(function() {
      manageForum(this);
    });
  };

})();

$(document).ready(function(){
  Tela.epForum('#tb-forum-inscription');
});