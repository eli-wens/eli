---
layout: default
title: SSL
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# SSL
![SSL](/{{ site.RepoName }}//media/logo/SSL.png)
![LE](/{{ site.RepoName }}//media/logo/LE.png)


## Wat
Met SSL gaan we ervoor zorgen dat de verbinding tussen de client en de server beveiligd wordt. SSL (Secure Socket Layer), of tegenwoordig TLS (Transport Layer Security), is het achterliggende protocol dat dit tot stand brengt. Alle communicatie tussen de client en de server wordt geëncyrpeerd door de zender en weer gedecrypteerd bij de ontvanger. Dit wordt gedaan door certificaten en public & private keys. In onze opstelling gebruiken we bestaande certificaten en keys van de Synology url die al in het netwerk aanwezig is.

## SSL instellen 

### Certificaat downloaden of genereren 
Om te beginnen moeten we het bestaande certificaat importeren van de Synology NAS. Het huidige certificaat is geldig tot 10 april, op de NAS wordt dit certificaat automatisch vernieuwd door een nieuw certificaat aan te vragen bij de provider ('Let's Encrypt). In realiteit zou dit ook zo ingesteld kunnen worden op de Proxy. 

![Cert](/{{ site.RepoName }}//media/netwerk/certificaat.png)
![keys](/{{ site.RepoName }}//media/netwerk/keys.png)

### Certificaat & Keys opslaan + rechten instellen 
Vervolgens maken we een map aan op de proxyserver waar we het certificaat en keys gaan opslaan. We hebben gekozen voor volgende locatie: 
```sudo mkdir /var/www/cert/```.

Nadien plaatsen we de bestanden in deze locatie en geven we Apache leesrechten.
Het overzetten kan zowel via FTP of door de inhoud te kopiëren en te plakken binnen een SSH-sessie.
Om snel leesrechten te geven kunnen we ```sudo chmod +r /var/www/cert/* ``` gebruiken, echter is het veilig om de user ```www-data``` eigenaar van het bestand te maken via ```sudo chown -R www-data /var/www/cert```.

![Cert](/{{ site.RepoName }}//media/netwerk/tree.png)

### SSL configureren binnen Apache2
Het eerste dat we moeten doen is ervoor zorgen dat Apache met SSL certicaten en keys kan werken. Dit doen we door de module ssl binnen Apache te activeren: 
```sudo a2enmod ssl ```
Vervolgens kunnen we per vhost bepalen welke SSL instellingen we willen maken.
We doen dit binnen ```/etc/apache2/sites-enabled/000-default.conf```:
* Eerst zetten we binnen onze vhost SSL aan
    * ```SSLEngine On```
* Vervolgens geven we op waar de nodige bestanden staan, namelijk het certificaat, chain & private key
    * ```SSLCertificateFile /var/www/cert/cert.pem```
    * ```SSLCertificateKeyFile /var/www/cert/privkey.pem```
    * ```SSLCACertificateFile /var/www/cert/chain.pem```
    * voorbeeld
        ``` 
        sudo nano /etc/apache2/sites-enabled/000-default.conf
        <VirtualHost *:3400>
            SSLEngine On
            SSLCertificateFile /var/www/cert/cert.pem
            SSLCertificateKeyFile /var/www/cert/privkey.pem
            SSLCACertificateFile /var/www/cert/chain.pem
            ...
        </VirtualHost>
        ```
* Ten slotte herstarten we apache2 nog
    * ```sudo service apache2 restart```
    * ```sudo service apache2 status```
    
### Certificaat testen
Je kan zelf testen of het certificaat correct geconfigureerd is door te surfen naar de url met https. Als je een groen slotje krijgt is het certificaat goed geïnstalleerd. Daarnaast vind je online ook tools die het certificaat testen en meer info geven over de status en eigenschappen. 

![Cert](/{{ site.RepoName }}//media/netwerk/test.png)






## Zie ook
* [Netwerk](/{{ site.RepoName }}/CCS/Netwerk)
* [Proxy](/{{ site.RepoName }}/CCS/Proxy)


## Bronnen 
* [Config SSL Apache2](https://www.ssls.com/knowledgebase/how-to-install-an-ssl-certificate-on-apache/)
* [Apache2 SSL Mod](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html)
* [Let's Encrypt](https://letsencrypt.org/)
* [SSL checker - Digicert](https://www.digicert.com/help/)

{% include footer.html %}
