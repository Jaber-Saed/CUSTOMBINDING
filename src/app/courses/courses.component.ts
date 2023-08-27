import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses = [
    {
      id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.'
    },
    {
      id: 102, name: 'Angular for beginners', author: 'John Heikela', duration: 48, type: 'Premium',
      price: 120.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 103, name: 'React for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 104, name: 'Telwind for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 30.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 105, name: 'Bootstrab for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 106, name: 'Sass for beginners', author: 'John Heikela', duration: 48, type: 'Premium',
      price: 10.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 107, name: 'Radex for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 108, name: 'Nesxt.js for beginners', author: 'John Heikela', duration: 48, type: 'Premium',
      price: 103.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 109, name: 'Pstgrass for beginners', author: 'John Heikela', duration: 48, type: 'Premium',
      price: 10.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.'
    },
    {
      id: 102, name: 'Angular for beginners', author: 'John Heikela', duration: 48, type: 'Premium',
      price: 120.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 103, name: 'React for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 104, name: 'Telwind for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 30.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },
    {
      id: 105, name: 'Bootstrab for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: '../../assets/wallpaer.png',
      description: 'In this course you will learn the fundamentals of JavaScript.Th'
    },

  ]

  getTotalCourses() {
    return this.courses.length;
  }

  getTotalFreeCourses() {
    return this.courses.filter(course => course.type === 'Free').length;
  }

  getTotalPremiumCourses() {
    return this.courses.filter(course => course.type === 'Premium').length;
  }


  courseCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data;
  }

  handleEvent(data: Event) {
    // console.log(data); // Output: Event emitted from child
  }


  searchText: string = ''



  onSeaarchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }


}
