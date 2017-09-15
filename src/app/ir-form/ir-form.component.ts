import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/bs-moment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-ir-form',
  templateUrl: './ir-form.component.html',
  styleUrls: ['./ir-form.component.css']
})
export class IrFormComponent implements OnInit {

public modalRef: BsModalRef;

 public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  datepickerModel: Date;

   public openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, {class: 'gray modal-lg'}));
  }
}
