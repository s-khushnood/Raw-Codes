function formValidation(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
  
    const namePattern = new RegExp(/^[A-Za-z \s]*$/);
    const emailPattern = new RegExp(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    );
    const numberPattern = new RegExp(/^\d{3}-\d{3}-\d{3}$/);
    const nameTest = namePattern.test(name);
    const emailTest = emailPattern.test(email);
    const numberTest = numberPattern.test(number);
    try {
      var isError = false;
      if (!nameTest) throw "Invalid Name!";
      if (name == "") throw "Name field required";
      if (!emailTest) throw "Invalid email";
      if (email == "") throw "Email field required";
      if (!numberTest) throw "Invalid Phone Number";
      if (number == "") throw "Phone Number Required";
    } catch (error) {
      alert(error);
      isError = true;
    }
    name.value = "";
    email.value ="";
    number.value = "";
  
    if (!isError) {
      record(name, email, number);
    }
  }
  let recordArray = new Array();
  
  function record(name, email, number) {
    let newRecord = {};
    newRecord.id = recordArray.length+1;
    newRecord.name = name;
    newRecord.email = email;
    newRecord.number = number;
    recordArray.push(newRecord);
    const recordTable = document.getElementById("recordTable");
  
    let newRow = document.createElement("tr");
    for (let key in newRecord) {
      let newColumn = document.createElement("td");
      newColumn.innerHTML = newRecord[key];
      newRow.appendChild(newColumn);
    }
    recordTable.appendChild(newRow);
  }
  function sortById() {
    const idArray = recordArray.map((element) => element.id);
    idArray.sort();
    const newRecordArray = new Array();
    for (let i = 0; i < idArray.length; i++) {
      for (let j = 0; j < recordArray.length; j++) {
        if (idArray[i] == recordArray[j].id) {
          newRecordArray.push(recordArray[j]);
        }
      }
    }
    arrangedTable(newRecordArray);
  }
  
  function sortByName(){
    const nameArray = recordArray.map((element) => element.name);
    nameArray.sort();
    const newRecordArray = new Array();
    for (let i = 0; i < nameArray.length; i++) {
      for (let j = 0; j < recordArray.length; j++) {
        if (nameArray[i] == recordArray[j].name) {
          newRecordArray.push(recordArray[j]);
        }
      }
    }
    arrangedTable(newRecordArray);
  }
  
  function arrangedTable(newRecordArray) {
    const tableCols = document.getElementsByTagName("td");
    let count =0;
    for (let i = 0; i < newRecordArray.length; i++) {
      for (let j = count; j < count + 4; j = count + 4) {
        tableCols[j].innerHTML = newRecordArray[i].id;
        tableCols[j + 1].innerHTML = newRecordArray[i].name;
        tableCols[j + 2].innerHTML = newRecordArray[i].email;
        tableCols[j + 3].innerHTML = newRecordArray[i].number;
      }
      count= count+4
    }
  }
  