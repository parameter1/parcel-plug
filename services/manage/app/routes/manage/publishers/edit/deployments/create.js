import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {};
  },

  setupController(controller, model) {
    controller.set('publisher', this.modelFor('manage.publishers.edit'));
    this._super(controller, model);
  },
});

