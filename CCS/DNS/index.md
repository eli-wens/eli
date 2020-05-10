---
layout: default
title: DNS
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}


# DNS

Welkom op de informatiepagina van DNS.

![DNS](/{{site.RepoName}}/media/logo/dns.png)
![WWW](/{{site.RepoName}}/media/logo/www.png)

## Wat
DNS staat voor Domain Name System. Het zorgt ervoor dat een domeinnaam naar een IP adres vertaald wordt.
Zonder DNS zouden we enkel IP's kunnen gebruiken. Daarom is het beter om domeinnamen te gebruiken. Deze zijn veel handiger in gebruik en zijn makkelijk te onthouden voor de gebruikers. 

## Waarom
Aangezien u het dashboard via het publieke internet wilt bereiken, wilt u een eenvoudige url kunnen gebruiken. 
Een andere, en voor ons technisch belangrijkere reden, is dat we voor het PoC geen statisch IP adres hebben. We krijgen een dynamisch IP adres van de ISP. Voor de demoversie wordt alles gehost op het home-netwerk van een van onze teamleden. Het is dus Proximus (de ISP) die bepaalt welk IP adres gebruikt moet worden. Omdat we niet telkens een ander IP willen opgeven, kunnen we beide problemen in 1 klap oplossen.
* Problemen door Dynamisch IP voorkomen 
* Domeinnaam ipv IP adres

## Hoe
Om het probleem van het dynamische IP adres op te lossen, kan gebruikgemaakt worden van DDNS.
Dit staat voor 'Dynamic DNS'. Dit zorgt ervoor dat de DNS server het bijhorende IP adres van een domeinnaam gaat updaten wanneer dit verandert. Telkens de modem een ander IP adres krijgt van de ISP, zal via DDNS het IP adres in DNS ook worden aangepast.

In ons PoC hebben we gebruikgemaakt van de DDNS service van Synology. Dit omdat er al een Synology NAS aanwezig is binnen het netwerk met DDNS. Deze NAS detecteert wanneer het publiek IP adres gewijzigd is en brengt de Synology DNS server op de hoogte van de wijzing en het nieuwe IP adres. _een andere populaire DDNS provider is noip.com_ We kunnen dus eenvoudig dezelfde URL gebruiken om het IP te bekomen. Ook hebben we meteen een gratis URL.


_Synology online status_
![DDNS](/{{site.RepoName}}/media/netwerk/synology-ddns.png)


_Synology Diskstation configuratiescherm_
![DDNS](/{{site.RepoName}}/media/netwerk/ddns.png)

## Zie ook
* [Netwerk](/{{site.RepoName}}/CCS/Netwerk)


## Bronnen 
* [Synology DDNS](https://www.synology.com/nl-nl/knowledgebase/DSM/help/DSM/AdminCenter/connection_ddns)
* [DDNS Explained](https://www.lifewire.com/definition-of-dynamic-dns-816294)

{% include footer.html %}
