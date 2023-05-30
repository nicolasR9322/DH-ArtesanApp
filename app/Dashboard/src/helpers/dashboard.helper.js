export const generateCards = (products, users) => {
  return [
    {
      id: 1,
      quantity: products.total,
      color: "primary",
      title: "Total de productos",
      icon: "fa-box",
      href: "http://localhost:3030/api/products"
    },
    {
      id: 2,
      quantity: users.total,
      color: "secondary",
      title: "Total de usuarios",
      icon: "fa-users",
      href: "http://localhost:3030/api/users"
    },
    {
      id: 3,
      quantity: Object.keys(products.countByCategory).length,
      color: "danger",
      title: "Total de categorias",
      icon: "fa-layer-group",
      href: "/#categories"
    },
  ];
};
