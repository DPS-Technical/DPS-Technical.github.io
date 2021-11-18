function print() {

    var divText = document.getElementById("newcont").outerHTML;
    var divText = divText.replace(/['"]+/g, '');
    var myWindow = window.open('', '', 'width=200,height=100');
    var doc = myWindow.document;
    doc.open();
    doc.write('<html><head><title>Print it!</title><link rel="stylesheet" type="text/css" href="stylesheet.css"><link rel="stylesheet" type="text/css" href="pdfback.css"></head><body onload="window.print()">');
    doc.write(divText);
    doc.write('</body></html>');
    doc.close();
  }