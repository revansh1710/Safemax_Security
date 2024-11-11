import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../consultation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  consultations: any[] = [];
  statusOptions = ['pending', 'confirmed', 'canceled'];
  message = '';

  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
    this.getConsultations();
  }

  getConsultations(): void {
    this.consultationService.getAllConsultations().subscribe(
      (data) => this.consultations = data,
      (error) => console.error('Error fetching consultations:', error)
    );
  }

  updateStatus(id: string, newStatus: string): void {
    this.consultationService.updateStatus(id, newStatus).subscribe(
      () => {
        this.consultations = this.consultations.map(consultation =>
          consultation._id === id ? { ...consultation, status: newStatus } : consultation
        );
        Swal.fire({
          text:'success',
          icon:'success'
        })
      },
      (error) => {
        console.error('Error updating status', error);
      }
    );
  }
}
