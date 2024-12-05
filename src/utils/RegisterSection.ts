const Section = [
    {
        id: 1,
        title: "Insira alguns dados básicos:",
        textEntry: [
            {
                id: 1,
                label: "Nome",
                placeholder: "Digite seu nome completo:",
                secureTextEntry: false,
                name: "nome"
            },
            {
                id: 2,
                label: "Email",
                placeholder: "Digite seu email:",
                secureTextEntry: false,
                name: "email"
            },
            {
                id: 3,
                label: "Senha",
                placeholder: "Digite sua senha:",
                secureTextEntry: true,
                name: "senha"        
            },
            {
                id: 4,
                label: "Confirme sua senha",
                placeholder: "Digite sua senha novamente:",
                secureTextEntry: true,
                name: "confirmaSenha"
            },
            {
                id: 5,
                label: "CPF",
                placeholder: "Digite seu CPF:",
                secureTextEntry: false,
                name: "cpf"
            },
            {
                id: 6,
                label: "Imagem",
                placeholder: "Coloque sua foto de perfil por link:",
                secureTextEntry: false,
                name: "imagem"
            },
        ],
        checkbox: []
    },
    {
        id: 2,
        title: "Agora, mais alguns dados sobre você: ",
        textEntry: [
            {
                id: 1,
                label: "CEP",
                placeholder: "Digite seu CEP:",
                secureTextEntry: false,
                name: "cep"
            },
            {
                id: 2,
                label: "Rua",
                placeholder: "Digite sua rua:",
                secureTextEntry: false,
                name: "rua"
            },
            {
                id: 3,
                label: "Número",
                placeholder: "Digite seu número:",
                secureTextEntry: false,
                name: "numero"
            },
            {
                id: 4,
                label: "Complemento",
                placeholder: "Digite o complemento do endereço:",
                secureTextEntry: false,
                name: "complemento"
            },
            {
                id: 5,
                label: "Telefone",
                placeholder: "Digite o seu telefone:",
                secureTextEntry: false,
                name: "telefone"
            },
            {
                id: 6,
                label: "Estado",
                placeholder: "Digite o seu estado:",
                secureTextEntry: false,
                name: "estado"
            },
        ],
        checkbox: []
    },
    {
        id: 3,
        title: "Para finalizar, qual é seu plano de saúde? ",
        entryText: [],
        checkbox: [
            {
                id: 1,
                text: "Sulamérica"
            },
            {
                id: 2,
                text: "Unimed"
            },
            {
                id: 3,
                text: "Bradesco"
            },
            {
                id: 4,
                text: "Amil"
            },
            {
                id: 5,
                text: "Biosaúde"
            },
            {
                id: 6,
                text: "Biovida"
            },
            {
                id: 7,
                text: "Outros"
            },
            {
                id: 8,
                text: "Não tenho plano"
            },
        ]
    }
]

export { Section }