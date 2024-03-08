import Vue from "vue";
import moment from "moment";




// Filterl
Vue.filter('myDate',function(cr){
  return moment(cr).format('MMMM Do YYYY');
});

Vue.filter('myDateDay',function(){
  return moment().format('YYYY');
});

Vue.filter('truncate', function (value, limit) {
  if (value.length > limit) {
      value = value.substring(0, (limit - 3)) + '...';
  }
  return value
})
