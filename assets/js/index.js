$('#add_user').submit(function (event) {
  alert('Data Inserted Successfully');
});

$('#add_lecture').submit(function (event) {
  alert('Data Inserted Successfully');
});

$('#update_user').submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();

  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value'];
  });

  var request = {
    url: 'http://localhost:3040/api/users/' + data.id,
    method: 'PUT',
    data: data
  };

  $.ajax(request).done(function (response) {
    alert('Data Updated Success');
  });
});

// update lecture
$('#update_lecture').submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();

  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value'];
  });

  var request = {
    url: 'http://localhost:3040/api/lectures/' + data.id,
    method: 'PUT',
    data: data
  };

  $.ajax(request).done(function (response) {
    alert('Data Updated Success');
  });
});

if (window.location.pathname == '/') {
  $ondelete = $('.table tbody td a.delete');
  $ondelete.click(function () {
    var id = $(this).attr('data-id');

    var request = {
      url: 'http://localhost:3040/api/users/' + id,
      method: 'DELETE'
    };

    if (confirm('Do you really want to delete this record?')) {
      $.ajax(request).done(function (response) {
        alert('Data Deleted Success');
        location.reload();
      });
    }
  });
}

if (window.location.pathname == '/lecture-list') {
  $ondelete = $('.table tbody td a.delete');
  $ondelete.click(function () {
    var id = $(this).attr('data-id');

    var request = {
      url: 'http://localhost:3040/api/lectures/' + id,
      method: 'DELETE'
    };

    if (confirm('Do you really want to delete this record?')) {
      $.ajax(request).done(function (response) {
        alert('Data Deleted Success');
        location.reload();
      });
    }
  });
}

// insert professor account
$('#add_professor').submit(function (event) {
  alert('?????? ?????? ?????????????????????');
});

// update professor
$('#update_professor').submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();

  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value'];
  });

  var request = {
    url: 'http://localhost:3040/api/professors/' + data.id,
    method: 'PUT',
    data: data
  };

  $.ajax(request).done(function (response) {
    alert('?????? ?????? ?????? ???????????????');
  });
});

// delete professor account
if (window.location.pathname == '/professor-list') {
  $ondelete = $('.table tbody td a.delete');
  $ondelete.click(function () {
    var id = $(this).attr('data-id');

    var request = {
      url: 'http://localhost:3040/api/professors/' + id,
      method: 'DELETE'
    };

    if (confirm('Do you really want to delete this record?')) {
      $.ajax(request).done(function (response) {
        alert('Data Deleted Success');
        location.reload();
      });
    }
  });
}
