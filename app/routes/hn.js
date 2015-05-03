import Ember from 'ember';
import ResetScrollMixin from "selby.io/mixins/reset-scroll";

export default Ember.Route.extend(ResetScrollMixin, {
  actions: {
    hnSearch: function(q) {
      if (q) {
        this.transitionTo('hn.search', q);
      } else {
        this.transitionTo('hn.index', q);
      }
    }
  }
});