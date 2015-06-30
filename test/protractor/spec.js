describe('Protractor', function() {

    it('Deve retornar 59800.00 quando se passar o valor de 50 parcelas', function() {
        browser.driver.get('https://morning-castle-6615.herokuapp.com/precoLamborghini');
        browser.driver.findElement(by.id('quantidade')).sendKeys(50);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 59.800,00.');
    });

    it('Deve retornar 55000.00 quando se passar o valor de 30 parcelas', function() {
        browser.driver.get('https://morning-castle-6615.herokuapp.com/precoFerrari');
        browser.driver.findElement(by.id('quantidade')).sendKeys(30);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 55.000,00.');
    });

    it('Deve retornar 627.38 quando se passar o valor de 80 parcelas', function() {
        browser.driver.get('https://morning-castle-6615.herokuapp.com/precoFox');
        browser.driver.findElement(by.id('quantidade')).sendKeys(80);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 627,38.');
    });
});