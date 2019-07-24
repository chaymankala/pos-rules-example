let pos_rules = require('pos-rules');

pos_rules.loadRules(
    [
        {
            customer_id: 1,
            rules: [{
                type: pos_rules.RULE_TYPES.GET_X_FOR_Y,
                x: 5,
                y: 4,
                product_id: 1
            },
            {
                type: pos_rules.RULE_TYPES.GET_X_FOR_Y,
                x: 2,
                y: 1,
                product_id: 2
            }]
        }
    ]
);

pos_rules.add({
    id: 1,
    unit_cost: 100
});
pos_rules.add({
    id: 1,
    unit_cost: 100
});
pos_rules.add({
    id: 1,
    unit_cost: 100
});
pos_rules.add({
    id: 1,
    unit_cost: 100
});
pos_rules.add({
    id: 1,
    unit_cost: 100
});

pos_rules.add({
    id: 2,
    unit_cost: 100
});
pos_rules.add({
    id: 2,
    unit_cost: 100
});

console.log(pos_rules.total(1));