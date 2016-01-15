import * as _ from 'lodash'
// let's talk about a good old javascript nil error

// http://stackoverflow.com/a/105074/4499924
function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

/*
interface Post {
  uuid?: string,
  title: string,
  body: string,
}
*/

function createPost(post) {
  post.uuid = uuid()
  
  $("#posts").append(`<span>${post.title}</span>`)
    
  return new Promise((resolve, reject) => {
    $.post("/posts", post).then(resolve).fail(reject)
  })
}

// elsewhere...

function buildPost() {
  {
    title: "Static Typing",
    // body: "and you can too"
  }
}

const post = {
  title: "Static Typing",
  // body: "and you can too!"
}

createPost(post)
createPost("wrongtype")
createPost(buildPost())
createPost(null)

class FancyPost implements Post {
  get title(): string {
    return Math.random()
  }
}

createPost(new FancyPost())