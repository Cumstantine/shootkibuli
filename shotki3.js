function multi(){
    let inp1= document.getElementById("inp_1").value,
    inp2= document.getElementById("inp_2").value;
    
    let p = document.createElement("p");
    
    document.body.append(p);
    p.append(inp1*inp2);
    
}