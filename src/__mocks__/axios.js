module.exports = {
  get: jest.fn(() => {
    return Promise.resolve({
      data: {
        restaurant: {
          path: "Le Pain Quotidien",
          name: "Le Pain Quotidien - Montorgueil",
          categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie"]
        },
        menu: {
          Brunchs: [
            {
              id: "1519055545-88",
              title: "Brunch authentique 1 personne",
              description: "Assiette de jambon cuit",
              price: "25.00",
              picture: "https://item-image.jpg",
              popular: true
            },
            {
              id: "1519055545-89",
              title: "Brunch vegan",
              description: "Falafels bio, houmous bio",
              price: "25.00",
              picture: "https://photo.jpg"
            }
          ]
        }
      }
    });
  })
};
