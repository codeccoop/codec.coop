---
title: "Retalls de còdi: DynIptables"
layout: post
author: lucas
categories: retalls
---

Oli! Això del blog s'ha quedat més aturat del que ens hauria agradat. Tot i que
veniem avisats, ens ha sorprés lo costós i carregant que és això de començar
una cooperativa. Poc a poc i bona lletra.

En qualsevol cas, aquí seguim, després de gairebé un any, i amb moltes coses
apreses, també algunes de caràcter tècnic. D'aquestes cosetes que hem anat
aprenen, les de caràcter tècnin, en volem fer una nova secció al blog. Aquesta
l'hem anomenada ***"Retalls de codi"*** i neix després d'haver descobert que
*snippet*, en anglés, vol dir retall. Que bonica és la nostra llengua, i que
poc l'útilitzem quan parlem de codi! Així doncs, queda batejada la nova secció!

El tema de la secció seran petites solucions de codi que, per un motiu o altre,
ens hagin semblat interessants. La idea és, alhora que publiquem el codi
a repositoris públics, poder fer reflexions i disquisicions una mica més
amplies del que podriem fer al *README* del repositori.

Avui, i com a innaguració, la idea és compartir amb vosaltres una solució que
hem hagut d'empescar-nos per poder tenir un servidor autoallotjat amb serveis
de correu electrònic i d'emmagatzematge en xarxa.

Tot i que la secció és nova, te origen en l'altre sèrie d'articles sobre
autoallotjament que volem anar publicant i que podeu trobar presentada
[aquí](/autoallotjament/2022/02/24/yunohost.html).

Ara sí, sense més dilacions, al turrón!

## DynIptables

[![DynIptables Cover](/assets/images/blog/snippets/dynipt-cover.png)](https://github.com/orzocogorzo/dyniptables)

Què és **DynIptables** i per què mereix una entrada al nostre blog? Doncs
és una solució per poder exposar la teva xarxa local a través d'una IP estàtica.
Per aconseguir això pots 1. Negociar amb el teu proveidor d'internet perquè te'n
assigni una, assumir una pujada a la teva tarifa d'internet de al voltant de 15
euros mensuals, més 15 euros més quan vulguis desistir del contracte, o 2.
Contractar una VPS d'entre 3 o 5 euros al mes, utilitzar **DynIptables**
perquè et faci la feina bruta, i estalviar-te haver de negociar amb aquests
contrabandistes. Altres opcions, serien les d'utilitzar un servei de dns
dinàmica, o contractar una VPN amb ip estàtica, tots ells a preus similars als
del lloguer del servidor, però amb menys capacitat per gestionar la teva
infraestructura.

<span style="display: none">> Si aneu una mica coixes amb els conceptes de DNS, [vam parlar sobre
DNS]() ara fa uns dies. Sobre VPN, doncs no, però segur que al vostre
cercador de confiança podeu trobar algun video o pàgina que expliqui
el concepte de forma prou solvent.</span>

Per a la penya del codi, podeu trobar el repositòri públicat a [GitHub](https://github.com/orzocogorzo/dyniptables).
Allà es descriu, pas a pas, com s'ha d'instal·lar i configurar el paquet per
tenir-lo corrent a la teva VPS, així doncs, ens estalviarem els detalls
i aprofitarem per explaiar-nos més en els perquès.

I per què DynIptables? Descartada la negociació amb operadors d'internet que
utilitzen la seva posició privilegiada per imposar negociacions pel sevei
que mai ens beneficiaran, per què no optar per un servei de dns dinàmica, o per
la VPN? Per respondre aquesta pregunta, primer deixeu-me que expliqui en que
consisteix cadascuna de les solucions:

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

## Nus

**Spoiler: Si no teniu un motiu de pes per muntar un servidor de correu electrònic,
no ho feu!**

Hola lector@. Disculpa'm. Deixo d'explicar-te batalletes.


Ara que els impacients ja han marxat d'aquí a través de l'enllaç a GitHub, torno
a les batalletes.
