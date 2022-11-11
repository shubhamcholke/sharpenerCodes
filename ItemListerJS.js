var form = document.getElementById('addForm')

var itemList = document.getElementById('items')

var filter = document.getElementById('filter')

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterItem)

function addItem(e){
    e.preventDefault();
  
    var newItem = document.getElementById('item').value;
    var discription = document.getElementById('discription').value
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(discription))
    
    var deleteBTN = document.createElement('button');
    deleteBTN.className = 'btn btn-danger btn-sm float-right delete'
    deleteBTN.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBTN)
    itemList.appendChild(li)

    var editBTN = document.createElement('button')
    editBTN.className = 'btn btn-sm float-right edit'
    editBTN.appendChild(document.createTextNode('edit'))
    li.appendChild(editBTN)
    
    
    itemList.appendChild(li)
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')){
            var li  = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

function filterItem(e) {
    var text = e.target.value.toLowerCase();

    var items = document.getElementsByTagName('li') 
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var discription = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || discription.toLowerCase().indexOf(text) != -1){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
                
      });
}

