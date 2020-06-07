import Backbone from 'backbone';
import $ from 'jquery';
import Parse from 'parse';
import Router from './js/Router';
import './styles/index.scss';


$(() => {
  //initialize parse
  Parse.initialize("appID");
  Parse.serverURL = 'http://localhost:1338/parse';
  new Router();

  if(Backbone.history){
    Backbone.history.start({
        pushState : true
    });  
  }

});

