import * as jQuery from 'jquery'

$.ajax('/posts', {
  dataType: "json",
  method: "PUT",
  success(data, textStatus, xhr) {
    xhr
  }
})