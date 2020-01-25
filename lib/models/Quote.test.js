const Quote = require('./Quote');

describe('Text Model', () => {
  it('requires text', () => {
    const quote = new Quote();
    const { errors } = quote.validateSync();

    expect(errors.quote.message).toEqual('Path `quote` is required.');
  });
});
