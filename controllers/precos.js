module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};

				resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;

				return resposta;
			},

			calculos: {
				calcular: function(parametro) {
					var quantidade = parseFloat(parametro.quantidade);

					var resultado = Controller.utils.calculos[parametro.operacao](quantidade);

					return resultado;
				},

                precoFox: function(quantidade) {
                    return 50190.00 / quantidade;
                },

                precoGolf: function(quantidade) {
                    return 71000.00 / quantidade;
                },

                precoGol: function(quantidade) {
                    return 30990.00 / quantidade;
                },

                precoVoyage: function(quantidade) {
                    return 40120.00 / quantidade;
                },

                precoSaveiro: function(quantidade) {
                    return 47630.00 / quantidade;
                },

                precoC3: function(quantidade) {
                    return 44490.00 / quantidade;
                },

                precoC4: function(quantidade) {
                    return 51290.00 / quantidade;
                },

                precoAirCross: function(quantidade) {
                    return 58990.00 / quantidade;
                },

                precoDS5: function(quantidade) {
                    return 139990.00 / quantidade;
                },

                precoDS3: function(quantidade) {
                    return 86990.00 / quantidade;
                },

                precoHB20: function(quantidade) {
                    return 34990.00 / quantidade;
                },

                precoTucson: function(quantidade) {
                    return 65000.00 / quantidade;
                },

                precoIX35: function(quantidade) {
                    return 97000.00 / quantidade;
                },

                precoSantaFe: function(quantidade) {
                    return 144000.00 / quantidade;
                },

                precoAzera: function(quantidade) {
                    return 112000.00 / quantidade;
                },

                precoFrontier: function(quantidade) {
                    return 91990.00 / quantidade;
                },

                precoSentra: function(quantidade) {
                    return 63690.00 / quantidade;
                },

                precoVersa: function(quantidade) {
                    return 41990.00 / quantidade;
                },

                precoFerrari: function(quantidade) {
                    return 1650000.00 / quantidade;
                },

                precoLamborghini: function(quantidade) {
                    return 2990000.00 / quantidade;
                }
			},

			validaParametro: function(parametro) {
				if(parametro && parametro !== '') {
					return parseFloat(parametro);
				}

				return 0.0;
			},

			extrairParametro: function(body) {
				var parametro = {
                    quantidade: 0.0,
					operacao: body.operacao
				};

				parametro.quantidade = Controller.utils.validaParametro(body.quantidade);

				return parametro;
			},
		},

		get: {
			index: function(request, response) {
				response.render('index');
			},

            precoFox: function(request, response) {
				response.render('precoFox');
			},

            precoGolf: function(request, response) {
                response.render('precoGolf');
            },

            precoGol: function(request, response) {
                response.render('precoGol');
            },

            precoVoyage: function(request, response) {
                response.render('precoVoyage');
            },

            precoSaveiro: function(request, response) {
                response.render('precoSaveiro');
            },

            precoC3: function(request, response) {
                response.render('precoC3');
            },

            precoC4: function(request, response) {
                response.render('precoC4');
            },

            precoAirCross: function(request, response) {
                response.render('precoAircross');
            },

            precoDS5: function(request, response) {
                response.render('precoDS5');
            },

            precoDS3: function(request, response) {
                response.render('precoDS3');
            },

            precoHB20: function(request, response) {
                response.render('precoHB20');
            },

            precoTucson: function(request, response) {
                response.render('precoTucson');
            },

            precoIX35: function(request, response) {
                response.render('precoIX35');
            },

            precoSantaFe: function(request, response) {
                response.render('precoSantaFe');
            },

            precoAzera: function(request, response) {
                response.render('precoAzera');
            },

            precoFrontier: function(request, response) {
                response.render('precoFrontier');
            },

            precoSentra: function(request, response) {
                response.render('precoSentra');
            },

            precoVersa: function(request, response) {
                response.render('precoVersa');
            },

            precoFerrari: function(request, response) {
                response.render('precoFerrari');
            },

            precoLamborghini: function(request, response) {
                response.render('precoLamborghini');
            }
		},

		post: {
			calcular: function(request, response) {
                var parametro = Controller.utils.extrairParametro(request.body);
				var resultado  = Controller.utils.calculos.calcular(parametro);
                var resposta   = Controller.utils.formatarResposta(resultado);

				response.render(parametro.operacao, resposta);
			},
		}
	};
	
	return Controller;
};