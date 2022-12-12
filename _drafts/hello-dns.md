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
