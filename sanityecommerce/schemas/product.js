export default {
    name:'product',
    title:'Produit',
    type:'document',
    fields: [
        {
            name:'image',
            title:'Image',
            type: 'array',
            of:[{ type:'image'}],
            options: {
                    hotspot:true,
            }
        },
        {
            name:'name',
            title:'Titre',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength: 90,
            }
        },
        {
            name:'price',
            title:'Prix',
            type:'number',
        },
        {
            name:'details',
            title:'Détails',
            type:'string',
        },
        {
            title: "Rating",
            name: "rating",
            type: "rating", // Required
            description: "Apply a rating out of 5 stars",
            options: {
              stars: 5, // Optional. Default 5.
            }
          },
    ]
}
