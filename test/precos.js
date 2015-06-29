var controller = require('../controllers/precos.js')();

	describe('\nTesta se os métodos principais funcionam', function() {
		describe('precoFox()', function() {
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
		
		describe('precoGolf()', function() {
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
		
		describe('precoGol()', function() {
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
		
		describe('precoVoyage()', function() {
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

		describe('precoSaveiro()', function() {
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

		describe('precoC3()', function() {
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

		describe('precoC4()', function() {
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

		describe('precoAirCross()', function() {
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

		describe('precoDS5()', function() {
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

		describe('precoDS3()', function() {
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

		describe('precoHB20()', function() {
			it('Deve retornar 699.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.precoHB20(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(699.80);
			});

			it('Deve retornar 1749.50 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.precoHB20(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1749.50);
			});
		});

		describe('precoTucson()', function() {
			it('Deve retornar 1000.00 quando for passado o numero de 65 parcelas', function() {
				var quantidade = 65;

				var resultado = controller.utils.calculos.precoTucson(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1000.00);
			});

			it('Deve retornar 1625.00 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.precoTucson(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1625.00);
			});
		});

		describe('precoIX35()', function() {
			it('Deve retornar 4850.00 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.precoIX35(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(4850.00);
			});

			it('Deve retornar 970.00 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.precoIX35(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(970.00);
			});
		});

		describe('precoSantaFe()', function() {
			it('Deve retornar 1600.00 quando for passado o numero de 90 parcelas', function() {
				var quantidade = 90;

				var resultado = controller.utils.calculos.precoSantaFe(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1600.00);
			});

			it('Deve retornar 3600.00 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.precoSantaFe(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(3600.00);
			});
		});

		describe('precoAzera()', function() {
			it('Deve retornar 5600.00 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.precoAzera(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(5600.00);
			});

			it('Deve retornar 1120.00 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.precoAzera(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1120.00);
			});
		});

		describe('precoFrontier()', function() {
			it('Deve retornar 4599.50 quando for passado o numero de 20 parcelas', function() {
				var quantidade = 20;

				var resultado = controller.utils.calculos.precoFrontier(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(4599.50);
			});

			it('Deve retornar 1839.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.precoFrontier(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1839.80);
			});
		});

		describe('precoSentra()', function() {
			it('Deve retornar 1273.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.precoSentra(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1273.80);
			});

			it('Deve retornar 2547.60 quando for passado o numero de 25 parcelas', function() {
				var quantidade = 25;

				var resultado = controller.utils.calculos.precoSentra(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(2547.60);
			});
		});

		describe('precoVersa()', function() {
			it('Deve retornar 419.90 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.precoVersa(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(419.90);
			});

			it('Deve retornar 839.80 quando for passado o numero de 50 parcelas', function() {
				var quantidade = 50;

				var resultado = controller.utils.calculos.precoVersa(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(839.80);
			});
		});

		describe('precoFerrari()', function() {
			it('Deve retornar 16500.00 quando for passado o numero de 100 parcelas', function() {
				var quantidade = 100;

				var resultado = controller.utils.calculos.precoFerrari(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(16500.00);
			});

			it('Deve retornar 41250.00 quando for passado o numero de 40 parcelas', function() {
				var quantidade = 40;

				var resultado = controller.utils.calculos.precoFerrari(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(41250.00);
			});
		});

		describe('precoLamborghini()', function() {
			it('Deve retornar 37375.00 quando for passado o numero de 80 parcelas', function() {
				var quantidade = 80;

				var resultado = controller.utils.calculos.precoLamborghini(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(37375.00);
			});

			it('Deve retornar 4600.00 quando for passado o numero de 650 parcelas', function() {
				var quantidade = 650;

				var resultado = controller.utils.calculos.precoLamborghini(quantidade);

				resultado.should.be.a.Number;
				resultado.should.be.equal(4600.00);
			});
		});
	});


	describe('\nTesta se a função calcular() funciona', function() {
		describe('precoFox()', function() {
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

		describe('precoGolf()', function() {
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

		describe('precoGol()', function() {
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

		describe('precoVoyage()', function() {
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

		describe('precoSaveiro()', function() {
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

		describe('precoC3()', function() {
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

		describe('precoC4()', function() {
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

		describe('precoAirCross()', function() {
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

		describe('precoDS5()', function() {
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

		describe('precoDS3()', function() {
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

		describe('precoHB20()', function() {
			it('Deveria retornar o valor de 1399.60 quando passar 25 parcelas', function() {
				var parametros = {
					quantidade: 25,
					operacao: 'precoHB20'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1399.60);
			});
		});

		describe('precoTucson()', function() {
			it('Deveria retornar o valor de 812.50 quando passar 80 parcelas', function() {
				var parametros = {
					quantidade: 80,
					operacao: 'precoTucson'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(812.50);
			});
		});

		describe('precoIX35()', function() {
			it('Deveria retornar o valor de 1212.50 quando passar 80 parcelas', function() {
				var parametros = {
					quantidade: 80,
					operacao: 'precoIX35'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1212.50);
			});
		});

		describe('precoSantaFe()', function() {
			it('Deveria retornar o valor de 1800.00 quando passar 80 parcelas', function() {
				var parametros = {
					quantidade: 80,
					operacao: 'precoSantaFe'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1800.00);
			});
		});

		describe('precoAzera()', function() {
			it('Deveria retornar o valor de 1600.00 quando passar 70 parcelas', function() {
				var parametros = {
					quantidade: 70,
					operacao: 'precoAzera'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(1600.00);
			});
		});

		describe('precoFrontier()', function() {
			it('Deveria retornar o valor de 919.90 quando passar 100 parcelas', function() {
				var parametros = {
					quantidade: 100,
					operacao: 'precoFrontier'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(919.90);
			});
		});

		describe('precoSentra()', function() {
			it('Deveria retornar o valor de 849.20 quando passar 75 parcelas', function() {
				var parametros = {
					quantidade: 75,
					operacao: 'precoSentra'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(849.20);
			});
		});

		describe('precoVersa()', function() {
			it('Deveria retornar o valor de 4199.00 quando passar 10 parcelas', function() {
				var parametros = {
					quantidade: 10,
					operacao: 'precoVersa'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(4199.00);
			});
		});

		describe('precoFerrari()', function() {
			it('Deveria retornar o valor de 6600.00 quando passar 250 parcelas', function() {
				var parametros = {
					quantidade: 250,
					operacao: 'precoFerrari'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(6600.00);
			});
		});

		describe('precoLamborghini()', function() {
			it('Deveria retornar o valor de 7475.00 quando passar 400 parcelas', function() {
				var parametros = {
					quantidade: 400,
					operacao: 'precoLamborghini'
				};

				var resultado = controller.utils.calculos.calcular(parametros);

				resultado.should.be.a.Number;
				resultado.should.be.equal(7475.00);
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