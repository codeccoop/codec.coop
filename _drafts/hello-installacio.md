---
title: 'Hello, Yunohost: Instal·lació'
layout: post
author: lucas
categories: autoallotjament
---

Aquest article és la continuació de l'anterior entrada al blog
[Hello, Yunohost!](/autoallotjament/2022/02/24/yunohost.html).
En l'altre article presentavem Yunohost i explicavem
una mica el perquè d'aquesta serie d'entrades. Si has arribat aquí
amb l'única voluntat de resoldre dubtes tècnics, no fa falta que
hi retornis, però alhora, permet-nos avisar-te, aquí ens solem
enrollar més del necessari. Si el que vols és una guia tècnica de com
instal·lar Yunohost, el millor que pots fer és acudir directament
a la [documentació oficial](https://yunohost.org/en/install).

Així doncs, si et quedes amb nosaltres, anem a veure com es fa això
d'instal·lar un sistema operatiu.

## Taula de continguts

1. [Què necessitaràs](#què-necessitaràs)
2. [La imàtge de Yunohost](#la-imàtge-de-yunohost)
3. [La teva xarxa local](#la-teva-xarxa-local)
4. [Següents passos](#següents-passos)

## Què necessitaràs?

Donat que un dels valors que volem transmetre és el de l'estalvi pel que fa a consum
energètic i costos materials de les diferents solucions tecnològiques de les quals
fem ús al nostre dia a dia, et proposem tres opcions:

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

## La imàtge de Yunohost

Lorem ipsum

## La teva xarxa local

Lorem ipsum

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
