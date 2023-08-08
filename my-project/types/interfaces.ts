interface IUserBasic {
  email: string;
}

export interface IUserLogin extends IUserBasic {
  password: string;
}

interface IArticleBasic {
  titel: string; // added by moulay
  article: string; // added by moulay
  categorieId: number;
  categorie: string; // vente/achatldemade
  subcategorieId: number;
  subcategorie: string; //voiture/maison
  // المواصفات
  options: Record<string, string | number>; // {marue:mercedes,moteur:disel}
  lieuId: number;
  lieu: string; // teyaret trarza
  //description: string;
  prix: number;
  userId: number;
}

export interface IArticleInDB extends IArticleBasic {
  id: number;
  description: string;
}
export interface IArticleInput extends IArticleBasic {
  description: string;
}
