import { Injectable } from '@angular/core';
import { Bien } from './bien.model';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  private biens: Bien[];

  constructor() {
    this.biens = [
      //id, title, description, price, image, state(number), category, sale(boolean), createdAt(date)
      { id: 1, title: 'PS1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', price: 300000, image: 'https://source.unsplash.com/1080x728/?computer,battle', state: 0, category: 'Jeux vidéos', sale: true, createdAt: new Date(2019,12,15)  },
      { id: 2, title: 'PS2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', price: 300000, image: 'https://source.unsplash.com/1080x728/?computer,overwatch', state: 0, category: 'Jeux vidéos', sale: true, createdAt: new Date(2020,12,16)  },
      { id: 3, title: 'PS3', description: 'lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', price: 300000, image: 'https://source.unsplash.com/1080x728/?computer,fortnite', state: 0, category: 'Jeux vidéos', sale: true, createdAt: new Date(2020,12,17)  },
      { id: 4, title: 'PS4', description: 'last cri ps', price: 300000, image: 'https://source.unsplash.com/1080x728/?computer,pokemon', state: 0, category: 'Jeux vidéos', sale: true, createdAt: new Date(2020,12,18)  },
      { id: 5, title: 'PS5', description: 'last cri ps', price: 300000, image: 'https://source.unsplash.com/1080x728/?computer,mario', state: 0, category: 'Jeux vidéos', sale: true, createdAt: new Date(2020,12,19)  },
      { id: 6, title: 'XBox', description: 'last cri console', price: 300000, image: 'https://source.unsplash.com/1080x728/?computer,game', state: 0, category: 'Jeux vidéos', sale: true, createdAt: new Date(2020,12,20)  },
    ];
  }

  getAllBiens(): Bien[] {
    return this.biens;
  }

  getBienById(id: number): Bien {
    const bienFound = this.biens.find(
      (b:Bien) => {
      return b.id == id;
    });
    return bienFound as Bien;
  }

  addBien(newBien: Bien): void {
    this.biens.push(newBien);
  }

  updateBien(bienUpdated: Bien): void {
    var oldBien = this.biens.find(
      (b:Bien) => {
        return b.id === bienUpdated.id
      }
    );
    if(oldBien) {
      oldBien = {...bienUpdated}
    }
  }

  getLastId(): number {
    return this.biens[this.biens.length - 1] ? this.biens[this.biens.length - 1].id : 0;
  }
}
