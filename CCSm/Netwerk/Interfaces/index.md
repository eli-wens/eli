---
layout: default
title: Netwerk Interfaces
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}


# Netwerk interfacess
![Netplan](/{{ site.RepoName }}/media/logo/netplan.png)
![Ethernet](/{{ site.RepoName }}/media/logo/ethernet.png)

## Interfaces instellen  
Er zijn 3 instellingen die we moeten maken, aanpassen.

**IP adressen**

Via netplan worden de IP instellingen geconfigureerd, in het bestand /etc/netplan/*.yaml
Hieronder vind je een voorbeeld van een configuratie.
```
network:
    ethernets:
        ens18:
            optional: true
            dhcp4: false
            addresses: [192.168.3.101/24]
            gateway4: 192.168.3.1
            nameservers:
                addresses: [8.8.8.8, 1.1.1.1]
        ens19:
            optional: true
            dhcp4: false
            addresses: [10.10.10.101/24]
    version: 2
```
Nadien kan je via de commando's ```netplan generate``` en ``` netplan apply``` de wijzigen doorvoeren

**IPv6 uitschakelen**

In onze opstelling worden geen IPv6 addressen gebruikt en mag IPv6 dus uitgeschakkeld worden.
Dit is eerder om alles duidelijk en overzichtelijk te houden, maar heeft niet echt een technisch voordeel.
* open /etc/sysctl.conf in nano
* voeg volgende lijnen toe
```
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
```
* Voeg vervolgens nog 1 lijn toe per interface
```
net.ipv6.conf.ens18.disable_ipv6 = 1
net.ipv6.conf.ens19.disable_ipv6 = 1
```
* run het commando ```sudo sysctl -p```


**/etc/resolv.conf instellen**

Om er voor te zorgen dat domaintranslations goed gebeuren moeten we volgende dingen doen
* /etc/systemd/resolved.conf instellen
* /etc/resolv.conf verwijderen
    * ```sudo rm /etc/resolv.conf ```
* Symlink instellen
    * ```sudo ln -s /run/systemd/resolve/resolv.conf  /etc/resolv.conf```    
* Service herstarten 
    * ```Sudo service systemd-resoved restart```

## Zie ook 
* [Netwerk](/{{ site.RepoName }}/CCS/Netwerk)

## Bronnen 
* [Netplan Examples](https://netplan.io/examples)
* [IPv6 Disable guide](https://www.configserverfirewall.com/ubuntu-linux/ubuntu-disable-ipv6/)



{% include footer.html %}
