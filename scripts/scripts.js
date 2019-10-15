var arr = ['Sagar negi', 'Computer Engg'];
function a() {
    for (let i = 0; i <= arr.length-1; i++) {
        var para = document.createElement("p");
        var node = document.createTextNode(arr[i]);
        para.appendChild(node);
        var element = document.getElementById("userList");
        
        var image = document.getElementById('userImage').innerHTML = '<img src="images/hh.jpg" style="width:100%"/>';
        
        var image = document.getElementById('userImage1').innerHTML = '<img src="images/download.jpg" style="width:100%"/>';
        element.appendChild(para);
        
    
    }



}
a()

