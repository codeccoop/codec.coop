---
title: "Hello, Yunohost: DNS"
layout: post
author: lucas
categories: autoallotjament
---

### DNS

El primer que hem d'entendre és que les xarxes no entenen de paraules. Si intentem
llançar un paquet http a internet amb l'adreça example.com com a destí, ningú no
es donarà per aludit. A nivell de xarxa, les adreces es representen de forma numérica,
43.128.0.10, per exemple, i s'anomenen adreces IP, d'Internet Protocol. A les màquines
se'ls hi dona molt bé memoritzar números, però a nosaltres, els humans, ens costa
una micona més, així que ens vam inventar una forma semàntica de representat aquestes
adreces, com per exemple, example.com. A aquesta forma de representar adreces ip
l'anomenem *nom de domini*, o domini. Internet és molt més fàcil de navegar quan
has de buscar coses com popper-online.es que 185.240.248.86, però necessitem que
algú tradueixi la nostra cerca a la seva representació numérica abans de començar
a tirar a la xarxa els nostres paquets d'informació. Aquí és on entran en joc els
servidors de DNS.

Els servidors de DNS són, a grans trets, servidors connectats a la xarxa on s'hi
emmagatzemen taules. En aquestes taules, si recullen adreces ip per una banda,
i per l'altre, dominis web. Quan fem una petició a través d'internet d'un
domini concret (example.com), el primer pas de tots es preguntar, a algun d'aquests
servidors, quina és la ip associada a aquest domini. En cas que aquest no ho sàpiga,
s'encarregarà de repreguntar als seus compiyoguis si coneixen l'adreça, i aquests
als seus respectius compiyoguis, fins que algú li aconsegueixi donar la resposta
correcta, moment en el que, s'apuntarà a les seves taules de contabilitat la informàció,
i després ens la retornarà a nosaltres. Quan el nostre programari rep aquesta informació
es quan està llest per enviar la petició allà on l'hagi d'enviar. A partir d'aquest
moment és quan comença realment la nostra connexió amb el servidor que allotja la
informació que volem consultar.

En general aquests serveis estan pensats per a enmagatzemar informació prou estable.
Partint d'aquesta premisa, adopten estratègies com les de guardar en la memoria cau
quina ha sigut l'última resposta que han retornat a la consulta d'informació associada
a un domini concret, i retornar-la automàticament, sense haver de tornar a baixar
a la sala d'arxiu on tenen les seves taules emmagatzemades, o haver de tornar a preguntar
per la informació a altres servidors DNS. Aquesta estratègia, quan s'implementa de
forma federada amb la resta de servidors, aconsegueix que la informació associada
a un domini es propagi per la xarxa i sigui facilment accessible desde qualsevol
banda, a costa de fer molt lent el procés d'actualització de la mateixa, ja que implica
haver d'actualitzar la memoria cau de tots els servidors DNS que l'han recollida.

### DNS dinàmica

## Introducció

Tot comença amb un grup de veïnes que un bon dia van decidir organitzar-se
per tirar endavant un **projecte de cohabitatge en cessió d'ús**. Per a qui no
ho conegui i li piqui la curiositat, cohabitatge en cessió d'ús és una formula
xaxipiruli d'accedir a l'habitatge de forma cooperativa i només a l'abast de
les clases mitges progres, en cas que vulguis pujar-te al carro avui en dia,
però amb possibilitat de transformar (una mica) el dret a l'habitatge si la
solució s'esten, madura i aconsegueix el suport jurídic i institucional necessari.
Per a més informació, truqueu a la porta de la [dinamo](https://ladinamofundacio.org/),
o de [sostre cívic](https://sostrecivic.coop/), que, entre molts altres, estan
bregant per portar a bon port aquest assumpte, i segur que us ho expliquen millor
que jo.

El cas és que aquesta gent havient estat utilitzant el servei de Google Groups
per enviar-se correus entre les persones membres de l'organització però,
*oh xorprexa*, resulta que Google, després d'haver aconseguit, de facto, un
monopoli sobre els correus electrònics personals, ara no deixa accedir a les
seves llistes de correus a ningú que no disposi d'un correu gmail. Com que,
*rara avis*, hi havia un parell de persones que no disposaven de correu
electrònic gmail, la comunicació no fluia com havia de fluir. Aquí apareixo jo,
havent identificat una finestra d'oportunitat per demostrar que això de la
informàtica mola (sale mal), i em proposo per muntar un servidor
autoallotjat que pugui suplir les mancances de Google, i de pas, evitar que
l'activitat veinal alimenti els engranatges de la industria d'extracció de dades
més gran del món.

### SMTP

Diu Klinenber a un [article de la directa](https://directa.cat/inventar-la-biblioteca-en-una-societat-com-lactual-seria-massa-radical/)
que *"Inventar la biblioteca en una societat com l'actual seria massa radical"*
ja que seria tatxada de comunista i d'atentar contra la lliberat de mercat.
Algo similar passa amb el correu electrònic. Aquest funciona utilitzant el
protocol SMTP. Aquest protocol neix l'any 1980, abans inclús de l'invenció
d'internet, i neix com un llenguatge universal i obert que permet una comunicació
federada entre els diferents i diversos agents que puguin operar en xarxa, sense
discriminar en funció de des de quin punt en connectis, quin sigui el teu proveidor
d'internet, o quina empresa hi hagi al darrere del teu servei de correu electrònic.
Avui en dia, quan internet ha sigut parcelat en grans dominis propietat d'empreses
que els exploten com a granges de dades i que competeixen per aconseguir una posició
monopolística del mercat, la idea d'un llenguatge universal que permetés comunicar
els serveis de facebook, twitter i google és impensable, però per sort
seguim disposant del correu electrònic. Moltes no hi haureu caigut, però és del tot
extrany que des d'una conta de gmail pugui enviar un correu electrònic a una conta
d'outlook, bé que és impensable que pugui accedir als arxius que tinc a google
drive des de la meva conta de OneDrive de microsoft, o consultar els twits de
l'Elon Musk desde el meu mur de Facebook.

Aquesta és la gran virtut del correu electrònic, la de ser un protocol obert
i basat en una estructura descentralitzada. Tot i que està en perill la seva
continuitat com a sistema de comunicació universal en el moment en que unes
poques empreses controlen la immensa majoria de les contes de correu electrònic
i que, per tant, la possibilitat que aquestes empreses decideixin deixar d'operar
sobre aquest protocol per establir-ne un de propi, intern, i només operable per a
usuaries dels seus serveis, és molt real.

## Nus

**Spoiler: Si no teniu un motiu de pes per muntar un servidor de correu electrònic,
no ho feu!**

Hola lector@. Disculpa'm. Deixo d'explicar-te batalletes.


Ara que els impacients ja han marxat d'aquí a través de l'enllaç a GitHub, torno
a les batalletes.

{:.centered}
[![yunohost-logo]({% link /assets/images/yunohost-logo.png %})](https://yunohost.org/)

> YunoHost és un sistema operatiu pensat per fer simplificar al màxim la feina
> d'administració d'un servidor, a més de democratitzar el món del "self-hosting",
> tot assegurant-ne la confiança, la seguretat, l'ètica i la lleugeresa.

{:.align-right}
_yunohost.org_

En resum: Yunohost és un sistema operatiu, però també un projecte de transformació
de la web.

Pel que fa al sistema operatiu, Yunohost és un _respin_ del sistema operatiu
[Debian](https://www.debian.org/), basat en Linux, o, dit d'una altra manera,
una versió personalitzada del sistema operatiu Debian amb un instal·lador i un
seguit d'eines preinstal·lades i preconfigurades per funcionar com a servidor web.

Si encara no t'ha quedat clar que és això del que estem parlant:

{:.centered.no-bottom}
[Yunohost Demo](https://demo.yunohost.org/yunohost/sso/?r=aHR0cHM6Ly9kZW1vLnl1bm9ob3N0Lm9yZy8=){:.button.is-link}

{:.centered}
user: demo<br/>
password: demo

I perquè volem presentar-vos aquest projecte? Doncs perquè compartim amb la seva
gent la voluntat de desfer la mística al voltant de la informàtica i de voler
refer els ponts entre la tecnologia i la gent comuna més enllà dels rols de consumidors
passius en què ens encasella la filosofia del disseny centrat en l'usuari després
de ser apropiat per les empreses capitalistes.

**Avís per navegants. Yunohost ens facilitarà moltíssim la feina, però tot i així,
Google sempre t'ho posarà més fàcil, tot i que res és gratis.**

La pregunta és: Quin és el preu que estàs disposada a pagar pels serveis que utilitzes
diariament a internet? Quant creus que valen les dades que generes amb l'ús dels
teus dispositius digitals? I les de milions de persones a l'hora?

## Què necessitaràs?

Donat que un dels valors que volem transmetre és el de l'estalvi pel que fa a consum
energètic i costos materials de les diferents solucions tecnològiques de les quals fem ús
al nostre dia a dia, et proposem tres opcions:

- Si tens una Raspberry PI, o altres dispositius monoplaca similars, aquesta serà
la millor opció. El consum energètic d'aquests ordinadors és una fracció
molt petita del que consumeix un ordinador normal.

- Remou el fons del teu armari, espolsa'l i treu d'allà aquell vell ordinador de
quan encara cursaves l'ESO i que usaves per xatejar amb els teus amics de
facebook quan facebook encara molava. Segueix amb nosaltres i aconseguirem que torni
a la vida!

- Demana a la teva xarxa si algú té algun ordinador antic que no faci servir. En
vista de l'acceleradíssim ritme de consum a què ens han dut la conjunció d'un
moment de revolució tecnològica i una gestió del mateix des d'empreses capitalistes
necessitades d'una expansió constant dels seus mercats, no hauria de ser complicat.

**Sobretot, sobretot, no compris res si ho has de fer per seguir aquest
contingut, o tot el que estem fent perdrà sentit. No ens ho facis, si us plau.**

A més, necessitaràs un _pendrive_ o un CD verge (Whaat? Encara existeixen
els CDs?) on poder gravar la imatge del sistema operatiu Yunohost que instal·larem
després. Aquest hauria de disposar d'una capacitat d'emmagatzematge mínim de 1GB.

{:.centered}
![cdrom]({% link /assets/images/cdrom.png %}){:style="height:200px;"}

{:.centered}
<sup>Per als més joves, això és una pila de CDs.</sup>

Per últim, necessitaràs un encaminador (router) amb accés a internet i la
possibilitat d'obrir-hi els ports de forma que puguis exposar el teu servidor
a internet fent que l'encaminador deixi passar les peticions que li arribin des
d'internet cap a la teva LAN (Local Area Network) on tindràs el teu servidor.

Aquest últim és un pas espinós perquè no dependràs només de tu i t'hauràs d'entendre
amb el teu proveïdor d'internet. Dedicarem un capítol sencer a parlar sobre aquest
tema per intentar resoldre tots els dubtes i escenaris possibles. En qualsevol cas,
si et topes amb  un proveïdor d'internet poc col·laborador, potser tens les de perdre,
però comptaràs amb nosaltres quan vulguis fer-li un escrache.

## Següents passos

Fins aquí el nostre primer capítol. Si t'ha semblat interessant tot el que hem anat
xerrant i no vols perdre'ns de vista, et recomanem que utilitzis alguns serveis de
[**RSS Feed**](https://en.wikipedia.org/wiki/RSS) i et subscriguis al nostre blog.

Si no coneixeu el concepte, RSS són les inicials de _"Really Simple Sindication"_
i és un protocol per sindicar webs a través d'internet que ve existint des de 1999.

I que fan les webs sindicades, lluites per la millora de les condicions laborals
de les programadores? Ejej, no, i disculpeu-me, no tornarà a passar &#x1F629;.
Doncs això, RSS funciona com un protocol estandarditzat i obert que permet
comunicar, entre webs, actualitzacions de contingut. Utilitzant una eina
d'agregació de _feeds_, el que s'aconsegueix és tenir un _timeline_ amb el
contingut de les pàgines webs, portals de notícies, blogs i revistes online
actualitzat en temps real. **Si encara no ho enteneu, és com un Twitter però
sense toxicitat ni trolls**, i suportat a través d'un protocol obert que et
permet interaccionar-hi i consumir l'actualitat de forma distribuïda sense
haver de connectar-te als servidors propietat dels grans capitals d'inversió
nord-americans.

Una de les eines webs de _feed_ més estesa és [Feedly](https://feedly.com).
Existeixen altres alternatives de codi obert &#8212;Yunohost ens permet instal·lar-ne,
al servidor de casa nostra, unes quantes alternatives&#8212;, però
si acabes de conèixer aquest protocol, Feedly és un bon lloc des d'on començar.

En cas que vulguis seguir-nos, hauràs d'introduir
[la url](https://www.codeccoop.org) de la nostra web, o l'enllaç
al nostre [arxiu RRS](https://www.codeccoop.org/feed.xml) al formulari de
subscripció a nous _feeds_ de l'eina que hagis escollit i, si tot va bé,
ens veiem a la pròxima.

Per últim, i prenent-nos la llicència de donar consells, et recomanem que,
en cas que vulguis provar això dels _feeds_, et subscriguis a la revista
[low←tech magazine](https://solar.lowtechmagazine.com/feeds/all-en.atom.xml)
i al podcast [How to fix the internet](https://feeds.eff.org/howtofixtheinternet)
de la gent de l'Electronic Frontier Fundation.
