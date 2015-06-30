describe('Protractor', function() {
    it('should have a title', function() {
        browser.get('https://morning-castle-6615.herokuapp.com/precoLamborghini/');

        expect(browser.getTitle()).toEqual('Parcelas de Carros');
    });

    it('should add one and two', function() {
        browser.get('https://morning-castle-6615.herokuapp.com/precoLamborghini');
        element(by.model('dado')).sendKeys(50);

        element(by.id('botao')).click();

        expect(element(by.binding('resultado')).getText()).
            toEqual('59800.00');
    });
});