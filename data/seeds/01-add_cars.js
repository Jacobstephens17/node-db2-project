exports.seed = function(knex) {
    return knex('cars').del()
      .then(function () {
        return knex('cars').insert([
          {vin: '1Z30DK3033223J032', make: 'Hyundai', model: '2000 Elantra ', mileage: '150000', transmissionType: 'automatic', titleStatus: 'clean'},
          {vin: '123KL134LKJ41LK32', make: 'VW', model: 'Passat', mileage: '53020', transmissionType: 'manual', titleStatus: 'clean'},
          {vin: '1KR1LKJ31LLK3JKL1', make: 'Jaguar', model: 'F-type', mileage: '32133', transmissionType: 'automatic', titleStatus: 'salvage'},
          {vin: '13LKLKJ1R3KLKKJJ3', make: 'Ferrari', model: 'Enzo', mileage: '12000', transmissionType: 'manual', titleStatus: 'clean'},
          {vin: '13LJLR1LJKJ31LK33', make: 'RR', model: 'Phantom', mileage: '10000', transmissionType: 'automatic', titleStatus: 'salvage'}
        ]);
      });
  };