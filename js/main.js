document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var instances_sidenav = M.Sidenav.init(sidenav);

    var modal = document.querySelectorAll('.modal');
    var instances_model = M.Modal.init(modal);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.querySelectorAll('.materialboxed');
    var instances_gallery = M.Materialbox.init(gallery);
  });