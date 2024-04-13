// sharptest.jsx
import React, { useState } from 'react';

const Sharptest = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const totalContents = 7;

  const handleNext = () => {
    setCurrentContent((prevContent) => (prevContent + 1) % totalContents);
  };

  
  const startTest = () => {
    // Redirect to '/another-page' when a button is clicked
    window.location.href = '/sharptestStart';
  };


  const getContent = (contentIndex) => {
    switch (contentIndex) {
      case 0:
        return (
            <div>
                <h1>Před zahájením si tyto informace prosím přečtěte a přijměte je.</h1>
                <p>Toto online vyšetření zraku slouží k tomu, aby vám poskytlo první posouzení vašeho aktuálního zraku. Nejedná se o lékařské vyšetření a nenahrazuje oční péči poskytovanou odborným lékařem. Není určeno k diagnóze onemocnění či zmírnění, léčbě či prevenci nemoci. Toto vyšetření vám má pouze poskytnout obecný přehled o vaší zrakové ostrosti a informaci, zda je pro vás vhodné absolvovat odborné vyšetření očí. Doporučujeme, abyste si oči nechali kontrolovat odborným lékařem každé dva roky či dříve, pokud si povšimnete změn svého zraku. Společnost Erste Optik s.r.o. ani žádná jiná společnost, která náleží do skupiny spřátelných optik, nepřijímá odpovědnost za škody či následky plynoucí z online vyšetření zraku a/nebo poskytnutých informací.</p>
                <button onClick={handleNext}>Souhlasím</button>

        </div>);
      case 1:
        return (
            <div>
                <h1>Abyste dosáhli co nejpřesnějších výsledků, nastavte na svém zařízení jas obrazovky na maximum.</h1>

                <button onClick={handleNext}>Další krok</button>
        </div>);
      case 2:
        return (
            <div>
                <h1>Abyste nastavili velikost obrazovky, umístěte kartu na rámeček a k vyrovnání použijte posuvník.</h1>
                <button onClick={handleNext}>Další krok</button>
        </div>);
      case 3:
        return (
            <div>
                <h1>Budte připraveni. Nasadte si brýle nebo kontaktní čočky (pokud nějaké nosíte).</h1>
                <button onClick={handleNext}>Další krok</button>
        </div>);
      case 4:
        return (
            <div>
                <h1>Jsou vaše oči připraveny? Zakryjte si levé oko.</h1>
                <button onClick={handleNext}>Další krok</button>
        </div>);
      case 5:
        return (
            <div>
                <h1>Nepřibližujte. Zařízení držte během testu na délku paže.</h1>
                <button onClick={handleNext}>Další krok</button>
        </div>);
      case 6:
        return (
            <div>
                <h1>Označte bod. Vidite horní kruh? Označte příslušný bod na spodním kruhu.</h1>
                <button onClick={startTest}>Začít test ostrosti zraku</button>
        </div>);
      default:
        return null;
    }
  };

  return (
    <div>
      {getContent(currentContent)}
    </div>
  );
}

export default Sharptest;