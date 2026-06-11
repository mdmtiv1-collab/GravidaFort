
// BANCO DE DADOS DE TREINOS - GRAVIDAFORT
const DATABASE = {
    modules: [
        {
            id: "m1",
            title: "Desafio Fortalecimento",
            description: "Programa progressivo de 4 semanas focado no fortalecimento muscular completo e seguro para o corpo da gestante em casa.",
            type: "youtube",
            submodules: [
    {
        "title": "Semana 1 – Costas & Postura",
        "lessons": [
            {
                "title": "Dia 1 - Costas e Ombros Rápido",
                "video": "AI5put7LYCc",
                "desc": "Treino leve de costas em casa para gestantes, melhorando a postura e fortalecendo os braços.",
                "tip": "Mantenha o peito aberto e puxe simulando asas, sem forçar o pescoço."
            },
            {
                "title": "Dia 2 - Fortalecimento com Pesinhos",
                "video": "akWE4nTh9Ac",
                "desc": "Treino em casa de costas e ombros usando garrafas d'água ou pesinhos leves.",
                "tip": "Mantenha o movimento sob controle na descida para ativar bem a musculatura."
            },
            {
                "title": "Dia 3 - Postura sem Dores",
                "video": "1RSbIQK2h7k",
                "desc": "Exercícios simples de braços e costas focados em eliminar a flacidez e dores posturais.",
                "tip": "Respire de forma calma e constante durante cada movimento."
            },
            {
                "title": "Dia 4 - Costas sem Equipamentos",
                "video": "7XoHx0Ly3pY",
                "desc": "Exercícios de fortalecimento de costas usando apenas o peso do próprio corpo em casa.",
                "tip": "Foque na ativação das escápulas ao contrair as costas."
            },
            {
                "title": "Dia 5 - Ombros e Costas Livres",
                "video": "6Qlx-vCD59s",
                "desc": "Melhor treino de membros superiores para realizar em casa de forma confortável.",
                "tip": "Não force as articulações além do limite confortável da gestação."
            },
            {
                "title": "Dia 6 - Braços com Faixa Elástica",
                "video": "gPBgtuLhyaE",
                "desc": "Exercícios para fortalecer e tonificar os braços usando faixas elásticas simples em casa.",
                "tip": "Ajuste a tensão da faixa para um nível leve a moderado."
            },
            {
                "title": "Dia 7 - Postura e Tronco Forte",
                "video": "749wxHbrOKc",
                "desc": "Exercícios práticos para fortalecer braços, ombros e as costas de forma descomplicada.",
                "tip": "Faça em um tapete ou colchonete para manter a estabilidade."
            }
        ]
    },
    {
        "title": "Semana 2 – Membros Superiores",
        "lessons": [
            {
                "title": "Dia 1 - Exercícios com Halteres",
                "video": "nnpfdgNkye4",
                "desc": "Exercícios com pesos leves ou garrafas para manter os braços e ombros ativos na gravidez.",
                "tip": "Escolha pesos bem leves que permitam fazer as repetições sem prender a respiração."
            },
            {
                "title": "Dia 2 - Ombros e Braços Miniband",
                "video": "8w8jNoG5UFQ",
                "desc": "Série com mini elásticos para ativação muscular rápida e segura de membros superiores.",
                "tip": "Mantenha as costas retas e o tronco firme durante a abertura do elástico."
            },
            {
                "title": "Dia 3 - Superior Funcional Leve",
                "video": "w8adcEPm2jk",
                "desc": "Treino funcional simples com elásticos ou peso do corpo para braços e postura.",
                "tip": "Priorize a respiração contínua e a execução controlada."
            },
            {
                "title": "Dia 4 - Força e Postura em Casa",
                "video": "xdwX3blGIYs",
                "desc": "Exercícios suaves para fortalecer os braços e ombros sem sobrecarregar as articulações.",
                "tip": "Mantenha a cabeça alinhada com a coluna, olhando para frente."
            },
            {
                "title": "Dia 5 - Ativação Muscular Leve",
                "video": "QbS-A9C2Cns",
                "desc": "Exercícios fáceis de braços e tronco para manter o tônus muscular em dia.",
                "tip": "Aproveite para focar em respirações profundas e lentas."
            },
            {
                "title": "Dia 6 - Exercícios 1º Trimestre",
                "video": "eNi4t30fV08",
                "desc": "Treino de braços e mobilidade adaptado para os primeiros meses de gestação.",
                "tip": "Foque no bem-estar geral e faça pausas sempre que necessário."
            },
            {
                "title": "Dia 7 - Superior e Alongamento",
                "video": "WzyVz0zoZJ0",
                "desc": "Treino completo de membros superiores focado em força e flexibilidade para o dia a dia.",
                "tip": "Dê o seu melhor respeitando os limites da sua flexibilidade atual."
            }
        ]
    },
    {
        "title": "Semana 3 – Membros Inferiores",
        "lessons": [
            {
                "title": "Dia 1 - Pernas e Glúteos Base",
                "video": "Q7uoCu5dCyc",
                "desc": "Treino completo de pernas e glúteos em casa focado na estabilidade da gestante.",
                "tip": "Ao agachar, mande o quadril para trás e mantenha o peito aberto."
            },
            {
                "title": "Dia 2 - Fortalecimento de Pernas",
                "video": "Fy7_LWh04uo",
                "desc": "Os 5 melhores exercícios de perna e glúteo para realizar em casa de forma segura.",
                "tip": "Use uma parede ou cadeira para apoio e equilíbrio adicionais se necessário."
            },
            {
                "title": "Dia 3 - Coxas Firmes sem Peso",
                "video": "M6-n79OfEwA",
                "desc": "Exercícios para coxas e bumbum usando apenas o peso do próprio corpo no colchonete.",
                "tip": "Mantenha o joelho alinhado com a ponta dos pés durante o agachamento."
            },
            {
                "title": "Dia 4 - Fortalecimento de Coxas",
                "video": "y-o9fH99VTA",
                "desc": "Treino focado em tonificar as pernas e melhorar o retorno venoso (circulação).",
                "tip": "Faça movimentos lentos para ajudar a bombear o sangue de volta das pernas."
            },
            {
                "title": "Dia 5 - Glúteos Estáveis",
                "video": "lsl_VaA7-MA",
                "desc": "Exercícios fáceis de glúteos e pernas para proteger o quadril na gravidez.",
                "tip": "Apoie os joelhos em um colchonete confortável ou almofada."
            },
            {
                "title": "Dia 6 - Glúteo em Quatro Apoios",
                "video": "Lz5rYFHwPdg",
                "desc": "Exercício clássico de quatro apoios adaptado para gestantes com foco em bumbum.",
                "tip": "Não deixe a barriga cair excessivamente; mantenha a coluna alinhada."
            },
            {
                "title": "Dia 7 - Fortalecimento de Base",
                "video": "rEwLAtFq56g",
                "desc": "Exercícios práticos de pernas para manter a base e as articulações fortes.",
                "tip": "Respire de forma controlada e evite trancos nos agachamentos."
            }
        ]
    },
    {
        "title": "Semana 4 – Treino Integrado",
        "lessons": [
            {
                "title": "Dia 1 - Corpo Todo sem Impacto",
                "video": "3RssxPFS_io",
                "desc": "Treino completo em casa para o corpo todo, ideal para ganho de energia e fortalecimento.",
                "tip": "Realize no seu próprio ritmo, respirando continuamente."
            },
            {
                "title": "Dia 2 - Funcional sem Salto",
                "video": "edjipB5a5Hk",
                "desc": "Exercícios integrados de força e mobilidade em casa sem nenhum tipo de salto.",
                "tip": "Mantenha as solas dos pés bem firmes no chão em todos os exercícios."
            },
            {
                "title": "Dia 3 - Fortalecimento Aeróbico",
                "video": "NOJQwTw6pAM",
                "desc": "Treino dinâmico leve para manter a circulação ativa e fortalecer o corpo de forma suave.",
                "tip": "O foco é a disposição física, beba água e faça pausas quando necessário."
            },
            {
                "title": "Dia 4 - Rotina Gestante Leve",
                "video": "SSctsslEj0E",
                "desc": "Treino integrado de membros superiores e inferiores para realizar em poucos minutos.",
                "tip": "Foque no controle postural em cada movimento realizado."
            },
            {
                "title": "Dia 5 - Pilates Clínico em Casa",
                "video": "0H0U1knFGbg",
                "desc": "Aula completa de Pilates para fortalecimento geral do corpo e alongamento.",
                "tip": "Use a respiração diafragmática para guiar o ritmo do movimento."
            },
            {
                "title": "Dia 6 - Pilates com Cadeira/Apoio",
                "video": "KkReQZWLlrg",
                "desc": "Aula de Pilates focada em fortalecimento geral em casa usando apoios simples.",
                "tip": "Concentre-se na estabilidade do seu corpo durante as poses."
            },
            {
                "title": "Dia 7 - Pilates para Gestação Leve",
                "video": "433kz5tGivc",
                "desc": "Fortalecimento completo e alongamentos suaves para finalizar a semana relaxando o corpo.",
                "tip": "Parabéns por completar o desafio de fortalecimento! Respire e relaxe."
            }
        ]
    }
]
        },
        {
            id: "m2",
            title: "Treino na Cadeira (Iniciantes)",
            description: "Exercícios adaptados com suporte de cadeira, ideal para quem está iniciando ou possui mobilidade reduzida.",
            type: "drive",
            lessons: [
    {
        "id": "c_1ENzJ9k7pSQwRBKWqfEkPTuzpUklhbD2S",
        "title": "Treino 1",
        "video": "1ENzJ9k7pSQwRBKWqfEkPTuzpUklhbD2S",
        "desc": "Vídeoaula guiada de exercício físico adaptado na cadeira. Foco em fortalecimento muscular seguro e mobilidade articular para iniciantes.",
        "tip": "Sente-se com a coluna bem alinhada, não deslize o quadril para frente e respire com calma durante os movimentos."
    },
    {
        "id": "c_1Wv6dF910nEovorH-ilPaWNGLvpyMrMia",
        "title": "Treino 2",
        "video": "1Wv6dF910nEovorH-ilPaWNGLvpyMrMia",
        "desc": "Vídeoaula guiada de exercício físico adaptado na cadeira. Foco em fortalecimento muscular seguro e mobilidade articular para iniciantes.",
        "tip": "Sente-se com a coluna bem alinhada, não deslize o quadril para frente e respire com calma durante os movimentos."
    },
    {
        "id": "c_1ECb9hBjKi_JXqUvIdcDTImyXfuMw7Mv5",
        "title": "Treino 3",
        "video": "1ECb9hBjKi_JXqUvIdcDTImyXfuMw7Mv5",
        "desc": "Vídeoaula guiada de exercício físico adaptado na cadeira. Foco em fortalecimento muscular seguro e mobilidade articular para iniciantes.",
        "tip": "Sente-se com a coluna bem alinhada, não deslize o quadril para frente e respire com calma durante os movimentos."
    },
    {
        "id": "c_1V8tiStTYt-Jhh8nXVIGgbVtV5Cdgafih",
        "title": "Treino 4",
        "video": "1V8tiStTYt-Jhh8nXVIGgbVtV5Cdgafih",
        "desc": "Vídeoaula guiada de exercício físico adaptado na cadeira. Foco em fortalecimento muscular seguro e mobilidade articular para iniciantes.",
        "tip": "Sente-se com a coluna bem alinhada, não deslize o quadril para frente e respire com calma durante os movimentos."
    }
]
        },
        {
            id: "m3",
            title: "Condicionamento Corporal",
            description: "Série completa de 50 treinos em vídeo para ganho de resistência muscular e condicionamento geral.",
            type: "drive",
            lessons: [
    {
        "id": "cond_1l6sIWKblf36WfHHOQ2RqyoO-hB2L6YpF",
        "title": "Vídeo 21",
        "video": "1l6sIWKblf36WfHHOQ2RqyoO-hB2L6YpF",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1ViJVtKlBVdnSYJTu_RVAH9JNLVqgKu5r",
        "title": "Vídeo 22",
        "video": "1ViJVtKlBVdnSYJTu_RVAH9JNLVqgKu5r",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1SJdAqSLGXpA_ZbiI-uJ_LXYLtjJ1roCK",
        "title": "Vídeo 23",
        "video": "1SJdAqSLGXpA_ZbiI-uJ_LXYLtjJ1roCK",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1glFcqb7Vq5siSvwQf90NXoWK_NyUFKzG",
        "title": "Vídeo 24",
        "video": "1glFcqb7Vq5siSvwQf90NXoWK_NyUFKzG",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1ig7DoA5S7PRje7oL2aPfW1tWuRhoP9JC",
        "title": "Vídeo 25",
        "video": "1ig7DoA5S7PRje7oL2aPfW1tWuRhoP9JC",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_16F4JyW0mQFyRUj1NRRJ1tREd8NP99Hgo",
        "title": "Vídeo 26",
        "video": "16F4JyW0mQFyRUj1NRRJ1tREd8NP99Hgo",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1CMqbiyOKNYYoekhaxm9ty0rngo5oPbwk",
        "title": "Vídeo 27",
        "video": "1CMqbiyOKNYYoekhaxm9ty0rngo5oPbwk",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1uHamFGkWYzA_G9KUd2rgZ-1VHx2M8889",
        "title": "Vídeo 28",
        "video": "1uHamFGkWYzA_G9KUd2rgZ-1VHx2M8889",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1Xxh5H-l8MdkPLo0pM6_xVXXETVj1uM-7",
        "title": "Vídeo 29",
        "video": "1Xxh5H-l8MdkPLo0pM6_xVXXETVj1uM-7",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1p4VUd60mCX50tLLD47qKeRD5vIMesHBC",
        "title": "Vídeo 30",
        "video": "1p4VUd60mCX50tLLD47qKeRD5vIMesHBC",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1c7H0nFto9mwf8a7oXdSX-LEq88hi9AMo",
        "title": "Vídeo 31",
        "video": "1c7H0nFto9mwf8a7oXdSX-LEq88hi9AMo",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1WobL62rp82yVzYafeYaOjZ4swfwPcxX1",
        "title": "Vídeo 32",
        "video": "1WobL62rp82yVzYafeYaOjZ4swfwPcxX1",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1O7YRHIN6HTTSF8Kl2lthtOkvOP5ayIsq",
        "title": "Vídeo 33",
        "video": "1O7YRHIN6HTTSF8Kl2lthtOkvOP5ayIsq",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1mA0B8o96KhqDrS0mbpgNR3UO5EhJPZEL",
        "title": "Vídeo 34",
        "video": "1mA0B8o96KhqDrS0mbpgNR3UO5EhJPZEL",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1mUmlSlZY36xRw8FNOEwXfhqKZcGkOjP1",
        "title": "Vídeo 35",
        "video": "1mUmlSlZY36xRw8FNOEwXfhqKZcGkOjP1",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_13VccZIjH_lWuSyUuFGvyKgIPfjcwKd9k",
        "title": "Vídeo 36",
        "video": "13VccZIjH_lWuSyUuFGvyKgIPfjcwKd9k",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1eTYbw29ppfqKNTaEzCnTsw5JW0TGe4Hs",
        "title": "Vídeo 37",
        "video": "1eTYbw29ppfqKNTaEzCnTsw5JW0TGe4Hs",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1q8s2oO3vocomnWsgWkUrWfQwki_dRWzf",
        "title": "Vídeo 38",
        "video": "1q8s2oO3vocomnWsgWkUrWfQwki_dRWzf",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1WMeSjqYz2d_v5F_NROe4AJJGGqJYdA-g",
        "title": "Vídeo 39",
        "video": "1WMeSjqYz2d_v5F_NROe4AJJGGqJYdA-g",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1v6sfhiY_GJE05UBC3Jv989NGdxkrWFSb",
        "title": "Vídeo 40",
        "video": "1v6sfhiY_GJE05UBC3Jv989NGdxkrWFSb",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1pmzkVDx2_2nGqxqvQXAsbfz1semz7jQB",
        "title": "Vídeo 41",
        "video": "1pmzkVDx2_2nGqxqvQXAsbfz1semz7jQB",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1CCVUM2IC15SSu8oTreB4Qg93Tam7ocQE",
        "title": "Vídeo 42",
        "video": "1CCVUM2IC15SSu8oTreB4Qg93Tam7ocQE",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1thPJqHzT-UuBs8RmwncICAauI2G-iyQq",
        "title": "Vídeo 43",
        "video": "1thPJqHzT-UuBs8RmwncICAauI2G-iyQq",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1-O5gE9D45W87_ScnPW0_dp2o2TS4-owS",
        "title": "Vídeo 44",
        "video": "1-O5gE9D45W87_ScnPW0_dp2o2TS4-owS",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1V4e222FWfSxLpSNhaGmLE5-dfLUk6prp",
        "title": "Vídeo 45",
        "video": "1V4e222FWfSxLpSNhaGmLE5-dfLUk6prp",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1XmlWLAPNfWfh_cdGr1D0UDVCt6SJ3gky",
        "title": "Vídeo 46",
        "video": "1XmlWLAPNfWfh_cdGr1D0UDVCt6SJ3gky",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_13GDR_l9VncJUxa5zESwKaMyTUSZmYnk-",
        "title": "Vídeo 47",
        "video": "13GDR_l9VncJUxa5zESwKaMyTUSZmYnk-",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1w6WxWHIPZ2c2mtnMdlMPKgmlIkcKl6tX",
        "title": "Vídeo 48",
        "video": "1w6WxWHIPZ2c2mtnMdlMPKgmlIkcKl6tX",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1bspg5LYMfoZYKrs4mCYunhlT4Ouj6e03",
        "title": "Vídeo 49",
        "video": "1bspg5LYMfoZYKrs4mCYunhlT4Ouj6e03",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1JxDszRUe3l18l8wOhTS2m_ScTlO9AVtU",
        "title": "Vídeo 50",
        "video": "1JxDszRUe3l18l8wOhTS2m_ScTlO9AVtU",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1DMSXS3qaHIlzyu_CLvxl_o6076HfnHJn",
        "title": "Vídeo 51",
        "video": "1DMSXS3qaHIlzyu_CLvxl_o6076HfnHJn",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1Iojk4JBo5OMgJdsjflotQRXk35KxQ6yN",
        "title": "Vídeo 52",
        "video": "1Iojk4JBo5OMgJdsjflotQRXk35KxQ6yN",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_10tplYMBdz2Qzf1bug1qobsLNqOWHiJ9r",
        "title": "Vídeo 53",
        "video": "10tplYMBdz2Qzf1bug1qobsLNqOWHiJ9r",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1nfwhYqdob4b8fl3UFZ0JcNPTBXJBfTBF",
        "title": "Vídeo 54",
        "video": "1nfwhYqdob4b8fl3UFZ0JcNPTBXJBfTBF",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1urD0EhpzCLb_ZRBx8I8q_l_cHZW0H-vA",
        "title": "Vídeo 55",
        "video": "1urD0EhpzCLb_ZRBx8I8q_l_cHZW0H-vA",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_14GDN1lWHNtUS9QsOOZl7vtMmE0Wz-Ljd",
        "title": "Vídeo 56",
        "video": "14GDN1lWHNtUS9QsOOZl7vtMmE0Wz-Ljd",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1Lt-DOTn_xOi49jPPiYRwkMoNm6vt_Wj8",
        "title": "Vídeo 57",
        "video": "1Lt-DOTn_xOi49jPPiYRwkMoNm6vt_Wj8",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1OyQUoNHMlN9nX_XRcq0NrJq_WLDxhPH6",
        "title": "Vídeo 58",
        "video": "1OyQUoNHMlN9nX_XRcq0NrJq_WLDxhPH6",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1Az7FX0GC8UcdwCf20waEdcVFtx9F8Pu9",
        "title": "Vídeo 59",
        "video": "1Az7FX0GC8UcdwCf20waEdcVFtx9F8Pu9",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1L5sN0BLzKQrkJ-If-dqQUbCV6_z6QJ2-",
        "title": "Vídeo 60",
        "video": "1L5sN0BLzKQrkJ-If-dqQUbCV6_z6QJ2-",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1u5x9-5yohHp_kx3JLjdW0IzRr7vGWRKD",
        "title": "Vídeo 61",
        "video": "1u5x9-5yohHp_kx3JLjdW0IzRr7vGWRKD",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1vJxA2V4URQqP8956Bt5SbX9XqIhNEhKG",
        "title": "Vídeo 62",
        "video": "1vJxA2V4URQqP8956Bt5SbX9XqIhNEhKG",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1B9jTHutLZy1lHk6B_d27xTLP2WXypKjN",
        "title": "Vídeo 63",
        "video": "1B9jTHutLZy1lHk6B_d27xTLP2WXypKjN",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1Uh0EWfUvUEz5qiWDXSSb0f39nMipbeHn",
        "title": "Vídeo 64",
        "video": "1Uh0EWfUvUEz5qiWDXSSb0f39nMipbeHn",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1CWsz3qGpLneaMSnDvbQAw7lWOhN9EKr2",
        "title": "Vídeo 65",
        "video": "1CWsz3qGpLneaMSnDvbQAw7lWOhN9EKr2",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_10yWQnVjjBAAkCIeXSgH4I4N2ltwwLuyE",
        "title": "Vídeo 66",
        "video": "10yWQnVjjBAAkCIeXSgH4I4N2ltwwLuyE",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_18TRWCtZAEBJpU5U0qMO1VozeKTsoWRai",
        "title": "Vídeo 67",
        "video": "18TRWCtZAEBJpU5U0qMO1VozeKTsoWRai",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1AQnDyvujuQTyrv3QCXrMWFi72xJzwZce",
        "title": "Vídeo 68",
        "video": "1AQnDyvujuQTyrv3QCXrMWFi72xJzwZce",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1y0rYqclXHVSLC0bhLizIL8c8p1Afg7i4",
        "title": "Vídeo 69",
        "video": "1y0rYqclXHVSLC0bhLizIL8c8p1Afg7i4",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    },
    {
        "id": "cond_1fZgOzQzzJ_nqx8M5NcYmZwPpRLN1YAIs",
        "title": "Vídeo 70",
        "video": "1fZgOzQzzJ_nqx8M5NcYmZwPpRLN1YAIs",
        "desc": "Exercício prático de condicionamento físico corporal em vídeo. Ideal para ganho de resistência muscular e queima calórica.",
        "tip": "Preste bastante atenção à execução da instrutora no vídeo e tente repetir os movimentos no mesmo ritmo."
    }
]
        },
        {
            id: "m4",
            title: "Biblioteca de Movimentos (GIFs)",
            description: "Manual visual interativo com 50 movimentos para você verificar a execução e postura correta dos exercícios.",
            type: "gif",
            lessons: [
    {
        "id": "gif_1RJpW6ttgYsQYorHsWx23Ot_dqUMUkNxf",
        "title": "Abdução de Quadril com Faixa",
        "video": "1RJpW6ttgYsQYorHsWx23Ot_dqUMUkNxf",
        "desc": "Demonstração visual em loop animado do exercício: Abdução de Quadril com Faixa. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1i-sSMsTjdp7n1DvPD_ujop-mFeufiOSc",
        "title": "Abdução de Quadril em Decúbito Lateral",
        "video": "1i-sSMsTjdp7n1DvPD_ujop-mFeufiOSc",
        "desc": "Demonstração visual em loop animado do exercício: Abdução de Quadril em Decúbito Lateral. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_10NQEiGWDAAOIY3FXjKzbKjvRWI1P9feF",
        "title": "Abdução de Quadril em Pé",
        "video": "10NQEiGWDAAOIY3FXjKzbKjvRWI1P9feF",
        "desc": "Demonstração visual em loop animado do exercício: Abdução de Quadril em Pé. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1K0XG8f4vN0PIn5FN71IQl4t9YiroboiF",
        "title": "Abdução de Quadril Lateral",
        "video": "1K0XG8f4vN0PIn5FN71IQl4t9YiroboiF",
        "desc": "Demonstração visual em loop animado do exercício: Abdução de Quadril Lateral. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1xtj_qrqdLQQWvUvSMj9tHYULHurOwKao",
        "title": "Abdução de Quadril Sentado com Faixa Elástica",
        "video": "1xtj_qrqdLQQWvUvSMj9tHYULHurOwKao",
        "desc": "Demonstração visual em loop animado do exercício: Abdução de Quadril Sentado com Faixa Elástica. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_146hgGCP3snd6XA_kNcK_gHWrn0oG2DIu",
        "title": "Adução de Ombro com Faixa Elástica",
        "video": "146hgGCP3snd6XA_kNcK_gHWrn0oG2DIu",
        "desc": "Demonstração visual em loop animado do exercício: Adução de Ombro com Faixa Elástica. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1r_lm-5mfwOgYKY7HErN702MHGwCnFEvt",
        "title": "Afundo Alternado com Salto",
        "video": "1r_lm-5mfwOgYKY7HErN702MHGwCnFEvt",
        "desc": "Demonstração visual em loop animado do exercício: Afundo Alternado com Salto. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1V6c6S1XHINEZLn89bOhh9KW40Q1s2HBP",
        "title": "Afundo com Gymstick",
        "video": "1V6c6S1XHINEZLn89bOhh9KW40Q1s2HBP",
        "desc": "Demonstração visual em loop animado do exercício: Afundo com Gymstick. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1uqsogiZ-Mymk4nGWKSvn73LmpExtT2QZ",
        "title": "Afundo Lateral",
        "video": "1uqsogiZ-Mymk4nGWKSvn73LmpExtT2QZ",
        "desc": "Demonstração visual em loop animado do exercício: Afundo Lateral. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1eZvouN3lih7vvomZAPWR5DiTPnvDcIGy",
        "title": "Afundo no banco",
        "video": "1eZvouN3lih7vvomZAPWR5DiTPnvDcIGy",
        "desc": "Demonstração visual em loop animado do exercício: Afundo no banco. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1DGgj9YYEJw79AVzp1iruIVa_f8X-ehzK",
        "title": "Afundo",
        "video": "1DGgj9YYEJw79AVzp1iruIVa_f8X-ehzK",
        "desc": "Demonstração visual em loop animado do exercício: Afundo. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1uYEbV0KBORL16Hq8YFcOoWKsj3DFMh-f",
        "title": "Agachamento Búlgaro com Peso Corporal",
        "video": "1uYEbV0KBORL16Hq8YFcOoWKsj3DFMh-f",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Búlgaro com Peso Corporal. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_18Kjv2YsplGzKkB5eCTykSOAJAqZJvNbt",
        "title": "Agachamento búlgaro com salto",
        "video": "18Kjv2YsplGzKkB5eCTykSOAJAqZJvNbt",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento búlgaro com salto. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1dGQecEuPBiPJqP2ekLYZJnL8jiJHkNVq",
        "title": "Agachamento Camarão",
        "video": "1dGQecEuPBiPJqP2ekLYZJnL8jiJHkNVq",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Camarão. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1JIhNAfZgLewVjRY9gfxqCSJj8MtLvZ7i",
        "title": "Agachamento com Chute Lateral e Toque no Calcanhar",
        "video": "1JIhNAfZgLewVjRY9gfxqCSJj8MtLvZ7i",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento com Chute Lateral e Toque no Calcanhar. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1nfBVdcPYIhakkY97mRuxjcmXm0-49a_3",
        "title": "Agachamento com Elevação dos Joelhos",
        "video": "1nfBVdcPYIhakkY97mRuxjcmXm0-49a_3",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento com Elevação dos Joelhos. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1DE80GpzkMpxI6awpqyv_x8AIZVH2L5w_",
        "title": "Agachamento com Faixa Elástica em Afundo",
        "video": "1DE80GpzkMpxI6awpqyv_x8AIZVH2L5w_",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento com Faixa Elástica em Afundo. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1zZ7clN7TxaABtGvhLxL53H3gtsXf__sg",
        "title": "Agachamento com Faixa Elástica sobre a Cabeça",
        "video": "1zZ7clN7TxaABtGvhLxL53H3gtsXf__sg",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento com Faixa Elástica sobre a Cabeça. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_17R0qjvPXThys1AYB_g46D_4l8ecACURs",
        "title": "Agachamento com Gymstick",
        "video": "17R0qjvPXThys1AYB_g46D_4l8ecACURs",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento com Gymstick. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1P-mxwSd_t3ogGI5MmwTa7RjWlQ-NrrYU",
        "title": "Agachamento com Salto",
        "video": "1P-mxwSd_t3ogGI5MmwTa7RjWlQ-NrrYU",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento com Salto. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1zRKGgEgz8LPnLTRkIDBYqWImg5HtMS72",
        "title": "Agachamento com Sustentação e Elevação de Panturrilhas",
        "video": "1zRKGgEgz8LPnLTRkIDBYqWImg5HtMS72",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento com Sustentação e Elevação de Panturrilhas. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1gQ_-U74RH17QV-s5ErjiswQmzIzE_wWZ",
        "title": "Agachamento Cossaco",
        "video": "1gQ_-U74RH17QV-s5ErjiswQmzIzE_wWZ",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Cossaco. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1BtFHV7vgrOlmHjZSeR3oOLwBtR-SHD9d",
        "title": "Agachamento Dividido Profundo",
        "video": "1BtFHV7vgrOlmHjZSeR3oOLwBtR-SHD9d",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Dividido Profundo. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1In_CFrjwE8igWpKLnsdLbbMz-wKbNfFB",
        "title": "Agachamento Goblet com Kettlebell e Faixa Elástica",
        "video": "1In_CFrjwE8igWpKLnsdLbbMz-wKbNfFB",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Goblet com Kettlebell e Faixa Elástica. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1q_Feb4alcX8crD7bqnb57B5ossJ1Ni7z",
        "title": "Agachamento na Parede com Bola de Exercício",
        "video": "1q_Feb4alcX8crD7bqnb57B5ossJ1Ni7z",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento na Parede com Bola de Exercício. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1WFkDWi0UVACTOyX4HfSepa5nJtNX7l2c",
        "title": "Agachamento no Banco com Peso Corporal",
        "video": "1WFkDWi0UVACTOyX4HfSepa5nJtNX7l2c",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento no Banco com Peso Corporal. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1UH5lVPPPoel71koFTjmpAA7ke9hXsH4g",
        "title": "Agachamento Pistola com Apoio em Caixa",
        "video": "1UH5lVPPPoel71koFTjmpAA7ke9hXsH4g",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Pistola com Apoio em Caixa. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1p46VBXXWolG-kWWZxQU-4p3eOZWXUx7p",
        "title": "Agachamento Pistola na Caixa",
        "video": "1p46VBXXWolG-kWWZxQU-4p3eOZWXUx7p",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Pistola na Caixa. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1GgWijbUieFxDrqebo4xj1nVIPeyc-Ma_",
        "title": "Agachamento Skater",
        "video": "1GgWijbUieFxDrqebo4xj1nVIPeyc-Ma_",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Skater. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1JSIJjS8NWFQETs1u6rnBMOFAm9NduaLb",
        "title": "Agachamento Sumô sem Pesos",
        "video": "1JSIJjS8NWFQETs1u6rnBMOFAm9NduaLb",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento Sumô sem Pesos. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1zHQMmvozlvlW4P39vPh4Keeys-oY8Hhi",
        "title": "Agachamento unilateral cruzado",
        "video": "1zHQMmvozlvlW4P39vPh4Keeys-oY8Hhi",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento unilateral cruzado. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_199QKiTk4KrALNUtBVmPEywxi51jYJOuJ",
        "title": "Agachamento",
        "video": "199QKiTk4KrALNUtBVmPEywxi51jYJOuJ",
        "desc": "Demonstração visual em loop animado do exercício: Agachamento. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1MpxpVTYYB01ib7OLlCfXZD_tkm76rl1y",
        "title": "Andar de Bicicleta ao Ar Livre",
        "video": "1MpxpVTYYB01ib7OLlCfXZD_tkm76rl1y",
        "desc": "Demonstração visual em loop animado do exercício: Andar de Bicicleta ao Ar Livre. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1w9AvmUm9I9zRz-hBjHqS-qo_ju4f18ml",
        "title": "Arremesso de Bola de Reação",
        "video": "1w9AvmUm9I9zRz-hBjHqS-qo_ju4f18ml",
        "desc": "Demonstração visual em loop animado do exercício: Arremesso de Bola de Reação. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1boo_JE01SYaJShf-_czx8EKYgGSSZBN8",
        "title": "Arremesso de Medicina Bola com Levantamento de Tronco",
        "video": "1boo_JE01SYaJShf-_czx8EKYgGSSZBN8",
        "desc": "Demonstração visual em loop animado do exercício: Arremesso de Medicina Bola com Levantamento de Tronco. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1MUtEzi9qTF0aLqlHehkD4z2CttmaoLXk",
        "title": "Avanço com Joelho Alto em Cima da Bola Bosu",
        "video": "1MUtEzi9qTF0aLqlHehkD4z2CttmaoLXk",
        "desc": "Demonstração visual em loop animado do exercício: Avanço com Joelho Alto em Cima da Bola Bosu. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1ZHd5bCoAo5RoNjySqDI6BBXZIX7fGPL6",
        "title": "Avanço com Joelho Elevado em Caminhada",
        "video": "1ZHd5bCoAo5RoNjySqDI6BBXZIX7fGPL6",
        "desc": "Demonstração visual em loop animado do exercício: Avanço com Joelho Elevado em Caminhada. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1VtiR-hf2IZ8VQ9KNAEJqk2AzFXB4Bvmi",
        "title": "Avanço sem Peso Corporal",
        "video": "1VtiR-hf2IZ8VQ9KNAEJqk2AzFXB4Bvmi",
        "desc": "Demonstração visual em loop animado do exercício: Avanço sem Peso Corporal. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1676U54tPi8aJfh_J_kf7IA28TOmP-4rL",
        "title": "Balanço com gymstick",
        "video": "1676U54tPi8aJfh_J_kf7IA28TOmP-4rL",
        "desc": "Demonstração visual em loop animado do exercício: Balanço com gymstick. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1MDFo04R9Nvx7_npUqo8HN_jnkuZZsq9x",
        "title": "Balloon Drill",
        "video": "1MDFo04R9Nvx7_npUqo8HN_jnkuZZsq9x",
        "desc": "Demonstração visual em loop animado do exercício: Balloon Drill. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1XB23yIWUYKsG33pmjfeV7rd7zzOOtbF7",
        "title": "Bola medicinal lançada para cima e para baixo",
        "video": "1XB23yIWUYKsG33pmjfeV7rd7zzOOtbF7",
        "desc": "Demonstração visual em loop animado do exercício: Bola medicinal lançada para cima e para baixo. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1Xgj8YZC2o7AvWUNyk9WvFJ3tqj9MNq_K",
        "title": "Bola na parede",
        "video": "1Xgj8YZC2o7AvWUNyk9WvFJ3tqj9MNq_K",
        "desc": "Demonstração visual em loop animado do exercício: Bola na parede. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1_a6a-S-s0KEs5N-OLIjrM9XC1SMFriMB",
        "title": "Bom Dia com Faixa Elástica de Resistência",
        "video": "1_a6a-S-s0KEs5N-OLIjrM9XC1SMFriMB",
        "desc": "Demonstração visual em loop animado do exercício: Bom Dia com Faixa Elástica de Resistência. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1Jxx_Deh7tteL-xVsbUkhs2Mh3o8jLrF8",
        "title": "Boxe jab",
        "video": "1Jxx_Deh7tteL-xVsbUkhs2Mh3o8jLrF8",
        "desc": "Demonstração visual em loop animado do exercício: Boxe jab. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_10eLOIJ-0lKobdXmqReu3gVAF6tDiA-Se",
        "title": "Boxe Sombra",
        "video": "10eLOIJ-0lKobdXmqReu3gVAF6tDiA-Se",
        "desc": "Demonstração visual em loop animado do exercício: Boxe Sombra. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_11V-LoRCNaI248HQg_OE2_gavFODPXv89",
        "title": "Burpees",
        "video": "11V-LoRCNaI248HQg_OE2_gavFODPXv89",
        "desc": "Demonstração visual em loop animado do exercício: Burpees. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1LRkoXskkX8R-FKXtthd2ccokuS4Cpwd7",
        "title": "Caminhada Lateral com Faixa de Resistência",
        "video": "1LRkoXskkX8R-FKXtthd2ccokuS4Cpwd7",
        "desc": "Demonstração visual em loop animado do exercício: Caminhada Lateral com Faixa de Resistência. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1zW95HJbcCgBOlrfOgFSFwWdEKuil92k2",
        "title": "Caminhada Rápida",
        "video": "1zW95HJbcCgBOlrfOgFSFwWdEKuil92k2",
        "desc": "Demonstração visual em loop animado do exercício: Caminhada Rápida. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1pxls9VsERHDzBg3TIyQnwTtFrLdwvjug",
        "title": "Caminhar",
        "video": "1pxls9VsERHDzBg3TIyQnwTtFrLdwvjug",
        "desc": "Demonstração visual em loop animado do exercício: Caminhar. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    },
    {
        "id": "gif_1WqTDuyEUSCBIxVeb5BhIOmHcTdcFuQv5",
        "title": "Cardio de Passos de Boxeador",
        "video": "1WqTDuyEUSCBIxVeb5BhIOmHcTdcFuQv5",
        "desc": "Demonstração visual em loop animado do exercício: Cardio de Passos de Boxeador. Use para ajustar sua postura e entender a amplitude do movimento.",
        "tip": "Observe a inclinação das costas, o alinhamento dos joelhos e quadril no GIF antes de realizar o exercício."
    }
]
        }
    ]
};


// ESTADO GLOBAL DO APLICATIVO
let currentModuleIndex = 0;
let currentSubmoduleIndex = 0; // Para Calistenia (Semanas)
let currentLessonIndex = 0;
let searchQuery = "";

// ELEMENTOS DOM
const modulesContainer = document.getElementById("modules-tabs");
const submodulesContainer = document.getElementById("submodules-tabs");
const lessonsContainer = document.getElementById("lessons-container");

const playerSection = document.getElementById("player-section");
const videoPlayer = document.getElementById("video-player");
const gifPlayer = document.getElementById("gif-player");
const videoWrapper = document.getElementById("video-wrapper");
const gifWrapper = document.getElementById("gif-wrapper");

const displayModule = document.getElementById("display-lesson-module");
const displayTitle = document.getElementById("display-lesson-title");
const displayDesc = document.getElementById("display-lesson-desc");
const displayConceptText = document.getElementById("display-concept-text");

// ELEMENTOS DE ORIENTAÇÃO PARA GESTANTES
const pregnancyAlert = document.getElementById("pregnancy-alert");
const pregnancyIcon = document.getElementById("pregnancy-icon");
const pregnancyTitle = document.getElementById("pregnancy-title");
const pregnancyText = document.getElementById("display-pregnancy-text");

// ELEMENTOS DE BUSCA (Apenas para GIFs)
const searchContainer = document.getElementById("search-container");
const searchInput = document.getElementById("search-input");

// INICIALIZAR MÓDULOS NO TOPO / SIDEBAR
function renderModules() {
    modulesContainer.innerHTML = "";
    DATABASE.modules.forEach((mod, idx) => {
        const btn = document.createElement("button");
        btn.className = `module-btn ${idx === currentModuleIndex ? "active" : ""}`;
        btn.innerHTML = `
            <span class="module-title-text">${mod.title}</span>
        `;
        btn.addEventListener("click", () => {
            selectModule(idx);
        });
        modulesContainer.appendChild(btn);
    });
}

// SELECIONAR MÓDULO
function selectModule(idx) {
    currentModuleIndex = idx;
    currentSubmoduleIndex = 0;
    currentLessonIndex = 0;
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    
    renderModules();
    renderSubmodulesAndLessons();
}

// RENDERIZAR SUBMÓDULOS E AULAS
function renderSubmodulesAndLessons() {
    const mod = DATABASE.modules[currentModuleIndex];
    
    // Mostrar/Esconder busca
    if (mod.type === "gif") {
        searchContainer.classList.remove("hidden");
    } else {
        searchContainer.classList.add("hidden");
    }

    // Configurar sub-abas se houver (como Weeks no Desafio Calistenia)
    if (mod.submodules) {
        submodulesContainer.classList.remove("hidden");
        submodulesContainer.innerHTML = "";
        mod.submodules.forEach((sub, idx) => {
            const btn = document.createElement("button");
            btn.className = `submodule-btn ${idx === currentSubmoduleIndex ? "active" : ""}`;
            btn.innerText = sub.title;
            btn.addEventListener("click", () => {
                currentSubmoduleIndex = idx;
                currentLessonIndex = 0;
                renderSubmodulesAndLessons();
            });
            submodulesContainer.appendChild(btn);
        });
        
        renderLessons(mod.submodules[currentSubmoduleIndex].lessons);
    } else {
        submodulesContainer.classList.add("hidden");
        submodulesContainer.innerHTML = "";
        renderLessons(mod.lessons);
    }
}

// RENDERIZAR AULAS NA SIDEBAR
function renderLessons(lessons) {
    lessonsContainer.innerHTML = "";
    
    let filtered = [...lessons];
    
    // Aplicar filtro de busca se houver
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(l => l.title.toLowerCase().includes(query) || l.desc.toLowerCase().includes(query));
    }
    
    if (filtered.length === 0) {
        lessonsContainer.innerHTML = '<li class="no-results">Nenhum exercício encontrado.</li>';
        // Limpar player se não houver resultados
        clearPlayer();
        return;
    }
    
    filtered.forEach((lesson, index) => {
        const li = document.createElement("li");
        
        // Encontrar índice real no array original
        const realIndex = lessons.findIndex(l => l.title === lesson.title);
        const isActive = realIndex === currentLessonIndex;
        
        li.className = `lesson-item ${isActive ? "active" : ""}`;
        
        const icon = getLessonIcon();
        
        li.innerHTML = `
            <span class="lesson-icon">${icon}</span>
            <span class="lesson-title-text">${lesson.title}</span>
        `;
        
        li.addEventListener("click", () => {
            currentLessonIndex = realIndex;
            // Re-renderizar lista para mudar o active class
            renderLessons(lessons);
            updatePlayerContent(lesson);
        });
        
        lessonsContainer.appendChild(li);
        
        // Auto-selecionar o primeiro no carregamento
        if (index === 0 && isActive) {
            updatePlayerContent(lesson);
        }
    });
}

function getLessonIcon() {
    const type = DATABASE.modules[currentModuleIndex].type;
    if (type === "youtube") return "⚡";
    if (type === "drive") return "🎬";
    return "🏃";
}

function clearPlayer() {
    videoPlayer.src = "";
    gifPlayer.src = "";
    displayTitle.innerText = "Nenhum item selecionado";
    displayDesc.innerText = "";
    displayConceptText.innerText = "";
    if (pregnancyAlert) pregnancyAlert.classList.add("hidden");
}

// ATUALIZAR ORIENTAÇÃO DE GESTANTES DINA MICAMENTE
function updatePregnancyWarning(lesson) {
    if (!pregnancyAlert) return;

    const mod = DATABASE.modules[currentModuleIndex];
    pregnancyAlert.classList.remove("hidden");
    pregnancyAlert.classList.remove("safe", "warning", "danger");

    if (mod.id === "m2") {
        // Módulo 2: Cadeira (Iniciantes)
        pregnancyAlert.classList.add("safe");
        pregnancyIcon.innerText = "🤰 ✅";
        pregnancyTitle.innerText = "Recomendado para Gestantes";
        pregnancyText.innerText = "Excelente escolha! Este treino adaptado na cadeira é de baixo impacto, seguro e ideal para manter a mobilidade e circulação de forma estável.";
    } else if (mod.id === "m1") {
        // Módulo 1: Calistenia
        pregnancyAlert.classList.add("warning");
        pregnancyIcon.innerText = "🤰 ⚠️";
        pregnancyTitle.innerText = "Atenção para Gestantes";
        pregnancyText.innerText = "Requer cuidados e adaptações. Evite pranchas abdominais muito longas, saltos ou qualquer movimento de alta intensidade que cause desconforto.";
    } else if (mod.id === "m3") {
        // Módulo 3: Condicionamento
        pregnancyAlert.classList.add("warning");
        pregnancyIcon.innerText = "🤰 ⚠️";
        pregnancyTitle.innerText = "Atenção para Gestantes";
        pregnancyText.innerText = "Treine em ritmo moderado (você deve conseguir falar sem perder o fôlego). Evite saltos e não realize treinos até a exaustão extrema.";
    } else if (mod.id === "m4") {
        // Módulo 4: GIFs / Biblioteca
        const name = lesson.title.toLowerCase();
        
        // Contraindicados (Esforço extremo, impacto ou quedas)
        const isContraindicated = name.includes("salto") || 
                                  name.includes("burpee") || 
                                  name.includes("lever") || 
                                  name.includes("bandeira") || 
                                  name.includes("dips") || 
                                  name.includes("parada de mão") || 
                                  name.includes("flexão") || 
                                  name.includes("abdominal") || 
                                  name.includes("prancha") ||
                                  name.includes("pulo");
                                  
        // Totalmente seguros (Baixo impacto, localizado, alongamentos)
        const isSafe = name.includes("abdução") || 
                       name.includes("adução") || 
                       name.includes("alongamento") || 
                       name.includes("caminha") || 
                       name.includes("cardio de passos") ||
                       name.includes("andar") || 
                       name.includes("sentado") || 
                       name.includes("panturrilha") ||
                       name.includes("mobilidade");

        if (isContraindicated) {
            pregnancyAlert.classList.add("danger");
            pregnancyIcon.innerText = "🤰 ❌";
            pregnancyTitle.innerText = "Contraindicado para Gestantes";
            pregnancyText.innerText = "Não recomendado. Este exercício exige esforço abdominal extremo, impacto elevado ou risco de desequilíbrio e quedas.";
        } else if (isSafe) {
            pregnancyAlert.classList.add("safe");
            pregnancyIcon.innerText = "🤰 ✅";
            pregnancyTitle.innerText = "Seguro para Gestantes";
            pregnancyText.innerText = "Exercício seguro de baixo impacto. Ótimo para fortalecimento localizado, alongamento ou circulação ativa.";
        } else {
            pregnancyAlert.classList.add("warning");
            pregnancyIcon.innerText = "🤰 ⚠️";
            pregnancyTitle.innerText = "Moderado para Gestantes";
            pregnancyText.innerText = "Exercício de força geral. Se for realizar, faça de forma controlada, respire de forma contínua (nunca prenda a respiração) e evite pressões extremas.";
        }
    }
}

// ATUALIZAR CONTEÚDO DO PLAYER E TEXTO
function updatePlayerContent(lesson) {
    const mod = DATABASE.modules[currentModuleIndex];
    
    displayModule.innerText = mod.title;
    displayTitle.innerText = lesson.title;
    displayDesc.innerText = lesson.desc;
    displayConceptText.innerText = lesson.tip;
    
    updatePregnancyWarning(lesson);
    
    if (mod.type === "youtube") {
        gifWrapper.classList.add("hidden");
        videoWrapper.classList.remove("hidden");
        videoPlayer.src = `https://www.youtube-nocookie.com/embed/${lesson.video}?rel=0&modestbranding=1`;
        gifPlayer.src = "";
    } else if (mod.type === "drive") {
        gifWrapper.classList.add("hidden");
        videoWrapper.classList.remove("hidden");
        videoPlayer.src = `https://docs.google.com/file/d/${lesson.video}/preview`;
        gifPlayer.src = "";
    } else if (mod.type === "gif") {
        videoWrapper.classList.add("hidden");
        gifWrapper.classList.remove("hidden");
        videoPlayer.src = "";
        gifPlayer.src = `https://docs.google.com/uc?id=${lesson.video}`;
    }
}

// INICIALIZADORES
function initEvents() {
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            currentLessonIndex = 0; // Resetar para o primeiro resultado
            const mod = DATABASE.modules[currentModuleIndex];
            renderLessons(mod.lessons);
        });
    }
}

function init() {
    // Verificar protocolo file://
    if (window.location.protocol === 'file:') {
        const warningModal = document.getElementById("protocol-warning");
        if (warningModal) {
            warningModal.classList.remove("hidden");
        }
    }
    
    renderModules();
    selectModule(0);
    initEvents();
}

window.onload = init;
