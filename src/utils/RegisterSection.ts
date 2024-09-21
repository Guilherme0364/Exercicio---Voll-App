const Section = [
    {
        id: 1,
        title: "Insira alguns dados básicos:",
        textEntry: [
            {
                id: 1,
                label: "Nome",
                placeholder: "Digite seu nome completo:"
            },
            {
                id: 2,
                label: "Email",
                placeholder: "Digite seu email:"
            },
            {
                id: 3,
                label: "Senha",
                placeholder: "Digite sua senha:"
            },
            {
                id: 4,
                label: "Confirme sua senha",
                placeholder: "Digite sua senha novamente:"
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
                placeholder: "Digite seu CEP:"
            },
            {
                id: 2,
                label: "Endereço",
                placeholder: "Digite seu endereço:"
            },
            {
                id: 3,
                label: "Número",
                placeholder: "Digite seu número:"
            },
            {
                id: 4,
                label: "Complemento",
                placeholder: "Digite o complemento do endereço:"
            },
            {
                id: 5,
                label: "Telefone",
                placeholder: "Digite o seu telefone:"
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