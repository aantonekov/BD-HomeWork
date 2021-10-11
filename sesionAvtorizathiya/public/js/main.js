const productList = document.forms.productList

const getInfo = async () => {
    const data = await axios.get('/server');
    console.log('data',data);
    const serchProduct = data.data.serchProduct;
    return { serchProduct } ;
}

const renderCard = async () => {
    const { serchProduct } = await getInfo();

    const productCard = await serchProduct.reduce( (div, prod) => {
        div = `${div}
        <div class="card" value="${prod._id}">
           Названия: ${prod.name}<br>
           Категория товара: ${prod.kind}<br>
           Цена: ${prod.price}$
        </div><br><br>`;
        return div
    },'');
    
    productList.innerHTML = productCard;
} 
renderCard()