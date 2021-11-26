import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { CadUsuarioService } from 'src/app/core/service/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { errorMonitor } from 'events';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 //loginForm: FormGroup;
  submitted = false;
  hide = true;
  chide = true;
  usuarioModel: UsuarioModel = new UsuarioModel();
  frmCadUsuario: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cadUsuarioService: CadUsuarioService

  ) {}


  ngOnInit() {
    //this.buildForm();
    this.frmCadUsuario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)] ],
      password: ['', Validators.required],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      userRole: ['USUARIO', Validators.required],


    });
    console.log("Entrou na inicialização");

  }


  buildForm(): void {

    this.frmCadUsuario = this.formBuilder.group({
      name: this.formBuilder.control(this.usuarioModel.name, Validators.required),
      email: this.formBuilder.control(this.usuarioModel.email, Validators.required),
      cpf: this.formBuilder.control(this.usuarioModel.cpf),
      password: this.formBuilder.control(this.usuarioModel.password, Validators.maxLength(20)),
      userRole: this.formBuilder.control(this.usuarioModel.userRole, Validators.maxLength(20)),
      address: this.formBuilder.control(this.usuarioModel.address, Validators.maxLength(20)),
      phoneNumber: this.formBuilder.control(this.usuarioModel.phoneNumber),

    });

  }

  cadastrar(): void  {

    Object.assign(this.usuarioModel, this.frmCadUsuario.value);

      //this.loaderService.showSpinner();
      this.cadUsuarioService.post(this.usuarioModel).subscribe(res => {

        console.warn(res);

        if (res.success) {
          //this.loaderService.closeSpinner();
         // this.toastr.success('Cadastrado com sucesso.', 'Cadastro de cliente');
          this.frmCadUsuario.reset();
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

  get f() {
    return this.frmCadUsuario.controls;
  }

  clearForm(){
    this.frmCadUsuario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)] ],
      password: ['', Validators.required],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(14)]],
      userRole: ['USUARIO', Validators.required],


    });


  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.frmCadUsuario.invalid) {
      return;
    } else {
      this.cadastrar();
      alert("Cadastrado");

      this.router.navigate(['/dashboard/main']);
    }
  }


}
