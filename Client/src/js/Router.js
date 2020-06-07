import Backbone from 'backbone';
import $ from 'jquery';
import PostView from './PostView';
import WriteView from './WriteView';

export default Backbone.Router.extend({
  routes: {
    '': 'default',
    'post/:id': 'post'
  },

  default(){
    //Show form
    $("#blog").show();
    new WriteView();
  },

  post(postId) {
    new PostView(postId);
  }
});