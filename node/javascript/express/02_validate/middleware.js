const customers = require('./customers.service');

function validateSchema(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      res.status(400).json({ error: message });
    }
  };
}

function validateSchemaSync(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (!error) return next();
    const { details } = error;
    const message = details.map((i) => i.message).join(',');
    res.status(400).json({ error: message });
  };
}

function loadCustomer() {
  return (req, res, next) => {
    const customer = customers.find(parseInt(req.params.id));
    if (!customer) return res.status(404).json({ error: "doesn't exist" });
    req.customer = customer;
    next();
  };
}

module.exports = { validateSchema, validateSchemaSync, loadCustomer };
