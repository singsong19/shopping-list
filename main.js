const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

    function onAdd() {
        const text = input.value;
        if(text === '') {
            input.focus();
            return;
        }

        const item = createItem(text);
        items.appendChild(item);
        item.scrollIntoView({ block: 'center' });
        input.value ='';
        input.focus();
    }
    let id = 0; //실제에서는 UUID, 해쉬코드등을 이용할것.
    function createItem(text) {
        const itemRow = document.createElement('li')
        itemRow.setAttribute('class', 'item__row');
        itemRow.setAttribute('data-id', id)
            itemRow.innerHTML = `
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fas fa-trash" data-id=${id}></i>
                </button>
            </div>
            <div class="item__divier"></div>
            `;
        id++;
        return itemRow;
    } 
    
    addBtn.addEventListener('click', () =>{
        onAdd();
    })

    input.addEventListener('keypress', (event) =>{
        if(event.key === 'Enter') {
            onAdd()
        }
    }) ;

    //event-delegation
    items.addEventListener('click', event =>{
        const id = event.target.dataset.id;
        if(id) {
            const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
            toBeDeleted.remove();
        }
    })