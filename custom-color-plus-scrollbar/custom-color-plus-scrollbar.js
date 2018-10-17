var config = {
        container: "#OrganiseChart1",
        rootOrientation:  'WEST', // NORTH || EAST || WEST || SOUTH
        // levelSeparation: 30,
        siblingSeparation:   20,
        subTeeSeparation:    60,
        scrollbar: "fancy",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    ceo = {
        text: {
            name: "Ensino Fundamental",
            description: "Possui os conhecimentos supostos após o nono ano do fundamental",
        },

        HTMLid: "ceo"
    },

    cto = {
        parent: ceo,
        text:{
            name: "Ensino medio",
            descrption: "Curriculo basico MEC, representa os conhecimentos supostos após o terceiro ano do ensino medio",
        },
        stackChildren: true,

        HTMLid: "coo"
    },
    cbo = {
        parent: ceo,
        text:{
            name: "Ensino Tecnico - edificações - concomitante",
            description: "Desenho técnico, normas ISO de concreto armado e segurança, autocad",
        },

        HTMLid: "cbo"
    },
    cdo = {
        parent: ceo,
        text:{
            name: "Ensino Tecnico - estruturas navais - subsequente",
            description: "Desenho técnico, normas ISO de metrologia e segurança, solidWorks",
        },

        HTMLid: "cdo"
    },
    cio = {
        parent: cto,
        text:{
            name: "Pré-vestibular",
            description: "O que é um mol de moleculas, como funciona o log, quais os rios que desaguam no amazonas"
        },

        HTMLid: "cio"
    },
    ciso = {
        parent: cio,
        text:{
            name: "Faculdade - ciência da computação",
            description: "Jogos, sites, aplicativos, demonstrações logicas e hackatons",
        },

        HTMLid: "ciso"
    },
    cio2 = {
        parent: cdo,
        text:{
            name: "Especialista em solda com eletrodo revestido",
            description: "O que é isso? Nem eu sei, se quiser saber, venha."
        },
        link: {
            href: "http://www.google.com",
            target: "_blank"
        },

        HTMLid: "cio2"
    },
   ciso3 = {
        parent: cbo,
        text:{
            name: "Pré-vestibular comunitario",
            description: "Ensinado pelos que ja passaram"
        },

        HTMLid: "ciso2"
    },
    ciso4 = {
        parent: cbo,
        text:{
            name: "Especialista em concreto protendido",
            title: "Vãos longos sem colunas são possiveis, com esta tecnica que agrada arquitetos"
        },

        HTMLid: "ciso2"
    }

    ALTERNATIVE = [
        config,
        ceo,
        cto,
        cbo,
        cdo,
        cio,
        ciso,
        cio2,
        ciso3,
        ciso4
    ];
