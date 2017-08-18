$(function(){
  new Clipboard('.c-Signature__copyButton');

  var app = new Vue({
    el: '#js-signature',
    data: {
      name: 'Giuliano Tori',
      telephone: '7175915 - 124',
      email: 'jtori@safetypay.com',
      skype: 'jtori_safetypay'
    }
  })

});
