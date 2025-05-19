import { Component } from '@angular/core';
import { CardServiceComponent } from '../shared/card-service/card-service.component';

@Component({
  selector: 'app-services',
  imports: [
    CardServiceComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = [
    {
      title: 'Doctor Services',
      description: 'Professional doctor services—routine check-ups, medical consultations, and personalized care in the comfort of your stay.',
      details: 'Professional doctor services—routine check-ups, medical consultations, and personalized care in the comfort of your stay.',
      image: 'assets/images/logoTrinity.png'
    },
    {
      title: 'Description IV',
      description: 'IV Hydration Therapy delivers essential fluids, electrolytes and vitamins directly into your bloodstream, promoting rapid recovery and enhanced well-being. Ideal for boosting immunity and rejuvenating after intense activities or dehydration.',
      details: 'IV\'s that we offer: Hangover IV, Dehydration recovery IV, Immunity boost with vit. C. muscle recovery booster with magnesium',
      image: 'assets/images/logoTrinity.png'
    },
    {
      title: 'Nurse Services',
      description: 'We provide different care services within the comfort and convenience of your own accommodation. We are dedicated to providing proven quality care to our clients and their families. Whether you want peace of mind on your vacation, respite care, wound care, assistance with ADL\'s, we design a tailored care plan fitting your personal needs and preferences.',
      details: 'Nurse Services: Assistance with ADL\'s, wound care, respite care, assistance with ADL\'s, wound care, respite care, assistance with ADL\'s, wound care, respite care',
      image: 'assets/images/logoTrinity.png'
    },
    {
      title : 'Physiotherapy Services',
      description: 'We are dedicated to delivering top-notch Therapy services right to your doorstep, even during the holiday season. With our extended office hours, we stand ready to support your recovery and well-being, anytime and anywhere you need. Our mission at Roots Therapy is to provide personalized and professional rehabilitation services in the comfort of your own environment.',
      details : ' With a team of experienced therapists, we tailor treatments to meet your individual needs, ensuring the highest level of care and convenience. Whether you\'re recovering from an injury, managing a chronic condition, or seeking preventive care, we\'re here to support your journey to optimal health and well-being. Experience the difference with Roots Therapy - where quality care meets comfort.',
      image: 'assets/images/logoPhysio.png'
    }
  ];
}
