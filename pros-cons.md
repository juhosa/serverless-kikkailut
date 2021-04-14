# Serverless

## Mikä se on

Palvelin on olemassa, mutta joku muu huolehtii siitä meidän puolesta.

Puhutaan Function-as-a-Service (FaaS) -mallista.

## Hyödyt

- Hinta
  - Maksat vain siitä mitä käytät
  - Palvelimen ylläpidon kustannukset poistuvat
- Palvelimen ylläpitoon kuluva aika poistuu
  - Voi keskittyä vain softan tekemiseen
- Softan käytön kasvaessa, palvelin skaalautuu automaagisesti

## Haitat

- Suorituskyky/suoritusaika
  - HTTP-kutsut vievät aikaa
  - Pitää odottaa, että virtuaalikone herää ja suorittaa funktion
  - Rajoitukset raudassa
- Monitorointi ja debugaus
  - Riippuen palvelusta, voi olla huomattavankin hankalaa löytää logitiedostoja (jos on saatavilla lainkaan)
- Turva
  - Suoritus voi tapahtua jaetuilla resursseilla -> on mahdollisuus sille, että data on nähtävillä muillekin
- Standardit
  - Niitä ei ole
- Vendor lock-in (palveluriippuvaisuus?)
  - Palvelusta toiseen vaihtaminen voi aiheuttaa hankalan migraation, koska eri tavat toimia (ja standardien puute)
