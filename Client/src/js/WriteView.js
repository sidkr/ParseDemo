import Parse from 'parse';
import $ from 'jquery';

let titleEl = document.getElementById("title");
let bodyEl = document.getElementById("body");
let postBtn = document.getElementById("post-btn");


export default class {

  constructor() {
    //initialize parse
    Parse.initialize("appID");
    Parse.serverURL = 'http://localhost:1338/parse';

    postBtn.addEventListener('click', this.postBlog);
    this.getRecentPosts();
  }

  postBlog() {
    let titleText = titleEl.value;
    let bodyText = bodyEl.value;


    if (titleText !== "" && bodyText != "") {
      //Create Object
      var BlogPost = Parse.Object.extend("BlogPost");

      // Create a new instance of that class.
      var post = new BlogPost();
      post.set("title", titleText);
      post.set("body", bodyText);

      post.save()
        .then((blog) => {
          // Execute any logic that should take place after the object is saved.
          console.log(blog)
          let html =
            `
            <p> New blog post can be </p>
            <a href="/post/${blog.id}" target="_blank">Viewed here </a>
          `
          $("#result").html(html);


        }, (error) => {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Failed to create new object, with error code: ' + error.message);
        });

    }

  }

  async getRecentPosts() {
    const BlogPost = Parse.Object.extend("BlogPost");
    const query = new Parse.Query(BlogPost);

    const results = await query.find();
    let html = ' <p>Recent posts..</p>';

    for (let i = 0; i < results.length; i++) {
      let object = results[i];
      html +=
        `
        <li>
          <a href="/post/${object.id}" target="_blank">${object.id}</a>
        </li>
      `;
    }

    $("#recent-posts").show().append(html);

  }
}
