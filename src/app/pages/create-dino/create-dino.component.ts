import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DinoHistoricalPeriod } from 'src/app/core/services/dinos/api/api-dino.models';
import { historicalPeriod } from 'src/app/core/services/dinos/dino-data';
import { map, switchMap, of } from 'rxjs';
import { Dino } from 'src/app/core/services/dinos/dino.models';
import { DinosService } from 'src/app/core/services/dinos/dinos.service'


@Component({
  selector: 'app-create-dino',
  templateUrl: './create-dino.component.html',
  styleUrls: ['./create-dino.component.scss']
})
export class CreateDinoComponent {

  //FormGroup --> engloba los campos del formulario
  public dinoForm?: FormGroup;
  public historicalPeriodEl: DinoHistoricalPeriod[] = historicalPeriod;
  //para saber cuándo estamos editando y cuándo no
  public canEdit: Boolean = false;
  public dinoId?: string;
  //creada para el canDeactivate
  public isDinoCreated: boolean = false
  
  //activateRoute para poder hacer un queryParam y así poder editar un dino (por su _id)
  constructor (
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private dinosService: DinosService,
    private router: Router) {
   
    //si en el queryParams viene el id editaremos al dino sino crearemos un dino nuevo
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      //para quedarme solo con su id
      switchMap((id: string) => {
        if(!id) {
          //sino hay id el dino será undefined
          return of(undefined)
        } else {
          this.dinoId = id
          return this.dinosService.getYourDinoDetail(id);
        }
      })
    ).subscribe((dino?: Dino) => {
      //si hay un dino definido canEdit pasa a ser true
      this.canEdit = !!dino;
      this.createNewForm(dino);

    })
  }

  public createNewDino() {
    if(!this.dinoForm?.valid) { return; }
    
    const dinoRequest = this.canEdit && this.dinoId ? this.dinosService.editYourDino(this.dinoId, this.dinoForm?.value) : this.dinosService.createYourDino(this.dinoForm?.value)
 
  //una vez que sabemos si vamos a editar o crear nos suscribimos a uno u otro - para luego resetar el form y navegar a la lista de dinos
    dinoRequest.subscribe(() => {
      this.isDinoCreated = true;
      //reseteamos el valor cuando todo haya ido ok
      this.dinoForm?.reset();
      //navegamos a your-dinos para ver el cambio
      this.router.navigate(['your-dinos']);
      
    })
  }

  public createNewForm(dino?: Dino) {
    //fb.group recibe un objeto en el que añadiré todos los campos que quiera que tenga mi formulario
    this.dinoForm = this.fb.group({
      //formControl hace referencia a un campo específico
      name: new FormControl(dino?.name || '', [Validators.required]),
      nameMeaning: new FormControl(dino?.nameMeaning || '', [Validators.required]),
      weight: new FormControl(dino?.weight || '', [Validators.required]),
      length: new FormControl(dino?.length || '', [Validators.required]),
      height: new FormControl(dino?.height || '', [Validators.required]),
      picture: new FormControl(dino?.picture || '', [Validators.required]),
      type: new FormControl(dino?.type || '', [Validators.required]),
      characteristics: new FormControl(dino?.characteristics || '', [Validators.required])
    })
  }
}
