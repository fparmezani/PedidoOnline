var CONFIG = {
    ambiente : 'dev',
    tempoEstimadoEntrega : "30 minutos"
}


var HORARIO = [
    {
        dia_da_semana: "domingo",
        horario_inicio_manha: "10:00",
        horario_fim_manha: "10:00",
        horario_inicio_noite: "18:30",
        horario_fim_noite: "21:00",
        expediente: false
    },
    {
        dia_da_semana: "segunda-feira",
        horario_inicio: "10:00",
        horario_fim: "10:00",
        horario_inicio_noite: "18:30",
        horario_fim_noite: "21:00",
        expediente: true
    },
    {
        dia_da_semana: "terca-feira",
        horario_inicio: "10:00",
        horario_fim: "10:00",
        horario_inicio_noite: "18:30",
        horario_fim_noite: "21:00",
        expediente: true
    },
    {
        dia_da_semana: "quarta-feira",
        horario_inicio: "10:00",
        horario_fim: "10:00",
        horario_inicio_noite: "18:30",
        horario_fim_noite: "21:00",
        expediente: true
    },
    {
        dia_da_semana: "quinta-feira",
        horario_inicio: "10:00",
        horario_fim: "10:00",
        horario_inicio_noite: "18:30",
        horario_fim_noite: "21:00",
        expediente: true
    },
    {
        dia_da_semana: "sexta-feira",
        horario_inicio: "10:00",
        horario_fim: "10:00",
        horario_inicio_noite: "18:30",
        horario_fim_noite: "21:00",
        expediente: true
    },
    {
        dia_da_semana: "sábado",
        horario_inicio: "10:00",
        horario_fim: "10:00",
        horario_inicio_noite: "18:30",
        horario_fim_noite: "21:00",
        expediente: true
    }
];


var MENU = {
    "marmitasdodia": [
        {
            "id": "marmita-pequena",
            "img": "./img/cardapio/marmitasdodia/marmitaspequenas.jpeg",
            "name": "Marmita Pequena",
            "dsc": "Contém Arroz/feijão/ 1 proteína e 2 acompanhamentos. Marmita 400 grs (PORÇÃO INDIVIDUAL)",
            "price": 19.90
        },
        {
            "id": "marmita-media",
            "img": "./img/cardapio/marmitasdodia/marmitamedia.jpeg",
            "name": "Marmita Média",
            "dsc": "Acompanha Arroz/Feijão/2 carnes e 2 acompanhamentos. Marmita 0,650 grs. (PORÇÃO INDIVIDUAL)",
            "price": 25.90
        },
        {
            "id": "marmita-grande",
            "img": "./img/cardapio/marmitasdodia/marmitagrande.jpeg",
            "name": "Marmita Grande",
            "dsc": "Acompanha: Arroz/Feijão/2 carnes e 2 acomp. Marmita 800 grs. (PORÇÃO INDIVIDUAL)",
            "price": 25.90
        },
        {
            "id": "marmita-vegetariana-pequena",
            "img": "./img/cardapio/marmitasdodia/marmitavegetarianapequena.jpeg",
            "name": "Marmita Vegetariana Pequena",
            "dsc": "Acompanha Arroz/Feijão e 3 opções vegetarianas. Marmita 400grs. Clique em PEDIR e veja nossas opções.",
            "price": 18.90
        },
        {
            "id": "marmita-vegetariana-media",
            "img": "./img/cardapio/marmitasdodia/marmitavegetarianamedia.jpeg",
            "name": "Marmita Vegetariana Média",
            "dsc": "Acompanha: Arroz/Feijão e 3 opções vegetarianas. Marmita 700 grs. Clique em PEDIR e veja nossas opções.",
            "price": 25.90
        },
        {
            "id": "marmita-vegetariana-grande",
            "img": "./img/cardapio/marmitasdodia/marmitavegetarianagrande.jpeg",
            "name": "Marmita Vegetariana Grande",
            "dsc": "Acompanha: Arroz/Feijão e 3 opções vegetarianas. Marmita 800 grs. Clique em PEDIR e veja nossas opções.",
            "price": 27.90
        },
        {
            "id": "marmita-churrasco-media",
            "img": "./img/cardapio/marmitachurrasco/marmitachurrascomedia.jpeg",
            "name": "Marmita Vegetariana (Média)",
            "dsc": "Acompanha: Arroz/Feijão e 3 opções vegetarianas. Marmita 700 grs. Clique em PEDIR e veja nossas opções.",
            "price": 36.90
        },
        {
            "id": "marmita-churrasco-grande",
            "img": "./img/cardapio/marmitachurrasco/marmitachurrascogrande.jpeg",
            "name": "Marmita Churrasco (Grande)",
            "dsc": "Contém: Arroz/Feijão/Alcatra/Toscana/Cupim/tender e 2 acompanhamentos. Embalagem para 800 grs.",
            "price": 39.90
        },
        {
            "id": "individual-contra-file",
            "img": "./img/cardapio/marmitachurrasco/individualcontrafile.jpeg",
            "name": "Individual de Contra Filé",
            "dsc": "Acompanha: arroz/feijão/contra-filé (churrasco)/2 acompanhamentos do dia. Marmita 400 grs",
            "price": 29.90
        },
        {
            "id": "individual-cupim",
            "img": "./img/cardapio/marmitachurrasco/individualcupimchurrasco.jpeg",
            "name": "Individual de Cupim",
            "dsc": "Acompanha: arroz/feijão/Cupim(churrasco)/2 acompanhamentos do dia. Marmita 400grs",
            "price": 29.90
        },
        {
            "id": "individual-tender",
            "img": "./img/cardapio/marmitachurrasco/individualcupimchurrasco.jpeg",
            "name": "Individual Tender",
            "dsc": "Acompanha: arroz/feijão/TENDER (churrasco)/2 acompanhamentos do dia. Marmita 400 grs",
            "price": 19.90
        },
        {
            "id": "individual-de-frango-grelhado-churrasco",
            "img": "./img/cardapio/marmitachurrasco/individualfrangogrelhadochurrasco.jpeg",
            "name": "Individual de FRANGO GRELHADO (Churrasco)",
            "dsc": "Acompanha: arroz/feijão/FRANGO (churrasco)/2 acompanhamentos do dia. Marmita 400 grs",
            "price": 23.90
        },
        {
            "id": "individual-toscana-churrasco",
            "img": "./img/cardapio/marmitachurrasco/individualtoscanachurrasco.jpeg",
            "name": "Individual de FRANGO GRELHADO (Churrasco)",
            "dsc": "Acompanha: arroz/feijão/FRANGO (churrasco)/2 acompanhamentos do dia. Marmita 400 grs",
            "price": 23.90
        }
    ],
    "porcoes": [
        {
            "id": "arroz-branco",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Arroz Branco",
            "dsc": "Marmita média (400 grs)",
            "price": 12.90
        },
        {
            "id": "arroz-grega",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Arroz à Grega",
            "dsc": "Marmita média (400 grs)",
            "price": 15.90
        },
        {
            "id": "feiao",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Feijão",
            "dsc": "Marmita média (350 ml)",
            "price": 12.90
        },
        {
            "id": "porcao-fritas",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Porção de Fritas",
            "dsc": "Marmita média",
            "price": 23.90
        },
        {
            "id": "porcao-carne",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Porção de Carne",
            "dsc": "400grs BIFE ACEBOLADO (COXÃO MOLE)",
            "price": 48.90
        },
        {
            "id": "porcao-frango",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Porção de FRANGO",
            "dsc": "0,400gr FILÉ A MILANESA",
            "price": 12.90
        },
        {
            "id": "porcao-cupim",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Porção de CUPIM (Churrasco)",
            "dsc": "PREPARADO COM CUPIM A GRILL. Tamanho médio (400 grs)",
            "price": 69.90
        },
        {
            "id": "porcao-contra-file",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Porção de CONTRA FILÉ",
            "dsc": "PREPARADO COM CONTRA-FILÉ GRILL.Tamanho médio (400 grs)",
            "price": 69.90
        },
        {
            "id": "porcao-tutu-feijao",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "TUTU de FEIJÂO",
            "dsc": "Tutu de feijão caseiro c/ bacon e ovo frito.",
            "price": 19.90
        },
        {
            "id": "porcao-palitinho-queijo",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Palitinho de Queijo",
            "dsc": "Unidade",
            "price": 4.50
        },
        {
            "id": "porcao-palitinho-queijo-3",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "3 Palitinhos de Queijo",
            "dsc": " 3 Unidades",
            "price": 12.90
        },
        {
            "id": "porcao-farofa-bacon",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "Porção de Farofa de BACON",
            "dsc": "Marmita Média",
            "price": 21.90
        },
        {
            "id": "porcao-palitinho-creme-avela",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "3 Palitinhos de Creme de Avelã",
            "dsc": "",
            "price": 4.50
        },
        {
            "id": "porcao-palitinho-creme-avela-3",
            "img": "./img/cardapio/porcoes/porcao.png",
            "name": "3 Palitinhos de Creme de Avelã",
            "dsc": " 3 Unidades",
            "price": 14.50
        },
    ],
    "kitalmoco": [
        {
            "id": "kit-almoco-frango",
            "img": "./img/cardapio/KitAlmoco/KitAlmocoFrango.jpeg",
            "name": "Kit Almoço FRANGO",
            "dsc": "MARMITAS SEPARADAS MÉDIAS Contém: Arroz/Feijão/2 Acompanhamentos a sua escolha/Salada. FILÉ A MILANESA",
            "price": 65.90
        },
        {
            "id": "kit-almoco-carne",
            "img": "./img/cardapio/KitAlmoco/KitAlmocoCarne.jpeg",
            "name": "Kit Almoço CARNE",
            "dsc": "MARMITAS SEPARADAS MÉDIAS Contém: Arroz/Feijão/2 Acompanhamentos a escolha/Salada. BIFE ACEBLADO",
            "price": 72.90
        },
        {
            "id": "kit-almoco-combo-churrasco",
            "img": "./img/cardapio/KitAlmoco/KitAlmocoCarne.jpeg",
            "name": "Kit Almoço COMBO Churrasco",
            "dsc": "MARMITAS SEPARADAS MÉDIAS Contém: Arroz/Feijão/2 Acompanhamentos á escolha/ 1 COMBO CHURRASCO E SALADA",
            "price": 105.90
        },
        {
            "id": "kit-almoco-contra-file",
            "img": "./img/cardapio/KitAlmoco/KitAlmocoCarne.jpeg",
            "name": "Kit Almoço CONTRA FILÉ",
            "dsc": "MARMITAS SEPARADAS MÉDIAS Contém: Arroz/Feijão/2 Acompanhamentos á escolha/PORÇÃO DE CONTRA-FILÉ e Salada.",
            "price": 119.90
        },
        
    ],
    "parmegianas": [
        {
            "id": "parmegiana-carne-familia",
            "img": "./img/cardapio/Parmegianas/parmegianadecarnefamilia.jpeg",
            "name": "Parmegiana de Carne (Família)",
            "dsc": "Acompanha: Arroz/farofa/batata frita/salada. Serve de 2 a 3 pessoas",
            "price": 119.90
        },
        {
            "id": "parmegiana-carne-individual",
            "img": "./img/cardapio/Parmegianas/parmegianadecarneindividual.jpeg",
            "name": "Parmegiana de Carne (individual)",
            "dsc": "Marmita pequena arroz/batata palha/bife.",
            "price": 29.90
        },
        {
            "id": "parmegiana-frango-familia",
            "img": "./img/cardapio/Parmegianas/parmegianadefrangofamilia.jpeg",
            "name": "Parmegiana de Frango Familia",
            "dsc": "Acompanha: Arroz/farofa/batata frita/salada.",
            "price": 89.90
        },
        {
            "id": "parmegiana-frango-Individual",
            "img": "./img/cardapio/Parmegianas/parmegianadefrangoIndividual.jpeg",
            "name": "Parmegiana de Frango (Individual)",
            "dsc": "Marmita pequena arroz/batata palha/filé.",
            "price": 89.90
        },
    ],
    "combochurrasco": [
        {
            "id": "combo-churrasco-1-pessoa",
            "img": "./img/cardapio/ComboChurrasco/ComboIndividualChurrasco.jpeg",
            "name": "Combo Individual Churrasco/ Serve 1 Pessoa",
            "dsc": "Acompanha: 2 tipos de carne a sua escolha / 2 acompanhamentos do cardápio do dia.*NÃO ACOMPANHA ARROZ E FEIJÃO.",
            "price": 29.90
        },
        {
            "id": "combo-churrasco-2-pessoas",
            "img": "./img/cardapio/ComboChurrasco/ComboChurrascoServe2a3pessoas.jpeg",
            "name": "Combo Churrasco/ Serve 2 a 3 Pessoas",
            "dsc": "Contra-Filé/Cupim/Filé de frango/Panceta/Toscana/2 ACOMPANHAMENTOS DO DIA. *NÃO ACOMPANHA ARROZ E FEIJÃO.",
            "price": 65.90
        },
    ],
    "saladas": [
        {
            "id": "maionese-legumes-mini",
            "img": "./img/cardapio/Saladas/maionesedelegumesmini.jpeg",
            "name": "Maionese de Legumes Mini",
            "dsc": "Mini (0,300GRS)",
            "price": 14.90
        },
        {
            "id": "maionese-legumes-pequena",
            "img": "./img/cardapio/Saladas/maionesedelegumespequena.jpeg",
            "name": "Maionese de Legumes Pequena",
            "dsc": "Pequena 400grs",
            "price": 18.90
        },
        {
            "id": "maionese-legumes-media",
            "img": "./img/cardapio/Saladas/maionesedelegumesmedia.jpeg",
            "name": "Maionese de Legumes Média",
            "dsc": "Pequena 650grs",
            "price": 28.90
        },
        {
            "id": "maionese-legumes-grande",
            "img": "./img/cardapio/Saladas/maionesedelegumesgrande.jpeg",
            "name": "Maionese de Legumes Grande",
            "dsc": "Pequena 900grs",
            "price": 31.90
        },
        {
            "id": "antepasto-berinjela",
            "img": "./img/cardapio/Saladas/Antepastodeberinjela.jpeg",
            "name": "Antepasto de Berinjela",
            "dsc": "Pote 350grs",
            "price": 19.90
        },
        {
            "id": "ovos-codorna",
            "img": "./img/cardapio/Saladas/ovos-de-codorna-temperados.jpeg",
            "name": "Ovinhos de Codorna",
            "dsc": "Ovinhos de codorna no vinagrete. Embalagem 350 grs",
            "price": 12.90
        },
        {
            "id": "salada-simples",
            "img": "./img/cardapio/Saladas/saladasimples.jpeg",
            "name": "Salada Simples",
            "dsc": "ALFACE, TOMATE, PALMITO",
            "price": 10.90
        },
    ],
    "bebidas":[
        {
            "id": "coca-cola",
            "img": "./img/cardapio/bebidas/cocacola-lata-350ml.png",
            "name": "Coca-Cola Lata 350ml",
            "dsc": "",
            "price": 5.50
        },
        {
            "id": "coca-cola-zero",
            "img": "./img/cardapio/bebidas/cocacolazero-lata-350ml.png",
            "name": "Coca-Cola ZERO Lata 350ml",
            "dsc": "",
            "price": 5.50
        },
        {
            "id": "fanta-uva",
            "img": "./img/cardapio/bebidas/fantauva-lata-350ml.png",
            "name": "Coca-Cola Lata 350ml",
            "dsc": "",
            "price": 5.50
        },
        {
            "id": "fanta-laranja",
            "img": "./img/cardapio/bebidas/fanta-laranja-lata-350ml.jpg",
            "name": "Fanta Laranja Lata 350ml",
            "dsc": "",
            "price": 5.50
        },
        {
            "id": "agua-tonica",
            "img": "./img/cardapio/bebidas/Agua-Tonica-Antarctica-Lata-350ml.png",
            "name": "Coca-Cola Lata 350ml",
            "dsc": "",
            "price": 5.50
        },
        {
            "id": "schweppes-Lata",
            "img": "./img/cardapio/bebidas/schweppes-citrus-lata-350ml.jpg",
            "name": "Coca-Cola Lata 350ml",
            "dsc": "",
            "price": 5.50
        },
        {
            "id": "coca-cola-600ml",
            "img": "./img/cardapio/bebidas/coca-cola-600ml.jpg",
            "name": "Coca-Cola 600ml",
            "dsc": "",
            "price": 8.50
        },
        {
            "id": "coca-cola-zero-600ml",
            "img": "./img/cardapio/bebidas/coca_cola_zero_600ml.jpg",
            "name": "Coca-Cola ZERO 600ml",
            "dsc": "",
            "price": 8.50
        },
    ],
    "sucos":[
        {
            "id": "suco-laranja",
            "img": "./img/cardapio/Sucos/suco_de_laranja_500ML.jpg",
            "name": "Suco Natural de Laranja 500ml",
            "dsc": "",
            "price": 9.90
        },
        {
            "id": "suco-laranja-1000",
            "img": "./img/cardapio/Sucos/suco_natural_laranja_1000ml.png",
            "name": "Suco Natural de Laranja 1000ml",
            "dsc": "",
            "price": 18.90
        },
        {
            "id": "suco-acerola",
            "img": "./img/cardapio/Sucos/suconaturaldeacerola.jpeg",
            "name": "Suco Natural de Acerola 500ml",
            "dsc": "",
            "price": 9.90
        },
        {
            "id": "suco-acerola-1000",
            "img": "./img/cardapio/Sucos/suconaturaldeacerola.jpeg",
            "name": "Suco Natural de Acerola 1000ml",
            "dsc": "",
            "price": 18.90
        },
        {
            "id": "suco-morango",
            "img": "./img/cardapio/Sucos/suco_natural_morango_500ml.png",
            "name": "Suco Natural de Morango 500 ml",
            "dsc": "",
            "price": 9.90
        },
        {
            "id": "suco-morango-1000",
            "img": "./img/cardapio/Sucos/suco_natural_morango_1000ml.png",
            "name": "Suco Natural de Morango 1000 ml",
            "dsc": "",
            "price": 18.90
        },
        {
            "id": "suco-maracauja",
            "img": "./img/cardapio/Sucos/suco_de_maracuja_500ML.jpg",
            "name": "Suco Natural de Maracauja 500 ml",
            "dsc": "",
            "price": 9.90
        },
        {
            "id": "suco-maracauja-1000",
            "img": "./img/cardapio/Sucos/suco_de_maracuja_1000ML.jpg",
            "name": "Suco Natural de Maracauja 1000 ml",
            "dsc": "",
            "price": 18.90
        }
    ]
}