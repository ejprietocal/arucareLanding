import { Injectable, signal, WritableSignal } from '@angular/core';
import { Galleria } from '../interfaces/galleria';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

    isActive: WritableSignal<boolean> = signal(false); // Signal compartida

    getData() : Galleria[] {
        return [
            {
                itemImageSrc: 'assets/images/carousel_1.jpg',
                thumbnailImageSrc: 'assets/images/carousel_1.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'assets/images/carousel_2.jpg',
                thumbnailImageSrc: 'assets/images/carousel_2.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'assets/images/carousel_3.jpg',
                thumbnailImageSrc: 'assets/images/carousel_3.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'assets/images/carousel_4.jpg',
                thumbnailImageSrc: 'assets/images/carousel_4.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'assets/images/carousel_5.jpg',
                thumbnailImageSrc: 'assets/images/carousel_5.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
            {
                itemImageSrc: 'assets/images/carousel_6.jpg',
                thumbnailImageSrc: 'assets/images/carousel_6.jpg',
                alt: 'Description for Image 6',
                title: 'Title 6'
            },

        ];
    }

    getImages() : Promise<Galleria[]> {
        return Promise.resolve(this.getData());
    }
    toggleState() {
      this.isActive.update(value => !value); // Alternar valor
    }

};
