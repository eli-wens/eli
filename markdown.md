---
layout: default
title: html titel
author: schrijver
---

{% include nav-breadcrumbs.html %}

# Titel

![ASP.net](/media/logo/asp.net.png)
![foto](../iets)
![logo](pad/naar/foto)


## 1ste hoofding
Asp.net is een framework dat draait bovenop het dotnet core framework van Microsoft. Het is crossplatform en kan dus op zowel Windows, Linux als Mac runnen.

### 2de hoofding

#### 3de hoofding
##### 4de hoofding


## lijsten
* item
* item
    * sub item
    * sub item
        * sub sub item


1. item
1. item
1. item
    1. sub item
    1. sub item

## links
[home](index.md)

[link.be](www.link.be)

[iets](www.link.be)

## code block
```
Code block
sudo apt update
kan heel lange commado's tonen, er wordt indien nodig een horizontale scrollbar getoont op de web pagine. zou deze zin al lang genoeg zijn?
```

een ```code blok``` kan ook in een zin.

## tabel

item | waarde
----| ---
Banaan|20
kiwi|33
peer| 1

## cursief & bold

_enkele = cursief_

*enkele = cursief*

__dubbel = vet__

**dubbel = vet**

*__combinatie van de 2__*  
_**combinatie van de 2**_

## qoute

As Kanye West said:

> We're living the future so
> the present is our past.


{% include footer.html %}
