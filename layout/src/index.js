import('nav/Header')
.then((header)=>{
    console.log('header',header);
    const element = document.createElement("div");
    element.innerHTML ='layout';
    document.body.appendChild(element);
    document.body.appendChild(header.default());
})

