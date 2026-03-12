let bookingId=1

function loginUser(){
let role=document.getElementById("userRole").value
let username=document.getElementById("username").value
let password=document.getElementById("password").value

if(role=="staff" && username=="staff" && password=="1234"){
 document.getElementById("loginPage").style.display="none"
 document.getElementById("staffDashboard").style.display="block"
}

else if(role=="customer" && username=="customer" && password=="1234"){
 document.getElementById("loginPage").style.display="none"
 document.getElementById("customerDashboard").style.display="block"
}

else{
 document.getElementById("loginError").innerText="Invalid Login"
}
}

function logout(){location.reload()}

function addCustomer(){
let name=document.getElementById("custName").value
let phone=document.getElementById("custPhone").value
let address=document.getElementById("custAddress").value

let table=document.getElementById("customerTable")
let row=table.insertRow()

row.insertCell(0).innerText=name
row.insertCell(1).innerText=phone
row.insertCell(2).innerText=address

let action=row.insertCell(3)
action.innerHTML="<button onclick='deleteRow(this)'>Delete</button>"
}

function deleteRow(btn){btn.parentNode.parentNode.remove()}

function bookGas(){
let customer=document.getElementById("bookingCustomer").value
let qty=document.getElementById("bookingQty").value

let table=document.getElementById("bookingTable")
let row=table.insertRow()

row.insertCell(0).innerText=bookingId++
row.insertCell(1).innerText=customer
row.insertCell(2).innerText=qty
row.insertCell(3).innerText="Pending"
}

function customerBookGas(){
    let name = document.getElementById("custBookingName").value;
    let qty = parseInt(document.getElementById("custBookingQty").value);

    if(!name || qty <= 0){
        alert("Please enter valid name and quantity.");
        return;
    }

    // Update stock
    let stockElem = document.getElementById("stockCount");
    let currentStock = parseInt(stockElem.innerText.replace(/\D/g,'')); // extract number
    if(qty > currentStock){
        alert("Not enough stock available!");
        return;
    }

    currentStock -= qty;
    stockElem.innerText = "Available Cylinders: " + currentStock;

    // Add booking to table
    let table = document.getElementById("customerBookingTable");
    let row = table.insertRow();
    row.insertCell(0).innerText = bookingId++;
    row.insertCell(1).innerText = qty + " Cylinders";
    row.insertCell(2).innerText = "Pending";

    alert("Booking successful! Stock updated.");
}


function addCylinder(){
let id=document.getElementById("cylinderId").value
let status=document.getElementById("cylinderStatus").value

let list=document.getElementById("cylinderList")
let item=document.createElement("li")
item.innerText="Cylinder " + id + " - " + status
list.appendChild(item)
}

function updateDelivery(){alert("Delivery status updated")}

function generateBill(){alert("Bill Generated")}

function recordPayment(){alert("Payment recorded")}

function updateStock(){document.getElementById("stockCount").innerText="Stock updated"}

function showReport(type){alert(type + " Report Generated")}

function addSupplier(){
let name=document.getElementById("supplierName").value
let contact=document.getElementById("supplierContact").value

let list=document.getElementById("supplierList")
let item=document.createElement("li")
item.innerText=name + " - " + contact
list.appendChild(item)
}
