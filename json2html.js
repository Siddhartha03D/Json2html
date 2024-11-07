export default function json2html(data) {
    let table = '<table data-user="itssiddharthyadav01@gmail.com">';
    table += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
    table += '<tbody>';
    
    data.forEach(item => {
        table += `<tr><td>${item.Name}</td><td>${item.Age}</td><td>${item.Gender}</td></tr>`;
    });
    
    table += '</tbody></table>';
    return table;
}
