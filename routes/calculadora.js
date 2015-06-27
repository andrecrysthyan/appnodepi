module.exports = function(app) {
	var controller = app.controllers.calculadora;

	app.get('/', controller.get.index);
	app.get('/precoFox', controller.get.precoFox);
    app.get('/precoGolf', controller.get.precoGolf);
    app.get('/precoGol', controller.get.precoGol);
    app.get('/precoSaveiro', controller.get.precoSaveiro);
    app.get('/precoVoyage', controller.get.precoVoyage);

    app.get('/precoC3', controller.get.precoC3);
    app.get('/precoC4', controller.get.precoC4);
    app.get('/precoAircross', controller.get.precoAirCross);
    app.get('/precoDS5', controller.get.precoDS5);
    app.get('/precoDS3', controller.get.precoDS3);

	app.post('/calcular', controller.post.calcular);
};