describe('Protractor', function() {

    it('Deve retornar 59800.00 quando se passar o valor de 50 parcelas', function() {
        browser.driver.get('http://localhost:3000/precoLamborghini');
        browser.driver.findElement(by.id('quantidade')).sendKeys(50);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 59.800,00.');
    });

    it('Deve retornar 55000.00 quando se passar o valor de 30 parcelas', function() {
        browser.driver.get('http://localhost:3000/precoFerrari');
        browser.driver.findElement(by.id('quantidade')).sendKeys(30);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 55.000,00.');
    });

    it('Deve retornar 627.38 quando se passar o valor de 80 parcelas', function() {
        browser.driver.get('http://localhost:3000/precoFox');
        browser.driver.findElement(by.id('quantidade')).sendKeys(80);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 627,38.');
    });

    it('Deve retornar 999.71 quando se passar o valor de 35 parcelas', function() {
        browser.driver.get('http://localhost:3000/precoHB20');
        browser.driver.findElement(by.id('quantidade')).sendKeys(35);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 999,71.');
    });

    it('Deve retornar 909.86 quando se passar o valor de 70 parcelas', function() {
        browser.driver.get('http://localhost:3000/precoSentra');
        browser.driver.findElement(by.id('quantidade')).sendKeys(70);

        browser.driver.findElement(by.id('botao')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('Valor de cada parcela: R$ 909,86.');
    });
});