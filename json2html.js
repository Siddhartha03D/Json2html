
export function json2html(data) {

    let table = '<table data-user="itssiddharthyadav01@gmail.com">';
    

    table += '<thead><tr>';

    const headers = Object.keys(data.reduce((acc, curr) => ({ ...acc, ...curr }), {}));
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += '</tr></thead>';
    

    table += '<tbody>';
    data.forEach(row => {
      table += '<tr>';
      headers.forEach(header => {
        table += `<td>${row[header] || ''}</td>`; 
      });
      table += '</tr>';
    });
    table += '</tbody>';
    

    table += '</table>';
    
    return table;
  }
  