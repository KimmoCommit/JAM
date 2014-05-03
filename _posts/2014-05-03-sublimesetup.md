---
title: Sublime asetukset
category: Sublime Text
layout: post
---

**1.Asenna pakettienhallinta Sublimeen**

Mene konsoliin (View->Show Console), ja aja alla oleva asennuskoodi.

``import urllib2,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')``


**2.Käynnistä Sublime Text uudestaan ja avaa Package Manager**

Avaa komentopaletti näppäinyhdistelmällä Ctrl-Shift-P (Windows ja Linux) ja kirjoita Package Control.
Paletissa näkyyn nyt vaihtoehtoja, joita voit valita. Halutessasi voit nyt asentaa uusia paketteja valitsemalla "Install Package", jonka jälkeen voit hakea haluamiasi paketteja ladattavaksi, kuten syntaksien väritunnisteita jne.

> Pääset nopeasti lataamaan paketteja Ctrl-Shift-P näppäinyhdistelmän jälkeen kirjoittamalla vain "install"


**Lähteet**

1.[Hyvä englanninkielinen Sublime Package Manager asennus- ja käyttöohje](http://www.granneman.com/webdev/editors/sublime-text/packages/how-to-install-and-use-package-control/)

2.[Sublime Text 2 asennuskoodi](https://sublime.wbond.net/installation#st2)
