function print() {

    var divText = document.getElementById("newcont").outerHTML;
    var divText = divText.replace(/['"]+/g, '');
    var hidWindow = window.open('','');
    var doc = hidWindow.document;
    doc.open(left=1000,top=1000);
    doc.write('<html><head><title>Print it!</title><link rel="stylesheet" type="text/css" href="stylesheet.css"><link rel="stylesheet" type="text/css" href="pdfback.css"></head><body onload="window.print()">');
    doc.write(divText);
    doc.write('</body></html>');
    doc.close();
  }