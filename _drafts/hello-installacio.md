---
title: 'Hello, Yunohost: Instal·lació'
layout: post
author: lucas
categories: autoallotjament
---

Aquest article és la continuació de l'anterior entrada al blog [Hello, Yunohost!](/autoallotjament/2022/02/24/yunohost.html).
En l'altre article presentavem Yunohost i explicavem una mica el perquè d'aquesta
serie d'entrades. Aquest segon article prendrà un caràcter més tècnic, ja que entrarem
a explicar com instal·lar un sistema operatiu. Ara, si has arribat aquí amb l'única
voluntat de resoldre dubtes tècnics, permet-nos avisar-te, aquí ens solem enrollar
més del necessari. Si el que vols és una guia tècnica de com instal·lar Yunohost,
el millor que pots fer és acudir directament a la [documentació oficial](https://yunohost.org/en/install).

Així doncs, si et quedes amb nosaltres, anem a veure com es fa això d'instal·lar
un sistema operatiu.

## Taula de continguts

1. [Què necessitaràs](#què-necessitaràs)
2. [La imàtge de Yunohost](#la-imàtge-de-yunohost)
3. [L'instal·lador](#linstallador)
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
tema per intentar resoldre tots els dubtes i escenaris possibles. **Problemes del
jo de demà!** Avui ens centrarem en la instal·lació.

## La imàtge de Yunohost

El primer que haurem de fer serà descarregar-nos la imàtge del sistema operatiu.
Per això haurem d'anar a la [pàgina de descàrregues de yunohost](https://yunohost.org/en/install)
on trobarem múltiples versions del mateix. Veuràs que ofereixen versions per múltiples
suports tecnològics, des de imàtges per crear màquines virtuals amb [virtualbox](https://www.virtualbox.org/)
fins a instal·ladors automatitzats per servidors remots. Per al cas que ens ocupa,
ens  interessen únicament les versions per [Raspberry PI](https://yunohost.org/en/install/hardware:rpi2plus)
i d'[ordinador convencional](https://yunohost.org/en/install/hardware:regular). Des
d'allà només haurem de seguir les instruccions que trobarem a la pàgina de descàrregues
per deixar-ho tot llest per a començar la instal·lació el nostre sistema operatiu.

Aquí, i abans de saltar a l'apartat de l'instal·lació, recollim alguns aclariments
tècnics. Quan us descarregueu la imàtge del sistema operatiu, us esteu decarregant
un arxiu `.iso`.

## L'instal·lador

Lorem ipsum

## Següents passos
