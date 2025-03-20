import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../interfaces/doctor';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-team',
  imports: [
    CommonModule,
    FieldsetModule,
    AvatarModule,
    DividerModule
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  showMore: { [key: number]: boolean } = {};


  public doctors : Doctor[] = [
    {
      image: 'assets/images/doctor1.png',
      name: 'Juaquin van Trigt, MD',
      nationality: 'Aruban',
      education: 'University of Maastricht, The Netherlands: MD 2004/Residency in Family Medicine 2012',
      description: 'I am a local Family Physician and have been working in our local practice since 2013. I take pride in giving the best medical care with personal detail to each patient. Understanding that being away from home in a different country can give us a feeling of insecurity when it comes to feeling ill/unwell having a doctor who U can feel comfortable around makes a big difference.'
    },
    {
      image: 'assets/images/doctor2.png',
      name: 'Joke Hertogen, MD',
      nationality: 'Belgian',
      education: 'Free University of Brussels, Belgium: MD 2006/Residency in Family Medecine 2008/Residency in Youth Health Care 2016',
      description: ' I am a Family Physician, originally from Belgium, living and working on the Island for now over 6 years. As a person who loves to travel and as a mother of 3, I do understand very well the need of a safe place and practice when it comes to healthcare abroad. Therefore I always try to make patients as comfortable as possible and I try to think and look together what can be done to get you, your family member or your child healthy again in a way that feels safe and professional and that you can still enjoy as much as possible of your holiday. I am experienced in different fields, with special affection for children and women health care.'
    },
    {
      image: 'assets/images/doctor3.png',
      name: 'Nick Duindam, MD',
      nationality: 'Dutch',
      education: 'Vrije Universiteit Amsterdam (Free University of Amsterdam) The Netherlands: MD 2013/Residency in Family Medicine 2022',
      description: 'I am a Dutch Medical Doctor who has decided to move to Aruba in 2020. After having worked as a doctor at various locations for more than 10 years, mainly focusing on medical emergencies, I decided to broaden my knowledge and took up the family physician residency here on Aruba (finishing 01/2025). I focus on giving patient-centered care and will make you feel comfortable and in good hands, understanding that any medical event during your holiday can make you feel uncertain or anxious, especially being in a foreign country.'
    },

  ]

  toggleShowMore(index: number) {
    this.showMore[index] = !this.showMore[index];
  }
}
