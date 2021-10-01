$( function() {

  let icons = {
    header: 'faq__img-off',
    activeHeader: 'faq__img-on'
  }

$( "#accordion" ).accordion({
  active: false,
  collapsible: true,
  icons: icons,
  heightStyle: "content",
});
});


