import Parse from 'parse';
import $ from 'jquery';

export default class PostView {

  constructor(args) {
    this.args = args

    PostView.getPost(args);
  }

  static getPost(postId) {


    var BlogPost = Parse.Object.extend("BlogPost");
    var post = new Parse.Query(BlogPost);

    post.get(postId)
      .then((post) => {
        // The object was retrieved successfully. Update the UI.
        console.log(post);
        $("#p-title").html(post.get('title'));
        $("#p-body").html(post.get('body'));
        
      }, (error) => {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
        alert('Unable to retrieve blog post');
        console.error(error)
      });

  }



}