const data  = [
    {
    id:'first-product',
    title:'product name 1',
    content:'product content 1'
},
{
    id:'second-product',
    title:'product name 2',
    content:'product content 2'
},{
    id:'third-product',
    title:'product name 3',
    content:'product content 3'
},
{
    id:'fourth-product',
    title:'product name 4',
    content:'product content 4'
},
{
    id:'fifth-product',
    title:'product name 5',
    content:'product content 5'
},
{
    id:'sixth-product',
    title:'product name 6',
    content:'product content 6'
},
{
    id:'seventh-product',
    title:'product name 7',
    content:'product content 7'
},
]

function getData(array,id){
    return array.find(x => x.id === id)
}


function modalClick(event){
    var id = event.target.id;
    var value  = getData(data,id);
    document.getElementById('modal-title').innerHTML = value.title;
    document.getElementById('modal-body').innerHTML = value.content;
}