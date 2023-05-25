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

  //FormGroup --> includes the fields of the form
  public dinoForm?: FormGroup;
  public historicalPeriodEl: DinoHistoricalPeriod[] = historicalPeriod;
  //to know when we are editing and when we are not
  public canEdit: Boolean = false;
  public dinoId?: string;
  //created for the canDeactivate
  public isDinoCreated: boolean = false
  
  //activateRoute to be able to do a queryParam to be able to edit a dino (by its _id)
  constructor (
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private dinosService: DinosService,
    private router: Router) {
   
    //if the queryParams contains the id, we will edit the dino, otherwise we will create a new dino
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      //to be left alone with your id
      switchMap((id: string) => {
        if(!id) {
          //if there is no id the dino will be undefined
          return of(undefined)
        } else {
          this.dinoId = id
          return this.dinosService.getYourDinoDetail(id);
        }
      })
    ).subscribe((dino?: Dino) => {
      //if there is a dino defined canEdit becomes true
      this.canEdit = !!dino;
      this.createNewForm(dino);

    })
  }

  public createNewDino() {
    if(!this.dinoForm?.valid) { return; }
    
    const dinoRequest = this.canEdit && this.dinoId ? this.dinosService.editYourDino(this.dinoId, this.dinoForm?.value) : this.dinosService.createYourDino(this.dinoForm?.value)
 
  //once we know whether we are going to edit or create we subscribe to one or the other - and then reset the form and navigate to the list of dinos
    dinoRequest.subscribe(() => {
      this.isDinoCreated = true;
      //reset the value when everything has gone ok
      this.dinoForm?.reset();
      //we navigated to your-dinos to see the change
      this.router.navigate(['your-dinos']);
      
    })
  }

  public createNewForm(dino?: Dino) {
    //fb.group receives an object in which I will add all the fields I want my form to have
    this.dinoForm = this.fb.group({
      //formControl refers to a specific field
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
