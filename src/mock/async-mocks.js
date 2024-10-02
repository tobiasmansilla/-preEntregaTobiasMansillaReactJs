const mockItems = [
    { id: '1', name: 'Great Adventures (Canción)', category: 'musica', price: 500, description: '"Great Adventures" de Boldy James & The Alchemist es una canción lanzada en Super Tecmo Bo en diciembre de 2021.', image: '/public/img/song-great-adventures.png' },
    { id: '2', name: 'A.D.R.O.M.I.C.F.M.S.', category: 'albumes', price: 1500, description: 'A.D.R.O.M.I.C.F.M.S. (acrónimo de la oración “All diz ratchets on me, I can’t feel ma soul”) es el mixtape debut de Yung Beef, lanzado el 6 de diciembre del año 2013. Consta de 10 pistas en su versión estándar, poco tiempo después se agregaría el bonus track del mixtape, “Cryin’ Fo’ Poor Love”.', image: '/public/img/album-yungbeef.png' },
    { id: '3', name: 'Nadie Sale Vivo de Aquí', category: 'albumes', price: 1250, description: 'Nadie sale vivo de aquí es el cuarto álbum de estudio como solista del músico argentino Andrés Calamaro, puesto a la venta en 1989 por CBS. Aparece en el puesto 60 de "los 100 mejores álbumes del rock argentino" según la revista Rolling Stone.', image: '/public/img/album-calamaro.png' },
    { id: '4', name: 'Casiopea (Vinilo)', category: 'musica', price: 3550, description: 'Imperdible re-edición en vinilo naranjo transparente del álbum homónimo de la banda Jazz-Fusión japonesa, Casiopea. Vinilo nuevo, en bolsa plástica sin sellar desde origen. Año: 2022 (lanzado originalmente en 1979). Estilo: Jazz, Fusión, Funk. Estado : Mint /Nuevo', image: '/public/img/vinyl-casiopea.png' },
    { id: '5', name: 'Remera Sponsor Dios - YSY A', category: 'merchandising', price: 1550, description: 'Remera Reflectiva YSY A | Edición 2024. La vuelta de un clásico reversionado. Corte oversize, confeccionada en 100% algodón. Todas nuestras prendas son Hechas a Mano y en Buenos Aires, Argentina.', image: '/public/img/merch-hecho-a-mano.png' },
    { id: '6', name: 'SUPERNOVA (Vinilo)', category: 'musica', price: 2550, description: 'Supernova, el álbum de Ralphie Choo, prensado por primera vez en vinilo edición limitada color naranja. Incluye una fanzine diseñada por Ralphie.', image: '/public/img/vinyl-supernova.png' }
];

export const fetchAllItems = async () => {
    return mockItems;
};

export const fetchItemsByCategory = async (categoryId) => {
    return mockItems.filter(item => item.category === categoryId);
};

export const fetchItemById = async (itemId) => {
    return mockItems.find(item => item.id === itemId);
};