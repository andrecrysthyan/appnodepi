var controller = require('../controllers/calculadora.js')();

	describe('\nTesta se as operações funcionam', function() {
		describe('precoFox', function() {
			it('Deve retornar 1003.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;
				
				var resultado = controller.utils.calculos.precoFox(quantidade)
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1003.80);
			});
			
			it('Deve retornar 1254.75 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;
				
				var resultado = controller.utils.calculos.precoFox(quantidade);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1254.75);
			});
		});
		
		describe('precoGolf', function() {
			it('Deve retornar 710.00 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;
				
				var resultado = controller.utils.calculos.precoGolf(quantidade);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(710.00);
			});

			it('Deve retornar 1000.00 quando for passado o numero de 71 parcelas', function() {
				var quantidade = 71;

				var resultado = controller.utils.calculos.precoGolf(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1000.00);
			});
		});
		
		describe('precoGol', function() {
			it('Deve retornar 774.75 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;
				
				var resultado = controller.utils.calculos.precoGol(quantidade);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(774.75);
			});

			it('Deve retornar 1549.50 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.precoGol(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1549.50);
			});
		});
		
		describe('precoVoyage', function() {
			it('Deve retornar 1003.00 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.precoVoyage(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1003.00);
			});

			it('Deve retornar 501.50 quando for passado o numero de 80 parcelas', function() {
				var quantidade = 80;

				var resultado = controller.utils.calculos.precoVoyage(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(501.50);
			});
		});

		describe('precoSaveiro', function() {
			it('Deve retornar 1905.20 quando for passado o numero de 25 parcelas', function() {
				var quantidade = 25;

				var resultado = controller.utils.calculos.precoSaveiro(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1905.20);
			});

			it('Deve retornar 1190.75 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.precoSaveiro(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1190.75);
			});
		});

		describe('precoC3', function() {
			it('Deve retornar 2224.50 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.precoC3(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2224.50);
			});

			it('Deve retornar 1190.75 quando for passado o numero de 30 parcelas', function() {
				var quantidade = 30;

				var resultado = controller.utils.calculos.precoC3(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1483.00);
			});
		});

		describe('precoC4', function() {
			it('Deve retornar 1282.25 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.precoC4(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1282.25);
			});

			it('Deve retornar 5129.00 quando for passado o numero de 10 parcelas', function() {
				var quantidade = 10;

				var resultado = controller.utils.calculos.precoC4(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(5129.00);
			});
		});

		describe('precoAirCross', function() {
			it('Deve retornar 5899.00 quando for passado o numero de 10 parcelas', function() {
				var quantidade = 10;

				var resultado = controller.utils.calculos.precoAirCross(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(5899.00);
			});

			it('Deve retornar 694.00 quando for passado o numero de 85 parcelas', function() {
				var quantidade = 85;

				var resultado = controller.utils.calculos.precoAirCross(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(694.00);
			});
		});

		describe('precoDS5', function() {
			it('Deve retornar 1399.90 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.precoDS5(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1399.90);
			});

			it('Deve retornar 2799.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.precoDS5(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2799.80);
			});
		});

		describe('precoDS3', function() {
			it('Deve retornar 2174.75 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.precoDS3(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2174.75);
			});

			it('Deve retornar 3479.60 quando for passado o numero de 25 parcelas', function() {
				var quantidade = 25;

				var resultado = controller.utils.calculos.precoDS3(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(3479.60);
			});
		});
	});


	describe('\nTesta se a função calcular() funciona', function() {
		describe('precoFox', function() {
			it('Deveria retornar o valor de 2509.50 quando passar 20 parcelas', function() {
				var parametros = {
					quantidade: 20,
					operacao: 'precoFox'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(2509.50);
			});
		});

		describe('precoGolf', function() {
			it('Deveria retornar o valor de 1420.00 quando passar 50 parcelas', function() {
				var parametros = {
					quantidade: 50,
					operacao: 'precoGolf'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1420.00);
			});
		});

		describe('precoGol', function() {
			it('Deveria retornar o valor de 3099.00 quando passar 10 parcelas', function() {
				var parametros = {
					quantidade: 10,
					operacao: 'precoGol'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(3099.00);
			});
		});

		describe('precoVoyage', function() {
			it('Deveria retornar o valor de 2006.00 quando passar 20 parcelas', function() {
				var parametros = {
					quantidade: 20,
					operacao: 'precoVoyage'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2006.00);
			});
		});

		describe('precoSaveiro', function() {
			it('Deveria retornar o valor de 952.60 quando passar 50 parcelas', function() {
				var parametros = {
					quantidade: 50,
					operacao: 'precoSaveiro'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(952.60);
			});
		});

		describe('precoC3', function() {
			it('Deveria retornar o valor de 741.50 quando passar 60 parcelas', function() {
				var parametros = {
					quantidade: 60,
					operacao: 'precoC3'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(741.50);
			});
		});

		describe('precoC4', function() {
			it('Deveria retornar o valor de 1025.80 quando passar 50 parcelas', function() {
				var parametros = {
					quantidade: 50,
					operacao: 'precoC4'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1025.80);
			});
		});

		describe('precoAirCross', function() {
			it('Deveria retornar o valor de 589.90 quando passar 100 parcelas', function() {
				var parametros = {
					quantidade: 100,
					operacao: 'precoAirCross'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(589.90);
			});
		});

		describe('precoDS5', function() {
			it('Deveria retornar o valor de 13999.00 quando passar 10 parcelas', function() {
				var parametros = {
					quantidade: 10,
					operacao: 'precoDS5'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(13999.00);
			});
		});

		describe('precoDS3', function() {
			it('Deveria retornar o valor de 1739.80 quando passar 50 parcelas', function() {
				var parametros = {
					quantidade: 50,
					operacao: 'precoDS3'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1739.80);
			});
		});
	});
	
	describe('\nTesta se as funções utilitárias funcionam', function() {
		describe('Controller.utils.formatarResposta()', function() {
			it('Deve retornar 708,56 quando passado 1708.55555558', function() {
				var resultado = 708.55555558;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('708,56');
			});
			
			it('Deve retornar 0.00 quando passado undefined', function() {
				var resultado = undefined;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('0,00');
			});
		});
	});