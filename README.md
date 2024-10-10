# OsmanMovies123
<br />

## Bruk av API
Vi har brukt OMDB API for å hente informasjon om filmer basert på brukersøk. API-et gir tilgang til detaljer som tittel, år, regissør, sjanger, plott og filmplakat. Vi har også brukt API-et til å hente anbefalte filmer basert på søket.

<br />
<br />

## Søkefunksjon
Søkefunksjonen er laget ved hjelp av JavaScript. Når brukeren skriver inn et søk, sendes en forespørsel til OMDB API for å hente informasjon om filmen. Resultatet vises i en dedikert seksjon på nettsiden. Vi har brukt debouncing for å redusere antall API-kall ved å vente til brukeren har sluttet å skrive før søket utføres. Søket er nå instant, noe som betyr at resultatene vises mens brukeren skriver.

<br />

## Søking av anbefalinger
Anbefalingene er laget ved å sende en ny forespørsel til OMDB API basert på tittelen til den søkte filmen. Anbefalte filmer vises i en grid-layout under hovedfilminformasjonen. Hver anbefalt film er klikkbar, og ved klikk oppdateres hovedfilminformasjonen uten å fjerne anbefalingene.

<br />

## Håndtering av Manglende Plakater
For å håndtere tilfeller der filmplakater mangler, bruker vi en plassholderbilde. Dette sikrer at layouten forblir konsistent selv om enkelte filmer ikke har tilgjengelige plakater.

<br />

## Oppdatering av Brukergrensesnitt
Vi har lagt til logoer på begge sider av overskriften i headeren. Logoen til høyre er speilvendt for å skape en balansert visuell effekt. Dette ble oppnådd ved å bruke CSS-transformasjon.

<br />

## Utfordringer
Manglende Plakater: Noen filmer mangler plakatbilder i API-responsen. Dette ble håndtert ved å bruke en plassholderbilde når plakatbildet ikke er tilgjengelig.
Asynkron Databehandling: Håndtering av asynkrone API-kall og oppdatering av brukergrensesnittet uten å forstyrre brukeropplevelsen var en utfordring som ble løst ved å bruke loading indikatorer og debouncing.
Kompetansemål i Oppgaven
Fordeler og Ulemper ved Programmeringsspråk
Vi valgte JavaScript for denne oppgaven på grunn av dets brede støtte for webutvikling og dets evne til å håndtere asynkrone operasjoner effektivt. JavaScript er også godt støttet av moderne nettlesere og har et stort økosystem av biblioteker og verktøy.

<br />

## Funksjonelle Krav til IT løsning
#### Basert på behovskartlegging, ble følgende funksjonelle krav definert:
- Brukeren skal kunne søke etter filmer.
- Filminformasjon skal vises tydelig og oversiktlig.
- Anbefalte filmer skal vises basert på søket.
- Brukergrensesnittet skal være responsivt og brukervennlig.
- Logoer skal vises på begge sider av overskriften i headeren.
