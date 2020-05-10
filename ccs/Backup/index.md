---
layout: default
title: Backups
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Back-up

Welkom op de informatiepagina van 'Back-up'.

![backup](/{{site.RepoName}}/media/logo/backup.png) &nbsp;&nbsp;
![db backup](/{{site.RepoName}}/media/logo/db_backup.png)

## Waarom
De reden om back-ups te plannen is redelijk voor de hand liggend. Het is simpelweg een garantie dat uw gegevens niet definitief verloren gaan wanneer het systeem ergens crasht.

Hierbij gaat het niet enkel om de data op zich, maar ook om het behoud van uw opstelling en applicatie. Een back-up maken heeft ook betrekking op het garanderen van een server met de nodige services. 

## Voordeel
Het nemen van een back-up zorgt ervoor dat alle resources kunnen hersteld worden indien er grote fouten zijn opgetreden en de services niet meer functioneren. De data zelf kan ook via deze weg gewaarborgd worden.

## Proxmox back-up
Proxmox heeft de optie om back-ups in te plannen en automatisch uit te voeren.
Via de volgende stappen stelt u in dat u dagelijks de VM’s back-upt naar een lokale NAS die onafhankelijk is van de Proxmox omgeving. 

### Back-up planning maken
Ga naar uw Proxmox webinterface en selecteer 'datacenter'. Kies daarna de optie 'backup'. Nu krijgt u een overzicht van bestaande back-up planningen. U kunt deze bewerken of verwijderen via de actieknoppen bovenaan. Kies hier voor 'Add' om een nieuwe back-up planning aan te maken. 

![Backup](/{{ site.RepoName }}/media/backup/backup_1.png)

### Back-up planning instellen
Het volgende scherm toont alle opties die u kan instellen bij het aanmaken van een back-up planning. De belangrijkste opties zijn hier gemarkeerd. 

* Storage: waar u de back-ups gaat opslaan, in dit geval een NAS smb share
* Day: op welke dagen van de week u de back-up wilt uitvoeren
* Hour: op welk uur u de back-up wilt uitvoeren
* Mail: e-mailadres om op de hoogte gehouden te worden
    * notification: enkel bij back-up fail of bij elk back-up event
* VMs: alle VM's die u met deze back-up planning wilt back-uppen. 

![Backup](/{{ site.RepoName }}/media/backup/backup_2.png)

### Back-up planning bevestigen
Als alle instellingen naar wens zijn, drukt u op 'oke'. Nadien komt u terug op de overzichtspagina waar u de instellingen kan bekijken.

![Backup](/{{ site.RepoName }}/media/backup/backup_3.png)

## Proxmox restore
![Backup](/{{ site.RepoName }}/media/backup/restore_1.png)

## Database back-up

Commando's als Root uitvoeren
```
sudo -i
password: ***
```

Cifs installeren zodat SMB share gemount kan worden
```
apt install cifs-utils
```

SMB mount instellen aan de hand van /etc/fstab
```
echo  '//192.168.3.4/backup /mnt/nas        cifs    credentials=/root/.smbcredentials,vers=1.0,uid=33,gid=33,rw,nounix,iocharset=utf8,file_mode=0777,dir_mode=0777 0 0 '  >> /etc/fstab
echo 'username=***' >>/root/.smbcredentials
echo 'password=***'  >>/root/.smbcredentials
mkdir /mnt/nas
mount -a
```

Back-up script aanmaken; deze maakt back-up via mysqldump op smb share
```
mkdir /home/project/script	
touch /home/project/script/backup.sh
echo ' #!/bin/bash
date=`date +"%d-%m-%y__%H-%M-%S"`
naam=database_`echo "$date"`.sql.gz
path="/mnt/nas/DB-backup-4.0/"`echo "$naam"`

mysqldump -u project -pproject --all-databases | gzip > /mnt/nas/DB-backup-4.0/`echo $naam`
'>>/home/project/script/backup.sh
chmod  +x /home/project/script/backup.sh
```

Laat back-up script om het halfuur uitvoeren via crontab/cronjobs
```
(crontab -l 2>/dev/null; echo "*/30 * * * * /home/project/script/backup.sh ") | crontab -
```

### Resultaat 
![Backup](/{{ site.RepoName }}/media/backup/backup_4.png)

## Zie ook
* [Back-up MySQL database](/{{ site.RepoName }}/CCS/backup#Database-Backup)
* [Verbind ASP.NET met database](../)


## Bronnen

{% include footer.html %}
