function print() {
    var divText = document.getElementById("newcont").outerHTML;
    var myWindow = window.open('', '', 'width=200,height=100');
    var doc = myWindow.document;
    doc.open();
    doc.write('<html><head ><title>Print it!</title><link rel="stylesheet" type="text/css" href="stylesheetpopup.css"></head><body onload="window.print()">');
    doc.write(divText);
    doc.write('</body></html>');
    doc.close();
  }