/*jshint esversion: 6 */
function meeting(s) {
    return '(' + s.split(';').map(name => {
      const [first, last] = name.toUpperCase().split(':');
      return last + ", " + first;
    }).sort().join(")(") + ')';
  }


console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));
