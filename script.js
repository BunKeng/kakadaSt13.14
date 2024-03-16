var product = [{
        id:1,
        img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ 13580661-54fd-4a68-8e2f-c8207e3026eb/air-jordan-1-low-mens-shoes-z3Tl2VeJ.png',
        name: 'Nike',
        price: 150,
        description: 'Nike Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima odio    mollitia dolor veniam laudantium!',
        type: 'shoes'
    },
    {
        id:2,
        img:'https://www.nike.com/t/boston-celtics-icon-edition-2022-23-dri-fit-nba-swingman-jersey-JZM4Sm/DN1997-312',
        name: 'Boston Celtics Icon Edition 2022/23',
        price: 120,
        description: 'Boston Celtics Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima odio mollitia dolor veniam laudantium!',
        type: 'shirt'
    },
    {
        id:3,
        img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/485358b3-c1c5-41d2-8598-f8baa78a23f5/metcon-9-mens-workout-shoes-00kjPz.png',
        name: 'Nike Metcon 9',
        price: 150,
        description: 'Nike Metcon 9 Celtics Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima odio mollitia dolor veniam laudantium!',
        type: 'shoes'
    }];

    $(document).ready(()=>{
        var hmtl = '';
        // i = 0
        for (let i= 0; i< product.length ; i++){
            html+= `<div class="product-items" ${product[i].type}>
                        <img class="product-img"src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a035d0f5-c6f1-4011-b6f5-6da994406b86/air-force-1-07-shoes-ZL3fVs.png" alt="">
                        <p style="font-size: 1.2vw;">Product name</p>
                        <p style="font-size: 1.5vw;">15$</p>
                    </div>`;

        }
    })