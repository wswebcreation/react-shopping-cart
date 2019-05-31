const expect = require('chai').expect;

describe('Shopping cart', () => {
  it('should add a product to cart and remove it', () => {
    browser.url('');
    $('.shelf-item').waitForDisplayed(15000);

    /* Open float cart */
    $('.bag--float-cart-closed').click();

    /* Bag should start with 0 products */
    $('.bag__quantity').waitForDisplayed(15000);
    let bagProductsQtd = $('.bag__quantity').getText();
    expect(bagProductsQtd).to.equal('0');

    /* Add a product to cart */
    $('.shelf-item').click();
    browser.pause(100);

    /* And it should have 1 product in it now */
    bagProductsQtd = $('.bag__quantity').getText();
    expect(bagProductsQtd).to.equal('1');

    /* Remove the product from cart and now it should show 0 products in bag */
    $('.shelf-item__del').click();
    browser.pause(100);
    bagProductsQtd = $('.bag__quantity').getText();
    expect(bagProductsQtd).to.equal('0');
  });
});
