const Text = require('./Text');

describe('Text Model', () => {
  it('requires text', () => {
    const text = new Text();
    const { errors } = text.validateSync();

    expect(errors.text.message).toEqual('Path `text` is required.');
  });
});
