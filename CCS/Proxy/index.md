---
layout: default
title: Proxy
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}



# Proxy

![apache](/{{ site.RepoName }}//media/logo/apache.png)

## Wat
Een proxyserver is een tussenliggende server die de requests behandelt en verwerkt. In onze opstelling werken met een reverse proxy. Dit heeft als voordeel dat we op 1 machine alle requests kunnen beheren en sturen. De belangrijkste reden is waarom we een proxy gebruiken is om de werking van het thuisnetwerk niet te storen als ook technische problemen te voorkomen binnen de Proxmox omgeving. Aangezien alle requests op de proxy uitkomen is dit ook de plaats waar we [SSL](/{{ site.RepoName }}//CCS/SSL) configureren, en dus HTTPS gebruiken in plaats van HTTP. Je zou de proxy ook kunnen gaan instellen en gebruiken als loadbalancer. 

![Proxy](/{{ site.RepoName }}//media/netwerk/proxy.png)

## Configuren
Om deze proxy-werking te bereiken gebruiken we een Apache Webserver waar we tegelijkertijd ook een [landingpage](https://rob-vl.synology.me:3400/) hosten. Na de installatie van Apache kunnen we de proxy configureren.
* Installeer Apache
    * ```sudo apt install apache2 -y```
* Voeg alle poorten toe waar u naar wilt luisteren (voor ons 3400-3404)
    * ```sudo nano /etc/apache2/ports.conf
        Listen 80
        Listen 3400
        Listen 3401
        Listen 3402
        Listen 3403
        Listen 3404 ```

* Enable de proxy modules binnen apache 
    * ```sudo a2enmod proxy proxy_http proxy_balancer lbmethod_byrequests```
* Configuur proxy voor elke achterliggende server in een vhost
    * 3 onderdelen
        * ProxyPreserveHost On
        * ProxyPass / http://IP:port/
        * ProxyPassReverse / http://IP:Port/
    * Voorbeeld
        ```
        sudo nano /etc/apache2/sites-enabled/000-default.conf
        <VirtualHost *:3401>
            ProxyPreserveHost On
            ProxyPass / http://10.10.10.101:5000/
            ProxyPassReverse / http://10.10.10.101:5000/
        </VirtualHost>
        ```
* Restart Apache om config te laden
    * ```sudo service apache2 restart```
    * ```sudo service apache2 status```

_een request op poort 3401 op de proxyserver wordt dus achterliggend geforward naar 10.10.10.105 met poort 5000._

## Zie ook
* [Netwerk](/{{ site.RepoName }}/CCS/Netwerk)
* [SSL](/{{ site.RepoName }}/CCS/SSL)

## Bronnen 
* [Apache Proxy Mod](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html)
* [What is a Reverse Proxy](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/)

{% include footer.html %}
