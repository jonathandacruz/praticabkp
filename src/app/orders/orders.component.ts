import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { menuOrders, OrdersModel } from './orders.models';
import { CadOrdersService } from './orders.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioModel } from '../core/models/usuario.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  frmOrders: FormGroup;
  hide3 = true;
  ordersModule: OrdersModel = new OrdersModel();
  userModule : UsuarioModel = new UsuarioModel();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cadOrdersService: CadOrdersService,


    ) {

    this.initFormOrders();
    this.addMenu();
  }
  ngOnInit(): void {
     null;
  }

  initFormOrders() {
    this.frmOrders = this.fb.group({

      clientId: [null, [Validators.required]],
      employeeId: [null, [Validators.required]],
      restaurantId: [null, [Validators.required]],
      menuOrders: this.fb.array([]),
    });
  }
  submit() {
    Object.assign(this.ordersModule, this.frmOrders.value);

    console.log("Aqui");
    //this.loaderService.showSpinner();
    this.cadOrdersService.post(this.ordersModule).subscribe(res => {

      console.warn(res);
      alert("Pedido Cadastrado com Sucesso!");
      location.reload();

      if (res.success) {
        //this.loaderService.closeSpinner();
       // this.toastr.success('Cadastrado com sucesso.', 'Cadastro de cliente');
        this.frmOrders.reset();
        //this.dgRef.close(res.data);
        console.log("Cadastrou");
      } else {
        console.error(res);
        //this.toastr.error(res.errors, 'Cadastro de cliente')
      }
    },(err: HttpErrorResponse) => {
      //this.loaderService.closeSpinner();
      console.warn(err);
      //this.toastr.error(err.error.errors, '');
    });

  }

  get menuOrders() {
    return this.frmOrders.controls['menuOrders'] as FormArray;
  }

  addMenu() {
    const menuForm = this.fb.group({
      menuId: [null, Validators.required],
      quantity: [0, Validators.required],
    });

    this.menuOrders.push(menuForm);
  }
  idBuscado: any;

buscarId(): void {
  this.cadOrdersService.get().subscribe(res => {

     // PEGAR O VALOR DO FORMULARIO (<HTMLInputElement>document.getElementById('1')).value;
    (<HTMLInputElement>document.getElementById('usrName')).value = res["name"];

    console.warn(res);



  },(err: HttpErrorResponse) => {
    //this.loaderService.closeSpinner();
    console.warn(err);
    //this.toastr.error(err.error.errors, '');
  });

  alert("Fui clicado e o valor do input é: " + this.idBuscado)
}

}
