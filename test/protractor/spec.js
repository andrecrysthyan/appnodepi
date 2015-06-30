describe('Protractor', function() {
        it('should add one and two', function() {
            browser.get('https://morning-castle-6615.herokuapp.com/precoLamborghini');
            element(by.model('dado')).sendKeys(50);

            element(by.id('botao')).click();

            expect(element(by.binding('resultado')).getText()).
                toEqual('59800.00');
        });
});