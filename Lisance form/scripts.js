var selectedRow = null

function onFormSubmit()
{
   if (document.getElementById("fullName").value.length==0)
   {
   	alert("Fill the details");
   }
   else
   {
   	 var formData = readFormData();
	 if(selectedRow == null)
		{insertNewRcord(formData);}
	   else
	   	{updateRecord(formData);}
	    
    resetForm();
   }
}

function readFormData()
{
	var formData = {};
	formData["fullName"] = document.getElementById('fullName').value;
	formData["dob"] = document.getElementById('dob').value;
	formData["age"] = document.getElementById('age').value;
	formData["gender"] = document.getElementById('gender').value;
	formData["education"] = document.getElementById('education').value;
	formData["occupation"] = document.getElementById('occupation').value;
	formData["bg"] = document.getElementById('bg').value;
	formData["citizenship"] = document.getElementById('citizenship').value;
	formData["state"] = document.getElementById('state').value;
	return formData;
}
function insertNewRcord(data)
{
	var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.fullName;

	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.dob;

	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.age;

	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.gender;

	cell4 = newRow.insertCell(4);
	cell4.innerHTML = data.education;

	cell4 = newRow.insertCell(5);
	cell4.innerHTML = data.occupation;

	cell4 = newRow.insertCell(6);
	cell4.innerHTML = data.bg;

	cell4 = newRow.insertCell(7);
	cell4.innerHTML = data.citizenship;

	cell4 = newRow.insertCell(8);
	cell4.innerHTML = data.state;

    cell4 = newRow.insertCell(9);
	cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;

	 cell4 = newRow.insertCell(10);
	cell4.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}
function resetForm()
{
	document.getElementById('fullName').value = "";
	document.getElementById('dob').value = "";
	document.getElementById('age').value = "";
	document.getElementById('gender').value = "";
	document.getElementById('education').value = "";
	document.getElementById('occupation').value = "";
	document.getElementById('bg').value = "";
	document.getElementById('citizenship').value = "";
	document.getElementById('state').value = "";
	var selectedRow = null;
}

function onEdit(td)
{
	selectedRow = td.parentElement.parentElement;
	document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
	document.getElementById("dob").value = selectedRow.cells[1].innerHTML;
	document.getElementById("age").value = selectedRow.cells[2].innerHTML;
	document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
	document.getElementById("education").value = selectedRow.cells[4].innerHTML;
	document.getElementById("occupation").value = selectedRow.cells[5].innerHTML;
	document.getElementById("bg").value = selectedRow.cells[6].innerHTML;
	document.getElementById("citizenship").value = selectedRow.cells[7].innerHTML;
	document.getElementById("state").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData)
{
	selectedRow.cells[0].innerHTML = formData.fullName;
	selectedRow.cells[1].innerHTML = formData.dob;
	selectedRow.cells[2].innerHTML = formData.age;
	selectedRow.cells[3].innerHTML = formData.gender;
	selectedRow.cells[4].innerHTML = formData.education;
	selectedRow.cells[5].innerHTML = formData.occupation;
	selectedRow.cells[6].innerHTML = formData.bg;
	selectedRow.cells[7].innerHTML = formData.citizenship;
	selectedRow.cells[8].innerHTML = formData.state;
}
function onDelete(td)
{
	
		row = td.parentElement.parentElement;
		document.getElementById("").remove(row.rowIndex);
		resetForm();
	 
}