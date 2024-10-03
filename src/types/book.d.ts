
export interface BookType {
 id: string;
 img: string;
 title: string;
 author: string;
 audible: string;
 physicalVersion: string;
 favorite: boolean;
 toggleFavorite: (title: string) => void;
}
   