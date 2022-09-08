let form = document.getElementById('form');
const displayEntries = () =>{
    let a = localStorage.getItem("user-entries")
    let b = JSON.parse(a);
    const tableEntries = b.map((entry) => {
        let nameCall = `<td style="padding: 10px 20px ; font-size:20px"> ${entry.name} </td>`
        let emailCall = `<td style="padding: 10px 20px ; font-size:20px"> ${entry.email} </td>`
        let passwordCall = `<td style="padding: 10px 20px ; font-size:20px"> ${entry.password} </td>`
        let bodCall = `<td style="padding: 10px 20px ; font-size:20px"> ${entry.bod} </td>`
        let AgeCall = `<td style="padding: 10px 20px ; font-size:20px"> ${entry.age} </td>`
        let cbCall = `<td style="padding: 10px 20px ; font-size:20px"> ${entry.cb} </td>`

        const row = `<tr>${nameCall} ${emailCall} ${passwordCall} ${bodCall} ${AgeCall} ${cbCall}</tr>`
        return row
    })

    let table = `<table>
                       <tr>
                           <th style="padding: 10px 20px ; font-size:20px">Name</th>
                           <th style="padding: 10px 20px ; font-size:20px">Email</th>
                           <th style="padding: 10px 20px ; font-size:20px">Password</th>
                           <th style="padding: 10px 20px ; font-size:20px">Birth of Date</th>
                           <th style="padding: 10px 20px ; font-size:20px">Age</th>
                           <th style="padding: 10px 20px ; font-size:20px">Agreement</th>
                       </tr>${tableEntries}
                   </table>`
    let details = document.getElementById('user-entries')
    details.innerHTML = table;
}

let userEntries =[]
const saveData = (event) =>{
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let bod = document.getElementById('bod').value;
    let year = parseInt(bod.substring(0,4),10)
    let cb = document.getElementById('chexkbox').checked;
    let date = new Date();
    let currentYear = date.getFullYear()
    let age = currentYear - year;
    const entry ={
        name,
        email,
        password,
        bod,
        age,
        cb
    }
    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries))
}
form.addEventListener('submit',saveData)
displayEntries()