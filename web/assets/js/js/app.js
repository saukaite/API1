$(function() {
  $('#burger').on('click', function() {
    $('#side-menu').toggleClass('side-menu--closed');
    $('body').toggleClass('sidenav-closed');
  })

var basename = $('#basename') .text('#side-menu') .find('li.active span').text();
$('#basename').text(basename)
.attr('href', `/${basename.toLowerCase()}.html`);
})
