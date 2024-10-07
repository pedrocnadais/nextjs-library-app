
export interface BookType {
 id: string;
 img: string;
 title: string;
 author: string;
 audio: string;
 written: string;
 favorite: boolean;
 toggleFavorite: (title: string) => void;
}
   