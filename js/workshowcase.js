const data  = [
    {
    id:'first-product',
    content:'<img src="./modal/Kelloggs-Granola.jpg" alt="" class="img-fluid py-3">'
},
{
    id:'second-product',
    content:'<img src="./modal/Pringles-Sadaqah-Pack.jpg" alt="" class="img-fluid py-3">'
   
},{
    id:'third-product',
    content:'<img src="./modal/Kelloggs-bar.jpg" alt="" class="img-fluid py-3">'  
},{
    id:'fourth-product',
    content:'<img src="./modal/Kelloggs-bar.jpg" alt="" class="img-fluid py-3">'  
},{
    id:'fifth-product',
    content:'<img src="./modal/Pringles-JL-Pack.jpg" alt="" class="img-fluid py-3">'  
},{
    id:'six-product',
    content:'<img src="./modal/Flipkart-Supermart.jpg" alt="" class="img-fluid py-3">'  
},
{
    id:'seventh-product',
    content:'<img src="./modal/Flipkart-SuperMart-ads.jpg" alt="" class="img-fluid py-3">'
},    
{
    id:'eigth-product',
    content:'<img src="./modal/Lakme-Festive-2017.jpg" alt="" class="img-fluid py-3">'
},
{
    id:'ninth-product',
    content:'<img src="./modal/IBB-Campaign.jpg" alt="" class="img-fluid py-3">'
},
]

function getData(array,id){
    return array.find(x => x.id === id)
}


function modalClick(event){
    var id = event.target.id;
    var value  = getData(data,id);
    document.getElementById('modal-body').innerHTML = value.content;
}