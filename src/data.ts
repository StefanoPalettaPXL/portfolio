/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const activityData = [
  {
    category: "Innovatie",
    projects: [
      {
        title: "Innovatieroute Cloud & Security",
        description: "Een boeiende workshop waarbij deelnemers worden meegenomen op een reis door de wereld van cybersecurity, van Zero Trust Network Access (ZTNA) naar Secure Access Service Edge (SASE).",
        location: "Gebouw G, lokaal G412b, Exclusive Networks / Fortinet",
        date: "28/09/2023 09:00 - 16:00u"
      },
      {
        title: "Penetration Testing",
        description: "Een seminarie dat deelnemers meeneemt op een verkenning van Ethical Hacking, met praktische toepassingen, inclusief real-world scenario's en het gebruik van hacking tools en technieken.",
        location: "Gebouw G, lokaal G412b, The Security Factory",
        date: "05/10/2023 09:00 - 16:00u"
      },
      {
        title: "DevSecOps",
        description: "Een workshop over DevSecOps, waarbij hands-on met GitLab, Terraform, Docker, Kubernetes en Helm wordt gewerkt. Configuraties maken, beveiligingsgerelateerde problemen ontdekken en oplossen met tools zoals Trivy, Gatekeeper en Nikto, met als uiteindelijk doel het laten draaien van een eenvoudige website op een Kubernetes-cluster.",
        location: "Gebouw G, lokaal G412b, Exclusive Networks / Fortinet",
        date: "28/09/2023 09:00 - 16:00u"
      },
      {
        title: "Hackathon Pitch Please",
        description: "Tijdens de hackathon moesten teams een probleem uitkiezen en er een oplossing voor bedenken om te pitchen voor de jury en andere teams. De top 3 teams wonnen prijzen, waaronder Hasseltbonnen en desk organizers.",
        location: "Hasselt, Kempische Steenweg 293, Cegeka",
        date: "01/12/2023 16:00 - 00:00u"
      }
    ]
  },
  {
    category: "Persoonlijke ontwikkeling",
    projects: [
      {
        title: "Projectweek",
        description: "Tijdens de projectweek verkenden we diverse domeinen zoals persoonlijke ontwikkeling, onderzoekend en ondernemend handelen. De activiteiten omvatten onder andere teamwork, professioneel netwerken, reflectie, en het begrip van onderzoek in relatie tot de opleiding.",
        location: "Gebouw B, lokaal B353, PXL",
        date: "13/02/2023 - 17/02/2023 08:30 - 17:30u"
      },
      {
        title: "POP-sessies",
        projects: [
          {
            title: "My Team and I",
            description: "Tijdens de POP-sessie leerden we ons team beter kennen aan de hand van fysieke activiteiten. Vervolgens vulden we een blad in waarin ons werd gevraagd wat volgens ons de belangrijkste aspecten zijn binnen een team.",
            location: "Corda, iSpace, PXL",
            date: "18/10/2023 15:30 - 17:30u"
          },
          {
            title: "Brein aan het werk! Niet storen!",
            description: "Tijdens de POP-sessie duiken we diep in het digitale tijdperk, onderzoeken we hoe constant online zijn onze hersenen beïnvloedt en verkennen we strategieën om efficiënter te werken in deze snel veranderende wereld.",
            location: "Gebouw B, lokaal B123, PXL",
            date: "21/02/2023 8:30u"
          },
          {
            title: "POPping",
            description: "Tijdens de POP-sessie werken we in groep aan het versterken van zelfinzicht en groepsdynamiek, waarbij we feedback geven en ontvangen en een persoonlijk ontwikkelingsplan opstellen om met meer veerkracht je opleiding en toekomstige carrière aan te pakken.",
            location: "Gebouw B, lokaal B122, PXL",
            date: "21/02/2023 10:30u"
          }
        ]
      }
    ]
  },
  {
    category: "Seminaries",
    projects: [
      {
        title: "AE: Application observability",
        description: "Het seminarie over application observability legde de nadruk op het monitoren en traceren van de prestaties en gedrag van applicaties gebruikmakend van tools zoals logging en tracing. Het benadrukte het belang van proactieve identificatie en oplossing van problemen om de gezondheid, betrouwbaarheid en prestaties van applicaties te garanderen.",
        location: "Gebouw B, B122, AE",
        date: "08/11/2023 13:30 - 17:30u"
      },
      {
        title: "Cegeka: Dark launches and gradual release",
        description: "Het seminarie over dark launches en gradual release benadrukte het belang van het geleidelijk uitrollen van wijzigingen om risico's te verminderen. Door middel van dark launches kunnen nieuwe functies worden getest en feedback worden verzameld voordat ze volledig worden uitgerold.",
        location: "Gebouw B, B122, Cegeka",
        date: "15/11/2023 13:30 - 17:30u"
      },
      {
        title: "IBM: Quantum computing, een demystificatie",
        description: "Het seminarie over quantum computing benadrukte de complexiteit van problemen waar klassieke computers tekortschieten en legde uit hoe quantumcomputers, met hun qubits in plaats van bits, exponentieel meer dimensies kunnen bereiken. Toepassingen omvatten simulaties van quantumsystemen, kunstmatige intelligentie en optimalisatieproblemen zoals portfolio-optimalisatie en risicoanalyse.",
        location: "Gebouw B, B123, IBM",
        date: "13:30 - 17:00u"
      },
      {
        title: "ACA group: OWASP Top Ten risico's",
        description: "Het seminarie over de OWASP Top 10 behandelde de meest kritieke beveiligingsrisico's in webapplicaties. Deze risico's omvatten onder meer onjuiste invoervalidatie, kwetsbaarheden voor beveiligingsaanvallen zoals SQL-injectie en cross-site scripting, en onvoldoende authenticatie en sessiebeheer.",
        location: "Gebouw B, B124, ACA group",
        date: "29/11/2023 13:30 - 16:30u"
      },
      {
        title: "Accenture: Prototyping van een full-stack applicatie",
        description: "Het seminarie over het prototypen van een full-stack applicatie gaf inzicht in het proces van het snel ontwikkelen van een werkend prototype van een softwaretoepassing. Het benadrukte het belang van het gebruik van tools en frameworks die het mogelijk maken om zowel de front-end als de back-end van de applicatie efficiënt te ontwikkelen.",
        location: "Gebouw G, G414, Accenture",
        date: "28/02/2023 09:00 - 12:00u"
      },
      {
        title: "IT Licious: Flutter",
        description: "Het seminarie over Flutter bood inzicht in de ontwikkeling van mobiele applicaties met behulp van het Flutter-framework. Het benadrukte de voordelen van Flutter zoals de mogelijkheid om één codebase te gebruiken voor zowel iOS als Android, het snelle ontwikkelingsproces en de aanpasbaarheid van de gebruikersinterface.",
        location: "Gebouw G, G410, IT Licious",
        date: "14/03/2023 09:00 - 12:00u"
      },
      {
        title: "BIQ: Het nut van clean code, pull requests en code review in een product development lifecycle",
        description: "In het seminarie werd benadrukt dat duidelijke requirements essentieel zijn om interpretatiefouten te vermijden. Daarnaast werd het belang van code reviews door collega-ontwikkelaars, het schrijven van schone code volgens principes zoals die van Uncle Bob, en het belang van kleine, iteratieve commits benadrukt voor een effectieve productontwikkelingscyclus.",
        location: "Gebouw G, G412a, BIQ",
        date: "25/04/2023 09:00 - 12:00u"
      },
      {
        title: "Jidoka: Svelte",
        description: "Het seminarie over Svelte bood een inzicht in het gebruik van het Svelte-framework voor het bouwen van webapplicaties. Het benadrukte de unieke aanpak van Svelte waarbij de code tijdens het bouwproces wordt omgezet in efficiënte JavaScript zonder de noodzaak van een virtuele DOM.",
        location: "Gebouw G, G414, Jidoka",
        date: "09/05/2023 09:00 - 11:00u"
      }
    ]
  }
];
  
export const BtnList = [
    { label: "About", link: "/about", icon: "about", newTab: false },
    { label: "Activities", link: "/activities", icon: "activities", newTab: false },
    { label: "Contact", link: "/contact", icon: "contact", newTab: false },
    {
      label: "Github",
      link: "https://github.com/StefanoPalettaPXL",
      icon: "github",
      newTab: true,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/stefano-paletta-140321255/",
      icon: "linkedin",
      newTab: true,
    }
  ];
  
  