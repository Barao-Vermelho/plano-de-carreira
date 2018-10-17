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
        link: {
            href: "http://guiadoestudante.abril.com.br/profissoes/ciencia-da-computacao/",
            target: "_blank"
        },

        HTMLid: "cio"
    },
    ciso = {
        parent: cio,
        text:{
            name: "Faculdade - ciência da computação",
            description: "Jogos, sites, aplicativos, demonstrações logicas e hackatons",
        },
        link: {
            href: "http://guiadoestudante.abril.com.br/blog/melhores-faculdades/os-11-melhores-cursos-de-ciencia-da-computacao-do-brasil/",
            target: "_blank"
        },

        HTMLid: "ciso"
    },
   ciso3 = {
        parent: cbo,
        text:{
            name: "Pré-vestibular comunitario",
            description: "Ensinado pelos que ja passaram"
        },

        HTMLid: "ciso2"
    },
    carreira = {
	    parent: ciso,
	    text:{
		    name: "Desenvolvedor Senior",
		    description: "Conhecedor das escovas de bits do C, dos padrões de projeto de java, dos parenteses de lisp e das locuras de python"
	    }
    }
    ALTERNATIVE = [
        config,
        ceo,
        cto,
        cbo,
        cdo,
        cio,
        ciso,
        ciso3,
	carreira
    ];
