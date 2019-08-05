---
title: How did I Fix Urdu اردو on My Computer and Internet
date: '2013-04-30T07:05:00.000+05:00'
excerpt: "If you want to read and write Urdu on your computer easily, this post is for you."
tags: [Tutorial]
---

![Urdu Calligraphy](https://2.bp.blogspot.com/-FS081aX2x1Y/VRu5FDWImxI/AAAAAAAAmSA/8qLi9o8z07I/s1600/art.jpg)

As of now, I am able to write urdu anywhere without any urdu keyboard on my computer. I have nastaleeq and other awesome fonts installed which I can use anywhere on my computer for example on office, photoshop (middle east version), etc. I am able to read in the beautiful nastaleeq font. And with two clicks I am able to find meaning for any word I want. So Lets see how I did this all:


### 1. Install Urdu Phonetic Keyboard

To make typing easier on non-urdu keyboards there are phonetic keyboards which match english letter sounds with urdu ones. This way it's much easier to write. For example w is for و -

To do that [install this](https://download.cnet.com/Pak-Urdu-Installer/3000-2094_4-75452850.html).

Then restart and you will get a language bar besides the time at bottom right:
 
Windows XP 
![Windows XP Language Bar](https://www.mbilalm.com/images/xp-language-bar.gif)

Windows Vista 
![Windows Vista Language Bar](https://www.mbilalm.com/images/vista-language-bar.gif) 

Windows 7 
![Windows 7 Language Bar](https://www.mbilalm.com/images/7-language-bar.gif)

After that whenever you want to type in urdu just press Shift+Alt and you will be able to shift between English and Urdu.

### 2. Install Urdu Fonts

1. To get Urdu fonts on your computer install the [Pak Urdu   Installer](https://www.mbilalm.com/download/pak-urdu-installer.php) which includes artistic font ["Jameel Noori Nastaleeq"](https://www.mbilalm.com/urdu-font.php),CRULP font ["Nafees Web Naskh"](https://www.crulp.org/) and BBC Urdu font ["Urdu Naskh Asia Type"](https://www.bbc.co.uk/urdu/). These all are Unicode True Type font (ttf).

2. Install [these](https://www.alislam.org/urdu/font/UrduFonts.exe) as well.

Once you install the above fonts, you will notice improved fonts in many urdu websites. Also, you can now write in Urdu in these fonts.

### 3. Fix Urdu of Some Websites

There are several occasions when we find good urdu content but the font is bad so we leave it like wikipedia, bbc, express, etc. Some websites already use Nastaleeq fonts as default and for them you just have to install the fonts. That is good but not many people have these fonts installed. If you have done step 2 you can visit these sites. One of them is https://beta.jang.com.pk/.

For others a javascript code is to be installed. To do that in Chrome just download this [file]( https://www.mediafire.com/download.php?l5wqlizs377e6pn). Extract and see if you have got the 112275.user.js file. If you have then open [chrome://extensions/](chrome://extensions/) and drag the downloaded file in it and click add. Now you have got the script running and urdu on web fixed.

_Note: I got the script from the internet and made changes to meet my needs._

The problem is that not all websites can be covered by the code, otherwise there will be problem with english fonts. You have to manually include others into the code if your desired website is not in the list below:
* asraghauris.wordpress.com/
* urdu.dawn.com/
* express.com.pk/
* express.pk/
* bbc.co.uk/urdu/
* google.com/intl/ur/
* bbc.co.uk/blogs/urdu/
* ur.wikipedia.org/
* fa.wikipedia.org/
* ar.wikipedia.org/
* urdupoint.com/

To add more just add these lines before _//_ _==/UserScript==_ in the downloaded file:


>// @match https://*.(to be changed)/*
>// @include https://*.(to be changed)/*


For example if you want to include facebook write "facebook.com" in place of "(to be changed)" . Don't include "www."


The english font may become bad on the sites you include so it is recommended you include urdu websites only.


Now you can read urdu comfortably. If you don't like the size press ctrl + Plus to increase size.


### 4. The Dictionary

Go to [chrome://settings/searchEngines](chrome://settings/searchEngines) and there will be three text boxes below. Type the following into each of the three columns:
* First Column: clepk.org
* Second Column: clepk.org
* Third Column: https://www.clepk.org/oud/SearchResults.aspx?off=1&st=e&qry=%s&Image1.x=25&Image1.y=15

Hover over the last column of clepk.org line and click _make default_.

![Default Search Engine](https://waqasabbasi7.files.wordpress.com/2013/04/make-default.png)

Now your default search engine is a urdu dictionary. But you can change that by going into [chrome://settings/](chrome://settings/) and going to search section and changing search engine. 

![Search Engine Change](https://waqasabbasi7.files.wordpress.com/2013/04/urdu.png)

Now open up a urdu article. A good one is Iqbal's [Shikwa](https://asraghauris.wordpress.com/2013/01/26/iqbal-ka-shikwa/). Right click any urdu after selecting it and press search clepk.org for "(word)". The clepk dictionary is the best I have found 
on the internet. It may not have all words but it is a good one. If you have suggestions regarding dictionary do tell. 


I hope now you will enjoy using and reading urdu on your computer. If you are having difficulty in completing any task do ask. 
