---
layout: default
title: MySQL
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# MySQL

Welkom op de informatiepagina van MySQL.


![MySQL](/{{ site.RepoName }}/media/logo/mysql.png) &nbsp;&nbsp;&nbsp;
![phpMyAdmin](/{{ site.RepoName }}/media/logo/phpmyadmin.png)

## Wat
Voor dit project werd gekozen om te werken met de MySQL database. Dit is een open-source relationeel database management system. Daarnaast kunt u gebruikmaken van de webinterface van phpmyadmin om eenvoudig de data te bekijken, zonder de kennis van SQL queries.

## Installatie
Om de installatie van MySQL, phpMyAdmin en het instellen van de back-ups te vereenvoudigen, hebben we een 'script' opgesteld. Bij het aanmaken van een nieuwe VM kunt u eenvoudig de installatie uitvoeren en bekomt u altijd dezelfde installatie/configuratie. Het script bestaat uit verschillende onderdelen die u kunt kopiëren en in de terminal plakken (en eventueel enter drukken).

### Stap 1: sudo rechten
U kunt best tijdelijk overschakelen naar 'sudo rechten' voor het uitvoeren van het script. Na invullen van het correcte wachtwoord verandert de prompt en ga je als root verder.
```
sudo -i
password: *****
```
### Stap 2: MySQL installeren
installeren van MySQL op non-interactieve wijze, root wachtwoord opgegeven via variabele
```
sudo apt update
MySQLRootPwd=project
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $MySQLRootPwd"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $MySQLRootPwd "
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server
```

### Stap 3: SQL users aanmaken
user project heeft alle rechten; user grafana heeft enkel leesrechten
```
sudo mysql -u root -p$MySQLRootPwd -e "CREATE USER 'project'@'%' IDENTIFIED BY 'project';"
sudo mysql -u root -p$MySQLRootPwd -e " GRANT ALL PRIVILEGES ON *.* TO 'project'@'%';"
sudo mysql -u root -p$MySQLRootPwd -e "CREATE USER 'grafana'@'%' IDENTIFIED BY 'grafana';"
sudo mysql -u root -p$MySQLRootPwd -e " GRANT select ON *.* TO 'grafana'@'%';"
```

### Stap 4: phpMyAdmin
installeren van phpMyAdmin 
```
App_Pwd="project"
Root_Pwd="project"
AppDB_Pwd="project"
echo "phpmyadmin phpmyadmin/dbconfig-install boolean true" | debconf-set-selections
echo "phpmyadmin phpmyadmin/app-password-confirm password $App_Pwd" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/admin-pass password $Root_Pwd" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/app-pass password $AppDB_pwd" | debconf-set-selections
echo "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2" | debconf-set-selections
apt-get install -y phpmyadmin
```

### Stap 5: Allow Remote connections & fix phpMyAdmin error
andere machines toegang geven tot MySQL Server
error in default phpMyAdmin configuratie repareren
```
echo 'bind-address            = 10.10.10.103' >> /etc/mysql/mysql.conf.d/mysqld.cnf
sudo sed -i "s/|\s*\((count(\$analyzed_sql_results\['select_expr'\]\)/| (\1)/g" /usr/share/phpmyadmin/libraries/sql.lib.php
sudo service mysql restart
```

## Zie ook
* [Back-up MySQL database](/{{ site.RepoName }}/CCS/Backup#Database-Backup)
* [API verbinden met Database](/{{ site.RepoName }}/APP/ASP_DB/)


## Bronnen
* [Website MySql](https://www.mysql.com/)
* [Website phpMyAdmin](https://www.phpmyadmin.net/)
* [Remote access debugging](https://www.cyberciti.biz/tips/how-do-i-enable-remote-access-to-mysql-database-server.html)


{% include footer.html %}
