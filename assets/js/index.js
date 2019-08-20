$(function () {
    var itemElement="";
    productList.forEach(obj => {
        itemElement+='<div class="item">';
        // itemElement+='<div><img src="../assets/img/img-company-intro.png"></div>';
        itemElement+='<div><img src="'+obj.url+'"></div>';
        itemElement+=' <div>'+obj.title+'</div>';
        itemElement+='</div>';

    });

    $(".wp-product .content-product").append(itemElement)


})

